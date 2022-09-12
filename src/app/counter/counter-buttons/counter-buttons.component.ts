
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor() { }
 @Output() Increment = new EventEmitter<void>();
 @Output() Decrement = new EventEmitter<void>();
 @Output() Reset = new EventEmitter<void>();
  ngOnInit(): void {
  }

  OnIncrement(){
    this.Increment.emit();
  }
  OnDecrement(){
    this.Decrement.emit();
  }
  OnReset(){
    this.Reset.emit();
  }
}
