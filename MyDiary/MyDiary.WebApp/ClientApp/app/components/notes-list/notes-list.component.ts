import { Component } from '@angular/core';

@Component({
    selector: 'nots-list',
    templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
    notes: string[];

    constructor() {
        this.notes = ['test1', 'test2'];
    }
}