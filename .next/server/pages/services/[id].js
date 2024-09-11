"use strict";
(() => {
var exports = {};
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 4897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_Portfolio_details_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5112);


const ServicePage = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { id  } = router.query;
    // Client-side redirection handling
    // This will be handled in `getServerSideProps`, but you can also handle it here if needed
    return null;
};
async function getServerSideProps(context) {
    const { id  } = context.query;
    const service = _data_Portfolio_details_json__WEBPACK_IMPORTED_MODULE_1__.find((service)=>service.id === id);
    if (!service) {
        // Redirect to 404 page if service is not found
        return {
            notFound: true
        };
    }
    // Redirect to the servicedetails page with the correct query parameter
    return {
        redirect: {
            destination: `/servicedetails/?services=${id}`,
            permanent: false
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicePage);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [112], () => (__webpack_exec__(4897)));
module.exports = __webpack_exports__;

})();