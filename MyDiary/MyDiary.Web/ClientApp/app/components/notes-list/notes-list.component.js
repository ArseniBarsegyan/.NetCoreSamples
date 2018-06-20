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
import { NotesService } from '../../notes.service';
var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(notesService) {
        this.notesService = notesService;
    }
    NotesListComponent.prototype.loadNotes = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (data) {
            if (data !== null) {
                _this.notes = data;
                _this.isNotesListEmpty = false;
            }
            else {
                _this.notes = [];
                _this.isNotesListEmpty = true;
            }
        });
    };
    NotesListComponent.prototype.ngOnInit = function () {
        this.loadNotes();
    };
    NotesListComponent = __decorate([
        Component({
            selector: 'notes-list',
            templateUrl: './notes-list.component.html',
            styleUrls: ['./notes-list.component.css']
        }),
        __metadata("design:paramtypes", [NotesService])
    ], NotesListComponent);
    return NotesListComponent;
}());
export { NotesListComponent };
//# sourceMappingURL=notes-list.component.js.map