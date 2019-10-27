import { Component, OnInit } from '@angular/core';
import { AuxsService } from '../../services/auxs.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-aux-form',
  templateUrl: './aux-form.component.html',
  styleUrls: ['./aux-form.component.css']
})
export class AuxFormComponent implements OnInit {

 
  aux: any={
    CarnetAuxiliar: 0,
    Nombre: "",
    CorreoElectronico: "",
    contra: "",
    rol: ""
  };
  edit: boolean= false;
  constructor(private auxService: AuxsService,private router: Router,private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params=this.activedRoute.snapshot.params;
    if(params.id){
      this.auxService.getAux(params.id)
        .subscribe(
          res => {console.log(res)
          this.aux=res;
          this.edit=true},
          err => console.error(err)
        )
    }
  }
  saveNewAux(){
    this.auxService.saveAux(this.aux)
      .subscribe(
        res => {console.log(res)
        this.router.navigate(['/auxs'])},
        err => console.error(err)
      )
  }
  updateAux(){
    this.auxService.updateAux(this.aux.CarnetAuxiliar,this.aux)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/auxs'])
        },
        err => console.error(err)
      )
  }


}
