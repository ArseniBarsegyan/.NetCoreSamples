import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './models/Note';

@Injectable()
export class NotesService {
    notes: Note[];
    private url = "/api/notes";

    constructor(private http: HttpClient) {
    }

    getNotes() {
        return this.http.get(this.url);
    }

    createNote(note: Note) {
        return this.http.post(this.url, note);
    }

    updateNote(note: Note) {

        return this.http.put(this.url + '/' + note.id, note);
    }

    deleteNote(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}