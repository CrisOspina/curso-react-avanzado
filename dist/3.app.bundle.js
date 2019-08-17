(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./src/components/SubmitButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/SubmitButton/index.js ***!
  \**********************************************/
/*! exports provided: SubmitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubmitButton\", function() { return SubmitButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/SubmitButton/styles.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar SubmitButton = function SubmitButton(_ref) {\n  var children = _ref.children,\n      onClick = _ref.onClick,\n      disabled = _ref.disabled;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClick,\n    disabled: disabled\n  }, children);\n};\nSubmitButton.propTypes = {\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\n\n//# sourceURL=webpack:///./src/components/SubmitButton/index.js?");

/***/ }),

/***/ "./src/components/SubmitButton/styles.js":
/*!***********************************************!*\
  !*** ./src/components/SubmitButton/styles.js ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  background: #8d00ff;\\n  border-radius: 3px;\\n  color: #fff;\\n  height: 32px;\\n  display: block;\\n  width: 100%;\\n  text-align: center;\\n  &[disabled] {\\n    opacity: .3;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject());\n\n//# sourceURL=webpack:///./src/components/SubmitButton/styles.js?");

/***/ }),

/***/ "./src/components/UserForm/index.js":
/*!******************************************!*\
  !*** ./src/components/UserForm/index.js ***!
  \******************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserForm\", function() { return UserForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useInputValue */ \"./src/hooks/useInputValue.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/UserForm/styles.js\");\n/* harmony import */ var _SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SubmitButton */ \"./src/components/SubmitButton/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nvar UserForm = function UserForm(_ref) {\n  var onSubmit = _ref.onSubmit,\n      title = _ref.title,\n      error = _ref.error,\n      disabled = _ref.disabled;\n  var email = Object(_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_1__[\"useInputValue\"])('');\n  var password = Object(_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_1__[\"useInputValue\"])('');\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n    onSubmit({\n      email: email.value,\n      password: password.value\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    onSubmit: handleSubmit,\n    disabled: disabled\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], _extends({\n    placeholder: \"Email\"\n  }, email, {\n    disabled: disabled\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], _extends({\n    placeholder: \"Password\",\n    type: \"password\"\n  }, password, {\n    disabled: disabled\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmitButton__WEBPACK_IMPORTED_MODULE_3__[\"SubmitButton\"], {\n    disabled: disabled\n  }, title)), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Error\"], null, error));\n};\nUserForm.propTypes = {\n  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool\n};\n\n//# sourceURL=webpack:///./src/components/UserForm/index.js?");

/***/ }),

/***/ "./src/components/UserForm/styles.js":
/*!*******************************************!*\
  !*** ./src/components/UserForm/styles.js ***!
  \*******************************************/
/*! exports provided: Form, Input, Title, Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Error\", function() { return Error; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 14px;\\n  color: red;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 16px;\\n  font-weight: 500;\\n  padding: 8px 0;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  border: 1px solid #ccc;\\n  border-radius: 3px;\\n  margin-bottom: 8px;\\n  padding: 8px 4px;\\n  display: block;\\n  width: 100%;\\n  &[disabled] {\\n    opacity: .3;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 16px 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form(_templateObject());\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input(_templateObject2());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(_templateObject3());\nvar Error = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(_templateObject4());\n\n//# sourceURL=webpack:///./src/components/UserForm/styles.js?");

/***/ }),

/***/ "./src/containers/LoginMutation.js":
/*!*****************************************!*\
  !*** ./src/containers/LoginMutation.js ***!
  \*****************************************/
/*! exports provided: LoginMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginMutation\", function() { return LoginMutation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  mutation login($input: UserCredentials!){\\n    login(input: $input)\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar LOGIN = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\nvar LoginMutation = function LoginMutation(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Mutation\"], {\n    mutation: LOGIN\n  }, children);\n};\n\n//# sourceURL=webpack:///./src/containers/LoginMutation.js?");

/***/ }),

/***/ "./src/containers/RegisterMutation.js":
/*!********************************************!*\
  !*** ./src/containers/RegisterMutation.js ***!
  \********************************************/
/*! exports provided: RegisterMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterMutation\", function() { return RegisterMutation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  mutation signup($input: UserCredentials!){\\n    signup(input: $input)\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar REGISTER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\nvar RegisterMutation = function RegisterMutation(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__[\"Mutation\"], {\n    mutation: REGISTER\n  }, children);\n};\n\n//# sourceURL=webpack:///./src/containers/RegisterMutation.js?");

/***/ }),

/***/ "./src/hooks/useInputValue.js":
/*!************************************!*\
  !*** ./src/hooks/useInputValue.js ***!
  \************************************/
/*! exports provided: useInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useInputValue\", function() { return useInputValue; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar useInputValue = function useInputValue(initialValue) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialValue),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var onChange = function onChange(e) {\n    return setValue(e.target.value);\n  };\n\n  return {\n    value: value,\n    onChange: onChange\n  };\n};\n\n//# sourceURL=webpack:///./src/hooks/useInputValue.js?");

/***/ }),

/***/ "./src/pages/NotRegisteredUser.js":
/*!****************************************!*\
  !*** ./src/pages/NotRegisteredUser.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./src/Context.js\");\n/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserForm */ \"./src/components/UserForm/index.js\");\n/* harmony import */ var _containers_RegisterMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/RegisterMutation */ \"./src/containers/RegisterMutation.js\");\n/* harmony import */ var _containers_LoginMutation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/LoginMutation */ \"./src/containers/LoginMutation.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_Context__WEBPACK_IMPORTED_MODULE_2__[\"Context\"]),\n      activateAuth = _useContext.activateAuth;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n    title: \"Welcome human\",\n    subtitle: \"Por favor registrate o inicia sesi\\xF3n para ver las maravillosas fotos de los animales no humanos\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_RegisterMutation__WEBPACK_IMPORTED_MODULE_4__[\"RegisterMutation\"], null, function (register, _ref) {\n    var data = _ref.data,\n        loading = _ref.loading,\n        error = _ref.error;\n\n    var onSubmit = function onSubmit(_ref2) {\n      var email = _ref2.email,\n          password = _ref2.password;\n      var input = {\n        email: email,\n        password: password\n      };\n      var variables = {\n        input: input\n      };\n      register({\n        variables: variables\n      }).then(function (_ref3) {\n        var data = _ref3.data;\n        var signup = data.signup;\n        activateAuth(signup);\n      });\n    };\n\n    var errorMsg = error && 'El usuario ya existe, verifica...';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserForm__WEBPACK_IMPORTED_MODULE_3__[\"UserForm\"], {\n      onSubmit: onSubmit,\n      title: \"Registrarse\",\n      error: errorMsg,\n      disabled: loading\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_LoginMutation__WEBPACK_IMPORTED_MODULE_5__[\"LoginMutation\"], null, function (login, _ref4) {\n    var data = _ref4.data,\n        loading = _ref4.loading,\n        error = _ref4.error;\n\n    var onSubmit = function onSubmit(_ref5) {\n      var email = _ref5.email,\n          password = _ref5.password;\n      var input = {\n        email: email,\n        password: password\n      };\n      var variables = {\n        input: input\n      };\n      login({\n        variables: variables\n      }).then(function (_ref6) {\n        var data = _ref6.data;\n        var login = data.login;\n        activateAuth(login);\n      });\n    };\n\n    var errorMsg = error && 'La contraseña no es correcta o el usuario no existe';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserForm__WEBPACK_IMPORTED_MODULE_3__[\"UserForm\"], {\n      onSubmit: onSubmit,\n      title: \"Iniciar sesi\\xF3n\",\n      error: errorMsg,\n      disabled: loading\n    });\n  }));\n});\n\n//# sourceURL=webpack:///./src/pages/NotRegisteredUser.js?");

/***/ })

}]);