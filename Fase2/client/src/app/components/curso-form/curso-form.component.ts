import { Component, OnInit, HostBinding } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { CursosService } from '../../services/cursos.service'
import { HorariosService } from '../../services/horarios.service'
import { SemestresService } from '../../services/semestres.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  
  horario: any={
    CodigoHorario: 0,
    Hora: "",
  };
  
  semestre: any={
    
    Numero: 0,
    Anio: 0,
    Nombre: ""
  };
  horarios: any=[];
  semestres: any=[];
  curso: any={
    CodigoCurso: 0,
    NombreCurso: "",
    descripcion: "",
    seccion: "",
    CodigoHorario: 0,
    CodigoSemestre: 0
  };

  edit: boolean= false;
  constructor(private cursoService: CursosService,private horariosService: HorariosService,private semestreService: SemestresService,private router: Router,private activedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    const params=this.activedRoute.snapshot.params;
    this.getData()
    
    if(params.id){
      this.cursoService.getCurso(params.id)
        .subscribe(
          res => {console.log(res)
          this.curso=res;
          this.edit=true},
          err => console.error(err)
        )
    }
  }
  getData(){
    this.horariosService.getHorarios().subscribe(
      res => {
        this.horarios=res;
      },
      err => console.error(err)
    );
    this.semestreService.getSemestres().subscribe(
      res => {
        this.semestres=res;
      },
      err => console.error(err)
    );
  }
  saveNewCurso(){
    this.curso.CodigoHorario = this.horario.CodigoHorario
    this.curso.CodigoSemestre = this.semestre.CodigoSemestre
    
    this.cursoService.saveCurso(this.curso)
      .subscribe(
        res => {console.log(res)
        this.router.navigate(['/cursos'])},
        err => console.error(err)
      )
  }
  saveNewHorario(){
    this.horariosService.saveHorario(this.horario)
      .subscribe(
        res => {console.log(res)
        this.router.navigate(['/cursos'])},
        err => console.error(err)
      )
  }
  saveNewSemestre(){
    this.semestreService.saveSemestre(this.semestre)
      .subscribe(
        res => {console.log(res)
        this.router.navigate(['/cursos'])},
        err => console.error(err)
      )
  }
  updateCurso(){
    this.cursoService.updateCurso(this.curso.CodigoCurso,this.curso)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/cursos'])
        },
        err => console.error(err)
      )
  }


}
