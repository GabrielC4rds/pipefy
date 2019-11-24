import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import {  MdBrightness5 } from 'react-icons/md';

const SwitchColor = styled.button`
  position: fixed;
  right: 3%;
  bottom: 5%;
  background: transparent;
  border: none;
  cursor: pointer;
`;

function App(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle/>
        <Header/>
        <Board/>
      </DndProvider>
      <SwitchColor onClick={toggleTheme}>
        <MdBrightness5 size={24} color= {props.iconColor}/>
      </SwitchColor>
    </ThemeProvider>
  );
}

export default App;
