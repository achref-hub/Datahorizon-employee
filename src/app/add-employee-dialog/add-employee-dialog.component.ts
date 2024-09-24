import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  salary: string;
  contactNumber: string;
}

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html'
})
export class AddEmployeeDialogComponent {
  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    salary: '',
    contactNumber: ''
  };

  constructor(public dialogRef: MatDialogRef<AddEmployeeDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.employee); // Pass the employee data back to the parent
  }
}
