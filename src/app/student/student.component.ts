import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = 'Student';
  public Student=[
    {"Name": "Rawaa", "Email":"Rawaa@gmail.com","Marks":88},
    {"Name": "Noof", "Email":"Noof@gmail.com","Marks":56},
    {"Name": "Sara", "Email":"Sara@gmail.com","Marks":43},
    {"Name": "Maryam", "Email":"Maryam@gmail.com", "Marks":60},
    {"Name": "Salim", "Email":"Salim@gmail.com", "Marks":40}
  ]

}
