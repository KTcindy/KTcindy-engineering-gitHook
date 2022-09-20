import React from "react";
import LazyLoad from "react-lazyload";

export default function Card(props) {
  let { keyValue, keys } = props;
  return (
    <div className="p-4s bg-gray-300 mt-2 rounded-lg p-4 flex justify-between w-11/12 m-auto">
      <div className="flex items-center">
        <LazyLoad
          height={64}
          offset={100}
          placeholder={
            <img
              width="64px"
              className="m-auto"
              height="100%"
              src="https://img.zcool.cn/community/01415f5996acdaa8012156038f6b78.gif"
              alt="加载失败"
            />
          }
        >
          <img
            className="font-semibold"
            style={{ width: "64px", height: "64px" }}
            src={`https://github.com/${keyValue}.png?size=200`}
            alt="加载失败"
          />
        </LazyLoad>
        <span className="text-blue-600 text-3xl">{keyValue}</span>
      </div>
      <div
        className="flex items-center"
        style={{ cursor: "pointer" }}
        onClick={() => props.handeldel(keys)}
      >
        <span className="fa-stack fa-lg _1nGWsU11slrFP8lEjbfsfH">
          <i className="fa fa-circle fa-stack-2x text-danger"></i>
          <i className="fa fa-close fa-stack-1x fa-inverse"></i>
        </span>
      </div>
    </div>
  );
}
