import React from 'react';
import { config } from '../../store/config';
import { getNews } from '../../dev/get-news'
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

  public render(): React.ReactElement {
    return (
      <div className="root">
        news
        <News
          defaultValues={config.defaultValues}
          newsData={this.state.newsData}
        />
        <button className="btn" onClick={this.getNewsAndTweets}>
          check what's new
        </button>
      </div>
    )
  }

  private getNewsAndTweets = (): any => {
    this.getNewsElements()
  }

  private getNewsElements = (): any => {
    const { googleAccesKey, sid, searchRequest } = config.defaultValues
    const news = getNews(googleAccesKey, sid, searchRequest)
    news.then((data: any) => {
      this.setState({
        newsData: { ...this.state.newsData, news: data.items }
      })
    })
  }


}

export default App