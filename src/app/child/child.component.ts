import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input,OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input()  value:string='brototype';

ngOnChanges(change:SimpleChanges){
console.log('onchanges called');
console.log(change);


}

ngDoCheck(){
  console.log('ngDoCheck called');

 }

 ngAfterContentInit(){
  console.log('ngAfterContentInit called');
 }
 ngAfterContentChecked(){
  console.log(' ngAfterContentChecked called');
 }

 ngAfterViewInit(){
  console.log('  ngAfterViewInit called!!');
 }


 ngAfterViewChecked(){
  console.log('  ngAfterViewChecked called!!');
 }
 

 ngOnDestroy(){
  console.log('  component is  destroyed!!');
 }
}
