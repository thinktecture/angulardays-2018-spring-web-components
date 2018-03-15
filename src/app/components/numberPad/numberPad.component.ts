import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'touch-controls-number-pad',
  templateUrl: 'numberPad.component.html',
  styleUrls: ['numberPad.component.scss'],
  encapsulation: ViewEncapsulation.Native,
})
export class NumberPadComponent {
  public value = 0;

  @Input()
  public min = -Infinity;

  @Input()
  public max = +Infinity;

  public increment() {
    this.value = Math.min(++this.value, this.max);
  }

  private decrement() {
    this.value = Math.max(--this.value, this.min);
  }
}
