import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items:any=[]
  newTask=''

  addToList() { 
   if (this.newTask == '') { 
   }  
   else { 
       this.items.push(this.newTask); 
       this.newTask = ''; 
   } 
} 

deleteTask(index:any) { 
 this.items.splice(index, 1); 
} 

}
