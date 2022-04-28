import React from 'react';
import { useState } from 'react';
import { KingCard, NobleCard, CitizenCard, WhoreCard, SlaveCard } from './data/cards';
import './App.css';
import { Card } from './styles';

function App() {
  const [page, setPage] = useState(0);
  const setPageNumberTo = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
   <>
    <Main page={page} />
    <ButtonSpace />
    <BottomNav setPageNumberTo={setPageNumberTo} />
   </>
  );
}

const ButtonSpace = () => {
  return (
    <div className='Blank'>
    </div>
  );
};

const Main = ({page}: {page:number}) => {
  switch (page) {
    case 0:
      return <King />;
    case 1:
      return <Noble />;
    case 2:
      return <Citizen />;
    case 3:
      return <Whore />;
    case 4:
      return <Slave />;
    default:
      return <p>Error 404</p>
  };
};

const King = () => {
  const list = KingCard.map((card) => <CardItem key={card.card} text={card} />);
  return (
    <ul className='list'>
      {list}
    </ul>
  );
};

const Noble= () => {
  const list = NobleCard.map((card) => <CardItem key={card.card} text={card} />);
  return (
    <ul className='list'>
      {list}
    </ul>
  );
};

const Citizen = () => {
  const list = CitizenCard.map((card) => <CardItem key={card.card} text={card} />);
  return (
    <ul className='list'>
      {list}
    </ul>
  );
};

const Whore = () => {
  const list = WhoreCard.map((card) => <CardItem key={card.card} text={card} />);
  return (
    <ul className='list'>
      {list}
    </ul>
  );
};

const Slave = () => {
  const list = SlaveCard.map((card) => <CardItem key={card.card} text={card} />);
  return (
    <ul className='list'>
      {list}
    </ul>
  );
};

const CardItem : React.FC<{text: Card}> = ({ text }) => {
  return (
    <li className='Container'>
      <div className='Item'>
        <h1>{text.card}</h1>
      </div>
      <div className='Item'>
        <h2>{text.title}</h2>
        <p>{text.text}</p>
      </div>
    </li>
  );
};

const BottomNav = ({setPageNumberTo}: {setPageNumberTo: any}) => {
  return (
    <>
      <button className="Hallitsija" onClick={() => setPageNumberTo(0)}>
        <p>Hallitsija</p>
      </button>
      <button className="Aatelinen" onClick={() => setPageNumberTo(1)}>
        <p>Aatelinen</p>
      </button>
      <button className="Kansalainen" onClick={() => setPageNumberTo(2)}>
        <p>Kansalainen</p>
      </button>
      <button className="Huora" onClick={() => setPageNumberTo(3)}>
        <p>Huora</p>
      </button>
      <button className="Orja" onClick={() => setPageNumberTo(4)}>
        <p>Orja</p>
      </button>
    </>
  );
};

export default App;
