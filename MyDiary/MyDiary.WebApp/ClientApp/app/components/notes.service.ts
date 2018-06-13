import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NotesService {
    notes: Note[];

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.http.get(this.baseUrl + 'api/notes/').subscribe(result => {
            var res = result.json();
            var convRes = result.json() as Note[];
        }, error => console.error(error));
        this.notes = [];
    }

    getAllNotes() {
        return this.notes.slice();
    }

    getNote(id: number): Note {
        return this.notes[id];
    }

    createNote(note: Note) {
        return this.http.post(this.baseUrl + 'api/notes/', JSON.stringify(note));
    }
}

export interface Entity {
    id: number;
}

export interface Note extends Entity {    
    description: string;
    date: Date;
    photos: Photo[];
}

export interface Photo extends Entity {    
    name: string;
    noteId: number;
    image: string;
}