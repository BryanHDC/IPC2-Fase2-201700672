import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { EstudiantesService } from '../../services/estudiantes.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.css']
})
export class EstudianteFormComponent implements OnInit {

  estudiante: any={
    CarnetEstudiante: 0,
    Nombre: "",
    CorreoElectronico: "",
    contra: ""
  };
  edit: boolean= false;
  constructor(private estudianteService: EstudiantesService,private router: Router,private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params=this.activedRoute.snapshot.params;
    if(params.id){
      this.estudianteService.getEstudiante(params.id)
        .subscribe(
          res => {console.log(res)
          this.estudiante=res;
          this.edit=true},
          err => console.error(err)
        )
    }
  }
  saveNewEstudiante(){
    this.estudianteService.saveEstudiante(this.estudiante)
      .subscribe(
        res => {console.log(res)
        this.router.navigate(['/users'])},
        err => console.error(err)
      )
  }
  updateEstudiante(){
    this.estudianteService.updateEstudiante(this.estudiante.CarnetEstudiante,this.estudiante)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users'])
        },
        err => console.error(err)
      )
  }

}
