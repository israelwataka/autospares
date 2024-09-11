"use strict";
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Saas_ChooseUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Saas/choose-us.json
const choose_us_namespaceObject = JSON.parse('[{"icon":"/assets/img/icons/serv_icons/1.png","info":"Expertise and Experience","details":"we pride ourselves on having a team of highly skilled and experienced automotive professionals. Our technicians undergo continuous training to stay updated with the latest advancements in automotive technology."},{"icon":"/assets/img/icons/serv_icons/3.png","info":"Comprehensive Service Range","details":"We offer a comprehensive range of automotive services designed to meet all your car care needs. "},{"icon":"/assets/img/icons/serv_icons/5.png","info":"Customer-Centric Approach","details":"Customer satisfaction is at the heart of everything we do at Highway Autosolutions. We believe in building long-term relationships with our customers by providing exceptional service and personalized care."}]');
;// CONCATENATED MODULE: ./src/data/Saas/choose-us-rtl.json
const choose_us_rtl_namespaceObject = JSON.parse('[{"icon":"/assets/img/icons/serv_icons/1.png","info":"حلول رقمية","details":"إن الانغماس في تقنية النانو على طول ارتفاع المعلومات سوف يغلق الحلقة في التركيز فقط"},{"icon":"/assets/img/icons/serv_icons/3.png","info":"تصميم فريد وخبرة برمجية","details":"سيقدم خبراؤنا المتميزون الذين يتمتعون بسنوات عديدة من الخبرة في مجال الشهادات أفضل الحلول لعملك"},{"icon":"/assets/img/icons/serv_icons/5.png","info":"خدمات سحابية","details":"دعم العملاء هو دائمًا أولويتنا الأولى."}]');
;// CONCATENATED MODULE: ./src/components/Saas/ChooseUs.jsx




const ChooseUs = ({ rtl  })=>{
    const ChooseUsData = rtl ? choose_us_rtl_namespaceObject : choose_us_namespaceObject;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "choose-us style-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between gx-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/choose_us/man_arrow.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-head mb-30 style-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                rtl ? "" : "Why",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: rtl ? "خدماتنا" : "Choose Us"
                                                }),
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text mb-50 fs-12px color-666",
                                        children: rtl ? "مع سوق HighwayAuto ، اختر من بين مئات بوابات الدفع لعملائك." : "With Highway Autosolutions, you are guaranteed: ."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: ChooseUsData.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex ${index !== ChooseUsData.length - 1 ? "mb-40" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "icon-50 me-4 flex-shrink-0",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.icon,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inf",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: item.info
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "fs-12px color-666 mt-2",
                                                                children: item.details
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: rtl ? "/rtl-page-services" : "/services",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mt-60 px-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: rtl ? "مشاهدة المزيد" : "Explore Our Services"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s6_bubbles.png",
                alt: "",
                className: "bubbles rotate-center"
            })
        ]
    });
};
/* harmony default export */ const Saas_ChooseUs = (ChooseUs);


/***/ }),

/***/ 8475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/Style2/blogs.json
const blogs_namespaceObject = JSON.parse('[{"uid":"news-007","image":"/assets/blog/electrical.webp","date":"Oct 21, 2023","author":"Admin","title":"Electric Cars Leading the Future"},{"uid":"news-008","image":"/assets/blog/Autonomous1.jpeg","date":"Oct 21, 2023","author":"Admin","title":"Advancements in Autonomous Driving"},{"uid":"tips-001","image":"/assets/blog/maintenance2.jpg","date":"Oct 21, 2023","author":"Admin","title":"Top 5 Maintenance Tips for Your Car"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Style2/About/Blog.jsx



const Blog = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog style-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content section-padding",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-head text-center mb-70 style-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "mb-20",
                                children: [
                                    " News & ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " Insights "
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "More than 5,000 Individuals and companies trust and choose Highway Autosolutions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "blog-content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-post wow fadeInUp",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "img img-cover",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/assets/blog/electric1.jpg",
                                                        alt: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "tags",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: " Cars and Automation "
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info pt-30",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "date-author",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "date",
                                                                children: "Nov 21, 2023"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "color-999 mx-3",
                                                                children: " | "
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                className: "author color-999",
                                                                children: [
                                                                    "By ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-000 fw-bold",
                                                                        children: " Admin "
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/blog",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: " Unlock the secrets to a smoother, more efficient drive! Discover expert tips, the latest automotive news, and DIY guides in our blog. Your journey to better car care starts here! "
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "side-posts",
                                        children: blogs_namespaceObject.map((blog, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item wow fadeInUp",
                                                "data-wow-delay": `${index * 0.2}s`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "img img-cover",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: blog.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "date-author",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "date",
                                                                        children: blog.date
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-999 mx-3",
                                                                        children: " | "
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "author color-999",
                                                                        children: [
                                                                            "By ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "color-000 fw-bold",
                                                                                children: [
                                                                                    " ",
                                                                                    blog.admin,
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: `/blog/${blog.uid}`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: blog.title
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const About_Blog = (Blog);


/***/ })

};
;