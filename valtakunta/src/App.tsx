import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(0);
  const setPageNumberTo = (pageNumber: number) => {
    setPage(pageNumber);
  };
  return (
   <>
    <p>{page}</p>
    <BottomNav setPageNumberTo={setPageNumberTo} />
   </>
  );
}

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
