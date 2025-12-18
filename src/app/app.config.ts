import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    // عشان نحل مشكله Scrollال  >>> نضيف scrollPositionRestoration ونعملها  top او enabled عشان ال defailt بتاعتها بتكون disabeld
    provideRouter(routes , withInMemoryScrolling({scrollPositionRestoration : 'top'})), provideClientHydration(withEventReplay())
  ]
};
