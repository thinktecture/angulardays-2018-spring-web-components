import { Component, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NumberPadComponent } from '../numberPad/numberPad.component';

@Component({
  selector: 'touch-controls-number-pad-shadow-slot',
  templateUrl: '../numberPad/numberPadSlot.component.html',
  styleUrls: ['../numberPad/numberPad.component.scss'],
  encapsulation: ViewEncapsulation.Native,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberPadShadowSlotComponent, multi: true },
  ],
})
export class NumberPadShadowSlotComponent extends NumberPadComponent {
  public set infoText(value: string) {
    throw new Error('Do not use infoText, but ng-content instead');
  }
}
