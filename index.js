import React from 'react';
import ReactDOM from 'react-dom';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./pages/Home";
import Rout from './pages/Yabout';
import Contact from './pages/Yhome';
import Words from './pages/Swords';
import Number from "./pages/Bnumber";
import Sords from './pages/Raords';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <App/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Yabout" element={<Rout />} />
    <Route path="Yhome" element={<Contact />} />
    <Route path="Swords" element={<Words />} />
    <Route path="Bnumber" element={<Number />} />
    <Route path="Raords" element={<Sords />} />
  </Routes>
</BrowserRouter>,
  rootElement
);