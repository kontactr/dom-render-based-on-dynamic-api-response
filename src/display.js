import React from "react";

const isObject = (value) => {
  return typeof value === "object";
};

const isArray = (value) => {
  return Array.isArray(value);
};

const primitiveRender = (value) => {
  value = value.toString();
  return <div>{value}</div>;
};

const arrayRender = (arrayData = []) => {
  return arrayData.map((data) => {
    return schemaJSX(data);
  });
};

const renderElement = () => {};

const schemaJSX = (data = {}, schema = {}) => {
  let dataKeys = Object.keys(data);
  let jsxArray = [];
  for (let dataKey of dataKeys) {
    const dataValue = data[dataKey];
    if (isArray(dataValue)) {
      jsxArray = [...jsxArray, ...arrayRender(dataValue)];
    } else if (isObject(dataValue)) {
      jsxArray.push(schemaJSX(dataValue));
    } else {
      jsxArray.push(primitiveRender(dataValue));
    }
  }
  console.log(jsxArray, 37);
  return <>{jsxArray}</>;
};

export default schemaJSX;
