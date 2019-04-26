import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';

import { WidgetModule } from './widget/widget.module';

@NgModule({
  imports: [
    BrowserModule,
    WidgetModule
  ]
})
export class AppModule implements DoBootstrap {
    ngDoBootstrap() {
    }
}
