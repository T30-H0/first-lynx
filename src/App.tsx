import { useCallback, useEffect, useState } from '@lynx-js/react';

import './App.css';
import arrow from './assets/arrow.png';
import lynxLogo from './assets/lynx-logo.png';
import reactLynxLogo from './assets/react-logo.png';

export function App() {
  return (
    <view>
      <view className="Background" />
      <view className="App">
        <text className="Title">Home</text>
        <text className="Title">Product</text>
      </view>
    </view>
  );
}
