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
import { ActivatedRoute } from '@angular/router';
var NoteDetailComponent = /** @class */ (function () {
    function NoteDetailComponent(route, notesService) {
        var _this = this;
        this.route = route;
        this.notesService = notesService;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.notesService.getNoteById(this.id).subscribe(function (result) {
            _this.note = result;
        });
    }
    NoteDetailComponent.prototype.ngOnInit = function () {
    };
    NoteDetailComponent = __decorate([
        Component({
            selector: 'note-detail',
            templateUrl: './note-detail.component.html',
            styleUrls: ['./note-detail.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, NotesService])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());
export { NoteDetailComponent };
//# sourceMappingURL=note-detail.component.js.map