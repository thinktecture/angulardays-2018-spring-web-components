import { Component, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NumberPadComponent } from '../numberPad/numberPad.component';

@Component({
  selector: 'touch-controls-number-pad-shadow',
  templateUrl: '../numberPad/numberPad.component.html',
  styleUrls: ['../numberPad/numberPad.component.scss'],
  encapsulation: ViewEncapsulation.Native,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberPadShadowComponent, multi: true },
  ],
})
export class NumberPadShadowComponent extends NumberPadComponent {

}
