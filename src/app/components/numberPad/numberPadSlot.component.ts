import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NumberPadComponent } from './numberPad.component';

@Component({
  selector: 'touch-controls-number-pad-slot',
  templateUrl: 'numberPadSlot.component.html',
  styleUrls: ['numberPad.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberPadSlotComponent, multi: true },
  ],
})
export class NumberPadSlotComponent extends NumberPadComponent {
  public set infoText(value: string) {
    throw new Error('Do not use infoText, but ng-content instead');
  }
}
