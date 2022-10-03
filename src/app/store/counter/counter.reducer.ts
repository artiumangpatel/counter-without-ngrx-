import { Action, createReducer, on } from "@ngrx/store";
import { CounterState, initialState } from "./counter.state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.action";
import { count } from "rxjs";
  export const  _counterReducer = createReducer(initialState,on(increment,(state)=>{
                                                                          return{...state,counter:state.counter+1};}),
                                                             on(decrement,(state)=>{
                                                                          return{...state,counter:state.counter-1};}),
                                                             on(reset,(state)=>{
                                                                          return{...state,counter:0};}),
                                                             on(customIncrement,(state,action)=>{
                                                              // console.log(action);
                                                              // return{...state,counter: action.count}; replace the excisting counter
                                                            //  add in excisting counter
                                                              return{...state,counter:state.counter + action.count};  
                                                            }),
                                                            on(changeChannelName,(state)=>{return {...state,channelName:"Arti web dev "}})
                                                                       )

      export  function counterReducer (state: CounterState ,action: Action) {
        return _counterReducer(state,action);
        
      }                                                       