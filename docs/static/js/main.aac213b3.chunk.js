(this.webpackJsonprecipes = this.webpackJsonprecipes || []).push([[0], { 15: function (e, t, a) { }, 16: function (e, t, a) { "use strict"; a.r(t); var n = a(0), c = a(1), s = a(7), r = a.n(s), i = a(3), o = Object(c.createContext)(null), l = a(2), u = a.p + "recipes/static/media/back_slider1.0ae333e2.jpg", d = a.p + "recipes/static/media/back_slider2.f8c991af.jpg", m = a.p + "recipes/static/media/back_slider3.51e0a8c5.jpg", p = a.p + "recipes/static/media/back_slider4.b0571172.jpg", j = a.p + "recipes/static/media/back_slider5.1644d55b.jpg", g = a.p + "recipes/static/media/back_slider6.45ba1300.jpg", A = a.p + "recipes/static/media/back_slider7.b9e84570.jpg", h = a.p + "recipes/static/media/back_slider8.844a2a7c.jpg", b = a.p + "recipes/static/media/back_slider9.9004213f.jpg", f = function (e) { var t = e.bgseconds, a = void 0 === t ? 5e4 : t, s = Object(c.useState)(0), r = Object(i.a)(s, 2), o = r[0], l = r[1], f = [u, d, m, p, j, g, A, h, b]; return Object(c.useEffect)((function () { var e = setTimeout((function () { o === f.length - 1 ? l(0) : l(o + 1) }), 1e3 * a); return function () { clearTimeout(e) } }), [o, l, f.length, a]), Object(n.jsx)("div", { className: "background-slider", style: { backgroundImage: "url(".concat(f[o], ")") }, children: f.map((function (e, t) { return Object(n.jsx)("img", { className: "img-desc", src: f[t], alt: "bg" }, e) })) }) }, v = a(4), O = function (e) { var t = e.i, a = e.showMore, s = e.labelsArray, r = e.namesArray, i = e.valuesArray, u = e.handleInputChange, d = Object(c.useContext)(o), m = d.formState, p = d.setFormState; return Object(n.jsxs)("div", { id: "field-".concat(r[t]), className: "input-field", style: { width: "".concat(t % 2 === 0 ? 38 : 62, "%"), order: "".concat(a && 12 === t ? 8 : t + 1), visibility: "".concat(a && t >= 8 && 12 !== t ? "hidden" : "unset") }, children: [Object(n.jsx)("label", { htmlFor: "input-".concat(r[t]), title: 0 === t || 12 === t ? "Required" : void 0, onMouseEnter: function () { return function (e) { p(Object(l.a)(Object(l.a)({}, m), {}, { labelFormNum: e, showLD: !0 })) }(t) }, onMouseLeave: function () { return function (e) { p(Object(l.a)(Object(l.a)({}, m), {}, { labelFormNum: e, showLD: !1 })) }(t) }, children: s[t] }), Object(n.jsx)("input", { id: "input-".concat(r[t]), className: "input-food", type: "".concat(t < 7 ? "text" : "number"), name: r[t], value: i[t], max: "".concat(12 === t ? 8 : void 0), min: "".concat(12 === t ? 1 : void 0), maxLength: "250", autoComplete: "off", required: 0 === t || 12 === t, onChange: u })] }) }, x = a(6), y = a.n(x), w = a(8), N = function () { var e = Object(w.a)(y.a.mark((function e() { var t, a, n, c, s, r, i, o, l, u, d, m, p, j, g, A, h, b, f, v, O, x, w, N, R = arguments; return y.a.wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: return t = R.length > 0 && void 0 !== R[0] ? R[0] : [], a = "".concat("" === t[0].value ? "" : "&query=".concat(t[0].value)), n = "".concat("" === t[1].value ? "" : "&intolerances=".concat(t[1].value)), c = "".concat("" === t[2].value ? "" : "&type=".concat(t[2].value)), s = "".concat("" === t[3].value ? "" : "&includeIngredients=".concat(t[3].value)), r = "".concat("" === t[4].value ? "" : "&cuisine=".concat(t[4].value)), i = "".concat("" === t[5].value ? "" : "&excludeIngredients=".concat(t[5].value)), o = "".concat("" === t[6].value ? "" : "&diet=".concat(t[6].value)), l = "".concat("" === t[7].value ? "" : "&maxReadyTime=".concat(t[7].value)), u = "".concat("" === t[8].value ? "" : "&maxCalories=".concat(t[8].value)), d = "".concat("" === t[9].value ? "" : "&minCalories=".concat(t[9].value)), m = "".concat("" === t[10].value ? "" : "&maxSugar=".concat(t[10].value)), p = "".concat("" === t[11].value ? "" : "&minSugar=".concat(t[11].value)), j = "".concat("" === t[12].value ? "" : "&number=".concat(parseFloat(t[12].value) > 8 ? 8 : t[12].value)), g = encodeURI(a + n + c + s + r + i + o + l + u + d + m + p + j), A = "https://api.spoonacular.com/recipes/complexSearch?apiKey=".concat("d158f3b298824b74be20913b4930a302", "&addRecipeInformation=true").concat(g), e.next = 6, fetch(A); case 6: return h = e.sent, e.next = 9, h.json().catch(console.error); case 9: return b = e.sent, e.next = 12, b; case 12: return f = e.sent, v = f.results, O = f.totalResults, x = f.code, w = f.message, N = null === v || void 0 === v ? void 0 : v.map((function (e) { return { vegetarian: e.vegetarian, vegan: e.vegan, glutenFree: e.glutenFree, dairyFree: e.dairyFree, veryHealthy: e.veryHealthy, gaps: e.gaps, lowFodmap: e.lowFodmap, title: e.title, readyInMinutes: e.readyInMinutes, servings: e.servings, sourceUrl: e.sourceUrl, image: e.image, dishTypes: e.dishTypes, diets: e.diets, analyzedInstructions: e.analyzedInstructions } })), e.abrupt("return", { results: v, data: N, totalResults: O, code: x, message: w }); case 19: case "end": return e.stop() } }), e) }))); return function () { return e.apply(this, arguments) } }(), R = function (e) { var t = e.containerRef, a = e.potCoverContRef, s = e.potCoverRef, r = Object(c.useContext)(o), u = r.formState, d = r.setFormState, m = r.resetCounter, p = u.showMore, j = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object(c.useState)(e), a = Object(i.a)(t, 2), n = a[0], s = a[1]; return [n, function (e) { var t = e.target; s(Object(l.a)(Object(l.a)({}, n), {}, Object(v.a)({}, t.name, t.value))) }, function () { s(e) }] }({ query: "", intolerances: "", type: "", includeIngredients: "", cuisine: "", excludeIngredients: "", diet: "", maxReadyTime: "", maxCalories: "", minCalories: "", maxSugar: "", minSugar: "", quantity: "" }), g = Object(i.a)(j, 3), A = g[0], h = g[1], b = g[2], f = A.query, x = A.type, y = A.cuisine, w = A.diet, R = A.intolerances, E = A.includeIngredients, M = A.excludeIngredients, L = A.maxReadyTime, I = A.maxCalories, S = A.minCalories, C = A.maxSugar, D = A.minSugar, k = A.quantity, B = ["Food*:", "Intolerances :", "Type :", "Include Ingredients :", "Cuisine :", "Exclude Ingredients :", "Diet :", "Max Ready Time :", "Max Calories :", "Min Calories :", "Max Sugar :", "Min Sugar :", "Quantity*:"], F = ["query", "intolerances", "type", "includeIngredients", "cuisine", "excludeIngredients", "diet", "maxReadyTime", "maxCalories", "minCalories", "maxSugar", "minSugar", "quantity"], T = [f, R, x, E, y, M, w, L, I, S, C, D, k], z = Array.apply(null, Array(13)).map((function (e, t) { return t })), U = function (e) { e.stopPropagation(), d(Object(l.a)(Object(l.a)({}, u), {}, { showMore: !p })) }; return Object(n.jsxs)("form", { onSubmit: function (e) { e.preventDefault(), d(Object(l.a)(Object(l.a)({}, u), {}, { loading: !0 })), setTimeout((function () { m(0), N(e.target).then((function (e) { var t = e.results, n = void 0 === t ? 1 : t, c = e.data, r = void 0 === c ? [] : c, i = e.totalResults, o = void 0 === i ? 1 : i, m = e.code, p = e.message; d(Object(l.a)(Object(l.a)({}, u), {}, { loading: !1, showSparkles: !1, howManyCards: n.length, data: r })), setTimeout((function () { p || 0 === o || (s.current.classList.toggle("remove-pot-top"), a.current.classList.toggle("remove-pt-cont"), b()), 0 === o && d(Object(l.a)(Object(l.a)({}, u), {}, { showErrorApi: !0, errorApiNum: 0 })), 401 === m && d(Object(l.a)(Object(l.a)({}, u), {}, { showErrorApi: !0, errorApiNum: 1 })), 402 === m && d(Object(l.a)(Object(l.a)({}, u), {}, { showErrorApi: !0, errorApiNum: 2 })), 404 === m && d(Object(l.a)(Object(l.a)({}, u), {}, { showErrorApi: !0, errorApiNum: 3 })) }), 500) })).catch(console.error) }), 2e3), t.current.classList.toggle("animate-container-results"), t.current.classList.remove("animate-container-goback") }, style: { height: "".concat(p ? 264 : 385, "px") }, children: [z.map((function (e) { return Object(n.jsx)(O, { i: e, showMore: p, labelsArray: B, namesArray: F, valuesArray: T, handleInputChange: h }, e) })), Object(n.jsx)("button", { onClick: function (e) { e.stopPropagation() }, children: "Go!" }), Object(n.jsx)("div", { className: "shower-cont", children: p ? Object(n.jsx)("span", { className: "show-span", onClick: U, children: "Show more..." }) : Object(n.jsx)("span", { className: "show-span", onClick: U, children: "Show less" }) })] }) }, E = a.p + "recipes/static/media/vegetarian.43feafe3.png", M = a.p + "recipes/static/media/vegan.aa84e8a0.png", L = a.p + "recipes/static/media/glutenFree.12342bc4.png", I = a.p + "recipes/static/media/dairyFree.886c5192.png", S = a.p + "recipes/static/media/veryHealthy.ca4e6640.png", C = a.p + "recipes/static/media/gaps.07b0056b.png", D = a.p + "recipes/static/media/lowFodmap.d72db7f7.png", k = "data:image/png;base64,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", B = a.p + "recipes/static/media/dividerLine.5ec298a4.png", F = a.p + "recipes/static/media/shinyGif.08fb8b33.gif", T = a.p + "recipes/static/media/vHtitle.c1680e24.png", z = function (e) { var t, a = e.i, s = e.passlRef, r = e.passrRef, u = Object(c.useContext)(o), d = u.formState, m = u.setFormState, p = u.counter, j = d.howManyCards, g = d.changeShow, A = d.showSparkles, h = Object(c.useRef)(null), b = Object(c.useRef)(null), f = Object(c.useRef)(null), v = Object(c.useRef)(null), O = Object(c.useRef)(null), x = Object(c.useRef)(null), y = function () { var e = Object(c.useContext)(o).formState.data, t = e.map((function (e) { return e.vegetarian })), a = e.map((function (e) { return e.vegan })), n = e.map((function (e) { return e.glutenFree })), s = e.map((function (e) { return e.dairyFree })), r = e.map((function (e) { return e.gaps })), i = e.map((function (e) { return e.lowFodmap })); return [t, a, n, s, e.map((function (e) { return e.veryHealthy })), r, i, e.map((function (e) { return e.title })), e.map((function (e) { return e.readyInMinutes })), e.map((function (e) { return e.servings })), e.map((function (e) { return e.sourceUrl })), e.map((function (e) { return e.image })), e.map((function (e) { return e.dishTypes.join(", ") })), e.map((function (e) { return e.diets.join(", ") })), e.map((function (e) { var t; return null === (t = e.analyzedInstructions[0]) || void 0 === t ? void 0 : t.steps.map((function (e) { var t; return null === (t = e.ingredients) || void 0 === t ? void 0 : t.map((function (e) { return e.name })) })) }))] }(), w = Object(i.a)(y, 15), N = w[0], R = w[1], z = w[2], U = w[3], G = w[4], V = w[5], J = w[6], P = w[7], Q = w[8], q = w[9], Z = w[10], W = w[11], H = w[12], Y = w[13], K = null === (t = w[14][a]) || void 0 === t ? void 0 : t.map((function (e) { return e.join(", ") })), X = null === K || void 0 === K ? void 0 : K.join(", ").replace(/, , /g, ", ").replace(/, , /g, ", "), _ = function (e, t) { f.current.style.left = e, v.current.innerText = t }, $ = function () { f.current.style.left = 0 }; return Object(n.jsxs)("div", { ref: h, className: "card-slider transition-cardc ".concat(p === a + 1 ? "box-shadow1 cursorp" : "box-shadow3"), style: { zIndex: "".concat(100 - a), transform: "".concat(p === a + 1 ? "translate(".concat(454 - 24 * a, "px , 0)") : "scale(".concat(1 - .007 * a, ") rotateX(4deg) rotateY(60deg) translate(0, ").concat(-6 * a, "px)")), marginLeft: "".concat(0 === a ? -(512 - (j - 2) * (1608 / 70 + 201 / 70)) : -296, "px") }, onClick: function () { p === a + 1 && (g ? (h.current.classList.add("box-shadow1"), h.current.classList.remove("box-shadow2")) : (h.current.classList.remove("box-shadow1"), h.current.classList.add("box-shadow2")), h.current.style.transform = "".concat(g ? "translate(".concat(454 - 24 * a - (0 - 0 * a), "px , 0)") : "scale(1.5) translate(".concat(172 + -21.1 / (4 / 3) * a, "px, 0px)")), h.current.style.zIndex = "".concat(g ? 100 - a : 500), h.current.classList.toggle("cursorp"), h.current.classList.toggle("transition-cards"), h.current.classList.toggle("transition-cardc"), s.current.classList.toggle("passl-open"), r.current.classList.toggle("passr-open"), b.current.classList.toggle("show"), m(Object(l.a)(Object(l.a)({}, d), {}, { changeShow: !g }))) }, children: [Object(n.jsxs)("div", { className: "cs-wrapper", children: [Object(n.jsxs)("div", { className: "title-recipe".concat(p === a + 1 && g ? " tr-hover" : ""), style: { backgroundImage: "url(".concat(W[a], ")") }, children: [Object(n.jsxs)("div", { className: "diet-slide-wrapper", children: [Object(n.jsx)("span", { ref: v, className: "diet-selected" }), Object(n.jsx)("div", { ref: f, className: "diet-slide-cont", children: Object(n.jsx)("div", { className: "diet-slide".concat(p === a + 1 && g ? " tr-hover2" : ""), style: { backgroundImage: "url(".concat(W[a], ")") } }) }), Object(n.jsxs)("div", { className: "healthy-sign", children: [Object(n.jsx)("img", { ref: O, className: "hs-gif", src: F, alt: "Shiny Gif" }), Object(n.jsx)("img", { ref: x, className: "hs-title", src: T, alt: "Very Healthy" })] })] }), Object(n.jsx)("h3", { children: P[a] }), Object(n.jsxs)("div", { className: "diets-stars", children: [N[a] && Object(n.jsx)("img", { src: E, alt: "vegetarian", onMouseEnter: function () { return _("134px", "Vegetarian") }, onMouseLeave: $ }), R[a] && Object(n.jsx)("img", { src: M, alt: "vegan", onMouseEnter: function () { return _("92px", "Vegan") }, onMouseLeave: $ }), z[a] && Object(n.jsx)("img", { src: L, alt: "glutenFree", onMouseEnter: function () { return _("140px", "Gluten Free") }, onMouseLeave: $ }), U[a] && Object(n.jsx)("img", { src: I, alt: "dairyFree", onMouseEnter: function () { return _("130px", "Dairy Free") }, onMouseLeave: $ }), "yes" === V[a] && Object(n.jsx)("img", { src: C, alt: "gaps", onMouseEnter: function () { return _("80px", "Gaps") }, onMouseLeave: $ }), J[a] && Object(n.jsx)("img", { src: D, alt: "lowFodmap", onMouseEnter: function () { return _("150px", "Low Fodmap") }, onMouseLeave: $ })] }), Object(n.jsx)("img", { ref: b, className: "close", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfkDBsQLQQ4iPMtAAAEPUlEQVR42u3bT2gcZRjH8e/stiZg2k0jqa0YRbG6nkqgoK05VNGTmnoQ1KI5BUHQgyDYq4dAoUIDwUNQxK6CPUhpe1LBPxeLimB6EEpFDLRrMW222saEZN15POw0m83O7sy877zzDvL+9pLNzuw+H2ay8z5v5gUXFxcXFwvxIl7vZ4gBClZrFJa5zpI6pMwhHud+BiK5prPCJc5xmp9oJN21xBHmkVw9rjLDSDLGbk7SQPDxrZfffNyq5Dv2hpccdtKUmOUFBPDwWWAx+QFNNQVK7GJrUNGPHOa3eJAjTOEBHueZ5Vuu4VuFeJTYxyRPUEDwqPAqq9G7lZlH8BHOcJ9VQHt2ME0dH2GJp+Ps8HbAmMsVA2Abp4LaPqYYtXE/nyP4NHjNdt0hOcjfCMKv3B216V1cRBCu8LDtqkNS4gcE4QYHNr+0+Zo9wAAAi1yzXXVI/qEKCH0MRkEKwfdYw/I3VXh81oKfOv5G7I6iUoyD5C0Okrc4SN7iIHmLg+Qt+pBRxjVnWfbzlH3IKB/yEa9ovMMYJzjBuD6lPWWuIAjnuSMW42cEYZEJZcYFBKHKoRhbFziJ4LPKs50v6WSEewFhiONKlDE+4CEEGGaPViUdSXZEPCZYDPro5EeleTR8hFXeoS/GHj2OiB4EUKa0M26LtY9RiBpFhWEckpyixsgAkoyiysgEEp+izsgIEo+iw8gMEk3RY2QI6U3RZWQK6U7RZ2QMCaekwcgc0klJh2EBspGywBS/pMKwAtlIkZQYPSFbNMvtngrwLsMIAB4rHGNqfTY99Zjs2Su8v+HZFxw1xzALGeO5Dc8O8LzBzzJ4at3q/poTE8JOpvGomPo4U0ekxVjhNAt4Gg2xRUiLscYxDvMWNfOU9qTx9Rt2+dPp7VvJ9DrS7SqeBiVDSK/BiD4lM0jUmEqXkhEkztBQj5IJJO4IV4eSASTJQF2dYhyStN9QpRiGqLRNahSjENXuT4ViEKLTxCanGIPs56JW99ei1HhZD6I3jG/epuaxxlGl7q8CHGcI6Ge7ViUdSXpqjVNlTasXn6DGMm9G326J0Z79LB57mNFoYiv4bGdW9yZp/Q7xjPY7fKL9DrgbBvIXB8lbHCRvcZC8xUHylv8tRNZ/b3sRZVi89bFhx6KQzZBlVgAoUbJddUj62Ql41LkZBbnOJUDYxT7bVYfkQcoA1KhGQZY4B8BWJtlhu+5NKTIZ/E9yjsvRmz/C1WDd2zTbbNfexniDJQSferypiiIzwYRAnVMcpMQWipYftzPKewFD+LJzqVj4EtcRPuWxYGXsDS7wB/9aPRYFhikzDAge87zE93F33Rus98vL2unW+unfeabbiRSWP/mGQR4I5kYE22kugW7wFa/zdfdNwtPHk7zIo9xJn+WLo1CnxhyfcZa/elm7p8hu7mEw1pyTufjcpMrlOEu/XVxcXFxc1PIfwFKmi/vo3ZMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMjdUMTY6NDQ6NTcrMDA6MDA9Fe5OAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTI3VDE2OjQ0OjU3KzAwOjAwTEhW8gAAAABJRU5ErkJggg==", alt: "X" })] }), Object(n.jsxs)("div", { className: "para-cont", children: [q[a] && Object(n.jsxs)("div", { className: "line-info-recipe", children: [Object(n.jsx)("img", { src: k, alt: "chefHat" }), Object(n.jsx)("span", { className: "info-recipe-e", children: "".concat(q[a], " Servings") })] }), Q[a] && Object(n.jsxs)("div", { className: "line-info-recipe", children: [Object(n.jsx)("img", { src: k, alt: "chefHat" }), Object(n.jsx)("span", { className: "info-recipe-e", children: "Ready in ".concat(Q[a], " minutes") })] }), H[a] && Object(n.jsxs)("div", { className: "line-info-recipe", children: [Object(n.jsx)("img", { src: k, alt: "chefHat" }), Object(n.jsx)("span", { className: "info-recipe-e", children: "For ".concat(H[a]) })] }), Y[a] && Object(n.jsxs)("div", { className: "line-info-recipe", children: [Object(n.jsx)("img", { src: k, alt: "chefHat" }), Object(n.jsx)("span", { className: "info-recipe-e", children: "".concat(Y[a], " Diet") })] }), X && Object(n.jsxs)("div", { className: "line-info-recipe", children: [Object(n.jsx)("img", { src: k, alt: "chefHat" }), Object(n.jsx)("span", { className: "", children: "Some ingredients: ".concat(X) })] }), Object(n.jsx)("span", { className: "full-recipe", children: Object(n.jsx)("a", { href: Z[a], target: "_blank", rel: "noreferrer", children: "Full Recipe..." }) }), G[a] && Object(n.jsx)("img", { className: "very-healthy", src: S, alt: "veryHealthy", onMouseEnter: function () { O.current.classList.toggle("hs-gif-opacity"), x.current.classList.toggle("hs-title-width"), b.current.style.transition = "none", b.current.style.zIndex = "3" }, onMouseLeave: function () { O.current.classList.toggle("hs-gif-opacity"), x.current.classList.toggle("hs-title-width"), b.current.style.transition = "z-index 0.5s ease", b.current.style.zIndex = "5" } })] }), Object(n.jsx)("img", { className: "divider-line", src: B, alt: "DividerLine" })] }), Object(n.jsx)("div", { className: "shadow-card ".concat(p === a + 1 ? "transition-shadowcardc" : "transition-shadowcards box-shadow4"), style: { zIndex: "".concat(g && p === a + 1 ? 1 : 4) } }), Object(n.jsx)("div", { className: "sparkles-card".concat(A ? "" : " sparkles-card-opacity"), style: { zIndex: "".concat(g && p === a + 1 ? 1 : 3) } })] }) }, U = a.p + "recipes/static/media/pass_i2.c3ae128c.svg", G = a.p + "recipes/static/media/pass_d2.1c8fca8e.svg", V = function () { var e = Object(c.useContext)(o), t = e.formState, a = e.cantCards, s = e.counter, r = e.increment, i = e.decrement, l = e.resetCounter, u = e.resetn, d = e.n, m = t.changeShow, p = Object(c.useRef)(null), j = Object(c.useRef)(null), g = function (e) { m || (e ? r(1) : i(1), 0 !== s || e ? s === d && e && l() : u()) }; return Object(n.jsx)("div", { className: "slide", children: Object(n.jsxs)("div", { className: "slide-cent", children: [Object(n.jsx)("div", { className: "cont", style: { transform: "scale(".concat(.5 * window.innerWidth / 1e3, ")") }, children: a.map((function (e) { return Object(n.jsx)(z, { i: e, passlRef: p, passrRef: j }, e) })) }), Object(n.jsx)("img", { ref: p, className: "btnld", src: U, alt: "<", onClick: function () { return g(!1) } }), Object(n.jsx)("img", { ref: j, className: "btnrd", src: G, alt: ">", onClick: function () { return g(!0) } })] }) }) }, J = ["The (natural language) recipe search query.", "A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.", "The type of recipe.", "A comma-separated list of ingredients that should/must be used in the recipes.", "The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR').", "A comma-separated list of ingredients or ingredient types that the recipes must not contain.", "The diet for which the recipes must be suitable.", "The maximum time in minutes it should take to prepare and cook the recipe.", "The maximum amount of calories the recipe can have.", "The minimum amount of calories the recipe must have.", "The maximum amount of sugar in grams the recipe can have.", "The minimum amount of sugar in grams the recipe must have.", "The number of expected results (between 2 and 8)."], P = [!1, !0, !0, !1, !0, !1, !0, !1, !1, !1, !1, !1, !1], Q = ["", ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"], ["Main course", "Side dish", "Dessert", "Appetizer", "Salad", "Bread", "Breakfast", "Soup", "Beverage", "Sauce", "Marinade", "Fingerfood", "Snack", "Drink"], "", ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"], "", ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"], "", "", "", "", "", ""], q = a.p + "recipes/static/media/potCover.c5bda738.png", Z = a.p + "recipes/static/media/loading.90475bed.gif", W = a.p + "recipes/static/media/choppingPlate.f6e1ccd3.png", H = a.p + "recipes/static/media/goBack.7ace336b.png", Y = ["Spoonacular API has not found matches for your search. Please try again.", "The Spoonacular 's API key has expired, please contact the application owner.", "The Spoonacular's free API key has reached the limit of queries, please try tomorrow again.", "It seems like API is not working properly."], K = function () { var e = Object(c.useContext)(o), t = e.formState, a = e.setFormState, s = t.loading, r = t.changeShow, i = t.labelFormNum, u = t.showLD, d = t.showErrorApi, m = t.errorApiNum, p = Object(c.useRef)(null), j = Object(c.useRef)(null), g = Object(c.useRef)(null), A = Object(c.useRef)(null), h = Object(c.useRef)(null), b = Object(c.useRef)(null); return Object(n.jsxs)("section", { id: "wrapper", children: [Object(n.jsxs)("div", { ref: p, className: "container", children: [Object(n.jsxs)("div", { className: "result-side", children: [Object(n.jsx)(V, {}), Object(n.jsx)("div", { ref: j, className: "pot-cover-cont", children: Object(n.jsx)("img", { ref: g, className: "pot-cover", src: q, alt: "potCover" }) }), !r && Object(n.jsxs)("div", { ref: A, className: "gb-cont", onMouseEnter: function () { A.current.classList.toggle("show-choppingt"), h.current.classList.toggle("show-goback") }, onMouseLeave: function () { A.current.classList.toggle("show-choppingt"), h.current.classList.toggle("show-goback") }, onClick: function () { p.current.classList.toggle("animate-container-results"), p.current.classList.toggle("animate-container-goback"), b.current.classList.toggle("show-btd"), setTimeout((function () { d || (g.current.classList.toggle("remove-pot-top"), j.current.classList.toggle("remove-pt-cont")), b.current.classList.toggle("show-btd"), a(Object(l.a)(Object(l.a)({}, t), {}, { showSparkles: !0, howManyCards: 8, showErrorApi: !1 })) }), 1600), a(Object(l.a)(Object(l.a)({}, t), {}, { showErrorApi: !1 })) }, children: [Object(n.jsx)("img", { className: "chopping-plate", src: W, alt: "Chopping Plate" }), Object(n.jsx)("div", { ref: h, className: "go-back-cont", children: Object(n.jsx)("img", { className: "go-back", src: H, alt: "Go Back" }) })] }), Object(n.jsx)("div", { className: "error-api-message".concat(d ? " error-api-show" : ""), children: Object(n.jsx)("p", { children: Y[m] }) })] }), Object(n.jsxs)("div", { className: "set-side", children: [Object(n.jsxs)("div", { className: "set-cont", children: [Object(n.jsxs)("div", { className: "set-info", children: [Object(n.jsx)("h2", { children: "Nando Recipes" }), Object(n.jsx)("p", { className: "principal-p", children: "Hi! Search through hundreds of thousands of recipes using advanced filtering and ranking!" }), Object(n.jsx)(R, { containerRef: p, potCoverContRef: j, potCoverRef: g })] }), Object(n.jsxs)("div", { className: "label-description".concat(u ? " ld-show" : ""), children: [Object(n.jsx)("p", { className: "lb-content", children: J[i] }), P[i] && Object(n.jsx)("ul", { className: "ul-label-cont", children: Q[i].map((function (e, t) { return Object(n.jsx)("li", { style: { animationDuration: "".concat(.08 + .04 * t, "s") }, className: "li-label-content".concat(u ? " ld-li-show" : ""), children: e }, t) })) }, i)] })] }), Object(n.jsx)(f, { bgseconds: 20 })] }), s && Object(n.jsx)("div", { className: "loading", children: Object(n.jsx)("img", { src: Z, alt: "loading..." }) })] }), Object(n.jsx)("div", { ref: b, className: "black-transition-div" })] }) }, X = function () { var e = Object(c.useState)({ showMore: !0, loading: !1, howManyCards: 8, changeShow: !1, showSparkles: !0, labelFormNum: 0, showLD: !1, showErrorApi: !1, errorApiNum: 0, data: [] }), t = Object(i.a)(e, 2), a = t[0], s = t[1], r = a.howManyCards, l = Array.apply(null, Array(r)).map((function (e, t) { return t })), u = l.length, d = function (e) { var t = e.init, a = void 0 === t ? 0 : t, n = e.n, s = void 0 === n ? 0 : n, r = Object(c.useState)(a), o = Object(i.a)(r, 2), l = o[0], u = o[1]; return { counter: l, increment: function () { u(l + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)) }, decrement: function () { u(l - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)) }, resetCounter: function () { u(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1) }, resetn: function () { u(s) } } }({ init: 0, n: u }), m = d.counter, p = d.increment, j = d.decrement, g = d.resetCounter, A = d.resetn; return Object(n.jsx)(o.Provider, { value: { formState: a, setFormState: s, cantCards: l, counter: m, increment: p, decrement: j, resetCounter: g, resetn: A, n: u }, children: Object(n.jsx)(K, {}) }) }; a(15); r.a.render(Object(n.jsx)(X, {}), document.getElementById("root")) } }, [[16, 1, 2]]]);
//# sourceMappingURL=main.aac213b3.chunk.js.map