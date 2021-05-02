/**기본 JS 만으로 구성한 COUNTER 로직 페이지**/

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handledAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handledMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handledAdd);
// minus.addEventListener("click", handledMinus);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** redux로 구현한 COUNTER 로직 페이지 */
//redux를 불러와
import { createStore } from "redux";

const minus = document.getElementById("minus");
const add = document.getElementById("add");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

number.innerText = 0;

//애를 통해 count를 변환할거라고 선언을 해줌
//그거는 action의 type을 통해서 변환시킬거구
//초기 count는 0입니다
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//Store를 만들어줌. 그리고 거기에 count를 변경시키는 countModifier를 집어넣음
const countStore = createStore(countModifier);

//Store의 State는 dispatch를 통해서 변경!
//type이 들어있는 객채를 보내면 변경시켜줌
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

const onChange = () => {
  number.innerText = countStore.getState();
};

//Sotre의 State가 변할 때 onChange 실행!
countStore.subscribe(onChange);

const handledAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handledMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handledAdd);
minus.addEventListener("click", handledMinus);

//Store의 State를 출력!
// console.log(countStore.getState());
