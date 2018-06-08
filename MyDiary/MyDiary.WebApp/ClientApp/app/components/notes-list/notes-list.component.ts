import { Component } from '@angular/core';

@Component({
    selector: 'nots-list',
    templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
    notes: Note[];

    constructor() {
        this.notes = [new Note(1, 'test description 1', new Date(2018, 6, 8, 11, 28, 30)),
            new Note(2, 'test description 2', new Date(2017, 5, 4, 10, 30, 1))];
    }
}

export class Note {
    constructor(public id?: number,
        public description?: string,
        public date?: Date) { }
}