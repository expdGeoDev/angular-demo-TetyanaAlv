import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { routerStates } from './app.routing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		importProvidersFrom(UIRouterModule.forRoot({ states: routerStates })), provideAnimationsAsync(),
	],
};
