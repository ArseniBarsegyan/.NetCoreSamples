import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  createComponentForm: FormGroup;
  description = '';
  public message: string;
  formData: FormData;

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(files, fileNames: HTMLLabelElement) {
    if (this.formData == null) {
      this.formData = new FormData();
    }

    if (files.length === 0) {
      return;
    }

    for (let file of files) {
      fileNames.innerHTML += file.name + ' ';
      this.formData.append(file.name, file);
    }
  }

  onSubmit(createComponentForm: NgForm) {
    if (this.formData == null) {
      this.formData = new FormData();
    }

    const note: Note = {
      id: '',
      date: new Date(),
      description: createComponentForm.controls['description'].value,
      files: []
    };

    this.formData.append('note', JSON.stringify(note));

    this.notesService.createNote(this.formData);
    this.router.navigate(['notes']);
  }
}
