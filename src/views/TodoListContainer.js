import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodoItem, clearTodoItems } from "../store/actions";

const mapStateToProps = (state) => ({
  todoItems: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTodoItems: (item) => {
    dispatch(addTodoItem(item));
  },
  deleteItems: () => {
    dispatch(clearTodoItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
