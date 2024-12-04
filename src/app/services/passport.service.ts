import { Injectable } from '@angular/core';
import { Passport } from '../passport.Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassportService {

 
    passportData:Passport = new Passport();
    passportList:Passport[];
    readonly passportApiUrl= 'https://localhost:5001/api/Passport';

  
  constructor( private objHttp:HttpClient) { }
  postPassport(){
    return this.objHttp.post(this.passportApiUrl, this.passportData);
  }
  getPassport(){
    return this.objHttp.get(this.passportApiUrl).toPromise().then(res=>this.passportList=res as Passport[]);
  }
  deletePassport(id){
    return this.objHttp.delete(this.passportApiUrl+"/"+ id);
  }
  putPassport(){
    return this.objHttp.put(this.passportApiUrl+"/"+this.passportData.Id,this.passportData );

 }
}
