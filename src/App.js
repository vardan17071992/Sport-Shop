import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import AboutPage from "./components/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NextPage from "./components/NextPage";
import ReactAudioPlayer from 'react-audio-player';


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Гантели",
      img: "Гантели.png",
      price: "100.11",
    },
    {
      id: 2,
      title: "Груша",
      img: "Груша.png",
      price: "150.86",
    },
    {
      id: 3,
      title: "Кепка",
      img: "Кепка.png",
      price: "59.11",
    },
    {
      id: 4,
      title: "Кроссовки",
      img: "Кроссовки.png",
      price: "127.54",
    },
    {
      id: 5,
      title: "Мяч",
      img: "Мяч.png",
      price: "55.23",
    },
    {
      id: 6,
      title: "Перчатки",
      img: "Перчатки.png",
      price: "95.28",
    },
    {
      id: 7,
      title: "Сумка",
      img: "Сумка.png",
      price: "81.65",
    },
    {
      id: 8,
      title: "Тренажер",
      img: "Тренажер.png",
      price: "215.54",
    },
    {
      id: 9,
      title: "Штанга",
      img: "Штанга.png",
      price: "111.88",
    },
  ]);

  
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <ReactAudioPlayer src="background_music.mp3" autoPlay loop />
        <Header />
        <Routes>
          <Route path="/" element={<Items items={items} handleDelete={handleDelete} />} />
          <Route path="/item/:id" element={<NextPage items={items} />} />
          <Route path="/about" element={<AboutPage items={items} handleDelete={handleDelete} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>


  );
}

export default App;
