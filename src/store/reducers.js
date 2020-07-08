import { ADD_TODO_ITEM, CLEAR_TODO_ITEMS} from './actions'

const initialState = {
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        items: [...state.items, action.item]
      }
    case CLEAR_TODO_ITEMS:
      return {
        items: []
      }
    default:
      return state
  }
}

export default reducer
