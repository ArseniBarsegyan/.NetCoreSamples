import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'note-create',
    templateUrl: './note-create.component.html',
    styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
    createComponentForm: FormGroup;
    description: string = '';

    constructor(private notesService: NotesService, private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createComponentForm = this.formbuilder.group({
            description: ['', [Validators.required]]
        });
    }

    onSubmit(createComponentForm: NgForm) {
        console.log(createComponentForm);
    }
}