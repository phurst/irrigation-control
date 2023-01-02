
import { Stack } from '@fluentui/react';
import * as React from 'react';
import './App.css';
import { Menu } from './Menu';
import { Title } from './Title';

export const IrrigationControlContainer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div id='irrigation-control-container' className='IrrigationControlContainer'>
      <Stack>
        <Title/>
        <Menu/>
      </Stack>
    </div>
  );
};
