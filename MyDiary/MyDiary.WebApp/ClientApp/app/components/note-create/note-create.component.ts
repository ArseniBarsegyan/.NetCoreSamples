import { Component } from '@angular/core';
import { NotesService, Note } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'note-create',
    templateUrl: './note-create.component.html'
})
export class NoteCreateComponent {
    constructor(private notesService: NotesService) {
    }
}