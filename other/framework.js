(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [20],
  {
    /***/ 0: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
        return createGetCounter;
      });
      /* unused harmony export empty */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function () {
        return globalHandleError;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function () {
        return interopDefault;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function () {
        return hasFetch;
      });
      /* unused harmony export purifyData */
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function () {
        return getChildrenComponentInstancesUsingFetch;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function () {
        return applyAsyncData;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function () {
        return sanitizeComponent;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function () {
        return getMatchedComponents;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function () {
        return getMatchedComponentsInstances;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function () {
        return flatMapComponents;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function () {
        return resolveRouteComponents;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function () {
        return getRouteData;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function () {
        return setContext;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function () {
        return middlewareSeries;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function () {
        return promisify;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function () {
        return getLocation;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
        return compile;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function () {
        return getQueryDiff;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function () {
        return normalizeError;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
        return addLifecycleHook;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function () {
        return urlJoin;
      });
      /* unused harmony export stripTrailingSlash */
      /* unused harmony export isSamePath */
      /* unused harmony export setScrollRestoration */
      /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
      /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
      /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
      /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
      /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ let core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
      /* harmony import */ let core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
      /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */ let core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
      /* harmony import */ let core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */ let _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
      /* harmony import */ let _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      /* harmony import */ let _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
      /* harmony import */ let _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32);
      /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52);
      /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__
      );
      /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5);
      /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__
      );
      /* harmony import */ let core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(250);
      /* harmony import */ let core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_13__
      );
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__
      );
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33);
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__
      );
      /* harmony import */ let core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9);
      /* harmony import */ let core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_16__
      );
      /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55);
      /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_17__
      );
      /* harmony import */ let core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4);
      /* harmony import */ let core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__
      );
      /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28);
      /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__
      );
      /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36);
      /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53);
      /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__
      );
      /* harmony import */ let core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(41);
      /* harmony import */ let core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__
      );
      /* harmony import */ let core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56);
      /* harmony import */ let core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__
      );
      /* harmony import */ let core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(91);
      /* harmony import */ let core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_24__
      );
      /* harmony import */ let core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(168);
      /* harmony import */ let core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_25__
      );
      /* harmony import */ let core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(228);
      /* harmony import */ let core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_26__
      );
      /* harmony import */ let core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(96);
      /* harmony import */ let core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__
      );
      /* harmony import */ let core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(98);
      /* harmony import */ let core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_28__
      );
      /* harmony import */ let core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(255);
      /* harmony import */ let core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_29__
      );
      /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(40);
      /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_30__
      );
      /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(58);
      /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_31__
      );
      /* harmony import */ let vue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(1);
      /* harmony import */ let ufo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(18);

      function ownKeys(object, enumerableOnly) {
        let keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }

      function _createForOfIteratorHelper(o, allowArrayLike) {
        let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            let i = 0;
            let F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            let step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      // window.{{globals.loadedCallback}} hook
      // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

      if (true) {
        window.onNuxtReadyCbs = [];

        window.onNuxtReady = function (cb) {
          window.onNuxtReadyCbs.push(cb);
        };
      }

      function createGetCounter(counterObject) {
        let defaultKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return function getCounter() {
          let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;

          if (counterObject[id] === undefined) {
            counterObject[id] = 0;
          }

          return counterObject[id]++;
        };
      }
      function empty() {}
      function globalHandleError(error) {
        if (vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler) {
          vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler(error);
        }
      }
      function interopDefault(promise) {
        return promise.then(function (m) {
          return m.default || m;
        });
      }
      function hasFetch(vm) {
        return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
      }
      function purifyData(data) {
        if (true) {
          return data;
        }

        return Object.entries(data)
          .filter(function (_ref) {
            let _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

            let valid = !(value instanceof Function) && !(value instanceof Promise);

            if (!valid) {
              console.warn("".concat(key, " is not able to be stringified. This will break in a production environment."));
            }

            return valid;
          })
          .reduce(function (obj, _ref3) {
            let _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

            obj[key] = value;
            return obj;
          }, {});
      }
      function getChildrenComponentInstancesUsingFetch(vm) {
        let instances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        let children = vm.$children || [];

        let _iterator = _createForOfIteratorHelper(children),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            let child = _step.value;

            if (child.$fetch) {
              instances.push(child);
              continue; // Don't get the children since it will reload the template
            }

            if (child.$children) {
              getChildrenComponentInstancesUsingFetch(child, instances);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return instances;
      }
      function applyAsyncData(Component, asyncData) {
        if (
          // For SSR, we once all this function without second param to just apply asyncData
          // Prevent doing this for each SSR request
          !asyncData &&
          Component.options.__hasNuxtData
        ) {
          return;
        }

        let ComponentData =
          Component.options._originDataFn ||
          Component.options.data ||
          function () {
            return {};
          };

        Component.options._originDataFn = ComponentData;

        Component.options.data = function () {
          let data = ComponentData.call(this, this);

          if (this.$ssrContext) {
            asyncData = this.$ssrContext.asyncData[Component.cid];
          }

          return _objectSpread(_objectSpread({}, data), asyncData);
        };

        Component.options.__hasNuxtData = true;

        if (Component._Ctor && Component._Ctor.options) {
          Component._Ctor.options.data = Component.options.data;
        }
      }
      function sanitizeComponent(Component) {
        // If Component already sanitized
        if (Component.options && Component._Ctor === Component) {
          return Component;
        }

        if (!Component.options) {
          Component = vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].extend(Component); // fix issue #6

          Component._Ctor = Component;
        } else {
          Component._Ctor = Component;
          Component.extendOptions = Component.options;
        } // If no component name defined, set file path as name, (also fixes #5703)

        if (!Component.options.name && Component.options.__file) {
          Component.options.name = Component.options.__file;
        }

        return Component;
      }
      function getMatchedComponents(route) {
        let matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        let prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "components";
        return Array.prototype.concat.apply(
          [],
          route.matched.map(function (m, index) {
            return Object.keys(m[prop]).map(function (key) {
              matches && matches.push(index);
              return m[prop][key];
            });
          })
        );
      }
      function getMatchedComponentsInstances(route) {
        let matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return getMatchedComponents(route, matches, "instances");
      }
      function flatMapComponents(route, fn) {
        return Array.prototype.concat.apply(
          [],
          route.matched.map(function (m, index) {
            return Object.keys(m.components).reduce(function (promises, key) {
              if (m.components[key]) {
                promises.push(fn(m.components[key], m.instances[key], m, key, index));
              } else {
                delete m.components[key];
              }

              return promises;
            }, []);
          })
        );
      }
      function resolveRouteComponents(route, fn) {
        return Promise.all(
          flatMapComponents(
            route,
            /*#__PURE__*/ (function () {
              let _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(
                /*#__PURE__*/ regeneratorRuntime.mark(function _callee(Component, instance, match, key) {
                  let timeNow, previousReloadTime;
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            if (!(typeof Component === "function" && !Component.options)) {
                              _context.next = 11;
                              break;
                            }

                            _context.prev = 1;
                            _context.next = 4;
                            return Component();

                          case 4:
                            Component = _context.sent;
                            _context.next = 11;
                            break;

                          case 7:
                            _context.prev = 7;
                            _context.t0 = _context["catch"](1);

                            // Handle webpack chunk loading errors
                            // This may be due to a new deployment or a network problem
                            if (_context.t0 && _context.t0.name === "ChunkLoadError" && typeof window !== "undefined" && window.sessionStorage) {
                              timeNow = Date.now();
                              previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload")); // check for previous reload time not to reload infinitely

                              if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
                                window.sessionStorage.setItem("nuxt-reload", timeNow);
                                window.location.reload(
                                  true
                                  /* skip cache */
                                );
                              }
                            }

                            throw _context.t0;

                          case 11:
                            match.components[key] = Component = sanitizeComponent(Component);
                            return _context.abrupt("return", typeof fn === "function" ? fn(Component, instance, match, key) : Component);

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[1, 7]]
                  );
                })
              );

              return function (_x, _x2, _x3, _x4) {
                return _ref5.apply(this, arguments);
              };
            })()
          )
        );
      }
      function getRouteData(_x5) {
        return _getRouteData.apply(this, arguments);
      }

      function _getRouteData() {
        _getRouteData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(route) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    if (route) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return resolveRouteComponents(route);

                  case 4:
                    return _context2.abrupt(
                      "return",
                      _objectSpread(
                        _objectSpread({}, route),
                        {},
                        {
                          meta: getMatchedComponents(route).map(function (Component, index) {
                            return _objectSpread(_objectSpread({}, Component.options.meta), (route.matched[index] || {}).meta);
                          }),
                        }
                      )
                    );

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
        return _getRouteData.apply(this, arguments);
      }

      function setContext(_x6, _x7) {
        return _setContext.apply(this, arguments);
      }

      function _setContext() {
        _setContext = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(app, context) {
            let _yield$Promise$all, _yield$Promise$all2, currentRouteData, fromRouteData;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    // If context not defined, create it
                    if (!app.context) {
                      app.context = {
                        isStatic: true,
                        isDev: false,
                        isHMR: false,
                        app: app,
                        store: app.store,
                        payload: context.payload,
                        error: context.error,
                        base: app.router.options.base,
                        env: {},
                      }; // Only set once

                      if (context.ssrContext) {
                        app.context.ssrContext = context.ssrContext;
                      }

                      app.context.redirect = function (status, path, query) {
                        if (!status) {
                          return;
                        }

                        app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

                        let pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(path);

                        if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
                          query = path || {};
                          path = status;
                          pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(path);
                          status = 302;
                        }

                        if (pathType === "object") {
                          path = app.router.resolve(path).route.fullPath;
                        } // "/absolute/route", "./relative/route" or "../relative/route"

                        if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                          app.context.next({
                            path: path,
                            query: query,
                            status: status,
                          });
                        } else {
                          path = Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* withQuery */ "f"])(path, query);

                          if (false) {
                          }

                          if (true) {
                            // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                            window.location.replace(path); // Throw a redirect error

                            throw new Error("ERR_REDIRECT");
                          }
                        }
                      };

                      if (false) {
                      }

                      if (true) {
                        app.context.nuxtState = window.__NUXT__;
                      }
                    } // Dynamic keys

                    _context3.next = 3;
                    return Promise.all([getRouteData(context.route), getRouteData(context.from)]);

                  case 3:
                    _yield$Promise$all = _context3.sent;
                    _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(
                      _yield$Promise$all,
                      2
                    );
                    currentRouteData = _yield$Promise$all2[0];
                    fromRouteData = _yield$Promise$all2[1];

                    if (context.route) {
                      app.context.route = currentRouteData;
                    }

                    if (context.from) {
                      app.context.from = fromRouteData;
                    }

                    app.context.next = context.next;
                    app.context._redirected = false;
                    app.context._errored = false;
                    app.context.isHMR = false;
                    app.context.params = app.context.route.params || {};
                    app.context.query = app.context.route.query || {};

                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })
        );
        return _setContext.apply(this, arguments);
      }

      function middlewareSeries(promises, appContext) {
        if (!promises.length || appContext._redirected || appContext._errored) {
          return Promise.resolve();
        }

        return promisify(promises[0], appContext).then(function () {
          return middlewareSeries(promises.slice(1), appContext);
        });
      }
      function promisify(fn, context) {
        let promise;

        if (fn.length === 2) {
          // fn(context, callback)
          promise = new Promise(function (resolve) {
            fn(context, function (err, data) {
              if (err) {
                context.error(err);
              }

              data = data || {};
              resolve(data);
            });
          });
        } else {
          promise = fn(context);
        }

        if (promise && promise instanceof Promise && typeof promise.then === "function") {
          return promise;
        }

        return Promise.resolve(promise);
      } // Imported from vue-router

      function getLocation(base, mode) {
        if (mode === "hash") {
          return window.location.hash.replace(/^#\//, "");
        }

        base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

        let path = decodeURI(window.location.pathname);

        if (base && path.startsWith(base)) {
          path = path.slice(base.length);
        }

        let fullPath = (path || "/") + window.location.search + window.location.hash;
        return Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* normalizeURL */ "d"])(fullPath);
      } // Imported from path-to-regexp

      /**
       * Compile a string to a template function for the path.
       *
       * @param  {string}             str
       * @param  {Object=}            options
       * @return {!function(Object=, Object=)}
       */

      function compile(str, options) {
        return tokensToFunction(parse(str, options), options);
      }
      function getQueryDiff(toQuery, fromQuery) {
        let diff = {};

        let queries = _objectSpread(_objectSpread({}, toQuery), fromQuery);

        for (let k in queries) {
          if (String(toQuery[k]) !== String(fromQuery[k])) {
            diff[k] = true;
          }
        }

        return diff;
      }
      function normalizeError(err) {
        let message;

        if (!(err.message || typeof err === "string")) {
          try {
            message = JSON.stringify(err, null, 2);
          } catch (e) {
            message = "[".concat(err.constructor.name, "]");
          }
        } else {
          message = err.message || err;
        }

        return _objectSpread(
          _objectSpread({}, err),
          {},
          {
            message: message,
            statusCode: err.statusCode || err.status || (err.response && err.response.status) || 500,
          }
        );
      }
      /**
       * The main path matching regexp utility.
       *
       * @type {RegExp}
       */

      let PATH_REGEXP = new RegExp(
        [
          // Match escaped characters that would otherwise appear in future matches.
          // This allows the user to escape special characters that won't transform.
          "(\\\\.)", // Match Express-style parameters and un-named parameters with a prefix
          // and optional suffixes. Matches appear as:
          //
          // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
          // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
          // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      /**
       * Parse a string for the raw tokens.
       *
       * @param  {string}  str
       * @param  {Object=} options
       * @return {!Array}
       */

      function parse(str, options) {
        let tokens = [];
        let key = 0;
        let index = 0;
        let path = "";
        let defaultDelimiter = (options && options.delimiter) || "/";
        let res;

        while ((res = PATH_REGEXP.exec(str)) != null) {
          let m = res[0];
          let escaped = res[1];
          let offset = res.index;
          path += str.slice(index, offset);
          index = offset + m.length; // Ignore already escaped sequences.

          if (escaped) {
            path += escaped[1];
            continue;
          }

          let next = str[index];
          let prefix = res[2];
          let name = res[3];
          let capture = res[4];
          let group = res[5];
          let modifier = res[6];
          let asterisk = res[7]; // Push the current path onto the tokens.

          if (path) {
            tokens.push(path);
            path = "";
          }

          let partial = prefix != null && next != null && next !== prefix;
          let repeat = modifier === "+" || modifier === "*";
          let optional = modifier === "?" || modifier === "*";
          let delimiter = res[2] || defaultDelimiter;
          let pattern = capture || group;
          tokens.push({
            name: name || key++,
            prefix: prefix || "",
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            asterisk: Boolean(asterisk),
            pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?",
          });
        } // Match any characters still remaining.

        if (index < str.length) {
          path += str.substr(index);
        } // If the path exists, push it onto the end.

        if (path) {
          tokens.push(path);
        }

        return tokens;
      }
      /**
       * Prettier encoding of URI path segments.
       *
       * @param  {string}
       * @return {string}
       */

      function encodeURIComponentPretty(str, slashAllowed) {
        let re = slashAllowed ? /[?#]/g : /[/?#]/g;
        return encodeURI(str).replace(re, function (c) {
          return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      /**
       * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
       *
       * @param  {string}
       * @return {string}
       */

      function encodeAsterisk(str) {
        return encodeURIComponentPretty(str, true);
      }
      /**
       * Escape a regular expression string.
       *
       * @param  {string} str
       * @return {string}
       */

      function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      /**
       * Escape the capturing group by escaping special characters and meaning.
       *
       * @param  {string} group
       * @return {string}
       */

      function escapeGroup(group) {
        return group.replace(/([=!:$/()])/g, "\\$1");
      }
      /**
       * Expose a method for transforming tokens into the path function.
       */

      function tokensToFunction(tokens, options) {
        // Compile all the tokens into regexps.
        let matches = new Array(tokens.length); // Compile all the patterns before compilation.

        for (let i = 0; i < tokens.length; i++) {
          if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(tokens[i]) === "object") {
            matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
          }
        }

        return function (obj, opts) {
          let path = "";
          let data = obj || {};
          let options = opts || {};
          let encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

          for (let _i = 0; _i < tokens.length; _i++) {
            let token = tokens[_i];

            if (typeof token === "string") {
              path += token;
              continue;
            }

            let value = data[token.name || "pathMatch"];
            let segment = void 0;

            if (value == null) {
              if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) {
                  path += token.prefix;
                }

                continue;
              } else {
                throw new TypeError('Expected "' + token.name + '" to be defined');
              }
            }

            if (Array.isArray(value)) {
              if (!token.repeat) {
                throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
              }

              if (value.length === 0) {
                if (token.optional) {
                  continue;
                } else {
                  throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
              }

              for (let j = 0; j < value.length; j++) {
                segment = encode(value[j]);

                if (!matches[_i].test(segment)) {
                  throw new TypeError(
                    'Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`"
                  );
                }

                path += (j === 0 ? token.prefix : token.delimiter) + segment;
              }

              continue;
            }

            segment = token.asterisk ? encodeAsterisk(value) : encode(value);

            if (!matches[_i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
            }

            path += token.prefix + segment;
          }

          return path;
        };
      }
      /**
       * Get the flags for a regexp from the options.
       *
       * @param  {Object} options
       * @return {string}
       */

      function flags(options) {
        return options && options.sensitive ? "" : "i";
      }

      function addLifecycleHook(vm, hook, fn) {
        if (!vm.$options[hook]) {
          vm.$options[hook] = [];
        }

        if (!vm.$options[hook].includes(fn)) {
          vm.$options[hook].push(fn);
        }
      }
      var urlJoin = ufo__WEBPACK_IMPORTED_MODULE_33__[/* joinURL */ "c"];
      let stripTrailingSlash = ufo__WEBPACK_IMPORTED_MODULE_33__[/* withoutTrailingSlash */ "h"];
      let isSamePath = ufo__WEBPACK_IMPORTED_MODULE_33__[/* isSamePath */ "b"];
      function setScrollRestoration(newVal) {
        try {
          window.history.scrollRestoration = newVal;
        } catch (e) {}
      }

      /***/
    },

    /***/ 125: /***/ function (module, exports) {
      /**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */
      function isObject(value) {
        let type = typeof value;
        return value != null && (type == "object" || type == "function");
      }

      module.exports = isObject;

      /***/
    },

    /***/ 126: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = normalize;

      function normalize(value) {
        return value.toLowerCase();
      }

      /***/
    },

    /***/ 131: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      let middleware = {};
      /* harmony default export */ __webpack_exports__["a"] = middleware;

      /***/
    },

    /***/ 132: /***/ function (module, exports, __webpack_require__) {
      "use strict";
      /*!
       * vue-client-only v0.0.0-semantic-release
       * (c) 2021-present egoist <0x142857@gmail.com>
       * Released under the MIT License.
       */

      let index = {
        name: "ClientOnly",
        functional: true,
        props: {
          placeholder: String,
          placeholderTag: {
            type: String,
            default: "div",
          },
        },
        render: function render(h, ref) {
          let parent = ref.parent;
          let slots = ref.slots;
          let props = ref.props;

          let ref$1 = slots();
          let defaultSlot = ref$1.default;
          if (defaultSlot === void 0) defaultSlot = [];
          let placeholderSlot = ref$1.placeholder;

          if (parent._isMounted) {
            return defaultSlot;
          }

          parent.$once("hook:mounted", function () {
            parent.$forceUpdate();
          });

          if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
            return h(
              props.placeholderTag,
              {
                class: ["client-only-placeholder"],
              },
              props.placeholder || placeholderSlot
            );
          }

          // Return a placeholder element for each child in the default slot
          // Or if no children return a single placeholder
          return defaultSlot.length > 0
            ? defaultSlot.map(function () {
                return h(false);
              })
            : h(false);
        },
      };

      module.exports = index;

      /***/
    },

    /***/ 134: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      exports.html = __webpack_require__(337);
      exports.svg = __webpack_require__(340);
      exports.normalize = __webpack_require__(126);
      exports.find = __webpack_require__(342);

      /***/
    },

    /***/ 170: /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      let content = __webpack_require__(264);
      if (content.__esModule) content = content.default;
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      let add = __webpack_require__(27).default;
      let update = add("b682ae5a", content, true, { sourceMap: false });

      /***/
    },

    /***/ 172: /***/ function (module, exports, __webpack_require__) {
      let freeGlobal = __webpack_require__(315);

      /** Detect free variable `self`. */
      let freeSelf = typeof self == "object" && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      let root = freeGlobal || freeSelf || Function("return this")();

      module.exports = root;

      /***/
    },

    /***/ 173: /***/ function (module, exports, __webpack_require__) {
      let root = __webpack_require__(172);

      /** Built-in value references. */
      let Symbol = root.Symbol;

      module.exports = Symbol;

      /***/
    },

    /***/ 180: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let xtend = __webpack_require__(338);
      let Schema = __webpack_require__(181);

      module.exports = merge;

      function merge(definitions) {
        let length = definitions.length;
        let property = [];
        let normal = [];
        let index = -1;
        let info;
        let space;

        while (++index < length) {
          info = definitions[index];
          property.push(info.property);
          normal.push(info.normal);
          space = info.space;
        }

        return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
      }

      /***/
    },

    /***/ 181: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = Schema;

      let proto = Schema.prototype;

      proto.space = null;
      proto.normal = {};
      proto.property = {};

      function Schema(property, normal, space) {
        this.property = property;
        this.normal = normal;

        if (space) {
          this.space = space;
        }
      }

      /***/
    },

    /***/ 182: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let create = __webpack_require__(65);

      module.exports = create({
        space: "xlink",
        transform: xlinkTransform,
        properties: {
          xLinkActuate: null,
          xLinkArcRole: null,
          xLinkHref: null,
          xLinkRole: null,
          xLinkShow: null,
          xLinkTitle: null,
          xLinkType: null,
        },
      });

      function xlinkTransform(_, prop) {
        return "xlink:" + prop.slice(5).toLowerCase();
      }

      /***/
    },

    /***/ 183: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let Info = __webpack_require__(184);
      let types = __webpack_require__(92);

      module.exports = DefinedInfo;

      DefinedInfo.prototype = new Info();
      DefinedInfo.prototype.defined = true;

      let checks = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"];
      let checksLength = checks.length;

      function DefinedInfo(property, attribute, mask, space) {
        let index = -1;
        let check;

        mark(this, "space", space);

        Info.call(this, property, attribute);

        while (++index < checksLength) {
          check = checks[index];
          mark(this, check, (mask & types[check]) === types[check]);
        }
      }

      function mark(values, key, value) {
        if (value) {
          values[key] = value;
        }
      }

      /***/
    },

    /***/ 184: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = Info;

      let proto = Info.prototype;

      proto.space = null;
      proto.attribute = null;
      proto.property = null;
      proto.boolean = false;
      proto.booleanish = false;
      proto.overloadedBoolean = false;
      proto.number = false;
      proto.commaSeparated = false;
      proto.spaceSeparated = false;
      proto.commaOrSpaceSeparated = false;
      proto.mustUseProperty = false;
      proto.defined = false;

      function Info(property, attribute) {
        this.property = property;
        this.attribute = attribute;
      }

      /***/
    },

    /***/ 185: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let create = __webpack_require__(65);

      module.exports = create({
        space: "xml",
        transform: xmlTransform,
        properties: {
          xmlLang: null,
          xmlBase: null,
          xmlSpace: null,
        },
      });

      function xmlTransform(_, prop) {
        return "xml:" + prop.slice(3).toLowerCase();
      }

      /***/
    },

    /***/ 186: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let create = __webpack_require__(65);
      let caseInsensitiveTransform = __webpack_require__(187);

      module.exports = create({
        space: "xmlns",
        attributes: {
          xmlnsxlink: "xmlns:xlink",
        },
        transform: caseInsensitiveTransform,
        properties: {
          xmlns: null,
          xmlnsXLink: null,
        },
      });

      /***/
    },

    /***/ 187: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let caseSensitiveTransform = __webpack_require__(188);

      module.exports = caseInsensitiveTransform;

      function caseInsensitiveTransform(attributes, property) {
        return caseSensitiveTransform(attributes, property.toLowerCase());
      }

      /***/
    },

    /***/ 188: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = caseSensitiveTransform;

      function caseSensitiveTransform(attributes, attribute) {
        return attribute in attributes ? attributes[attribute] : attribute;
      }

      /***/
    },

    /***/ 189: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let types = __webpack_require__(92);
      let create = __webpack_require__(65);

      let booleanish = types.booleanish;
      let number = types.number;
      let spaceSeparated = types.spaceSeparated;

      module.exports = create({
        transform: ariaTransform,
        properties: {
          ariaActiveDescendant: null,
          ariaAtomic: booleanish,
          ariaAutoComplete: null,
          ariaBusy: booleanish,
          ariaChecked: booleanish,
          ariaColCount: number,
          ariaColIndex: number,
          ariaColSpan: number,
          ariaControls: spaceSeparated,
          ariaCurrent: null,
          ariaDescribedBy: spaceSeparated,
          ariaDetails: null,
          ariaDisabled: booleanish,
          ariaDropEffect: spaceSeparated,
          ariaErrorMessage: null,
          ariaExpanded: booleanish,
          ariaFlowTo: spaceSeparated,
          ariaGrabbed: booleanish,
          ariaHasPopup: null,
          ariaHidden: booleanish,
          ariaInvalid: null,
          ariaKeyShortcuts: null,
          ariaLabel: null,
          ariaLabelledBy: spaceSeparated,
          ariaLevel: number,
          ariaLive: null,
          ariaModal: booleanish,
          ariaMultiLine: booleanish,
          ariaMultiSelectable: booleanish,
          ariaOrientation: null,
          ariaOwns: spaceSeparated,
          ariaPlaceholder: null,
          ariaPosInSet: number,
          ariaPressed: booleanish,
          ariaReadOnly: booleanish,
          ariaRelevant: null,
          ariaRequired: booleanish,
          ariaRoleDescription: spaceSeparated,
          ariaRowCount: number,
          ariaRowIndex: number,
          ariaRowSpan: number,
          ariaSelected: booleanish,
          ariaSetSize: number,
          ariaSort: null,
          ariaValueMax: number,
          ariaValueMin: number,
          ariaValueNow: number,
          ariaValueText: null,
          role: null,
        },
      });

      function ariaTransform(_, prop) {
        return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
      }

      /***/
    },

    /***/ 191: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony default export */ __webpack_exports__["a"] = function (e, n) {
        return (
          (n = n || {}),
          new Promise(function (t, r) {
            let s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function () {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function () {
                    return Promise.resolve(s.responseText);
                  },
                  json: function () {
                    return Promise.resolve(s.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([s.response]));
                  },
                  clone: a,
                  headers: {
                    keys: function () {
                      return o;
                    },
                    entries: function () {
                      return u;
                    },
                    get: function (e) {
                      return i[e.toLowerCase()];
                    },
                    has: function (e) {
                      return e.toLowerCase() in i;
                    },
                  },
                };
              };
            for (let l in (s.open(n.method || "get", e, !0),
            (s.onload = function () {
              s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
                o.push((n = n.toLowerCase())), u.push([n, t]), (i[n] = i[n] ? i[n] + "," + t : t);
              }),
                t(a());
            }),
            (s.onerror = r),
            (s.withCredentials = "include" == n.credentials),
            n.headers))
              s.setRequestHeader(l, n.headers[l]);
            s.send(n.body || null);
          })
        );
      };
      //# sourceMappingURL=unfetch.module.js.map

      /***/
    },

    /***/ 193: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };

      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }

      function isSpecial(value) {
        let stringValue = Object.prototype.toString.call(value);

        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }

      // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
      let canUseSymbol = typeof Symbol === "function" && Symbol.for;
      let REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;

      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
      }

      function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function (element) {
          return cloneUnlessOtherwiseSpecified(element, options);
        });
      }

      function getMergeFunction(key, options) {
        if (!options.customMerge) {
          return deepmerge;
        }
        let customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }

      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
            })
          : [];
      }

      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }

      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_) {
          return false;
        }
      }

      // Protects from prototype poisoning and unexpected merging up the prototype chain.
      function propertyIsUnsafe(target, key) {
        return (
          propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
          !(
            Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
            Object.propertyIsEnumerable.call(target, key)
          )
        ); // and also unsafe if they're nonenumerable.
      }

      function mergeObject(target, source, options) {
        let destination = {};
        if (options.isMergeableObject(target)) {
          getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
          });
        }
        getKeys(source).forEach(function (key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }

          if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
          }
        });
        return destination;
      }

      function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject;
        // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
        // implementations can use it. The caller may not replace it.
        options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

        let sourceIsArray = Array.isArray(source);
        let targetIsArray = Array.isArray(target);
        let sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options);
        } else if (sourceIsArray) {
          return options.arrayMerge(target, source, options);
        } else {
          return mergeObject(target, source, options);
        }
      }

      deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }

        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, options);
        }, {});
      };

      let deepmerge_1 = deepmerge;

      module.exports = deepmerge_1;

      /***/
    },

    /***/ 194: /***/ function (module, exports, __webpack_require__) {
      let debounce = __webpack_require__(313),
        isObject = __webpack_require__(125);

      /** Error message constants. */
      let FUNC_ERROR_TEXT = "Expected a function";

      /**
       * Creates a throttled function that only invokes `func` at most once per
       * every `wait` milliseconds. The throttled function comes with a `cancel`
       * method to cancel delayed `func` invocations and a `flush` method to
       * immediately invoke them. Provide `options` to indicate whether `func`
       * should be invoked on the leading and/or trailing edge of the `wait`
       * timeout. The `func` is invoked with the last arguments provided to the
       * throttled function. Subsequent calls to the throttled function return the
       * result of the last `func` invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the throttled function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.throttle` and `_.debounce`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to throttle.
       * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=true]
       *  Specify invoking on the leading edge of the timeout.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new throttled function.
       * @example
       *
       * // Avoid excessively updating the position while scrolling.
       * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
       *
       * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
       * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
       * jQuery(element).on('click', throttled);
       *
       * // Cancel the trailing throttled invocation.
       * jQuery(window).on('popstate', throttled.cancel);
       */
      function throttle(func, wait, options) {
        let leading = true,
          trailing = true;

        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          leading: leading,
          maxWait: wait,
          trailing: trailing,
        });
      }

      module.exports = throttle;

      /***/
    },

    /***/ 218: /***/ function (module, exports, __webpack_require__) {
      let camel2hyphen = __webpack_require__(336);

      let isDimension = function (feature) {
        let re = /[height|width]$/;
        return re.test(feature);
      };

      let obj2mq = function (obj) {
        let mq = "";
        let features = Object.keys(obj);
        features.forEach(function (feature, index) {
          let value = obj[feature];
          feature = camel2hyphen(feature);
          // Add px to dimension features
          if (isDimension(feature) && typeof value === "number") {
            value = value + "px";
          }
          if (value === true) {
            mq += feature;
          } else if (value === false) {
            mq += "not " + feature;
          } else {
            mq += "(" + feature + ": " + value + ")";
          }
          if (index < features.length - 1) {
            mq += " and ";
          }
        });
        return mq;
      };

      let json2mq = function (query) {
        let mq = "";
        if (typeof query === "string") {
          return query;
        }
        // Handling array of media queries
        if (query instanceof Array) {
          query.forEach(function (q, index) {
            mq += obj2mq(q);
            if (index < query.length - 1) {
              mq += ", ";
            }
          });
          return mq;
        }
        // Handling single media query
        return obj2mq(query);
      };

      module.exports = json2mq;

      /***/
    },

    /***/ 219: /***/ function (module, exports) {
      // This file is intentionally left empty for noop aliases
      /***/
    },

    /***/ 220: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */ let _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
      /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
      /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59);
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ let vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
      /* harmony import */ let _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);

      let isSsrHydration = function isSsrHydration(vm) {
        return vm.$vnode && vm.$vnode.elm && vm.$vnode.elm.dataset && vm.$vnode.elm.dataset.fetchKey;
      };

      let nuxtState = window.__NUXT__;
      /* harmony default export */ __webpack_exports__["a"] = {
        beforeCreate: function beforeCreate() {
          if (!Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* hasFetch */ "m"])(this)) {
            return;
          }

          this._fetchDelay = typeof this.$options.fetchDelay === "number" ? this.$options.fetchDelay : 200;
          vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].util.defineReactive(this, "$fetchState", {
            pending: false,
            error: null,
            timestamp: Date.now(),
          });
          this.$fetch = $fetch.bind(this);
          Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* addLifecycleHook */ "a"])(this, "created", created);
          Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* addLifecycleHook */ "a"])(this, "beforeMount", beforeMount);
        },
      };

      function beforeMount() {
        if (!this._hydrated) {
          return this.$fetch();
        }
      }

      function created() {
        if (!isSsrHydration(this)) {
          createdFullStatic.call(this);
          return;
        } // Hydrate component

        this._hydrated = true;
        this._fetchKey = this.$vnode.elm.dataset.fetchKey;
        let data = nuxtState.fetch[this._fetchKey]; // If fetch error

        if (data && data._error) {
          this.$fetchState.error = data._error;
          return;
        } // Merge data

        for (let key in data) {
          vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].set(this.$data, key, data[key]);
        }
      }

      function createdFullStatic() {
        // Check if component has been fetched on server
        let fetchedOnServer = this.$options.fetchOnServer !== false;

        if (typeof this.$options.fetchOnServer === "function") {
          fetchedOnServer = this.$options.fetchOnServer.call(this) !== false;
        }

        if (!fetchedOnServer || this.$nuxt.isPreview || !this.$nuxt._pagePayload) {
          return;
        }

        this._hydrated = true;
        let defaultKey = this.$options._scopeId || this.$options.name || "";
        let getCounter = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* createGetCounter */ "d"])(this.$nuxt._fetchCounters, defaultKey);

        if (typeof this.$options.fetchKey === "function") {
          this._fetchKey = this.$options.fetchKey.call(this, getCounter);
        } else {
          let key = "string" === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
          this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
        }

        let data = this.$nuxt._pagePayload.fetch[this._fetchKey]; // If fetch error

        if (data && data._error) {
          this.$fetchState.error = data._error;
          return;
        } // If there is a missing payload

        if (!data) {
          this.$fetch();
          return;
        } // Merge data

        for (let _key in data) {
          vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].set(this.$data, _key, data[_key]);
        }
      }

      function $fetch() {
        let _this = this;

        if (!this._fetchPromise) {
          this._fetchPromise = $_fetch.call(this).then(function () {
            delete _this._fetchPromise;
          });
        }

        return this._fetchPromise;
      }

      function $_fetch() {
        return _$_fetch.apply(this, arguments);
      }

      function _$_fetch() {
        _$_fetch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            let _this2 = this;

            let error, startTime, delayLeft;
            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      this.$nuxt.nbFetching++;
                      this.$fetchState.pending = true;
                      this.$fetchState.error = null;
                      this._hydrated = false;
                      error = null;
                      startTime = Date.now();
                      _context.prev = 6;
                      _context.next = 9;
                      return this.$options.fetch.call(this);

                    case 9:
                      _context.next = 15;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](6);

                      if (false) {
                      }

                      error = Object(_utils__WEBPACK_IMPORTED_MODULE_6__[/* normalizeError */ "p"])(_context.t0);

                    case 15:
                      delayLeft = this._fetchDelay - (Date.now() - startTime);

                      if (!(delayLeft > 0)) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 19;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, delayLeft);
                      });

                    case 19:
                      this.$fetchState.error = error;
                      this.$fetchState.pending = false;
                      this.$fetchState.timestamp = Date.now();
                      this.$nextTick(function () {
                        return _this2.$nuxt.nbFetching--;
                      });

                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this,
              [[6, 11]]
            );
          })
        );
        return _$_fetch.apply(this, arguments);
      }

      /***/
    },

    /***/ 221: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
        return installJsonp;
      });
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__
      );

      let chunks = {}; // chunkId => exports

      let chunksInstalling = {}; // chunkId => Promise

      let failedChunks = {};

      function importChunk(chunkId, src) {
        // Already installed
        if (chunks[chunkId]) {
          return Promise.resolve(chunks[chunkId]);
        } // Failed loading

        if (failedChunks[chunkId]) {
          return Promise.reject(failedChunks[chunkId]);
        } // Installing

        if (chunksInstalling[chunkId]) {
          return chunksInstalling[chunkId];
        } // Set a promise in chunk cache

        let resolve, reject;
        let promise = (chunksInstalling[chunkId] = new Promise(function (_resolve, _reject) {
          resolve = _resolve;
          reject = _reject;
        })); // Clear chunk data from cache

        delete chunks[chunkId]; // Start chunk loading

        let script = document.createElement("script");
        script.charset = "utf-8";
        script.timeout = 120;
        script.src = src;
        let timeout; // Create error before stack unwound to get useful stacktrace later

        let error = new Error(); // Complete handlers

        let onScriptComplete =
          (script.onerror =
          script.onload =
            function (event) {
              // Cleanups
              clearTimeout(timeout);
              delete chunksInstalling[chunkId]; // Avoid mem leaks in IE

              script.onerror = script.onload = null; // Verify chunk is loaded

              if (chunks[chunkId]) {
                return resolve(chunks[chunkId]);
              } // Something bad happened

              let errorType = event && (event.type === "load" ? "missing" : event.type);
              let realSrc = event && event.target && event.target.src;
              error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
              error.name = "ChunkLoadError";
              error.type = errorType;
              error.request = realSrc;
              failedChunks[chunkId] = error;
              reject(error);
            }); // Timeout

        timeout = setTimeout(function () {
          onScriptComplete({
            type: "timeout",
            target: script,
          });
        }, 120000); // Append script

        document.head.appendChild(script); // Return promise

        return promise;
      }

      function installJsonp() {
        window.__NUXT_JSONP__ = function (chunkId, exports) {
          chunks[chunkId] = exports;
        };

        window.__NUXT_JSONP_CACHE__ = chunks;
        window.__NUXT_IMPORT__ = importChunk;
      }

      /***/
    },

    /***/ 234: /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function (global) {
        global.installComponents = function (component, components) {
          let options = typeof component.exports === "function" ? component.exports.extendOptions : component.options;

          if (typeof component.exports === "function") {
            options.components = component.exports.options.components;
          }

          options.components = options.components || {};

          for (let i in components) {
            options.components[i] = options.components[i] || components[i];
          }

          if (options.functional) {
            provideFunctionalComponents(component, options.components);
          }
        };

        let functionalPatchKey = "_functionalComponents";

        function provideFunctionalComponents(component, components) {
          if (component.exports[functionalPatchKey]) {
            return;
          }
          component.exports[functionalPatchKey] = true;

          let render = component.exports.render;
          component.exports.render = function (h, vm) {
            return render(
              h,
              Object.assign({}, vm, {
                _c: function (n, a, b) {
                  return vm._c(components[n] || n, a, b);
                },
              })
            );
          };
        }

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(39));

      /***/
    },

    /***/ 235: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (global) {
        /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
        /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
        /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
        /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
        /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
        /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ let _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
        /* harmony import */ let _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
        /* harmony import */ let core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(111);
        /* harmony import */ let core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ let core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(241);
        /* harmony import */ let core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ let core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(246);
        /* harmony import */ let core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ let core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(247);
        /* harmony import */ let core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52);
        /* harmony import */ let regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
        /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__
        );
        /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
        /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__
        );
        /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
        /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default =
          /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
        /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5);
        /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_15__
        );
        /* harmony import */ let core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4);
        /* harmony import */ let core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_16__
        );
        /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40);
        /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_17__
        );
        /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58);
        /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_18__
        );
        /* harmony import */ let core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9);
        /* harmony import */ let core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__
        );
        /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55);
        /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_20__
        );
        /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28);
        /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__
        );
        /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36);
        /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default =
          /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
        /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59);
        /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(
          core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__
        );
        /* harmony import */ let vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1);
        /* harmony import */ let unfetch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(191);
        /* harmony import */ let _middleware_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(131);
        /* harmony import */ let _utils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(0);
        /* harmony import */ let _index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(46);
        /* harmony import */ let _mixins_fetch_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(220);
        /* harmony import */ let _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(94);
        /* harmony import */ let _jsonp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(221);

        function _createForOfIteratorHelper(o, allowArrayLike) {
          let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
              if (it) o = it;
              let i = 0;
              let F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          let normalCompletion = true,
            didErr = false,
            err;
          return {
            s: function s() {
              it = it.call(o);
            },
            n: function n() {
              let step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          let n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        // should be included after ./index.js

        Object(_jsonp__WEBPACK_IMPORTED_MODULE_31__[/* installJsonp */ "a"])(); // Fetch mixin

        if (!vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].__nuxt__fetch__mixin__) {
          vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].mixin(_mixins_fetch_client__WEBPACK_IMPORTED_MODULE_29__[/* default */ "a"]);
          vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].__nuxt__fetch__mixin__ = true;
        } // Component: <NuxtLink>

        vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].component(
          _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"].name,
          _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"]
        );
        vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].component(
          "NLink",
          _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_30__[/* default */ "a"]
        );

        if (!global.fetch) {
          global.fetch = unfetch__WEBPACK_IMPORTED_MODULE_25__[/* default */ "a"];
        } // Global shared references

        let _lastPaths = [];
        let app;
        let router;
        let store; // Try to rehydrate SSR data from window

        let NUXT = window.__NUXT__ || {};
        let $config = NUXT.config || {};

        if ($config._app) {
          __webpack_require__.p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* urlJoin */ "u"])($config._app.cdnURL, $config._app.assetsPath);
        }

        Object.assign(vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].config, {
          silent: true,
          performance: false,
        });
        let errorHandler = vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].config.errorHandler || console.error; // Create and mount App

        Object(_index_js__WEBPACK_IMPORTED_MODULE_28__[/* createApp */ "b"])(null, NUXT.config).then(mountApp).catch(errorHandler);

        function componentOption(component, key) {
          if (!component || !component.options || !component.options[key]) {
            return {};
          }

          let option = component.options[key];

          if (typeof option === "function") {
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            return option.apply(void 0, args);
          }

          return option;
        }

        function mapTransitions(toComponents, to, from) {
          let componentTransitions = function componentTransitions(component) {
            let transition = componentOption(component, "transition", to, from) || {};
            return typeof transition === "string"
              ? {
                  name: transition,
                }
              : transition;
          };

          let fromComponents = from ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "h"])(from) : [];
          let maxDepth = Math.max(toComponents.length, fromComponents.length);
          let mergedTransitions = [];

          let _loop = function _loop(i) {
            // Clone original objects to prevent overrides
            let toTransitions = Object.assign({}, componentTransitions(toComponents[i]));
            let transitions = Object.assign({}, componentTransitions(fromComponents[i])); // Combine transitions & prefer `leave` properties of "from" route

            Object.keys(toTransitions)
              .filter(function (key) {
                return typeof toTransitions[key] !== "undefined" && !key.toLowerCase().includes("leave");
              })
              .forEach(function (key) {
                transitions[key] = toTransitions[key];
              });
            mergedTransitions.push(transitions);
          };

          for (let i = 0; i < maxDepth; i++) {
            _loop(i);
          }

          return mergedTransitions;
        }

        function loadAsyncComponents(_x, _x2, _x3) {
          return _loadAsyncComponents.apply(this, arguments);
        }

        function _loadAsyncComponents() {
          _loadAsyncComponents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(to, from, next) {
              let _this3 = this;

              let Components, startLoader, err, statusCode, message;
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        // Check if route changed (this._routeChanged), only if the page is not an error (for validate())
                        this._routeChanged = Boolean(app.nuxt.err) || from.name !== to.name;
                        this._paramChanged = !this._routeChanged && from.path !== to.path;
                        this._queryChanged = !this._paramChanged && from.fullPath !== to.fullPath;
                        this._diffQuery = this._queryChanged
                          ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getQueryDiff */ "j"])(to.query, from.query)
                          : [];

                        if ((this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual) {
                          this.$loading.start();
                        }

                        _context2.prev = 5;

                        if (!this._queryChanged) {
                          _context2.next = 12;
                          break;
                        }

                        _context2.next = 9;
                        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* resolveRouteComponents */ "r"])(to, function (Component, instance) {
                          return {
                            Component: Component,
                            instance: instance,
                          };
                        });

                      case 9:
                        Components = _context2.sent;
                        // Add a marker on each component that it needs to refresh or not
                        startLoader = Components.some(function (_ref2) {
                          let Component = _ref2.Component,
                            instance = _ref2.instance;
                          let watchQuery = Component.options.watchQuery;

                          if (watchQuery === true) {
                            return true;
                          }

                          if (Array.isArray(watchQuery)) {
                            return watchQuery.some(function (key) {
                              return _this3._diffQuery[key];
                            });
                          }

                          if (typeof watchQuery === "function") {
                            return watchQuery.apply(instance, [to.query, from.query]);
                          }

                          return false;
                        });

                        if (startLoader && this.$loading.start && !this.$loading.manual) {
                          this.$loading.start();
                        }

                      case 12:
                        // Call next()
                        next();
                        _context2.next = 26;
                        break;

                      case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2["catch"](5);
                        err = _context2.t0 || {};
                        statusCode = err.statusCode || err.status || (err.response && err.response.status) || 500;
                        message = err.message || ""; // Handle chunk loading errors
                        // This may be due to a new deployment or a network problem

                        if (!/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
                          _context2.next = 23;
                          break;
                        }

                        window.location.reload(
                          true
                          /* skip cache */
                        );
                        return _context2.abrupt("return");

                      case 23:
                        this.error({
                          statusCode: statusCode,
                          message: message,
                        });
                        this.$nuxt.$emit("routeChanged", to, from, err);
                        next();

                      case 26:
                      case "end":
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                this,
                [[5, 15]]
              );
            })
          );
          return _loadAsyncComponents.apply(this, arguments);
        }

        function applySSRData(Component, ssrData) {
          if (NUXT.serverRendered && ssrData) {
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* applyAsyncData */ "b"])(Component, ssrData);
          }

          Component._Ctor = Component;
          return Component;
        } // Get matched components

        function resolveComponents(route) {
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* flatMapComponents */ "e"])(
            route,
            /*#__PURE__*/ (function () {
              let _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(
                /*#__PURE__*/ regeneratorRuntime.mark(function _callee(Component, _, match, key, index) {
                  let _Component;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!(typeof Component === "function" && !Component.options)) {
                            _context.next = 4;
                            break;
                          }

                          _context.next = 3;
                          return Component();

                        case 3:
                          Component = _context.sent;

                        case 4:
                          // Sanitize it and save it
                          _Component = applySSRData(
                            Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* sanitizeComponent */ "s"])(Component),
                            NUXT.data ? NUXT.data[index] : null
                          );
                          match.components[key] = _Component;
                          return _context.abrupt("return", _Component);

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })
              );

              return function (_x4, _x5, _x6, _x7, _x8) {
                return _ref.apply(this, arguments);
              };
            })()
          );
        }

        function callMiddleware(Components, context, layout) {
          let _this = this;

          let midd = [];
          let unknownMiddleware = false; // If layout is undefined, only call global middleware

          if (typeof layout !== "undefined") {
            midd = []; // Exclude global middleware if layout defined (already called before)

            layout = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* sanitizeComponent */ "s"])(layout);

            if (layout.options.middleware) {
              midd = midd.concat(layout.options.middleware);
            }

            Components.forEach(function (Component) {
              if (Component.options.middleware) {
                midd = midd.concat(Component.options.middleware);
              }
            });
          }

          midd = midd.map(function (name) {
            if (typeof name === "function") {
              return name;
            }

            if (typeof _middleware_js__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"][name] !== "function") {
              unknownMiddleware = true;

              _this.error({
                statusCode: 500,
                message: "Unknown middleware " + name,
              });
            }

            return _middleware_js__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"][name];
          });

          if (unknownMiddleware) {
            return;
          }

          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* middlewareSeries */ "o"])(midd, context);
        }

        function render(_x9, _x10, _x11) {
          return _render.apply(this, arguments);
        } // Fix components format in matched, it's due to code-splitting of vue-router

        function _render() {
          _render = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(to, from, next) {
              let _this4 = this;

              let spaFallback,
                fromMatches,
                nextCalled,
                _next,
                matches,
                Components,
                errorLayout,
                layout,
                _layout,
                isValid,
                _iterator,
                _step,
                Component,
                instances,
                error,
                _layout2;

              return regeneratorRuntime.wrap(
                function _callee4$(_context4) {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        if (!(this._routeChanged === false && this._paramChanged === false && this._queryChanged === false)) {
                          _context4.next = 2;
                          break;
                        }

                        return _context4.abrupt("return", next());

                      case 2:
                        // Handle first render on SPA mode
                        spaFallback = false;

                        if (to === from) {
                          _lastPaths = [];
                          spaFallback = true;
                        } else {
                          fromMatches = [];
                          _lastPaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "h"])(from, fromMatches).map(
                            function (Component, i) {
                              return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(from.matched[fromMatches[i]].path)(
                                from.params
                              );
                            }
                          );
                        } // nextCalled is true when redirected

                        nextCalled = false;

                        _next = function _next(path) {
                          if (from.path === path.path && _this4.$loading.finish) {
                            _this4.$loading.finish();
                          }

                          if (from.path !== path.path && _this4.$loading.pause) {
                            _this4.$loading.pause();
                          }

                          if (nextCalled) {
                            return;
                          }

                          nextCalled = true;
                          next(path);
                        }; // Update context

                        _context4.next = 8;
                        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* setContext */ "t"])(app, {
                          route: to,
                          from: from,
                          next: _next.bind(this),
                        });

                      case 8:
                        this._dateLastError = app.nuxt.dateErr;
                        this._hadError = Boolean(app.nuxt.err); // Get route's matched components

                        matches = [];
                        Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "h"])(to, matches); // If no Components matched, generate 404

                        if (Components.length) {
                          _context4.next = 27;
                          break;
                        }

                        _context4.next = 15;
                        return callMiddleware.call(this, Components, app.context);

                      case 15:
                        if (!nextCalled) {
                          _context4.next = 17;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 17:
                        // Load layout for error page
                        errorLayout = (
                          _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options ||
                          _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"]
                        ).layout;
                        _context4.next = 20;
                        return this.loadLayout(
                          typeof errorLayout === "function"
                            ? errorLayout.call(_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"], app.context)
                            : errorLayout
                        );

                      case 20:
                        layout = _context4.sent;
                        _context4.next = 23;
                        return callMiddleware.call(this, Components, app.context, layout);

                      case 23:
                        if (!nextCalled) {
                          _context4.next = 25;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 25:
                        // Show error page
                        app.context.error({
                          statusCode: 404,
                          message: "This page could not be found",
                        });
                        return _context4.abrupt("return", next());

                      case 27:
                        // Update ._data and other properties if hot reloaded
                        Components.forEach(function (Component) {
                          if (Component._Ctor && Component._Ctor.options) {
                            Component.options.asyncData = Component._Ctor.options.asyncData;
                            Component.options.fetch = Component._Ctor.options.fetch;
                          }
                        }); // Apply transitions

                        this.setTransitions(mapTransitions(Components, to, from));
                        _context4.prev = 29;
                        _context4.next = 32;
                        return callMiddleware.call(this, Components, app.context);

                      case 32:
                        if (!nextCalled) {
                          _context4.next = 34;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 34:
                        if (!app.context._errored) {
                          _context4.next = 36;
                          break;
                        }

                        return _context4.abrupt("return", next());

                      case 36:
                        // Set layout
                        _layout = Components[0].options.layout;

                        if (typeof _layout === "function") {
                          _layout = _layout(app.context);
                        }

                        _context4.next = 40;
                        return this.loadLayout(_layout);

                      case 40:
                        _layout = _context4.sent;
                        _context4.next = 43;
                        return callMiddleware.call(this, Components, app.context, _layout);

                      case 43:
                        if (!nextCalled) {
                          _context4.next = 45;
                          break;
                        }

                        return _context4.abrupt("return");

                      case 45:
                        if (!app.context._errored) {
                          _context4.next = 47;
                          break;
                        }

                        return _context4.abrupt("return", next());

                      case 47:
                        // Call .validate()
                        isValid = true;
                        _context4.prev = 48;
                        _iterator = _createForOfIteratorHelper(Components);
                        _context4.prev = 50;

                        _iterator.s();

                      case 52:
                        if ((_step = _iterator.n()).done) {
                          _context4.next = 63;
                          break;
                        }

                        Component = _step.value;

                        if (!(typeof Component.options.validate !== "function")) {
                          _context4.next = 56;
                          break;
                        }

                        return _context4.abrupt("continue", 61);

                      case 56:
                        _context4.next = 58;
                        return Component.options.validate(app.context);

                      case 58:
                        isValid = _context4.sent;

                        if (isValid) {
                          _context4.next = 61;
                          break;
                        }

                        return _context4.abrupt("break", 63);

                      case 61:
                        _context4.next = 52;
                        break;

                      case 63:
                        _context4.next = 68;
                        break;

                      case 65:
                        _context4.prev = 65;
                        _context4.t0 = _context4["catch"](50);

                        _iterator.e(_context4.t0);

                      case 68:
                        _context4.prev = 68;

                        _iterator.f();

                        return _context4.finish(68);

                      case 71:
                        _context4.next = 77;
                        break;

                      case 73:
                        _context4.prev = 73;
                        _context4.t1 = _context4["catch"](48);
                        // ...If .validate() threw an error
                        this.error({
                          statusCode: _context4.t1.statusCode || "500",
                          message: _context4.t1.message,
                        });
                        return _context4.abrupt("return", next());

                      case 77:
                        if (isValid) {
                          _context4.next = 80;
                          break;
                        }

                        this.error({
                          statusCode: 404,
                          message: "This page could not be found",
                        });
                        return _context4.abrupt("return", next());

                      case 80:
                        _context4.next = 82;
                        return Promise.all(
                          Components.map(
                            /*#__PURE__*/ (function () {
                              let _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(
                                /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(Component, i) {
                                  let childPathChanged, watchParam, watchQuery, promises, hasAsyncData, hasFetch, loadingIncrease, promise, p;
                                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                      switch ((_context3.prev = _context3.next)) {
                                        case 0:
                                          // Check if only children route changed
                                          Component._path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(
                                            to.matched[matches[i]].path
                                          )(to.params);
                                          Component._dataRefresh = false;
                                          childPathChanged = Component._path !== _lastPaths[i]; // Refresh component (call asyncData & fetch) when:
                                          // Route path changed part includes current component
                                          // Or route param changed part includes current component and watchParam is not `false`
                                          // Or route query is changed and watchQuery returns `true`

                                          // Refresh component (call asyncData & fetch) when:
                                          // Route path changed part includes current component
                                          // Or route param changed part includes current component and watchParam is not `false`
                                          // Or route query is changed and watchQuery returns `true`
                                          if (_this4._routeChanged && childPathChanged) {
                                            Component._dataRefresh = true;
                                          } else if (_this4._paramChanged && childPathChanged) {
                                            watchParam = Component.options.watchParam;
                                            Component._dataRefresh = watchParam !== false;
                                          } else if (_this4._queryChanged) {
                                            watchQuery = Component.options.watchQuery;

                                            if (watchQuery === true) {
                                              Component._dataRefresh = true;
                                            } else if (Array.isArray(watchQuery)) {
                                              Component._dataRefresh = watchQuery.some(function (key) {
                                                return _this4._diffQuery[key];
                                              });
                                            } else if (typeof watchQuery === "function") {
                                              if (!instances) {
                                                instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponentsInstances */ "i"])(
                                                  to
                                                );
                                              }

                                              Component._dataRefresh = watchQuery.apply(instances[i], [to.query, from.query]);
                                            }
                                          }

                                          if (!(!_this4._hadError && _this4._isMounted && !Component._dataRefresh)) {
                                            _context3.next = 6;
                                            break;
                                          }

                                          return _context3.abrupt("return");

                                        case 6:
                                          promises = [];
                                          hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === "function";
                                          hasFetch = Boolean(Component.options.fetch) && Component.options.fetch.length;
                                          loadingIncrease = hasAsyncData && hasFetch ? 30 : 45; // Call asyncData(context)

                                          // Call asyncData(context)
                                          if (hasAsyncData) {
                                            if (_this4.isPreview || spaFallback) {
                                              promise = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* promisify */ "q"])(
                                                Component.options.asyncData,
                                                app.context
                                              );
                                            } else {
                                              promise = _this4
                                                .fetchPayload(to.path)
                                                .then(function (payload) {
                                                  return payload.data[i];
                                                })
                                                .catch(function (_err) {
                                                  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* promisify */ "q"])(
                                                    Component.options.asyncData,
                                                    app.context
                                                  );
                                                }); // Fallback
                                            }

                                            promise.then(function (asyncDataResult) {
                                              Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* applyAsyncData */ "b"])(Component, asyncDataResult);

                                              if (_this4.$loading.increase) {
                                                _this4.$loading.increase(loadingIncrease);
                                              }
                                            });
                                            promises.push(promise);
                                          }

                                          if (!_this4.isPreview && !spaFallback) {
                                            // Replay store mutations, catching to avoid error page on SPA fallback
                                            promises.push(
                                              _this4
                                                .fetchPayload(to.path)
                                                .then(function (payload) {
                                                  payload.mutations.forEach(function (m) {
                                                    _this4.$store.commit(m[0], m[1]);
                                                  });
                                                })
                                                .catch(function (err) {
                                                  return null;
                                                })
                                            );
                                          } // Check disabled page loading

                                          // Check disabled page loading
                                          _this4.$loading.manual = Component.options.loading === false;

                                          if (!_this4.isPreview && !spaFallback) {
                                            // Catching the error here for letting the SPA fallback and normal fetch behaviour
                                            promises.push(
                                              _this4.fetchPayload(to.path).catch(function (err) {
                                                return null;
                                              })
                                            );
                                          } // Call fetch(context)

                                          // Call fetch(context)
                                          if (hasFetch) {
                                            p = Component.options.fetch(app.context);

                                            if (!p || (!(p instanceof Promise) && typeof p.then !== "function")) {
                                              p = Promise.resolve(p);
                                            }

                                            p.then(function (fetchResult) {
                                              if (_this4.$loading.increase) {
                                                _this4.$loading.increase(loadingIncrease);
                                              }
                                            });
                                            promises.push(p);
                                          }

                                          return _context3.abrupt("return", Promise.all(promises));

                                        case 16:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }
                                  }, _callee3);
                                })
                              );

                              return function (_x13, _x14) {
                                return _ref3.apply(this, arguments);
                              };
                            })()
                          )
                        );

                      case 82:
                        // If not redirected
                        if (!nextCalled) {
                          if (this.$loading.finish && !this.$loading.manual) {
                            this.$loading.finish();
                          }

                          next();
                        }

                        _context4.next = 99;
                        break;

                      case 85:
                        _context4.prev = 85;
                        _context4.t2 = _context4["catch"](29);
                        error = _context4.t2 || {};

                        if (!(error.message === "ERR_REDIRECT")) {
                          _context4.next = 90;
                          break;
                        }

                        return _context4.abrupt("return", this.$nuxt.$emit("routeChanged", to, from, error));

                      case 90:
                        _lastPaths = [];
                        Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* globalHandleError */ "l"])(error); // Load error layout

                        _layout2 = (
                          _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options ||
                          _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"]
                        ).layout;

                        if (typeof _layout2 === "function") {
                          _layout2 = _layout2(app.context);
                        }

                        _context4.next = 96;
                        return this.loadLayout(_layout2);

                      case 96:
                        this.error(error);
                        this.$nuxt.$emit("routeChanged", to, from, error);
                        next();

                      case 99:
                      case "end":
                        return _context4.stop();
                    }
                  }
                },
                _callee4,
                this,
                [
                  [29, 85],
                  [48, 73],
                  [50, 65, 68, 71],
                ]
              );
            })
          );
          return _render.apply(this, arguments);
        }

        function normalizeComponents(to, ___) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* flatMapComponents */ "e"])(to, function (Component, _, match, key) {
            if (
              Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Component) === "object" &&
              !Component.options
            ) {
              // Updated via vue-router resolveAsyncComponents()
              Component = vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].extend(Component);
              Component._Ctor = Component;
              match.components[key] = Component;
            }

            return Component;
          });
        }

        function setLayoutForNextPage(to) {
          // Set layout
          let hasError = Boolean(this.$options.nuxt.err);

          if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
            hasError = false;
          }

          let layout = hasError
            ? (_index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_28__[/* NuxtError */ "a"])
                .layout
            : to.matched[0].components.default.options.layout;

          if (typeof layout === "function") {
            layout = layout(app.context);
          }

          this.setLayout(layout);
        }

        function checkForErrors(app) {
          // Hide error component if no error
          if (app._hadError && app._dateLastError === app.$options.nuxt.dateErr) {
            app.error();
          }
        } // When navigating on a different route but the same component is used, Vue.js
        // Will not update the instance data, so we have to update $data ourselves

        function fixPrepatch(to, ___) {
          let _this2 = this;

          if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
            return;
          }

          let instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponentsInstances */ "i"])(to);
          let Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* getMatchedComponents */ "h"])(to);
          let triggerScroll = false;
          vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
            instances.forEach(function (instance, i) {
              if (!instance || instance._isDestroyed) {
                return;
              }

              if (
                instance.constructor._dataRefresh &&
                Components[i] === instance.constructor &&
                instance.$vnode.data.keepAlive !== true &&
                typeof instance.constructor.options.data === "function"
              ) {
                let newData = instance.constructor.options.data.call(instance);

                for (let key in newData) {
                  vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].set(instance.$data, key, newData[key]);
                }

                triggerScroll = true;
              }
            });

            if (triggerScroll) {
              // Ensure to trigger scroll event after calling scrollBehavior
              window.$nuxt.$nextTick(function () {
                window.$nuxt.$emit("triggerScroll");
              });
            }

            checkForErrors(_this2);
          });
        }

        function nuxtReady(_app) {
          window.onNuxtReadyCbs.forEach(function (cb) {
            if (typeof cb === "function") {
              cb(_app);
            }
          }); // Special JSDOM

          if (typeof window._onNuxtLoaded === "function") {
            window._onNuxtLoaded(_app);
          } // Add router hooks

          router.afterEach(function (to, from) {
            // Wait for fixPrepatch + $data updates
            vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
              return _app.$nuxt.$emit("routeChanged", to, from);
            });
          });
        }

        function mountApp(_x12) {
          return _mountApp.apply(this, arguments);
        }

        function _mountApp() {
          _mountApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(__app) {
              let _app, payload, layout, mount, Components, clientFirstMount;

              return regeneratorRuntime.wrap(
                function _callee5$(_context5) {
                  while (1) {
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        // Set global variables
                        app = __app.app;
                        router = __app.router;
                        store = __app.store; // Create Vue instance

                        _app = new vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"](app); // Load page chunk

                        if (!(!NUXT.data && NUXT.serverRendered)) {
                          _context5.next = 14;
                          break;
                        }

                        _context5.prev = 5;
                        _context5.next = 8;
                        return _app.fetchPayload(NUXT.routePath || _app.context.route.path);

                      case 8:
                        payload = _context5.sent;
                        Object.assign(NUXT, payload);
                        _context5.next = 14;
                        break;

                      case 12:
                        _context5.prev = 12;
                        _context5.t0 = _context5["catch"](5);

                      case 14:
                        // Load layout
                        layout = NUXT.layout || "default";
                        _context5.next = 17;
                        return _app.loadLayout(layout);

                      case 17:
                        _app.setLayout(layout); // Mounts Vue app to DOM element

                        mount = function mount() {
                          _app.$mount("#__nuxt"); // Add afterEach router hooks

                          router.afterEach(normalizeComponents);
                          router.afterEach(setLayoutForNextPage.bind(_app));
                          router.afterEach(fixPrepatch.bind(_app)); // Listen for first Vue update

                          vue__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"].nextTick(function () {
                            // Call window.{{globals.readyCallback}} callbacks
                            nuxtReady(_app);
                          });
                        }; // Resolve route components

                        _context5.next = 21;
                        return Promise.all(resolveComponents(app.context.route));

                      case 21:
                        Components = _context5.sent;
                        // Enable transitions
                        _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);

                        if (Components.length) {
                          _app.setTransitions(mapTransitions(Components, router.currentRoute));

                          _lastPaths = router.currentRoute.matched.map(function (route) {
                            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_27__[/* compile */ "c"])(route.path)(router.currentRoute.params);
                          });
                        } // Initialize error handler

                        _app.$loading = {}; // To avoid error while _app.$nuxt does not exist

                        if (NUXT.error) {
                          _app.error(NUXT.error);
                        } // Add beforeEach router hooks

                        router.beforeEach(loadAsyncComponents.bind(_app));
                        router.beforeEach(render.bind(_app)); // Fix in static: remove trailing slash to force hydration
                        // Full static, if server-rendered: hydrate, to allow custom redirect to generated page

                        if (!NUXT.serverRendered) {
                          _context5.next = 30;
                          break;
                        }

                        return _context5.abrupt("return", mount());

                      case 30:
                        // First render on client-side
                        clientFirstMount = function clientFirstMount() {
                          normalizeComponents(router.currentRoute, router.currentRoute);
                          setLayoutForNextPage.call(_app, router.currentRoute);
                          checkForErrors(_app); // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render

                          mount();
                        }; // fix: force next tick to avoid having same timestamp when an error happen on spa fallback

                        _context5.next = 33;
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, 0);
                        });

                      case 33:
                        render.call(_app, router.currentRoute, router.currentRoute, function (path) {
                          // If not redirected
                          if (!path) {
                            clientFirstMount();
                            return;
                          } // Add a one-time afterEach hook to
                          // mount the app wait for redirect and route gets resolved

                          var unregisterHook = router.afterEach(function (to, from) {
                            unregisterHook();
                            clientFirstMount();
                          }); // Push the path and let route to be resolved

                          router.push(path, undefined, function (err) {
                            if (err) {
                              errorHandler(err);
                            }
                          });
                        });

                      case 34:
                      case "end":
                        return _context5.stop();
                    }
                  }
                },
                _callee5,
                null,
                [[5, 12]]
              );
            })
          );
          return _mountApp.apply(this, arguments);
        }
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(39));

      /***/
    },

    /***/ 26: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (cssWithMappingToString) {
        let list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            let content = cssWithMappingToString(item);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join("");
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names

        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, ""]];
          }

          let alreadyImportedModules = {};

          if (dedupe) {
            for (let i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              let id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (let _i = 0; _i < modules.length; _i++) {
            let item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      /***/
    },

    /***/ 263: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */ let _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(170);
      /* harmony import */ let _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__
        );
      /* unused harmony reexport * */

      /***/
    },

    /***/ 264: /***/ function (module, exports, __webpack_require__) {
      // Imports
      let ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
      let ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function (i) {
        return i[1];
      });
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.i,
        ".nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}",
        "",
      ]);
      // Exports
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;

      /***/
    },

    /***/ 269: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      module.exports = function (url, options) {
        if (!options) {
          // eslint-disable-next-line no-param-reassign
          options = {};
        } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

        url = url && url.__esModule ? url.default : url;

        if (typeof url !== "string") {
          return url;
        } // If url is already wrapped in quotes, remove them

        if (/^['"].*['"]$/.test(url)) {
          // eslint-disable-next-line no-param-reassign
          url = url.slice(1, -1);
        }

        if (options.hash) {
          // eslint-disable-next-line no-param-reassign
          url += options.hash;
        } // Should url be wrapped?
        // See https://drafts.csswg.org/css-values-3/#urls

        if (/["'() \t\n]/.test(url) || options.needQuotes) {
          return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"');
        }

        return url;
      };

      /***/
    },

    /***/ 27: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "default", function () {
        return /* binding */ addStylesClient;
      });

      // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
      /**
       * Translates the list format produced by css-loader into something
       * easier to manipulate.
       */
      function listToStyles(parentId, list) {
        let styles = [];
        let newStyles = {};
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          let id = item[0];
          let css = item[1];
          let media = item[2];
          let sourceMap = item[3];
          let part = {
            id: parentId + ":" + i,
            css: css,
            media: media,
            sourceMap: sourceMap,
          };
          if (!newStyles[id]) {
            styles.push((newStyles[id] = { id: id, parts: [part] }));
          } else {
            newStyles[id].parts.push(part);
          }
        }
        return styles;
      }

      // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
      /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
    Modified by Evan You @yyx990803
  */

      let hasDocument = typeof document !== "undefined";

      if (typeof DEBUG !== "undefined" && DEBUG) {
        if (!hasDocument) {
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. " +
              "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
          );
        }
      }

      /*
  type StyleObject = {
    id: number;
    parts: Array<StyleObjectPart>
  }
  
  type StyleObjectPart = {
    css: string;
    media: string;
    sourceMap: ?string
  }
  */

      let stylesInDom = {
        /*
    [id: number]: {
      id: number,
      refs: number,
      parts: Array<(obj?: StyleObjectPart) => void>
    }
  */
      };

      let head = hasDocument && (document.head || document.getElementsByTagName("head")[0]);
      let singletonElement = null;
      let singletonCounter = 0;
      let isProduction = false;
      let noop = function () {};
      let options = null;
      let ssrIdKey = "data-vue-ssr-id";

      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page
      let isOldIE = typeof navigator !== "undefined" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      function addStylesClient(parentId, list, _isProduction, _options) {
        isProduction = _isProduction;

        options = _options || {};

        let styles = listToStyles(parentId, list);
        addStylesToDom(styles);

        return function update(newList) {
          let mayRemove = [];
          for (var i = 0; i < styles.length; i++) {
            let item = styles[i];
            var domStyle = stylesInDom[item.id];
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
          if (newList) {
            styles = listToStyles(parentId, newList);
            addStylesToDom(styles);
          } else {
            styles = [];
          }
          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];
            if (domStyle.refs === 0) {
              for (let j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j]();
              }
              delete stylesInDom[domStyle.id];
            }
          }
        };
      }

      function addStylesToDom(styles /* Array<StyleObject> */) {
        for (let i = 0; i < styles.length; i++) {
          let item = styles[i];
          let domStyle = stylesInDom[item.id];
          if (domStyle) {
            domStyle.refs++;
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }
            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j]));
            }
            if (domStyle.parts.length > item.parts.length) {
              domStyle.parts.length = item.parts.length;
            }
          } else {
            let parts = [];
            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j]));
            }
            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function createStyleElement() {
        let styleElement = document.createElement("style");
        styleElement.type = "text/css";
        head.appendChild(styleElement);
        return styleElement;
      }

      function addStyle(obj /* StyleObjectPart */) {
        let update, remove;
        let styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');

        if (styleElement) {
          if (isProduction) {
            // has SSR styles and in production mode.
            // simply do nothing.
            return noop;
          } else {
            // has SSR styles but in dev mode.
            // for some reason Chrome can't handle source map in server-rendered
            // style tags - source maps in <style> only works if the style tag is
            // created and inserted dynamically. So we remove the server rendered
            // styles and inject new ones.
            styleElement.parentNode.removeChild(styleElement);
          }
        }

        if (isOldIE) {
          // use singleton mode for IE9.
          let styleIndex = singletonCounter++;
          styleElement = singletonElement || (singletonElement = createStyleElement());
          update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
          remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else {
          // use multi-style-tag mode in all other cases
          styleElement = createStyleElement();
          update = applyToTag.bind(null, styleElement);
          remove = function () {
            styleElement.parentNode.removeChild(styleElement);
          };
        }

        update(obj);

        return function updateStyle(newObj /* StyleObjectPart */) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }
            update((obj = newObj));
          } else {
            remove();
          }
        };
      }

      let replaceText = (function () {
        let textStore = [];

        return function (index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join("\n");
        };
      })();

      function applyToSingletonTag(styleElement, index, remove, obj) {
        let css = remove ? "" : obj.css;

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
          let cssNode = document.createTextNode(css);
          let childNodes = styleElement.childNodes;
          if (childNodes[index]) styleElement.removeChild(childNodes[index]);
          if (childNodes.length) {
            styleElement.insertBefore(cssNode, childNodes[index]);
          } else {
            styleElement.appendChild(cssNode);
          }
        }
      }

      function applyToTag(styleElement, obj) {
        let css = obj.css;
        let media = obj.media;
        let sourceMap = obj.sourceMap;

        if (media) {
          styleElement.setAttribute("media", media);
        }
        if (options.ssrId) {
          styleElement.setAttribute(ssrIdKey, obj.id);
        }

        if (sourceMap) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */";
          // http://stackoverflow.com/a/26603875
          css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }

      /***/
    },

    /***/ 309: /***/ function (module, exports, __webpack_require__) {
      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      let content = __webpack_require__(310);
      if (content.__esModule) content = content.default;
      if (typeof content === "string") content = [[module.i, content, ""]];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      let add = __webpack_require__(27).default;
      let update = add("15f0552d", content, true, { sourceMap: false });

      /***/
    },

    /***/ 310: /***/ function (module, exports, __webpack_require__) {
      // Imports
      let ___CSS_LOADER_API_IMPORT___ = __webpack_require__(26);
      let ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function (i) {
        return i[1];
      });
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.i,
        'code[class*=language-],pre[class*=language-]{\n  color:#000;\n  background:none;\n  text-shadow:0 1px #fff;\n  font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;\n  font-size:1em;\n  text-align:left;\n  white-space:pre;\n  word-spacing:normal;\n  word-break:normal;\n  word-wrap:normal;\n  line-height:1.5;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n  tab-size:4;\n  -webkit-hyphens:none;\n  -ms-hyphens:none;\n  hyphens:none\n}\n\ncode[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::-moz-selection, code[class*=language-] ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\ncode[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{\n  text-shadow:none;\n  background:#b3d4fc\n}\n\n@media print{\n  code[class*=language-],pre[class*=language-]{\n    text-shadow:none\n  }\n}\n\npre[class*=language-]{\n  padding:1em;\n  margin:.5em 0;\n  overflow:auto\n}\n\n:not(pre)>code[class*=language-],pre[class*=language-]{\n  background:#f5f2f0\n}\n\n:not(pre)>code[class*=language-]{\n  padding:.1em;\n  border-radius:.3em;\n  white-space:normal\n}\n\n.token.cdata,.token.comment,.token.doctype,.token.prolog{\n  color:#708090\n}\n\n.token.punctuation{\n  color:#999\n}\n\n.token.namespace{\n  opacity:.7\n}\n\n.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{\n  color:#905\n}\n\n.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{\n  color:#690\n}\n\n.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{\n  color:#9a6e3a;\n  background:hsla(0,0%,100%,.5)\n}\n\n.token.atrule,.token.attr-value,.token.keyword{\n  color:#07a\n}\n\n.token.class-name,.token.function{\n  color:#dd4a68\n}\n\n.token.important,.token.regex,.token.variable{\n  color:#e90\n}\n\n.token.bold,.token.important{\n  font-weight:700\n}\n\n.token.italic{\n  font-style:italic\n}\n\n.token.entity{\n  cursor:help\n}',
        "",
      ]);
      // Exports
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;

      /***/
    },

    /***/ 313: /***/ function (module, exports, __webpack_require__) {
      let isObject = __webpack_require__(125),
        now = __webpack_require__(314),
        toNumber = __webpack_require__(316);

      /** Error message constants. */
      let FUNC_ERROR_TEXT = "Expected a function";

      /* Built-in method references for those with the same name as other `lodash` methods. */
      let nativeMax = Math.max,
        nativeMin = Math.min;

      /**
       * Creates a debounced function that delays invoking `func` until after `wait`
       * milliseconds have elapsed since the last time the debounced function was
       * invoked. The debounced function comes with a `cancel` method to cancel
       * delayed `func` invocations and a `flush` method to immediately invoke them.
       * Provide `options` to indicate whether `func` should be invoked on the
       * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
       * with the last arguments provided to the debounced function. Subsequent
       * calls to the debounced function return the result of the last `func`
       * invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the debounced function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.debounce` and `_.throttle`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to debounce.
       * @param {number} [wait=0] The number of milliseconds to delay.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=false]
       *  Specify invoking on the leading edge of the timeout.
       * @param {number} [options.maxWait]
       *  The maximum time `func` is allowed to be delayed before it's invoked.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new debounced function.
       * @example
       *
       * // Avoid costly calculations while the window size is in flux.
       * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
       *
       * // Invoke `sendMail` when clicked, debouncing subsequent calls.
       * jQuery(element).on('click', _.debounce(sendMail, 300, {
       *   'leading': true,
       *   'trailing': false
       * }));
       *
       * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
       * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
       * var source = new EventSource('/stream');
       * jQuery(source).on('message', debounced);
       *
       * // Cancel the trailing debounced invocation.
       * jQuery(window).on('popstate', debounced.cancel);
       */
      function debounce(func, wait, options) {
        let lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
          let args = lastArgs,
            thisArg = lastThis;

          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }

        function leadingEdge(time) {
          // Reset any `maxWait` timer.
          lastInvokeTime = time;
          // Start the timer for the trailing edge.
          timerId = setTimeout(timerExpired, wait);
          // Invoke the leading edge.
          return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }

        function shouldInvoke(time) {
          let timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

          // Either this is the first call, activity has stopped and we're at the
          // trailing edge, the system time has gone backwards and we're treating
          // it as the trailing edge, or we've hit the `maxWait` limit.
          return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || (maxing && timeSinceLastInvoke >= maxWait);
        }

        function timerExpired() {
          let time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          // Restart the timer.
          timerId = setTimeout(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
          timerId = undefined;

          // Only invoke if we have `lastArgs` which means `func` has been
          // debounced at least once.
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
          return result;
        }

        function cancel() {
          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
        }

        function flush() {
          return timerId === undefined ? result : trailingEdge(now());
        }

        function debounced() {
          let time = now(),
            isInvoking = shouldInvoke(time);

          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;

          if (isInvoking) {
            if (timerId === undefined) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              // Handle invocations in a tight loop.
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }

      module.exports = debounce;

      /***/
    },

    /***/ 314: /***/ function (module, exports, __webpack_require__) {
      let root = __webpack_require__(172);

      /**
       * Gets the timestamp of the number of milliseconds that have elapsed since
       * the Unix epoch (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Date
       * @returns {number} Returns the timestamp.
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => Logs the number of milliseconds it took for the deferred invocation.
       */
      let now = function () {
        return root.Date.now();
      };

      module.exports = now;

      /***/
    },

    /***/ 315: /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */ (function (global) {
        /** Detect free variable `global` from Node.js. */
        let freeGlobal = typeof global == "object" && global && global.Object === Object && global;

        module.exports = freeGlobal;

        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(39));

      /***/
    },

    /***/ 316: /***/ function (module, exports, __webpack_require__) {
      let baseTrim = __webpack_require__(317),
        isObject = __webpack_require__(125),
        isSymbol = __webpack_require__(319);

      /** Used as references for various `Number` constants. */
      let NAN = 0 / 0;

      /** Used to detect bad signed hexadecimal string values. */
      let reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

      /** Used to detect binary string values. */
      let reIsBinary = /^0b[01]+$/i;

      /** Used to detect octal string values. */
      let reIsOctal = /^0o[0-7]+$/i;

      /** Built-in method references without a dependency on `root`. */
      let freeParseInt = parseInt;

      /**
       * Converts `value` to a number.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to process.
       * @returns {number} Returns the number.
       * @example
       *
       * _.toNumber(3.2);
       * // => 3.2
       *
       * _.toNumber(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toNumber(Infinity);
       * // => Infinity
       *
       * _.toNumber('3.2');
       * // => 3.2
       */
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          let other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        let isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }

      module.exports = toNumber;

      /***/
    },

    /***/ 317: /***/ function (module, exports, __webpack_require__) {
      let trimmedEndIndex = __webpack_require__(318);

      /** Used to match leading whitespace. */
      let reTrimStart = /^\s+/;

      /**
       * The base implementation of `_.trim`.
       *
       * @private
       * @param {string} string The string to trim.
       * @returns {string} Returns the trimmed string.
       */
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }

      module.exports = baseTrim;

      /***/
    },

    /***/ 318: /***/ function (module, exports) {
      /** Used to match a single whitespace character. */
      let reWhitespace = /\s/;

      /**
       * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
       * character of `string`.
       *
       * @private
       * @param {string} string The string to inspect.
       * @returns {number} Returns the index of the last non-whitespace character.
       */
      function trimmedEndIndex(string) {
        let index = string.length;

        while (index-- && reWhitespace.test(string.charAt(index))) {}
        return index;
      }

      module.exports = trimmedEndIndex;

      /***/
    },

    /***/ 319: /***/ function (module, exports, __webpack_require__) {
      let baseGetTag = __webpack_require__(320),
        isObjectLike = __webpack_require__(323);

      /** `Object#toString` result references. */
      let symbolTag = "[object Symbol]";

      /**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */
      function isSymbol(value) {
        return typeof value == "symbol" || (isObjectLike(value) && baseGetTag(value) == symbolTag);
      }

      module.exports = isSymbol;

      /***/
    },

    /***/ 320: /***/ function (module, exports, __webpack_require__) {
      let Symbol = __webpack_require__(173),
        getRawTag = __webpack_require__(321),
        objectToString = __webpack_require__(322);

      /** `Object#toString` result references. */
      let nullTag = "[object Null]",
        undefinedTag = "[object Undefined]";

      /** Built-in value references. */
      let symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }

      module.exports = baseGetTag;

      /***/
    },

    /***/ 321: /***/ function (module, exports, __webpack_require__) {
      let Symbol = __webpack_require__(173);

      /** Used for built-in method references. */
      let objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      let hasOwnProperty = objectProto.hasOwnProperty;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      let nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      let symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */
      function getRawTag(value) {
        let isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        } catch (e) {}

        let result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      module.exports = getRawTag;

      /***/
    },

    /***/ 322: /***/ function (module, exports) {
      /** Used for built-in method references. */
      let objectProto = Object.prototype;

      /**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */
      let nativeObjectToString = objectProto.toString;

      /**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;

      /***/
    },

    /***/ 323: /***/ function (module, exports) {
      /**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }

      module.exports = isObjectLike;

      /***/
    },

    /***/ 336: /***/ function (module, exports) {
      let camel2hyphen = function (str) {
        return str
          .replace(/[A-Z]/g, function (match) {
            return "-" + match.toLowerCase();
          })
          .toLowerCase();
      };

      module.exports = camel2hyphen;

      /***/
    },

    /***/ 337: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let merge = __webpack_require__(180);
      let xlink = __webpack_require__(182);
      let xml = __webpack_require__(185);
      let xmlns = __webpack_require__(186);
      let aria = __webpack_require__(189);
      let html = __webpack_require__(339);

      module.exports = merge([xml, xlink, xmlns, aria, html]);

      /***/
    },

    /***/ 338: /***/ function (module, exports) {
      module.exports = extend;

      let hasOwnProperty = Object.prototype.hasOwnProperty;

      function extend() {
        let target = {};

        for (let i = 0; i < arguments.length; i++) {
          let source = arguments[i];

          for (let key in source) {
            if (hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }

      /***/
    },

    /***/ 339: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let types = __webpack_require__(92);
      let create = __webpack_require__(65);
      let caseInsensitiveTransform = __webpack_require__(187);

      let boolean = types.boolean;
      let overloadedBoolean = types.overloadedBoolean;
      let booleanish = types.booleanish;
      let number = types.number;
      let spaceSeparated = types.spaceSeparated;
      let commaSeparated = types.commaSeparated;

      module.exports = create({
        space: "html",
        attributes: {
          acceptcharset: "accept-charset",
          classname: "class",
          htmlfor: "for",
          httpequiv: "http-equiv",
        },
        transform: caseInsensitiveTransform,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
          // Standard Properties.
          abbr: null,
          accept: commaSeparated,
          acceptCharset: spaceSeparated,
          accessKey: spaceSeparated,
          action: null,
          allow: null,
          allowFullScreen: boolean,
          allowPaymentRequest: boolean,
          allowUserMedia: boolean,
          alt: null,
          as: null,
          async: boolean,
          autoCapitalize: null,
          autoComplete: spaceSeparated,
          autoFocus: boolean,
          autoPlay: boolean,
          capture: boolean,
          charSet: null,
          checked: boolean,
          cite: null,
          className: spaceSeparated,
          cols: number,
          colSpan: null,
          content: null,
          contentEditable: booleanish,
          controls: boolean,
          controlsList: spaceSeparated,
          coords: number | commaSeparated,
          crossOrigin: null,
          data: null,
          dateTime: null,
          decoding: null,
          default: boolean,
          defer: boolean,
          dir: null,
          dirName: null,
          disabled: boolean,
          download: overloadedBoolean,
          draggable: booleanish,
          encType: null,
          enterKeyHint: null,
          form: null,
          formAction: null,
          formEncType: null,
          formMethod: null,
          formNoValidate: boolean,
          formTarget: null,
          headers: spaceSeparated,
          height: number,
          hidden: boolean,
          high: number,
          href: null,
          hrefLang: null,
          htmlFor: spaceSeparated,
          httpEquiv: spaceSeparated,
          id: null,
          imageSizes: null,
          imageSrcSet: commaSeparated,
          inputMode: null,
          integrity: null,
          is: null,
          isMap: boolean,
          itemId: null,
          itemProp: spaceSeparated,
          itemRef: spaceSeparated,
          itemScope: boolean,
          itemType: spaceSeparated,
          kind: null,
          label: null,
          lang: null,
          language: null,
          list: null,
          loading: null,
          loop: boolean,
          low: number,
          manifest: null,
          max: null,
          maxLength: number,
          media: null,
          method: null,
          min: null,
          minLength: number,
          multiple: boolean,
          muted: boolean,
          name: null,
          nonce: null,
          noModule: boolean,
          noValidate: boolean,
          onAbort: null,
          onAfterPrint: null,
          onAuxClick: null,
          onBeforePrint: null,
          onBeforeUnload: null,
          onBlur: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onContextMenu: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFormData: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLanguageChange: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadEnd: null,
          onLoadStart: null,
          onMessage: null,
          onMessageError: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRejectionHandled: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSecurityPolicyViolation: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onSlotChange: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnhandledRejection: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onWheel: null,
          open: boolean,
          optimum: number,
          pattern: null,
          ping: spaceSeparated,
          placeholder: null,
          playsInline: boolean,
          poster: null,
          preload: null,
          readOnly: boolean,
          referrerPolicy: null,
          rel: spaceSeparated,
          required: boolean,
          reversed: boolean,
          rows: number,
          rowSpan: number,
          sandbox: spaceSeparated,
          scope: null,
          scoped: boolean,
          seamless: boolean,
          selected: boolean,
          shape: null,
          size: number,
          sizes: null,
          slot: null,
          span: number,
          spellCheck: booleanish,
          src: null,
          srcDoc: null,
          srcLang: null,
          srcSet: commaSeparated,
          start: number,
          step: null,
          style: null,
          tabIndex: number,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: boolean,
          useMap: null,
          value: booleanish,
          width: number,
          wrap: null,

          // Legacy.
          // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
          align: null, // Several. Use CSS `text-align` instead,
          aLink: null, // `<body>`. Use CSS `a:active {color}` instead
          archive: spaceSeparated, // `<object>`. List of URIs to archives
          axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
          background: null, // `<body>`. Use CSS `background-image` instead
          bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
          border: number, // `<table>`. Use CSS `border-width` instead,
          borderColor: null, // `<table>`. Use CSS `border-color` instead,
          bottomMargin: number, // `<body>`
          cellPadding: null, // `<table>`
          cellSpacing: null, // `<table>`
          char: null, // Several table elements. When `align=char`, sets the character to align on
          charOff: null, // Several table elements. When `char`, offsets the alignment
          classId: null, // `<object>`
          clear: null, // `<br>`. Use CSS `clear` instead
          code: null, // `<object>`
          codeBase: null, // `<object>`
          codeType: null, // `<object>`
          color: null, // `<font>` and `<hr>`. Use CSS instead
          compact: boolean, // Lists. Use CSS to reduce space between items instead
          declare: boolean, // `<object>`
          event: null, // `<script>`
          face: null, // `<font>`. Use CSS instead
          frame: null, // `<table>`
          frameBorder: null, // `<iframe>`. Use CSS `border` instead
          hSpace: number, // `<img>` and `<object>`
          leftMargin: number, // `<body>`
          link: null, // `<body>`. Use CSS `a:link {color: *}` instead
          longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
          lowSrc: null, // `<img>`. Use a `<picture>`
          marginHeight: number, // `<body>`
          marginWidth: number, // `<body>`
          noResize: boolean, // `<frame>`
          noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
          noShade: boolean, // `<hr>`. Use background-color and height instead of borders
          noWrap: boolean, // `<td>` and `<th>`
          object: null, // `<applet>`
          profile: null, // `<head>`
          prompt: null, // `<isindex>`
          rev: null, // `<link>`
          rightMargin: number, // `<body>`
          rules: null, // `<table>`
          scheme: null, // `<meta>`
          scrolling: booleanish, // `<frame>`. Use overflow in the child context
          standby: null, // `<object>`
          summary: null, // `<table>`
          text: null, // `<body>`. Use CSS `color` instead
          topMargin: number, // `<body>`
          valueType: null, // `<param>`
          version: null, // `<html>`. Use a doctype.
          vAlign: null, // Several. Use CSS `vertical-align` instead
          vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
          vSpace: number, // `<img>` and `<object>`

          // Non-standard Properties.
          allowTransparency: null,
          autoCorrect: null,
          autoSave: null,
          disablePictureInPicture: boolean,
          disableRemotePlayback: boolean,
          prefix: null,
          property: null,
          results: number,
          security: null,
          unselectable: null,
        },
      });

      /***/
    },

    /***/ 340: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let merge = __webpack_require__(180);
      let xlink = __webpack_require__(182);
      let xml = __webpack_require__(185);
      let xmlns = __webpack_require__(186);
      let aria = __webpack_require__(189);
      let svg = __webpack_require__(341);

      module.exports = merge([xml, xlink, xmlns, aria, svg]);

      /***/
    },

    /***/ 341: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let types = __webpack_require__(92);
      let create = __webpack_require__(65);
      let caseSensitiveTransform = __webpack_require__(188);

      let boolean = types.boolean;
      let number = types.number;
      let spaceSeparated = types.spaceSeparated;
      let commaSeparated = types.commaSeparated;
      let commaOrSpaceSeparated = types.commaOrSpaceSeparated;

      module.exports = create({
        space: "svg",
        attributes: {
          accentHeight: "accent-height",
          alignmentBaseline: "alignment-baseline",
          arabicForm: "arabic-form",
          baselineShift: "baseline-shift",
          capHeight: "cap-height",
          className: "class",
          clipPath: "clip-path",
          clipRule: "clip-rule",
          colorInterpolation: "color-interpolation",
          colorInterpolationFilters: "color-interpolation-filters",
          colorProfile: "color-profile",
          colorRendering: "color-rendering",
          crossOrigin: "crossorigin",
          dataType: "datatype",
          dominantBaseline: "dominant-baseline",
          enableBackground: "enable-background",
          fillOpacity: "fill-opacity",
          fillRule: "fill-rule",
          floodColor: "flood-color",
          floodOpacity: "flood-opacity",
          fontFamily: "font-family",
          fontSize: "font-size",
          fontSizeAdjust: "font-size-adjust",
          fontStretch: "font-stretch",
          fontStyle: "font-style",
          fontVariant: "font-variant",
          fontWeight: "font-weight",
          glyphName: "glyph-name",
          glyphOrientationHorizontal: "glyph-orientation-horizontal",
          glyphOrientationVertical: "glyph-orientation-vertical",
          hrefLang: "hreflang",
          horizAdvX: "horiz-adv-x",
          horizOriginX: "horiz-origin-x",
          horizOriginY: "horiz-origin-y",
          imageRendering: "image-rendering",
          letterSpacing: "letter-spacing",
          lightingColor: "lighting-color",
          markerEnd: "marker-end",
          markerMid: "marker-mid",
          markerStart: "marker-start",
          navDown: "nav-down",
          navDownLeft: "nav-down-left",
          navDownRight: "nav-down-right",
          navLeft: "nav-left",
          navNext: "nav-next",
          navPrev: "nav-prev",
          navRight: "nav-right",
          navUp: "nav-up",
          navUpLeft: "nav-up-left",
          navUpRight: "nav-up-right",
          onAbort: "onabort",
          onActivate: "onactivate",
          onAfterPrint: "onafterprint",
          onBeforePrint: "onbeforeprint",
          onBegin: "onbegin",
          onCancel: "oncancel",
          onCanPlay: "oncanplay",
          onCanPlayThrough: "oncanplaythrough",
          onChange: "onchange",
          onClick: "onclick",
          onClose: "onclose",
          onCopy: "oncopy",
          onCueChange: "oncuechange",
          onCut: "oncut",
          onDblClick: "ondblclick",
          onDrag: "ondrag",
          onDragEnd: "ondragend",
          onDragEnter: "ondragenter",
          onDragExit: "ondragexit",
          onDragLeave: "ondragleave",
          onDragOver: "ondragover",
          onDragStart: "ondragstart",
          onDrop: "ondrop",
          onDurationChange: "ondurationchange",
          onEmptied: "onemptied",
          onEnd: "onend",
          onEnded: "onended",
          onError: "onerror",
          onFocus: "onfocus",
          onFocusIn: "onfocusin",
          onFocusOut: "onfocusout",
          onHashChange: "onhashchange",
          onInput: "oninput",
          onInvalid: "oninvalid",
          onKeyDown: "onkeydown",
          onKeyPress: "onkeypress",
          onKeyUp: "onkeyup",
          onLoad: "onload",
          onLoadedData: "onloadeddata",
          onLoadedMetadata: "onloadedmetadata",
          onLoadStart: "onloadstart",
          onMessage: "onmessage",
          onMouseDown: "onmousedown",
          onMouseEnter: "onmouseenter",
          onMouseLeave: "onmouseleave",
          onMouseMove: "onmousemove",
          onMouseOut: "onmouseout",
          onMouseOver: "onmouseover",
          onMouseUp: "onmouseup",
          onMouseWheel: "onmousewheel",
          onOffline: "onoffline",
          onOnline: "ononline",
          onPageHide: "onpagehide",
          onPageShow: "onpageshow",
          onPaste: "onpaste",
          onPause: "onpause",
          onPlay: "onplay",
          onPlaying: "onplaying",
          onPopState: "onpopstate",
          onProgress: "onprogress",
          onRateChange: "onratechange",
          onRepeat: "onrepeat",
          onReset: "onreset",
          onResize: "onresize",
          onScroll: "onscroll",
          onSeeked: "onseeked",
          onSeeking: "onseeking",
          onSelect: "onselect",
          onShow: "onshow",
          onStalled: "onstalled",
          onStorage: "onstorage",
          onSubmit: "onsubmit",
          onSuspend: "onsuspend",
          onTimeUpdate: "ontimeupdate",
          onToggle: "ontoggle",
          onUnload: "onunload",
          onVolumeChange: "onvolumechange",
          onWaiting: "onwaiting",
          onZoom: "onzoom",
          overlinePosition: "overline-position",
          overlineThickness: "overline-thickness",
          paintOrder: "paint-order",
          panose1: "panose-1",
          pointerEvents: "pointer-events",
          referrerPolicy: "referrerpolicy",
          renderingIntent: "rendering-intent",
          shapeRendering: "shape-rendering",
          stopColor: "stop-color",
          stopOpacity: "stop-opacity",
          strikethroughPosition: "strikethrough-position",
          strikethroughThickness: "strikethrough-thickness",
          strokeDashArray: "stroke-dasharray",
          strokeDashOffset: "stroke-dashoffset",
          strokeLineCap: "stroke-linecap",
          strokeLineJoin: "stroke-linejoin",
          strokeMiterLimit: "stroke-miterlimit",
          strokeOpacity: "stroke-opacity",
          strokeWidth: "stroke-width",
          tabIndex: "tabindex",
          textAnchor: "text-anchor",
          textDecoration: "text-decoration",
          textRendering: "text-rendering",
          typeOf: "typeof",
          underlinePosition: "underline-position",
          underlineThickness: "underline-thickness",
          unicodeBidi: "unicode-bidi",
          unicodeRange: "unicode-range",
          unitsPerEm: "units-per-em",
          vAlphabetic: "v-alphabetic",
          vHanging: "v-hanging",
          vIdeographic: "v-ideographic",
          vMathematical: "v-mathematical",
          vectorEffect: "vector-effect",
          vertAdvY: "vert-adv-y",
          vertOriginX: "vert-origin-x",
          vertOriginY: "vert-origin-y",
          wordSpacing: "word-spacing",
          writingMode: "writing-mode",
          xHeight: "x-height",
          // These were camelcased in Tiny. Now lowercased in SVG 2
          playbackOrder: "playbackorder",
          timelineBegin: "timelinebegin",
        },
        transform: caseSensitiveTransform,
        properties: {
          about: commaOrSpaceSeparated,
          accentHeight: number,
          accumulate: null,
          additive: null,
          alignmentBaseline: null,
          alphabetic: number,
          amplitude: number,
          arabicForm: null,
          ascent: number,
          attributeName: null,
          attributeType: null,
          azimuth: number,
          bandwidth: null,
          baselineShift: null,
          baseFrequency: null,
          baseProfile: null,
          bbox: null,
          begin: null,
          bias: number,
          by: null,
          calcMode: null,
          capHeight: number,
          className: spaceSeparated,
          clip: null,
          clipPath: null,
          clipPathUnits: null,
          clipRule: null,
          color: null,
          colorInterpolation: null,
          colorInterpolationFilters: null,
          colorProfile: null,
          colorRendering: null,
          content: null,
          contentScriptType: null,
          contentStyleType: null,
          crossOrigin: null,
          cursor: null,
          cx: null,
          cy: null,
          d: null,
          dataType: null,
          defaultAction: null,
          descent: number,
          diffuseConstant: number,
          direction: null,
          display: null,
          dur: null,
          divisor: number,
          dominantBaseline: null,
          download: boolean,
          dx: null,
          dy: null,
          edgeMode: null,
          editable: null,
          elevation: number,
          enableBackground: null,
          end: null,
          event: null,
          exponent: number,
          externalResourcesRequired: null,
          fill: null,
          fillOpacity: number,
          fillRule: null,
          filter: null,
          filterRes: null,
          filterUnits: null,
          floodColor: null,
          floodOpacity: null,
          focusable: null,
          focusHighlight: null,
          fontFamily: null,
          fontSize: null,
          fontSizeAdjust: null,
          fontStretch: null,
          fontStyle: null,
          fontVariant: null,
          fontWeight: null,
          format: null,
          fr: null,
          from: null,
          fx: null,
          fy: null,
          g1: commaSeparated,
          g2: commaSeparated,
          glyphName: commaSeparated,
          glyphOrientationHorizontal: null,
          glyphOrientationVertical: null,
          glyphRef: null,
          gradientTransform: null,
          gradientUnits: null,
          handler: null,
          hanging: number,
          hatchContentUnits: null,
          hatchUnits: null,
          height: null,
          href: null,
          hrefLang: null,
          horizAdvX: number,
          horizOriginX: number,
          horizOriginY: number,
          id: null,
          ideographic: number,
          imageRendering: null,
          initialVisibility: null,
          in: null,
          in2: null,
          intercept: number,
          k: number,
          k1: number,
          k2: number,
          k3: number,
          k4: number,
          kernelMatrix: commaOrSpaceSeparated,
          kernelUnitLength: null,
          keyPoints: null, // SEMI_COLON_SEPARATED
          keySplines: null, // SEMI_COLON_SEPARATED
          keyTimes: null, // SEMI_COLON_SEPARATED
          kerning: null,
          lang: null,
          lengthAdjust: null,
          letterSpacing: null,
          lightingColor: null,
          limitingConeAngle: number,
          local: null,
          markerEnd: null,
          markerMid: null,
          markerStart: null,
          markerHeight: null,
          markerUnits: null,
          markerWidth: null,
          mask: null,
          maskContentUnits: null,
          maskUnits: null,
          mathematical: null,
          max: null,
          media: null,
          mediaCharacterEncoding: null,
          mediaContentEncodings: null,
          mediaSize: number,
          mediaTime: null,
          method: null,
          min: null,
          mode: null,
          name: null,
          navDown: null,
          navDownLeft: null,
          navDownRight: null,
          navLeft: null,
          navNext: null,
          navPrev: null,
          navRight: null,
          navUp: null,
          navUpLeft: null,
          navUpRight: null,
          numOctaves: null,
          observer: null,
          offset: null,
          onAbort: null,
          onActivate: null,
          onAfterPrint: null,
          onBeforePrint: null,
          onBegin: null,
          onCancel: null,
          onCanPlay: null,
          onCanPlayThrough: null,
          onChange: null,
          onClick: null,
          onClose: null,
          onCopy: null,
          onCueChange: null,
          onCut: null,
          onDblClick: null,
          onDrag: null,
          onDragEnd: null,
          onDragEnter: null,
          onDragExit: null,
          onDragLeave: null,
          onDragOver: null,
          onDragStart: null,
          onDrop: null,
          onDurationChange: null,
          onEmptied: null,
          onEnd: null,
          onEnded: null,
          onError: null,
          onFocus: null,
          onFocusIn: null,
          onFocusOut: null,
          onHashChange: null,
          onInput: null,
          onInvalid: null,
          onKeyDown: null,
          onKeyPress: null,
          onKeyUp: null,
          onLoad: null,
          onLoadedData: null,
          onLoadedMetadata: null,
          onLoadStart: null,
          onMessage: null,
          onMouseDown: null,
          onMouseEnter: null,
          onMouseLeave: null,
          onMouseMove: null,
          onMouseOut: null,
          onMouseOver: null,
          onMouseUp: null,
          onMouseWheel: null,
          onOffline: null,
          onOnline: null,
          onPageHide: null,
          onPageShow: null,
          onPaste: null,
          onPause: null,
          onPlay: null,
          onPlaying: null,
          onPopState: null,
          onProgress: null,
          onRateChange: null,
          onRepeat: null,
          onReset: null,
          onResize: null,
          onScroll: null,
          onSeeked: null,
          onSeeking: null,
          onSelect: null,
          onShow: null,
          onStalled: null,
          onStorage: null,
          onSubmit: null,
          onSuspend: null,
          onTimeUpdate: null,
          onToggle: null,
          onUnload: null,
          onVolumeChange: null,
          onWaiting: null,
          onZoom: null,
          opacity: null,
          operator: null,
          order: null,
          orient: null,
          orientation: null,
          origin: null,
          overflow: null,
          overlay: null,
          overlinePosition: number,
          overlineThickness: number,
          paintOrder: null,
          panose1: null,
          path: null,
          pathLength: number,
          patternContentUnits: null,
          patternTransform: null,
          patternUnits: null,
          phase: null,
          ping: spaceSeparated,
          pitch: null,
          playbackOrder: null,
          pointerEvents: null,
          points: null,
          pointsAtX: number,
          pointsAtY: number,
          pointsAtZ: number,
          preserveAlpha: null,
          preserveAspectRatio: null,
          primitiveUnits: null,
          propagate: null,
          property: commaOrSpaceSeparated,
          r: null,
          radius: null,
          referrerPolicy: null,
          refX: null,
          refY: null,
          rel: commaOrSpaceSeparated,
          rev: commaOrSpaceSeparated,
          renderingIntent: null,
          repeatCount: null,
          repeatDur: null,
          requiredExtensions: commaOrSpaceSeparated,
          requiredFeatures: commaOrSpaceSeparated,
          requiredFonts: commaOrSpaceSeparated,
          requiredFormats: commaOrSpaceSeparated,
          resource: null,
          restart: null,
          result: null,
          rotate: null,
          rx: null,
          ry: null,
          scale: null,
          seed: null,
          shapeRendering: null,
          side: null,
          slope: null,
          snapshotTime: null,
          specularConstant: number,
          specularExponent: number,
          spreadMethod: null,
          spacing: null,
          startOffset: null,
          stdDeviation: null,
          stemh: null,
          stemv: null,
          stitchTiles: null,
          stopColor: null,
          stopOpacity: null,
          strikethroughPosition: number,
          strikethroughThickness: number,
          string: null,
          stroke: null,
          strokeDashArray: commaOrSpaceSeparated,
          strokeDashOffset: null,
          strokeLineCap: null,
          strokeLineJoin: null,
          strokeMiterLimit: number,
          strokeOpacity: number,
          strokeWidth: null,
          style: null,
          surfaceScale: number,
          syncBehavior: null,
          syncBehaviorDefault: null,
          syncMaster: null,
          syncTolerance: null,
          syncToleranceDefault: null,
          systemLanguage: commaOrSpaceSeparated,
          tabIndex: number,
          tableValues: null,
          target: null,
          targetX: number,
          targetY: number,
          textAnchor: null,
          textDecoration: null,
          textRendering: null,
          textLength: null,
          timelineBegin: null,
          title: null,
          transformBehavior: null,
          type: null,
          typeOf: commaOrSpaceSeparated,
          to: null,
          transform: null,
          u1: null,
          u2: null,
          underlinePosition: number,
          underlineThickness: number,
          unicode: null,
          unicodeBidi: null,
          unicodeRange: null,
          unitsPerEm: number,
          values: null,
          vAlphabetic: number,
          vMathematical: number,
          vectorEffect: null,
          vHanging: number,
          vIdeographic: number,
          version: null,
          vertAdvY: number,
          vertOriginX: number,
          vertOriginY: number,
          viewBox: null,
          viewTarget: null,
          visibility: null,
          width: null,
          widths: null,
          wordSpacing: null,
          writingMode: null,
          x: null,
          x1: null,
          x2: null,
          xChannelSelector: null,
          xHeight: number,
          y: null,
          y1: null,
          y2: null,
          yChannelSelector: null,
          z: null,
          zoomAndPan: null,
        },
      });

      /***/
    },

    /***/ 342: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let normalize = __webpack_require__(126);
      let DefinedInfo = __webpack_require__(183);
      let Info = __webpack_require__(184);

      let data = "data";

      module.exports = find;

      let valid = /^data[-\w.:]+$/i;
      let dash = /-[a-z]/g;
      let cap = /[A-Z]/g;

      function find(schema, value) {
        let normal = normalize(value);
        let prop = value;
        let Type = Info;

        if (normal in schema.normal) {
          return schema.property[schema.normal[normal]];
        }

        if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
          // Attribute or property.
          if (value.charAt(4) === "-") {
            prop = datasetToProperty(value);
          } else {
            value = datasetToAttribute(value);
          }

          Type = DefinedInfo;
        }

        return new Type(prop, value);
      }

      function datasetToProperty(attribute) {
        let value = attribute.slice(5).replace(dash, camelcase);
        return data + value.charAt(0).toUpperCase() + value.slice(1);
      }

      function datasetToAttribute(property) {
        let value = property.slice(4);

        if (dash.test(value)) {
          return property;
        }

        value = value.replace(cap, kebab);

        if (value.charAt(0) !== "-") {
          value = "-" + value;
        }

        return data + value;
      }

      function kebab($0) {
        return "-" + $0.toLowerCase();
      }

      function camelcase($0) {
        return $0.charAt(1).toUpperCase();
      }

      /***/
    },

    /***/ 46: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return /* binding */ createApp;
      });
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return /* reexport */ layouts_error["a" /* default */];
      });

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
      let es_object_keys = __webpack_require__(4);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
      let es_symbol = __webpack_require__(2);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
      let es_array_filter = __webpack_require__(5);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
      let es_object_get_own_property_descriptor = __webpack_require__(6);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
      let web_dom_collections_for_each = __webpack_require__(3);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
      let es_object_get_own_property_descriptors = __webpack_require__(7);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
      let asyncToGenerator = __webpack_require__(13);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
      let defineProperty = __webpack_require__(23);

      // EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
      let runtime = __webpack_require__(52);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
      let es_function_name = __webpack_require__(33);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
      let es_array_map = __webpack_require__(55);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
      let es_object_to_string = __webpack_require__(19);

      // EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
      let vue_runtime_esm = __webpack_require__(1);

      // EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
      let vuex_esm = __webpack_require__(45);

      // EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.browser.js
      let vue_meta_esm_browser = __webpack_require__(192);

      // EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
      let vue_client_only_common = __webpack_require__(132);
      let vue_client_only_common_default = /*#__PURE__*/ __webpack_require__.n(vue_client_only_common);

      // EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
      let vue_no_ssr_common = __webpack_require__(67);
      let vue_no_ssr_common_default = /*#__PURE__*/ __webpack_require__.n(vue_no_ssr_common);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
      let es_string_iterator = __webpack_require__(28);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
      let web_dom_collections_iterator = __webpack_require__(36);

      // EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
      let vue_router_esm = __webpack_require__(133);

      // EXTERNAL MODULE: ./node_modules/ufo/dist/index.mjs + 2 modules
      let dist = __webpack_require__(18);

      // EXTERNAL MODULE: ./node_modules/.cache/nuxt/utils.js
      let utils = __webpack_require__(0);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
      let web_timers = __webpack_require__(59);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/router.scrollBehavior.js

      /* harmony default export */ let router_scrollBehavior = function (_x, _x2, _x3) {
        return router_scrollBehavior_ref.apply(this, arguments);
      };

      function router_scrollBehavior_ref() {
        router_scrollBehavior_ref = Object(asyncToGenerator["a" /* default */])(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(to, from, savedPosition) {
            let findEl, el;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    if (!savedPosition) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return", savedPosition);

                  case 2:
                    findEl = /*#__PURE__*/ (function () {
                      let _ref2 = Object(asyncToGenerator["a" /* default */])(
                        /*#__PURE__*/ regeneratorRuntime.mark(function _callee(hash, x) {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  return _context.abrupt(
                                    "return",
                                    document.querySelector(hash) ||
                                      new Promise(function (resolve, reject) {
                                        if (x > 50) {
                                          return resolve();
                                        }

                                        setTimeout(function () {
                                          resolve(findEl(hash, ++x || 1));
                                        }, 100);
                                      })
                                  );

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        })
                      );

                      return function findEl(_x4, _x5) {
                        return _ref2.apply(this, arguments);
                      };
                    })();

                    if (!to.hash) {
                      _context2.next = 12;
                      break;
                    }

                    _context2.next = 6;
                    return findEl(to.hash);

                  case 6:
                    el = _context2.sent;

                    if (!("scrollBehavior" in document.documentElement.style)) {
                      _context2.next = 11;
                      break;
                    }

                    return _context2.abrupt(
                      "return",
                      window.scrollTo({
                        top: el.offsetTop,
                        behavior: "smooth",
                      })
                    );

                  case 11:
                    return _context2.abrupt("return", window.scrollTo(0, el.offsetTop));

                  case 12:
                    return _context2.abrupt("return", {
                      x: 0,
                      y: 0,
                    });

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
        return router_scrollBehavior_ref.apply(this, arguments);
      }
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/router.js

      function ownKeys(object, enumerableOnly) {
        let keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              Object(defineProperty["a" /* default */])(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }

      let router_1b213fd8 = function _1b213fd8() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/blog */ 9).then(__webpack_require__.bind(null, 579))
        );
      };

      let router_657671fe = function _657671fe() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/companion-privacy */ 10).then(__webpack_require__.bind(null, 580))
        );
      };

      let router_0aadcbb4 = function _0aadcbb4() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/docs/index */ 12).then(__webpack_require__.bind(null, 581))
        );
      };

      let router_137cf7f7 = function _137cf7f7() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/help */ 13).then(__webpack_require__.bind(null, 573))
        );
      };

      let router_e336341a = function _e336341a() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/legal */ 15).then(__webpack_require__.bind(null, 574))
        );
      };

      let router_ddfb34c4 = function _ddfb34c4() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/media */ 16).then(__webpack_require__.bind(null, 575))
        );
      };

      let router_06a8e6c2 = function _06a8e6c2() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/privacy */ 17).then(__webpack_require__.bind(null, 582))
        );
      };

      let router_41c905da = function _41c905da() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/team */ 18).then(__webpack_require__.bind(null, 576))
        );
      };

      let router_bc824652 = function _bc824652() {
        return Object(utils["n" /* interopDefault */])(
          __webpack_require__.e(/* import() | pages/docs/examples */ 11).then(__webpack_require__.bind(null, 583))
        );
      };

      let router_3d6810e8 = function _3d6810e8() {
        return Object(utils["n" /* interopDefault */])(
          Promise.all(/* import() | pages/index */ [__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 577))
        );
      };

      let emptyFn = function emptyFn() {};

      vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
      let routerOptions = {
        mode: "history",
        base: ((ipfsMatch = window.location.pathname.match(/\/ip[fn]s\/[^/]+\//)), ipfsMatch ? ipfsMatch[0] : "/"),
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: router_scrollBehavior,
        routes: [
          {
            path: "/blog",
            component: router_1b213fd8,
            name: "blog",
          },
          {
            path: "/companion-privacy",
            component: router_657671fe,
            name: "companion-privacy",
          },
          {
            path: "/docs",
            component: router_0aadcbb4,
            name: "docs",
          },
          {
            path: "/help",
            component: router_137cf7f7,
            name: "help",
          },
          {
            path: "/legal",
            component: router_e336341a,
            name: "legal",
          },
          {
            path: "/media",
            component: router_ddfb34c4,
            name: "media",
          },
          {
            path: "/privacy",
            component: router_06a8e6c2,
            name: "privacy",
          },
          {
            path: "/team",
            component: router_41c905da,
            name: "team",
          },
          {
            path: "/docs/examples",
            component: router_bc824652,
            name: "docs-examples",
          },
          {
            path: "/",
            component: router_3d6810e8,
            name: "index",
          },
        ],
        fallback: false,
      };
      function createRouter(ssrContext, config) {
        let base = (config._app && config._app.basePath) || routerOptions.base;
        let router = new vue_router_esm["a" /* default */](
          _objectSpread(
            _objectSpread({}, routerOptions),
            {},
            {
              base: base,
            }
          )
        ); // TODO: remove in Nuxt 3

        let originalPush = router.push;

        router.push = function push(location) {
          let onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
          let onAbort = arguments.length > 2 ? arguments[2] : undefined;
          return originalPush.call(this, location, onComplete, onAbort);
        };

        let resolve = router.resolve.bind(router);

        router.resolve = function (to, current, append) {
          if (typeof to === "string") {
            to = Object(dist["d" /* normalizeURL */])(to);
          }

          return resolve(to, current, append);
        };

        return router;
      }
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-child.js

      /* harmony default export */ let nuxt_child = {
        name: "NuxtChild",
        functional: true,
        props: {
          nuxtChildKey: {
            type: String,
            default: "",
          },
          keepAlive: Boolean,
          keepAliveProps: {
            type: Object,
            default: undefined,
          },
        },
        render: function render(_, _ref) {
          let parent = _ref.parent,
            data = _ref.data,
            props = _ref.props;
          let h = parent.$createElement;
          data.nuxtChild = true;
          let _parent = parent;
          let transitions = parent.$nuxt.nuxt.transitions;
          let defaultTransition = parent.$nuxt.nuxt.defaultTransition;
          let depth = 0;

          while (parent) {
            if (parent.$vnode && parent.$vnode.data.nuxtChild) {
              depth++;
            }

            parent = parent.$parent;
          }

          data.nuxtChildDepth = depth;
          let transition = transitions[depth] || defaultTransition;
          let transitionProps = {};
          transitionsKeys.forEach(function (key) {
            if (typeof transition[key] !== "undefined") {
              transitionProps[key] = transition[key];
            }
          });
          let listeners = {};
          listenersKeys.forEach(function (key) {
            if (typeof transition[key] === "function") {
              listeners[key] = transition[key].bind(_parent);
            }
          });

          if (true) {
            // Add triggerScroll event on beforeEnter (fix #1376)
            let beforeEnter = listeners.beforeEnter;

            listeners.beforeEnter = function (el) {
              // Ensure to trigger scroll event after calling scrollBehavior
              window.$nuxt.$nextTick(function () {
                window.$nuxt.$emit("triggerScroll");
              });

              if (beforeEnter) {
                return beforeEnter.call(_parent, el);
              }
            };
          } // make sure that leave is called asynchronous (fix #5703)

          if (transition.css === false) {
            let leave = listeners.leave; // only add leave listener when user didnt provide one
            // or when it misses the done argument

            if (!leave || leave.length < 2) {
              listeners.leave = function (el, done) {
                if (leave) {
                  leave.call(_parent, el);
                }

                _parent.$nextTick(done);
              };
            }
          }

          let routerView = h("routerView", data);

          if (props.keepAlive) {
            routerView = h(
              "keep-alive",
              {
                props: props.keepAliveProps,
              },
              [routerView]
            );
          }

          return h(
            "transition",
            {
              props: transitionProps,
              on: listeners,
            },
            [routerView]
          );
        },
      };
      var transitionsKeys = [
        "name",
        "mode",
        "appear",
        "css",
        "type",
        "duration",
        "enterClass",
        "leaveClass",
        "appearClass",
        "enterActiveClass",
        "enterActiveClass",
        "leaveActiveClass",
        "appearActiveClass",
        "enterToClass",
        "leaveToClass",
        "appearToClass",
      ];
      var listenersKeys = [
        "beforeEnter",
        "enter",
        "afterEnter",
        "enterCancelled",
        "beforeLeave",
        "leave",
        "afterLeave",
        "leaveCancelled",
        "beforeAppear",
        "appear",
        "afterAppear",
        "appearCancelled",
      ];
      // EXTERNAL MODULE: ./layouts/error.vue + 4 modules
      var layouts_error = __webpack_require__(50);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
      let slicedToArray = __webpack_require__(32);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
      let es_regexp_exec = __webpack_require__(41);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
      let es_string_replace = __webpack_require__(56);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
      let es_regexp_to_string = __webpack_require__(96);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt.js

      /* harmony default export */ let components_nuxt = {
        name: "Nuxt",
        components: {
          NuxtChild: nuxt_child,
          NuxtError: layouts_error["a" /* default */],
        },
        props: {
          nuxtChildKey: {
            type: String,
            default: undefined,
          },
          keepAlive: Boolean,
          keepAliveProps: {
            type: Object,
            default: undefined,
          },
          name: {
            type: String,
            default: "default",
          },
        },
        errorCaptured: function errorCaptured(error) {
          // if we receive and error while showing the NuxtError component
          // capture the error and force an immediate update so we re-render
          // without the NuxtError component
          if (this.displayingNuxtError) {
            this.errorFromNuxtError = error;
            this.$forceUpdate();
          }
        },
        computed: {
          routerViewKey: function routerViewKey() {
            // If nuxtChildKey prop is given or current route has children
            if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
              return this.nuxtChildKey || Object(utils["c" /* compile */])(this.$route.matched[0].path)(this.$route.params);
            }

            let _this$$route$matched = Object(slicedToArray["a" /* default */])(this.$route.matched, 1),
              matchedRoute = _this$$route$matched[0];

            if (!matchedRoute) {
              return this.$route.path;
            }

            let Component = matchedRoute.components.default;

            if (Component && Component.options) {
              let options = Component.options;

              if (options.key) {
                return typeof options.key === "function" ? options.key(this.$route) : options.key;
              }
            }

            let strict = /\/$/.test(matchedRoute.path);
            return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
          },
        },
        beforeCreate: function beforeCreate() {
          vue_runtime_esm["a" /* default */].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
        },
        render: function render(h) {
          let _this = this;

          // if there is no error
          if (!this.nuxt.err) {
            // Directly return nuxt child
            return h("NuxtChild", {
              key: this.routerViewKey,
              props: this.$props,
            });
          } // if an error occurred within NuxtError show a simple
          // error message instead to prevent looping

          if (this.errorFromNuxtError) {
            this.$nextTick(function () {
              return (_this.errorFromNuxtError = false);
            });
            return h("div", {}, [
              h("h2", "An error occurred while showing the error page"),
              h("p", "Unfortunately an error occurred and while showing the error page another error occurred"),
              h("p", "Error details: ".concat(this.errorFromNuxtError.toString())),
              h(
                "nuxt-link",
                {
                  props: {
                    to: "/",
                  },
                },
                "Go back to home"
              ),
            ]);
          } // track if we are showing the NuxtError component

          this.displayingNuxtError = true;
          this.$nextTick(function () {
            return (_this.displayingNuxtError = false);
          });
          return h(layouts_error["a" /* default */], {
            props: {
              error: this.nuxt.err,
            },
          });
        },
      };
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
      let es_array_slice = __webpack_require__(53);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
      let es_array_from = __webpack_require__(47);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
      let es_symbol_description = __webpack_require__(51);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
      let es_symbol_iterator = __webpack_require__(54);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
      let es_array_includes = __webpack_require__(40);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
      let es_string_includes = __webpack_require__(58);

      // CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&

      /* harmony default export */ let nuxt_loadingvue_type_script_lang_js_ = {
        name: "NuxtLoading",
        data: function data() {
          return {
            percent: 0,
            show: false,
            canSucceed: true,
            reversed: false,
            skipTimerCount: 0,
            rtl: false,
            throttle: 200,
            duration: 5000,
            continuous: false,
          };
        },
        computed: {
          left: function left() {
            if (!this.continuous && !this.rtl) {
              return false;
            }

            return this.rtl ? (this.reversed ? "0px" : "auto") : !this.reversed ? "0px" : "auto";
          },
        },
        beforeDestroy: function beforeDestroy() {
          this.clear();
        },
        methods: {
          clear: function clear() {
            clearInterval(this._timer);
            clearTimeout(this._throttle);
            this._timer = null;
          },
          start: function start() {
            let _this = this;

            this.clear();
            this.percent = 0;
            this.reversed = false;
            this.skipTimerCount = 0;
            this.canSucceed = true;

            if (this.throttle) {
              this._throttle = setTimeout(function () {
                return _this.startTimer();
              }, this.throttle);
            } else {
              this.startTimer();
            }

            return this;
          },
          set: function set(num) {
            this.show = true;
            this.canSucceed = true;
            this.percent = Math.min(100, Math.max(0, Math.floor(num)));
            return this;
          },
          get: function get() {
            return this.percent;
          },
          increase: function increase(num) {
            this.percent = Math.min(100, Math.floor(this.percent + num));
            return this;
          },
          decrease: function decrease(num) {
            this.percent = Math.max(0, Math.floor(this.percent - num));
            return this;
          },
          pause: function pause() {
            clearInterval(this._timer);
            return this;
          },
          resume: function resume() {
            this.startTimer();
            return this;
          },
          finish: function finish() {
            this.percent = this.reversed ? 0 : 100;
            this.hide();
            return this;
          },
          hide: function hide() {
            let _this2 = this;

            this.clear();
            setTimeout(function () {
              _this2.show = false;

              _this2.$nextTick(function () {
                _this2.percent = 0;
                _this2.reversed = false;
              });
            }, 500);
            return this;
          },
          fail: function fail(error) {
            this.canSucceed = false;
            return this;
          },
          startTimer: function startTimer() {
            let _this3 = this;

            if (!this.show) {
              this.show = true;
            }

            if (typeof this._cut === "undefined") {
              this._cut = 10000 / Math.floor(this.duration);
            }

            this._timer = setInterval(function () {
              /**
               * When reversing direction skip one timers
               * so 0, 100 are displayed for two iterations
               * also disable css width transitioning
               * which otherwise interferes and shows
               * a jojo effect
               */
              if (_this3.skipTimerCount > 0) {
                _this3.skipTimerCount--;
                return;
              }

              if (_this3.reversed) {
                _this3.decrease(_this3._cut);
              } else {
                _this3.increase(_this3._cut);
              }

              if (_this3.continuous) {
                if (_this3.percent >= 100) {
                  _this3.skipTimerCount = 1;
                  _this3.reversed = !_this3.reversed;
                } else if (_this3.percent <= 0) {
                  _this3.skipTimerCount = 1;
                  _this3.reversed = !_this3.reversed;
                }
              }
            }, 100);
          },
        },
        render: function render(h) {
          let el = h(false);

          if (this.show) {
            el = h("div", {
              staticClass: "nuxt-progress",
              class: {
                "nuxt-progress-notransition": this.skipTimerCount > 0,
                "nuxt-progress-failed": !this.canSucceed,
              },
              style: {
                width: this.percent + "%",
                left: this.left,
              },
            });
          }

          return el;
        },
      };
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
      /* harmony default export */ let components_nuxt_loadingvue_type_script_lang_js_ = nuxt_loadingvue_type_script_lang_js_;
      // EXTERNAL MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&
      let nuxt_loadingvue_type_style_index_0_lang_css_ = __webpack_require__(263);

      // EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
      let componentNormalizer = __webpack_require__(11);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue
      let nuxt_loading_render, staticRenderFns;

      /* normalize component */

      let nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
        components_nuxt_loadingvue_type_script_lang_js_,
        nuxt_loading_render,
        staticRenderFns,
        false,
        null,
        null,
        null
      );

      /* harmony default export */ let nuxt_loading = nuxt_loading_component.exports;
      // EXTERNAL MODULE: ./assets/css/tailwind.css
      let tailwind = __webpack_require__(265);

      // EXTERNAL MODULE: ./assets/fonts/index.css
      let fonts = __webpack_require__(267);

      // EXTERNAL MODULE: ./assets/css/layout.css
      let layout = __webpack_require__(303);

      // EXTERNAL MODULE: ./assets/css/embed-responsive.css
      let embed_responsive = __webpack_require__(305);

      // EXTERNAL MODULE: ./assets/css/typography.css
      let typography = __webpack_require__(307);

      // EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
      let prism = __webpack_require__(309);

      // EXTERNAL MODULE: ./layouts/default.vue + 4 modules
      let layouts_default = __webpack_require__(222);

      // EXTERNAL MODULE: ./layouts/simple.vue + 2 modules
      let simple = __webpack_require__(223);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/App.js

      function _createForOfIteratorHelper(o, allowArrayLike) {
        let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            let i = 0;
            let F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            let step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      let layouts = {
        _default: Object(utils["s" /* sanitizeComponent */])(layouts_default["a" /* default */]),
        _simple: Object(utils["s" /* sanitizeComponent */])(simple["a" /* default */]),
      };
      /* harmony default export */ let App = {
        render: function render(h, props) {
          let loadingEl = h("NuxtLoading", {
            ref: "loading",
          });
          let layoutEl = h(this.layout || "nuxt");
          let templateEl = h(
            "div",
            {
              domProps: {
                id: "__layout",
              },
              key: this.layoutName,
            },
            [layoutEl]
          );
          let transitionEl = h(
            "transition",
            {
              props: {
                name: "layout",
                mode: "out-in",
              },
              on: {
                beforeEnter: function beforeEnter(el) {
                  // Ensure to trigger scroll event after calling scrollBehavior
                  window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  });
                },
              },
            },
            [templateEl]
          );
          return h(
            "div",
            {
              domProps: {
                id: "__nuxt",
              },
            },
            [loadingEl, transitionEl]
          );
        },
        data: function data() {
          return {
            isOnline: true,
            layout: null,
            layoutName: "",
            nbFetching: 0,
          };
        },
        beforeCreate: function beforeCreate() {
          vue_runtime_esm["a" /* default */].util.defineReactive(this, "nuxt", this.$options.nuxt);
        },
        created: function created() {
          // Add this.$nuxt in child instances
          this.$root.$options.$nuxt = this;

          if (true) {
            // add to window so we can listen when ready
            window.$nuxt = this;
            this.refreshOnlineStatus(); // Setup the listeners

            window.addEventListener("online", this.refreshOnlineStatus);
            window.addEventListener("offline", this.refreshOnlineStatus);
          } // Add $nuxt.error()

          this.error = this.nuxt.error; // Add $nuxt.context

          this.context = this.$options.context;
        },
        mounted: function mounted() {
          let _this = this;

          return Object(asyncToGenerator["a" /* default */])(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _this.$loading = _this.$refs.loading;

                      if (!_this.isPreview) {
                        _context.next = 9;
                        break;
                      }

                      if (!(_this.$store && _this.$store._actions.nuxtServerInit)) {
                        _context.next = 6;
                        break;
                      }

                      _this.$loading.start();

                      _context.next = 6;
                      return _this.$store.dispatch("nuxtServerInit", _this.context);

                    case 6:
                      _context.next = 8;
                      return _this.refresh();

                    case 8:
                      _this.$loading.finish();

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )();
        },
        watch: {
          "nuxt.err": "errorChanged",
        },
        computed: {
          isOffline: function isOffline() {
            return !this.isOnline;
          },
          isFetching: function isFetching() {
            return this.nbFetching > 0;
          },
          isPreview: function isPreview() {
            return Boolean(this.$options.previewData);
          },
        },
        methods: {
          refreshOnlineStatus: function refreshOnlineStatus() {
            if (true) {
              if (typeof window.navigator.onLine === "undefined") {
                // If the browser doesn't support connection status reports
                // assume that we are online because most apps' only react
                // when they now that the connection has been interrupted
                this.isOnline = true;
              } else {
                this.isOnline = window.navigator.onLine;
              }
            }
          },
          refresh: function refresh() {
            let _this2 = this;

            return Object(asyncToGenerator["a" /* default */])(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
                let pages, promises;
                return regeneratorRuntime.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          pages = Object(utils["i" /* getMatchedComponentsInstances */])(_this2.$route);

                          if (pages.length) {
                            _context2.next = 3;
                            break;
                          }

                          return _context2.abrupt("return");

                        case 3:
                          _this2.$loading.start();

                          promises = pages.map(function (page) {
                            let p = []; // Old fetch

                            if (page.$options.fetch && page.$options.fetch.length) {
                              p.push(Object(utils["q" /* promisify */])(page.$options.fetch, _this2.context));
                            }

                            if (page.$fetch) {
                              p.push(page.$fetch());
                            } else {
                              // Get all component instance to call $fetch
                              let _iterator = _createForOfIteratorHelper(
                                  Object(utils["f" /* getChildrenComponentInstancesUsingFetch */])(page.$vnode.componentInstance)
                                ),
                                _step;

                              try {
                                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                  let component = _step.value;
                                  p.push(component.$fetch());
                                }
                              } catch (err) {
                                _iterator.e(err);
                              } finally {
                                _iterator.f();
                              }
                            }

                            if (page.$options.asyncData) {
                              p.push(
                                Object(utils["q" /* promisify */])(page.$options.asyncData, _this2.context).then(function (newData) {
                                  for (let key in newData) {
                                    vue_runtime_esm["a" /* default */].set(page.$data, key, newData[key]);
                                  }
                                })
                              );
                            }

                            return Promise.all(p);
                          });
                          _context2.prev = 5;
                          _context2.next = 8;
                          return Promise.all(promises);

                        case 8:
                          _context2.next = 15;
                          break;

                        case 10:
                          _context2.prev = 10;
                          _context2.t0 = _context2["catch"](5);

                          _this2.$loading.fail(_context2.t0);

                          Object(utils["l" /* globalHandleError */])(_context2.t0);

                          _this2.error(_context2.t0);

                        case 15:
                          _this2.$loading.finish();

                        case 16:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  null,
                  [[5, 10]]
                );
              })
            )();
          },
          errorChanged: function errorChanged() {
            if (this.nuxt.err) {
              if (this.$loading) {
                if (this.$loading.fail) {
                  this.$loading.fail(this.nuxt.err);
                }

                if (this.$loading.finish) {
                  this.$loading.finish();
                }
              }

              let errorLayout = (layouts_error["a" /* default */].options || layouts_error["a" /* default */]).layout;

              if (typeof errorLayout === "function") {
                errorLayout = errorLayout(this.context);
              }

              this.setLayout(errorLayout);
            }
          },
          setLayout: function setLayout(layout) {
            if (!layout || !layouts["_" + layout]) {
              layout = "default";
            }

            this.layoutName = layout;
            this.layout = layouts["_" + layout];
            return this.layout;
          },
          loadLayout: function loadLayout(layout) {
            if (!layout || !layouts["_" + layout]) {
              layout = "default";
            }

            return Promise.resolve(layouts["_" + layout]);
          },
          getRouterBase: function getRouterBase() {
            return Object(dist["h" /* withoutTrailingSlash */])(this.$router.options.base);
          },
          getRoutePath: function getRoutePath() {
            let route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
            let base = this.getRouterBase();
            return Object(dist["h" /* withoutTrailingSlash */])(
              Object(dist["g" /* withoutBase */])(Object(dist["e" /* parsePath */])(route).pathname, base)
            );
          },
          getStaticAssetsPath: function getStaticAssetsPath() {
            let route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
            let staticAssetsBase = window.__NUXT__.staticAssetsBase;
            return Object(utils["u" /* urlJoin */])(staticAssetsBase, this.getRoutePath(route));
          },
          fetchStaticManifest: function fetchStaticManifest() {
            let _this3 = this;

            return Object(asyncToGenerator["a" /* default */])(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        return _context3.abrupt(
                          "return",
                          window.__NUXT_IMPORT__(
                            "manifest.js",
                            Object(dist["d" /* normalizeURL */])(Object(utils["u" /* urlJoin */])(_this3.getStaticAssetsPath(), "manifest.js"))
                          )
                        );

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              })
            )();
          },
          setPagePayload: function setPagePayload(payload) {
            this._pagePayload = payload;
            this._fetchCounters = {};
          },
          fetchPayload: function fetchPayload(route, prefetch) {
            let _this4 = this;

            return Object(asyncToGenerator["a" /* default */])(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
                let path, manifest, src, payload;
                return regeneratorRuntime.wrap(
                  function _callee4$(_context4) {
                    while (1) {
                      switch ((_context4.prev = _context4.next)) {
                        case 0:
                          path = Object(dist["a" /* decode */])(_this4.getRoutePath(route));
                          _context4.next = 3;
                          return _this4.fetchStaticManifest();

                        case 3:
                          manifest = _context4.sent;

                          if (manifest.routes.includes(path)) {
                            _context4.next = 7;
                            break;
                          }

                          if (!prefetch) {
                            _this4.setPagePayload(false);
                          }

                          throw new Error("Route ".concat(path, " is not pre-rendered"));

                        case 7:
                          src = Object(utils["u" /* urlJoin */])(_this4.getStaticAssetsPath(route), "payload.js");
                          _context4.prev = 8;
                          _context4.next = 11;
                          return window.__NUXT_IMPORT__(path, Object(dist["d" /* normalizeURL */])(src));

                        case 11:
                          payload = _context4.sent;

                          if (!prefetch) {
                            _this4.setPagePayload(payload);
                          }

                          return _context4.abrupt("return", payload);

                        case 16:
                          _context4.prev = 16;
                          _context4.t0 = _context4["catch"](8);

                          if (!prefetch) {
                            _this4.setPagePayload(false);
                          }

                          throw _context4.t0;

                        case 20:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  },
                  _callee4,
                  null,
                  [[8, 16]]
                );
              })
            )();
          },
        },
        components: {
          NuxtLoading: nuxt_loading,
        },
      };
      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
      let es_string_split = __webpack_require__(123);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/store.js
      function store_createForOfIteratorHelper(o, allowArrayLike) {
        let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = store_unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            let i = 0;
            let F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            let step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function store_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return store_arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return store_arrayLikeToArray(o, minLen);
      }

      function store_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
      let VUEX_PROPERTIES = ["state", "getters", "actions", "mutations"];
      let store_store = {};

      (function updateModules() {
        // If store is an exported method = classic mode (deprecated)
        // Enforce store modules
        store_store.modules = store_store.modules || {};
        resolveStoreModules(__webpack_require__(335), "appState.js"); // If the environment supports hot reloading...
      })(); // createStore

      let createStore =
        store_store instanceof Function
          ? store_store
          : function () {
              return new vuex_esm["a" /* default */].Store(
                Object.assign(
                  {
                    strict: "production" !== "production",
                  },
                  store_store
                )
              );
            };

      function normalizeRoot(moduleData, filePath) {
        moduleData = moduleData.default || moduleData;

        if (moduleData.commit) {
          throw new Error("[nuxt] ".concat(filePath, " should export a method that returns a Vuex instance."));
        }

        if (typeof moduleData !== "function") {
          // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
          moduleData = Object.assign({}, moduleData);
        }

        return normalizeModule(moduleData, filePath);
      }

      function normalizeModule(moduleData, filePath) {
        if (moduleData.state && typeof moduleData.state !== "function") {
          console.warn("'state' should be a method that returns an object in ".concat(filePath));

          let _state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

          moduleData = Object.assign({}, moduleData, {
            state: function state() {
              return _state;
            },
          });
        }

        return moduleData;
      }

      function resolveStoreModules(moduleData, filename) {
        moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

        let namespace = filename.replace(/\.(js|mjs)$/, "");
        let namespaces = namespace.split("/");
        let moduleName = namespaces[namespaces.length - 1];
        let filePath = "store/".concat(filename);
        moduleData = moduleName === "state" ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

        if (VUEX_PROPERTIES.includes(moduleName)) {
          let property = moduleName;
          let propertyStoreModule = getStoreModule(store_store, namespaces, {
            isProperty: true,
          }); // Replace state since it's a function

          mergeProperty(propertyStoreModule, moduleData, property);
          return;
        } // If file is foo/index.js, it should be saved as foo

        let isIndexModule = moduleName === "index";

        if (isIndexModule) {
          namespaces.pop();
          moduleName = namespaces[namespaces.length - 1];
        }

        let storeModule = getStoreModule(store_store, namespaces);

        let _iterator = store_createForOfIteratorHelper(VUEX_PROPERTIES),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            let _property = _step.value;
            mergeProperty(storeModule, moduleData[_property], _property);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (moduleData.namespaced === false) {
          delete storeModule.namespaced;
        }
      }

      function normalizeState(moduleData, filePath) {
        if (typeof moduleData !== "function") {
          console.warn("".concat(filePath, " should export a method that returns an object"));
          let state = Object.assign({}, moduleData);
          return function () {
            return state;
          };
        }

        return normalizeModule(moduleData, filePath);
      }

      function getStoreModule(storeModule, namespaces) {
        let _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$isProperty = _ref.isProperty,
          isProperty = _ref$isProperty === void 0 ? false : _ref$isProperty;

        // If ./mutations.js
        if (!namespaces.length || (isProperty && namespaces.length === 1)) {
          return storeModule;
        }

        let namespace = namespaces.shift();
        storeModule.modules[namespace] = storeModule.modules[namespace] || {};
        storeModule.modules[namespace].namespaced = true;
        storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
        return getStoreModule(storeModule.modules[namespace], namespaces, {
          isProperty: isProperty,
        });
      }

      function mergeProperty(storeModule, moduleData, property) {
        if (!moduleData) {
          return;
        }

        if (property === "state") {
          storeModule.state = moduleData || storeModule.state;
        } else {
          storeModule[property] = Object.assign({}, storeModule[property], moduleData);
        }
      }
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/utils.js

      // nuxt/nuxt.js#8607
      function wrapFunctional(options) {
        if (!options || !options.functional) {
          return options;
        }

        let propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
        return {
          render: function render(h) {
            let attrs = {};
            let props = {};

            for (let key in this.$attrs) {
              if (propKeys.includes(key)) {
                props[key] = this.$attrs[key];
              } else {
                attrs[key] = this.$attrs[key];
              }
            }

            return h(
              options,
              {
                on: this.$listeners,
                attrs: attrs,
                props: props,
                scopedSlots: this.$scopedSlots,
              },
              this.$slots.default
            );
          },
        };
      }
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/plugin.js

      let components = {
        Banner: function Banner() {
          return __webpack_require__
            .e(/* import() | components/banner */ 3)
            .then(__webpack_require__.bind(null, 578))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Button: function Button() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 136))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Divider: function Divider() {
          return __webpack_require__
            .e(/* import() | components/divider */ 4)
            .then(__webpack_require__.bind(null, 389))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Footer: function Footer() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 128))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        FooterLegal: function FooterLegal() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 129))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Header: function Header() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 127))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Hero: function Hero() {
          return __webpack_require__
            .e(/* import() | components/hero */ 5)
            .then(__webpack_require__.bind(null, 349))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Icon: function Icon() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 44))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        Link: function Link() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 24))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        MarkdownContent: function MarkdownContent() {
          return __webpack_require__
            .e(/* import() | components/markdown-content */ 6)
            .then(__webpack_require__.bind(null, 351))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        MobileMenu: function MobileMenu() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 190))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        NewsletterForm: function NewsletterForm() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 130))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        SeoTags: function SeoTags() {
          return __webpack_require__
            .e(/* import() | components/seo-tags */ 7)
            .then(__webpack_require__.bind(null, 347))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        SocialLinks: function SocialLinks() {
          return Promise.resolve(/* import() */)
            .then(__webpack_require__.bind(null, 66))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        StarfieldHero: function StarfieldHero() {
          return __webpack_require__
            .e(/* import() | components/starfield-hero */ 0)
            .then(__webpack_require__.bind(null, 444))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
        VideoModal: function VideoModal() {
          return __webpack_require__
            .e(/* import() | components/video-modal */ 8)
            .then(__webpack_require__.bind(null, 388))
            .then(function (c) {
              return wrapFunctional(c.default || c);
            });
        },
      };

      for (let plugin_name in components) {
        vue_runtime_esm["a" /* default */].component(plugin_name, components[plugin_name]);
        vue_runtime_esm["a" /* default */].component("Lazy" + plugin_name, components[plugin_name]);
      }
      // EXTERNAL MODULE: ./node_modules/json2mq/index.js
      let json2mq = __webpack_require__(218);
      let json2mq_default = /*#__PURE__*/ __webpack_require__.n(json2mq);

      // CONCATENATED MODULE: ./node_modules/vue-mq/dist/vue-mq.es.js

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

          return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function convertBreakpointsToMediaQueries(breakpoints) {
        let keys = Object.keys(breakpoints);
        let values = keys.map(function (key) {
          return breakpoints[key];
        });
        let breakpointValues = [0].concat(_toConsumableArray(values.slice(0, -1)));
        let mediaQueries = breakpointValues.reduce(function (sum, value, index) {
          let options = Object.assign(
            {
              minWidth: value,
            },
            index < keys.length - 1
              ? {
                  maxWidth: breakpointValues[index + 1] - 1,
                }
              : {}
          );
          let mediaQuery = json2mq_default()(options);
          return Object.assign(sum, _defineProperty({}, keys[index], mediaQuery));
        }, {});
        return mediaQueries;
      }
      function transformValuesFromBreakpoints(breakpoints, values, currentBreakpoint) {
        let findClosestValue = function findClosestValue(currentBreakpoint) {
          if (values[currentBreakpoint] !== undefined) return values[currentBreakpoint];
          let index = breakpoints.findIndex(function (b) {
            return b === currentBreakpoint;
          });
          let newBreakpoint = index !== -1 || index !== 0 ? breakpoints[index - 1] : null;
          if (!newBreakpoint) return values[index];
          return values[newBreakpoint] !== undefined ? values[newBreakpoint] : findClosestValue(newBreakpoint);
        };

        return findClosestValue(currentBreakpoint);
      }
      function selectBreakpoints(breakpoints, currentBreakpoint) {
        let index = breakpoints.findIndex(function (b) {
          return b === currentBreakpoint;
        });
        return breakpoints.slice(index);
      }
      function subscribeToMediaQuery(mediaQuery, enter) {
        let mql = window.matchMedia(mediaQuery);

        let cb = function cb(_ref) {
          let matches = _ref.matches;
          if (matches) enter();
        };

        mql.addListener(cb); //subscribing

        cb(mql); //initial trigger
      }

      function isArray(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      }

      // USAGE
      // mq-layout(mq="lg")
      //   p I’m lg
      let vue_mq_es_component = {
        props: {
          mq: {
            required: true,
            type: [String, Array],
          },
        },
        computed: {
          plusModifier: function plusModifier() {
            return !isArray(this.mq) && this.mq.slice(-1) === "+";
          },
          activeBreakpoints: function activeBreakpoints() {
            let breakpoints = Object.keys(this.$mqAvailableBreakpoints);
            let mq = this.plusModifier ? this.mq.slice(0, -1) : isArray(this.mq) ? this.mq : [this.mq];
            return this.plusModifier ? selectBreakpoints(breakpoints, mq) : mq;
          },
        },
        render: function render(h, props) {
          let shouldRenderChildren = this.activeBreakpoints.includes(this.$mq);
          return shouldRenderChildren ? h("div", this.$slots.default) : h();
        },
      };

      let DEFAULT_BREAKPOINT = {
        sm: 450,
        md: 1250,
        lg: Infinity,
      };

      let install = function install(Vue) {
        let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$breakpoints = _ref.breakpoints,
          breakpoints = _ref$breakpoints === void 0 ? DEFAULT_BREAKPOINT : _ref$breakpoints,
          _ref$defaultBreakpoin = _ref.defaultBreakpoint,
          defaultBreakpoint = _ref$defaultBreakpoin === void 0 ? "sm" : _ref$defaultBreakpoin;

        let hasSetupListeners = false; // Init reactive component

        let reactorComponent = new Vue({
          data: function data() {
            return {
              currentBreakpoint: defaultBreakpoint,
            };
          },
        });
        Vue.filter("mq", function (currentBreakpoint, values) {
          return transformValuesFromBreakpoints(Object.keys(breakpoints), values, currentBreakpoint);
        });
        Vue.mixin({
          computed: {
            $mq: function $mq() {
              return reactorComponent.currentBreakpoint;
            },
          },
          created: function created() {
            if (this.$isServer) reactorComponent.currentBreakpoint = defaultBreakpoint;
          },
          mounted: function mounted() {
            if (!hasSetupListeners) {
              let mediaQueries = convertBreakpointsToMediaQueries(breakpoints); // setup listeners

              let _loop = function _loop(key) {
                let mediaQuery = mediaQueries[key];

                let enter = function enter() {
                  reactorComponent.currentBreakpoint = key;
                };

                subscribeToMediaQuery(mediaQuery, enter);
              };

              for (let key in mediaQueries) {
                _loop(key);
              }

              hasSetupListeners = true;
            }
          },
        });
        Vue.prototype.$mqAvailableBreakpoints = breakpoints;
        Vue.component("MqLayout", vue_mq_es_component);
      };

      let vue_mq_es_index = {
        install: install,
      };

      /* harmony default export */ let vue_mq_es = vue_mq_es_index;

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/nuxt-mq.js

      vue_runtime_esm["a" /* default */].use(vue_mq_es, {
        breakpoints: {
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1440,
        },
      });
      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
      let toConsumableArray = __webpack_require__(57);

      // EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
      let esm_typeof = __webpack_require__(38);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
      let es_array_find = __webpack_require__(225);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
      let es_string_trim = __webpack_require__(176);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
      let es_array_join = __webpack_require__(98);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
      let es_string_starts_with = __webpack_require__(91);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
      let es_array_concat = __webpack_require__(9);

      // EXTERNAL MODULE: ./node_modules/property-information/index.js
      let property_information = __webpack_require__(134);
      let property_information_default = /*#__PURE__*/ __webpack_require__.n(property_information);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/content/nuxt-content.js

      function nuxt_content_ownKeys(object, enumerableOnly) {
        let keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function nuxt_content_objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            nuxt_content_ownKeys(Object(source), true).forEach(function (key) {
              Object(defineProperty["a" /* default */])(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            nuxt_content_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }

      function nuxt_content_createForOfIteratorHelper(o, allowArrayLike) {
        let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = nuxt_content_unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            let i = 0;
            let F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            let step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function nuxt_content_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return nuxt_content_arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nuxt_content_arrayLikeToArray(o, minLen);
      }

      function nuxt_content_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      let rootKeys = ["class-name", "class", "style"];
      let rxOn = /^@|^v-on:/;
      let rxBind = /^:|^v-bind:/;
      let rxModel = /^v-model/;
      let nativeInputs = ["select", "textarea", "input"];

      function evalInContext(code, context) {
        return new Function("with(this) { return (" + code + ") }").call(context);
      }

      function propsToData(node, doc) {
        let tag = node.tag,
          props = node.props;
        return Object.keys(props).reduce(
          function (data, key) {
            let k = key.replace(/.*:/, "");
            let obj = rootKeys.includes(k) ? data : data.attrs;
            let value = props[key];

            let _info$find = property_information_default.a.find(property_information_default.a.html, key),
              attribute = _info$find.attribute;

            let native = nativeInputs.includes(tag);

            if (rxModel.test(key) && value in doc && !native) {
              let mods = key
                .replace(rxModel, "")
                .split(".")
                .filter(function (d) {
                  return d;
                })
                .reduce(function (d, k) {
                  return (d[k] = true), d;
                }, {}); // As of yet we don't resolve custom v-model field/event names from components

              let field = "value";
              let event = mods.lazy ? "change" : "input";
              let processor = mods.number
                ? function (d) {
                    return +d;
                  }
                : mods.trim
                ? function (d) {
                    return d.trim();
                  }
                : function (d) {
                    return d;
                  };
              obj[field] = evalInContext(value, doc);
              data.on = data.on || {};

              data.on[event] = function (e) {
                return (doc[value] = processor(e));
              };
            } else if (key === "v-bind") {
              let val = value in doc ? doc[value] : evalInContext(value, doc);
              obj = Object.assign(obj, val);
            } else if (rxOn.test(key)) {
              key = key.replace(rxOn, "");
              data.on = data.on || {};
              data.on[key] = evalInContext(value, doc);
            } else if (rxBind.test(key)) {
              key = key.replace(rxBind, "");
              obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
            } else if (Array.isArray(value)) {
              obj[attribute] = value.join(" ");
            } else {
              obj[attribute] = value;
            }

            return data;
          },
          {
            attrs: {},
          }
        );
      }
      /**
       * Create the scoped slots from `node` template children. Templates for default
       * slots are processed as regular children in `processNode`.
       */

      function slotsToData(node, h, doc) {
        let data = {};
        let children = node.children || [];
        children.forEach(function (child) {
          // Regular children and default templates are processed inside `processNode`.
          if (!isTemplate(child) || isDefaultTemplate(child)) {
            return;
          } // Non-default templates are converted into slots.

          data.scopedSlots = data.scopedSlots || {};
          let template = child;
          let name = getSlotName(template);
          let vDomTree = template.content.map(function (tmplNode) {
            return processNode(tmplNode, h, doc);
          });

          data.scopedSlots[name] = function () {
            return vDomTree;
          };
        });
        return data;
      }

      function processNode(node, h, doc) {
        /**
         * Return raw value as it is
         */
        if (node.type === "text") {
          return node.value;
        }

        let slotData = slotsToData(node || {}, h, doc);
        let propData = propsToData(node || {}, doc);
        let data = Object.assign({}, slotData, propData);
        /**
         * Process child nodes, flat-mapping templates pointing to default slots.
         */

        let children = [];

        let _iterator = nuxt_content_createForOfIteratorHelper(node.children),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            let child = _step.value;

            // Template nodes pointing to non-default slots are processed inside `slotsToData`.
            if (isTemplate(child) && !isDefaultTemplate(child)) {
              continue;
            }

            let processQueue = isDefaultTemplate(child) ? child.content : [child];
            children.push.apply(
              children,
              Object(toConsumableArray["a" /* default */])(
                processQueue.map(function (node) {
                  return processNode(node, h, doc);
                })
              )
            );
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return h(node.tag, data, children);
      }

      let DEFAULT_SLOT = "default";

      function isDefaultTemplate(node) {
        return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
      }

      function isTemplate(node) {
        return node.tag === "template";
      }

      function getSlotName(node) {
        let name = "";

        for (let _i = 0, _Object$keys = Object.keys(node.props); _i < _Object$keys.length; _i++) {
          let propName = _Object$keys[_i];

          if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
            continue;
          }

          name = propName.split(/[:#]/, 2)[1];
          break;
        }

        return name || DEFAULT_SLOT;
      }

      /* harmony default export */ let nuxt_content = {
        name: "NuxtContent",
        functional: true,
        props: {
          document: {
            required: true,
          },
        },
        render: function render(h, _ref) {
          let data = _ref.data,
            props = _ref.props;
          let document = props.document;

          let _ref2 = document || {},
            body = _ref2.body;

          if (!body || !body.children || !Array.isArray(body.children)) {
            return;
          }

          let classes = [];

          if (Array.isArray(data.class)) {
            classes = data.class;
          } else if (Object(esm_typeof["a" /* default */])(data.class) === "object") {
            let keys = Object.keys(data.class);
            classes = keys.filter(function (key) {
              return data.class[key];
            });
          } else {
            classes = [data.class];
          }

          data.class = classes.concat("nuxt-content");
          data.props = Object.assign(nuxt_content_objectSpread({}, body.props), data.props);
          return h(
            "div",
            data,
            body.children.map(function (child) {
              return processNode(child, h, document);
            })
          );
        },
      };
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/content/plugin.client.js

      let loadContent = function loadContent() {
        return __webpack_require__.e(/* import() | content/plugin.js */ 21).then(__webpack_require__.bind(null, 571));
      };

      vue_runtime_esm["a" /* default */].component(nuxt_content.name, nuxt_content);
      /* harmony default export */ let plugin_client = function (ctx, inject) {
        let $$content = null;

        let _ref = ctx.$config ? ctx.$config.content : ctx.nuxtState.content,
          dbHash = _ref.dbHash;

        let $content = function $content() {
          for (var _len = arguments.length, contentArgs = new Array(_len), _key = 0; _key < _len; _key++) {
            contentArgs[_key] = arguments[_key];
          }

          if ($$content) {
            return $$content.apply(void 0, contentArgs);
          }

          let keys = ["only", "without", "sortBy", "limit", "skip", "where", "search", "surround"];
          let mock = {};
          let toCall = [];

          let _loop = function _loop() {
            let key = _keys[_i];

            mock[key] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              toCall.push({
                key: key,
                args: args,
              });
              return mock;
            };
          };

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            _loop();
          }

          mock.fetch = /*#__PURE__*/ Object(asyncToGenerator["a" /* default */])(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
              let database, query;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return fetch("/ipfs/hash/_nuxt/content/db-".concat(dbHash, ".json")).then(function (res) {
                        return res.json();
                      });

                    case 2:
                      database = _context.sent;
                      _context.next = 5;
                      return loadContent();

                    case 5:
                      $$content = _context.sent.default(database);
                      query = $$content.apply(void 0, contentArgs);
                      toCall.forEach(function (_ref3) {
                        let _query;

                        let key = _ref3.key,
                          args = _ref3.args;
                        query = (_query = query)[key].apply(_query, Object(toConsumableArray["a" /* default */])(args));
                      });
                      return _context.abrupt("return", query.fetch());

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          return mock;
        };

        inject("content", $content);
        ctx.$content = $content;
      };
      // EXTERNAL MODULE: ./node_modules/.cache/nuxt/empty.js
      let empty = __webpack_require__(219);
      let empty_default = /*#__PURE__*/ __webpack_require__.n(empty);

      // EXTERNAL MODULE: ./plugins/countly-analytics.js
      let countly_analytics = __webpack_require__(135);

      // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
      let es_string_match = __webpack_require__(124);

      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/nuxt-module-ipfs/methods.js

      /*
       *
       * 🔌 [Plugin | NuxtPluginIpfs] Methods
       *
       */
      console.log("\uD83D\uDD0C [Plugin | NuxtPluginIpfs] Methods"); // /////////////////////////////////////////////////////////////////// Functions
      // -----------------------------------------------------------------------------
      // ------------------------------------------------------------------ relativity

      let Relativity = function Relativity(path) {
        if (true) {
          if (!path) {
            return "";
          }

          let ipfsMatch = window.location.pathname.match(/^(\/(?:ipfs|ipns)\/[^/]+)/);
          return ipfsMatch ? ipfsMatch[0] + path : path;
        }

        return path;
      }; // ///////////////////////////////////////////////////////////// Export & Inject
      // -----------------------------------------------------------------------------

      /* harmony default export */ let methods = function (ctx, inject) {
        inject("relativity", Relativity);
      };
      // CONCATENATED MODULE: ./node_modules/.cache/nuxt/index.js

      function nuxt_ownKeys(object, enumerableOnly) {
        let keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          let symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function nuxt_objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            nuxt_ownKeys(Object(source), true).forEach(function (key) {
              Object(defineProperty["a" /* default */])(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            nuxt_ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }

      /* Plugins */

      // Source: ./components/plugin.js (mode: 'all')

      // Source: ./nuxt-mq.js (mode: 'all')

      // Source: ./content/plugin.client.js (mode: 'client')

      // Source: ./content/plugin.server.js (mode: 'server')

      // Source: ../../../plugins/countly-analytics (mode: 'all')

      // Source: ./nuxt-module-ipfs/methods.js (mode: 'all')
      // Component: <ClientOnly>

      vue_runtime_esm["a" /* default */].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

      vue_runtime_esm["a" /* default */].component(
        vue_no_ssr_common_default.a.name,
        nuxt_objectSpread(
          nuxt_objectSpread({}, vue_no_ssr_common_default.a),
          {},
          {
            render: function render(h, ctx) {
              if (true && !vue_no_ssr_common_default.a._warned) {
                vue_no_ssr_common_default.a._warned = true;
                console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead");
              }

              return vue_no_ssr_common_default.a.render(h, ctx);
            },
          }
        )
      ); // Component: <NuxtChild>

      vue_runtime_esm["a" /* default */].component(nuxt_child.name, nuxt_child);
      vue_runtime_esm["a" /* default */].component("NChild", nuxt_child); // Component NuxtLink is imported in server.js or client.js
      // Component: <Nuxt>

      vue_runtime_esm["a" /* default */].component(components_nuxt.name, components_nuxt);
      Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, "$nuxt", {
        get: function get() {
          let globalNuxt = this.$root.$options.$nuxt;

          if (true && !globalNuxt && typeof window !== "undefined") {
            return window.$nuxt;
          }

          return globalNuxt;
        },
        configurable: true,
      });
      vue_runtime_esm["a" /* default */].use(vue_meta_esm_browser["a" /* default */], {
        keyName: "head",
        attribute: "data-n-head",
        ssrAttribute: "data-n-head-ssr",
        tagIDKeyName: "hid",
      });
      let defaultTransition = {
        name: "page",
        mode: "out-in",
        appear: false,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to",
      };
      let originalRegisterModule = vuex_esm["a" /* default */].Store.prototype.registerModule;

      function registerModule(path, rawModule) {
        let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        let preserveState =
          true &&
          (Array.isArray(path)
            ? !!path.reduce(function (namespacedState, path) {
                return namespacedState && namespacedState[path];
              }, this.state)
            : path in this.state);
        return originalRegisterModule.call(
          this,
          path,
          rawModule,
          nuxt_objectSpread(
            {
              preserveState: preserveState,
            },
            options
          )
        );
      }

      function createApp(_x) {
        return _createApp.apply(this, arguments);
      }

      function _createApp() {
        _createApp = Object(asyncToGenerator["a" /* default */])(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(ssrContext) {
            let config,
              router,
              store,
              app,
              next,
              route,
              path,
              inject,
              _args2 = arguments;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    inject = function _inject(key, value) {
                      if (!key) {
                        throw new Error("inject(key, value) has no key provided");
                      }

                      if (value === undefined) {
                        throw new Error("inject('".concat(key, "', value) has no value provided"));
                      }

                      key = "$" + key; // Add into app

                      app[key] = value; // Add into context

                      if (!app.context[key]) {
                        app.context[key] = value;
                      } // Add into store

                      store[key] = app[key]; // Check if plugin not already installed

                      let installKey = "__nuxt_" + key + "_installed__";

                      if (vue_runtime_esm["a" /* default */][installKey]) {
                        return;
                      }

                      vue_runtime_esm["a" /* default */][installKey] = true; // Call Vue.use() to install the plugin into vm

                      vue_runtime_esm["a" /* default */].use(function () {
                        if (!Object.prototype.hasOwnProperty.call(vue_runtime_esm["a" /* default */].prototype, key)) {
                          Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, key, {
                            get: function get() {
                              return this.$root.$options[key];
                            },
                          });
                        }
                      });
                    };

                    config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                    _context2.next = 4;
                    return createRouter(ssrContext, config);

                  case 4:
                    router = _context2.sent;
                    store = createStore(ssrContext); // Add this.$router into store actions/mutations

                    store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

                    store.registerModule = registerModule; // Create Root instance
                    // here we inject the router and store to all child components,
                    // making them available everywhere as `this.$router` and `this.$store`.

                    app = nuxt_objectSpread(
                      {
                        head: {
                          title: "IPFS Powers the Distributed Web",
                          htmlAttrs: {
                            lang: "en",
                          },
                          meta: [
                            {
                              charset: "utf-8",
                            },
                            {
                              name: "viewport",
                              content: "width=device-width, initial-scale=1",
                            },
                          ],
                          link: [
                            {
                              rel: "icon",
                              type: "image/x-icon",
                              href: "/favicon.ico",
                            },
                          ],
                          style: [],
                          script: [],
                        },
                        store: store,
                        router: router,
                        nuxt: {
                          defaultTransition: defaultTransition,
                          transitions: [defaultTransition],
                          setTransitions: function setTransitions(transitions) {
                            if (!Array.isArray(transitions)) {
                              transitions = [transitions];
                            }

                            transitions = transitions.map(function (transition) {
                              if (!transition) {
                                transition = defaultTransition;
                              } else if (typeof transition === "string") {
                                transition = Object.assign({}, defaultTransition, {
                                  name: transition,
                                });
                              } else {
                                transition = Object.assign({}, defaultTransition, transition);
                              }

                              return transition;
                            });
                            this.$options.nuxt.transitions = transitions;
                            return transitions;
                          },
                          err: null,
                          dateErr: null,
                          error: function error(err) {
                            err = err || null;
                            app.context._errored = Boolean(err);
                            err = err ? Object(utils["p" /* normalizeError */])(err) : null;
                            let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

                            if (this) {
                              nuxt = this.nuxt || this.$options.nuxt;
                            }

                            nuxt.dateErr = Date.now();
                            nuxt.err = err; // Used in src/server.js

                            if (ssrContext) {
                              ssrContext.nuxt.error = err;
                            }

                            return err;
                          },
                        },
                      },
                      App
                    ); // Make app available into store via this.app

                    store.app = app;
                    next = ssrContext
                      ? ssrContext.next
                      : function (location) {
                          return app.router.push(location);
                        }; // Resolve route

                    if (ssrContext) {
                      route = router.resolve(ssrContext.url).route;
                    } else {
                      path = Object(utils["g" /* getLocation */])(router.options.base, router.options.mode);
                      route = router.resolve(path).route;
                    } // Set context to app.context

                    _context2.next = 14;
                    return Object(utils["t" /* setContext */])(app, {
                      store: store,
                      route: route,
                      next: next,
                      error: app.nuxt.error.bind(app),
                      payload: ssrContext ? ssrContext.payload : undefined,
                      req: ssrContext ? ssrContext.req : undefined,
                      res: ssrContext ? ssrContext.res : undefined,
                      beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
                      ssrContext: ssrContext,
                    });

                  case 14:
                    // Inject runtime config as $config
                    inject("config", config);

                    if (true) {
                      // Replace store state before plugins execution
                      if (window.__NUXT__ && window.__NUXT__.state) {
                        store.replaceState(window.__NUXT__.state);
                      }
                    } // Add enablePreview(previewData = {}) in context for plugins

                    if (true) {
                      app.context.enablePreview = function () {
                        let previewData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        app.previewData = Object.assign({}, previewData);
                        inject("preview", previewData);
                      };
                    } // Plugin execution

                    if (
                      !(
                        typeof (
                          /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined
                        ) === "function"
                      )
                    ) {
                      _context2.next = 20;
                      break;
                    }

                    _context2.next = 20;
                    return /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(
                      app.context,
                      inject
                    );

                  case 20:
                    if (
                      !(
                        typeof (
                          /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/nuxt-mq.js" (known exports: , known reexports: ) */ undefined
                        ) === "function"
                      )
                    ) {
                      _context2.next = 23;
                      break;
                    }

                    _context2.next = 23;
                    return /* Cannot get final name for export "default" in "./node_modules/.cache/nuxt/nuxt-mq.js" (known exports: , known reexports: ) */ undefined(
                      app.context,
                      inject
                    );

                  case 23:
                    if (!(true && typeof plugin_client === "function")) {
                      _context2.next = 26;
                      break;
                    }

                    _context2.next = 26;
                    return plugin_client(app.context, inject);

                  case 26:
                    if (true) {
                      _context2.next = 29;
                      break;
                    }

                    _context2.next = 29;
                    return empty_default()(app.context, inject);

                  case 29:
                    if (!(typeof countly_analytics["a" /* default */] === "function")) {
                      _context2.next = 32;
                      break;
                    }

                    _context2.next = 32;
                    return Object(countly_analytics["a" /* default */])(app.context, inject);

                  case 32:
                    if (!(typeof methods === "function")) {
                      _context2.next = 35;
                      break;
                    }

                    _context2.next = 35;
                    return methods(app.context, inject);

                  case 35:
                    // Lock enablePreview in context
                    if (true) {
                      app.context.enablePreview = function () {
                        console.warn("You cannot call enablePreview() outside a plugin.");
                      };
                    } // Wait for async component to be resolved first

                    _context2.next = 38;
                    return new Promise(function (resolve, reject) {
                      router.push(app.context.route.fullPath, resolve, function (err) {
                        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
                        if (!err._isRouter) return reject(err);
                        if (
                          err.type !== 2
                          /* NavigationFailureType.redirected */
                        )
                          /* NavigationFailureType.redirected */
                          return resolve(); // navigated to a different route in router guard

                        // navigated to a different route in router guard
                        var unregister = router.afterEach(
                          /*#__PURE__*/ (function () {
                            let _ref = Object(asyncToGenerator["a" /* default */])(
                              /*#__PURE__*/ regeneratorRuntime.mark(function _callee(to, from) {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch ((_context.prev = _context.next)) {
                                      case 0:
                                        if (false) {
                                        }

                                        _context.next = 3;
                                        return Object(utils["k" /* getRouteData */])(to);

                                      case 3:
                                        app.context.route = _context.sent;
                                        app.context.params = to.params || {};
                                        app.context.query = to.query || {};
                                        unregister();
                                        resolve();

                                      case 8:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee);
                              })
                            );

                            return function (_x2, _x3) {
                              return _ref.apply(this, arguments);
                            };
                          })()
                        );
                      });
                    });

                  case 38:
                    return _context2.abrupt("return", {
                      store: store,
                      app: app,
                      router: router,
                    });

                  case 39:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
        return _createApp.apply(this, arguments);
      }

      /***/
    },

    /***/ 65: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let normalize = __webpack_require__(126);
      let Schema = __webpack_require__(181);
      let DefinedInfo = __webpack_require__(183);

      module.exports = create;

      function create(definition) {
        let space = definition.space;
        let mustUseProperty = definition.mustUseProperty || [];
        let attributes = definition.attributes || {};
        let props = definition.properties;
        let transform = definition.transform;
        let property = {};
        let normal = {};
        let prop;
        let info;

        for (prop in props) {
          info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space);

          if (mustUseProperty.indexOf(prop) !== -1) {
            info.mustUseProperty = true;
          }

          property[prop] = info;

          normal[normalize(prop)] = prop;
          normal[normalize(info.attribute)] = prop;
        }

        return new Schema(property, normal, space);
      }

      /***/
    },

    /***/ 67: /***/ function (module, exports, __webpack_require__) {
      "use strict";
      /*!
       * vue-no-ssr v1.1.1
       * (c) 2018-present egoist <0x142857@gmail.com>
       * Released under the MIT License.
       */

      let index = {
        name: "NoSsr",
        functional: true,
        props: {
          placeholder: String,
          placeholderTag: {
            type: String,
            default: "div",
          },
        },
        render: function render(h, ref) {
          let parent = ref.parent;
          let slots = ref.slots;
          let props = ref.props;

          let ref$1 = slots();
          let defaultSlot = ref$1.default;
          if (defaultSlot === void 0) defaultSlot = [];
          let placeholderSlot = ref$1.placeholder;

          if (parent._isMounted) {
            return defaultSlot;
          }

          parent.$once("hook:mounted", function () {
            parent.$forceUpdate();
          });

          if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
            return h(
              props.placeholderTag,
              {
                class: ["no-ssr-placeholder"],
              },
              props.placeholder || placeholderSlot
            );
          }

          // Return a placeholder element for each child in the default slot
          // Or if no children return a single placeholder
          return defaultSlot.length > 0
            ? defaultSlot.map(function () {
                return h(false);
              })
            : h(false);
        },
      };

      module.exports = index;

      /***/
    },

    /***/ 92: /***/ function (module, exports, __webpack_require__) {
      "use strict";

      let powers = 0;

      exports.boolean = increment();
      exports.booleanish = increment();
      exports.overloadedBoolean = increment();
      exports.number = increment();
      exports.spaceSeparated = increment();
      exports.commaSeparated = increment();
      exports.commaOrSpaceSeparated = increment();

      function increment() {
        return Math.pow(2, ++powers);
      }

      /***/
    },

    /***/ 94: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
      /* harmony import */ let core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
      /* harmony import */ let core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
      /* harmony import */ let core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
      /* harmony import */ let core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
      /* harmony import */ let core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
      /* harmony import */ let core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
      /* harmony import */ let core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__
      );
      /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
      /* harmony import */ let core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
      /* harmony import */ let core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__
      );
      /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
      /* harmony import */ let core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__
      );
      /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);
      /* harmony import */ let core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__
      );
      /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
      /* harmony import */ let core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__
      );
      /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51);
      /* harmony import */ let core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__
      );
      /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54);
      /* harmony import */ let core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
        core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__
      );
      /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36);
      /* harmony import */ let core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default =
        /*#__PURE__*/ __webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */ let vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
      function _createForOfIteratorHelper(o, allowArrayLike) {
        let it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            let i = 0;
            let F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        let normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            let step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        let n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      let requestIdleCallback =
        window.requestIdleCallback ||
        function (cb) {
          let start = Date.now();
          return setTimeout(function () {
            cb({
              didTimeout: false,
              timeRemaining: function timeRemaining() {
                return Math.max(0, 50 - (Date.now() - start));
              },
            });
          }, 1);
        };

      let cancelIdleCallback =
        window.cancelIdleCallback ||
        function (id) {
          clearTimeout(id);
        };

      let observer =
        window.IntersectionObserver &&
        new window.IntersectionObserver(function (entries) {
          entries.forEach(function (_ref) {
            let intersectionRatio = _ref.intersectionRatio,
              link = _ref.target;

            if (intersectionRatio <= 0 || !link.__prefetch) {
              return;
            }

            link.__prefetch();
          });
        });
      /* harmony default export */ __webpack_exports__["a"] = {
        name: "NuxtLink",
        extends: vue__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"].component("RouterLink"),
        props: {
          prefetch: {
            type: Boolean,
            default: true,
          },
          noPrefetch: {
            type: Boolean,
            default: false,
          },
        },
        mounted: function mounted() {
          if (this.prefetch && !this.noPrefetch) {
            this.handleId = requestIdleCallback(this.observe, {
              timeout: 2e3,
            });
          }
        },
        beforeDestroy: function beforeDestroy() {
          cancelIdleCallback(this.handleId);

          if (this.__observed) {
            observer.unobserve(this.$el);
            delete this.$el.__prefetch;
          }
        },
        methods: {
          observe: function observe() {
            // If no IntersectionObserver, avoid prefetching
            if (!observer) {
              return;
            } // Add to observer

            if (this.shouldPrefetch()) {
              this.$el.__prefetch = this.prefetchLink.bind(this);
              observer.observe(this.$el);
              this.__observed = true;
            }
          },
          shouldPrefetch: function shouldPrefetch() {
            let ref = this.$router.resolve(this.to, this.$route, this.append);
            let Components = ref.resolved.matched.map(function (r) {
              return r.components.default;
            });
            return Components.filter(function (Component) {
              return ref.href || (typeof Component === "function" && !Component.options && !Component.__prefetched);
            }).length;
          },
          canPrefetch: function canPrefetch() {
            let conn = navigator.connection;
            let hasBadConnection = this.$nuxt.isOffline || (conn && ((conn.effectiveType || "").includes("2g") || conn.saveData));
            return !hasBadConnection;
          },
          getPrefetchComponents: function getPrefetchComponents() {
            let ref = this.$router.resolve(this.to, this.$route, this.append);
            let Components = ref.resolved.matched.map(function (r) {
              return r.components.default;
            });
            return Components.filter(function (Component) {
              return typeof Component === "function" && !Component.options && !Component.__prefetched;
            });
          },
          prefetchLink: function prefetchLink() {
            if (!this.canPrefetch()) {
              return;
            } // Stop observing this link (in case of internet connection changes)

            observer.unobserve(this.$el);
            let Components = this.getPrefetchComponents();

            let _iterator = _createForOfIteratorHelper(Components),
              _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                let Component = _step.value;
                let componentOrPromise = Component();

                if (componentOrPromise instanceof Promise) {
                  componentOrPromise.catch(function () {});
                }

                Component.__prefetched = true;
              } // Preload the data only if not in preview mode
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (!this.$root.isPreview) {
              let _this$$router$resolve = this.$router.resolve(this.to, this.$route, this.append),
                href = _this$$router$resolve.href;

              if (this.$nuxt) this.$nuxt.fetchPayload(href, true).catch(function () {});
            }
          },
        },
      };

      /***/
    },
  },
]);
