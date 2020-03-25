import { Component, OnInit } from '@angular/core';
import { itemClass } from './item-class'
@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css','../../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css']
})
export class ToDoItemComponent implements OnInit {
  obj1:itemClass = new itemClass("object1",true);
  obj2:itemClass = new itemClass("object2",false);
  items:itemClass[] = [this.obj1,this.obj2];
  itemobject:itemClass;
  item:String ='';
  done:Boolean=false;   

  delete(item){
    this.items.splice(this.items.indexOf(item),1)
   }
   checkDone(done:Boolean){
    if(done){
      return true
    }else{
      return false
    }
   }
   toggle(checked:Boolean,item:itemClass){
    if(!checked){  
      item.done = true;
    }else{
      item.done=false;
    }       
  }

   add(){
     if(this.item!==''){
       this.itemobject=new itemClass(this.item,this.done)
      this.items.push(this.itemobject) 
      this.item=''
     }
    
   }
  ngOnInit() {
  }

}
