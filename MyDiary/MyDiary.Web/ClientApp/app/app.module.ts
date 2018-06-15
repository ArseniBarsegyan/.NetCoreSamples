import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { AppRoutingModule } from './app-routing.module';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, NotesListComponent, PageNotFoundComponent],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }