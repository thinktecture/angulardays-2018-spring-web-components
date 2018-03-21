import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NumberPadShadowComponent } from '../numberPadShadow/numberPadShadow.component';
import { NumberPadShadowSlotComponent } from '../numberPadShadow/numberPadShadowSlot.component';

@Component({
  selector: 'touch-controls-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(injector: Injector) {
    const NumberPadSlotElement = createCustomElement(NumberPadShadowSlotComponent, { injector });
    customElements.define('number-pad-slot-angular-element', NumberPadSlotElement as Function);

    const NumberPadElement = createCustomElement(NumberPadShadowComponent, { injector });
    customElements.define('number-pad-angular-element', NumberPadElement as Function);
  }
}
