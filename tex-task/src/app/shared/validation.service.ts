import {Injectable} from "@angular/core";
import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
import {isLineBreak} from "codelyzer/angular/sourceMappingVisitor";

@Injectable({providedIn: 'root'})
export class ValidationService {

  isControlInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  markAllFormFieldsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(
      (control) => {
        if (control instanceof FormControl) {
          if (control.enabled) {
            control.markAsTouched({onlySelf: true});
          }
        } else if (control instanceof FormGroup || control instanceof FormArray) {
          this.markAllFormFieldsAsTouched(control);
        }
      });
  }
}
