import React from 'react';
import ListHeader from './ListHeader';
import Card from './Card';
import ListFooter from './ListFooter';

const List = (props) => {
  // console.log(props.list, 'list');

  const cardElement = props.list.map((card, index) => {
    return <Card key={index} card={card} />;
  });
  // const cardElement = props.list.cards.map((card, index) => {
  //   return <Card key={index} card={card} />;
  // });

  return (
    <div className="app-list">
      <div className="p-1 rounded-sm bg-primary shadow">
        <ListHeader id={props.key} handleDeleteList={props.handleDeleteList} title={props.list.title} />
        {cardElement}
        {/* <Card card={props.list} /> */}
        <ListFooter handleNewCard={props.handleNewCard} />
      </div>
    </div>
  );
};

export default List;
