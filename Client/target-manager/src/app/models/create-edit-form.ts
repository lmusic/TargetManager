import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagretTypes } from './target-types';

export class CreateEditForm extends FormGroup {
    constructor(
        private Id: number = 0,
        private Name: string = '',
        private Description: string = '',
        private Deadline: string = '',
        private Type: TagretTypes = 0
    ) {
        super({
            Id: new FormControl(Id),
            Name: new FormControl(Name, Validators.required),
            Description: new FormControl(Description, Validators.required),
            Deadline: new FormControl(Deadline, Validators.required),
            Type: new FormControl(Type, Validators.required)
          })
    }
}