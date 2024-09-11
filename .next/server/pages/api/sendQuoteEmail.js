"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    if (req.method === "POST") {
        const { name , email , vehicleMake , vehicleModel , vehicleYear , serviceOrPart , comments  } = req.body;
        // Create a transporter object using SMTP transport
        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        // Prepare email content
        const mailOptions = {
            from: `"Highway Autosolutions" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Quote Request",
            text: `
        Name: ${name}
        Email: ${email}
        Vehicle Make: ${vehicleMake}
        Vehicle Model: ${vehicleModel}
        Vehicle Year: ${vehicleYear}
        Service/Part Needed: ${serviceOrPart}
        Additional Comments: ${comments}
      `,
            attachments: req.body.file ? [
                {
                    filename: req.body.file.name,
                    content: req.body.file.data,
                    contentType: req.body.file.type
                }
            ] : []
        };
        // Send email
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                success: true
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                success: false
            });
        }
    } else {
        res.status(405).json({
            message: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3891));
module.exports = __webpack_exports__;

})();