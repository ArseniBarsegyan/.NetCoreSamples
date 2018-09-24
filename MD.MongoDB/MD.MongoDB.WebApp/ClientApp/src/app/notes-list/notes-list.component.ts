import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../notes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes: Note[];
  subscription: Subscription;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.getNotes();
    this.subscription = this.notesService.notesChanged
      .subscribe((notes: Note[]) => {
        this.notes = notes;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleted(id: string) {
    this.notesService.deleteNote(id)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
