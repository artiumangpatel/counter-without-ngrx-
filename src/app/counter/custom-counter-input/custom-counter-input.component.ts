import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app/app.state';
import { changeChannelName, customIncrement } from 'src/app/store/counter/counter.action';
import { getChannelName } from 'src/app/store/counter/counter.selector';
import { CounterState } from 'src/app/store/counter/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
    value!:number;
    channelName$!:Observable< string>;
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
   this.channelName$= this.store.select(getChannelName);
   
    // .subscribe(channelName=>{
    //   console.log("chennal Name observable called")
    //   this.channelName=channelName;
    // })
  }
  // change channelName
  onChange(){
    this.store.dispatch(changeChannelName())
  }


  onAdd(){
    //for add in counter
    this.store.dispatch(customIncrement({count:+this.value}));
   //counter increment decrement
    // this.store.dispatch(customIncrement({count:this.value}));

  
  }
}
