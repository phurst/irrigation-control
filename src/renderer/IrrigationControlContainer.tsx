
import { Stack } from '@fluentui/react';
import * as React from 'react';
import './App.css';
import { Title } from './Title';

export const IrrigationControlContainer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <Stack>
        <Title/>
      </Stack>
    </div>
  );
};
