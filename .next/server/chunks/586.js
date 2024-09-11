"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: ./src/components/PreLoader/index.jsx
var PreLoader = __webpack_require__(1608);
// EXTERNAL MODULE: ./src/components/ScrollToTop/index.jsx + 1 modules
var ScrollToTop = __webpack_require__(8256);
;// CONCATENATED MODULE: ./src/common/fixStylesheetsOrder.js
function fixStylesheetsOrder(isRTL) {
    if (isRTL) {
        let rtlCss = document.querySelector('link[href="/assets/css/rtl_style.css"]');
        let mainCss = document.querySelector('link[href="/assets/css/style.css"]');
        if (!rtlCss || !mainCss) return;
        if (mainCss.nextElementSibling.href?.includes("/assets/css/rtl_style.css")) return;
        // Insert main css before rtl css 
        rtlCss.before(mainCss);
    } else {
        let bootstrapCss = document.querySelector('link[href="/assets/css/lib/bootstrap.min.css"]');
        let mainCss1 = document.querySelector('link[href="/assets/css/style.css"]');
        if (!bootstrapCss || !mainCss1) return;
        if (bootstrapCss.nextElementSibling.href?.includes("/assets/css/style.css")) return;
        // Insert main css after bootstrap css 
        bootstrapCss.after(mainCss1);
    }
}

;// CONCATENATED MODULE: ./src/layouts/Main.jsx
//= React




//= Components


//= Scripts

const MainLayout = ({ children , scrollTopText , isRTL  })=>{
    (0,external_react_.useEffect)(()=>{
        fixStylesheetsOrder(isRTL);
    }, [
        isRTL
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/animate.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.rtl.min.css"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/lib/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/style.css"
                    }),
                    isRTL ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/rtl_style.css"
                    }) : null
                ]
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop/* default */.Z, {
                topText: scrollTopText
            })
        ]
    });
};
/* harmony default export */ const Main = (MainLayout);


/***/ })

};
;