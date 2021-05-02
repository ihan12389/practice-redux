//실질적으로 모든 제어가 이뤄지는 총사령부
//Router를 통해 url을 받아 component를 불러온다
//여기서는 기본이 Home 컴포넌트이고 id라는 값을 url로 받아왔을 경우엔 Detail을 로딩
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" exact component={Detail}></Route>
    </Router>
  );
}

export default App;
