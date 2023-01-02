/* eslint-disable no-console */

import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import * as React from 'react';
import './App.css';

const menuItems: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
    onClick: () => console.log('Add')
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: { iconName: 'Upload' },
    onClick: () => console.log('Upload')
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share')
  },
  {
    key: 'download',
    text: 'Download',
    iconProps: { iconName: 'Download' },
    onClick: () => console.log('Download')
  }
];

const styles = {
  root: [
    {
      background: 'transparent',
      marginTop: '5px',
      paddingLeft: '0px',
    }
  ]
};

export const Menu: React.FunctionComponent = (): JSX.Element => {
  return (
    <CommandBar
      items={menuItems}
      styles={styles}
      ariaLabel="Inbox actions"
      primaryGroupAriaLabel="Email actions"
      farItemsGroupAriaLabel="More actions"
    />
  );
};
