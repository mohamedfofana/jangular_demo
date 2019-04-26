import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    RatingComponent
  ]
})
export class WidgetModule {
    constructor(private injector: Injector) {
        const ratingElement = createCustomElement(RatingComponent, {injector: this.injector});
        customElements.define('app-rating', ratingElement);
    }
}
