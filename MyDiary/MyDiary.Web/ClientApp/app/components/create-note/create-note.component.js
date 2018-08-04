var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotesService } from '../../notes.service';
import { Photo } from '../../photo';
import { Note } from '../../note';
import { Router } from '@angular/router';
var CreateNoteComponent = /** @class */ (function () {
    function CreateNoteComponent(notesService, formbuilder, router) {
        this.notesService = notesService;
        this.formbuilder = formbuilder;
        this.router = router;
        this.description = '';
    }
    CreateNoteComponent.prototype.ngOnInit = function () {
        this.createComponentForm = this.formbuilder.group({
            description: ['', [Validators.required]],
            file: null
        });
    };
    CreateNoteComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.createComponentForm.controls['file'].setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    };
    CreateNoteComponent.prototype.onSubmit = function (createComponentForm) {
        var note = new Note(0, createComponentForm.controls['description'].value, new Date());
        var photo = new Photo(0, createComponentForm.controls['file'].value['filename'], 0, createComponentForm.controls['file'].value['value']);
        note.photos = [photo];
        console.log(note);
        this.notesService.createNote(note).subscribe(function (data) {
            alert('Ok');
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['notes']);
    };
    CreateNoteComponent = __decorate([
        Component({
            selector: 'create-note',
            templateUrl: './create-note.component.html',
            styleUrls: ['./create-note.component.css']
        }),
        __metadata("design:paramtypes", [NotesService, FormBuilder, Router])
    ], CreateNoteComponent);
    return CreateNoteComponent;
}());
export { CreateNoteComponent };
//# sourceMappingURL=create-note.component.js.map