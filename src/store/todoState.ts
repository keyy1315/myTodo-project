import { atom } from 'jotai';
import { Todo } from '../types/todo';
import dummyTodo from '../data/dummyTodo';


export const todosAtom = atom<Todo[]>(dummyTodo); 