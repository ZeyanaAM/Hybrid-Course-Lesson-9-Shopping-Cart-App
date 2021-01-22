import React, { useContext } from 'react';
import { Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const ToggleButton = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return <Button title="Toggle Dark Mode" onPress={toggleDarkMode} />;
};
