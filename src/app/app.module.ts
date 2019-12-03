import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlunoService } from './aluno.service';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule ],

  declarations: [ AppComponent, HelloComponent, AlunoComponent, AlunosComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AlunoService]
})
export class AppModule { }
