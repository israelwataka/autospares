"use strict";
(() => {
var exports = {};
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 9070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

const subscribeHandler = async (req, res)=>{
    if (req.method === "POST") {
        const { email  } = req.body;
        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const message = {
            from: `"Highway Autosolutions" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Newsletter Subscription",
            text: `A new user has registered for our newsletter: ${email}`
        };
        try {
            await transporter.sendMail(message);
            res.status(200).json({
                success: true
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                success: false,
                error: "Error sending email"
            });
        }
    } else {
        res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribeHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9070));
module.exports = __webpack_exports__;

})();