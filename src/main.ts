import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TwayAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(TwayAppComponent, [ROUTER_PROVIDERS]);
