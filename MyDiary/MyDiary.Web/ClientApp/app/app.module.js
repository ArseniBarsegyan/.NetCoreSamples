var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { AppRoutingModule } from './app-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { SigninComponent } from "./components/auth/signin/signin.component";
import { HeaderComponent } from "./components/header/header.component";
import { AuthService } from './components/auth/auth.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                AppRoutingModule,
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                NotesListComponent,
                CreateNoteComponent,
                NoteDetailComponent,
                PageNotFoundComponent,
                SigninComponent,
                HeaderComponent
            ],
            providers: [NotesService, AuthService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map