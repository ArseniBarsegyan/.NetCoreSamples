var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NotesListComponent } from "./components/notes-list/notes-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CreateNoteComponent } from "./components/create-note/create-note.component";
import { NoteDetailComponent } from "./components/note-detail/note-detail.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
var appRoutes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'notes', component: NotesListComponent },
    { path: 'notes/detail/:id', component: NoteDetailComponent },
    { path: 'notes/create', component: CreateNoteComponent },
    { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(appRoutes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map