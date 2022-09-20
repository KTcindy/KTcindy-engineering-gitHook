import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import "./index.css";
// loading 组件
function LoadEffect() {
  return (
    <div className="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
export default class List extends Component {
  render() {
    let { list, flag } = this.props;
    // const loading = "加载中。。。。。。"
    if (flag) {
      return (
        <div className="xl:w-4/5 xl:m-auto">
          <ul className="flex  flex-wrap justify-center">
            {list.map((item, index) => {
              return (
                <li
                  key={item.id + index}
                  className="xl:w-1/5 w-2/5 p-4 flex justify-center m-2 bg-gray-300  flex-col items-center"
                >
                  <div>
                    <h1 className="text-center">{"#" + (index + 1) * 1}</h1>
                    <LazyLoad
                      height={100}
                      once={true}
                      offset={100}
                      placeholder={
                        <img
                          width="120px"
                          className="m-auto"
                          height="100%"
                          src="https://img.zcool.cn/community/01415f5996acdaa8012156038f6b78.gif"
                          alt="加载失败"
                        />
                      }
                    >
                      <img
                        className="m-auto"
                        width="120px"
                        src={item.owner.avatar_url}
                      />
                    </LazyLoad>

                    <div className="text-center text-red-300 text-base">
                      {item.name}
                    </div>
                    <p className="text-sm">
                      <i
                        className="fa fa-user mx-1"
                        style={{ color: "rgb(255, 191, 116)" }}
                      ></i>
                      {item.name}
                    </p>
                    <p className="text-sm">
                      <i
                        className="fa fa-star mx-1"
                        style={{ color: "rgb(255, 215, 0)" }}
                      ></i>
                      {item.stargazers_count} &nbsp; stars
                    </p>
                    <p className="text-sm">
                      <i
                        className="fa fa-code-fork mx-1"
                        style={{ color: "rgb(129, 195, 245)" }}
                      ></i>
                      {item.forks} &nbsp; forks
                    </p>
                    <p className="text-sm">
                      <i
                        className="fa fa-warning mx-1"
                        style={{ color: "rgb(241, 138, 147)" }}
                      ></i>
                      {item.open_issues} &nbsp; Open issues
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="loading text-center flex">
            <LoadEffect />
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading text-center flex">
          <LoadEffect />
        </div>
      );
    }
  }
}
