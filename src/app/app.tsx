import React from 'react';
import { config } from '../store/config';
import { Config } from '../store/types';
import { News } from '../news/news'

import './app.css';


type State = {}


export class App extends React.PureComponent<{}, State> {

  public render(): React.ReactElement {
    return (
      <div className="root">
        <News
          defaultValues={config.defaultValues}
        />

      </div>
    )
  }
}

export default App