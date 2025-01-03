import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}

export const custFormValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    const name = control.get('name');
    const reqId = control.get('reqId');

    return (reqId?.value == '1' && name?.value == 'yao1')
        ? { specialCase: true }
        : null;
};