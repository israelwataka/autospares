"use strict";
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Preview_BestFeatures)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Preview/best-features.json
const best_features_namespaceObject = JSON.parse('[{"icon":"bi bi-lightning-charge","title":"Fast & Efficient Service","description":"We prioritize quick turnaround times without compromising on quality, ensuring you get back on the road swiftly."},{"icon":"bi bi-person-badge","title":"Certified Technicians","description":"Our team consists of highly trained and certified professionals dedicated to delivering top-notch automotive care."},{"icon":"bi bi-gear","title":"Advanced Diagnostics","description":"Utilizing the latest technology, we provide accurate and comprehensive diagnostics for your vehicle"},{"icon":"bi bi-calendar-check","title":" Convenient Online Booking","description":"Easily schedule your appointments online with our user-friendly booking system, available 24/7."},{"icon":"bi bi-shield-check","title":"Quality Parts","description":"We use only high-quality OEM and aftermarket parts to ensure the reliability and performance of your vehicle"},{"icon":"bi bi-hand-thumbs-up","title":"Customer Satisfaction","description":"Your satisfaction is our top priority. We strive to exceed your expectations with every service we provide."}]');
;// CONCATENATED MODULE: ./src/components/Preview/BestFeatures.jsx


const BestFeatures = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "best-feat section-padding",
        "data-overlay-dark": "0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: best_features_namespaceObject.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 mb-50",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: item.icon
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: item.description
                                })
                            ]
                        })
                    }, i))
            })
        })
    });
};
/* harmony default export */ const Preview_BestFeatures = (BestFeatures);


/***/ })

};
;