import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
// import Menu from './Menu';
import '../assets/scss/main.scss';
// import Board from '../api/board.json';

function Landing(props) {
  // const apiData = Board.board.list;
  // const [list, setList] = useState(apiData);

  // const handleNewList = (data) => {
  console.log(props.list);
  //   setList();
  // };
  return (
    // <div className="App">
    <>
      <Header handleInput={props.handleInput} searchInput={props.searchInput} />
      {/* <Menu /> */}
      <Main handleNewList={props.handleNewList} list={props.list} card={props.card} handleNewCard={props.handleNewCard} handleDeleteList={props.handleDeleteList} />
      {/* </div> */}
    </>
  );
}

export default Landing;
