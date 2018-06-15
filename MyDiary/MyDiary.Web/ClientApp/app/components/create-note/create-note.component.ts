import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NotesService } from '../../notes.service';
import { Photo } from '../../photo';
import { Note } from '../../note';

@Component({
    selector: 'create-note',
    templateUrl: './create-note.component.html',
})
export class CreateNoteComponent {
    createComponentForm: FormGroup;
    description: string = '';

    constructor(private notesService: NotesService, private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createComponentForm = this.formbuilder.group({
            description: ['', [Validators.required]],
            file: null
        });
    }

    onFileChange(event: any) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.createComponentForm.controls['file'].setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                })
            }
        }
    }

    onSubmit(createComponentForm: NgForm) {
        const photo = new Photo(0, createComponentForm.controls['file'].value['filename'], 0, createComponentForm.controls['file'].value['value']);
        const note = new Note(0, createComponentForm.controls['description'].value, new Date(), [photo]);

        this.notesService.createNote(note);
    }
}