import { OnInit } from '@angular/core';

export class itemClass{
    public item:String='';
    public done:Boolean=false;
    constructor(item:String,done:Boolean){
        this.item=item;
        this.done=done;
    }

}