import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { EmployeeService } from './service/master.service';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './listing/listing.component';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeDialogComponent]
})
export class AppModule { }
