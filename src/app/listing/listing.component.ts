import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/master.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  salary: string;
  contactNumber: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortField: keyof Employee = 'id';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private employeeService: EmployeeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      this.filteredEmployees = data;
    });
  }

  get filteredEmployeesList(): Employee[] {
    return this.employees.filter(employee => {
      return (
        employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  sortData(field: keyof Employee) {
    this.sortField = field;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.filteredEmployees.sort((a, b) => {
      if (a[field] < b[field]) return this.sortDirection === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.filteredEmployees = this.filteredEmployees.filter(employee => employee.id !== id);
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEmployee: Employee = {
          id: this.employees.length + 1,
          ...result
        };
        this.employees.push(newEmployee);
        this.filteredEmployees = [...this.employees];
      }
    });
  }
}
