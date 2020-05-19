import React, { useState, useEffect, useRef } from 'react';
import api from '../Services/api';
import Board from './Board/Board';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Edit from './Edit';
// import Landing from './Landing';
import Menu from './Menu';
import LocalStorage from '../Services/localStorage';
import State from './State';
import '../assets/scss/main.scss';

function App() {
  const [data, setData] = useState({
    // board: {
    //   list: []
    // }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const dragItem = useRef();
  // const listOfDragItem = useRef();
  const dragNode = useRef();
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (LocalStorage.isValid()) {
      const lsData = LocalStorage.get();
      setData(lsData);
      // console.log(lsData);
    } else {
      api.getDataFromApi().then(setData);
    }
  }, []);

  useEffect(() => {
    LocalStorage.set(data);
  });
  const filteredTasks = () => {
    console.log(data.board.list);

    // debugger;

    return data.board.list.map((item) => {
      const newList = { ...item };

      newList.cards = newList.cards.filter((card) => {
        return card.title.toUpperCase().includes(filterText.toUpperCase());
      });

      return newList;
    });
  };

  const getListData = () => {
    // console.log(data.board);

    return data.board ? filteredTasks() : [];
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const handleDragStart = (evAction) => {
    const listIndex = getListIndex(evAction.listId);
    const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
    dragItem.current = cardIndex;
    // listOfDragItem.current = listIndex;
    dragNode.current = evAction.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setDragging(true);
    console.log(listIndex + 'lista' + cardIndex + 'card');
  };

  const handleDragEnd = () => {
    console.log('ending drag..');
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    // listOfDragItem.current = null;
  };

  const handleDragEnter = (evAction) => {
    const listIndex = getListIndex(evAction.listId);
    const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card !== undefined && card.id === evAction.cardId);
    console.log('entering drag', listIndex, cardIndex);
    const currentItem = dragItem.current;
    // const currentList = listOfDragItem.current;
    if (evAction.target !== dragNode.current) {
      setData((oldData) => {
        let newData = JSON.parse(JSON.stringify(oldData));
        console.log(newData.board.list[listIndex].cards[cardIndex]);
        // console.log(currentList);
        console.log(currentItem);

        // const currentCard = data.board.list[listIndex].cards.splice(cardIndex, 1);
        // data.board.list[listIndex].cards.splice(cardIndex - 1, 0, currentCard[0]);

        newData.board.list[listIndex].cards.splice(cardIndex, 0, newData.board.list[listIndex].cards.splice(currentItem, 1)[0]);
        // newData.board.list[listIndex].splice(cardIndex, 0, newData.board.list[currentItem.listIndex].cards.splice(currentItem.cardIndex, 1)[0]);
        dragItem.current = cardIndex;
        return newData;
      });
      console.log('TARGET IS NOT THE SAME');
    }
  };

  const getStylesDragging = (evAction) => {
    const listIndex = getListIndex(evAction.listId);
    const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
    dragItem.current = cardIndex;
    const currentItem = dragItem.current;
    if (currentItem === cardIndex) {
      return 'current js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm';
    }
  };

  const handleAction = (evAction) => {
    if (evAction.action === 'add-new-list') {
      data.board.list.push({
        id: 'list-' + getNewId(),
        title: '',
        cards: [],
      });
      console.log(data.board.list);
    } else if (evAction.action === 'add-new-card') {
      const listIndex = getListIndex(evAction.listId);
      // CENTRALIZO ESTE CÓDIGO REPETIDO EN UNA FUNCIÓN
      // const listIndex = data.board.list.findIndex((list) => list.id === evAction.listId);
      // // console.log(listIndex);
      data.board.list[listIndex].cards.push({
        id: 'card-' + getNewId(),
        title: 'Nueva tarea',
        description: '',
        tags: [],
      });
    } else if (evAction.action === 'delete-list') {
      const listIndex = getListIndex(evAction.listId);
      data.board.list.splice(listIndex, 1);
    } else if (evAction.action === 'modify-list-title') {
      const listIndex = getListIndex(evAction.listId);
      data.board.list[listIndex].title = evAction.value;
    } else if (evAction.action === 'delete-card') {
      debugger;
      const listIndex = getListIndex(evAction.listId);
      const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
      data.board.list[listIndex].cards.splice(cardIndex, 1);
    } else if (evAction.action === 'move-list-left') {
      const listIndex = getListIndex(evAction.listId);
      const currentList = data.board.list.splice(listIndex, 1);
      data.board.list.splice(listIndex - 1, 0, currentList[0]);
    } else if (evAction.action === 'move-list-right') {
      const listIndex = getListIndex(evAction.listId);
      const currentList = data.board.list.splice(listIndex, 1);
      data.board.list.splice(listIndex + 1, 0, currentList[0]);
    } else if (evAction.action === 'move-card-up') {
      const listIndex = getListIndex(evAction.listId);
      const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
      const currentCard = data.board.list[listIndex].cards.splice(cardIndex, 1);
      data.board.list[listIndex].cards.splice(cardIndex - 1, 0, currentCard[0]);
    } else if (evAction.action === 'move-card-down') {
      debugger;
      const listIndex = getListIndex(evAction.listId);
      const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
      const currentCard = data.board.list[listIndex].cards.splice(cardIndex, 1);
      data.board.list[listIndex].cards.splice(cardIndex + 1, 0, currentCard[0]);
    } else if (evAction.action === 'modify-card-title') {
      const listIndex = getListIndex(evAction.listId);
      const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
      data.board.list[listIndex].cards[cardIndex].title = evAction.value;
    } else if (evAction.action === 'modify-card-description') {
      const listIndex = getListIndex(evAction.listId);
      const cardIndex = data.board.list[listIndex].cards.findIndex((card) => card.id === evAction.cardId);
      data.board.list[listIndex].cards[cardIndex].description = evAction.value;
      console.log(data.board.list[listIndex].cards[cardIndex].description);
    }
    setData({ ...data });
  };

  const getNewId = () => {
    return Date.now();
  };

  const getListIndex = (id) => {
    return data.board.list.findIndex((list) => list.id === id);
  };

  const handleInput = (value) => {
    setFilterText(value);
  };

  const toggleEdit = (props) => {
    const clickedId = props.match.params.id;
    for (let index = 0; index < data.board.list.length; index += 1) {
      console.log(data.board);

      const list = data.board.list[index];
      console.log(list);

      const cardFound = list.cards.find((card) => card.id === clickedId);
      console.log(cardFound);

      if (cardFound !== undefined) {
        return <Edit card={cardFound} handleAction={handleAction} listId={list.id} />;
      }
    }
  };
  return (
    <div className="App">
      <Header filterText={filterText} toggleMenu={toggleMenu} handleInput={handleInput} />
      <Board list={getListData()} handleAction={handleAction} handleDragStart={handleDragStart} getStylesDragging={getStylesDragging} dragging={dragging} handleDragEnter={handleDragEnter} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Switch>
        <Route path="/edit/:id" render={toggleEdit} />
      </Switch>
    </div>
  );
}

export default App;
