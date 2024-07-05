import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setupWorker } from 'msw/browser';
import { AppModule } from './app/app.module';
import { mockHandlers } from './mocks';


setupWorker(...mockHandlers).start().then(() => {

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})
