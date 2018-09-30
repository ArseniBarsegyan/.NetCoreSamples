import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;
  @Output() deleted = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNoteDelete() {
    const result = confirm('Are you sure you want to delete this note?' + this.note.id);
    if (result) {
      this.deleted.emit(this.note.id);
    }
  }
}
