"use strict";
exports.id = 199;
exports.ids = [199];
exports.modules = {

/***/ 7199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Style2/about.json
const about_namespaceObject = JSON.parse('{"P":[{"id":"abt1-tab","tab_id":"abt1","text":"Our Mission"},{"id":"abt2-tab","tab_id":"abt2","text":"Our vision"},{"id":"abt3-tab","tab_id":"abt3","text":"Our Goal"}],"Q":[{"id":"abt1","text":"Delivering top-tier automotive services with a focus on quality, customer satisfaction, and innovation."},{"id":"abt2","text":"To be the leading provider of comprehensive automotive solutions, setting new standards in service and reliability."},{"id":"abt3","text":"To ensure every vehicle we service runs smoothly, safely, and efficiently, enhancing the driving experience for our customers."}]}');
;// CONCATENATED MODULE: ./src/components/Style2/About/About.jsx



const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "about style-2 section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img img-cover",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/blog/about.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info px-lg-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-head style-5 mb-40",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-20",
                                            children: " Driving Excellence in Automotive Care, One Vehicle at a Time  "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "nav nav-pills",
                                        id: "pills-tab",
                                        role: "tablist",
                                        children: about_namespaceObject.P.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                role: "presentation",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: `nav-link ${index === 0 ? "active" : ""}`,
                                                    id: item.id,
                                                    "data-bs-toggle": "pill",
                                                    "data-bs-target": "#" + item.tab_id,
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-controls": "pills-home",
                                                    "aria-selected": "true",
                                                    children: item.text
                                                })
                                            }, item.id))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tab-content",
                                        id: "pills-tabContent",
                                        children: about_namespaceObject.Q.map((panel, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `tab-pane fade ${index === 0 ? "show active" : ""}`,
                                                id: panel.id,
                                                role: "tabpanel",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text",
                                                        children: [
                                                            " ",
                                                            panel.text,
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex align-items-center mt-40",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "btns",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/portfolio",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: " Learn More "
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "inf ms-3",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "color-999",
                                                                        children: " Support Email "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "fw-bold color-000",
                                                                        children: " info@highwayautosolutions.com "
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, panel.id))
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about2_pattern_l.png",
                alt: "",
                className: "pattern_l"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about2_pattern_r.png",
                alt: "",
                className: "pattern_r"
            })
        ]
    });
};
/* harmony default export */ const About_About = (About);


/***/ })

};
;