import React, { Component } from "react";
import Card from "@/components/card/index.jsx";
import PropTypes from "prop-types";
import "./index.css";

// input 组件
function Inputs(props) {
  let { title, keyValue } = props;
  return (
    <div>
      <legend className="py-4 text-lg font-semibold ml-6">{title}</legend>
      <div className="flex justify-center">
        <input
          className="border-solid  border-2 border-light-blue-500 h-14 w-8/12 p-2"
          onChange={(e) => props.onChangInput(e, keyValue)}
          type="text"
          name={keyValue}
          placeholder="gthub username"
        />
        <button
          className="w-3/12 h-14 bg-gray-200 ml-4"
          onKeyDown={(e) => {
            if (e.keyCode == 3) {
              props.onClickAdd(keyValue);
            }
          }}
          onClick={() => props.onClickAdd(keyValue)}
          disabled={props[keyValue] ? false : true}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default class Battle extends Component {
  // 监听input
  changInput = (e, key) => {
    let { battleObject } = this.props;
    if (Object.keys(battleObject).includes(`${key}flag`)) {
      this.props.addBattle({ [`${key}flag`]: false });
    }
    this.props.addBattle({ [key]: e.target.value });
  };
  // add
  handleAdd = (key) => {
    let obj = { [key + "flag"]: true };
    this.props.addBattle({ ...obj });
  };
  // del
  handeldels = (key) => {
    let { battleObject } = this.props;
    this.props.delBattle({ [key]: battleObject[key] });
  };
  // 提交-Battle
  handelBattle = () => {
    let {
      history,
      battleObject: { oneName, twoName },
    } = this.props;
    history.push({pathname:'/Result',search:`?oneName=${oneName}&twoName=${twoName}`})
  };
  // 对数据进行校验
  static propTypes = {
    oneName: PropTypes.string,
    twoName: PropTypes.string,
    oneNameflag: PropTypes.bool,
    twoNameflag: PropTypes.bool,
  };
  render() {
    let { oneName, twoName, oneNameflag, twoNameflag } =
      this.props.battleObject;
    return (
      <div>
        <h3 className="text-center text-3xl p-4">Instructions</h3>
        <div className="flex flex-wrap justify-center">
          <div className="xl:flex-1 items-end">
            <h4 className="text-right p-10 text-2xl">Enter two Github</h4>
            <span className="flex justify-end p-10 text-9xl">
              <i
                className="fa fa-users _2jxN-VXSysaUNXEOXoVAUp"
                style={{ color: "rgb(255, 191, 116)" }}
              ></i>
            </span>
          </div>
          <div className="xl:flex-2 items-end">
            <h4 className="text-center p-10 text-2xl">Battle</h4>
            <span className="flex justify-end p-10 text-9xl">
              <i
                className="fa fa-fighter-jet _2jxN-VXSysaUNXEOXoVAUp"
                style={{ color: "gray" }}
              ></i>
            </span>
          </div>
          <div className="xl:flex-1 items-start">
            <h4 className="text-left p-10 text-2xl">See the winner</h4>
            <p className="flex justify-start p-10 text-9xl">
              <svg
                t="1573903363815"
                className="icon _2jxN-VXSysaUNXEOXoVAUp"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1460"
                width="128"
                height="128"
              >
                <path
                  d="M754.389333 423.04A254.208 254.208 0 0 0 768.042667 341.333333V256h42.666666c23.466667 0 42.666667 19.114667 42.666667 42.666667a128.042667 128.042667 0 0 1-98.986667 124.373333M512.042667 512c-94.165333 0-170.666667-76.544-170.666667-170.666667V213.333333h341.333333v128c0 94.122667-76.629333 170.666667-170.666666 170.666667M170.666667 298.666667c0-23.552 19.114667-42.666667 42.666666-42.666667h42.666667v85.333333c0 28.586667 4.864 55.978667 13.568 81.706667A128.042667 128.042667 0 0 1 170.666667 298.666667m469.333333 469.333333v42.666667H384v-42.666667c0-23.552 19.2-42.666667 42.666667-42.666667h170.666666c23.509333 0 42.666667 19.114667 42.666667 42.666667m170.666667-597.333333h-42.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H298.666667a42.666667 42.666667 0 0 0-42.666667 42.666667H213.333333C142.762667 170.666667 85.333333 228.096 85.333333 298.666667c0 117.632 95.701333 213.333333 213.333334 213.333333h23.04A255.573333 255.573333 0 0 0 469.333333 593.493333V640h-42.666666c-70.570667 0-128 57.429333-128 128v85.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h341.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-85.333333c0-70.570667-57.429333-128-128-128h-42.666666v-46.506667A255.36 255.36 0 0 0 702.293333 512H725.333333c117.632 0 213.333333-95.701333 213.333334-213.333333 0-70.570667-57.429333-128-128-128"
                  fill="#f4ea2a"
                  p-id="1461"
                ></path>
              </svg>
            </p>
          </div>
        </div>
        <div className="text-center text-xl">Players</div>
        <div className="flex flex-wrap pb-4">
          <div className="xl:w-1/2 w-full">
            {!oneNameflag && (
              <Inputs
                title="Player One"
                keyValue="oneName"
                onChangInput={this.changInput}
                onClickAdd={this.handleAdd}
                oneName={oneName}
              />
            )}
            {oneName && oneNameflag && (
              <Card
                keys="oneName"
                keyValue={oneName}
                handeldel={this.handeldels}
              />
            )}
          </div>
          <div className="xl:w-1/2 w-full">
            {!twoNameflag && (
              <Inputs
                title="Player Two"
                keyValue="twoName"
                onChangInput={this.changInput}
                onClickAdd={this.handleAdd}
                twoName={twoName}
              />
            )}
            {twoName && twoNameflag && (
              <Card
                keys="twoName"
                keyValue={twoName}
                handeldel={this.handeldels}
              />
            )}
          </div>
        </div>
        {oneNameflag && twoNameflag && (
          <button
            onClick={this.handelBattle}
            className="rounded bg-gray-300 px-8 pt-4 py-4 m-auto flex mt-4"
          >
            Battle
          </button>
        )}
      </div>
    );
  }
}
