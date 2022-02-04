import React from 'react';
import Desktop from '../components/Desktop';
import MainPanel from '../components/MainPanel';

function desktop() {
  return (
    <div>
      <Desktop />

      <MainPanel push="/vscode"/>
    </div>
  );
}

export default desktop;
