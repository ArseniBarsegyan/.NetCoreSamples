import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NotesService {
    notes: Note[];

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.http.get(this.baseUrl + 'api/notes/').subscribe(result => {
            var res = result.json();
            var convRes = result.json() as Note1[];
            console.log(res);
            console.log(convRes);
        }, error => console.error(error));
        this.notes = [new Note(0, 'test description 1', new Date(2018, 6, 8, 11, 28, 30)),
        new Note(1, 'test description 2', new Date(2017, 5, 4, 10, 30, 1))];
    }

    getAllNotes() {
        return this.notes.slice();
    }

    getNote(id: number): Note {
        return this.notes[id];
    }

    createNote(note: Note1) {
        return this.http.post(this.baseUrl + 'api/notes/', note);
    }
}

export class Note1 {
    constructor(public id?: number,
        public description?: string,
        public date?: Date,
        public photos?: Photo[]) { }
}

export class Photo {
    constructor(public id?: number,
        public name?: string,
        public noteId?: number,
        public image?: any[]) { }
}

export class Note {
    constructor(public id?: number,
        public description?: string,
        public date?: Date) { }
}