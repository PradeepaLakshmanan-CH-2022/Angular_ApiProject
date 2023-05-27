import { Component } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { Router } from '@angular/router';
import { DepartmentClass } from '../department';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent {
  id!: number;
  department: DepartmentClass = {
    departmentId: 0,
    departmentName: " "
  }

  constructor(private departmentservice: DepartmentServiceService, private router: Router) { }

  ngOnInit(): void {
  }



  saveDepartment() {
    this.departmentservice.createDepartment(this.department).subscribe(data => {
      console.log(data);
      this.goTodepartmentList();
    },
      error => console.log(error));
  }



  goTodepartmentList() {
    this.router.navigate(['/department']);
  }

  onSubmit() {
    console.log(this.department);
    this.saveDepartment();
  }
}