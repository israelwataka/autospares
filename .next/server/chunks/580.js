"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 2580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_FAQ)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/App/faq.json
const faq_namespaceObject = JSON.parse('[{"id":1,"question":"Can you provide an estimate before starting work on my car?","answer":{"part1":"Absolutely. We offer free estimates for all our services.","part2":" After diagnosing the issue, we will provide you with a detailed estimate before proceeding with any work."}},{"id":2,"question":"Do I need to make an appointment for services?","answer":{"part1":"While walk-ins are welcome, we recommend making an appointment to ensure prompt service. ","part2":" You can book an appointment online or by calling our customer service."}},{"id":3,"question":"What are your operating hours?","answer":{"part1":"Our operating hours are Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM.  ","part2":" We are closed on Sundays and public holidays."}},{"id":4,"question":"What are the signs that my car\'s computer needs repair?","answer":{"part1":"Common signs include warning lights on the dashboard, poor engine performance, and electrical issues.  ","part2":" Our computerized car diagnosis can identify and fix these problems."}},{"id":5,"question":"How often should I refill my car\'s AC system?","answer":{"part1":"It’s recommended to refill your car’s AC system every 1-2 years to maintain optimal performance.  ","part2":" We offer AC system repair and refill services to keep your vehicle cool."}},{"id":6,"question":"What types of car key cutting services do you offer?","answer":{"part1":"We offer traditional key cutting, laser key cutting, and transponder key cutting services. ","part2":" Our advanced equipment ensures precision and accuracy."}},{"id":7,"question":"Can you program a new key for my car?","answer":{"part1":"Yes, we specialize in car key programming for all makes and models. ","part2":" Our technicians can create and program new keys for your vehicle on the spot."}},{"id":8,"question":"What should I do if I lose my car keys?","answer":{"part1":"If you lose your car keys, contact us immediately for a car key replacement. ","part2":"  We provide key cutting and programming services to get you back on the road quickly."}},{"id":9,"question":"What are the signs that my car\'s computer needs repair?","answer":{"part1":"Common signs include warning lights on the dashboard, poor engine performance, and electrical issues.  ","part2":" Our computerized car diagnosis can identify and fix these problems."}}]');
;// CONCATENATED MODULE: ./src/data/App/faq-rtl.json
const faq_rtl_namespaceObject = JSON.parse('[{"id":1,"question":"ما هي الفائدة التي حصلت عليها عند اختيار الخطة الأساسية؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":2,"question":"كيف يمكنني تنظيم ملاحظاتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":3,"question":"كم من الوقت لمشروع قياسي","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":4,"question":"ماذا عن اتفاقية أمان البيانات واتفاقية عدم الإفشاء","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":5,"question":"كيف تقوم نيترو بتخزين بياناتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":6,"question":"لا يدعم نيترو تخزين البيانات على iCloud؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":7,"question":"كيف يمكنني تغيير البريد الإلكتروني أو كلمة المرور الخاصة بي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":8,"question":"هل يمكن استخدام ترخيص Premium الخاص بي لجميع الأجهزة؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"},{"id":9,"question":"هل يمكنني قفل تطبيق ملاحظتي؟","answer":"من خلال التعاون مع العملاء في مناقشة الاحتياجات والطلب ، نحن قادرون على تحقيق التفاهم المتبادل ، واكتساب ثقة العملاء لتقديم المشورة المناسبة"}]');
;// CONCATENATED MODULE: ./src/components/App/FAQ.jsx



const FAQ = ({ rtl  })=>{
    const data = rtl ? faq_rtl_namespaceObject : faq_namespaceObject;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "faq section-padding style-4 pt-50",
        "data-scroll-index": "7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-head text-center style-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                            className: "title_small",
                            children: rtl ? "أسئلة شائعة" : "Frequently Asked Question"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "mb-30",
                            children: [
                                rtl ? "بحاجة إلى" : "Need",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: rtl ? "دعم ؟" : "Assistance?"
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "faq style-3 style-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "accordion",
                            id: "accordionSt4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row gx-5",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: data.map((item, index)=>index <= 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `accordion-item ${index === 3 ? "" : "border-bottom"} rounded-0`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "accordion-header",
                                                        id: `heading${item.id + 10}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "accordion-button collapsed rounded-0 py-4",
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": `#collapse${item.id + 10}`,
                                                            "aria-expanded": "true",
                                                            "aria-controls": `collapse${item.id + 10}`,
                                                            children: item.question
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `collapse${item.id + 10}`,
                                                        className: "accordion-collapse collapse rounded-0",
                                                        "aria-labelledby": `heading${item.id + 10}`,
                                                        "data-bs-parent": "#accordionSt4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: rtl ? item.answer : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    item.answer.part1,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " ",
                                                                    item.answer.part2
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-lg-6",
                                        children: data.map((item, index)=>index > 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `accordion-item ${index === faq_namespaceObject.length - 1 ? "" : "border-bottom"} rounded-0`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "accordion-header",
                                                        id: `heading${item.id + 10}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: `accordion-button ${index !== 4 ? "collapsed" : ""} rounded-0 py-4`,
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": `#collapse${item.id + 10}`,
                                                            "aria-expanded": "true",
                                                            "aria-controls": `collapse${item.id + 10}`,
                                                            children: item.question
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: `collapse${item.id + 10}`,
                                                        className: `accordion-collapse collapse rounded-0 ${index !== 4 ? "" : "show"}`,
                                                        "aria-labelledby": `heading${item.id + 10}`,
                                                        "data-bs-parent": "#accordionSt4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "accordion-body",
                                                            children: rtl ? item.answer : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    item.answer.part1,
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " ",
                                                                    item.answer.part2
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const App_FAQ = (FAQ);


/***/ })

};
;