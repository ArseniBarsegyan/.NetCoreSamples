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
  formData: FormData;

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(files) {
    if (this.formData == null) {
      this.formData = new FormData();
    }

    if (files.length === 0) {
      return;
    }

    for (let file of files) {
      this.formData.append(file.name, file);
    }
  }

  onSubmit(createComponentForm: NgForm) {
    const note: Note = {
      id: '',
      date: new Date(),
      description: createComponentForm.controls['description'].value,
      filesIds: []
    };

    if (this.formData != null) {
      this.notesService.uploadFile(this.formData)
      .subscribe((id: string) => {      
        note.id = id;
        this.notesService.createNote(note);
        this.router.navigate(['notes']);
      }); 
    } else {
      this.notesService.createNote(note);
      this.router.navigate['notes'];
    }      
  }
}
