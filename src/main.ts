import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { mockHandlers } from './mocks';

import { setupWorker } from 'msw/browser';


setupWorker(...mockHandlers).start().then(() => {

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})









/*
setupWorker(...mockHandlers).start()
  .then(() => platformBrowserDynamic()
    .bootstrapModule(AppModule))
  .catch((err) => console.error(err))

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { setupWorker } from 'msw/browser';
// import { AppModule } from './app/app.module';
// import { mockHandlers } from './mocks';
// // platformBrowserDynamic().bootstrapModule(AppModule)
// //   .catch(err => console.error(err));

// setupWorker(...mockHandlers).start()
//   .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
//   .catch((err) => console.error(err));*/