import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  createComponentForm: FormGroup;
  description = '';
  public message: string;

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(files) {
    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of files) {
      formData.append(file.name, file);
    }

    this.notesService.uploadFile(formData)
    .subscribe(data => {
    });
  }

  onSubmit(createComponentForm: NgForm) {
    const note: Note = {
      id: '',
      date: new Date(),
      description: createComponentForm.controls['description'].value,
      filesIds: []
    };

    this.notesService.createNote(note);
    this.router.navigate(['notes']);
  }
}
