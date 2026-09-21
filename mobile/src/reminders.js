import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { buildReminderPlan, ownsReminder, TEST_ID } from './reminder-plan.mjs';
export function setupReminders(){
 if(!Capacitor.isNativePlatform())return;
 let latest=null,lastSignature='',queue=Promise.resolve();
 const emit=detail=>window.dispatchEvent(new CustomEvent('andavita:notification-status',{detail}));
 async function cancelOwned(){const pending=await LocalNotifications.getPending();const notifications=pending.notifications.filter(ownsReminder).map(n=>({id:n.id}));if(notifications.length)await LocalNotifications.cancel({notifications});}
 async function ensureChannel(){if(Capacitor.getPlatform()==='android')await LocalNotifications.createChannel({id:'andavita-rhythm',name:'Deine Bewegungstage',description:'Erinnerungen an deinen persönlichen Wochenrhythmus',importance:3,visibility:0,vibration:false});}
 async function sync(settings,ask=false,force=false){
  latest=settings;
  const signature=JSON.stringify({...settings,date:new Date().toDateString(),zone:Intl.DateTimeFormat().resolvedOptions().timeZone});
  if(signature===lastSignature&&!ask&&!force)return;
  try{
   if(!settings.enabled){await cancelOwned();lastSignature=signature;emit({status:'off',message:'Erinnerungen sind ausgeschaltet.'});return;}
   let permission=await LocalNotifications.checkPermissions();
   if(ask&&permission.display!=='granted')permission=await LocalNotifications.requestPermissions();
   if(permission.display!=='granted'){
    await cancelOwned();lastSignature='';emit({status:'permission',message:'Bitte erlaube Mitteilungen für Andavita in den Geräteeinstellungen. Über „Einstellungen speichern“ kannst du die Freigabe anfragen.'});return;
   }
   await ensureChannel();
   const notifications=buildReminderPlan(settings);
   await cancelOwned();
   if(notifications.length)await LocalNotifications.schedule({notifications});
   const pending=await LocalNotifications.getPending();
   if(notifications.some(n=>!pending.notifications.some(p=>p.id===n.id)))throw Error('Termine nicht vollständig gespeichert');
   lastSignature=signature;
   emit({status:'scheduled',count:notifications.length,message:notifications.length?`${notifications.length} Erinnerungen auf deinem Handy geplant, bis ${notifications.at(-1).schedule.at.toLocaleDateString('de-DE')}. Auch bei geschlossener App. Beim Öffnen wird der Plan erneuert.${Capacitor.getPlatform()==='android'?' Android kann die Zustellung im Energiesparmodus verzögern.':''}`:'Aktuell keine anstehenden Erinnerungen.'});
  }catch(error){lastSignature='';emit({status:'error',message:'Die Erinnerungen konnten nicht eingerichtet werden. Bitte erneut speichern.'});console.error('Andavita reminders:',error);}
 }
 function enqueue(settings,ask=false,force=false){queue=queue.then(()=>sync(settings,ask,force)).catch(()=>emit({status:'error',message:'Bitte die Erinnerungseinstellungen erneut speichern.'}));return queue;}
 window.andavitaDeviceReminders={
  sync:enqueue,
  refresh:()=>latest&&enqueue(latest,false,true),
  async test(){
   try{let permission=await LocalNotifications.checkPermissions();if(permission.display!=='granted')permission=await LocalNotifications.requestPermissions();if(permission.display!=='granted'){emit({status:'permission',message:'Mitteilungen sind nicht erlaubt. Bitte in den Geräteeinstellungen aktivieren.'});return;}
    await ensureChannel();await LocalNotifications.schedule({notifications:[{id:TEST_ID,title:'Andavita · Test-Erinnerung',body:'Deine Handy-Erinnerung funktioniert. Zeit für deinen Moment.',schedule:{at:new Date(Date.now()+15000),allowWhileIdle:true},isExactNotification:false,channelId:'andavita-rhythm',smallIcon:'ic_stat_andavita',extra:{kind:'test'}}]});
    emit({status:'test',message:'Test-Erinnerung für in 15 Sekunden geplant. Schließe die App. Android kann die Zustellung verzögern.'});
   }catch{emit({status:'error',message:'Die Test-Erinnerung konnte nicht geplant werden.'});}
  }
 };
 LocalNotifications.addListener('localNotificationActionPerformed',()=>window.dispatchEvent(new CustomEvent('andavita:open-reminder')));
 window.dispatchEvent(new Event('andavita:device-ready'));
}
