'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">eat-low documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' : 'data-target="#xs-components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"' : 'id="xs-components-links-module-AppModule-773989c8dfbf25c5de8f022be26e05fb70ef0c09f6a358d40df0f5b12bfa858f93781625f79af894e239146319fc7aa333eac0546adcec1c8c03435ea3ca637d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginModule.html\" data-type=\"entity-link\" >LoginModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' : 'data-target="#xs-components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"' : 'id="xs-components-links-module-LoginModule-d6a86b62b8b6e4e0bb409932936ec95cec77c64660c41bb1b698e252449154a203ab8acfc9c32219dda9e5c4e9abb8675f5ef11e318460b05f1e3771c1f20e88"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginFormComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginRoutingModule.html\" data-type=\"entity-link\" >LoginRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageExempleModule.html\" data-type=\"entity-link\" >PageExempleModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' : 'data-target="#xs-components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"' : 'id="xs-components-links-module-PageExempleModule-442687ff6bed8916d0ee4f9f5a0dc0995e1bf58379adb06a9fddef5816e4257692af604894246e89ef5f31d921cff64868a4bfb2da1c32f964c5c5c412efcd6c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageExempleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageExempleComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageExempleRoutingModule.html\" data-type=\"entity-link\" >PageExempleRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RegisterModule.html\" data-type=\"entity-link\" >RegisterModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' : 'data-target="#xs-components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"' : 'id="xs-components-links-module-RegisterModule-6dd84e2fbde6b30c49fa8a94e4fd732a6b7797e5d49c1aa198b09661f0f07bf82e48ce415120bff356d96df3a65e16c16112855d5bdcf682c70f0e57512ef9aa"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterFormComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RegisterRoutingModule.html\" data-type=\"entity-link\" >RegisterRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedComponentsModule.html\" data-type=\"entity-link\" >SharedComponentsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' : 'data-target="#xs-components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"' : 'id="xs-components-links-module-SharedComponentsModule-0ff10f34cafb0ff811ba62de680dfd8d22895cf301e4b229c5e4167f70a50de649966ad0ea287aed43de52b87e4343eea30ff201a20fabfdacaf22098c65d5db"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ConnectionButtonComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConnectionButtonComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SubTitleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SubTitleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TitleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TitleComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/EnergyCost.html\" data-type=\"entity-link\" >EnergyCost</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Group.html\" data-type=\"entity-link\" >Group</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Ingredients.html\" data-type=\"entity-link\" >Ingredients</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Meal.html\" data-type=\"entity-link\" >Meal</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SubGroup.html\" data-type=\"entity-link\" >SubGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/IEnergyCost.html\" data-type=\"entity-link\" >IEnergyCost</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IGroup.html\" data-type=\"entity-link\" >IGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IIngrdient.html\" data-type=\"entity-link\" >IIngrdient</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IMeal.html\" data-type=\"entity-link\" >IMeal</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ISubGroup.html\" data-type=\"entity-link\" >ISubGroup</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IUser.html\" data-type=\"entity-link\" >IUser</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));