import { FormControl, FormGroup, Validators } from '@angular/forms';

export class RegisterForm extends FormGroup {
    constructor(
        private email: string = '',
        private login: string = '',
        private password: string = '',
    ) {
        super({
            Email: new FormControl(email, [Validators.required, Validators.email]),
            Login: new FormControl(login, Validators.required),
            Password: new FormControl(password, Validators.required),
          })
    }
}