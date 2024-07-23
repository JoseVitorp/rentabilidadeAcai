import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes'; // Verifique esta linha
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserModule),
    provideRouter(APP_ROUTES)
  ]
})
  .catch(err => console.error(err));
