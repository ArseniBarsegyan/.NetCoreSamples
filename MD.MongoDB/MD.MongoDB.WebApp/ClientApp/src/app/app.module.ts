import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NotesService } from './notes.service';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';
import { NoteStartComponent } from './note-start/note-start.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NotesListComponent,
    NoteItemComponent,
    NoteStartComponent,
    NoteDetailsComponent,
    NoteEditComponent,
    CreateNoteComponent,
    NotesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
