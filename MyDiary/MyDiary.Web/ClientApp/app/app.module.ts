import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { AppRoutingModule } from './app-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
    declarations: [AppComponent, NotesListComponent, CreateNoteComponent, PageNotFoundComponent],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }