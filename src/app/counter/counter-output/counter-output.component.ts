import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selector';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  //  @Input('counter') counter:any; without ngrx
   counter$!:Observable<number>;
  constructor(private store:Store<{counter:CounterState}>) { }
// refactoring 
// counter$:Observable<{ counter: number; }> | undefined
// counterSubscription:Subscription|undefined ;

  ngOnInit(): void {
//  select data from store
// this.counterSubscription=this.store
//                      .select('counter')
//                       .subscribe(data=>
//                       {this.counter=data.counter;
//                        console.log(data);
//                       });


//this observable use for custom counter increment
// this.counter$= this.store.select('counter');

this.counter$=this.store.select(getCounter);

// .subscribe((counter)=>
                      
//                       {
//                         console.log("counter observable called")
//                         this.counter=counter;
      
//                       });
 }
// ngOnDestroy(): void {
//   if(this.counterSubscription){
//     this.counterSubscription.unsubscribe();
//   }
// }

}
