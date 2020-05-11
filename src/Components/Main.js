import React from 'react';
// import ListHeader from './ListHeader';
// import Card from './Card';
// import ListFooter from './ListFooter';
import ListNew from './ListNew';
import List from './List';

const Main = (props) => {
  console.log(props.card, 'main');
  console.log(props.list, 'main');
  // const listElements = props.list.map((item, index) => {
  //   console.log(item);

  //   return <List key={index} list={item} handleNewCard={props.handleNewCard} handleDeleteList={props.handleDeleteList} card={props.card} />;
  // });
  return (
    <main className="app-board d-flex flex-nowrap">
      {/* {listElements} */}
      <List list={props.list} handleNewCard={props.handleNewCard} handleDeleteList={props.handleDeleteList} card={props.card} />
      <ListNew handleNewList={props.handleNewList} />
    </main>
  );
};

export default Main;
