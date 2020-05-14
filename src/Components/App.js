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
    }
    setData({ ...data });
  };

  const getNewId = () => {
    return Date.now();
  };

  const getListIndex = (id) => {
    return data.board.list.findIndex((list) => list.id === id);
  };
  const getCardIndex = (id) => {
    return data.board.list.findIndex((list) => list.id === id);
  };
  // const handleNewList = (data) => {
  //   console.log(data);
  //   const newList = [...data];
  //   newList.push({ title: '', cards: [] });
  //   setData(newList);
  // };
  // const handleDeleteList = (id) => {
  //   const prevList = [...data];
  //   prevList.splice(id, 1);
  //   setData(prevList);
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

  // const handleNewCard = (id) => {
  //   // const newCard = [...cards];
  //   // newCard.push({ id: '', title: '', description: '', tags: [] });
  //   // setCard(newCard);
  //   // const listmapped = list.map((item) => {
  //   //   if (item.id === parseInt(id)) {
  //   //     item.cards.push({ id: '', title: '', description: '', tags: [] });
  //   //   }
  //   // });
  //   // console.log(listmapped);
  //   // return setList(list);
  // };
  // console.log(cards);

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
    debugger;
    for (let index = 0; index < data.board.list.length; index += 1) {
      console.log(data.board);

      const list = data.board.list[index];
      const cardFound = list.cards.find((card) => card.id === clickedId);
      console.log(cardFound);

      if (cardFound) {
        return <Edit card={cardFound} />;
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
