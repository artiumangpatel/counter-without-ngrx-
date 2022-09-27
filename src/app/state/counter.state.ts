export interface CounterState{
    counter:number;
    // using selector for store data
    channelName:string; 
}
export const initialState:CounterState ={
    counter: 0  ,
    channelName:"arti "
}
