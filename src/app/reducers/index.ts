import {
  ActionReducerMap,
  Action,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Todo } from '../todos/todo';
import * as TodoActions from '../todos/todos.actions';

{
  allTodos:{
    todos:[]
  }
}
{
payload:todos:[]
}
export interface State {
  allTodos: TodoState;
 }

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

const todosReducer = createReducer(
  initialState,
  on(TodoActions.loadTodo, state => {
    console.log({ ...state });
    return ({ ...state });
  }),
  on(
    TodoActions.loadSuccessTodo,
    (state, action: any) => {
      console.log('loadSuccessTodo', action);
      const newState ={...state, todos:action.payload};
      return (newState);
    }),

);

function reducer(state: TodoState | undefined, action: Action) {
  return todosReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
  allTodos: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
