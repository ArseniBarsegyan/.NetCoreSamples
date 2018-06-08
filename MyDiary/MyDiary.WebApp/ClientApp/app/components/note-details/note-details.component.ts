import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'note-details',
    templateUrl: './note-details.component.html'
})
export class NoteDetailsComponent implements OnInit {    
    note: Note;
    private id: number;

    constructor(private notesService: NotesService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.id = +params['id']);
    }

    ngOnInit() {
        this.note = this.notesService.getNote(this.id);
    }
}