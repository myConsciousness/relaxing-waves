/*
 * Copyright 2020 Kato Shinya.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

"use strict";

/**
 * 波を格納するコンテナ名
 */
const CONTAINER_NAME = "relaxing-waves-container";

/**
 * 波の初期値
 */
const INITIAL_WAVES = [
  { x: 48, y: 0, fill: "rgba(255,255,255,0.7" },
  { x: 48, y: 3, fill: "rgba(255,255,255,0.5)" },
  { x: 48, y: 5, fill: "rgba(255,255,255,0.3" },
  { x: 48, y: 7, fill: "#fff" },
];

/**
 * HTMLにクラス名として "relaxing-waves-container" が指定されたタグ内に波を生成します。
 */
const createRelaxingWaves = () => {
  const containerObjects = document.getElementsByClassName(CONTAINER_NAME);

  Array.from(containerObjects).forEach((container) => {
    container.setAttribute(
      "background",
      "linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%"
    );
    createSvgObject(container);
  });
};

/**
 * 波を出力する svg オブジェクトをコンテナ内に生成します。
 *
 * @param {HTMLCollectionOf<Element>} container
 */
const createSvgObject = (container) => {
  const svgObject = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgObject.setAttribute("class", "waves");
  svgObject.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgObject.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svgObject.setAttribute("viewBox", "0 24 150 28");
  svgObject.setAttribute("preserveAspectRatio", "none");
  svgObject.setAttribute("shape-rendering", "auto");

  svgObject.appendChild(getDefsObject());
  svgObject.appendChild(getSvgGroupObject());

  container.appendChild(svgObject);
};

/**
 * svgの定義オブジェクトを生成し返却します。
 *
 * @returns svgの定義オブジェクト
 */
const getDefsObject = () => {
  const pathObject = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  pathObject.setAttributeNS(null, "id", "gentle-wave");
  pathObject.setAttributeNS(
    null,
    "d",
    "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  );

  const defsObject = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "defs"
  );

  defsObject.appendChild(pathObject);

  return defsObject;
};

/**
 * 波を表現するsvgグループを生成し返却します。
 *
 * @returns svgグループ
 */
const getSvgGroupObject = () => {
  const svgGroupObject = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  svgGroupObject.setAttributeNS(null, "class", "parallax");

  INITIAL_WAVES.forEach((waves) => {
    const useObject = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );

    Object.keys(waves).forEach((attribute) => {
      useObject.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "#gentle-wave"
      );
      useObject.setAttributeNS(null, attribute, waves[attribute]);
    });

    svgGroupObject.appendChild(useObject);
  });

  return svgGroupObject;
};

createRelaxingWaves();
