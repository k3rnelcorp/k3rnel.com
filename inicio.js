! function r(a, u, d) {
    function c(t, e) {
        if (!u[t]) {
            if (!a[t]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(t, !0);
                if (s) return s(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var o = u[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function (e) {
                return c(a[t][1][e] || e)
            }, o, o.exports, r, a, u, d)
        }
        return u[t].exports
    }
    for (var s = "function" == typeof require && require, e = 0; e < d.length; e++) c(d[e]);
    return c
}({
    1: [function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
            function r(e, t, i) {
                var n = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), a(this, "getRenderModel", function () {
                    return {}
                }), a(this, "triggerWindowEvent", function () {
                    n.recheckMode && n.recheckMode()
                }), this.isRuntimeSite = t.isRuntimeSite, this.builderApi = e, this.currentElementWidth = 0, this.checkTimeout = 0;
                var o = !this.editor && window.self !== window.top;
                this.resizeWaitTimeout = o ? 0 : 300, "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [], window._zoomUpdateEvents.push(this.triggerWindowEvent))
            }
            return function (e, t, i) {
                t && n(e.prototype, t), i && n(e, i)
            }(r, [{
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
                        n = t.querySelector(".navigation") || t,
                        o = n.querySelectorAll("li");
                    (o || o.length) && (this.checkMobileMode(n), this.setHeaderHeight(e, t), window.addEventListener("resize", function () {
                        i.__resizeTimeout && window.clearTimeout(i.__resizeTimeout), i.__resizeTimeout = window.setTimeout(function () {
                            i.checkMobileMode(n), i.setHeaderHeight(e, t)
                        }, i.resizeWaitTimeout)
                    }), this.recheckMode = this.builderApi.debounce(function () {
                        i.checkMobileMode(n), i.setHeaderHeight(e, t)
                    }, 300))
                }
            }, {
                key: "setHeaderHeight",
                value: function (e, t) {
                    if (!e.model.cover && this.isRuntimeSite && t.parentElement) {
                        var i = t.parentElement.querySelector(".header-container");
                        if (i) {
                            var n = t.parentElement.querySelector(".kv-check-scroll");
                            if (!n) return;
                            var o, r = n.clientHeight,
                                a = n.children[0].clientHeight;
                            o = n === i ? a : Math.max(r, a), i.style.minHeight = "".concat(o, "px")
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
                        n = e.querySelector('[data-dynamic-navigation-element="logo"]'),
                        o = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'),
                        r = o ? o.offsetWidth : 0,
                        a = n ? n.offsetWidth : 0,
                        u = i.offsetWidth - r;
                    return {
                        containerSize: u,
                        logoWidth: a,
                        ctaWidth: r,
                        headerWith: e.offsetWidth,
                        navigationToWide: t + a + r >= e.offsetWidth - 20,
                        headerToWide: u + a >= e.offsetWidth
                    }
                }
            }, {
                key: "shouldMinimizeMenu",
                value: function (e) {
                    if (window.innerWidth < 991) return !0;
                    var t = e.querySelectorAll("li");
                    this.currentElementWidth = this.getNavigationWidth(t);
                    var i = this.determineContainerWidth(e, this.currentElementWidth),
                        n = i.containerSize,
                        o = i.headerToWide,
                        r = i.navigationToWide;
                    return n < 100 || o || r
                }
            }, {
                key: "checkMobileMode",
                value: function (e) {
                    var t = document.querySelector("section") || e,
                        i = document.querySelector(".check-mobile");
                    if (i = i || e, window.innerWidth < 991) i.classList.contains("mobile") || i.classList.add("mobile");
                    else {
                        i.classList.remove("mobile");
                        var n = this.shouldMinimizeMenu(t),
                            o = i.classList;
                        n && o.add("mobile"), n || o.remove("mobile")
                    }
                }
            }, {
                key: "updateProperty",
                value: function () {}
            }]), r
        }();
        window.__features = window.__features || {}, window.__features.navigation = o
    }, {}]
}, {}, [1]), window._featureSettings = {
    navigation: {
        settings: {}
    }
};