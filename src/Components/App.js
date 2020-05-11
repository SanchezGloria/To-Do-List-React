import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Edit from './Edit';
import Landing from './Landing';
import Card from './Card';
// import Main from './Main';
// import Menu from './Menu';
import List from './List';
import '../assets/scss/main.scss';
import Board from '../api/board.json';

function App() {
  const apiData = Board.board.list;
  const [list, setList] = useState(apiData);
  const [cards, setCard] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleNewList = (data) => {
    console.log(data);
    const newList = [...list];
    newList.push({ title: '', cards: [] });
    setList(newList);
  };
  const handleDeleteList = (id) => {
    const prevList = [...list];
    prevList.splice(id, 1);
    setList(prevList);
  };

  const handleInput = (value) => {
    setSearchInput(value);
  };

  const filteredTasks = () => {
    console.log(list);
    for (const item of list) {
      const filteredTasks = item.cards.filter((task) => {
        console.log(task.title);

        return task.title.toUpperCase().includes(searchInput.toUpperCase());
      });
      return filteredTasks;
    }
    // const filteredTasks = list[0].cards.filter((task) => {
    //   console.log(task.title);

    //   return task.title.toUpperCase().includes(searchInput.toUpperCase());
    // });
    // return filteredTasks;
  };

  const handleNewCard = (id) => {
    // const newCard = [...cards];
    // newCard.push({ id: '', title: '', description: '', tags: [] });
    // setCard(newCard);
    // const listmapped = list.map((item) => {
    //   if (item.id === parseInt(id)) {
    //     item.cards.push({ id: '', title: '', description: '', tags: [] });
    //   }
    // });
    // console.log(listmapped);
    // return setList(list);
  };
  console.log(cards);

  const getLanding = () => {
    return <Landing handleNewList={handleNewList} list={filteredTasks()} card={cards} toggleEdit={toggleEdit} handleNewCard={handleNewCard} handleDeleteList={handleDeleteList} handleInput={handleInput} searchInput={searchInput} />;
  };

  const toggleEdit = (props) => {
    console.log(props);
    console.log(apiData[0].cards);

    console.log(props.match.params.id);

    // // const { resultStore } = this.state;

    const clickedId = props.match.params.id;
    const foundTask = apiData[0].cards.find((card) => card.id === clickedId);
    console.log(foundTask);

    if (foundTask !== undefined) {
      return <Edit task={foundTask} />;
    } else {
      console.log('No existe');
    }
  };

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Menu /> */}
      <Switch>
        <Route exact path="/" render={getLanding} />
        <Route path="/edit/:id" render={toggleEdit} />
      </Switch>
      {/* <Main handleNewList={handleNewList} list={list} /> */}
    </div>
  );
}

export default App;
