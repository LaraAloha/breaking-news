import React from 'react';
import { getNews } from '../dev/get-news'
import './news.css';
import { DefaultValues } from '../store/types'

type Props = {
  defaultValues: DefaultValues
}
type State = {}

export class News extends React.PureComponent<Props, State> {
  public render(): React.ReactElement {
    const { googleAccesKey, sid, searchRequest } = this.props.defaultValues
    const newsData = getNews(googleAccesKey, sid, searchRequest)
    console.log(newsData)
    return (
      <div className="root">


      </div>
    )
  }
}