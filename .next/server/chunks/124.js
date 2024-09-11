"use strict";
exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 7549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ navbarScroll)
/* harmony export */ });
function navbarScroll(navbar, isTransparent, isFaqPage) {
    if (!navbar) return;
    if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        if (isTransparent) navbar.classList.remove("bg-transparent");
    } else {
        navbar.classList.remove("nav-scroll");
        if (isTransparent) navbar.classList.add("bg-transparent");
    }
    window.addEventListener("scroll", ()=>{
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
            if (isTransparent) navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.remove("nav-scroll");
            if (isTransparent) navbar.classList.add("bg-transparent");
        }
    });
}


/***/ }),

/***/ 6892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const TopNav = ({ style , rtl  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `top-navbar style-${style}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "btn sm-butn bg-white py-0 px-2 me-2 fs-10px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            className: "fs-10px",
                            children: rtl ? "عرض خاص" : "Special"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/assets/img/icons/nav_icon/imoj_heart.png",
                        alt: "",
                        className: "icon-15 me-1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "mailto:info@highwayautosolutions.com",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "fs-10px op-6 me-1",
                                children: [
                                    rtl ? "احصل على" : "email and",
                                    " "
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                        className: "op-10 fs-10px",
                        children: rtl ? "20% خصم" : "20% Off first Service"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "fs-10px op-6 mx-1",
                        children: rtl ? "عند الاشتراك" : "Dont Hesitate"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "tel:254723 880 785",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "fs-10px text-decoration-underline ms-2",
                            children: rtl ? "اشترك الأن" : "Contact Us Today"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);


/***/ }),

/***/ 1608:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PreLoader = ()=>{
    useEffect(()=>{
        setTimeout(()=>loadingPace(), 0);
    }, []);
    return /*#__PURE__*/ _jsx("div", {
        id: "preloader"
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PreLoader)));


/***/ }),

/***/ 8256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ScrollToTop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/scrollToTop.js
function scrollToTop() {
    const toTop = document.querySelector(".to_top");
    if (!toTop) return;
    window.addEventListener("scroll", function() {
        var bodyScroll = window.scrollY;
        if (bodyScroll > 700) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }
    });
    toTop.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

;// CONCATENATED MODULE: ./src/components/ScrollToTop/index.jsx



const ScrollToTop = ({ topText  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollToTop();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "#",
        className: `to_top ${topText ? "" : "bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center"}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: `bi bi-chevron-up ${topText ? "" : "fs-6 text-dark"}`
            }),
            topText && /*#__PURE__*/ jsx_runtime_.jsx("small", {
                children: "Top"
            })
        ]
    });
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);


/***/ })

};
;