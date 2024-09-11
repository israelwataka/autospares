"use strict";
(() => {
var exports = {};
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 1448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
// pages/api/comment.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { comment , name , email  } = req.body;
        // Create a transporter
        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT, 10),
            secure: process.env.EMAIL_PORT === "465",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Comment Submission",
            text: `A new comment has been submitted:\n\nName: ${name}\nEmail: ${email}\nComment: ${comment}`
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                message: "Comment submitted successfully!"
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                message: "Failed to send comment."
            });
        }
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1448));
module.exports = __webpack_exports__;

})();