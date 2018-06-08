import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
    notes: Note[];

    constructor() {
        this.notes = [new Note(0, 'test description 1', new Date(2018, 6, 8, 11, 28, 30)),
        new Note(1, 'test description 2', new Date(2017, 5, 4, 10, 30, 1))];
    }

    getAllNotes() {
        return this.notes.slice();
    }

    getNote(id: number): Note {
        return this.notes[id];
    }
}

export class Note {
    constructor(public id?: number,
        public description?: string,
        public date?: Date) { }
}