import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreValidators } from '../../validators/notZeroValidator';

@Component({
  selector: 'touch-controls-number-pad-container-shadow',
  templateUrl: 'numberPadContainerShadow.component.html',
})
export class NumberPadContainerShadowComponent {
  public formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.createForm(formBuilder);
  }

  private createForm(formBuilder: FormBuilder): void {
    this.formGroup = formBuilder.group({
      kmh: 0,
      age: 0,
      nothing: 0,
      notZero: [0, CoreValidators.notZero],
    });
  }
}
