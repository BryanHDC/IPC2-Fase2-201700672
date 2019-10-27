import { Component, OnInit, HostBinding } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service'
@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
  @HostBinding('class') classes='row';
  estudiantes: any=[]
  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit() {
   this.getEstudiantes()
  }
  
  getEstudiantes(){
    this.estudiantesService.getEstudiantes().subscribe(
      res => {
        this.estudiantes=res;
      },
      err => console.error(err)
    );
  }
  deleteEstudiante(id: string){
    this.estudiantesService.deleteEstudiante(id).subscribe(
      res => {
        console.log(res);
        this.getEstudiantes()
      },
      err => console.error(err)
    );
  }
  

}
