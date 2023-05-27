import { Component } from '@angular/core';
import { StudentClass } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  id!: number;

  student: StudentClass = {
    studentId: 0,
    studentName: " ",
    course: " ",
    specialization: " ",
    studentPercentage: "",
    departmentId: 0,
  }
  constructor(private studentservice: StudentServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  saveStudent() {
    this.studentservice.createStudent(this.student).subscribe(data => {
      console.log(data);
      this.goTostudentList();
    },
      error => console.log(error));
  }



  goTostudentList() {
    this.router.navigate(['/student']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }
}