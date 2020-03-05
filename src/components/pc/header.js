import React, { Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import headerCss from "../../common/css/pc/header.less";
import { Link, withRouter } from "react-router-dom";
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

class PcHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: props.location.pathname.substring(1) || "home"
    };
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Row class={headerCss.header}>
        <Col span={1}></Col>
        <div class={headerCss.headerImg}>
          <img
            src={process.env.PUBLIC_URL + "/image/news.png"}
            alt="网站图标"
          />
          ReactNews
        </div>
        <Col span={16}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Link to="/home">
                <Icon type="home" />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="news">
              <Link to="/news">
                <Icon type="book" />
                头条
              </Link>
            </Menu.Item>
            <Menu.Item key="domestic">
              <Link to="/domestic">
                <Icon type="book" />
                国内
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2}>col-8</Col>
      </Row>
    );
  }
}

export default withRouter(PcHeader);
