import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './passports/display/display.component';
import { RegComponent } from './passports/reg/reg.component';

const routes: Routes = [
  {path:'display', component:DisplayComponent},
  {path:'Reg',component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
