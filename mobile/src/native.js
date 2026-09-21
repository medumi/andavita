import { setupReminders } from './reminders.js';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

if (Capacitor.isNativePlatform()) {
  setupReminders();
  // Let the existing player close handler persist progress and stop its timer.
  App.addListener('appStateChange', ({ isActive }) => {
    if (isActive) window.dispatchEvent(new Event('andavita:device-ready'));
    if (!isActive) document.querySelector('#modal[open] [data-action="close"]')?.click();
  });
  if (Capacitor.getPlatform() === 'android') {
    App.addListener('backButton', () => {
      const close = document.querySelector('#modal[open] [data-action="close"]');
      if (close) close.click();
      else if (location.hash && location.hash !== '#home') location.hash = '#home';
      else App.minimizeApp();
    });
  }
}
