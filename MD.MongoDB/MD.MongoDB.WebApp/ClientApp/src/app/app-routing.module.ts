import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateNoteComponent} from './create-note/create-note.component';
import {NoteDetailsComponent} from './note-details/note-details.component';
import {HomeComponent} from './home/home.component';
import {NotesComponent} from './notes/notes.component';
import {NoteStartComponent} from './note-start/note-start.component';
import {NoteEditComponent} from './note-edit/note-edit.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
      path: 'notes', component: NotesComponent, children: [
        {path: '', component: NoteStartComponent},
        {path: 'new', component: CreateNoteComponent},
        {path: ':id', component: NoteDetailsComponent},
        {path: ':id/edit', component: NoteEditComponent},
      ]
    },
    {path: '**', component: PageNotFoundComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {
  }