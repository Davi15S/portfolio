import React from 'react';
import VSCode from '../components/VSCode';
import MainPanel from '../components/MainPanel';

function vscode() {
  return (
    <div>
      <VSCode />
      <MainPanel push="/desktop"/>
    </div>
  );
}

export default vscode;
