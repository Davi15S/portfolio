import React from 'react';
import VSCode from '../components/VSCode';
import MainPanel from '../components/MainPanel';

function vscode() {
  return (
    <div>
      <VSCode />
      <MainPanel vscode="/desktop" chrome="/chrome" csgo="/csgo"/>
    </div>
  );
}

export default vscode;
