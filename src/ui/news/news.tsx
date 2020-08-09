import React from 'react';
import { SwiperComponent } from '../swiper/swiper'
import './news.css';
import { DefaultValues, NewsDataset, Uitext } from '../../store/types'

type Props = {
  defaultValues: DefaultValues
  uiText: Uitext
  newsData: any
}
export class News extends React.PureComponent<Props, {}> {
  public render(): React.ReactElement {
    const { uiText, newsData } = this.props
    return (
      <div className="root">
        {uiText.titles.news}
        {newsData.news && this.renderElements()}
      </div>
    )
  }

  private renderElements = (): React.ReactElement => {
    const newsElements = this.props.newsData.news.map((item: NewsDataset) => {
      return (
        <div className="card" key={item.title}>
          <div className="title">{item.title}</div>
          <div className="snippet">{item.snippet}</div>
        </div>
      )
    })
    return <SwiperComponent newsData={newsElements} />
  }

}