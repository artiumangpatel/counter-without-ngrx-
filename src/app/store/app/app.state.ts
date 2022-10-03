import {  _counterReducer } from "../counter/counter.reducer";
import { CounterState } from "../counter/counter.state";
import { postsReducer } from "../posts/posts.reduser";
import { PostsState } from "../posts/posts.state";

export interface appState{
    counter:CounterState;
    posts:PostsState;
}

export const appReducer = {
counter:_counterReducer,
posts:postsReducer
};