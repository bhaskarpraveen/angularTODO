import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  
  reset(){
    this.name=""
  }
  check(){
    if(this.name===''){
      return true
    }else{
      return false
    }
  }
}
