import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',    //only one html file
  //template:`<h1>Welcome to angular programming...</h1>
  //<h2>{{title}} This is my first project...</h2> `,
  styleUrls: ['./app.component.css']  // their can be many css file so array
  //styles : ['h1{color : red}','h2{color : cyan}']
})
export class AppComponent {
  title = 'myapp2';
}
