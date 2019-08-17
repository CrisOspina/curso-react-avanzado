(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/FavButton/index.js":
/*!*******************************************!*\
  !*** ./src/components/FavButton/index.js ***!
  \*******************************************/
/*! exports provided: FavButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavButton\", function() { return FavButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FavButton/styles.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar FavButton = function FavButton(_ref) {\n  var liked = _ref.liked,\n      likes = _ref.likes,\n      onClick = _ref.onClick;\n  var Icon = liked ? react_icons_md__WEBPACK_IMPORTED_MODULE_1__[\"MdFavorite\"] : react_icons_md__WEBPACK_IMPORTED_MODULE_1__[\"MdFavoriteBorder\"];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: onClick\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {\n    size: \"32px\"\n  }), \" \", likes, \" likes!\");\n};\nFavButton.propTypes = {\n  liked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,\n  likes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n\n//# sourceURL=webpack:///./src/components/FavButton/index.js?");

/***/ }),

/***/ "./src/components/FavButton/styles.js":
/*!********************************************!*\
  !*** ./src/components/FavButton/styles.js ***!
  \********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  padding-top: 8px;\\n  & svg {\\n    margin-right: 4px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject());\n\n//# sourceURL=webpack:///./src/components/FavButton/styles.js?");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Layout/styles.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Layout = function Layout(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      subtitle = _ref.subtitle;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, title, \" | Petgram\"), subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: subtitle\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Div\"], null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], null, title), subtitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Subtitle\"], null, subtitle), children));\n};\nLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n};\n\n//# sourceURL=webpack:///./src/components/Layout/index.js?");

/***/ }),

/***/ "./src/components/Layout/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/styles.js ***!
  \*****************************************/
/*! exports provided: Div, Title, Subtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Div\", function() { return Div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Subtitle\", function() { return Subtitle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  text-align: center;\\n  font-size: 16px;\\n  font-weight: 400;\\n  color: #333;\\n  padding-bottom: 4px;\\n  margin-bottom: 14px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  text-align: center;\\n  font-size: 24px;\\n  font-weight: 600;\\n  color: #222;\\n  padding-bottom: 8px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 16px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1(_templateObject2());\nvar Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject3());\n\n//# sourceURL=webpack:///./src/components/Layout/styles.js?");

/***/ }),

/***/ "./src/components/PhotoCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/PhotoCard/index.js ***!
  \*******************************************/
/*! exports provided: PhotoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoCard\", function() { return PhotoCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useNearScreen */ \"./src/hooks/useNearScreen.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/PhotoCard/styles.js\");\n/* harmony import */ var _FavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FavButton */ \"./src/components/FavButton/index.js\");\n/* harmony import */ var _containers_ToggleLikeMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/ToggleLikeMutation */ \"./src/containers/ToggleLikeMutation.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar DEFAULT_IMAGE = \"https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png\";\nvar PhotoCard = function PhotoCard(_ref) {\n  var id = _ref.id,\n      liked = _ref.liked,\n      _ref$likes = _ref.likes,\n      likes = _ref$likes === void 0 ? 0 : _ref$likes,\n      _ref$src = _ref.src,\n      src = _ref$src === void 0 ? DEFAULT_IMAGE : _ref$src;\n\n  var _useNearScreen = Object(_hooks_useNearScreen__WEBPACK_IMPORTED_MODULE_1__[\"useNearScreen\"])(),\n      show = _useNearScreen.show,\n      element = _useNearScreen.element;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Article\"], {\n    ref: element\n  }, show && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"/detail/\".concat(id)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"ImgWrapper\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Img\"], {\n    src: src\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ToggleLikeMutation__WEBPACK_IMPORTED_MODULE_4__[\"ToggleLikeMutation\"], null, function (toggleLike) {\n    var handleFavClick = function handleFavClick() {\n      toggleLike({\n        variables: {\n          input: {\n            id: id\n          }\n        }\n      });\n    };\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FavButton__WEBPACK_IMPORTED_MODULE_3__[\"FavButton\"], {\n      liked: liked,\n      likes: likes,\n      onClick: handleFavClick\n    });\n  })));\n};\nPhotoCard.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,\n  liked: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,\n  src: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,\n  likes: function likes(props, propName, componentName) {\n    var propValue = props[propName];\n    if (propValue === undefined) return new Error(\"\".concat(propName, \" Value must be defined\"));\n    if (propValue < 0) return new Error(\"\".concat(propName, \" value must be greater than 0\"));\n  }\n};\n\n//# sourceURL=webpack:///./src/components/PhotoCard/index.js?");

/***/ }),

/***/ "./src/components/PhotoCard/styles.js":
/*!********************************************!*\
  !*** ./src/components/PhotoCard/styles.js ***!
  \********************************************/
/*! exports provided: ImgWrapper, Img, Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgWrapper\", function() { return ImgWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Img\", function() { return Img; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Article\", function() { return Article; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/animation */ \"./src/styles/animation.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  min-height: 200px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  \", \";\\n  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);\\n  height: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  border-radius: 10px;\\n  display: block;\\n  height: 0;\\n  overflow: hidden;\\n  padding: 56.25% 0 0 0;\\n  position: relative;\\n  width: 100%;\\n  box-shadow: 0 10px 14px rgba(0, 0, 0, .3);\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject2(), Object(_styles_animation__WEBPACK_IMPORTED_MODULE_1__[\"fadeIn\"])());\nvar Article = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].article(_templateObject3());\n\n//# sourceURL=webpack:///./src/components/PhotoCard/styles.js?");

/***/ }),

/***/ "./src/containers/PhotoCardWithQuery.js":
/*!**********************************************!*\
  !*** ./src/containers/PhotoCardWithQuery.js ***!
  \**********************************************/
/*! exports provided: PhotoCardWithQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoCardWithQuery\", function() { return PhotoCardWithQuery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _components_PhotoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PhotoCard */ \"./src/components/PhotoCard/index.js\");\n/* harmony import */ var _querys_GetSinglePhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../querys/GetSinglePhoto */ \"./src/querys/GetSinglePhoto.js\");\n/* harmony import */ var _styles_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/loader */ \"./src/styles/loader.js\");\n\n\n\n\n\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_loader__WEBPACK_IMPORTED_MODULE_4__[\"Loader\"], {\n    size: 60\n  });\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Error verifica...\");\n  var _data$photo = data.photo,\n      photo = _data$photo === void 0 ? {} : _data$photo;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoCard__WEBPACK_IMPORTED_MODULE_2__[\"PhotoCard\"], photo);\n};\n\nvar PhotoCardWithQuery = function PhotoCardWithQuery(_ref2) {\n  var id = _ref2.id;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Query\"], {\n    query: _querys_GetSinglePhoto__WEBPACK_IMPORTED_MODULE_3__[\"GET_SINGLE_PHOTO\"],\n    variables: {\n      id: id\n    }\n  }, renderProp);\n};\n\n//# sourceURL=webpack:///./src/containers/PhotoCardWithQuery.js?");

/***/ }),

/***/ "./src/containers/ToggleLikeMutation.js":
/*!**********************************************!*\
  !*** ./src/containers/ToggleLikeMutation.js ***!
  \**********************************************/
/*! exports provided: ToggleLikeMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToggleLikeMutation\", function() { return ToggleLikeMutation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _querys_LikePhoto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../querys/LikePhoto */ \"./src/querys/LikePhoto.js\");\n\n\n\nvar ToggleLikeMutation = function ToggleLikeMutation(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Mutation\"], {\n    mutation: _querys_LikePhoto__WEBPACK_IMPORTED_MODULE_2__[\"LIKE_PHOTO\"]\n  }, children);\n};\n\n//# sourceURL=webpack:///./src/containers/ToggleLikeMutation.js?");

/***/ }),

/***/ "./src/hooks/useNearScreen.js":
/*!************************************!*\
  !*** ./src/hooks/useNearScreen.js ***!
  \************************************/
/*! exports provided: useNearScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useNearScreen\", function() { return useNearScreen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // Custom hook\n\nfunction useNearScreen() {\n  var element = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.t.bind(null, /*! intersection-observer */ \"./node_modules/intersection-observer/intersection-observer.js\", 7))).then(function () {\n      var observer = new window.IntersectionObserver(function (entries) {\n        var isIntersecting = entries[0].isIntersecting;\n\n        if (isIntersecting) {\n          setShow(true);\n          observer.disconnect();\n        }\n      });\n      observer.observe(element.current);\n    });\n  }, [element]);\n  return {\n    show: show,\n    element: element\n  };\n}\n\n//# sourceURL=webpack:///./src/hooks/useNearScreen.js?");

/***/ }),

/***/ "./src/pages/Detail.js":
/*!*****************************!*\
  !*** ./src/pages/Detail.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_PhotoCardWithQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/PhotoCardWithQuery */ \"./src/containers/PhotoCardWithQuery.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var detailId = _ref.detailId;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    title: \"Fotografia \".concat(detailId)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_PhotoCardWithQuery__WEBPACK_IMPORTED_MODULE_1__[\"PhotoCardWithQuery\"], {\n    id: detailId\n  }));\n});\n\n//# sourceURL=webpack:///./src/pages/Detail.js?");

/***/ }),

/***/ "./src/querys/GetSinglePhoto.js":
/*!**************************************!*\
  !*** ./src/querys/GetSinglePhoto.js ***!
  \**************************************/
/*! exports provided: GET_SINGLE_PHOTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_SINGLE_PHOTO\", function() { return GET_SINGLE_PHOTO; });\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getSinglePhoto($id: ID!){\\n    photo(id: $id){\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n      liked\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GET_SINGLE_PHOTO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/querys/GetSinglePhoto.js?");

/***/ }),

/***/ "./src/querys/LikePhoto.js":
/*!*********************************!*\
  !*** ./src/querys/LikePhoto.js ***!
  \*********************************/
/*! exports provided: LIKE_PHOTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_PHOTO\", function() { return LIKE_PHOTO; });\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  mutation likePhoto($input: LikePhoto!){\\n    likePhoto(input: $input){\\n      id,\\n      liked,\\n      likes\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar LIKE_PHOTO = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/querys/LikePhoto.js?");

/***/ })

}]);