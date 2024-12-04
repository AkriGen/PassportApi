import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit {
  constructor(public srv:PassportService){

  }
  ngOnInit(): void {
    this.resetForm();
   
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.resetForm();
    }
    else{
      this.srv.passportData={Id:0,HolderName:'',PassportNumber:'',ExpiryDate:'',ZipCode:''}
    }
  }

  onSubmit(form)
  {
    if(this.srv.passportData.Id==0)
    {
      this.createPassport(form)
      
    }
    else{
      this.updatePassport(form)
    }
  }
  createPassport(form:NgForm)
  {
    this.srv.postPassport().subscribe(res=>
      {
        this.resetForm(form);
       this.srv.getPassport();
       alert('Passport Registration Successfull!!');
      },
       err=>{alert("Error!!"+err)}
      )
  }

  updatePassport(form:NgForm)
  {
    this.srv.putPassport().subscribe(res=>
      {
        this.resetForm(form);
       this.srv.getPassport();
       alert('Passport Update Successfull!!');
      },
       err=>{alert("Error!!"+err)}
      )
  }
}
