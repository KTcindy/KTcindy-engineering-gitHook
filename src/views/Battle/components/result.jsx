import React, { Component } from "react";
import baseFetch from "../../../utils/require";
import LazyLoad from "react-lazyload";

export default class Result extends Component {
  URL = "/users/";
  state = {
    arrs: [],
  };
  componentDidMount = () => this.init();
  init = () => {
    let {search }=this.props.history.location
    let data = search.slice(1).split('&').join(' ')
    let [ onw, two ] = data.replace(/=/g, ':').split(' ')
    let URLS = [baseFetch(this.URL + onw.match(/oneName:(\S*)/)[1], {}), baseFetch(this.URL + two.match(/twoName:(\S*)/)[1], {})]
    Promise.all(URLS).then(res => {
      this.setState({ arrs: res })
    })
  };
  goBack = () => {
    let { history } = this.props;
    history.goBack();
  };
  render() {
    let { arrs } = this.state;
    return (
      <div>
        <div className="flex justify-center mt-8">
          {arrs.map((item, index) => {
            return (
              <div className="w-2/5 p-10" key={item.id}>
                <div className="w-2/4 m-auto bg-gray-400 p-8 rounded-lg">
                  <h4 className="text-center text-3xl p-2">
                    {index % 2 ? "Loser" : "Winner"}
                  </h4>
                  <div>
                    <LazyLoad
                      height={100}
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
                      <img src={item.avatar_url} alt="加载失败" />
                    </LazyLoad>
                  </div>
                  <h4 className="text-center text-xl p-2">
                    Scores: {item.public_repos}
                  </h4>
                  <h4 className="text-center text-xl p-2 text-blue-500">
                    {item.name}
                  </h4>
                  <div>
                    <p>
                      <i className="fa fa-location-arrow"></i>
                      <span className="pl-2">{item.name}</span>
                    </p>
                    <p>
                      <i className="fa fa-american-sign-language-interpreting"></i>
                      <span className="pl-2">{item.public_gists}</span>
                    </p>
                    <p>
                      <i className="fa fa-user-plus"></i>
                      <span className="pl-2">{item.following}</span>
                    </p>
                    <p>
                      <i className="fa fa-code"></i>
                      <span className="pl-2">{item.public_repos}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={this.goBack}
          className="rounded bg-gray-300 px-8 pt-4 py-4 m-auto flex mt-4"
        >
          RESET
        </button>
      </div>
    );
  }
}
