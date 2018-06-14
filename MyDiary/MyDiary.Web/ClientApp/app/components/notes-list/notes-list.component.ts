import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from '../../models/Note';

@Component({
    selector: 'notes-list',
    templateUrl: './notes-list.component.html'
})
export class NotesListComponent implements OnInit {
    notes: Note[];

    constructor(private notesService: NotesService) {
    }

    ngOnInit() {
        this.notesService.getNotes().subscribe((data: Note[]) => {
            this.notes = data;
        });
    }
}