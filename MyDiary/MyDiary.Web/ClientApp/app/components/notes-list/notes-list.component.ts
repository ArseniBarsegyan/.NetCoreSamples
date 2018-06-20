import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Note } from '../../note';

@Component({
    selector: 'notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {    
    notes: Note[];
    isNotesListEmpty: boolean;

    constructor(private notesService: NotesService) { }

    loadNotes() {
        this.notesService.getNotes().subscribe((data: Note[]) => {
            if (data !== null) {
                this.notes = data;
                this.isNotesListEmpty = false;
            }
            else {
                this.notes = [];
                this.isNotesListEmpty = true;
            }
        });
    }

    ngOnInit(): void {
        this.loadNotes();
    }
}