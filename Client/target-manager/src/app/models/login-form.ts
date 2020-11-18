import { FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginForm extends FormGroup {
    constructor(
        private login: string = '',
        private password: string = '',
    ) {
        super({
            Login: new FormControl(login, Validators.required),
            Password: new FormControl(password, Validators.required),
          })
    }
}