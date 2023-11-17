import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hooks-project';
  name='angular'
show=false;

inputext:string='';

destroy:boolean=true;



OnSubmit(inputEl:HTMLInputElement){
this.inputext=inputEl.value;
}


destroycomponent(){

this.destroy=false;
}


toggle(){
  this.show=!this.show;
}
}
