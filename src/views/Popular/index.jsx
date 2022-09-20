import React, { Component } from "react";
import ListItem from "@/components/list/index.jsx";
// engineering/src/components/list/index.jsx
import baseFetch from "@/utils/require";
import "./index.css";
export default class AppDemo extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
      loading: true,
      titleList: ["All", "Javascript", "Ruby", "Java", "Css", "Python"],
      list: [],
      active: "All",
      ajaxData: {
        q: "stars:>1",
        sort: "stars",
        order: "desc",
        type: "Repositories",
        page: 1,
      },
    };
  }
  URL = "/search/repositories";
  myRef = React.createRef();
  // 滚动触发事件
  handleScroll = () => {
    let res =
      this.myRef.current.scrollHeight -
      this.myRef.current.clientHeight -
      this.myRef.current.scrollTop;
    if (!res) {
      this.setState(
        (prevstate) => ({
          ajaxData: {
            ...prevstate.ajaxData,
            page: ++prevstate.ajaxData.page,
          },
        }),
        () => {
          this.init();
        }
      );
    }
  };

  componentDidMount = () => this.init();

  // 初始化方法
  init = () => {
    let { list } = this.state;
    baseFetch(this.URL, this.state.ajaxData)
      .then((res) => {
        let lists = list.concat(res.items);
        this.setState({ list: lists, flag: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 点击tab切换类型
  clickActive = (item) => {
    this.setState({ list: [], flag: false, active: item });
    let _q = `stars:>1 language:${item}`;
    let _ajaxData = { ...this.state.ajaxData, q: _q };
    this.setState({ ajaxData: _ajaxData }, () => {
      this.init();
    });
  };
  render() {
    let { titleList, list, active, flag } = this.state;
    return (
      <div
        style={{ height: "calc(100vh)" }}
        className="overflow-x-hidden overflow-y-auto"
        ref={this.myRef}
        onScroll={() => this.handleScroll()}
      >
        <ul className="flex m-auto justify-center w-1/2">
          {titleList.map((item) => {
            return (
              <li
                className={[
                  "p-4",
                  "cursor",
                  active === item ? "active" : "",
                ].join(" ")}
                onClick={this.clickActive.bind(this, item)}
                key={item}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="">
          <ListItem list={list} flag={flag} />
        </div>
      </div>
    );
  }
}
