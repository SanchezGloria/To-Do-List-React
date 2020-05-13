import React, { useState, useEffect } from 'react';
import api from '../Services/api';
import Board from './Board/Board';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Edit from './Edit';
// import Landing from './Landing';
import Menu from './Menu';
import '../assets/scss/main.scss';

function App() {
  const [data, setData] = useState({
    // board: {
    //   list: []
    // }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setData(data);
    });
  }, []);

  // const [cards, setCard] = useState([]);
  const [filterText, setFilterText] = useState('');

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  // const toggleEdit = (props) => {
  //   console.log(props);
  //   console.log(apiData[0].cards);

  //   console.log(props.match.params.id);

  //   // // const { resultStore } = this.state;

  //   const clickedId = props.match.params.id;
  //   const foundTask = apiData[0].cards.find((card) => card.id === clickedId);
  //   console.log(foundTask);

  //   if (foundTask !== undefined) {
  //     return <Edit task={foundTask} />;
  //   } else {
  //     console.log('No existe');
  //   }
  // };

  return (
    <div className="App">
      <Header filterText={filterText} toggleMenu={toggleMenu} handleFilter={handleFilter} />
      <Board />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Edit />
      <Edit />
      {/* <Switch>
        <Route exact path="/" render={getLanding} />
        <Route path="/edit/:id" render={toggleEdit} />
      </Switch> */}
    </div>
  );
}

export default App;
