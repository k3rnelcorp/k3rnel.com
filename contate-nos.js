! function n(a, s, c) {
    function u(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (l) return l(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var o = s[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function (e) {
                return u(a[t][1][e] || e)
            }, o, o.exports, n, a, s, c)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
    return u
}({
    1: [function (e, t, i) {
        "use strict";

        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
        var o = function () {
            function n(e, t, i) {
                var r = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), a(this, "getRenderModel", function () {
                    return {}
                }), a(this, "triggerWindowEvent", function () {
                    r.recheckMode && r.recheckMode()
                }), this.isRuntimeSite = t.isRuntimeSite, this.builderApi = e, this.currentElementWidth = 0, this.checkTimeout = 0;
                var o = !this.editor && window.self !== window.top;
                this.resizeWaitTimeout = o ? 0 : 300, "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [], window._zoomUpdateEvents.push(this.triggerWindowEvent))
            }
            return function (e, t, i) {
                t && r(e.prototype, t), i && r(e, i)
            }(n, [{
                key: "registerWindowEvent",
                value: function () {}
            }, {
                key: "unregisterWindowEvent",
                value: function () {
                    if ("undefined" != typeof window && window._zoomUpdateEvents) {
                        var e = window._zoomUpdateEvents.indexOf(this.triggerWindowEvent);
                        0 <= e && window._zoomUpdateEvents.splice(e, 1)
                    }
                }
            }, {
                key: "dispose",
                value: function () {
                    this.recheckMode = null, this.unregisterWindowEvent()
                }
            }, {
                key: "afterRender",
                value: function (e, t) {
                    var i = this,
                        r = t.querySelector(".navigation") || t,
                        o = r.querySelectorAll("li");
                    (o || o.length) && (this.checkMobileMode(r), this.setHeaderHeight(e, t), window.addEventListener("resize", function () {
                        i.__resizeTimeout && window.clearTimeout(i.__resizeTimeout), i.__resizeTimeout = window.setTimeout(function () {
                            i.checkMobileMode(r), i.setHeaderHeight(e, t)
                        }, i.resizeWaitTimeout)
                    }), this.recheckMode = this.builderApi.debounce(function () {
                        i.checkMobileMode(r), i.setHeaderHeight(e, t)
                    }, 300))
                }
            }, {
                key: "setHeaderHeight",
                value: function (e, t) {
                    if (!e.model.cover && this.isRuntimeSite && t.parentElement) {
                        var i = t.parentElement.querySelector(".header-container");
                        if (i) {
                            var r = t.parentElement.querySelector(".kv-check-scroll");
                            if (!r) return;
                            var o, n = r.clientHeight,
                                a = r.children[0].clientHeight;
                            o = r === i ? a : Math.max(n, a), i.style.minHeight = "".concat(o, "px")
                        }
                    }
                }
            }, {
                key: "getNavigationWidth",
                value: function (e) {
                    var t = 0;
                    return e.forEach(function (e) {
                        t += e.offsetWidth
                    }), t + 40
                }
            }, {
                key: "determineContainerWidth",
                value: function (e, t) {
                    var i = e.querySelector("nav") || e,
                        r = e.querySelector('[data-dynamic-navigation-element="logo"]'),
                        o = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),
                        n = o ? o.offsetWidth : 0,
                        a = r ? r.offsetWidth : 0,
                        s = i.offsetWidth - n;
                    return {
                        containerSize: s,
                        logoWidth: a,
                        ctaWidth: n,
                        headerWith: e.offsetWidth,
                        navigationToWide: t + a + n >= e.offsetWidth - 20,
                        headerToWide: s + a >= e.offsetWidth
                    }
                }
            }, {
                key: "shouldMinimizeMenu",
                value: function (e) {
                    if (window.innerWidth < 991) return !0;
                    var t = e.querySelectorAll("li");
                    this.currentElementWidth = this.getNavigationWidth(t);
                    var i = this.determineContainerWidth(e, this.currentElementWidth),
                        r = i.containerSize,
                        o = i.headerToWide,
                        n = i.navigationToWide;
                    return r < 100 || o || n
                }
            }, {
                key: "checkMobileMode",
                value: function (e) {
                    var t = document.querySelector("section") || e,
                        i = document.querySelector(".check-mobile");
                    if (i = i || e, window.innerWidth < 991) i.classList.contains("mobile") || i.classList.add("mobile");
                    else {
                        i.classList.remove("mobile");
                        var r = this.shouldMinimizeMenu(t),
                            o = i.classList;
                        r && o.add("mobile"), r || o.remove("mobile")
                    }
                }
            }, {
                key: "updateProperty",
                value: function () {}
            }]), n
        }();
        window.__features = window.__features || {}, window.__features.navigation = o
    }, {}]
}, {}, [1]),
function n(a, s, c) {
    function u(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (l) return l(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var o = s[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function (e) {
                return u(a[t][1][e] || e)
            }, o, o.exports, n, a, s, c)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
    return u
}({
    1: [function (e, t, i) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var n = function () {
            function t(e) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.builderApi = e, this.localStorageHelper = this.builderApi.localStorageHelper, this.isTestMode = window.self !== window.top || !!e.editor, this.useLocalStorage = this.localStorageHelper.supportsLocalStorage && !this.isTestMode, this.promoCodeClass = "show-promo-code"
            }
            return function (e, t, i) {
                t && o(e.prototype, t), i && o(e, i)
            }(t, [{
                key: "validateForm",
                value: function (e) {
                    var o = this,
                        n = {
                            data: [],
                            errors: []
                        };
                    return e.forEach(function (e) {
                        var t = e.getAttribute("id"),
                            i = e.value,
                            r = e.dataset.namelabel;
                        if (!t.includes("g-recaptcha-response"))
                            if ("fieldSubscribe" === t && (i = "none" === e.style.display || e.checked), o.isEmpty(i)) n.errors.push({
                                key: t,
                                errorMessage: "required"
                            });
                            else {
                                if ("fieldEmail" === t) {
                                    i = "string" == typeof i && i.replace(/\s+/g, "");
                                    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(i).toLowerCase())) return void n.errors.push({
                                        key: t,
                                        errorMessage: "invalidEmail"
                                    });
                                    i = i.replace(/\s+/g, "")
                                }
                                n.data.push({
                                    name: r,
                                    field: t,
                                    value: i,
                                    type: o.mapInputType(t)
                                })
                            }
                    }), n
                }
            }, {
                key: "showSuccesMessage",
                value: function (e) {
                    var t = e.querySelector(".contact-form-success");
                    t && t.classList.add("show"), this.setButtonState(e.querySelector(".button.submit"), this.builderApi.localize("editorTemplates.features.subscription.sent")), e.classList.add(this.promoCodeClass)
                }
            }, {
                key: "handlePreview",
                value: function (e) {
                    var t = e.querySelector(".form-container") || e;
                    if (t) {
                        var i = document && document.createElement("div");
                        i.className = "preview-form-container", i.innerHTML = this.builderApi.localize("editorTemplates.features.form.preview.message"), t.appendChild(i)
                    }
                }
            }, {
                key: "submitForm",
                value: function (e, r, t, o, i, n) {
                    var a = this,
                        s = 5 < arguments.length && void 0 !== n ? n : {};
                    if (!this.editor && window.self !== window.top) return this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.form.preview.button")), void this.handlePreview(r);
                    var c = window._site && window._site.siteId || "",
                        u = "/v1.0/contactform";
                    100 <= (window._site && window._site.partnerId || 0) && (u = "dev" === i.env.env || "latest" === i.env.env ? "https://hostingapi.latest.mywebsitebuilder.com" + u : "qa" === i.env.env ? "https://hostingapi.qa.mywebsitebuilder.com" + u : "uat" === i.env.env ? "https://hostingapi.uat.mywebsitebuilder.com" + u : "https://hostingapi.mywebsitebuilder.com" + u);
                    var l = r.querySelector("form"),
                        d = r.querySelector(".hidden-form-data").dataset.sectionid,
                        f = !!r.querySelector('[data-type="subscribe"]'),
                        p = !!r.querySelector('[data-type="promotion"]'),
                        h = {
                            fields: e,
                            site_id: c,
                            recaptcha_code: t,
                            section_id: d,
                            form_id: d,
                            is_subscription: f || p
                        };
                    this.setButtonState(o.target, this.builderApi.localize("editorTemplates.features.subscription.sending")), i.fetch(u, {
                        method: "POST",
                        body: JSON.stringify(h),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(function (e) {
                        if (!e.ok) throw new Error(e.statusText);
                        var t = r.querySelector(".contact-form-success"),
                            i = r.closest("section");
                        t && t.classList.add("show"), a.setButtonState(o.target, a.builderApi.localize("editorTemplates.features.subscription.sent")), l.reset(), s.promoCode ? (a.useLocalStorage && window.localStorage.setItem("showpromo", !0), i.classList.add(a.promoCodeClass)) : t.addEventListener("click", function () {
                            t.classList.remove("show")
                        }), i.classList.add("submitted")
                    }).catch(function () {
                        a.setButtonState(o.target, a.builderApi.localize("editorTemplates.features.subscription.sendingError"))
                    })
                }
            }, {
                key: "clearErrors",
                value: function (e, t) {
                    var i = this,
                        r = t.querySelector(".error-captcha-container");
                    e && e.length && e.forEach(function (e) {
                        i.setErrorStyling(t.querySelector("." + e.id + "-container"), !1)
                    }), r && r.setAttribute("style", "display: none")
                }
            }, {
                key: "showErrors",
                value: function (e, t, i) {
                    var r = this;
                    if (e && e.length && e.forEach(function (e) {
                            r.setErrorStyling(t.querySelector("." + e.key + "-container"), !0, e.errorMessage)
                        }), !i) {
                        var o = t.querySelector(".error-captcha-container");
                        if (o) o.setAttribute("style", "display: block");
                        else {
                            var n = t.querySelector(".captcha-field-wrapper"),
                                a = document.createElement("div");
                            a.className = "error-captcha-container", a.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.couldNotVerify"), n.appendChild(a)
                        }
                    }
                }
            }, {
                key: "isEmpty",
                value: function (e) {
                    return null == e || "object" === r(e) && 0 === Object.keys(e).length || "string" == typeof e && 0 === e.trim().length
                }
            }, {
                key: "tryRenderCaptcha",
                value: function (e, t) {
                    var i = this;
                    if (!window.hasCaptcha) {
                        window.captchaInstanceQueue = [], window.onCaptchaLoadCallback = function () {
                            window.captchaInstanceQueue.forEach(function (e) {
                                i.renderCaptcha(e, t)
                            })
                        };
                        var r = document.createElement("script");
                        r.src = "https://www.google.com/recaptcha/api.js?onload=onCaptchaLoadCallback", r.setAttribute("async", !0), r.setAttribute("defer", !0), document.body.appendChild(r), window.hasCaptcha = !0
                    }
                    window.grecaptcha ? this.renderCaptcha(e, t) : window.captchaInstanceQueue.push(e)
                }
            }, {
                key: "renderCaptcha",
                value: function (e, t) {
                    var i = e.querySelector(".captcha-field-wrapper");
                    if (window.grecaptcha && i && !i.querySelector("iframe")) {
                        i.innerHTML = "";
                        var r = window.grecaptcha.render(i, {
                            sitekey: "6Lewpm8UAAAAAKlR7x35yQOUTW6uJ65zbm96VqiL",
                            callback: window.onCaptchaSubmit
                        });
                        t._captchaWidgetId = r
                    }
                }
            }, {
                key: "validateCaptcha",
                value: function (e, t) {
                    return window.grecaptcha ? window.grecaptcha && window.grecaptcha.getResponse(e._captchaWidgetId) : (this.tryRenderCaptcha(t, e), !1)
                }
            }, {
                key: "setErrorStyling",
                value: function (e, t, i) {
                    if (e) {
                        var r = e.querySelector("input") || e.querySelector("textarea"),
                            o = e.querySelector(".error-container");
                        r && o && (t && r ? (r.style.cssText = "border: 3px solid #F44336; border-radius: .25rem; box-sizing: border-box; outline: 0;", o.innerHTML = this.builderApi.localize("editorTemplates.features.subscription.".concat(i || "required"))) : (r.style.cssText = "", o.innerHTML = ""))
                    }
                }
            }, {
                key: "setButtonState",
                value: function (e, t) {
                    e && (e.innerHTML = t)
                }
            }, {
                key: "mapInputType",
                value: function (e) {
                    var t = 1;
                    return "fieldEmail" === e && (t = 3), "fieldDate" === e && (t = 4), "fieldPhone" === e && (t = 6), "fieldFirstName" !== e && "fieldlastName" !== e || (t = 8), t
                }
            }]), t
        }();
        window.__features = window.__features || {}, window.__features["form-core"] = n
    }, {}]
}, {}, [1]),
function n(a, s, c) {
    function u(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (l) return l(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var o = s[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function (e) {
                return u(a[t][1][e] || e)
            }, o, o.exports, n, a, s, c)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
    return u
}({
    1: [function (e, t, i) {
        "use strict";

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var r = function () {
            function r(e, t, i) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), this.widgetId = "", this.builderApi = e, this.formCore = i["form-core"], this.isForPreview = e.isForPreview, this.isRuntimeSite = !e.editor
            }
            return function (e, t, i) {
                t && o(e.prototype, t), i && o(e, i)
            }(r, [{
                key: "initializeForSection",
                value: function () {}
            }, {
                key: "updateProperty",
                value: function () {}
            }, {
                key: "afterRender",
                value: function (e, t) {
                    var i = this,
                        r = (this.element = t).querySelector('form [data-type="button"], form [data-type="link"]'),
                        o = e.controller.parentController;
                    this.isForPreview ? console.debug("in preview mode") : r ? this.isRuntimeSite && (t.querySelector('[data-type="opentable"]') || (r.removeAttribute("href"), r.dataset.href = ""), r.addEventListener("click", function (e) {
                        i.handleFormSubmission(e, o, t)
                    }), t.addEventListener("click", function () {
                        i.formCore.tryRenderCaptcha(t, o)
                    })) : console.warn("No button for form submitting")
                }
            }, {
                key: "handleFormSubmission",
                value: function (e, t, i) {
                    if (e.preventDefault(), "localhost" !== window.location.hostname) {
                        var r = i.querySelectorAll("input, textarea");
                        this.formCore.clearErrors(r, i);
                        var o = this.formCore.validateForm(r),
                            n = o.data,
                            a = o.errors,
                            s = this.formCore.validateCaptcha(t, i);
                        0 < a.length || !s ? this.formCore.showErrors(a, i, s) : this.formCore.submitForm(n, i, s, e, this.builderApi)
                    } else console.info("Normally the form will be posted. Submit is stopped in local dev mode.")
                }
            }]), r
        }();
        window.__features = window.__features || {}, window.__features["form-submission"] = r
    }, {}]
}, {}, [1]), window._featureSettings = {
    navigation: {
        settings: {}
    },
    "form-core": {
        settings: {}
    },
    translations: {
        "editorTemplates.features.subscription.couldNotVerify": "Não foi possível verificar se você é um humano",
        "editorTemplates.features.subscription.sent": "Enviado!",
        "editorTemplates.features.subscription.sending": "Enviando...",
        "editorTemplates.features.subscription.sendingError": "Erro no envio",
        "editorTemplates.features.subscription.required": "Este campo é obrigatório.",
        "editorTemplates.features.subscription.invalidEmail": "Formato inválido",
        "editorTemplates.features.subscription.subscribe": "Ao marcar esta caixa e enviar suas informações, você está nos dando permissão de lhe enviar e-mails. Você pode cancelar a qualquer momento.",
        "editorTemplates.features.subscription.subscribeToggle": "Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar e-mails. Você pode cancelar a qualquer momento."
    },
    "form-submission": {
        settings: {
            dependingGlobalFeatures: ["form-core"]
        }
    }
};