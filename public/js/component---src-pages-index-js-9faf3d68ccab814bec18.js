"use strict";
(self.webpackChunklucid_website = self.webpackChunklucid_website || []).push([
    [678], {
        33789: function(e, t, i) {
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            });
            var n = i(67294),
                a = i(94111),
                r = i(5438),
                o = i(38991),
                c = i(65202),
                s = i(39965),
                u = i(50993),
                l = i(81083),
                d = i.p + "static/motortrend-coty-2022-f244b3dd3a285fddd12a2b1e84ade272.jpg",
                p = "paragraph__disclaimers",
                f = (0, a.Z)()((function(e) {
                    var t = e.data,
                        i = e.location,
                        a = e.navigate,
                        f = e.path,
                        m = (0, l.Zg)(t.allNodeLandingPageShcc.nodes, r.Z.language),
                        g = function(e) {
                            var t, i;
                            return {
                                title: (null === (t = e.field_metatags) || void 0 === t ? void 0 : t.title) || e.title,
                                description: (null === (i = e.field_metatags) || void 0 === i ? void 0 : i.description) || ""
                            }
                        }(m),
                        h = function(e) {
                            return e.relationships.field_paragraph.filter((function(e) {
                                return e.internal.type !== p
                            }))
                        }(m),
                        v = function(e) {
                            return e.relationships.field_paragraph.find((function(e) {
                                return e.internal.type === p
                            }))
                        }(m),
                        y = (0, n.useState)(!1),
                        b = y[0],
                        _ = y[1],
                        w = (0, n.useState)(null),
                        k = w[0],
                        Z = w[1],
                        E = (0, n.useState)({}),
                        C = E[0],
                        S = E[1],
                        L = {
                            message: function(e, t, i) {
                                t && S((function(e) {
                                    return t
                                })), i && Z((function(e) {
                                    return i
                                })), _((function(t) {
                                    return e
                                }))
                            }
                        };
                    return (0, n.useLayoutEffect)((function() {
                        setTimeout((function() {
                            L.message(!0, {
                                title: "Car of the year. <br>In our first year.",
                                description: "Lucid Air has been named <i>MotorTrend’s Car&nbsp;of the Year</i>. Discover why it won this prestigious award.",
                                cta: "Find out more",
                                link: "/media-room/lucid-air-named-2022-motortrend-car-year",
                                cta2: "Reserve now",
                                link2: "/air/reserve",
                                image: d
                            }, "popUp")
                        }), 1e3)
                    }), []), n.createElement(n.Fragment, null, n.createElement(s.Z, {
                        title: g.title,
                        description: g.description,
                        location: i
                    }), n.createElement(u.Zn, {
                        disclaimers: v,
                        dispatch: L
                    }, h.map((function(e, t) {
                        return n.createElement(c.Z, {
                            key: e.drupal_id,
                            paragraph: Object.assign({}, e, {
                                pagePath: f
                            }),
                            location: i,
                            navigate: a,
                            position: t,
                            dispatch: L
                        })
                    }))), n.createElement(o.Z, {
                        dispatch: L,
                        ref: {
                            visibility: b,
                            content: C,
                            style: k
                        }
                    }))
                }));
            f.layout = u.yP.main;
            var m = f
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-9faf3d68ccab814bec18.js.map