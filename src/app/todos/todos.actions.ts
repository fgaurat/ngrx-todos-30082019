import { createAction, props } from '@ngrx/store';

export const loadTodo = createAction('[Todo-list Component] Load');
export const deleteTodo = createAction('[Todo-list Component] Delete', props<{todo}>());
export const loadSuccessTodo = createAction('[Todo-list Component] Loaded success');
