import React from 'react';
export const themes = {
  dark: {
    backgroundColor: '#343a40'
  },
  light: {
    backgroundColor: 'white'
  }
}
export const MyContext = React.createContext(themes.light);