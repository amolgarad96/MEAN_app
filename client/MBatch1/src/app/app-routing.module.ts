import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
const routes: Routes = [
  {path:'Batch',component:BatchDetailsComponent},
  {path:'List',component:BatchListComponent},
  {path:'',component:BatchListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
