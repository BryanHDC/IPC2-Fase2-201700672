import { Component, OnInit, HostBinding } from '@angular/core';
import { AuxsService  } from '../../services/auxs.service'
@Component({
  selector: 'app-aux-list',
  templateUrl: './aux-list.component.html',
  styleUrls: ['./aux-list.component.css']
})
export class AuxListComponent implements OnInit {
  @HostBinding('class') classes='row';
  auxs: any=[]
  constructor(private auxsService: AuxsService) { }

  ngOnInit() {
   this.getAuxs()
  }
  
  getAuxs(){
    this.auxsService.getAuxs().subscribe(
      res => {
        this.auxs=res;
      },
      err => console.error(err)
    );
  }
  deleteAux(id: string){
    this.auxsService.deleteAux(id).subscribe(
      res => {
        console.log(res);
        this.getAuxs()
      },
      err => console.error(err)
    );
  }
  


}
