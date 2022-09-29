import { createAction, props } from "@ngrx/store";


export const increment = createAction ('increment');
export const decrement = createAction ('decrement');
export const reset = createAction ('reset');

//custom incterment
export const customIncrement = createAction('customincrement description',
props<{count:number}>()
);
console.log("customIncrement"+customIncrement);
//using selector for store data
export const changeChannelName = createAction('changeChannelName');
// console.log("changeChannelName in action"+changeChannelName);