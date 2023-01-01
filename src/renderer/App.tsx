import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { IrrigationControlContainer } from './IrrigationControlContainer';

initializeIcons();

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IrrigationControlContainer />} />
      </Routes>
    </Router>
  );
};
