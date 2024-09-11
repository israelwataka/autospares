"use strict";
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 3624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SinglePost_AllNews)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Details.jsx


const Details = ({ details , style , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog-details-slider mb-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-head text-center mb-60 style-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mb-20 color-000",
                        children: details.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                        className: "d-block date text",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style} fw-bold`,
                                children: details.type
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-clock me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "op-8 ms-1",
                                children: [
                                    rtl ? "تم النشر" : "Posted on",
                                    " ",
                                    details.time
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content-card",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: details.image,
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const AllNews_Details = (Details);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Metadata.jsx


const Metadata = ({ metadata  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-flex small align-items-center justify-content-between mb-70 fs-12px",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "l_side d-flex align-items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "me-3 me-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                children: "A"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "By Admin"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        className: "me-3 me-lg-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-chat-left-text me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    metadata.commentsCount,
                                    " Comments"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-eye me-1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    metadata.viewsCount,
                                    " Views"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "r-side mt-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/contact",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "bi bi-info-circle me-1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Report"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const AllNews_Metadata = (Metadata);

// EXTERNAL MODULE: ./src/data/blog/cont.json
var cont = __webpack_require__(5684);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Content.jsx




const Content = ()=>{
    const router = (0,router_.useRouter)();
    const { uid  } = router.query;
    const blogPost = cont/* blogs.find */.Z.find((blog)=>blog.uid === uid);
    if (!blogPost) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Blog post not found"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "fw-bold color-000 lh-4 mb-30",
                children: blogPost.heading
            }),
            blogPost.paragraphs.map((paragraph, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text mb-10 color-666",
                    children: paragraph
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "info-imgs",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blogPost.images.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "img text-center mt-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: image,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "color-999 fs-12px mt-20",
                                        children: [
                                            "Images by ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "color-000",
                                                children: "Admin"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text mt-50 color-666",
                children: blogPost.quote.content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "twitter-info mt-60",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "twitter-card",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "twitter-header d-flex align-items-center justify-content-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "twitter-user d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon-50 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: blogPost.quote.author.image,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "inf",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: blogPost.quote.author.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                        className: "color-999",
                                                        children: [
                                                            " ",
                                                            blogPost.quote.author.handle,
                                                            " - ",
                                                            blogPost.quote.author.date,
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "twitter-icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "twitter-info mt-40",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                    children: [
                                        "“",
                                        blogPost.tweet.content,
                                        "”"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: blogPost.subheading
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text color-666 mt-30",
                        children: blogPost.additionalParagraph
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "ps-1 ps-lg-5 my-4 color-666 fs-14px lh-7",
                        children: blogPost.list.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "d-flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "bi bi-dot me-2 fs-3 lh-2 pt-1"
                                    }),
                                    item
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text color-666 mt-30",
                        dangerouslySetInnerHTML: {
                            __html: blogPost.fondestMemory
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "blog-share mt-80",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "side-tags",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "content",
                                            children: blogPost.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "me-1",
                                                    children: tag
                                                }, index))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "share-icons d-flex justify-content-lg-end mt-3 mt-lg-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "fw-bold me-3 flex-shrink-0 text-uppercase",
                                                children: "Share on"
                                            }),
                                            blogPost.sharePlatforms.map((platform, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: `fab fa-${platform}`
                                                    })
                                                }, index))
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AllNews_Content = (Content);

;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Comments.jsx


const Comments = ({ commentCard , comments , style , rtl  })=>{
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("/api/comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment,
                    name,
                    email
                })
            });
            if (res.ok) {
                alert("Comment submitted successfully!");
                // Clear the form fields
                setComment("");
                setName("");
                setEmail("");
            } else {
                alert("Failed to submit comment. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "blog-comments mt-70",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "comment-card card p-5 radius-5 border-0 mt-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: commentCard.user.picture,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inf",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-bold",
                                    children: commentCard.user.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    className: "color-999",
                                    children: commentCard.date
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text color-000 fs-12px mt-10",
                                    children: commentCard.text
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "comments-content mt-70",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "color-000 mb-0",
                        children: [
                            comments.length < 10 ? `0${comments.length}` : comments.length,
                            " ",
                            rtl ? "تعليقات" : "Comments"
                        ]
                    }),
                    comments.map((comment, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `comment-replay-cont ${index !== comments.length - 1 ? "border-bottom border-1 brd-gray" : ""} pb-40 pt-40`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex comment-cont",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: comment.user.picture,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "inf",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "title d-flex justify-content-between",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold fs-14px",
                                                        children: comment.user.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "time fs-12px text-uppercase",
                                                        children: comment.time
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text color-000 fs-12px mt-10",
                                                children: comment.content
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, index))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "comment-form d-block pt-30",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "color-000 mb-40",
                        children: rtl ? "اضافة تعليق" : "Leave A Comment"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-group mb-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        className: "form-control radius-4 fs-12px p-3",
                                        rows: "6",
                                        placeholder: rtl ? "اكتب تعليقك هنا" : "Write your comment here",
                                        value: comment,
                                        onChange: (e)=>setComment(e.target.value),
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-group mb-4 mb-lg-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control fs-12px radius-4 p-3",
                                        placeholder: rtl ? "اسمك *" : "Your Name *",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        className: "form-control fs-12px radius-4 p-3",
                                        placeholder: rtl ? "بريدك الالكترونى *" : "Your Email *",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        required: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: `btn rounded-pill blue${style}-3Dbutn hover-blue4 sm-butn fw-bold mt-40`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: rtl ? "ارسال التعليق" : "Submit Comment"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AllNews_Comments = (Comments);

// EXTERNAL MODULE: external "lightgallery/react"
var react_ = __webpack_require__(2697);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/Sidebar.jsx





const Sidebar = ({ data , style  })=>{
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const { 0: filteredPosts , 1: setFilteredPosts  } = (0,external_react_.useState)(data.recentPosts);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            if (res.ok) {
                alert("Subscription successful!");
                setEmail(""); // Clear the input field
            } else {
                alert("Subscription failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };
    (0,external_react_.useEffect)(()=>{
        const lg = document.querySelector(".lg-react-element");
        if (lg) lg.className = "d-flex justify-content-between flex-wrap";
    }, []);
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value);
        const filtered = data.recentPosts.filter((post)=>post.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredPosts(filtered);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "side-blog style-5 ps-lg-5 mt-5 mt-lg-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "search-form mb-50",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Search"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control rounded-pill",
                                    placeholder: "Type and hit enter",
                                    value: searchTerm,
                                    onChange: handleSearch
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "search-btn border-0 bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-search"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-recent-post mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Recent Posts"
                        }),
                        filteredPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/blog/${post.uid}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `post-card ${index !== filteredPosts.length - 1 ? "pb-3 mb-3 border-bottom brd-gray" : ""}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img me-3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "inf",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: post.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Highway Auto Solutions, Bringing solutions near you [...]"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, index))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-categories mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Categories"
                        }),
                        data.categories.map((category, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                className: "cat-item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: category.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: category.count
                                    })
                                ]
                            }, index))
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-newsletter mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-10 text-uppercase fw-normal",
                            children: "Newsletter"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text",
                            children: "Register now to get latest updates on promotions & coupons."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: handleSubmit,
                            className: "form-subscribe",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "email-input d-flex align-items-center py-3 px-3 bg-white mt-3 radius-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon me-2 flex-shrink-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-envelope"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: "Email Address",
                                            className: "border-0 bg-transparent fs-12px",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: `btn bg-blue${style} sm-butn text-white hover-darkBlue w-100 mt-3 radius-5 py-3`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Subscribe"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-share mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Social"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-pinterest"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-goodreads-g"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: "social-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-linkedin-in"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-insta mb-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Our Instagram"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                            speed: 500,
                            backdropDuration: 500,
                            children: data.instagram.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: image,
                                    className: "insta-img img-cover",
                                    "data-fancybox": "gallery",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: image,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram icon"
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "side-tags",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "title mb-20 text-uppercase fw-normal",
                            children: "Popular Tags"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: data.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "me-1",
                                    children: tag
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const AllNews_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/data/SinglePost/allnews.json
const allnews_namespaceObject = JSON.parse('{"blogs":[{"uid":"news-001","title":"Highway Autosolutions Launches New Diagnostic Service","time":"7 September, 2023","image":"/assets/blog/diagnosis2.jpg","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":24,"viewsCount":"79k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"John W."},"date":"@johnw - 7 September, 2023","text":"I’ve already tried the new diagnostic service, and it’s absolutely fantastic. The speed and accuracy are unmatched!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Emily R."},"time":"1 hour ago","content":"I love how easy this service is to use. It saved me from a potentially costly repair!"}]},{"uid":"news-002","title":"Highway Autosolutions Partners with Leading Auto Parts Supplier","time":"7 September, 2023","image":"/assets/blog/supply.jpg","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":32,"viewsCount":"92k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Grace M."},"date":"@gracem - 7 September, 2023","text":"This partnership is going to change the way vehicle repairs are done. No more delays in getting the right parts!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"James K."},"time":"2 hours ago","content":"As a mechanic, I’m thrilled about this partnership. It’s going to make my job easier and help me serve customers better."},{"user":{"picture":"/assets/blog/user.png","name":"Sarah P."},"time":"1 day ago","content":"This is a fantastic development! I\'ve always trusted Highway Autosolutions with my car, and now it’s even better."},{"user":{"picture":"/assets/blog/user.png","name":"Oliver T."},"time":"3 days ago","content":"Excited to see how this partnership improves the service. Great move, Highway Autosolutions!"}]},{"uid":"news-003","title":"Customer Satisfaction at Highway Autosolutions Hits Record High","time":"8 September, 2023","image":"/assets/blog/customer1.webp","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":28,"viewsCount":"101k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"David M."},"date":"@davidm - 8 September, 2023","text":"Amazing news! I’ve always had a great experience with Highway Autosolutions."},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Lisa K."},"time":"5 hours ago","content":"No surprise here! Highway Autosolutions always delivers excellent service. Well deserved!"},{"user":{"picture":"/assets/blog/user.png","name":"Tom J."},"time":"1 day ago","content":"High customer satisfaction is what happens when you put people first. Keep it up!"},{"user":{"picture":"/assets/blog/user.png","name":"Natalie S."},"time":"2 days ago","content":"I’ve been a loyal customer for years, and it’s no surprise to see this recognition for great service."}]},{"uid":"news-004","title":"Revolutionizing Auto Maintenance with Smart Technology","time":"9 September, 2023","image":"/assets/blog/tech.jpg","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":18,"viewsCount":"68k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Luke S."},"date":"@lukes - 9 September, 2023","text":"Exciting to see how technology is making car maintenance easier and more efficient."},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Anna B."},"time":"3 hours ago","content":"Smart diagnostics have really improved how quickly I can fix issues with my car. Love this tech!"},{"user":{"picture":"/assets/blog/user.png","name":"John T."},"time":"1 day ago","content":"The future of auto repairs is definitely smart. This is just the beginning."},{"user":{"picture":"/assets/blog/user.png","name":"Sophia R."},"time":"2 days ago","content":"It’s great to see innovations that help prevent expensive breakdowns. Smart maintenance is the way to go!"}]},{"uid":"news-005","title":"The Impact of Electric Vehicles on the Auto Repair Industry","time":"12 September, 2023","image":"/assets/blog/electric2.jpg","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":35,"viewsCount":"92k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Moses N."},"date":"@moses_auto - 12 September, 2023","text":"Interesting take! EVs are really changing the way we think about car repairs."},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Samantha C."},"time":"5 hours ago","content":"I’m already seeing fewer trips to the shop with my EV! Great article."},{"user":{"picture":"/assets/blog/user.png","name":"Tom R."},"time":"1 day ago","content":"Auto repair shops need to evolve, or they’ll be left behind."}]},{"uid":"news-006","title":"From Spy Shots to New Releases to Auto Show Coverage","time":"14 September, 2023","image":"/assets/blog/spy1.webp","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":28,"viewsCount":"85k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"James W."},"date":"@jamesw - 14 September, 2023","text":"Excited to see the upcoming models! Love the coverage."},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Karen F."},"time":"2 hours ago","content":"Spy shots are always the best part of the car release hype!"},{"user":{"picture":"/assets/blog/user.png","name":"David P."},"time":"1 day ago","content":"Can’t wait for the new reveals at the next auto show. Thanks for the great coverage!"}]},{"uid":"news-007","title":"Electric Cars Leading the Future","time":"10 October, 2023","image":"/assets/blog/electrical1.webp","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":45,"viewsCount":"120k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Lisa G."},"date":"@lisa_g - 10 October, 2023","text":"Incredible insights into the future of electric cars. Exciting times ahead!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Mark R."},"time":"3 hours ago","content":"Great article on electric cars! Looking forward to seeing more advancements in this field."},{"user":{"picture":"/assets/blog/user.png","name":"Sophia H."},"time":"1 day ago","content":"Very informative read. Electric vehicles are definitely the future."}]},{"uid":"news-008","title":"Advancements in Autonomous Driving","time":"15 October, 2023","image":"/assets/blog/Autonomous.webp","type":"News","user":{"name":"Admin","imgLetter":"A"},"commentsCount":50,"viewsCount":"110k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Ella P."},"date":"@ella_p - 15 October, 2023","text":"Fascinating insights into autonomous driving advancements. Can’t wait to see what’s next!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Ben T."},"time":"4 hours ago","content":"This article highlights some impressive advancements in self-driving technology. Exciting times for the auto industry!"},{"user":{"picture":"/assets/blog/user.png","name":"Mia W."},"time":"1 day ago","content":"Very informative. Autonomous vehicles are definitely the future of transportation."}]},{"uid":"tips-001","title":"Top 5 Maintenance Tips for Your Car","time":"20 October, 2023","image":"/assets/blog/maintenance2.jpg","type":"Tips","user":{"name":"Admin","imgLetter":"A"},"commentsCount":35,"viewsCount":"85k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Ryan K."},"date":"@ryan_k - 20 October, 2023","text":"Excellent tips for maintaining your car. Very helpful and easy to follow!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Ella R."},"time":"2 hours ago","content":"These maintenance tips are practical and useful. I’ll be using them to keep my car in great shape."},{"user":{"picture":"/assets/blog/user.png","name":"Chris J."},"time":"1 day ago","content":"Great advice on car maintenance. Very informative and easy to implement."}]},{"uid":"tips-002","title":"Improving Fuel Efficiency","time":"25 October, 2023","image":"/assets/blog/fuel.jpg","type":"Tips","user":{"name":"Admin","imgLetter":"A"},"commentsCount":37,"viewsCount":"92k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"James F."},"date":"@james_f - 25 October, 2023","text":"Great tips for improving fuel efficiency. These are very practical and useful!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Megan C."},"time":"2 hours ago","content":"Useful advice for better fuel efficiency. I’ll be trying out these tips on my next drive."},{"user":{"picture":"/assets/blog/user.png","name":"Tom G."},"time":"1 day ago","content":"Informative article. Improving fuel efficiency is always a good idea."}]},{"uid":"tips-003","title":"Winter Car Care Tips","time":"30 October, 2023","image":"/assets/blog/winter.jpg","type":"Tips","user":{"name":"Admin","imgLetter":"A"},"commentsCount":41,"viewsCount":"100k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Oliver J."},"date":"@oliver_j - 30 October, 2023","text":"Excellent tips for winter car care. Very helpful for staying safe during winter driving."},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Ava L."},"time":"3 hours ago","content":"These winter car care tips are very useful. I’ll make sure to follow them for a safe winter."},{"user":{"picture":"/assets/blog/user.png","name":"Henry M."},"time":"1 day ago","content":"Great article on preparing your car for winter. Very informative and practical advice."}]},{"uid":"tips-004","title":"DIY Car Repairs","time":"5 November, 2023","image":"/assets/blog/diy2.jpg","type":"Tips","user":{"name":"Admin","imgLetter":"A"},"commentsCount":29,"viewsCount":"73k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Sophia H."},"date":"@sophia_h - 5 November, 2023","text":"Great DIY tips for car repairs. Very practical and easy to follow!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Liam O."},"time":"4 hours ago","content":"Useful tips for DIY car repairs. I’ll definitely try some of these techniques."},{"user":{"picture":"/assets/blog/user.png","name":"Mia P."},"time":"2 days ago","content":"Great article on DIY repairs. The tips are clear and easy to follow."}]},{"uid":"tips-005","title":"Choosing the Right Tires","time":"10 November, 2023","image":"/assets/blog/tires.jpg","type":"Tips","user":{"name":"Admin","imgLetter":"A"},"commentsCount":44,"viewsCount":"110k","commentCard":{"user":{"picture":"/assets/blog/user.png","name":"Oliver S."},"date":"@oliver_s - 10 November, 2023","text":"Very informative article on choosing the right tires. The tips are practical and helpful!"},"comments":[{"user":{"picture":"/assets/blog/user.png","name":"Emily K."},"time":"5 hours ago","content":"Great advice on selecting tires. This guide will help me make a better decision for my car."},{"user":{"picture":"/assets/blog/user.png","name":"John D."},"time":"1 day ago","content":"Excellent tips on tire selection. The information is clear and easy to understand."}]}],"sidebar":{"recentPosts":[{"uid":"news-004","title":"Electric Cars Revolutionize 2023","image":"/assets/blog/electric2.jpg"},{"uid":"news-006","title":"From Spy Shots to New Releases to Auto Show Coverage","image":"/assets/blog/spy1.webp"},{"uid":"tips-004","title":"DIY Car Repairs","image":"/assets/blog/diy2.jpg"},{"uid":"news-005","title":"Autonomous Vehicles Gain Momentum","image":"/assets/blog/Autonomous.webp"}],"categories":[{"title":"all","count":265},{"title":"News","count":38},{"title":"Technology","count":16},{"title":"Tips & Tricks","count":85},{"title":"Career","count":21},{"title":"Community","count":874},{"title":"Videos","count":54},{"title":"Others","count":85}],"instagram":["/assets/img/blog/1.jpeg","/assets/blog/electric1.jpg","/assets/blog/Autonomous1.jpeg","/assets/blog/tires1.jpg","/assets/blog/oilchange.jpg","/assets/blog/winter2.jpg"],"tags":["Cars","Electric Vehicles","Autonomous Driving","Maintenance","Fuel Efficiency","Winter Care","DIY Repairs","Tires","Automotive News","Sustainable Transportation"]}}');
;// CONCATENATED MODULE: ./src/components/SinglePost/AllNews/index.jsx

 // Next.js hook for routing





 // Only use the regular news data
const AllNews = ({ isWide , leftSidebar , style ="4"  })=>{
    const router = (0,router_.useRouter)(); // Next.js hook to access the route
    const { uid  } = router.query; // Get the uid from the URL
    // Use only the regular news data
    const data = allnews_namespaceObject;
    // Find the blog post that matches the uid
    const post = data.blogs.find((blog)=>blog.uid === uid);
    // Handle case where the post is not found
    if (!post) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Post not found"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "all-news section-padding pt-50 blog bg-transparent style-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Details, {
                    details: {
                        title: post.title,
                        time: post.time,
                        image: post.image,
                        type: post.type
                    },
                    style: style
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-4 gx-lg-5",
                    children: [
                        !isWide && leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            data: data.sidebar,
                            style: style
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: isWide ? "col-lg-12" : "col-lg-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Metadata, {
                                    metadata: {
                                        commentsCount: post.commentsCount,
                                        viewsCount: post.viewsCount
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "blog-content-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Content, {
                                            style: style
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Comments, {
                                            comments: post.comments,
                                            commentCard: post.commentCard,
                                            style: style
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isWide && !leftSidebar && /*#__PURE__*/ jsx_runtime_.jsx(AllNews_Sidebar, {
                            data: data.sidebar,
                            style: style
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SinglePost_AllNews = (AllNews);


/***/ }),

/***/ 2446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_SinglePost_posts_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5960);
/* harmony import */ var _data_SinglePost_posts_rtl_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const PopularPosts = ({ style ="4" , rtl  })=>{
    const data = rtl ? _data_SinglePost_posts_rtl_json__WEBPACK_IMPORTED_MODULE_5__ : _data_SinglePost_posts_json__WEBPACK_IMPORTED_MODULE_4__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "popular-posts related Posts section-padding pb-100 bg-gray5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "fw-bold text-uppercase mb-50",
                    children: rtl ? "المنشورات ذات الصلة" : "Related Posts"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "related-postes-slider position-relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                            className: "swiper-container",
                            slidesPerView: 3,
                            spaceBetween: 80,
                            centeredSlides: true,
                            speed: 1000,
                            pagination: false,
                            navigation: {
                                nextEl: ".related-postes-slider .swiper-button-next",
                                prevEl: ".related-postes-slider .swiper-button-prev"
                            },
                            mousewheel: false,
                            keyboard: true,
                            autoplay: {
                                delay: 4000
                            },
                            loop: true,
                            breakpoints: {
                                0: {
                                    slidesPerView: 1
                                },
                                480: {
                                    slidesPerView: 1
                                },
                                787: {
                                    slidesPerView: 2
                                },
                                991: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                }
                            },
                            children: data.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "card border-0 bg-transparent rounded-0 p-0 d-block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/page-single-post-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "img radius-7 overflow-hidden img-cover",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: post.image,
                                                        className: "card-img-top",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "card-body px-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                        className: "d-block date mt-10 fs-10px fw-bold",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: `text-uppercase border-end brd-gray pe-3 me-3 color-blue${style}`,
                                                                children: post.type
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "bi bi-clock me-1"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                href: "#",
                                                                className: "op-8",
                                                                children: [
                                                                    rtl ? "تم النشر" : "Posted on",
                                                                    " ",
                                                                    post.time
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "fw-bold mt-10 title",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: `/blog/${post.uid}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: post.title
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "small mt-2 op-8",
                                                        children: post.short_desc
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "d-flex small mt-20 align-items-center justify-content-between op-9",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "l_side d-flex align-items-center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white",
                                                                        children: post.userImgLetter
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "mt-1",
                                                                        children: [
                                                                            rtl ? "بواسطة" : "By",
                                                                            " ",
                                                                            post.username
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "r-side mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "bi bi-chat-left-text me-1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: post.comments
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                        className: "bi bi-eye ms-4 me-1"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: post.views
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-button-next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-button-prev"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularPosts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_navbarScrollEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7549);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7586);
/* harmony import */ var _components_Navbars_TopNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6892);
/* harmony import */ var _components_Navbars_AppNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9204);
/* harmony import */ var _components_SinglePost_AllNews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3624);
/* harmony import */ var _components_SinglePost_PopularPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2446);
/* harmony import */ var _components_Saas_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7123);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SinglePost_PopularPosts__WEBPACK_IMPORTED_MODULE_7__]);
_components_SinglePost_PopularPosts__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//= Scripts

//= Layout

//= Components





const PageSinglePostLeftSidebarApp = ({ content ={}  })=>{
    const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_navbarScrollEffect__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(navbarRef.current);
    }, [
        navbarRef
    ]);
    // Default content if content is missing
    const { title ="Default Title" , paragraphs =[]  } = content;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        title,
                        " - Highway Autosolutions"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Main__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbars_TopNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        style: "4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbars_AppNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        navbarRef: navbarRef
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "blog-page style-5 color-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SinglePost_AllNews__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SinglePost_PopularPosts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Saas_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        noWave: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSinglePostLeftSidebarApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6300:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"/assets/img/blog/1.jpeg","type":"اخبار","time":"منذ 3 ايام","title":"اتجاه التشفير 2023","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"image":"/assets/img/blog/7.png","type":"اخبار","time":"منذ 3 ايام","title":"AI مع بصمة الإصبع","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"},{"image":"/assets/img/blog/5.png","type":"اخبار","time":"منذ 3 ايام","title":"لعبة NFT! فرصة جديدة","short_desc":"إذا كانت هناك طريقة واحدة غيرت بها التكنولوجيا اللاسلكية طريقة عملنا.","userImgLetter":"a","username":"الادمن","comments":"24","views":"774k"}]');

/***/ }),

/***/ 5960:
/***/ ((module) => {

module.exports = JSON.parse('[{"uid":"news-004","image":"/assets/blog/tech.jpg","type":"news","time":"310 Days ago","title":"Electric Cars Revolutionize 2023","desc":"Electric vehicles are taking the automotive world by storm, with new advancements and models emerging rapidly.","userImgLetter":"A","username":"Admin","comments":"24","views":"774k"},{"uid":"news-005","image":"/assets/blog/electric2.jpg","type":"news","time":"129 Days ago","title":"Autonomous Vehicles Gain Momentum","desc":"Self-driving cars are becoming more common on the roads, with major advancements in AI technology driving this trend.","userImgLetter":"A","username":"Admin","comments":"24","views":"774k"},{"uid":"news-006","image":"/assets/blog/spy1.webp","type":"news","time":"103 Days ago","title":"From Spy Shots to New Releases to Auto Show Coverage","desc":"The automotive industry is focusing on sustainable fuel sources, aiming to reduce carbon emissions and environmental impact.","userImgLetter":"A","username":"Admin","comments":"24","views":"774k"}]');

/***/ }),

/***/ 5684:
/***/ ((module) => {

module.exports = JSON.parse('{"Z":[{"uid":"news-001","image":"/assets/img/blog/s_blog_new.png","type":"News","time":"7 September, 2023","title":"Highway Autosolutions Launches New Diagnostic Service","heading":"Highway Autosolutions Unveils an Advanced Vehicle Diagnostic Platform","paragraphs":["Highway Autosolutions is proud to announce the launch of its highly anticipated diagnostic service, designed to transform vehicle maintenance. This cutting-edge platform enables vehicle owners and mechanics to diagnose issues quickly, helping to prevent major breakdowns and costly repairs.","With advanced technology at its core, the diagnostic service supports multiple vehicle brands and provides real-time insights, ensuring that drivers can make informed decisions about their vehicle’s health. Highway Autosolutions aims to set a new industry standard in diagnostics, providing an efficient and user-friendly solution."],"list":["Supports multiple vehicle models and brands","Provides real-time diagnostic insights","Helps prevent costly repairs through early detection"],"images":["/assets/blog/diagnosis.jpg","/assets/blog/diagnosis1.webp"],"quote":{"content":"This new service is a major leap forward for our customers. They can now manage their vehicles’ health with just a few clicks, ensuring better performance and longer lifespan.","author":{"image":"/assets/blog/user.png","name":"Jessica M.","handle":"@jessicaM","date":"7 September, 2023"}},"tweet":{"content":"Just tried the new diagnostic service from @HighwayAutoSolutions! It’s fast, accurate, and incredibly easy to use. If you care about your vehicle’s health, this is a must-have! #AutoTech #CarCare","username":"Highway Auto Solutions"},"subheading":"Innovating Vehicle Maintenance","additionalParagraph":"The launch of this diagnostic service is part of Highway Autosolutions’ mission to revolutionize the way people care for their vehicles. From regular maintenance to critical diagnostics, this service provides the tools needed to keep your car in top condition.","tags":["Diagnostic Technology","Auto Innovations","Vehicle Health"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"This reminds me of the time when my car broke down in the middle of nowhere. A diagnostic service like this could have saved me from that ordeal!"},{"uid":"news-002","image":"/assets/img/blog/auto_parts_partner.png","type":"News","time":"7 September, 2023","title":"Highway Autosolutions Partners with Leading Auto Parts Supplier","heading":"Highway Autosolutions Announces Strategic Partnership with Top Auto Parts Supplier","paragraphs":["In a move to strengthen its position in the automotive service industry, Highway Autosolutions has officially partnered with one of the world’s leading auto parts suppliers. This partnership aims to provide customers with high-quality, genuine auto parts at competitive prices, enhancing the overall service experience.","With this partnership, Highway Autosolutions will have access to a broader range of parts, ensuring faster repair times and more efficient service delivery. The collaboration is set to revolutionize the way customers maintain and repair their vehicles, offering more value and reliability."],"list":["Access to a wider range of genuine auto parts","Faster repair times and improved service efficiency","Enhanced customer experience through competitive pricing"],"images":["/assets/blog/supply1.jpg","/assets/blog/supply2.jpeg"],"quote":{"content":"This partnership will allow us to offer our customers even better service with top-quality auto parts. We are excited to take this step forward in providing unmatched vehicle repair and maintenance solutions.","author":{"image":"/assets/blog/user.png","name":"Michael L.","handle":"@michaelL","date":"7 September, 2023"}},"tweet":{"content":"Exciting news! @HighwayAutoSolutions has partnered with a leading auto parts supplier to bring even more value to their customers. The future of vehicle repair just got brighter! #AutoInnovation #Partnership","username":"Highway Auto Solutions"},"subheading":"Strengthening Customer Service","additionalParagraph":"This partnership will allow Highway Autosolutions to streamline their parts supply chain, meaning customers will benefit from quicker service and access to high-quality parts. The company is committed to maintaining transparency, reliability, and customer satisfaction as core pillars of this new venture.","tags":["Partnership","Auto Parts","Customer Satisfaction"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why don\'t cars ever get tired? Because they always get a \'brake\'!"},{"uid":"news-003","image":"/assets/img/blog/customer_satisfaction.png","type":"News","time":"8 September, 2023","title":"Customer Satisfaction at Highway Autosolutions Hits Record High","heading":"Customer Satisfaction at Highway Autosolutions Reaches an All-Time High","paragraphs":["Highway Autosolutions is proud to announce that customer satisfaction levels have hit a record high this year. Thanks to consistent efforts in providing top-notch service, efficient repairs, and unmatched customer care, the company has seen a significant increase in positive feedback from clients.","Surveys conducted over the last quarter indicate that over 95% of customers were \'highly satisfied\' with the services provided. The introduction of new diagnostic tools, faster service, and a dedicated support team has been pivotal in achieving these outstanding results."],"list":["95% of customers report high satisfaction","Faster service with new diagnostic tools","A dedicated customer support team ensuring timely responses"],"images":["/assets/blog/customer2.jpg","/assets/blog/customer.webp"],"quote":{"content":"We’ve always put our customers first, and these results are a reflection of our team\'s hard work. We\'re committed to further improving the customer experience and maintaining this high level of satisfaction.","author":{"image":"/assets/blog/user.png","name":"Emily R.","handle":"@emilyR","date":"8 September, 2023"}},"tweet":{"content":"Customer satisfaction at @HighwayAutoSolutions is at an all-time high! 95% of our clients are \'highly satisfied\' with our services. We couldn\'t be more proud! #CustomerFirst #TopService","username":"Highway Auto Solutions"},"subheading":"Dedicated to Excellence","additionalParagraph":"Highway Autosolutions continues to prioritize customer satisfaction by listening to feedback and making improvements across all aspects of the business. This focus has not only strengthened client relationships but also established the company as a trusted leader in the automotive service industry.","tags":["Customer Satisfaction","Service Quality","Top Performance"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"What’s a car’s favorite type of music? Anything with a good \'engine\' beat!"},{"uid":"news-004","image":"/assets/img/blog/smart_technology.png","type":"News","time":"9 September, 2023","title":"Revolutionizing Auto Maintenance with Smart Technology","heading":"How Smart Technology is Transforming Auto Maintenance","paragraphs":["The automotive industry is undergoing a major transformation, driven by the integration of smart technology into vehicle maintenance and repairs. From predictive diagnostics to automated service alerts, the future of car care is increasingly becoming smarter and more efficient.","Smart technology allows vehicles to self-diagnose potential issues before they become major problems. This not only reduces the cost of repairs but also enhances vehicle safety by ensuring timely maintenance."],"list":["Predictive diagnostics for preemptive repairs","Automated service alerts for routine maintenance","Enhanced vehicle safety and performance"],"images":["/assets/blog/tech1.webp","/assets/blog/tech2.webp"],"quote":{"content":"The integration of smart technology into auto maintenance is a game-changer. It allows both mechanics and vehicle owners to address issues early and ensure that cars are running at their optimal performance.","author":{"image":"/assets/blog/user.png","name":"Jennifer L.","handle":"@jenniferL","date":"9 September, 2023"}},"tweet":{"content":"The future of car maintenance is here! Smart tech is transforming the way we care for vehicles with predictive diagnostics and automated service alerts. #AutoTech #SmartMaintenance","username":"Highway Auto Solutions"},"subheading":"A Smarter Way to Maintain Your Vehicle","additionalParagraph":"As technology continues to evolve, we can expect even more innovations that will simplify the way vehicles are maintained. From connected cars to remote diagnostics, the future of auto repair will be more streamlined and customer-focused.","tags":["Smart Technology","Auto Maintenance","Innovation"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the car break up with the gas station? Because it found someone more \'electric\'!"},{"uid":"news-005","image":"/assets/img/blog/ev_impact.png","type":"News","time":"12 September, 2023","title":"The Impact of Electric Vehicles on the Auto Repair Industry","heading":"How Electric Vehicles Are Changing Auto Repair","paragraphs":["As electric vehicles (EVs) continue to rise in popularity, the auto repair industry is facing significant changes. With fewer moving parts and advanced technologies, EVs require a different approach to repairs and maintenance.","Technicians need to adapt to the new challenges posed by electric drivetrains, battery systems, and regenerative braking, transforming the landscape of traditional auto shops."],"list":["Reduced need for oil changes and exhaust repairs","Specialized training required for EV battery maintenance","Increased demand for high-tech diagnostic tools"],"images":["/assets/blog/electric.png","/assets/blog/electric1.jpg"],"quote":{"content":"Electric vehicles are the future, and so is the way we approach auto repair. Technicians need to continuously upskill to stay relevant in the rapidly evolving EV market.","author":{"image":"/assets/blog/user.png","name":"Alex K.","handle":"@alexk_auto","date":"12 September, 2023"}},"tweet":{"content":"Electric vehicles are revolutionizing the auto repair industry! From fewer moving parts to advanced diagnostic tools, the future of car care is electric. #EVRepair #AutoIndustry","username":"Highway Auto Solutions"},"subheading":"Adapting to the EV Revolution","additionalParagraph":"The shift to electric vehicles will require auto shops to invest in new tools and training programs to keep up with this revolutionary change. As more EVs hit the road, understanding their technology will be key to staying competitive.","tags":["Electric Vehicles","Auto Repair","Industry Impact"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why do electric cars make great DJs? Because they’re always plugged into the current!"},{"uid":"news-006","image":"/assets/img/blog/spy_shots.png","type":"News","time":"14 September, 2023","title":"From Spy Shots to New Releases to Auto Show Coverage","heading":"The Excitement of New Car Releases","paragraphs":["The world of automotive journalism is fueled by excitement, especially when it comes to spy shots of unreleased models, sneak peeks at new features, and in-depth auto show coverage.","Car enthusiasts and industry experts alike eagerly anticipate the unveiling of new models, innovations, and design trends that will shape the future of driving."],"list":["Leaked spy shots of top-secret car models","In-depth coverage of the latest auto shows","Exclusive insights into upcoming vehicle releases"],"images":["/assets/blog/spy.jpg","/assets/blog/spy1.webp"],"quote":{"content":"Auto shows and new car releases are a huge part of what drives innovation in the industry. Seeing what’s next is always thrilling for enthusiasts and manufacturers alike.","author":{"image":"/assets/blog/user.png","name":"Michael G.","handle":"@michaelg_auto","date":"14 September, 2023"}},"tweet":{"content":"From spy shots to auto show premieres, the car world is buzzing with excitement! Can’t wait to see what the future holds. #AutoShow #NewCars","username":"Highway Auto Solutions"},"subheading":"What’s Next for the Auto Industry?","additionalParagraph":"With every new car release comes a wave of innovation and fresh design trends. Auto shows give us a glimpse of what’s to come and how manufacturers are pushing boundaries.","tags":["Auto Shows","New Releases","Spy Shots"],"sharePlatforms":["facebook-f","twitter","instagram","rss"],"fondestMemory":"Why don’t cars play hide and seek? Because good luck hiding a vehicle that big!"},{"uid":"news-007","image":"/assets/img/blog/electric_cars_future.png","type":"News","time":"10 October, 2023","title":"Electric Cars Leading the Future","heading":"The Future of Transportation: How Electric Cars are Shaping Tomorrow","paragraphs":["Electric cars are no longer just a trend but a significant shift in the automotive industry. With advancements in technology and increasing environmental awareness, electric vehicles (EVs) are leading the charge towards a more sustainable future.","This article explores the innovations driving the electric car revolution and how they are transforming the way we think about transportation."],"list":["Advancements in battery technology","Increased range and efficiency","Government incentives and support","Growth in charging infrastructure","Impact on the environment"],"images":["/assets/blog/electrical.webp","/assets/blog/electrical2.cms"],"quote":{"content":"Electric cars represent a revolutionary change in how we approach transportation. They are not just about reducing emissions but also about redefining the future of mobility.","author":{"image":"/assets/blog/user.png","name":"Alex D.","handle":"@alexd_auto","date":"10 October, 2023"}},"tweet":{"content":"Explore how electric cars are leading the way towards a sustainable future. Discover the innovations and impacts of EVs. #ElectricCars #FutureOfTransport","username":"Highway Auto Solutions"},"subheading":"Driving Towards a Sustainable Future","additionalParagraph":"The shift towards electric vehicles is not just about adopting new technology but embracing a more sustainable way of living. As EVs become more mainstream, they promise to play a pivotal role in reducing our carbon footprint and shaping a cleaner future for transportation.","tags":["Electric Cars","Sustainability","Future Technology"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the electric car go to school? To improve its \'current\' affairs!"},{"uid":"news-008","image":"/assets/img/blog/autonomous_driving.png","type":"News","time":"15 October, 2023","title":"Advancements in Autonomous Driving","heading":"Exploring the Latest Breakthroughs in Autonomous Vehicle Technology","paragraphs":["Autonomous driving technology is rapidly advancing, with new developments pushing the boundaries of what self-driving cars can achieve. From improved sensors to advanced algorithms, these breakthroughs are setting the stage for a new era in transportation.","This article delves into the latest innovations in autonomous driving and their implications for the future of mobility."],"list":["Enhanced sensor technology","Improved machine learning algorithms","Increased safety and reliability","Integration with smart infrastructure","Regulatory and ethical considerations"],"images":["/assets/blog/Autonomous1.jpeg","/assets/blog/Autonomous2.jpg"],"quote":{"content":"The advancements in autonomous driving technology are paving the way for a future where self-driving cars become an integral part of our daily lives. These innovations promise to revolutionize how we travel.","author":{"image":"/assets/blog/user.png","name":"Jordan M.","handle":"@jordanm_auto","date":"15 October, 2023"}},"tweet":{"content":"Discover the latest breakthroughs in autonomous driving technology. How are these advancements shaping the future of mobility? #AutonomousDriving #TechInnovation","username":"Highway Auto Solutions"},"subheading":"The Future of Self-Driving Cars","additionalParagraph":"As autonomous driving technology continues to evolve, it holds the potential to transform transportation in unprecedented ways. With ongoing research and development, we are on the brink of a new era in mobility, where self-driving cars could become the norm.","tags":["Autonomous Driving","Technology","Innovation"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the autonomous car become a great comedian? It always knew the right timing!"},{"uid":"tips-001","image":"/assets/img/blog/top_maintenance_tips.png","type":"Tips","time":"20 October, 2023","title":"Top 5 Maintenance Tips for Your Car","heading":"Keep Your Car in Top Shape with These Essential Maintenance Tips","paragraphs":["Regular maintenance is key to keeping your car running smoothly and extending its lifespan. By following these essential tips, you can ensure that your vehicle remains in optimal condition and avoid costly repairs.","These maintenance tips cover everything from engine care to checking vital fluids and components."],"list":["Check and change your oil regularly","Inspect and replace air filters","Maintain proper tire pressure","Regularly check your brakes","Ensure all lights are functioning"],"images":["/assets/blog/maintenance.jpg","/assets/blog/maintenance1.webp"],"quote":{"content":"Routine maintenance is the best way to ensure your car remains reliable and performs at its best. Regular check-ups can prevent many issues before they arise.","author":{"image":"/assets/blog/user.png","name":"David R.","handle":"@davidr_auto","date":"20 October, 2023"}},"tweet":{"content":"Keep your car in top condition with these essential maintenance tips! Regular upkeep ensures a reliable ride. #CarMaintenance #AutoCare","username":"Highway Auto Solutions"},"subheading":"Essential Car Maintenance Tips","additionalParagraph":"Adopting these maintenance tips will help you keep your car running smoothly and avoid unexpected breakdowns. Regular check-ups and timely repairs are crucial for maintaining your vehicle’s performance and safety.","tags":["Car Maintenance","Auto Care","Vehicle Upkeep"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the car apply for a job? It wanted to get \'exhausted\' from working too hard!"},{"uid":"tips-002","image":"/assets/img/blog/improving_fuel_efficiency.png","type":"Tips","time":"25 October, 2023","title":"Improving Fuel Efficiency","heading":"How to Get the Most Out of Your Fuel: Tips for Better Fuel Efficiency","paragraphs":["Fuel efficiency is a major concern for many drivers, both for cost savings and environmental reasons. By implementing some simple strategies, you can improve your vehicle’s fuel economy and reduce your overall fuel consumption.","This article provides practical tips for enhancing fuel efficiency and saving money at the pump."],"list":["Drive smoothly and avoid rapid acceleration","Keep your vehicle properly maintained","Use the recommended grade of motor oil","Reduce excess weight in your car","Maintain proper tire pressure"],"images":["/assets/blog/fuel1.webp","/assets/blog/fuel2.webp"],"quote":{"content":"Improving your vehicle\'s fuel efficiency not only saves you money but also helps reduce your carbon footprint. Adopt these tips to get the most out of every gallon.","author":{"image":"/assets/blog/user.png","name":"Julia S.","handle":"@julias_auto","date":"25 October, 2023"}},"tweet":{"content":"Boost your fuel efficiency with these simple tips and save on gas while reducing emissions! #FuelEfficiency #EcoDriving","username":"Highway Auto Solutions"},"subheading":"Maximize Your Fuel Savings","additionalParagraph":"By following these fuel-saving tips, you can improve your car’s efficiency and lower your fuel costs. Regular maintenance and smart driving habits are key to getting the best mileage out of your vehicle.","tags":["Fuel Efficiency","Eco Driving","Savings"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the car break up with the gas station? It found a new ‘fuel’ of love!"},{"uid":"tips-003","image":"/assets/img/blog/winter_car_care.png","type":"Tips","time":"30 October, 2023","title":"Winter Car Care Tips","heading":"Prepare Your Vehicle for Winter: Essential Car Care Tips","paragraphs":["Winter weather can be harsh on your vehicle, making it essential to prepare your car for the cold months ahead. Proper winter car care can help prevent breakdowns and ensure your vehicle remains safe and reliable during winter conditions.","This article provides key tips for winterizing your vehicle and staying safe on the roads."],"list":["Check and replace your antifreeze","Inspect your tires and consider winter tires","Test your battery and charging system","Ensure your windshield wipers and defrosters are working","Keep an emergency kit in your car"],"images":["/assets/blog/winter1.jpg","/assets/blog/winter2.jpg"],"quote":{"content":"Preparing your car for winter is crucial for ensuring safe and reliable performance in cold weather. Follow these tips to keep your vehicle in top shape during the winter months.","author":{"image":"/assets/blog/user.png","name":"Laura B.","handle":"@laurab_auto","date":"30 October, 2023"}},"tweet":{"content":"Get your car winter-ready with these essential tips! Stay safe and ensure your vehicle performs well in cold weather. #WinterCarCare #VehicleMaintenance","username":"Highway Auto Solutions"},"subheading":"Essential Winter Maintenance Tips","additionalParagraph":"Proper winter maintenance is vital for keeping your vehicle running smoothly and safely through the colder months. Use these tips to prepare your car and avoid common winter driving issues.","tags":["Winter Car Care","Vehicle Maintenance","Safety"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the car need a blanket? It wanted to stay \'warm\' and cozy during the winter!"},{"uid":"tips-004","image":"/assets/img/blog/diy_car_repairs.png","type":"Tips","time":"5 November, 2023","title":"DIY Car Repairs","heading":"Save Money and Learn How to Fix Your Car Yourself: DIY Repair Tips","paragraphs":["Performing DIY car repairs can save you money and give you a sense of accomplishment. With the right tools and knowledge, you can tackle many common car issues yourself and keep your vehicle running smoothly.","This article provides step-by-step guides and tips for various DIY car repairs."],"list":["Change your own oil and filters","Replace spark plugs","Fix minor dents and scratches","Replace worn-out brake pads","Perform basic troubleshooting"],"images":["/assets/blog/diy.jpg","/assets/blog/diy1.webp"],"quote":{"content":"Doing your own car repairs not only saves you money but also empowers you to take control of your vehicle’s maintenance. Try these DIY tips to keep your car in top shape.","author":{"image":"/assets/blog/user.png","name":"Mark D.","handle":"@markd_auto","date":"5 November, 2023"}},"tweet":{"content":"Save money and learn to repair your car yourself with these DIY tips! #DIYCarRepairs #CarMaintenance","username":"Highway Auto Solutions"},"subheading":"Empower Yourself with DIY Repairs","additionalParagraph":"DIY car repairs can be rewarding and cost-effective. With these tips, you can handle common issues yourself and keep your vehicle in great condition without breaking the bank.","tags":["DIY Repairs","Car Maintenance","Cost Saving"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the mechanic become a chef? Because they wanted to \'cook\' up some great car repairs!"},{"uid":"tips-005","image":"/assets/img/blog/choosing_right_tires.png","type":"Tips","time":"10 November, 2023","title":"Choosing the Right Tires","heading":"How to Select the Best Tires for Your Vehicle: A Comprehensive Guide","paragraphs":["Choosing the right tires for your vehicle is crucial for ensuring optimal performance, safety, and comfort. Different types of tires are designed for specific driving conditions and vehicle types.","This article provides a comprehensive guide to help you select the best tires for your needs."],"list":["Understand the different types of tires available","Consider your driving conditions and climate","Check the tire specifications and ratings","Consult with a professional if needed","Regularly inspect and maintain your tires"],"images":["/assets/blog/tires1.jpg","/assets/blog/tires2.jpg"],"quote":{"content":"Selecting the right tires is essential for maintaining your vehicle’s safety and performance. Use this guide to make an informed decision and ensure your vehicle is equipped with the best tires for your needs.","author":{"image":"/assets/blog/user.png","name":"Nina T.","handle":"@ninat_auto","date":"10 November, 2023"}},"tweet":{"content":"Choose the right tires for your vehicle with this comprehensive guide! Stay safe and ensure optimal performance on the road. #TireSelection #VehicleSafety","username":"Highway Auto Solutions"},"subheading":"Optimize Your Vehicle\'s Performance with the Right Tires","additionalParagraph":"Proper tire selection is vital for safe driving and vehicle performance. Use these tips to choose the best tires for your specific needs and driving conditions.","tags":["Tire Selection","Vehicle Performance","Safety"],"sharePlatforms":["facebook-f","twitter","linkedin","rss"],"fondestMemory":"Why did the tire go to therapy? It needed to \'vent\' its problems!"}]}');

/***/ })

};
;