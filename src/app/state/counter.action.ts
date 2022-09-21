import { createAction, props } from "@ngrx/store";


export const increment = createAction ('increment');
export const decrement = createAction ('decrement');
export const reset = createAction ('reset');

//custom incterment
export const customIncrement = createAction('customincrement',
props<{count:number}>()
);