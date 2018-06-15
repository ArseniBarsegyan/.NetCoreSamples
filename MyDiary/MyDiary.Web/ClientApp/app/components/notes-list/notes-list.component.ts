import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from '../../note';

@Component({
    selector: 'notes-list',
    templateUrl: './notes-list.component.html',
})
export class NotesListComponent implements OnInit {    
    notes: Note[];

    constructor(private notesService: NotesService) { }

    loadNotes() {
        this.notesService.getNotes().subscribe((data: Note[]) => {
            this.notes = data;
        });
    }

    ngOnInit(): void {
        this.loadNotes();
    }
}