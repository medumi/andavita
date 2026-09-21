export const REMINDER_BASE=510000;
export const TEST_ID=519999;
export const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
export function buildReminderPlan(settings,now=new Date()){
 if(!settings?.enabled)return [];
 const days=[...new Set((settings.days||[]).filter(d=>Number.isInteger(d)&&d>=0&&d<=6))];
 if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(settings.time||''))throw Error('Ungültige Uhrzeit');
 const [h,m]=settings.time.split(':').map(Number);const items=[];
 // Below iOS' 64-pending limit, leaving room for a test and other app messages.
 for(let offset=0;offset<56;offset++){
  const at=new Date(now);at.setDate(now.getDate()+offset);at.setHours(h,m,0,0);
  if(at<=now||!days.includes(at.getDay())||(offset===0&&settings.practicedToday))continue;
  items.push({id:REMINDER_BASE+offset,title:'Zeit für deinen Moment',body:'Ein bisschen Bewegung oder Ruhe – in deinem Tempo. Dein Andavita wartet auf dich.',schedule:{at,allowWhileIdle:true},isExactNotification:false,channelId:'andavita-rhythm',smallIcon:'ic_stat_andavita',extra:{kind:'rhythm',date:dateKey(at)}});
 }
 return items;
}
export const ownsReminder=n=>(n.id>=REMINDER_BASE&&n.id<REMINDER_BASE+56)||n.id===TEST_ID;
