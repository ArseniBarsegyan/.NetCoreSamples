import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from '../notes.service';

@Component({
    selector: 'nots-list',
    templateUrl: './notes-list.component.html'
})
export class NotesListComponent implements OnInit {
    notes: Note[];

    constructor(private notesService: NotesService) {
    }

    ngOnInit() {
        this.notes = this.notesService.getAllNotes();
    }
}