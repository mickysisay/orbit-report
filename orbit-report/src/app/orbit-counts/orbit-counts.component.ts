import { Component, OnInit,Input } from '@angular/core';
import {Satellite} from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
 
  @Input() satellites: Satellite[];
  num:number;
  constructor() { }

  ngOnInit() {
   
  }
counts(){
  let all:Object={}; 
  all["Total: "]= this.satellites.length;
  for(let i:number = 0; i<this.satellites.length; i++) {
    if(all["Total "+this.satellites[i].type+": "] == undefined){
         all["Total "+this.satellites[i].type+": "] =1;
    }else{
         all["Total "+this.satellites[i].type+": "]+=1;
    }
  }
     return all;
  }

}
