import React from 'react';
import { config } from '../../store/config';
import { getNewsData } from '../../dev/get-news-data'
import { News } from '../news/news'
import './app.css';
import { Config, NewsDataset } from '../../store/types';

type State = {
  newsData: NewsDataset | any
}

export class App extends React.PureComponent<{}, State> {
  public state: State = {
    newsData: {}
  }
  public componentDidMount(): void {
    this.getNewsDataElements()
  }

  public render(): React.ReactElement {
    return (
      <div className="root">

        <News
          defaultValues={config.defaultValues}
          newsData={this.state.newsData}
          uiText={config.uiText}
        />

        <button className="btn" onClick={this.getNewsDataAndTweets}>
          {config.uiText.titles.btn}
        </button>

      </div>
    )
  }

  private getNewsDataAndTweets = (): any => {
    this.getNewsDataElements()
  }

  private getNewsDataElements = (): any => {
    const { googleAccesKey, sid, searchRequest } = config.defaultValues
    const news = getNewsData(googleAccesKey, sid, searchRequest)
    news.then((data: any) => {
      this.setState({
        newsData: { ...this.state.newsData, news: data.items }
      })
    })
  }


}

export default App