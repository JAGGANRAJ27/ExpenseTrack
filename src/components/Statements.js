import React from 'react';
import List from './Main/List/List';
import DownloadData from './DownloadData';

function Statements() {

  return (
    <div>
      <div id="statement">
      <List/>
      </div>
      <DownloadData
        rootElementId="statement"
        DownloadFileName="NJ-statement" />
    </div>
  )
}

export default Statements