import { Component, OnInit } from '@angular/core';
import { NotesService, Note, Photo } from '../notes.service';
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
    fileToUpload: any;

    constructor(private notesService: NotesService, private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createComponentForm = this.formbuilder.group({
            description: ['', [Validators.required]],
            file: null
        });
    }

    // Create photo and note from form data
    onSubmit(createComponentForm: NgForm) {
        var photo: Photo = { id: 0, name: createComponentForm.controls['file'].value['filename'], noteId: 0, image: createComponentForm.controls['file'].value['value'] };
        var note: Note = { id: 0, description: createComponentForm.controls['description'].value, date: new Date(), photos: [photo] };       

        console.log(note);
        this.notesService.createNote(note);
    }

    // Set value of the form
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
            };
        }
    }
}