export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const CLEAR_TODO_ITEMS = 'CLEAR_TODO_ITEMS'

export const addTodoItem = item => ({
  type: ADD_TODO_ITEM,
  item
})

export const clearTodoItems = () => ({
  type: CLEAR_TODO_ITEMS
})
