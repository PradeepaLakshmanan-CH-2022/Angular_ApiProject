import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'department', component: DepartmentlistComponent },

  { path: 'create-department', component: AdddepartmentComponent },

  { path: 'update-department/:id', component: UpdatedepartmentComponent },

  { path: 'delete-department/:id', component: DeletedepartmentComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student', component: StudentlistComponent },

  { path: 'create-student', component: AddstudentComponent },

  { path: 'update-student/:id', component: UpdatestudentComponent },

  { path: 'delete-student/:id', component: DeleteStudentComponent },


  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
