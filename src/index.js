//React의 초기 제어 화면
//App을 불러오는 거 외에는 하등 쓸모없는 페이지
//...이었는데 지금은 Provider로 App을 감싸는 역할을 함
//Provider란? 이 컴포넌트 안의 함수들은 store를 공동으로 사용할 수 있음
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
