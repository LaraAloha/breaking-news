import React from 'react';
import './news.css';
import { DefaultValues, NewsDataset } from '../../store/types'

type Props = {
  defaultValues: DefaultValues
  newsData: any
}
export class News extends React.PureComponent<Props, {}> {
  public render(): React.ReactElement {
    return (
      <div className="root">

        {this.props.newsData.news && this.renderElements()}
      </div>
    )
  }

  private renderElements = (): React.ReactElement[] => {
    return this.props.newsData.news.map((item: NewsDataset) => {
      return (
        <div>
          <div>{item.title}</div>
          <div>{item.snippet}</div>
        </div>
      )
    })
  }

}