import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'notes-list', component: NotesListComponent },
            { path: '**', redirectTo: '/' }
        ])],
    declarations: [AppComponent, NotesListComponent],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }