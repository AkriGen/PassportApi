import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
  constructor(public objSrv:PassportService){

  }
  ngOnInit():void{

    this.objSrv.getPassport();
  }
  fillForm(selectedPassport){
    this.objSrv.passportData=Object.assign({},selectedPassport);
  }
  onDelete(pid){
    if(confirm('Are you sure to delete this passport?')){
      this.objSrv.deletePassport(pid).subscribe(
        res=>{
          alert("Passport Delete!!")
          this.objSrv.getPassport()
        },
        err=> {
          alert("Error!!!");
        }
      )
    }
  }

}
