import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';

//import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	//Original
	//providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
	//Nextor
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter( routes, withHashLocation() ),
		provideHttpClient()]
};
