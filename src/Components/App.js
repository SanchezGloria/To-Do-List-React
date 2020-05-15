import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import Board from './Board/Board';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Edit from './Edit';
// import Landing from './Landing';
import Menu from './Menu';
import LocalStorage from '../Services/localStorage';
import '../assets/scss/main.scss';

function App() {
  const [data, setData] = useState({
    // board: {
    //   list: []
    // }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterText, setFilterText] = useState('');

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

  const getListData = () => {
    // console.log(data.board);

    return data.board ? data.board.list : [];
  };

  // const [cards, setCard] = useState([]);

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
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
    }
    setData({ ...data });
  };

  const getNewId = () => {
    return Date.now();
  };

  const getListIndex = (id) => {
    return data.board.list.findIndex((list) => list.id === id);
  };
  // const getCardIndex = (id) => {
  //   return data.board.list.findIndex((list) => list.id === id);
  // };

  // const handleInput = (value) => {
  //   setSearchInput(value);
  // };

  // const filteredTasks = () => {
  //   for (const item of data) {
  //     const filteredTasks = item.cards.filter((task) => {
  //       console.log(task.title);

  //       return task.title.toUpperCase().includes(searchInput.toUpperCase());
  //     });
  //     return filteredTasks;
  //   }
  //   // const filteredTasks = list[0].cards.filter((task) => {
  //   //   console.log(task.title);

  //   //   return task.title.toUpperCase().includes(searchInput.toUpperCase());
  //   // });
  //   // return filteredTasks;
  // };

  // const getLanding = () => {
  //   return <Landing handleNewList={handleNewList} list={filteredTasks()} card={cards} toggleEdit={toggleEdit} handleNewCard={handleNewCard} handleDeleteList={handleDeleteList} handleInput={handleInput} searchInput={searchInput} />;
  // };

  const toggleEdit = (props) => {
    const clickedId = props.match.params.id;
    // for (const list of data.board.list) {
    //   for (const card of list.cards) {
    //     if (card.id === clickedId) {
    //       return card;
    //     }
    //   }

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
  // console.log(props.match.params.id);
  // const foundTask = apiData[0].cards.find((card) => card.id === clickedId);
  // console.log(foundTask);
  // if (foundTask !== undefined) {
  //   return <Edit task={foundTask} />;
  // } else {
  //   console.log('No existe');
  // }
  // };

  return (
    <div className="App">
      <Header filterText={filterText} toggleMenu={toggleMenu} handleFilter={handleFilter} />
      <Board list={getListData()} handleAction={handleAction} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* <Edit />
      <Edit /> */}
      <Switch>
        {/* <Route exact path="/" render={getLanding} /> */}
        <Route path="/edit/:id" render={toggleEdit} />
      </Switch>
    </div>
  );
}

export default App;
