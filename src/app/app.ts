import { Component } from '@angular/core';
import { StudentProfile } from './student-profile/student-profile';
import { LoginStatus } from './login-status/login-status';
import { ProductList } from './product-list/product-list';
import { TaskManager } from './task-manager/task-manager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentProfile, LoginStatus, ProductList, TaskManager],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Angular Directives Demo';  
}