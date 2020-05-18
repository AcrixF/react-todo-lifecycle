import React, {Component} from 'react';
import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Todo from "./Todo/Todo";
import Footer from "../shared/components/layout/Footer";

export default class App extends Component {
  render = () =>
      <div className="App">
        <Header title="Todo List" />
        <Content>
          <Todo />
        </Content>
        <Footer/>
      </div>
}
