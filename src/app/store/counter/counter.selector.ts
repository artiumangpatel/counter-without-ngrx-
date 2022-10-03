import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState,(state)=>{console.log("state.counter"+ state.counter);{return state.counter }});


export const getChannelName = createSelector(getCounterState,(state)=>{return state.channelName});