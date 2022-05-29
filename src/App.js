import React, { useState, useCallback } from 'react';
// import {useEffect} from 'react';
import List from "./List";

import Container from "react-bootstrap/Container";
import socksJson from './socks.json';
import './App.css';
import logo from './logo.png';
import profile from './profile.png';

export default function App() {
  // This state can be stored also for example in Redux
  // const [data, setData] = useState([]);
  // const [sortType, setSortType] = useState('albums');
  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       title: 'title',
  //       height: 'height',
  //       width: 'width',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...socksJson].sort((a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1);
  //     setData(sorted);
  //   };
  //   sortArray(sortType);
  // }, [sortType]);

  const [currentView, setCurrentView] = useState("list");

  const handleToggleCurrentView = useCallback(() => {
    setCurrentView(view => (view === "list" ? "grid" : "list"));
  }, [setCurrentView]);

  return (
  <div className="App">
    <Container>
      <List
        items={socksJson}
        currentView={currentView}
        onToggleCurrentView={handleToggleCurrentView}
      />
    </Container>
    
    <header className='header'>
      <div className='h1'>
      <img src={logo} width='155px' alt=''></img>
      <img src={profile} width='155px' height='65px' alt=''></img>
      </div>
    </header><br /><br /><br /><br /><br /><br /><br />
    <div className='top'>
    <div className='DispTitle'>
      Socks Gallery
    </div>
    {/* <div>
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="">None</option>
        <option value="title">Title</option>
        <option value="height">Height</option>
        <option value="width">width</option>
      </select>
    </div> <br />
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    </div>
    <hr size="0.1px" width="97%" color="grey"></hr> <br /><br />
    <div className='pics'>
    {data.map(socksJson => (
      <div key={socksJson.id} style={{ margin: '8px' }}>
        <img src={socksJson.thumbnail} alt=""></img>
        <div>{`${socksJson.title.slice(0,-4)}`}</div>
        <div>{`Height: ${socksJson.height.toFixed(2)}`}</div>
        <div>{`Width: ${socksJson.width.toFixed(2)}`}</div>
      </div>
    ))} */}
    </div>
  </div>
  );
}
