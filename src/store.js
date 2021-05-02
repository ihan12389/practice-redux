//여기는 Redux를 구현하는 페이지
//이곳에서 기존의 redux의 로직을 구현할 수 있다
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

//이곳에서 반출하는 함수 중 하나다
//다른 사용자들이 좀 더 사용하기 편하라는 배려다
//특별한 의미는 없음
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

//리듀서의 로직은 pure와 동일
//action의 type을 사용해 state를 제어
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

//store를 생성
const store = createStore(reducer);

//반출할 함수들을 객체로 묶음
export const actionCreators = {
  addToDo,
  deleteToDo,
};

//store를 외부로 반출
export default store;
