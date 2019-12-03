import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }

  salvar(matricula: number, nome: string, curso: string, email: string){
    this.alunoService.insert({ matricula, nome, curso, email} as Aluno);
  }


}