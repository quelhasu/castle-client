webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/material-table.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_6__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






console.log(_config_config__WEBPACK_IMPORTED_MODULE_5___default.a.api_url);

var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p".concat(props.id),
    href: "/post?title=".concat(props.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, props.title)));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hotels"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    columns: [{
      title: "Hotel name",
      field: "hotel_name"
    }, {
      title: "Restaurant name",
      field: "restaurant_name"
    }, {
      title: "Location",
      field: "location"
    }, {
      title: "Price",
      field: "price",
      type: "numeric"
    }, {
      title: "Michelin rating",
      field: "michelin_rating",
      render: function render(rowData) {
        var rate = rowData.michelin_rating;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            height: "25px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png",
          style: {
            maxWidth: "100%",
            maxHeight: "100%",
            padding: "10px",
            objectFit: "contain",
            display: rate >= 1 ? "inline" : "none"
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png",
          style: {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: rate > 1 ? "inline" : "none"
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Etoile_Michelin-1.svg/938px-Etoile_Michelin-1.svg.png",
          style: {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: rate > 2 ? "inline" : "none"
          }
        }));
      } // {
      //   title: "Doğum Yeri",
      //   field: "birthCity",
      //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      // }

    }],
    data: props.hotels.map(function (el) {
      return {
        hotel_name: el.name,
        restaurant_name: el.restaurant.name,
        location: el.location.postal,
        michelin_rating: el.restaurant.michelin_rating,
        price: el.from_price,
        hotel_url: el.link,
        restaurant_url: el.restaurant.link
      };
    }),
    title: "Hotels & Restaurants",
    actions: [function (rowData) {
      return {
        icon: "hotel",
        tooltip: "Go hotel webpage",
        disabled: rowData.hotel_url == null,
        onClick: function onClick(event, rowData) {
          window.open(rowData.hotel_url, "_blank");
        }
      };
    }, function (rowData) {
      return {
        icon: "restaurant",
        tooltip: "Go restaurant webpage",
        disabled: rowData.restaurant_url == null,
        onClick: function onClick(event, rowData) {
          window.open(rowData.restaurant_url, "_blank");
        }
      };
    }, {
      icon: "navigate_next",
      tooltip: "Show details",
      onClick: function onClick(event, rowData) {
        alert("You clicked user " + rowData.name);
      },
      iconProps: {
        style: {
          fontSize: 30 // color: 'green',

        }
      }
    }],
    options: {
      pageSize: 10,
      actionsColumnIndex: -1
    }
  }));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_5___default.a.api_url, "/hotel/france"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            hotels: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index); // export default () => (
//   <Layout>
//     <h1>Castle</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.eb15c008c27118d36290.hot-update.js.map