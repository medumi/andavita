"""Render reusable Andavita intro/outro/lower-third templates. Requires Pillow and ffmpeg.
Usage: python3 render.py --config templates.json --output ../dist/media
The lower-third MOV is ProRes 4444 with alpha; MP4 is a visible preview on teal.
"""
import argparse,json,subprocess,math
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ap=argparse.ArgumentParser();ap.add_argument('--config',default=str(Path(__file__).with_name('templates.json')));ap.add_argument('--output',default=str(Path(__file__).parent.parent/'dist/media'));args=ap.parse_args()
cfg=json.loads(Path(args.config).read_text());out=Path(args.output);out.mkdir(parents=True,exist_ok=True)
W,H,FPS=1920,1080,25
fonts='/System/Library/Fonts/Supplemental/'
def font(name,size): return ImageFont.truetype(fonts+name,size)
bold=font('Arial Bold.ttf',112);serif=font('Georgia.ttf',70);sans=font('Arial.ttf',31);label=font('Arial.ttf',22)
teal=(33,78,73,255);cream=(251,250,247,255);gold=(247,200,115,255)
def ease(t):return 1-(1-max(0,min(1,t)))**3
def textcenter(d,text,y,f,fill):d.text((W/2,y),text,font=f,fill=fill,anchor='mt')
def frame(kind,t,duration,preview=False):
    lower=kind=='bauchbinde';im=Image.new('RGBA',(W,H),(0,0,0,0) if lower and not preview else teal if kind!='intro' else cream)
    layer=Image.new('RGBA',(W,H));d=ImageDraw.Draw(layer)
    fade=min(ease(t/0.85),ease((duration-t)/0.7))
    if lower:
        shift=int(80*(1-ease(t/.8)));x=110-shift;y=790
        d.rounded_rectangle((x,y,x+830,y+170),radius=17,fill=cream)
        d.rounded_rectangle((x,y,x+9,y+170),radius=4,fill=gold)
        d.text((x+42,y+28),cfg['lowerThird']['name'],font=font('Georgia.ttf',53),fill=teal)
        d.text((x+44,y+101),cfg['lowerThird']['role'],font=sans,fill=teal)
        d.text((1740,1010),'andavita',font=label,fill=cream,anchor='rs')
    else:
        ink=teal if kind=='intro' else cream
        y=int(24*(1-ease(t/.9)))
        textcenter(d,'andavita',310+y,bold,ink)
        d.rounded_rectangle((875,465,1045,470),radius=2,fill=gold)
        main=cfg['intro']['title'] if kind=='intro' else cfg['outro']['title']
        sub=cfg['intro']['subtitle'] if kind=='intro' else cfg['outro']['subtitle']
        textcenter(d,main,530+y,serif,ink)
        textcenter(d,sub,643+y,sans,ink)
        textcenter(d,'BEWEGUNG & RUHE',875,label,ink)
    layer.putalpha(layer.getchannel('A').point(lambda a:int(a*fade)));im.alpha_composite(layer)
    return im
for kind,duration in [('intro',5),('outro',6),('bauchbinde',8)]:
    for preview in ([False,True] if kind=='bauchbinde' else [False]):
        alpha=kind=='bauchbinde' and not preview
        name=kind+('-transparent.mov' if alpha else '-vorschau.mp4' if preview else '.mp4')
        codec=['-c:v','prores_ks','-profile:v','4','-pix_fmt','yuva444p10le'] if alpha else ['-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p','-movflags','+faststart']
        cmd=['ffmpeg','-y','-hide_banner','-loglevel','error','-f','rawvideo','-pix_fmt','rgba','-s',f'{W}x{H}','-r',str(FPS),'-i','-','-an']+codec+[str(out/name)]
        proc=subprocess.Popen(cmd,stdin=subprocess.PIPE)
        for n in range(duration*FPS):proc.stdin.write(frame(kind,n/FPS,duration,preview).tobytes())
        proc.stdin.close()
        if proc.wait()!=0:raise RuntimeError(name)
        frame(kind,2,duration,preview).save(out/(name.rsplit('.',1)[0]+'.png'))
        print(name,flush=True)
