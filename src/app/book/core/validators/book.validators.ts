import { FormControl } from '@angular/forms';

export class BookValidators {
  static isbn(control: FormControl) {
    const pattern = /^\d{10}$/;
    const candidate = control.value.replace(/\s+/g, '');

    return pattern.test(candidate)
      ? null
      : { isbn: { valid: false } };
  }
}
