import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-manager.html',
  styleUrls: ['./task-manager.css']
})
export class TaskManager {
  tasks = [
    { title: 'Complete Assignment', completed: true },
    { title: 'Study Angular', completed: false },
    { title: 'Submit Project', completed: true }
  ];
}
