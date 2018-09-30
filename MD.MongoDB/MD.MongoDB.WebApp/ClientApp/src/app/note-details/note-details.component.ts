import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  note: Note;
  id: string;
  editMode: boolean;

  constructor(private route: ActivatedRoute, private notesService: NotesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.note = this.notesService.getNoteById(this.id);
    });
  }

  onImageClick(rootImage: HTMLImageElement, modalWindow: HTMLDivElement, modalImage: HTMLImageElement, caption: HTMLDivElement) {
    modalWindow.style.display = 'block';
    modalImage.setAttribute('src', rootImage.src);
    caption.innerHTML = this.note.description;
  }

  onCloseModal(modalImage: HTMLDivElement) {
    modalImage.style.display = 'none';
  }
}
