import React, { Component } from 'react'
import headerCss from '../../common/css/mobile/header.less'

class PcHeader extends Component {
  render() {
    return (
      <div class={ headerCss.header}>
        <img src={process.env.PUBLIC_URL + '/image/news.png'} alt="网站图标"/>
        <span>ReactNews</span>
      </div>
    )
  }
}

export default PcHeader
