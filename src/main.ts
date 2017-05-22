import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => registerWorker('/worker-basic.min.js'));

/**
 * Loads a service worker if the browser is supporting it
 * @param {string} workerScript path to the script file implementing the service worker
 */
function registerWorker(workerScript: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(workerScript);
  }
}
