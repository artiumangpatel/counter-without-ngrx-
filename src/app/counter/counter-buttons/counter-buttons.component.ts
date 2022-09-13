
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store:Store<{counter:{counter:number}}>) { }
  //without ngrx
//  @Output() Increment = new EventEmitter<void>();
//  @Output() Decrement = new EventEmitter<void>();
//  @Output() Reset = new EventEmitter<void>();
 ngOnInit(): void {
  }

  OnIncrement(){
     this.store.dispatch(increment());
    // this.Increment.emit(); without ngrx
  }
  OnDecrement(){
    this.store.dispatch(decrement());
    // this.Decrement.emit();  without ngrx
  }
  OnReset(){
    this.store.dispatch(reset());
    // this.Reset.emit(); without ngrx
  }
}
