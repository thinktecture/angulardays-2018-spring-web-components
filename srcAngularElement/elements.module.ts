import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NumberPadComponent } from '../src/app/components/numberPad/numberPad.component';
import { NumberPadShadowComponent } from '../src/app/components/numberPadShadow/numberPadShadow.component';
import { NumberPadShadowSlotComponent } from '../src/app/components/numberPadShadow/numberPadShadowSlot.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NumberPadComponent, NumberPadShadowComponent, NumberPadShadowSlotComponent],
  entryComponents: [NumberPadShadowComponent, NumberPadShadowSlotComponent],
})
export class ElementsModule {
  constructor(injector: Injector) {
    const NumberPadSlotElement = createCustomElement(NumberPadShadowSlotComponent, { injector });
    customElements.define('number-pad-slot-angular-element', NumberPadSlotElement as Function);

    const NumberPadElement = createCustomElement(NumberPadShadowComponent, { injector });
    customElements.define('number-pad-angular-element', NumberPadElement as Function);
  }
}
