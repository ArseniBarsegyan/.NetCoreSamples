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

  constructor(private notesService: NotesService, private formbuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createComponentForm = this.formbuilder.group({
      description: ['', [Validators.required]],
      file: null
    });
  }

  onFileChange(event: any, fileNames: HTMLLabelElement) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      let files = event.target.files;

      for (let el of files) {
        fileNames.innerHTML += el.name + ' ';
      }

      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createComponentForm.controls['file'].setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit(createComponentForm: NgForm) {
    const note: Note = {
      id: '',
      date: new Date(),
      description: createComponentForm.controls['description'].value,
      filesIds: []
    };

    this.notesService.createNote(note);
    this.router.navigate(['notes-list']);
  }
}
