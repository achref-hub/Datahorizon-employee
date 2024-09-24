import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
