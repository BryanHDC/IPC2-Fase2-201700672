import { Component, OnInit, HostBinding } from '@angular/core';
import { CursosService } from '../../services/cursos.service'
import { HorariosService } from '../../services/horarios.service'
import { SemestresService } from '../../services/semestres.service' 
@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  @HostBinding('class') classes='row';
  cursos: any=[]
  horarios: any=[]
  semestres: any=[]
  constructor(private cursosService: CursosService,private horariosService: HorariosService,private semestresService:SemestresService) { }

  ngOnInit() {
   this.getCursos()
   
  }
  matchData(){
    this.cursos.array.forEach(element => {
      this.horarios.forEach(horar => {
        if(element.CodigoHorario=horar.CodigoHorario){
         element.Horario=horar.Hora;
        }
      });
      this.semestres.forEach(sem => {
       if(element.CodigoHorario=sem.CodigoHorario){
        element.Semestre=sem.Nombre;
       }
     });
    });
  }
  getData(){
    this.horariosService.getHorarios().subscribe(
      res => {
        this.horarios=res;
      },
      err => console.error(err)
    );
    this.semestresService.getSemestres().subscribe(
      res => {
        this.semestres=res;
      },
      err => console.error(err)
    );
  }
  getCursos(){
    this.cursosService.getCursos().subscribe(
      res => {
        this.cursos=res;
        this.getData();
        this.matchData();
      },
      err => console.error(err)
    );
  }
  deleteCurso(id: string){
    this.cursosService.deleteCurso(id).subscribe(
      res => {
        console.log(res);
        this.getCursos()
      },
      err => console.error(err)
    );
  }
  


}
