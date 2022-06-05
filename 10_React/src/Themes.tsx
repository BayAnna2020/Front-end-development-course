import React from 'react';
export const themes = {
  dark: {
    backgroundColor: '#212529',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}
export const MyContext = React.createContext(themes.light);