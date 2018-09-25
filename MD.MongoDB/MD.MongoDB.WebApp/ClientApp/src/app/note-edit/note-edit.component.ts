import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  note: Note;
  id: string;
  editMode: boolean;

  constructor(private route: ActivatedRoute,
    private notesService: NotesService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.note = this.notesService.getNoteById(this.id);
        }
      );
  }

  onEditClick() {
    this.editMode = true;
  }

}
