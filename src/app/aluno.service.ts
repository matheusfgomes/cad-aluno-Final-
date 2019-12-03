import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Aluno } from './aluno';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  constructor(private db: AngularFireDatabase) { }
  insert(aluno: Aluno) {
  console.log(aluno);
    this.db.list('alunos').push(aluno)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  getAll() {
    return this.db.list('alunos')
    .snapshotChanges()
    .pipe(
      map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  
}