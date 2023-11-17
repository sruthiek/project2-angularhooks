import { AfterContentInit, Component,  Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy,OnChanges {

  @Input() name!: string;
 

  constructor(){

  }
  
  ngOnChanges(){
console.log('on channges called');

  }

  ngOnInit(): void {
    console.log('component initialized');
    
  }


  ngOnDestroy(): void {
  console.log('component destroyed');
  
  }



}
