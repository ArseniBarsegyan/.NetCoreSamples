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
import {SigninComponent} from "./components/auth/signin/signin.component";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule],
    declarations: [
        AppComponent,
        NotesListComponent,
        CreateNoteComponent,
        NoteDetailComponent,
        PageNotFoundComponent,
        SigninComponent,
        HeaderComponent
    ],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }