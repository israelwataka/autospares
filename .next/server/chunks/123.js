"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 7123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Saas/footer.json
const footer_namespaceObject = JSON.parse('{"Lk":{"n":"Bungoma-Mumias Road, Wings,","s":"Wings, Bungoma, KE"},"m7":"+254 723 880 785","Do":"contact@highwayautosolutions.com","oZ":[{"link":"/","title":"Home"},{"link":"/about","title":"About Highway Auto"},{"link":"/portfolio","title":"Portfolio"},{"link":"/services","title":"services"},{"link":"/blog","title":"Blog"},{"link":"/contact","title":"Contact"}],"Jb":[{"link":"/contact","title":"Help Centre"},{"link":"#","title":"Roadmap"},{"link":"/get-quote","title":"Get Quote"},{"link":"/faq","title":"FAQs"},{"link":"/terms&conditions","title":"terms"}]}');
;// CONCATENATED MODULE: ./src/components/Saas/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "style-5 border-top brd-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-0 justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title",
                                        children: "Highway Autosolutions"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                        className: "text",
                                        children: [
                                            "Your trusted partner for top-quality automotive care. Expert service, advanced technology, and customer satisfaction guaranteed. Visit us or book online today! ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Keeping You on the Road."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "socail-icons",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://twitter.com/",
                                                rel: "noreferrer",
                                                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://facebook.com/",
                                                rel: "noreferrer",
                                                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://instagram.com/",
                                                rel: "noreferrer",
                                                className: "icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title",
                                        children: "Information"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                        className: "text mb-10 d-block",
                                        children: [
                                            footer_namespaceObject.Lk.n,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ",
                                            footer_namespaceObject.Lk.s
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text mb-10 d-block",
                                        children: footer_namespaceObject.m7
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        className: "text d-block",
                                        children: footer_namespaceObject.Do
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title",
                                        children: "Useful Links"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: footer_namespaceObject.oZ.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: link.link,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: link.title
                                                    })
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "items",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "title",
                                        children: "Resource"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: footer_namespaceObject.Jb.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: link.link,
                                                    children: link.title
                                                })
                                            }, index))
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "foot",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/auto.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                    className: "small",
                                    children: [
                                        "Copyright \xa9 2024 ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "fw-bold text-decoration-underline",
                                            children: "Highway Autosolutions."
                                        }),
                                        " All Rights Reserved. Designed by ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://wa.me/254711245450",
                                            className: "fw-bold text-decoration-underline",
                                            children: "TechMtaani"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Saas_Footer = (Footer);


/***/ })

};
;