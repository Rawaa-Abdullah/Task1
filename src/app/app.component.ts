import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q1';
  public name = "to ITEC website";
  public DemoContent='';
   
  ourText= '';
   myText(data:string){
    console.warn(data)
    this.ourText=data
   }

  colorFunction(){
    return 'Yellow'
  }

  
}
