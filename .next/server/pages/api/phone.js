"use strict";
(() => {
var exports = {};
exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

const phoneHandler = async (req, res)=>{
    if (req.method === "POST") {
        const { phone  } = req.body;
        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Call Request",
            text: `Phone Number: ${phone}`
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                message: "Request sent successfully!"
            });
        } catch (error) {
            res.status(500).json({
                error: "Failed to send request"
            });
        }
    } else {
        res.status(405).json({
            message: "Method not allowed"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneHandler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3736));
module.exports = __webpack_exports__;

})();