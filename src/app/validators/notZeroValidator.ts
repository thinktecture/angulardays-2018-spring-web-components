import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CoreValidators {
  public static notZero(c: AbstractControl): ValidationErrors | null {
    if (c.value === 0) {
      return {
        notZero: true,
      };
    }

    return null;
  }
}
