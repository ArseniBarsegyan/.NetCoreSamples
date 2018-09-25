import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotesService {
    private notes: Note[] = [];
    notesChanged = new Subject<Note[]>();

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getNotes() {
        this.http.get<Note[]>(this.baseUrl + 'api/Notes/AllNotes')
            .subscribe(result => {
                this.notes = result;
                this.notesChanged.next(this.notes.slice());
                console.log(this.notes);
            }, error => console.error(error));
        return this.notes.slice();
    }

    getNoteById(id: string) {
        const note = this.notes.find(function(item) {
            return item.id === id;
        });
        return note;
    }

    // In case of create new note retrieve all notes again and invoke event
    createNote(note: Note) {
        this.http.post(this.baseUrl + 'api/Notes/Create', note)
            .subscribe((result: Note) => {
                this.notes.push(result);
                this.notesChanged.next(this.notes.slice());
            }, error => {
                console.log(error);
            });
    }

    updateNote(note: Note) {
        return this.http.put(this.baseUrl + 'api/Notes/Update/' + note.id, note);
    }

    deleteNote(id: string) {
        this.notes = this.notes.filter(e => e.id !== id);
        this.notesChanged.next(this.notes.slice());
        console.log(this.baseUrl + 'api/Notes/Delete' + '/' + id);
        return this.http.delete(this.baseUrl + 'api/Notes/Delete' + '/' + id);
    }
}
