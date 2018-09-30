import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../notes.service';
import { Subscription } from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes: Note[];
  subscription: Subscription;

  constructor(private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute) {
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

  onNewNote() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDeleted(id: string) {
    this.notesService.deleteNote(id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  onNoteItemClicked(id: string) {
    let notesList = document.getElementById('notesList');
    notesList.classList.remove('active');
    notesList.classList.add('active');
    console.log(id);
  }
}
