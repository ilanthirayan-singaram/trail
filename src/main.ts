import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { AppComponent } from './app/app.component';
import { SWIPER_PROVIDERS } from './app/shared/imports';

import { register } from 'swiper/element/bundle';
register();   // This registers <swiper-container>, <swiper-slide>, etc.

bootstrapApplication( AppComponent, {
  providers: [
    ...SWIPER_PROVIDERS
  ]
}).catch((err) => console.error(err));
