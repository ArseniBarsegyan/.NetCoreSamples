﻿import {Component, OnInit} from '@angular/core';
import {NotesService} from '../../notes.service';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../../note';

@Component({
    selector: 'note-detail',
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
    note: Note;
    id: number;

    constructor(private route: ActivatedRoute, private notesService: NotesService) {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.notesService.getNoteById(this.id).subscribe(result => {
            this.note = result;
        });
    }

    ngOnInit(): void {
    }
}