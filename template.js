/**
 * @preserve license list is here. https://s.yimg.jp/images/news-web/common/js/licenses.js
 */
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([["pc/js/article/template"], {
    82332: (e, t, n) => {
        var o = n(85893), i = n(50533), s = n(20745);
        var r = n(67294), a = n(71893), l = n(10879);
        const c = "674px", d = "300px", p = "16px", m = "60px", h = "80px", u = "100px", g = "200px", x = "112px",
            _ = "200px", f = "105px", w = "200px", b = "105px", v = "40px", y = "200px", j = "110px", I = "32px",
            C = "40px", P = "44px", k = "14px", S = "16px", T = "18px", O = 1, D = 50, E = 100, L = 5000100,
            Z = 5000200, z = "2px", $ = "3px", A = "4px", R = "20px", F = "100%", U = "50%", B = "100% 0 0 0",
            N = "3px 0 0 3px", M = "0 3px 3px 0", V = "0 0 3px 3px", W = "50%", H = "50%", q = "1", Y = "0", J = "0.8",
            G = "1", X = "0.7", Q = "https://s.yimg.jp/images/news-web/all/images",
            K = "https://s.yimg.jp/images/news-web/pc/images", ee = "https://s.yimg.jp/images/news-web/sp/images",
            te = {
                img_icon_footerNavigation_pc: `${K}/spr_footerNavigation_icon.png`,
                img_icon_footerNavigation_pc_v2: `${K}/spr_footerNavigation_icon_v2.png`,
                img_logo_PayPay: `${Q}/logo_paypay.png`,
                img_icon_PayPay: "https://s.yimg.jp/c/icon/s/bsc/2.0/paypay40.png",
                img_default_1x1: `${Q}/default_1x1_550_550.jpg`,
                img_loading: `${Q}/loading.png`,
                img_labelIcon_new: `${Q}/ico_new.svg`,
                img_labelIcon_live: `${Q}/ico_live.svg`,
                img_labelIcon_pay: `${Q}/ico_pay.svg`,
                img_labelIcon_pay_black: `${Q}/ico_pay_black.svg`,
                img_labelIcon_trend: `${Q}/ico_trend.svg`,
                img_label_original: `${Q}/ico_original.svg`,
                img_logo_nnn_pc: "https://s.yimg.jp/images/news-web/all/images/logo_live_nnn.png",
                img_logo_jnn_pc: "https://s.yimg.jp/images/news-web/all/images/logo_live_jnn_v202204.png",
                img_logo_bbc_pc: "https://s.yimg.jp/images/news-web/all/images/logo_live_bbc_v202303.png",
                img_logo_nnn_sp: "https://s.yimg.jp/images/news-web/sp/images/logo_embed_nnn.png",
                img_logo_jnn_sp: "https://s.yimg.jp/images/news-web/sp/images/logo_embed_jnn_v202204.png",
                img_logo_bbc_sp: "https://s.yimg.jp/images/news-web/sp/images/logo_embed_bbc_v202303.png",
                img_pickup_kensaku: `${Q}/pickupPoint_kensaku.svg`,
                img_pickup_icon_Q: `${Q}/pickupPoint_Q.svg`,
                img_pickup_icon_A: `${Q}/pickupPoint_A.svg`,
                img_pickup_icon_Q_v202409: `${Q}/pickupPoint_Q_v202409.svg`,
                img_pickup_icon_current: `${K}/followUp_ico_current.svg`,
                img_icon_live_streaming_pc: `${K}/icon_live_streaming.svg`,
                img_icon_live_streaming_sp: `${ee}/icon_live_streaming.svg`,
                img_pickup_icon_safety_check: `${K}/icon_topics_safety_check.png`,
                img_pickup_icon_line_safety_check: `${ee}/icon_topics_line_safety_check.png`,
                img_newsarticle_lineAm: `${ee}/line_am.png`,
                img_newsfeed_videoVolume: `${ee}/ico_video_volume.gif`,
                img_newsfeed_pieGraph: `${ee}/pie_graph.svg`,
                img_profile_icon_facebook: `${Q}/sns_facebook_circle.svg`,
                img_profile_icon_instagram: `${Q}/sns_instagram_circle.svg`,
                img_profile_icon_instagram_flat: `${Q}/sns_instagram_circle_flat.svg`,
                img_profile_icon_youtube: `${Q}/sns_youtube_circle.svg`,
                img_profile_default_creator_cover: `${Q}/default_creator_profile_cover.jpg`,
                img_commentPolicy_title_pc: `${K}/commentPolicy_title_pc.png`,
                img_commentPolicy_title_sp: `${ee}/commentPolicy_title_sp.png`,
                img_commentPolicy_news_chara_v2: `${Q}/commentPolicy_news_chara_v2.png`,
                img_commentPolicy_relief: `${Q}/commentPolicy_relief.png`,
                img_commentPolicy_restriction: `${Q}/commentPolicy_restriction.png`,
                img_commentPolicy_patrol: `${Q}/commentPolicy_patrol.png`,
                img_commentPolicy_hide: `${Q}/commentPolicy_hide.png`,
                img_newsOperationPolicy_topics_pc: `${K}/newsOperationPolicy_topics2_pc.png`,
                img_newsOperationPolicy_topics_sp: `${ee}/newsOperationPolicy_topics2_sp.png`,
                img_newsOperationPolicy_timeline_pc: `${K}/operationPolicy_timeline_pc.png`,
                img_newsOperationPolicy_timeline_sp: `${ee}/operationPolicy_timeline_sp.png`,
                img_newsOperationPolicy_main: `${Q}/newsOperationPolicy_main.png`,
                img_articlesGuidelines_main: `${Q}/newsArticlesGuidelines_main.png`,
                img_annualReport_2021_pc: `${K}/annualReport/annualReport`,
                img_annualReport_2021_sp: `${ee}/annualReport/annualReport`,
                img_annualReport_2022_pc: `${K}/annualReport/annualReport`,
                img_annualReport_2022_sp: `${ee}/annualReport/annualReport`,
                img_annualReport_2023_pc: `${K}/annualReport/annualReport`,
                img_annualReport_2023_sp: `${ee}/annualReport/annualReport`,
                img_annualReport_main: `${Q}/annualReport_main.png`,
                img_comment_summary_character: `${Q}/comment_summary_character.png`,
                img_comment_summary_success_character: `${Q}/comment_summary_success_character.png`,
                img_comment_summary_loading_speech_bubble: `${Q}/comment_summary_loading_speech_bubble.png`,
                img_comment_summary_inset_character: `${Q}/comment_summary_inset_character.png`,
                img_polls_character: `${Q}/polls_character_v202408.png`,
                img_pageError_kensaku: `${Q}/bg_kensaku.gif`,
                img_icon_comment_tl_new_comment: `${Q}/icon_newcmt.svg`,
                img_icon_expert_verified: `${Q}/ico_expert_verified.svg`,
                img_icon_comment_tl: `${ee}/icon_cmttl.png`,
                img_comment_timeline_promotion_module_kensaku: `${Q}/commentTimelinePromotion_kensaku.png`,
                img_comment_promotion_module_kensaku: `${Q}/commentPromotion_kensaku.png`,
                img_user_profile_setting_character: `${Q}/user_profile_setting_character.png`,
                img_icon_best_expert_award: `${Q}/ico_best_expert_award.png`,
                img_icon_expert: `${Q}/ico_expert.png`,
                img_icon_expert_h30: `${Q}/ico_expert_h30.png`,
                img_expert_article_pickup_kensaku: `${Q}/expert_article_pickup_kensaku.svg`,
                img_expert_article_quote: `${Q}/ico_expert_article_quote.svg`,
                img_icon_comment_empathy_default: `${Q}/icon_comment_empathy_default.png`,
                img_icon_comment_empathy_voted: `${Q}/icon_comment_empathy_voted.png`,
                img_icon_comment_empathy_disabled: `${Q}/icon_comment_empathy_disabled.png`,
                img_icon_comment_insights_default: `${Q}/icon_comment_insights_default.png`,
                img_icon_comment_insights_voted: `${Q}/icon_comment_insights_voted.png`,
                img_icon_comment_insights_disabled: `${Q}/icon_comment_insights_disabled.png`,
                img_icon_comment_negative_default: `${Q}/icon_comment_negative_default.png`,
                img_icon_comment_negative_voted: `${Q}/icon_comment_negative_voted.png`,
                img_icon_comment_negative_disabled: `${Q}/icon_comment_negative_disabled.png`,
                img_icon_comment_feedback_pc: `${K}/comment_feedback_kensaku_pc.png`,
                img_icon_comment_feedback_sp: `${ee}/comment_feedback_kensaku_sp.png`
            }, ne = "all 0.7s ease", oe = "all 0.4s ease", ie = "all 0.5s", se = {
                px10: "0.625rem",
                px11: "0.6875rem",
                px12: 1.2 / 1.6 + "rem",
                px13: "0.8125rem",
                px14: 1.4 / 1.6 + "rem",
                px15: "0.9375rem",
                px16: "1rem",
                px17: "1.0625rem",
                px18: "1.125rem",
                px19: 1.9 / 1.6 + "rem",
                px20: "1.25rem",
                px21: "1.3125rem",
                px22: "1.375rem",
                px23: 2.3 / 1.6 + "rem",
                px24: 2.4 / 1.6 + "rem",
                px25: "1.5625rem",
                px26: "1.625rem",
                px27: "1.6875rem",
                px28: 2.8 / 1.6 + "rem",
                px29: 2.9 / 1.6 + "rem",
                px30: "1.875rem",
                px31: "1.9375rem",
                px32: "2rem"
            };
        var re = n(64305);

        class ae {
            static createYahooSearchUrl(e) {
                return `https://search.yahoo.co.jp/search?p=${e}&ei=UTF-8`
            }

            static convertCategoryFilter(e) {
                const t = [];
                return !0 === e.domestic && t.push(re.w.DOMESTIC), !0 === e.world && t.push(re.w.WORLD), !0 === e.business && t.push(re.w.BUSINESS), !0 === e.entertainment && t.push(re.w.ENTERTAINMENT), !0 === e.sports && t.push(re.w.SPORTS), !0 === e.it && t.push(re.w.IT), !0 === e.science && t.push(re.w.SCIENCE), !0 === e.life && t.push(re.w.LIFE), !0 === e.local && t.push(re.w.LOCAL), t.join(",")
            }

            static add3PointLeader(e) {
                let t = e;
                return t.match(/^[\s　]/) || (t = `…${t}`), t.match(/。$/) || (t = `${t}…`), t
            }

            static createNewsSearchUrl(e) {
                return `/search?p=${encodeURIComponent(e)}&ei=utf-8`
            }
        }

        ae.escapeQuery = e => {
            const t = [{input: /\\/g, output: "\\\\"}, {input: /'/g, output: "\\'"}, {
                input: /"/g,
                output: '\\"'
            }, {input: /\r/g, output: "\\r"}, {input: /\n/g, output: "\\n"}, {input: /<\//g, output: "<\\/"}];
            for (const n of t) e = e.replace(n.input, n.output);
            return e
        }, ae.normalizeWord = e => e.trimLeft().replace(/\s+/g, " ");
        const le = a.ZP.button.withConfig({componentId: "sc-tqmqxb-0"})(["padding:4px 8px;text-align:left;"]),
            ce = a.ZP.span.withConfig({componentId: "sc-tqmqxb-1"})(["font-size:", ";"], se.px14),
            de = a.ZP.div.withConfig({componentId: "sc-tqmqxb-2"})(["position:absolute;top:27px;left:0;z-index:", ";width:282px;margin-left:", ";background-color:", ";border:1px solid ", ";border-radius:", ";transform:translateZ(0);"], L, (({compact: e}) => e ? "0" : "12px"), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.btn_simple_border_common), V),
            pe = a.ZP.ul.withConfig({componentId: "sc-tqmqxb-3"})(["z-index:", ";margin:4px 0;overflow:hidden;cursor:pointer;"], Z),
            me = e => {
                const t = t => {
                    if (!e.query) return null;
                    const n = ae.normalizeWord(e.query);
                    return 0 === t.indexOf(n) ? (0, o.jsxs)(r.Fragment, {children: [n, (0, o.jsx)("strong", {children: t.substring(n.length)})]}) : (0, o.jsx)(r.Fragment, {children: (0, o.jsx)("strong", {children: t})})
                }, n = (0, r.useContext)(a.Ni), i = e.suggestList ? e.suggestList.map(((i, s) => (0, o.jsx)("li", {
                    style: e.selectedSuggestIndex === s ? {backgroundColor: `${n.news.palette.bg_lv2_common}`} : {backgroundColor: `${n.news.palette.bg_lv1_common}`},
                    onMouseDown: t => {
                        e.setSearchWord(i), window.location.href = `${ae.createNewsSearchUrl(i)}&aq=${s}`
                    },
                    onMouseOver: () => (t => {
                        e.setSelectedSuggestIndex(t)
                    })(s),
                    children: (0, o.jsx)(le, {children: (0, o.jsx)(ce, {children: t(i)})})
                }, s + 1))) : [];
                return (0, o.jsx)(de, {compact: e.compact, children: (0, o.jsx)(pe, {children: i})})
            }, he = a.ZP.div.withConfig({componentId: "sc-1a5izri-0"})(["position:relative;margin-right:4px;"]),
            ue = a.ZP.div.withConfig({componentId: "sc-1a5izri-1"})(["display:flex;align-items:center;width:", ";margin:", ";"], (e => e.compact ? "153px" : "316px"), (e => e.compact ? "5px 0" : "8px 12px")),
            ge = a.ZP.div.withConfig({componentId: "sc-1a5izri-2"})(["position:relative;background-color:", ";border:1px solid ", ";border-right:none;border-radius:", ";&::after{position:absolute;top:50%;right:0;display:block;height:12px;content:'';border-right:1px solid ", ";transform:translateY(-50%);}"], (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.btn_simple_border_common), N, (e => e.theme.news.palette.btn_simple_border_common)),
            xe = a.ZP.input.withConfig({componentId: "sc-1a5izri-3"})(["width:", ";height:26px;padding-left:4px;font-size:", ";line-height:26px;border-radius:", ";&::placeholder{color:rgb(0 0 0 / 43%);}"], (e => e.compact ? "117px" : "282px"), se.px12, N),
            _e = a.ZP.div.withConfig({componentId: "sc-1a5izri-4"})(["background-color:", ";border:1px solid ", ";border-left:none;border-radius:", ";"], (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.btn_simple_border_common), M),
            fe = a.ZP.button.withConfig({componentId: "sc-1a5izri-5"})(["display:flex;align-items:center;height:26px;padding:0 8px;cursor:pointer;"]),
            we = (0, a.ZP)(l.j).withConfig({componentId: "sc-1a5izri-6"})(["color:", ";"], (e => e.theme.news.palette.icon_gray_lv3_common)),
            be = e => {
                const [t, n] = (0, r.useState)(!1), [i, s] = (0, r.useState)(e.query), [a, l] = (0, r.useState)(e.query), [c, d] = (0, r.useState)(-1), [p, m] = (0, r.useState)(e.query),
                    h = e.isCompact, u = e.shouldUseCustomPlaceholder;
                return e.shouldHideSearchBar ? (0, o.jsx)(r.Fragment, {}) : (0, o.jsx)("form", {
                    action: "/search", method: "get", children: (0, o.jsxs)(he, {
                        children: [(0, o.jsxs)(ue, {
                            compact: h,
                            children: [(0, o.jsxs)(ge, {
                                children: [(0, o.jsx)(xe, {
                                    compact: h,
                                    type: "text",
                                    name: "p",
                                    placeholder: u ? "ニュースを検索" : "キーワードを入力",
                                    value: i,
                                    onChange: t => {
                                        const o = t.currentTarget.value;
                                        0 !== o.length ? n(!0) : n(!1), e.fetchSearchSuggestion && e.fetchSearchSuggestion(o), s(o), l(o), m(o)
                                    },
                                    onBlur: () => n(!1),
                                    onKeyDown: n => {
                                        const o = (e, t) => {
                                            s(t), d(e)
                                        };
                                        if (!e.suggestList[0] || !t) return;
                                        const i = e.suggestList.length - 1, r = e.suggestList[0], a = e.suggestList[i],
                                            l = e.suggestList[c + 1], m = e.suggestList[c - 1];
                                        if (r && a && l && m) switch (n.keyCode) {
                                            case 38:
                                                -1 === c ? o(i, a) : 0 === c ? o(-1, p) : o(c - 1, m);
                                                break;
                                            case 40:
                                                -1 === c ? o(0, r) : c === i ? o(-1, p) : o(c + 1, l)
                                        }
                                    },
                                    onFocus: () => {
                                        0 !== i.length ? n(!0) : n(!1), e.fetchSearchSuggestion && e.fetchSearchSuggestion(i)
                                    },
                                    autoComplete: "off",
                                    "aria-label": "検索したいキーワードを入力してください"
                                }), (0, o.jsx)("input", {
                                    type: "hidden",
                                    value: "utf-8",
                                    name: "ei"
                                }), -1 !== c ? (0, o.jsx)("input", {type: "hidden", value: c, name: "aq"}) : null]
                            }), (0, o.jsx)(_e, {
                                children: (0, o.jsx)(fe, {
                                    type: "submit",
                                    "aria-label": "検索ボタン",
                                    value: "検索",
                                    children: (0, o.jsx)(we, {size: 18})
                                })
                            })]
                        }), t && 0 !== e.suggestList.length && (0, o.jsx)(me, {
                            compact: h,
                            isOpen: !0,
                            query: a,
                            suggestList: e.suggestList,
                            selectedSuggestIndex: c,
                            setSearchWord: s,
                            setSelectedSuggestIndex: d
                        })]
                    })
                })
            };
        var ve = Object.defineProperty, ye = Object.defineProperties, je = Object.getOwnPropertyDescriptors,
            Ie = Object.getOwnPropertySymbols, Ce = Object.prototype.hasOwnProperty,
            Pe = Object.prototype.propertyIsEnumerable,
            ke = (e, t, n) => t in e ? ve(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Se = (e, t) => {
                for (var n in t || (t = {})) Ce.call(t, n) && ke(e, n, t[n]);
                if (Ie) for (var n of Ie(t)) Pe.call(t, n) && ke(e, n, t[n]);
                return e
            }, Te = (e, t) => ye(e, je(t));
        const Oe = "categoryFilter/CHANGE_CATEGORY_FILTER", De = "searchSuggestion/FETCH_SEARCH_SUGGESTION", Ee = {
            query: "",
            initialCategories: {
                domestic: !1,
                world: !1,
                business: !1,
                entertainment: !1,
                sports: !1,
                it: !1,
                science: !1,
                life: !1,
                local: !1
            },
            latestCategories: {
                domestic: !1,
                world: !1,
                business: !1,
                entertainment: !1,
                sports: !1,
                it: !1,
                science: !1,
                life: !1,
                local: !1
            },
            suggestList: [],
            qrw: !0,
            isTopPage: !1
        }, Le = e => t => {
            return n = void 0, o = null, i = function* () {
                const n = `https://n-assist-search.yahooapis.jp/SuggestSearchService/V5/webassistSearch?query=${encodeURIComponent(e)}&.src=web_news`,
                    o = `${n}&appid=dj00aiZpPWVJMTltRm1sZVJZOCZzPWNvbnN1bWVyc2VjcmV0Jng9NTQ-`;
                try {
                    return fetch(o, {method: "GET", credentials: "same-origin"}).then((e => {
                        if (e.ok) return e.json();
                        const t = e.status;
                        return Promise.reject({statusCode: t})
                    })).then((n => {
                        const o = n.Result.map((e => e.Suggest));
                        t(((e, t) => ({type: De, payload: {suggestList: t, word: e}}))(e, o))
                    }))
                } catch (e) {
                    return
                }
            }, new Promise(((e, t) => {
                var s = e => {
                    try {
                        a(i.next(e))
                    } catch (e) {
                        t(e)
                    }
                }, r = e => {
                    try {
                        a(i.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }, a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, r);
                a((i = i.apply(n, o)).next())
            }));
            var n, o, i
        }, Ze = (e = Ee, t) => {
            switch (t.type) {
                case Oe:
                    return Te(Se({}, e), {latestCategories: Object.assign(e.latestCategories, t.payload.categoryFilter)});
                case De:
                    const n = ae.normalizeWord(t.payload.word).split(/\s/).length;
                    return Te(Se({}, e), {suggestList: t.payload.suggestList.filter((e => e.split(/\s/).length <= n))});
                default:
                    return e
            }
        }, ze = "control", $e = "oth43t1", Ae = "oth43t2", Re = [ze, $e, Ae], Fe = {
            useCustomPlaceholderText: [$e, Ae],
            showToolbar: ["default", ze],
            hideToolbar: [$e, Ae],
            showSearchBarOnGlobalNavigation: ["default", ze, $e],
            hideSearchBarOnGlobalNavigation: [Ae]
        }, Ue = "default", Be = e => ((e, t, n) => {
            const o = (0, i.v9)((e => {
                var t;
                return null == (t = e.userData) ? void 0 : t.abTestBuckets
            }));
            return (0, r.useMemo)((() => {
                const i = null == o ? void 0 : o.find((t => t.experimentId === e));
                return void 0 === i ? t.includes(Ue) : void 0 === n || (null == n ? void 0 : n.includes(i.bucket)) ? t.includes(i.bucket) : t.includes(Ue)
            }), [n, o, e, t])
        })("mfn_60599", e, Re), Ne = ({type: e = "global"}) => {
            var t;
            const n = "searchPage" === e, s = (0, i.I0)(), a = (0, i.v9)((e => {
                    var t, n;
                    return null != (n = null == (t = e.searchConditions) ? void 0 : t.query) ? n : ""
                })), l = null != (t = (0, i.v9)((e => {
                    var t;
                    return null == (t = e.searchConditions) ? void 0 : t.suggestList
                }))) ? t : [], c = (0, r.useCallback)((e => {
                    s(Le(e))
                }), [s]), d = Be(Fe.useCustomPlaceholderText), p = Be(Fe.hideSearchBarOnGlobalNavigation),
                m = Be(Fe.hideToolbar) && !n, h = p && !n;
            return (0, o.jsx)(be, {
                query: a,
                suggestList: l,
                fetchSearchSuggestion: c,
                isCompact: m,
                shouldUseCustomPlaceholder: d,
                shouldHideSearchBar: h
            })
        }, Me = (e, t) => e ? "news_topics" : t ? "shannon_article" : void 0, Ve = e => {
            var t;
            const n = t => {
                var n, o, i;
                if (t.persisted) {
                    window.ualcmds = window.ualcmds || [], window.ual = window.ual || function () {
                        window.ualcmds.push(arguments)
                    }, window.ual("config", "token", "5ae7ece4-3b93-4890-8f24-ce16ddd756ed");
                    const t = (null == (n = e.ssJoinIdParam) ? void 0 : n.id) ? `${e.ssJoinIdParam.id}&is_bfche=1` : "is_bfche=1";
                    window.ual("hit", "pageview", {
                        service: "news",
                        opttype: "pc",
                        content_id: null != (o = e.topicsId) ? o : e.contentId,
                        id_type: Me(e.topicsId, e.contentId),
                        ss_join_id: t,
                        ss_join_id_type: null == (i = e.ssJoinIdParam) ? void 0 : i.type,
                        mtestid: e.mtestId
                    }, {flush: !0})
                }
            };
            return (0, r.useEffect)((() => (window.addEventListener("pageshow", n), () => window.removeEventListener("pageshow", n))), []), (0, o.jsx)("script", {
                dangerouslySetInnerHTML: {
                    __html: `\n          window.ualcmds = window.ualcmds || [];\n          window.ual = window.ual || function() {\n            ualcmds.push(arguments);\n          };\n          ual('config', 'token', '5ae7ece4-3b93-4890-8f24-ce16ddd756ed');\n          function hitPageView () {\n            ual('hit', 'pageview', {\n              service: 'news',\n              opttype: 'pc',\n              ${void 0 !== e.topicsId || void 0 !== e.contentId ? `\n                    content_id: '${null != (t = e.topicsId) ? t : e.contentId}',\n                    id_type: '${void 0 !== e.topicsId ? "news_topics" : "shannon_article"}',\n                    ` : ""}\n              ${e.ssJoinIdParam ? `\n                    ss_join_id: '${e.ssJoinIdParam.id}',\n                    ss_join_id_type: '${e.ssJoinIdParam.type}',\n                    ` : ""}\n              mtestid:'${e.mtestId}'\n              },\n              { flush: true }\n            );\n          };\n          if (document.prerendering) {\n            document.addEventListener('prerenderingchange', hitPageView, {\n              once: true\n            });\n          } else {\n            hitPageView();\n          }\n        `
                }
            })
        };
        var We = n(17563);
        const He = ["article", "mgznart", "pctrart", "comment"], qe = (e, t) => {
            if (!t || !e) return;
            if (-1 === He.indexOf(e)) return;
            const n = Ye(e);
            if (!n) return;
            const o = {shannon_service_id: "news", shannon_media_id: t, page_type: n};
            return {type: "querystring", id: We.stringify(o)}
        }, Ye = e => {
            switch (e) {
                case"article":
                case"mgznart":
                    return "article";
                case"pctrart":
                    return "photo";
                case"comment":
                    return "comment";
                default:
                    return null
            }
        }, Je = (0, i.$j)((e => {
            var t, n;
            return {
                requestId: null == (t = e.request) ? void 0 : t.requestId,
                contentId: e.pageData.pageParam.shcid,
                topicsId: null == (n = e.topicsDetail) ? void 0 : n.id,
                mtestId: e.pageData.pageParam.mtestid,
                ssJoinIdParam: qe(e.pageData.pageParam.conttype, e.pageData.pageParam.mid)
            }
        }))(Ve);

        class Ge extends r.Component {
            componentDidMount() {
                const e = Array.prototype.slice.call(document.getElementsByClassName(this.props.targetClassName));
                window.YAHOO.JP.srch = window.YAHOO.JP.srch || {}, window.YAHOO.JP.srch.popSearchSetting = {
                    serviceCode: this.props.serviceCode,
                    targets: e,
                    device: "pc"
                };
                const t = document.createElement("script");
                t.src = "https://s.yimg.jp/images/slink/highlightsearch/1.0/js/highlightsearch.js" + (this.props.time ? `?${this.props.time}` : ""), document.body.appendChild(t)
            }

            render() {
                return null
            }
        }

        const Xe = {
            color: {
                light: {
                    palette: {
                        bg_lv1_common: "#FFFFFF",
                        bg_lv2_common: "#F7F7F7",
                        bg_largeimage_common: "#333333",
                        bg_hover_normal_pc: "#F9F9F9",
                        bg_hover_subColumn_pc: "#EAEEF2",
                        bg_base_sp: "#E5EAEE",
                        bg_livePlayer_common: "#333333",
                        thumbnail_normal_common: "#EFEFEF",
                        thumbnail_normal_border_common: "rgba(0,0,0,0.06)",
                        thumbnail_movie_common: "#000000",
                        thumbnail_photo_common: "#4A4A4A",
                        text_base_common: "#333333",
                        text_sub_lv1_common: "#949494",
                        text_sub_lv2_common: "#666666",
                        text_alert_common: "#D0021B",
                        text_blue_common: "#1A75FF",
                        text_white_common: "#FFFFFF",
                        text_livePlayer_common: "#FFFFFF",
                        text_liveProgram_common: "#A9A9A9",
                        btn_simple_bg_common: "#FFFFFF",
                        btn_simple_border_common: "#BBBBBB",
                        btn_simple_text_common: "#444444",
                        btn_current_bg_common: "#444444",
                        btn_current_text_common: "#FFFFFF",
                        btn_disabled_bg_common: "#E8E8E8",
                        btn_disabled_text_common: "#AAAAAA",
                        btn_purchase_bg_common: "#99CC00",
                        btn_purchase_text_common: "#FFFFFF",
                        btn_primary_bg_common: "#1A75FF",
                        btn_primary_text_common: "#FFFFFF",
                        btn_normal_bg_common: "#FFFFFF",
                        btn_normal_border_common: "#1A75FF",
                        btn_normal_text_common: "#1A75FF",
                        btn_delete_bg_common: "#eb0026",
                        btn_delete_border_common: "#eb0026",
                        btn_delete_text_common: "#fff",
                        information_notice_bg_common: "#EBF0FA",
                        information_notice_border_common: "#B0C3EB",
                        information_warning_bg_common: "#FFEFB0",
                        information_warning_border_common: "#FFD325",
                        information_warning_icon_common: "#FFAB00",
                        ranking_1_common: "#f14b43",
                        ranking_2_common: "#DD6214",
                        ranking_3_common: "#B97904",
                        ranking_default_common: "#EBEBEB",
                        breaking_common: "#25CC9C",
                        breaking_icon_common: "#FFFFFF",
                        bor_lv1_pc: "#F0F0F0",
                        bor_lv2_pc: "#E1E1E1",
                        bor_lv1_sp: "#E5EAEE",
                        bor_lv2_sp: "#D5DAE1",
                        bor_notice_pc: "#5D83A1",
                        brand_common: "#3474CE",
                        link_pc: "#0033CC",
                        link_hover_pc: "#CC3434",
                        link_visited_pc: "#663399",
                        link_hover_bg_pc: "#F9F9F9",
                        link_sp: "#006CCC",
                        link_visited_sp: "#663399",
                        link_tab_sp: "#696969",
                        link_gray_visited_sp: "#949494",
                        form_default_common: "#BBBBBB",
                        form_focus_common: "#1A75FF",
                        loading_gray_common: "#DDDDDD",
                        icon_pc: "#949494",
                        icon_sp: "#949494",
                        icon_livePlayer_button_sp: "#A9A9A9",
                        icon_gray_lv1_common: "#D5D5D5",
                        icon_gray_lv2_common: "#CCCCCC",
                        icon_gray_lv3_common: "#444444",
                        comment_default_common: "#3474CE",
                        comment_many_common: "#F76564",
                        breaking_bg_common: "#FFF7F9",
                        breaking_bor_common: "#FFC5D1",
                        "btn-sns-bg-twitter": "#1DA1F2",
                        "btn-sns-bg-facebook": "#1877F2",
                        "btn-sns-bg-line": "#06C755",
                        "btn-sns-bg-hatena": "#00A4DE",
                        photo_number_common: "#000000",
                        photo_pager_bg_common: "#6E6E6E",
                        photo_pager_bg_hover_common: "#6E6E6E",
                        bor_photo_current_common: "#FFC926",
                        trend_label_common: "#DE4445",
                        listMark_liveProgram_common: "#D8D8D8",
                        bg_footerNavigation_pc: "#4E555D",
                        bg_footerNavigation_externalLink_pc: "#494E54",
                        bor_footerNavigation_pc: "#3C4147",
                        text_footerNavigation_externalLink_pc: "#DBDBDB",
                        bg_footer_sp: "#EFEFEF",
                        categoryTab_notCurrent_border_sp: "rgba(255,255,255,0.2)",
                        categoryTab_notCurrent_bg_sp: "rgba(255,255,255,0.2)",
                        icon_ReactionButton_pressed: "#FF5260",
                        icon_ReactionButton: "rgba(0, 0, 0, 0.6)",
                        bg_ReactionButtonTip_pressed_common: "rgba(255,82,96,1)",
                        bg_ReactionButtonTip_common: "rgba(0, 0, 0, 0.43)",
                        bg_ReactionButtonTutorial_common: "rgba(0, 0, 0, 0.73)",
                        icon_comment_thumbsUpButton_common: "#FF5260",
                        polls_graph_lv1_common: "#3474CE",
                        polls_graph_lv2_common: "#38A8E1",
                        polls_graph_lv3_common: "#4CCDD9",
                        polls_graph_lv4_common: "linear-gradient(to bottom, #38a8e1, #3474ce)",
                        polls_icon_voting_common: "#f14b43",
                        ranking_default_text_common: "#6A6A6A",
                        polls_icon_result_common: "#868686",
                        oldColor_icon_live: "#25CC9C",
                        oldColor_icon_new: "#FEAE00",
                        oldColor_icon_pay: "#939AA5",
                        oldColor_alert: "#EB0026",
                        expert_label_text: "#3474ce",
                        expert_label_bg: "rgb(52 115 206 / 20%)"
                    }
                }, dark: {}
            }
        };
        var Qe = n(42907), Ke = n.n(Qe);
        const et = {
            light: {riff: Ke().color.light, news: Xe.color.light, palette: {}},
            dark: {riff: Ke().color.dark, news: Xe.color.dark, palette: {}}
        }, tt = e => (0, o.jsx)(a.f6, {theme: et.light, children: e.children});
        var nt = n(14890), ot = n(53894);
        const it = {isShow: !1}, st = (e = it) => e, rt = {isShow: !1}, at = (e = rt) => e, lt = {isShow: !1},
            ct = (e = lt) => e, dt = {isShow: !1}, pt = (e = dt) => e, mt = {isShow: !1}, ht = (e = mt) => e,
            ut = {isShow: !1}, gt = (e = ut) => e;
        var xt = n(88971), _t = n(14612);
        const ft = {
            contentId: "",
            articleId: "",
            amandaId: "",
            newsType: xt.D.NEWS,
            media: {
                mediaId: "",
                mediaName: "",
                mediaUrl: "",
                bannerUri: "",
                copyright: "",
                ngOgpImage: !1,
                ngSocialModule: !1,
                lineAmAccountUrl: ""
            },
            hasVideo: !1,
            category: re.w.DOMESTIC,
            categoryShortName: "",
            subCategory: _t.dt.DOMESTIC_PEOPLE,
            headline: "",
            headlineInTagList: [],
            newsLink: "",
            paragraphs: [],
            createDateTime: new Date(0),
            createDate: {date: "", time: ""},
            updateDateTime: new Date(0),
            updateDate: {date: "", time: ""},
            endOfSaleFlag: !1,
            flg: {hasBaseball: !1, hasMLB: !1, hasSoccer: !1, hasGradePickup: !1},
            relatedLink: [],
            currentPage: 0,
            maxPage: 0,
            isPay: !1,
            bodyLength: 0,
            commentPermission: !1,
            isCommentVisible: !0,
            searchLinkAppId: "",
            directLinkAppId: "",
            snsShareUrlsForArticleDetailPerPosition: {
                up: {twitter: "", facebook: "", line: ""},
                ud: {twitter: "", facebook: "", line: ""}
            }
        };
        var wt = n(19119);
        (0, wt.P1)([({articleDetail: e}) => e.category], (e => !["domestic", "world", "local"].some((t => t === e))));
        const bt = (e = ft) => e, vt = {isError: !0, isPurchased: !1, isProcessing: !1, orderLink: null},
            yt = (e = vt) => e, jt = {breakingItem: null}, It = (e = jt) => e, Ct = {requestId: void 0},
            Pt = (e = Ct) => e, kt = {
                textMain: "情報を取得できませんでした。",
                textSub: "システムエラーのため、情報を取得できませんでした。しばらくしてから再度お試しください。"
            }, St = (e = kt) => e, Tt = {isError: !0, list: []}, Ot = (e = Tt) => e,
            Dt = {title: "", url: "", isError: !0, list: []}, Et = (e = Dt) => e,
            Lt = {isViewable: !1, recommendations: []}, Zt = (e = Lt) => e, zt = {
                isEnabledComment: !0,
                isEnabledPolls: !0,
                isEnabledPollsVoting: !0,
                isEnabledArticlePurchase: !0,
                isEnabledExpertPurchase: !0,
                contentIdsToEnableCheerCommentMode: []
            }, $t = (e = zt) => e, At = {currentCategory: void 0}, Rt = (e = At) => e, Ft = {
                notices: [{
                    priority: 0,
                    label: "",
                    type: "announce",
                    createTime: "",
                    startTime: "",
                    placements: [{}],
                    contents: []
                }]
            }, Ut = (e = Ft) => e, Bt = {
                cssSrc: "",
                jsSrc: "",
                title: "",
                pageParam: {service: "", pagetype: "", opttype: "", apptype: "", mtestid: ""},
                path: "",
                description: "",
                type: "website",
                yads: {categoryId: ""}
            }, Nt = (e = Bt) => e;
        var Mt = n(18446), Vt = n.n(Mt);
        const Wt = {loginDonePath: "/"}, Ht = (e = Wt) => e, qt = {title: "", url: "", list: []}, Yt = (e = qt) => e,
            Jt = {isLogin: !1, isYJAppiOSBrowser: !1, isAppByYJ: !1, isIE: !1, abTestBuckets: null}, Gt = (e = Jt) => e,
            Xt = {isShow: !1, text: ""}, Qt = (e = Xt) => e;
        var Kt = n(8327), en = (e, t, n) => new Promise(((o, i) => {
            var s = e => {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }, r = e => {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
            a((n = n.apply(e, t)).next())
        }));

        class tn {
            static get(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t}) {
                    const n = this.addQueryParameterToUrl(e, t || {}),
                        o = yield fetch(n, {method: "GET", credentials: "same-origin"}).catch((() => ({
                            ok: !1,
                            status: 500
                        })));
                    try {
                        const e = o instanceof Response ? yield o.json() : null;
                        return o.ok ? {isSuccess: !0, status: o.status, response: e} : {
                            isSuccess: !1,
                            status: o.status,
                            code: null == e ? void 0 : e.code,
                            detail: null == e ? void 0 : e.detail
                        }
                    } catch (e) {
                        return {isSuccess: !1, status: 500}
                    }
                }))
            }

            static getWithCredential(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t, userToken: n}) {
                    const o = this.addQueryParameterToUrl(e, t || {}), i = yield fetch(o, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {UserToken: n}
                    }).catch((() => ({ok: !1, status: 500})));
                    if (!i.ok) return {isSuccess: !1, status: i.status};
                    try {
                        return {isSuccess: !0, status: i.status, response: yield i.json()}
                    } catch (e) {
                        return {isSuccess: !1, status: 500}
                    }
                }))
            }

            static postWithCredential(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t, body: n, userToken: o}) {
                    const i = this.addQueryParameterToUrl(e, t || {}), s = yield fetch(i, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {"Content-Type": "application/json", UserToken: o},
                        body: n ? JSON.stringify(n) : void 0
                    }).catch((() => ({ok: !1, status: 500})));
                    if (204 === s.status) return {isSuccess: !0, status: s.status, response: null};
                    try {
                        const e = s instanceof Response ? yield s.json() : null;
                        return s.ok ? {isSuccess: !0, status: s.status, response: e} : {
                            isSuccess: !1,
                            status: s.status,
                            code: null == e ? void 0 : e.code
                        }
                    } catch (e) {
                        return {isSuccess: !1, status: s.status}
                    }
                }))
            }

            static putWithCredential(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t, userToken: n, useAsWidget: o}) {
                    const i = this.addQueryParameterToUrl(e, t || {}), s = yield fetch(i, {
                        method: "PUT",
                        credentials: o ? "include" : "same-origin",
                        headers: {UserToken: n}
                    }).catch((() => ({ok: !1, status: 500})));
                    if (s.ok) return {isSuccess: !0, status: s.status, response: null};
                    let r;
                    try {
                        r = s instanceof Response ? yield s.json() : null
                    } catch (e) {
                        return {isSuccess: !1, status: s.status}
                    }
                    return {isSuccess: !1, status: s.status, code: null == r ? void 0 : r.code}
                }))
            }

            static deleteWithCredential(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t, userToken: n, useAsWidget: o}) {
                    const i = this.addQueryParameterToUrl(e, t || {}), s = yield fetch(i, {
                        method: "DELETE",
                        credentials: o ? "include" : "same-origin",
                        headers: {UserToken: n}
                    }).catch((() => ({ok: !1, status: 500})));
                    if (s.ok) return {isSuccess: !0, status: s.status, response: null};
                    let r;
                    try {
                        r = s instanceof Response ? yield s.json() : null
                    } catch (e) {
                        return {isSuccess: !1, status: s.status}
                    }
                    return {isSuccess: !1, status: s.status, code: null == r ? void 0 : r.code}
                }))
            }

            static patchWithCredential(e) {
                return en(this, arguments, (function* ({url: e, queryParameters: t, body: n, userToken: o}) {
                    const i = this.addQueryParameterToUrl(e, t || {}), s = yield fetch(i, {
                        method: "PATCH",
                        credentials: "same-origin",
                        headers: {"Content-Type": "application/json", UserToken: o},
                        body: n ? JSON.stringify(n) : void 0
                    }).catch((() => ({ok: !1, status: 500})));
                    if (204 === s.status) return {isSuccess: !0, status: s.status, response: null};
                    try {
                        const e = s instanceof Response ? yield s.json() : null;
                        return s.ok ? {isSuccess: !0, status: s.status, response: e} : {
                            isSuccess: !1,
                            status: s.status,
                            code: null == e ? void 0 : e.code
                        }
                    } catch (e) {
                        return {isSuccess: !1, status: s.status}
                    }
                }))
            }

            static addQueryParameterToUrl(e, t) {
                const n = Object.keys(t).map((e => [e, t[e]])).filter((e => void 0 !== e[1])).map((([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)).join("&");
                return n ? -1 === e.indexOf("?") ? `${e}?${n}` : `${e}&${n}` : e
            }
        }

        const nn = "commentDigest", on = (e, t) => `${e}:${t}`,
            sn = (0, Kt.HF)({selectId: e => on(e.propertyId, e.commentArticleId)}),
            rn = sn.getSelectors((e => e.commentDigest)), an = (e, t, n) => rn.selectById(e, on(t, n)),
            ln = (0, Kt.hg)("commentDigest/FETCH", ((e, t) => {
                return n = void 0, o = [e, t], i = function* ({propertyId: e, commentArticleId: t}, n) {
                    var o;
                    const i = an(n.getState(), e, t);
                    if ((null == i ? void 0 : i.requestId) !== n.requestId) return;
                    const s = yield tn.get({url: `/api/public/comment-digest/properties/${e}/articles/${t}`});
                    return s.isSuccess ? s.response : n.rejectWithValue(null != (o = s.code) ? o : "")
                }, new Promise(((e, t) => {
                    var s = e => {
                        try {
                            a(i.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }, r = e => {
                        try {
                            a(i.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }, a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, r);
                    a((i = i.apply(n, o)).next())
                }));
                var n, o, i
            })), cn = (0, Kt.oM)({
                name: nn, initialState: sn.getInitialState(), reducers: {}, extraReducers: e => {
                    e.addCase(ln.pending, ((e, t) => {
                        sn.addOne(e, {
                            propertyId: t.meta.arg.propertyId,
                            commentArticleId: t.meta.arg.commentArticleId,
                            digest: null,
                            isLoading: !0,
                            isError: !1,
                            requestId: t.meta.requestId
                        })
                    })).addCase(ln.fulfilled, ((e, t) => {
                        t.payload && sn.updateOne(e, {
                            id: on(t.meta.arg.propertyId, t.meta.arg.commentArticleId),
                            changes: {digest: t.payload, isLoading: !1, isError: !1}
                        })
                    })).addCase(ln.rejected, ((e, t) => {
                        sn.updateOne(e, {
                            id: on(t.meta.arg.propertyId, t.meta.arg.commentArticleId),
                            changes: {digest: null, isLoading: !1, isError: !0}
                        })
                    }))
                }
            }).reducer;
        var dn = n(94886);
        const pn = "YAHOO.JP.News.Article.like.aricleIds.t2", mn = 1, hn = "YAHOO.JP.News.Article.reaction.tutorial",
            un = 1;
        var gn = (e, t, n) => new Promise(((o, i) => {
            var s = e => {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }, r = e => {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
            a((n = n.apply(e, t)).next())
        }));
        const xn = () => gn(void 0, null, (function* () {
                var e;
                const t = yield fetch("/api/token", {credentials: "same-origin"});
                if (!t.ok) return "";
                const n = yield t.json();
                return null != (e = null == n ? void 0 : n.userToken) ? e : ""
            })), _n = (e, t, n, o, i, s, r, a) => gn(void 0, null, (function* () {
                const l = {
                    device: t,
                    os: n,
                    appType: o,
                    mediaId: i,
                    serviceId: "news",
                    categoryId: a,
                    uiid: s,
                    actionType: "remove"
                }, c = null != r ? r : yield xn();
                fetch(`/api/articleReaction/${e}`, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json", userToken: c},
                    body: JSON.stringify(l)
                })
            })), fn = i.I0, wn = "articleReaction/REFLECT_LOCALSTORAGE", bn = "articleReaction/ADD_REACTION",
            vn = "articleReaction/REMOVE_REACTION", yn = "articleReaction/HIDDEN_REACTION_TUTORIAL",
            jn = {5: "info", 6: "clear", 7: "newpov"};
        var In = Object.defineProperty, Cn = Object.defineProperties, Pn = Object.getOwnPropertyDescriptors,
            kn = Object.getOwnPropertySymbols, Sn = Object.prototype.hasOwnProperty,
            Tn = Object.prototype.propertyIsEnumerable,
            On = (e, t, n) => t in e ? In(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Dn = (e, t) => {
                for (var n in t || (t = {})) Sn.call(t, n) && On(e, n, t[n]);
                if (kn) for (var n of kn(t)) Tn.call(t, n) && On(e, n, t[n]);
                return e
            }, En = (e, t) => Cn(e, Pn(t));
        const Ln = {isArticleReactionError: !0}, Zn = e => {
                switch (e) {
                    case"info":
                        return "5";
                    case"clear":
                        return "6";
                    case"newpov":
                        return "7";
                    default:
                        return e
                }
            }, zn = (e = Ln, t) => {
                var n, o, i, s, r, a, l, c, d;
                switch (t.type) {
                    case wn: {
                        const o = dn.X.get(pn, mn),
                            i = null == (n = null == o ? void 0 : o.items.filter((e => e.shcid === t.payload.contentId))[0]) ? void 0 : n.ui,
                            s = i ? jn[i] : void 0, r = e.articleReactions || {clear: 0, newpov: 0, info: 0}, a = Dn({}, r);
                        i && 0 === a[jn[i]] && (a[jn[i]] = 1);
                        const l = dn.X.get(hn, un);
                        return En(Dn({}, e), {
                            selectedUiPattern: s,
                            isReflectedLocalStorage: !0,
                            articleReactions: a,
                            isShownArticleReactionTutorial: !1 !== (null == l ? void 0 : l.isShow)
                        })
                    }
                    case bn: {
                        const n = dn.X.get(pn, mn),
                            p = ((null == n ? void 0 : n.items) || []).filter((e => e.shcid !== t.payload.contentId));
                        p.push({
                            shcid: t.payload.contentId,
                            ui: Zn(t.payload.uiPattern)
                        }), dn.X.set(pn, mn, {items: p.slice(-500)});
                        const m = e.articleReactions || {clear: 0, newpov: 0, info: 0}, h = Dn({}, m);
                        return t.payload.beforeSelectedUiPattern && (_n(t.payload.contentId, t.payload.device, t.payload.os, t.payload.appType, t.payload.mediaId, t.payload.beforeSelectedUiPattern, t.payload.accessToken, t.payload.categoryId), h[t.payload.beforeSelectedUiPattern]--), t.payload.uiPattern && (o = t.payload.contentId, i = t.payload.device, s = t.payload.os, r = t.payload.appType, a = t.payload.mediaId, l = t.payload.uiPattern, c = t.payload.accessToken, d = t.payload.categoryId, gn(void 0, null, (function* () {
                            const e = {
                                device: i,
                                os: s,
                                appType: r,
                                mediaId: a,
                                serviceId: "news",
                                categoryId: d,
                                uiid: l,
                                actionType: "add"
                            }, t = null != c ? c : yield xn();
                            fetch(`/api/articleReaction/${o}`, {
                                method: "POST",
                                credentials: "same-origin",
                                headers: {"Content-Type": "application/json", userToken: t},
                                body: JSON.stringify(e)
                            })
                        })), h[t.payload.uiPattern]++), En(Dn({}, e), {
                            selectedUiPattern: t.payload.uiPattern,
                            articleReactions: h
                        })
                    }
                    case vn: {
                        const n = dn.X.get(pn, mn),
                            o = ((null == n ? void 0 : n.items) || []).filter((e => e.shcid !== t.payload.contentId));
                        dn.X.set(pn, mn, {items: o});
                        const i = e.articleReactions || {clear: 0, newpov: 0, info: 0}, s = Dn({}, i);
                        return t.payload.uiPattern && (_n(t.payload.contentId, t.payload.device, t.payload.os, t.payload.appType, t.payload.mediaId, t.payload.uiPattern, t.payload.accessToken, t.payload.categoryId), s[t.payload.uiPattern]--), En(Dn({}, e), {
                            selectedUiPattern: void 0,
                            articleReactions: s
                        })
                    }
                    case yn:
                        return dn.X.set(hn, un, {isShow: !1}), En(Dn({}, e), {isShownArticleReactionTutorial: !1});
                    default:
                        return e
                }
            }, $n = {isSuccess: !1}, An = (e = $n) => e, Rn = "articleExpertRecommend/RECOMMEND",
            Fn = "articleExpertRecommend/CANCEL", Un = "articleExpertRecommend/ERROR",
            Bn = "articleExpertRecommend/UPDATE_FETCH_STATUS";
        var Nn = Object.defineProperty, Mn = Object.defineProperties, Vn = Object.getOwnPropertyDescriptors,
            Wn = Object.getOwnPropertySymbols, Hn = Object.prototype.hasOwnProperty,
            qn = Object.prototype.propertyIsEnumerable,
            Yn = (e, t, n) => t in e ? Nn(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Jn = (e, t) => {
                for (var n in t || (t = {})) Hn.call(t, n) && Yn(e, n, t[n]);
                if (Wn) for (var n of Wn(t)) qn.call(t, n) && Yn(e, n, t[n]);
                return e
            }, Gn = (e, t) => Mn(e, Vn(t));
        const Xn = {recommendedExpertIds: [], isFetching: !1}, Qn = e => ({type: Un, payload: {errorStatus: e}}),
            Kn = e => ({type: Bn, payload: {isFetching: e}});
        var eo = (e, t, n) => new Promise(((o, i) => {
            var s = e => {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }, r = e => {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
            a((n = n.apply(e, t)).next())
        }));
        const to = i.I0, no = () => eo(void 0, null, (function* () {
                var e;
                const t = yield fetch("/api/token", {credentials: "same-origin"});
                if (!t.ok) return "";
                const n = yield t.json();
                return null != (e = null == n ? void 0 : n.userToken) ? e : ""
            })), oo = (e, t, n, o, i) => s => eo(void 0, null, (function* () {
                s(Kn(!0));
                const r = {articleTitle: t, articleUrl: n}, a = null != i ? i : yield no();
                return yield fetch(`/api/articleExpertRecommend/${e}`, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json", userToken: a},
                    body: JSON.stringify(r)
                }).then((e => {
                    if (e.ok) return s((e => ({type: Rn, payload: {expertId: e}}))(o)), void s(Qn("none"));
                    429 !== e.status ? s(Qn("recommendError")) : s(Qn("limitRecommend"))
                })).finally((() => {
                    s(Kn(!1))
                }))
            })), io = (e, t, n) => o => eo(void 0, null, (function* () {
                o(Kn(!0));
                const i = null != n ? n : yield no();
                yield fetch(`/api/articleExpertRecommend/${e}`, {
                    method: "DELETE",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json", userToken: i}
                }).then((e => {
                    if (e.ok) return o((e => ({type: Fn, payload: {expertId: e}}))(t)), void o(Qn("none"));
                    429 !== e.status ? o(Qn("cancelError")) : o(Qn("limitRecommend"))
                })).finally((() => {
                    o(Kn(!1))
                }))
            })), so = ((0, wt.P1)([({articleExpertRecommend: e}) => {
                var t;
                return null != (t = null == e ? void 0 : e.recommendedExpertIds) ? t : []
            }, ({articleReaction: e}) => null == e ? void 0 : e.expertId], ((e, t) => void 0 !== t && e.includes(t))), (e = Xn, t) => {
                var n, o;
                switch (t.type) {
                    case Rn:
                        return Gn(Jn({}, e), {recommendedExpertIds: [...null != (n = e.recommendedExpertIds) ? n : [], t.payload.expertId]});
                    case Fn: {
                        const n = null == (o = e.recommendedExpertIds) ? void 0 : o.filter((e => e !== t.payload.expertId));
                        return Gn(Jn({}, e), {recommendedExpertIds: n})
                    }
                    case Un:
                        return Gn(Jn({}, e), {errorStatus: t.payload.errorStatus});
                    case Bn:
                        return Gn(Jn({}, e), {isFetching: t.payload.isFetching});
                    default:
                        return e
                }
            }), ro = {isEnabledPolls: !0}, ao = (e = ro) => e, lo = "notVoted", co = "thumbsUpVoted", po = "empathyVoted",
            mo = "insightVoted", ho = "negativeVoted", uo = "voteLoading", go = "empathyCancelLoading",
            xo = "insightCancelLoading", _o = "negativeCancelLoading", fo = "conflict", wo = "errorWhileVoting",
            bo = "errorWhileCancelingEmpathy", vo = "errorWhileCancelingInsight", yo = "errorWhileCancelingNegative",
            jo = [lo, wo, fo], Io = [uo, co], Co = [po, go, bo], Po = [mo, xo, vo], ko = [ho, _o, yo],
            So = [uo, go, xo, _o], To = [wo, bo, vo, yo], Oo = [po, bo], Do = [mo, vo], Eo = [ho, yo],
            Lo = "comment/REQUEST_REGISTER_VOTE", Zo = "comment/CONFLICT_VOTE",
            zo = "comment/SUCCESS_REGISTER_THUMBS_UP", $o = "comment/SUCCESS_REGISTER_EMPATHY",
            Ao = "comment/SUCCESS_REGISTER_INSIGHT", Ro = "comment/SUCCESS_REGISTER_NEGATIVE",
            Fo = "comment/FAILURE_REGISTER_VOTE", Uo = "comment/REQUEST_CANCEL_EMPATHY",
            Bo = "comment/REQUEST_CANCEL_INSIGHT", No = "comment/REQUEST_CANCEL_NEGATIVE",
            Mo = "comment/SUCCESS_CANCEL_VOTE", Vo = "comment/FAILURE_CANCEL_EMPATHY",
            Wo = "comment/FAILURE_CANCEL_INSIGHT", Ho = "comment/FAILURE_CANCEL_NEGATIVE",
            qo = (0, Kt.PH)(Lo, (e => ({payload: {commentId: e, voteStatus: uo}}))),
            Yo = (0, Kt.PH)(Zo, (e => ({payload: {commentId: e, voteStatus: fo}}))),
            Jo = (0, Kt.PH)(zo, (e => ({payload: {commentId: e, voteStatus: co}}))),
            Go = (0, Kt.PH)($o, (e => ({payload: {commentId: e, voteStatus: po}}))),
            Xo = (0, Kt.PH)(Ao, (e => ({payload: {commentId: e, voteStatus: mo}}))),
            Qo = (0, Kt.PH)(Ro, (e => ({payload: {commentId: e, voteStatus: ho}}))),
            Ko = (0, Kt.PH)(Fo, (e => ({payload: {commentId: e, voteStatus: wo}}))),
            ei = (0, Kt.PH)(Uo, (e => ({payload: {commentId: e, voteStatus: go}}))),
            ti = (0, Kt.PH)(Bo, (e => ({payload: {commentId: e, voteStatus: xo}}))),
            ni = (0, Kt.PH)(No, (e => ({payload: {commentId: e, voteStatus: _o}}))),
            oi = (0, Kt.PH)(Mo, (e => ({payload: {commentId: e, voteStatus: lo}}))),
            ii = (0, Kt.PH)(Vo, (e => ({payload: {commentId: e, voteStatus: bo}}))),
            si = (0, Kt.PH)(Wo, (e => ({payload: {commentId: e, voteStatus: vo}}))),
            ri = (0, Kt.PH)(Ho, (e => ({payload: {commentId: e, voteStatus: yo}})));
        var ai = Object.defineProperty, li = Object.defineProperties, ci = Object.getOwnPropertyDescriptors,
            di = Object.getOwnPropertySymbols, pi = Object.prototype.hasOwnProperty,
            mi = Object.prototype.propertyIsEnumerable,
            hi = (e, t, n) => t in e ? ai(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            ui = (e, t) => {
                for (var n in t || (t = {})) pi.call(t, n) && hi(e, n, t[n]);
                if (di) for (var n of di(t)) mi.call(t, n) && hi(e, n, t[n]);
                return e
            }, gi = (e, t) => li(e, ci(t));
        const xi = "loading", _i = "success", fi = "highLoad", wi = "hidden", bi = "off", vi = "ng", yi = "terminated",
            ji = "error", Ii = {
                notice: {notices: []},
                totalCommentCount: 0,
                comments: [],
                commentatorComments: [],
                article: null,
                propertyId: null,
                commentArticleId: null,
                commentUrl: null,
                commentCountUrl: null,
                loginOrCommentDetailUrl: null,
                token: null,
                moduleStatus: bi,
                canWebToApp: !1,
                isShow: !1,
                isShowCommentSummaryInduction: !1
            }, Ci = "commentShort/REQUEST_FETCH_COMMENT", Pi = "commentShort/SUCCESS_FETCH_COMMENT",
            ki = "commentShort/FAILURE_FETCH_COMMENT", Si = "commentShort/REGISTER_SHOW_COMMENT",
            Ti = e => ({type: ki, payload: {moduleStatus: e}}), Oi = e => ({type: Si, payload: {isShow: e}}),
            Di = (e = Ii, t) => {
                if (e.moduleStatus === bi || e.moduleStatus === vi) return e;
                if (e.moduleStatus === xi || e.moduleStatus === wi || e.moduleStatus === ji || e.moduleStatus === _i || e.moduleStatus === fi) switch (t.type) {
                    case Ci:
                        return gi(ui({}, e), {moduleStatus: xi});
                    case Pi:
                        return gi(ui({}, e), {
                            comments: t.payload.comments,
                            commentatorComments: t.payload.commentatorComments,
                            article: t.payload.article,
                            moduleStatus: _i,
                            isShowCommentSummaryInduction: t.payload.isEnabledCommentSummaryInduction
                        });
                    case ki:
                        return gi(ui({}, e), {moduleStatus: t.payload.moduleStatus});
                    case Lo:
                    case Uo:
                    case Bo:
                    case No:
                    case zo:
                    case $o:
                    case Ao:
                    case Ro:
                    case Mo:
                    case Zo:
                    case Fo:
                    case Vo:
                    case Wo:
                    case Ho:
                        return Ei(e, t.payload.commentId, t.payload.voteStatus);
                    case Si:
                        return gi(ui({}, e), {isShow: t.payload.isShow});
                    default:
                        return e
                }
                return e
            }, Ei = (e, t, n) => gi(ui({}, e), {
                comments: e.comments.map((e => e.commentId === t ? gi(ui({}, e), {commentVoteStatus: n}) : e)),
                commentatorComments: e.commentatorComments.map((e => e.commentId === t ? gi(ui({}, e), {commentVoteStatus: n}) : e))
            });
        var Li = n(45578), Zi = n.n(Li), zi = n(93187);
        const $i = "articlesOtherData/FETCH", Ai = "articlesOtherData/FETCH_COMMENT_COUNT",
            Ri = "articlesOtherData/FETCH_COMMENT_COUNT_STATUS", Fi = "articlesOtherData/FETCH_EXPERT_RECOMMEND_COUNT",
            Ui = "articlesOtherData/FETCH_EXPERT_RECOMMEND_COUNT_STATUS", Bi = "articlesOtherData/FETCH_MORE",
            Ni = "articlesOtherData/FETCH_FAILURE", Mi = "articlesOtherData/UPDATE_FETCH_STATUS",
            Vi = "articleOtherData/UPDATE_DISLIKE_BALLOON", Wi = "articleOtherData/UPDATE_PANEL_LIST_DISLIKE_BALLOON",
            Hi = "articleOtherData/REPLACE_DISLIKED_CONTENTS_WITH_COMPENSATION";
        var qi = Object.defineProperty, Yi = Object.defineProperties, Ji = Object.getOwnPropertyDescriptors,
            Gi = Object.getOwnPropertySymbols, Xi = Object.prototype.hasOwnProperty,
            Qi = Object.prototype.propertyIsEnumerable,
            Ki = (e, t, n) => t in e ? qi(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            es = (e, t) => {
                for (var n in t || (t = {})) Xi.call(t, n) && Ki(e, n, t[n]);
                if (Gi) for (var n of Gi(t)) Qi.call(t, n) && Ki(e, n, t[n]);
                return e
            }, ts = (e, t) => Yi(e, Ji(t));
        const ns = {
                pcArticleRecommend: null,
                infiniteTimelineItems: {items: [], isLimit: !1, isFetching: !1, isError: !1, isErrorOnClient: !1},
                micropaymentRecommendContent: null,
                videotextnewsRanking: null,
                paidArticleListRecommend: null,
                isError: !1
            },
            os = e => e.viewType === zi.bW.ARTICLE || e.viewType === zi.bW.ARTICLE_WIDE || e.viewType === zi.bW.VIDEO || e.viewType === zi.bW.ARTICLE_EMPTY;
        var is = n(77137);
        const ss = e => ({type: Mi, payload: {isFetching: e}}),
            rs = (e, t) => ({type: Ri, payload: {contentId: e, fetchStatus: t}}),
            as = (e, t) => ({type: Ui, payload: {contentId: e, fetchStatus: t}});
        var ls = n(34988);
        const cs = "news_user", ds = "polls_user", ps = "news_commentator", ms = "expert_user",
            hs = e => Object.values(e),
            us = (hs({news_user: cs, polls_user: ds, news_commentator: ps, expert_user: ms}), hs({
                news_user: cs,
                polls_user: ds,
                expert_user: ms
            }), hs({news_commentator: ps}), hs({polls_user: ds}));
        hs({expert_user: ms});
        var gs = Object.defineProperty, xs = Object.defineProperties, _s = Object.getOwnPropertyDescriptors,
            fs = Object.getOwnPropertySymbols, ws = Object.prototype.hasOwnProperty,
            bs = Object.prototype.propertyIsEnumerable,
            vs = (e, t, n) => t in e ? gs(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            ys = (e, t) => {
                for (var n in t || (t = {})) ws.call(t, n) && vs(e, n, t[n]);
                if (fs) for (var n of fs(t)) bs.call(t, n) && vs(e, n, t[n]);
                return e
            }, js = (e, t) => xs(e, _s(t)), Is = (e, t, n) => new Promise(((o, i) => {
                var s = e => {
                    try {
                        a(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }, r = e => {
                    try {
                        a(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
                a((n = n.apply(e, t)).next())
            }));
        const Cs = i.I0;
        var Ps = Object.defineProperty, ks = Object.getOwnPropertySymbols, Ss = Object.prototype.hasOwnProperty,
            Ts = Object.prototype.propertyIsEnumerable,
            Os = (e, t, n) => t in e ? Ps(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Ds = (e, t) => {
                for (var n in t || (t = {})) Ss.call(t, n) && Os(e, n, t[n]);
                if (ks) for (var n of ks(t)) Ts.call(t, n) && Os(e, n, t[n]);
                return e
            };

        function Es(e, t) {
            const n = We.parseUrl(e), o = We.stringify(Ds(Ds({}, n.query), t));
            return `${n.url}?${o}`
        }

        const Ls = e => e.articleOtherData,
            Zs = (0, wt.P1)([Ls], (e => null === e.micropaymentRecommendContent ? [] : e.micropaymentRecommendContent.recommend.map((e => {
                var t, n;
                return {
                    headline: e.title,
                    mediaName: e.mediaName,
                    newsLink: Es(e.link, {source: "pc-detail-subcolumn"}),
                    croppedThumbUrl: e.thumbUrl ? e.thumbUrl : void 0,
                    taxIncludedPrice: e.taxIncludedPrice ? e.taxIncludedPrice : void 0,
                    dateString: e.createTime ? e.createTime.date : "",
                    timeString: e.createTime ? e.createTime.time : "",
                    hasVideo: null !== e.video,
                    duration: null != (n = null == (t = e.video) ? void 0 : t.duration) ? n : void 0
                }
            })))), zs = (0, wt.P1)([Ls], (e => {
                var t, n, o;
                const i = (null != (n = null == (t = e.pcArticleRecommend) ? void 0 : t.timeline.items) ? n : []).map((e => {
                        switch (e.viewType) {
                            case zi.bW.ARTICLE:
                            case zi.bW.ARTICLE_EMPTY:
                            case zi.bW.ARTICLE_WIDE:
                                return e.contentId;
                            default:
                                return
                        }
                    })).filter((e => "string" == typeof e)),
                    s = e.infiniteTimelineItems.items.filter((e => null === e.contentId || !i.includes(e.contentId)));
                return [...(null == (o = e.pcArticleRecommend) ? void 0 : o.timeline.items) || [], ...s]
            })), $s = (e = ns, t) => {
                var n, o, i, s, r;
                switch (t.type) {
                    case $i:
                        return ts(es(es({}, e), t.payload), {isError: !1});
                    case Ai:
                        if (void 0 === e.pcArticleRecommend || null === e.pcArticleRecommend) return e;
                        const a = e.pcArticleRecommend.timeline.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {commentCount: t.payload.count || 0}) : e)),
                            l = e.infiniteTimelineItems.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {commentCount: t.payload.count || 0}) : e));
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {timeline: ts(es({}, e.pcArticleRecommend.timeline), {items: a})}),
                            infiniteTimelineItems: ts(es({}, e.infiniteTimelineItems), {items: l})
                        });
                    case Ri:
                        if (void 0 === e.pcArticleRecommend || null === e.pcArticleRecommend) return e;
                        const c = e.pcArticleRecommend.timeline.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {
                                isCommentCountFetching: "fetching" === t.payload.fetchStatus,
                                commentCountFetchStatus: t.payload.fetchStatus
                            }) : e)),
                            d = e.infiniteTimelineItems.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {
                                isCommentCountFetching: "fetching" === t.payload.fetchStatus,
                                commentCountFetchStatus: t.payload.fetchStatus
                            }) : e));
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {timeline: ts(es({}, e.pcArticleRecommend.timeline), {items: c})}),
                            infiniteTimelineItems: ts(es({}, e.infiniteTimelineItems), {items: d})
                        });
                    case Fi:
                        if (void 0 === e.pcArticleRecommend || null === e.pcArticleRecommend) return e;
                        const p = e.pcArticleRecommend.timeline.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {expertRecommendCount: t.payload.count || 0}) : e)),
                            m = e.infiniteTimelineItems.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {expertRecommendCount: t.payload.count || 0}) : e));
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {timeline: ts(es({}, e.pcArticleRecommend.timeline), {items: p})}),
                            infiniteTimelineItems: ts(es({}, e.infiniteTimelineItems), {items: m})
                        });
                    case Ui:
                        if (void 0 === e.pcArticleRecommend || null === e.pcArticleRecommend) return e;
                        const h = e.pcArticleRecommend.timeline.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {expertRecommendCountFetchStatus: t.payload.fetchStatus}) : e)),
                            u = e.infiniteTimelineItems.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {expertRecommendCountFetchStatus: t.payload.fetchStatus}) : e));
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {timeline: ts(es({}, e.pcArticleRecommend.timeline), {items: h})}),
                            infiniteTimelineItems: ts(es({}, e.infiniteTimelineItems), {items: u})
                        });
                    case Mi:
                        return ts(es({}, e), {
                            infiniteTimelineItems: {
                                isFetching: t.payload.isFetching,
                                isLimit: e.infiniteTimelineItems.isLimit,
                                isError: e.infiniteTimelineItems.isError,
                                isErrorOnClient: e.infiniteTimelineItems.isErrorOnClient,
                                items: e.infiniteTimelineItems.items
                            }
                        });
                    case Bi:
                        const g = e.infiniteTimelineItems.items.concat(t.payload.body.items),
                            x = Zi()(g, (e => e.contentId));
                        return ts(es({}, e), {
                            infiniteTimelineItems: {
                                isFetching: e.infiniteTimelineItems.isFetching,
                                isLimit: t.payload.body.isLimit,
                                isError: e.infiniteTimelineItems.isError,
                                isErrorOnClient: e.infiniteTimelineItems.isErrorOnClient,
                                items: x
                            }
                        });
                    case Ni:
                        const _ = t.payload.statusCode ? t.payload.statusCode >= 400 && t.payload.statusCode < 500 : e.infiniteTimelineItems.isErrorOnClient;
                        return ts(es({}, e), {
                            infiniteTimelineItems: {
                                isFetching: e.infiniteTimelineItems.isFetching,
                                isLimit: e.infiniteTimelineItems.isLimit,
                                isError: !0,
                                isErrorOnClient: _,
                                items: e.infiniteTimelineItems.items
                            }
                        });
                    case Vi:
                        if (void 0 === e.pcArticleRecommend || null === e.pcArticleRecommend) return e;
                        const f = e.pcArticleRecommend.timeline.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {isDislikeBalloonOpen: !e.isDislikeBalloonOpen}) : os(e) && e.contentId !== t.payload.contentId && e.isDislikeBalloonOpen ? ts(es({}, e), {isDislikeBalloonOpen: !1}) : e)),
                            w = e.infiniteTimelineItems.items.map((e => os(e) && e.contentId === t.payload.contentId ? ts(es({}, e), {isDislikeBalloonOpen: !e.isDislikeBalloonOpen}) : os(e) && e.contentId !== t.payload.contentId && e.isDislikeBalloonOpen ? ts(es({}, e), {isDislikeBalloonOpen: !1}) : e));
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {timeline: ts(es({}, e.pcArticleRecommend.timeline), {items: f})}),
                            infiniteTimelineItems: ts(es({}, e.infiniteTimelineItems), {items: w})
                        });
                    case Wi:
                        if (!(null == (n = e.pcArticleRecommend) ? void 0 : n.recommend) || 0 === (null == (o = e.pcArticleRecommend) ? void 0 : o.recommend.length)) return e;
                        const b = e.pcArticleRecommend.recommend.map((e => e.contentId === t.payload.contentId ? ts(es({}, e), {isDislikeBalloonOpen: !e.isDislikeBalloonOpen}) : e.isDislikeBalloonOpen ? ts(es({}, e), {isDislikeBalloonOpen: !1}) : e));
                        return ts(es({}, e), {pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {recommend: b})});
                    case Hi: {
                        if (null === e.pcArticleRecommend || null === e.pcArticleRecommend.recommend) return e;
                        if (!(null == (i = t.payload.contentIds) ? void 0 : i.length)) return ts(es({}, e), {pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {isReplaced: !0})});
                        const n = null != (r = null == (s = e.pcArticleRecommend.compensation) ? void 0 : s.filter((e => {
                                var n;
                                return (null == e ? void 0 : e.contentId) && !(null == (n = t.payload.contentIds) ? void 0 : n.includes(e.contentId))
                            }))) ? r : [], o = n[Symbol.iterator](), a = e => (t.payload.contentIds || []).includes(e),
                            l = e.pcArticleRecommend.recommend.reduce(((e, t) => {
                                if (null === t.contentId || a(t.contentId)) {
                                    const t = o.next().value;
                                    return t && e.push(t), e
                                }
                                return e.push(t), e
                            }), []);
                        return ts(es({}, e), {
                            pcArticleRecommend: ts(es({}, e.pcArticleRecommend), {
                                recommend: l,
                                compensation: n,
                                isReplaced: !0
                            })
                        })
                    }
                    default:
                        return e
                }
            };
        var As = Object.defineProperty, Rs = Object.defineProperties, Fs = Object.getOwnPropertyDescriptors,
            Us = Object.getOwnPropertySymbols, Bs = Object.prototype.hasOwnProperty,
            Ns = Object.prototype.propertyIsEnumerable,
            Ms = (e, t, n) => t in e ? As(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Vs = (e, t) => {
                for (var n in t || (t = {})) Bs.call(t, n) && Ms(e, n, t[n]);
                if (Us) for (var n of Us(t)) Ns.call(t, n) && Ms(e, n, t[n]);
                return e
            }, Ws = (e, t) => Rs(e, Fs(t));
        const Hs = "loading", qs = "success", Ys = "error", Js = "ngKeywordContained", Gs = "forbidden", Xs = {
                status: "idle",
                strengths: null,
                summaryOfMajorityOpinion: null,
                summaryOfNonMajorityOpinion: null,
                keywords: [],
                hash: null,
                isShowCommentSummary: !1,
                hasNgKeywordInArticleTitle: !1,
                commentSummaryToken: ""
            }, Qs = (0, Kt.oM)({
                name: "commentSummary",
                initialState: Xs,
                reducers: {
                    requestCommentSummary: e => Ws(Vs({}, e), {status: Hs}),
                    failureCommentSummary: e => Ws(Vs({}, e), {status: Ys}),
                    ngKeywordContainedCommentSummary: (e, t) => Ws(Vs({}, e), {status: Js, hash: t.payload}),
                    successCommentSummary: (e, t) => Ws(Vs(Vs({}, e), t.payload), {status: qs}),
                    forbiddenCommentSummary: e => Ws(Vs({}, e), {status: Gs})
                }
            }), Ks = Qs.reducer, {
                requestCommentSummary: er,
                failureCommentSummary: tr,
                ngKeywordContainedCommentSummary: nr,
                successCommentSummary: or,
                forbiddenCommentSummary: ir
            } = Qs.actions, sr = (e = null) => e, rr = nt.qC,
            ar = (0, wt.P1)([e => e.articleDetail.hasVideo, e => e.articleDetail.category, e => e.sponsoredAd], ((e, t, n) => {
                if (n) return n.dsId;
                return e || ["domestic", "world", "local"].some((e => e === t)) ? "48264_274217" : "48264_274127"
            })), lr = i.v9, cr = e => (0, nt.MT)((0, nt.UY)({
                request: Pt,
                userData: Gt,
                pageData: Nt,
                masthead: Ht,
                globalNavigation: Rt,
                articleDetail: bt,
                notice: Ut,
                horseRacing: ct,
                soccerJ1League: pt,
                soccerJLeagueCup: ht,
                soccerOverseas: gt,
                baseballNpb: at,
                baseballMlb: st,
                purchaseInfo: yt,
                pageError: St,
                remoteConfig: $t,
                subTopics: Yt,
                textnewsRanking: Et,
                zasshinewsRanking: Et,
                reactionBaseRecommend: Zt,
                commentRanking: Et,
                breakingNews: It,
                paidArticleListNewly: Ot,
                additionalStatement: Qt,
                articleOtherData: $s,
                commentDigest: cn,
                searchConditions: Ze,
                articleReaction: zn,
                articleExpertReaction: An,
                articleExpertRecommend: so,
                pollsModule: ao,
                commentShort: Di,
                commentSummary: Ks,
                userToken: (e = null) => e,
                sponsoredAd: sr,
                featureToggle: (e = null) => e
            }), e, rr((0, nt.md)(ot.Z)));

        class dr extends r.Component {
            constructor(e) {
                super(e), this.state = {hasError: !1}
            }

            static getDerivedStateFromError(e) {
                return {hasError: !0}
            }

            render() {
                return this.state.hasError ? null : this.props.children
            }
        }

        class pr extends r.Component {
            render() {
                return (0, o.jsx)(dr, {children: this.props.component})
            }
        }

        class mr extends r.Component {
            render() {
                const e = r.Children.map(this.props.children, (e => (0, o.jsx)(pr, {component: e})));
                return (0, o.jsx)(r.Fragment, {children: e})
            }
        }

        const hr = a.ZP.div.withConfig({componentId: "sc-ea06qp-0"})(["flex:1;min-width:0;max-width:", ";*::-ms-backdrop{flex:1 1 auto;width:", ";}", ""], (({isOneColumnPage: e}) => e ? "none" : c), c, (({overWriteStyle: e}) => !!e && e)),
            ur = a.ZP.div.withConfig({componentId: "sc-ea06qp-1"})(["margin-top:-1px;background-color:", ";border:1px solid ", ";"], (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bor_lv2_pc));

        class gr extends r.Component {
            render() {
                const e = r.Children.map(this.props.children, (e => (0, o.jsx)(pr, {component: e})));
                return (0, o.jsxs)(hr, {
                    id: "yjnMain",
                    className: this.props.isOneColumnPage ? "oneColumn" : "",
                    isOneColumnPage: this.props.isOneColumnPage,
                    overWriteStyle: this.props.overWriteStyle,
                    children: [(0, o.jsx)(ur, {id: "contentsWrap", children: e}), this.props.appendElement]
                })
            }
        }

        gr.defaultProps = {isOneColumnPage: !1};
        const xr = a.ZP.div.withConfig({componentId: "sc-g8avba-0"})(["width:", ";padding-top:12px;margin-left:", ";"], d, p),
            _r = a.ZP.div.withConfig({componentId: "sc-g8avba-1"})(["", " ", ""], (e => e.hasPadding ? "padding-bottom: 100px;" : ""), (e => e.isFixed ? `\n      position: fixed;\n      bottom: 0px;\n      width: ${d};\n  ` : ""));

        class fr extends r.Component {
            constructor(e) {
                super(e), this.subColumnFixed = () => {
                    const e = document.getElementById("yjnFixableArea"), t = document.getElementById("yjnMain"),
                        n = document.getElementById("yjnSub"), o = document.getElementById("yjnFooter"),
                        i = document.getElementById("contentsWrap"), s = window.pageYOffset + window.innerHeight,
                        r = this.props.hasOverlayAd ? 90 : 0;
                    if (t && e && i && n) {
                        const a = t.offsetTop + e.scrollHeight, l = i.getBoundingClientRect().height,
                            c = e.getBoundingClientRect().height;
                        if (l > c && c > window.innerHeight && e) {
                            const t = n.getBoundingClientRect().left;
                            if (window.innerWidth !== document.documentElement.clientWidth ? e.style.left = `${t + window.scrollX}px` : e.style.left = `${t}px`, s > a) if (this.setState({isFixed: !0}), o && s > o.offsetTop + r) {
                                const t = s - o.offsetTop;
                                e.style.bottom = `${t}px`, this.setState({isScrollToFooter: !0});
                                const n = e.style.display;
                                e.style.display = "none", e.offsetHeight, e.style.display = n
                            } else e.style.bottom = "0px", this.setState({isScrollToFooter: !1}); else this.state.isFixed && (e.style.cssText = "", this.setState({isFixed: !1}))
                        } else this.state.isFixed && (e.style.cssText = "", this.setState({isFixed: !1}))
                    }
                }, this.changeViewportWhenPrimeVisionShown = () => {
                    const e = document.querySelector("meta[name='viewport']"), t = document.getElementById("yjnSub");
                    e && t && t.scrollWidth > t.clientWidth && e.setAttribute("content", "width=1250")
                }, this.state = {isScrollToFooter: !1, isFixed: !1}
            }

            componentDidMount() {
                window.onscroll = this.subColumnFixed, window.onresize = this.subColumnFixed, setInterval(this.changeViewportWhenPrimeVisionShown, 300)
            }

            render() {
                const e = r.Children.map(this.props.children, (e => (0, o.jsx)(pr, {component: e})));
                return (0, o.jsx)(xr, {
                    id: "yjnSub",
                    children: (0, o.jsx)(_r, {
                        id: "yjnFixableArea",
                        hasPadding: !!this.props.hasOverlayAd && !this.state.isScrollToFooter,
                        isFixed: this.state.isFixed,
                        children: (0, o.jsx)("div", {children: e})
                    })
                })
            }
        }

        var wr = n(42273), br = n(19065), vr = n(29883);
        const yr = (0, a.ZP)(wr.v).withConfig({componentId: "sc-1vhlgry-0"})(["width:auto;margin:12px 16px;word-break:break-all;"]);

        class jr extends r.Component {
            render() {
                return this.props.isShow ? (0, o.jsxs)(yr, {
                    border: this.props.hasBorder,
                    variant: this.props.variant,
                    children: [this.props.title ? (0, o.jsx)(br.g, {children: this.props.title}) : null, this.props.text || this.props.linkURL && this.props.linkText ? (0, o.jsxs)(vr.Z, {
                        whiteSpace: "pre-line",
                        children: [this.props.text, "" !== this.props.text && this.props.text ? (0, o.jsx)("br", {}) : null, this.props.linkURL && this.props.linkText ? (0, o.jsx)("a", {
                            href: this.props.linkURL,
                            "data-cl-params": this.props.dataClParams,
                            children: this.props.linkText
                        }) : null]
                    }) : null]
                }) : null
            }
        }

        jr.defaultProps = {hasBorder: !1};

        class Ir extends r.Component {
            render() {
                return this.props.isShow ? (0, o.jsx)("div", {
                    children: (0, o.jsx)(jr, {
                        isShow: !0,
                        variant: "warning",
                        title: "Internet Explorerではページを正しく表示できません",
                        text: "別のブラウザーからアクセスするか、スマートフォンからご覧ください。",
                        linkURL: "https://support.yahoo-net.jp/PccYjcommon/s/article/H000011350",
                        linkText: "推奨ブラウザーについて"
                    })
                }) : null
            }
        }

        const Cr = (0, i.$j)((e => ({isShow: e.userData.isIE})))(Ir);

        class Pr extends r.Component {
            render() {
                return (0, o.jsx)("noscript", {
                    children: (0, o.jsx)(jr, {
                        isShow: !0,
                        variant: "warning",
                        title: "現在JavaScriptが無効になっています",
                        text: "Yahoo!ニュースのすべての機能を利用するためには、JavaScriptの設定を有効にしてください。",
                        linkURL: "https://support.yahoo-net.jp/noscript",
                        linkText: "JavaScriptの設定を変更する方法はこちら"
                    })
                })
            }
        }

        var kr = n(86003);
        (0, a.iv)(["border-top:1px solid ", ";margin-top:-1px;"], (e => e.theme.news.palette.bor_lv2_sp));
        const Sr = "\n  content: '';\n  clear: both;\n  display: block;\n",
            Tr = e => `\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    -webkit-line-clamp: ${e.lines ? e.lines : 3};\n  `,
            Or = e => {
                const t = e.lineHeight ? e.lineHeight : 1.4, n = e.fontSize ? e.fontSize / 16 : .875,
                    o = e.numberOfLine ? e.numberOfLine : 3;
                return `\n    position: relative;\n    display: block;\n    max-height: calc(\n      ${n}rem * ${t} * ${o}\n    ); /* テキスト領域の高さを計算。16はremの基準 */\n    overflow: hidden;\n    text-align: justify;\n    font-size: ${n}rem;\n    line-height: ${t};\n\n    &::before,\n    &::after {\n      position: absolute;\n      background-color: ${e.bgColor ? e.bgColor : "#fff"};\n    }\n\n    /* 三点リーダー */\n    &::before {\n      content: '...';\n      top: calc(${n}rem * ${t} * (${o} - 1));\n      right: 0;\n      width: ${e.widthSize ? e.widthSize : 1.2}em;\n      text-align: center;\n    }\n\n    /* 最終行の末尾までいかないときに三点リーダーを隠す要素 */\n    &::after {\n      content: '';\n      width: 100%;\n      height: 100%;\n    }\n  `
            },
            Dr = e => (0, a.iv)(["position:relative;&::after{position:absolute;top:0;left:0;box-sizing:border-box;display:block;width:", ";height:", ";content:'';border:solid 1px ", ";}"], e.width, e.height, (({theme: e}) => e.news.palette.thumbnail_normal_border_common)),
            Er = e => (0, a.iv)(["position:relative;display:block;width:", "px;height:", "px;padding:0;background:linear-gradient(to right,", " 10%,rgba(255,255,255,0) 42%);border:none;border-radius:", ";transform:translateZ(0);animation:loadingRotation 0.75s linear infinite;&::before{position:absolute;top:0;left:0;width:50%;height:50%;content:'';background-color:", ";border-radius:", ";}&::after{position:absolute;top:0;right:0;bottom:0;left:0;width:75%;height:75%;margin:auto;content:'';background-color:", ";border-radius:", ";}@keyframes loadingRotation{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], e.size, e.size, e.color, U, e.color, B, (({theme: e}) => e.news.palette.bg_lv1_common), U),
            Lr = (0, a.iv)(["@keyframes skeletonScreenWave{0%{opacity:", ";}100%{opacity:", ";}}"], G, X),
            Zr = (0, a.iv)(["&:visited{color:", ";}&:hover{color:", ";}"], (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.link_hover_pc)),
            zr = a.ZP.span.withConfig({componentId: "sc-12pq9o3-0"})(["display:inline-block;width:27px;height:12px;font-size:0;vertical-align:middle;background-size:27px 12px;", ""], (({type: e}) => {
                switch (e) {
                    case"PAY":
                        return (0, a.iv)(["background-image:url(", ");"], te.img_labelIcon_pay);
                    case"NEW":
                        return (0, a.iv)(["background-image:url(", ");"], te.img_labelIcon_new);
                    case"LIVE":
                        return (0, a.iv)(["background-image:url(", ");"], te.img_labelIcon_live);
                    default:
                        return
                }
            }));
        const $r = e => {
                const t = function (e) {
                    switch (e) {
                        case"PAY":
                            return "有料";
                        case"NEW":
                            return "NEW";
                        case"LIVE":
                            return "ライブ";
                        default:
                            return
                    }
                }(e.type);
                return (0, o.jsx)(zr, {type: e.type, "aria-label": t, className: e.className, role: "img"})
            },
            Ar = a.ZP.div.withConfig({componentId: "sc-1klci6s-0"})(["padding:10px 16px;", ""], (({noPaddingBottom: e}) => e ? "padding-bottom: 0;" : "")),
            Rr = a.ZP.a.withConfig({componentId: "sc-1klci6s-1"})(["", " display:flex;align-items:center;padding:8px 12px;border-radius:", ";", " &:hover{text-decoration:none;}"], Zr, $, (({
                                                                                                                                                                                                 type: e,
                                                                                                                                                                                                 theme: t
                                                                                                                                                                                             }) => {
                switch (e) {
                    case"live":
                        return (0, a.iv)(["background-color:", ";border:1px solid ", ";"], t.news.palette.breaking_bg_common, t.news.palette.breaking_bor_common);
                    case"topics":
                        return (0, a.iv)(["background-color:", ";border:1px solid ", ";"], t.news.palette.bg_lv2_common, t.news.palette.btn_simple_border_common);
                    default:
                        return
                }
            })),
            Fr = a.ZP.p.withConfig({componentId: "sc-1klci6s-2"})(["display:flex;flex:none;align-items:center;margin-right:8px;font-size:", ";color:", ";"], se.px14, (e => e.theme.news.palette.text_base_common)),
            Ur = a.ZP.span.withConfig({componentId: "sc-1klci6s-3"})(["padding-left:2px;font-weight:bold;"]),
            Br = a.ZP.p.withConfig({componentId: "sc-1klci6s-4"})(["margin-right:8px;font-size:", ";", ";"], se.px14, Tr({lines: 1})),
            Nr = a.ZP.span.withConfig({componentId: "sc-1klci6s-5"})(["flex:none;font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            Mr = (0, a.ZP)(kr.l).withConfig({componentId: "sc-1klci6s-6"})(["color:", ";"], (e => e.theme.news.palette.text_base_common));

        class Vr extends r.Component {
            render() {
                if (!this.props.breakingItem) return null;
                const e = encodeURIComponent(this.props.breakingItem.url);
                return "live" === this.props.breakingItem.type ? (0, o.jsx)(Ar, {
                    noPaddingBottom: this.props.noPaddingBottom,
                    children: (0, o.jsxs)(Rr, {
                        href: this.props.breakingItem.url,
                        "data-cl-params": `_cl_vmodule:justin;_cl_link:onair;_cl_position:0;targurl:${e};`,
                        type: this.props.breakingItem.type,
                        children: [(0, o.jsxs)(Fr, {children: [(0, o.jsx)(Mr, {size: 20}), (0, o.jsx)(Ur, {children: "速報"})]}), (0, o.jsx)(Br, {children: this.props.breakingItem.title}), (0, o.jsx)(Nr, {children: this.props.breakingItem.time})]
                    })
                }) : "topics" === this.props.breakingItem.type ? (0, o.jsx)(Ar, {
                    noPaddingBottom: this.props.noPaddingBottom,
                    children: (0, o.jsxs)(Rr, {
                        href: this.props.breakingItem.url,
                        "data-cl-params": `_cl_vmodule:justin;_cl_link:topics;_cl_position:0;targurl:${e};title:${this.props.breakingItem.title};`,
                        type: this.props.breakingItem.type,
                        children: [(0, o.jsx)(Fr, {children: (0, o.jsx)(Ur, {children: "新着トピックス"})}), (0, o.jsx)(Br, {children: this.props.breakingItem.title}), (0, o.jsx)($r, {type: "NEW"})]
                    })
                }) : null
            }
        }

        const Wr = (0, i.$j)((e => {
            var t;
            return (null == (t = e.breakingNews) ? void 0 : t.breakingItem) ? {
                breakingItem: e.breakingNews.breakingItem,
                noPaddingBottom: !1
            } : {breakingItem: null, noPaddingBottom: !1}
        }))(Vr);
        var Hr = n(15141), qr = n(75472), Yr = n.n(qr), Jr = Object.defineProperty, Gr = Object.defineProperties,
            Xr = Object.getOwnPropertyDescriptors, Qr = Object.getOwnPropertySymbols,
            Kr = Object.prototype.hasOwnProperty, ea = Object.prototype.propertyIsEnumerable,
            ta = (e, t, n) => t in e ? Jr(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            na = (e, t) => {
                for (var n in t || (t = {})) Kr.call(t, n) && ta(e, n, t[n]);
                if (Qr) for (var n of Qr(t)) ea.call(t, n) && ta(e, n, t[n]);
                return e
            }, oa = (e, t) => Gr(e, Xr(t));

        class ia {
            static sortNoticePC(e) {
                var t;
                const n = e.filter((e => "announce" === e.type)), o = Yr()(n, ["startTime", e => {
                        var t, n;
                        return null == (n = null == (t = Yr()(e.contents, "contentId", "asc")) ? void 0 : t[0]) ? void 0 : n.contentId
                    }], ["desc", "asc"]), i = e.filter((e => "mediatag" === e.type)),
                    s = null == (t = Yr()(i, ["priority", "startTime"], ["desc", "desc"])) ? void 0 : t[0];
                if (s) {
                    const e = [Yr()(s.contents, "contentId", "asc")[0]].filter((e => !!e)),
                        t = oa(na({}, s), {contents: e});
                    return [...o, t]
                }
                return o
            }

            static sortNoticeSP(e, t) {
                var n;
                const o = e.filter((e => "announce" === e.type)), i = Yr()(o, ["startTime", e => {
                        var t, n;
                        return null == (n = null == (t = Yr()(e.contents, "contentId", "asc")) ? void 0 : t[0]) ? void 0 : n.contentId
                    }], ["desc", "asc"]), s = e.filter((e => "mediatag" === e.type)),
                    r = null == (n = Yr()(s, ["priority", "startTime"], ["desc", "desc"])) ? void 0 : n[0];
                if (r) {
                    const e = [Yr()(r.contents, "contentId", "asc")[0]], n = oa(na({}, r), {contents: e});
                    return t ? [n, ...i] : [...i, n]
                }
                return i
            }

            static addPosNoticePC(e) {
                let t = 0, n = 0;
                return e.map((e => oa(na({}, e), {contents: e.contents.map((o => o.linkUrl ? "announce" === e.type ? oa(na({}, o), {pos: ++t}) : oa(na({}, o), {pos: ++n}) : na({}, o)))})))
            }

            static addPosNoticeSP(e) {
                let t = 0, n = 0;
                return e.map((e => oa(na({}, e), {contents: null == e ? void 0 : e.contents.map((o => o.linkUrl ? "announce" === e.type ? oa(na({}, o), {pos: ++t}) : oa(na({}, o), {pos: ++n}) : na({}, o)))})))
            }
        }

        const sa = (0, a.iv)(["display:flex;align-items:center;padding:8px;border:2px solid ", ";border-radius:", ";"], (e => e.theme.news.palette.bor_notice_pc), A),
            ra = a.ZP.div.withConfig({componentId: "sc-1y00yj0-0"})(["background-color:", ";border-radius:", ";& + &{margin-top:8px;}"], (e => e.theme.news.palette.bg_lv1_common), A),
            aa = a.ZP.span.withConfig({componentId: "sc-1y00yj0-1"})(["display:block;flex-shrink:0;width:", ";height:", ";margin-right:8px;background-image:url(", ");background-repeat:no-repeat;background-position:left center;background-size:contain;"], v, v, (({imageUrl: e}) => e)),
            la = a.ZP.p.withConfig({componentId: "sc-1y00yj0-2"})(["font-size:", ";line-height:1.3;"], se.px12),
            ca = a.ZP.div.withConfig({componentId: "sc-1y00yj0-3"})(["", ""], sa),
            da = a.ZP.a.withConfig({componentId: "sc-1y00yj0-4"})(["", " &:visited ", "{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], sa, la, (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_normal_pc), la, (e => e.theme.news.palette.link_hover_pc)),
            pa = a.ZP.div.withConfig({componentId: "sc-1y00yj0-5"})(["flex:0 1 auto;"]),
            ma = a.ZP.p.withConfig({componentId: "sc-1y00yj0-6"})(["margin-top:4px;font-size:", ";line-height:1.3;color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common));

        class ha extends r.Component {
            render() {
                const e = (0, o.jsxs)(r.Fragment, {children: [this.props.imageUrl ? (0, o.jsx)(aa, {imageUrl: this.props.imageUrl}) : null, (0, o.jsxs)(pa, {children: [(0, o.jsx)(la, {children: this.props.title}), this.props.description ? (0, o.jsx)(ma, {children: this.props.description}) : ""]})]}),
                    t = this.props.linkUrl ? (0, o.jsx)(da, {
                        href: this.props.linkUrl,
                        "data-cl-params": this.props.customLoggerParam,
                        children: e
                    }) : (0, o.jsx)(ca, {children: e});
                return (0, o.jsx)(ra, {children: t})
            }
        }

        const ua = (0, a.iv)(["display:flex;align-items:stretch;padding:8px 0;border-bottom:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            ga = a.ZP.span.withConfig({componentId: "sc-i69s-0"})(["display:block;flex-shrink:0;width:", ";height:", ";margin-right:8px;background-image:url(", ");background-repeat:no-repeat;background-position:left center;background-size:contain;"], v, v, (({imageUrl: e}) => e)),
            xa = a.ZP.p.withConfig({componentId: "sc-i69s-1"})(["width:100%;font-size:", ";line-height:1.3;"], se.px14),
            _a = a.ZP.div.withConfig({componentId: "sc-i69s-2"})(["", ""], ua),
            fa = a.ZP.a.withConfig({componentId: "sc-i69s-3"})(["", " &:visited ", "{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], ua, xa, (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_subColumn_pc), xa, (e => e.theme.news.palette.link_hover_pc)),
            wa = a.ZP.div.withConfig({componentId: "sc-i69s-4"})(["display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;width:100%;"]),
            ba = a.ZP.p.withConfig({componentId: "sc-i69s-5"})(["width:100%;margin-top:4px;font-size:", ";line-height:1.3;color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common));

        class va extends r.Component {
            render() {
                const e = (0, o.jsxs)(r.Fragment, {children: [this.props.imageUrl ? (0, o.jsx)(ga, {imageUrl: this.props.imageUrl}) : null, (0, o.jsxs)(wa, {children: [(0, o.jsx)(xa, {children: this.props.title}), this.props.description ? (0, o.jsx)(ba, {children: this.props.description}) : ""]})]}),
                    t = this.props.linkUrl ? (0, o.jsx)(fa, {
                        href: this.props.linkUrl,
                        "data-cl-params": this.props.customLoggerParam,
                        children: e
                    }) : (0, o.jsx)(_a, {children: e});
                return (0, o.jsx)("div", {children: t})
            }
        }

        var ya = Object.defineProperty, ja = Object.defineProperties, Ia = Object.getOwnPropertyDescriptors,
            Ca = Object.getOwnPropertySymbols, Pa = Object.prototype.hasOwnProperty,
            ka = Object.prototype.propertyIsEnumerable,
            Sa = (e, t, n) => t in e ? ya(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Ta = (e, t) => {
                for (var n in t || (t = {})) Pa.call(t, n) && Sa(e, n, t[n]);
                if (Ca) for (var n of Ca(t)) ka.call(t, n) && Sa(e, n, t[n]);
                return e
            }, Oa = (e, t) => ja(e, Ia(t));
        const Da = a.ZP.div.withConfig({componentId: "sc-1eyeko1-0"})(["", ""], (({position: e}) => e === Hr.L.MAIN_TOP ? (0, a.iv)(["&& + &&{margin-top:8px;}"]) : (0, a.iv)(["&& + &&{margin-top:16px;}"]))),
            Ea = a.ZP.p.withConfig({componentId: "sc-1eyeko1-1"})(["padding:4px;font-size:", ";font-weight:bold;line-height:1.3;border-bottom:1px solid ", ";"], se.px14, (e => e.theme.news.palette.bor_lv2_pc));

        class La extends r.Component {
            render() {
                const e = this.props.contents.map(((e, t) => {
                    var n, o;
                    const i = "mediatag" === this.props.type && this.props.mediaTagId ? `_cl_vmodule:${this.props.rsec};_cl_link:mt_title;_cl_position:${null != (n = e.pos) ? n : 0};tagid:${this.props.mediaTagId};` : `_cl_vmodule:${this.props.rsec};_cl_link:title;_cl_position:${null != (o = e.pos) ? o : 0};`;
                    return this.props.position === Hr.L.MAIN_TOP ? (0, r.createElement)(ha, Oa(Ta({}, e), {
                        customLoggerParam: i,
                        key: `${this.props.position}_${this.props.index}_${t}`
                    })) : (0, r.createElement)(va, Oa(Ta({}, e), {
                        customLoggerParam: i,
                        key: `${this.props.position}_${this.props.index}_${t}`
                    }))
                }));
                return (0, o.jsxs)(Da, {
                    position: this.props.position,
                    children: [this.props.isShowLabel ? (0, o.jsx)(Ea, {children: this.props.label}) : "", e]
                })
            }
        }

        var Za = Object.defineProperty, za = Object.defineProperties, $a = Object.getOwnPropertyDescriptors,
            Aa = Object.getOwnPropertySymbols, Ra = Object.prototype.hasOwnProperty,
            Fa = Object.prototype.propertyIsEnumerable,
            Ua = (e, t, n) => t in e ? Za(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Ba = a.ZP.div.withConfig({componentId: "sc-1er37uk-0"})(["", ""], (({position: e}) => e === Hr.L.MAIN_TOP ? (0, a.iv)(["padding:12px 16px;background-color:", ";"], (e => e.theme.news.palette.bg_lv1_common)) : (0, a.iv)(["padding-bottom:16px;"])));

        class Na extends r.Component {
            render() {
                if (0 === this.props.notices.length) return null;
                const e = ia.sortNoticePC(this.props.notices), t = ia.addPosNoticePC(e).map(((e, t) => {
                    return (0, r.createElement)(La, (n = ((e, t) => {
                        for (var n in t || (t = {})) Ra.call(t, n) && Ua(e, n, t[n]);
                        if (Aa) for (var n of Aa(t)) Fa.call(t, n) && Ua(e, n, t[n]);
                        return e
                    })({}, e), o = {
                        position: this.props.position,
                        isShowLabel: this.props.isShowLabel,
                        index: t,
                        key: `${this.props.position}_${t}`,
                        rsec: this.props.ultSec
                    }, za(n, $a(o))));
                    var n, o
                }));
                return (0, o.jsx)(Ba, {position: this.props.position, children: t})
            }
        }

        const Ma = (0, i.$j)((e => ({
            notices: e.notice.notices.filter((e => 0 !== e.placements.filter((e => e.position === Hr.L.MAIN_TOP)).length)),
            position: Hr.L.MAIN_TOP,
            isShowLabel: !1,
            ultSec: "inf_main"
        })))(Na), Va = (0, i.$j)((e => ({
            notices: e.notice.notices.filter((e => 0 !== e.placements.filter((e => e.position === Hr.L.RIGHT_BOTTOM)).length)),
            position: Hr.L.RIGHT_BOTTOM,
            isShowLabel: !0,
            ultSec: "inf_subb"
        })))(Na), Wa = (0, i.$j)((e => ({
            notices: e.notice.notices.filter((e => 0 !== e.placements.filter((e => e.position === Hr.L.RIGHT_MIDDLE)).length)),
            position: Hr.L.RIGHT_MIDDLE,
            isShowLabel: !0,
            ultSec: "inf_subm"
        })))(Na), Ha = (0, i.$j)((e => ({
            notices: e.notice.notices.filter((e => 0 !== e.placements.filter((e => e.position === Hr.L.RIGHT_TOP)).length)),
            position: Hr.L.RIGHT_TOP,
            isShowLabel: !0,
            ultSec: "inf_subt"
        })))(Na);
        var qa = (e => (e.TOP = "top", e.PICKUP = "pickup", e.ARTICLES = "articles", e.COMMENTS = "comments", e.PHOTO = "photo", e))(qa || {});
        const Ya = (0, a.iv)([".yads_ad_pc,.yads_ad_pc_res_s,.yads_ad_pc_rank,.yads_ad_pc_rank_res_s{position:relative;margin-bottom:15px;border-bottom:1px solid ", ";.yads_ad_item,.yads_ad_item_res_s{display:block;padding:8px 0 24px;&:hover{text-decoration:none;background:", ";.yads_ad_title_res_s{text-decoration:underline;}}&::after{", "}}.yads_ad_img,.yads_ad_img_res_s{float:right;width:", ";height:", ";margin:0 0 0 8px;img{max-width:", ";}}.yads_ad_desc,.yads_ad_desc_res_s,.yads_ad_title,.yads_ad_title_res_s{font-size:82.5%;word-wrap:break-word;}.yads_ad_adv,.yads_ad_adv_res_s{font-size:", ";color:", ";}.yads_ad_info,.yads_ad_info_res_s{position:absolute;right:0;bottom:4px;font-size:", ";line-height:14px;a{padding:4px;color:", ";&:hover{color:", ";text-decoration:none;span{text-decoration:underline;}}img{vertical-align:top;}}}}.yads_ad_pc_rank,.yads_ad_pc_rank_res_s{a.yads_ad_item:hover,a.yads_ad_item_res_s:hover{.yads_ad_title,.yads_ad_desc{color:", ";text-decoration:underline;}}.yads_ad_item,.yads_ad_item_res_s{padding:8px 0 24px 30px;}.yads_ad_title::before,.yads_ad_title_res_s::before{position:absolute;top:8px;left:0;width:30px;font-size:", ";font-weight:bold;line-height:20px;color:", ";text-align:center;text-decoration:none;vertical-align:middle;content:'PR';}}.comment{.yads_ad_pc_rank,.yads_ad_pc_rank_res_s{.yads_ad_item,.yads_ad_item_res_s{padding:8px 0 24px 50px;}.yads_ad_title::before,.yads_ad_title_res_s::before{width:50px;}}}.yads_ad_pc,.yads_ad_pc_res_s{.yads_ad_title::before,.yads_ad_title_res_s::before{display:inline-block;padding:0 6px;margin-right:3px;font-size:", ";line-height:14px;color:#fff;vertical-align:middle;content:'PR';background:#717171;}}.rma_responsive_small{margin-bottom:16px;border-bottom:1px solid rgb(225 225 225);.rma_header{padding:4px;font-size:", ";font-weight:bold;border-bottom:1px solid rgb(225 225 225);}.rma_click_area{a{display:block;padding:8px 0;&:hover{text-decoration:none;background:", ";.rma_title{text-decoration:underline;}}&::after{", "}}}.rma_info{line-height:1.3;}.rma_img{float:right;width:", ";height:", ";margin-left:10px;background-color:", ";background-repeat:no-repeat;background-size:contain;}.rma_title{display:inline;font-size:", ";}.rma_adv{display:block;padding-top:4px;font-size:", ";color:", ";}a:hover .rma_adv{text-decoration:none;}.rma_footer{display:none;}}"], (e => e.theme.news.palette.bor_lv2_pc), (e => e.theme.news.palette.bg_hover_subColumn_pc), Sr, m, m, m, se.px12, (e => e.theme.news.palette.text_sub_lv1_common), se.px11, (e => e.theme.news.palette.text_sub_lv2_common), (e => e.theme.news.palette.text_sub_lv2_common), (e => e.theme.news.palette.link_hover_pc), se.px14, (e => e.theme.news.palette.text_base_common), se.px11, se.px14, (e => e.theme.news.palette.bg_hover_subColumn_pc), Sr, m, m, (e => e.theme.news.palette.thumbnail_normal_common), se.px13, se.px12, (e => e.theme.news.palette.text_sub_lv2_common)),
            Ja = (0, a.iv)([".yads_ad_pc_feed,.yads_ad_pc_feed_res_s,.yads_ad_pc_feed_res_large{position:relative;a.yads_ad_item:hover,a.yads_ad_item_res_s:hover,a.yads_ad_item_res_large:hover{background-color:", ";.yads_ad_title,.yads_ad_desc{color:", ";text-decoration:underline;}}a.yads_ad_item:visited,a.yads_ad_item_res_s:visited,a.yads_ad_item_res_large:visited{color:", ";}.yads_ad_item,.yads_ad_item_res_s{display:flex;align-items:center;padding:12px;text-decoration:none;.yads_ad_img{position:relative;margin-right:8px;", ";img{max-width:", ";max-height:", ";vertical-align:middle;}}.yads_ad_inner_2,.yads_ad_inner_2_res_s{flex:1;margin-bottom:14px;}.yads_ad_title{display:inline;line-height:1.3;}.yads_ad_desc{position:relative;display:inline;padding:0 0 0 4px;line-height:1.3;&::before{display:inline-block;padding:0 4px;content:'|';}}.yads_ad_adv{margin-top:4px;font-size:", ";color:", ";}}.yads_ad_item_res_large{display:flex;align-items:center;padding:12px;text-decoration:none;.yads_ad_img{position:relative;margin-right:8px;", ";img{max-width:", ";max-height:", ";vertical-align:middle;}}.yads_ad_inner_2_res_large{flex:1;margin-bottom:14px;}.yads_ad_title{display:inline;line-height:1.3;}.yads_ad_adv{margin-top:4px;font-size:", ";color:", ";}}.yads_ad_info{position:absolute;right:12px;bottom:12px;text-align:right;a{padding:0;font-size:", ";color:", ";text-decoration:none;&:hover{color:", ";text-decoration:underline;}}img{vertical-align:middle;}}}"], (e => e.theme.news.palette.bg_hover_normal_pc), (e => e.theme.news.palette.link_hover_pc), (e => e.theme.news.palette.link_visited_pc), Dr({
                width: h,
                height: h
            }), h, h, se.px12, (e => e.theme.news.palette.text_sub_lv1_common), Dr({
                width: w,
                height: b
            }), w, b, se.px12, (e => e.theme.news.palette.text_sub_lv1_common), se.px12, (e => e.theme.news.palette.text_sub_lv2_common), (e => e.theme.news.palette.text_sub_lv2_common));
        (0, a.iv)([".yads_ad_pc_rank_res_s{.yads_ad_item_res_s{padding:8px 0 24px 50px;}.yads_ad_title_res_s::before{left:10px;}}"]);
        var Ga = Object.defineProperty, Xa = Object.defineProperties, Qa = Object.getOwnPropertyDescriptors,
            Ka = Object.getOwnPropertySymbols, el = Object.prototype.hasOwnProperty,
            tl = Object.prototype.propertyIsEnumerable,
            nl = (e, t, n) => t in e ? Ga(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const ol = a.ZP.div.withConfig({componentId: "sc-1hyvns6-0"})(["", " ", " ", ""], Ya, Ja, (({$overWriteStyle: e}) => void 0 !== e && e)),
            il = (0, a.iv)(["padding:10px 0 5px;margin-top:16px;margin-bottom:0;border-top:1px solid ", ";", " ", ""], (({theme: e}) => e.news.palette.bor_lv1_pc), (({isNoTopBorder: e}) => e ? (0, a.iv)(["padding:0;border-top:none;"]) : ""), (({isWithMarginBottom: e}) => e ? (0, a.iv)(["margin-bottom:16px;"]) : "")),
            sl = a.ZP.div.withConfig({componentId: "sc-1hyvns6-1"})(["margin-bottom:16px;", " ", " ", ""], (({
                                                                                                                 minHeight: e,
                                                                                                                 isNoad: t
                                                                                                             }) => e && !t ? (0, a.iv)(["min-height:", "px;"], e) : ""), (({isMainColumn: e}) => e ? il : ""), (({isAdWithRightColumnFeed: e}) => e ? (0, a.iv)(["margin-top:-16px;"]) : ""));

        class rl extends r.Component {
            constructor(e) {
                super(e), this.state = {isNoad: !1}
            }

            componentDidMount() {
                window.newsyads = window.newsyads || {}, window.newsyads.noadCallback = window.newsyads.noadCallback || {}, window.newsyads.noadCallback[this.props.parentElement] = () => {
                    this.setState({isNoad: !0})
                }, this.props.allowPrerendering ? this.requestYads() : document.prerendering ? document.addEventListener("prerenderingchange", (() => this.requestYads()), {once: !0}) : this.requestYads()
            }

            shouldComponentUpdate(e, t) {
                return this.state.isNoad !== t.isNoad || void 0 !== e.spaYadsUpdateCount && this.props.spaYadsUpdateCount !== e.spaYadsUpdateCount
            }

            componentDidUpdate() {
                this.state.isNoad || this.requestYads()
            }

            render() {
                var e;
                return (0, o.jsx)(sl, {
                    minHeight: this.props.minHeightForPreventLayoutShift,
                    isNoad: this.state.isNoad,
                    isMainColumn: this.props.isMainColumn,
                    isAdWithRightColumnFeed: null != (e = this.props.isAdWithRightColumnFeed) && e,
                    isNoTopBorder: this.props.isNoTopBorder,
                    isWithMarginBottom: this.props.isWithMarginBottom,
                    className: this.props.addClass ? this.props.addClass : "",
                    children: (0, o.jsx)(ol, {id: this.props.parentElement, $overWriteStyle: this.props.overWriteStyle})
                })
            }

            requestYads() {
                if (!window.yadsRequestAsync) return;
                let e = {
                    yads_ad_ds: this.props.ds,
                    yads_parent_element: this.props.parentElement,
                    yads_bucket_id: window.miffy_bucket_id || "",
                    yads_type_tag: window.miffy_type_tag || this.props.typeTag || "",
                    yads_placement_category_id: this.props.categoryId,
                    yads_noad_callback: `window.newsyads.noadCallback.${this.props.parentElement}`
                };
                var t, n;
                this.props.shannonId && (t = ((e, t) => {
                    for (var n in t || (t = {})) el.call(t, n) && nl(e, n, t[n]);
                    if (Ka) for (var n of Ka(t)) tl.call(t, n) && nl(e, n, t[n]);
                    return e
                })({}, e), n = {yads_shannon_id: this.props.shannonId}, e = Xa(t, Qa(n))), window.yadsRequestAsync(e)
            }
        }

        const al = (e, t) => {
            if (e === qa.TOP) return ll(t)
        }, ll = e => {
            switch (e) {
                case re.w.MAJOR:
                    return "top_maj";
                case re.w.DOMESTIC:
                    return "top_dom";
                case re.w.WORLD:
                    return "top_wor";
                case re.w.BUSINESS:
                    return "top_bus";
                case re.w.ENTERTAINMENT:
                    return "top_ent";
                case re.w.SPORTS:
                    return "top_spo";
                case re.w.IT:
                    return "top_it";
                case re.w.SCIENCE:
                    return "top_sci";
                case re.w.LIFE:
                    return "top_lif";
                case re.w.LOCAL:
                    return "top_loc"
            }
        }, cl = (0, i.$j)(((e, t) => {
            var n, o;
            const i = t.page || null;
            return {
                typeTag: null != (n = t.typeTag) ? n : al(i, e.globalNavigation.currentCategory),
                spaYadsUpdateCount: (null == (o = e.yads) ? void 0 : o.spaYadsUpdateCount) || 0,
                shannonId: e.pageData.yads.shannonId,
                categoryId: e.pageData.yads.categoryId
            }
        }), {})(rl);
        var dl = n(38085), pl = n(45528);

        class ml extends r.Component {
            constructor() {
                super(...arguments), this.getValue = e => {
                    if ("CLS" === e.name) return 1e3 * e.delta;
                    if ("TTFB" === e.name) {
                        const {requestStart: t} = e.entries[0];
                        return e.delta - t
                    }
                    return e.delta
                }, this.sendToYA = e => {
                    const t = this.getValue(e), n = {
                        category: "WebVitals",
                        action: e.name,
                        name: e.id,
                        value: Math.round(t),
                        isNonInteraction: !0
                    };
                    null !== this.ya && (this.ya("hit", "event", n), "CLS" !== e.name && this.ya("hit", "timing", n))
                }, this.sendINPToYA = e => {
                    var t, n;
                    const o = this.getValue(e), i = {
                        category: "WebVitals",
                        action: e.name,
                        name: null != (n = null == (t = e.attribution) ? void 0 : t.eventTarget) ? n : "",
                        value: Math.round(o),
                        isNonInteraction: !0
                    };
                    null !== this.ya && (this.ya("hit", "event", i), this.ya("hit", "timing", i))
                }, this.measureWebVitals = () => {
                    try {
                        (0, dl.NO)(this.sendToYA), (0, dl.Fu)(this.sendToYA), (0, dl.mw)(this.sendToYA), (0, dl.mr)(this.sendToYA), (0, dl.a4)(this.sendToYA), (0, pl.Yn)(this.sendINPToYA)
                    } catch (e) {
                    }
                }, this.handleBFCache = e => {
                    e.persisted && this.ya("hit", "pageview")
                }
            }

            componentDidMount() {
                var e;
                this.ya = n(34440), this.ya("init", "52b09101ac194587aaacfdccd791ee37", "c0442949-c31a-4adb-ac5a-07372f0afd38"), this.ya("global", {mtestid: this.props.mtestid});
                const t = () => {
                    this.ya("hit", "pageview,webPerformance"), Math.random() <= .001 && this.measureWebVitals()
                };
                window.addEventListener("pageshow", this.handleBFCache);
                const o = window.performance && window.performance.getEntriesByName && (null == (e = null == window ? void 0 : window.performance) ? void 0 : e.getEntriesByType("navigation"));
                document.prerendering ? (this.ya("hit", "event", {
                    category: "prerender",
                    name: "render",
                    isNonInteraction: !0
                }), document.addEventListener("prerenderingchange", (() => {
                    t(), this.ya("hit", "event", {category: "prerender", name: "view", isNonInteraction: !0})
                }), {once: !0})) : o && o.length > 0 && o[0].activationStart && o[0].activationStart > 0 ? (this.ya("hit", "event", {
                    category: "prerender",
                    name: "rendered",
                    isNonInteraction: !0
                }), t()) : t()
            }

            componentWillUnmount() {
                window.removeEventListener("pageshow", this.handleBFCache)
            }

            render() {
                return null
            }
        }

        const hl = (0, i.$j)((e => {
            var t;
            return {mtestid: null != (t = e.pageData.pageParam.mtestid) ? t : void 0}
        }))(ml);
        var ul = n(47074);

        class gl extends r.Component {
            constructor() {
                super(...arguments), this.getScrollPosition = () => {
                    const e = `YAHOO.JP.News.scrollTop.${location.href}`, t = ul.y.get(e);
                    t && (window.scrollTo(0, t), ul.y.remove(e))
                }, this.setScrollPosition = () => {
                    var e, t, n;
                    ul.y.set(`YAHOO.JP.News.scrollTop.${location.href}`, Math.max(null != (e = window.pageYOffset) ? e : 0, null != (t = document.documentElement.scrollTop) ? t : 0, null != (n = document.body.scrollTop) ? n : 0))
                }, this.getScrollPositionFromCache = e => {
                    e.persisted && this.getScrollPosition()
                }
            }

            componentDidMount() {
                var e, t, n;
                const o = window.navigator.userAgent.toLowerCase();
                if (-1 === o.indexOf("safari") && -1 === o.indexOf("firefox") || -1 !== o.indexOf("chrome") ? window.history.scrollRestoration = "auto" : window.history.scrollRestoration = "manual", "back_forward" !== (null == (n = null == (t = null == (e = null == window ? void 0 : window.performance) ? void 0 : e.getEntriesByType("navigation")) ? void 0 : t[0]) ? void 0 : n.type)) {
                    ul.y.remove(`YAHOO.JP.News.scrollTop.${location.href}`);
                    const e = location.hash && document.getElementById(location.hash.replace("#", ""));
                    e && e.scrollIntoView(!0)
                }
                window.addEventListener("load", this.getScrollPosition, !1), window.addEventListener("pageshow", this.getScrollPositionFromCache, !1), window.addEventListener("scroll", this.setScrollPosition, !1)
            }

            componentWillUnmount() {
                window.removeEventListener("load", this.getScrollPosition, !1), window.removeEventListener("pageshow", this.getScrollPositionFromCache, !1), window.removeEventListener("scroll", this.setScrollPosition, !1)
            }

            render() {
                return null
            }
        }

        class xl extends r.Component {
            componentDidMount() {
                var e, t, n, o;
                (null == (t = null == (e = window.performance) ? void 0 : e.navigation) ? void 0 : t.type) === (null == (o = null == (n = window.performance) ? void 0 : n.navigation) ? void 0 : o.TYPE_BACK_FORWARD) && window.customLogger && window.customLogger.logClick("b_bckfwd", "", "-1")
            }

            render() {
                return null
            }
        }

        class _l extends r.Component {
            componentDidMount() {
                window.miffy_bucket_id = this.props.adBucketId || "", window.miffy_type_tag = this.props.adTypeTag || ""
            }

            render() {
                return null
            }
        }

        const fl = e => null == e ? void 0 : e.filter((e => !e.isTopicsHeadingTest)).map((e => e.bucket)).filter((e => !!e)).join("-"),
            wl = (0, i.$j)(((e, t) => {
                var n, o, i;
                return {
                    adBucketId: null != (i = null == (o = null == (n = e.userData.abTestBuckets) ? void 0 : n.find((e => e.experimentId === (null == t ? void 0 : t.adExperimentId)))) ? void 0 : o.bucket) ? i : void 0,
                    adTypeTag: fl(e.userData.abTestBuckets)
                }
            }))(_l);

        class bl extends r.Component {
            constructor(e) {
                super(e), this.state = {onMount: !1}
            }

            componentDidMount() {
                this.setState({onMount: !0})
            }

            render() {
                return this.state.onMount ? this.props.children : null
            }
        }

        class vl extends r.Component {
            render() {
                return this.props.isCheerCommentMode ? null : this.props.children
            }
        }

        const yl = (0, i.$j)((e => ({isCheerCommentMode: e.pageData.isCheerCommentMode || !1})))(vl);
        var jl = n(51388);
        const Il = e => ((0, r.useEffect)((() => {
            window.addEventListener("message", (function (t) {
                var n, o;
                "https://news.yahoo.co.jp" === t.origin && "comment-plugin" === (null == (n = t.data.payload) ? void 0 : n.source) && (o = t.data.payload).sec && o.slk && jl.Z.logClickEvent(e.pageData, o.sec, o.slk)
            }), !1)
        }), []), null), Cl = (0, i.$j)((e => ({pageData: e.pageData})))(Il);
        var Pl = Object.defineProperty, kl = Object.defineProperties, Sl = Object.getOwnPropertyDescriptors,
            Tl = Object.getOwnPropertySymbols, Ol = Object.prototype.hasOwnProperty,
            Dl = Object.prototype.propertyIsEnumerable,
            El = (e, t, n) => t in e ? Pl(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Ll = (e, t) => {
                for (var n in t || (t = {})) Ol.call(t, n) && El(e, n, t[n]);
                if (Tl) for (var n of Tl(t)) Dl.call(t, n) && El(e, n, t[n]);
                return e
            };
        const Zl = a.ZP.div.withConfig({componentId: "sc-tfydv5-0"})(["position:relative;"]),
            zl = (0, r.createContext)(!1),
            $l = (0, r.forwardRef)((({className: e, id: t, children: n, as: i, dataAttrs: s}, a) => {
                const [l] = (0, r.useState)(!0), c = i || "div";
                return (0, o.jsx)(zl.Provider, {
                    value: l,
                    children: (0, o.jsx)(Zl, (d = Ll({
                        className: `${e} viewableWrapper`,
                        id: t,
                        as: c,
                        ref: a
                    }, s), p = {children: n}, kl(d, Sl(p))))
                });
                var d, p
            })),
            Al = a.ZP.div.withConfig({componentId: "sc-stgiy-0"})(["position:absolute;left:1px;", ""], (({position: e}) => {
                switch (e) {
                    case"top":
                        return (0, a.iv)(["top:0;"]);
                    case"middle":
                        return (0, a.iv)(["top:50%;"]);
                    case"bottom":
                        return (0, a.iv)(["bottom:0;"]);
                    default:
                        return
                }
            })), Rl = a.ZP.a.withConfig({componentId: "sc-stgiy-1"})(["display:inline-block;width:0;height:0;"]),
            Fl = e => {
                const t = (0, r.useContext)(zl), [n, i] = (0, r.useState)(!1), s = (0, r.useRef)(null), a = s.current;
                (0, r.useEffect)((() => {
                    i(!0)
                }), []), (0, r.useEffect)((() => {
                    l(a)
                }), [a]), (0, r.useEffect)((() => {
                    window.customLogger && n && !window.customLogger.isTargetModule(e.id) && window.customLogger.addModulesWithViewability(e.id, !1, {logViewWithoutLinks: !1})
                }));
                const l = t => {
                    if (!e.enableLocalLogging) return;
                    const n = new IntersectionObserver((o => {
                        var i, s;
                        (null == (i = o[0]) ? void 0 : i.isIntersecting) && ((null == (s = e.localLoggingData) ? void 0 : s.clVmodule) && jl.Z.logViewEvent(e.localLoggingData.pageData, e.localLoggingData.clVmodule, e.localLoggingData.clLink), t && n.unobserve(t))
                    }), {rootMargin: "0px", threshold: .25});
                    t && n.observe(t)
                };
                return n ? (t || console.error(`ViewableElement must be used inside a ViewableElementWrapper. ${e.id}`), (0, o.jsx)(Al, {
                    id: e.id,
                    position: e.position,
                    ref: s,
                    children: (0, o.jsx)(Rl, {"data-cl-params": e.dataClParams})
                })) : null
            }, Ul = (0, i.$j)(((e, t) => {
                const n = {};
                return t.dataClParams.split(";").forEach((e => {
                    const t = e.split(":");
                    t[0] && t[1] && (n[t[0]] = t[1])
                })), {localLoggingData: {pageData: e.pageData, clVmodule: n._cl_vmodule, clLink: n._cl_link}}
            }))(Fl);
        var Bl = Object.defineProperty, Nl = Object.defineProperties, Ml = Object.getOwnPropertyDescriptors,
            Vl = Object.getOwnPropertySymbols, Wl = Object.prototype.hasOwnProperty,
            Hl = Object.prototype.propertyIsEnumerable,
            ql = (e, t, n) => t in e ? Bl(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Yl = "YAHOO.JP.News.commentPlugin", Jl = "comment_module_toggle", Gl = e => {
            if (null == window ? void 0 : window.localStorage) try {
                const t = window.localStorage.getItem(Jl);
                if (!t) return;
                const n = JSON.parse(t);
                if (void 0 !== (null == n ? void 0 : n.version) && n.version < e) return;
                return n
            } catch (e) {
                return
            }
        }, Xl = (e, t) => {
            var n;
            if (null == window ? void 0 : window.localStorage) try {
                window.localStorage.setItem(Jl, JSON.stringify((n = ((e, t) => {
                    for (var n in t || (t = {})) Wl.call(t, n) && ql(e, n, t[n]);
                    if (Vl) for (var n of Vl(t)) Hl.call(t, n) && ql(e, n, t[n]);
                    return e
                })({}, t), Nl(n, Ml({version: e})))))
            } catch (e) {
                return
            }
        }, Ql = e => {
            const t = (0, i.I0)();
            return {
                reflectStorage: n => t(((e, t) => n => {
                    if (t) {
                        const t = Gl(1), o = void 0 !== (null == t ? void 0 : t.isOpen) ? t.isOpen : e;
                        return void n(Oi(o))
                    }
                    const o = dn.X.get(Yl, 1), i = void 0 !== (null == o ? void 0 : o.isShow) ? o.isShow : e;
                    n(Oi(i))
                })(n, e)), setIsShow: n => t(((e, t) => n => {
                    t ? Xl(1, {isOpen: e}) : dn.X.set(Yl, 1, {isShow: e}), n(Oi(e))
                })(n, e))
            }
        };
        var Kl = n(12453), ec = n(41940), tc = n(90333);
        const nc = (0, a.ZP)(Kl.O).withConfig({componentId: "sc-udmmem-0"})(["padding:12px;word-break:break-all;"]),
            oc = a.ZP.div.withConfig({componentId: "sc-udmmem-1"})(["margin-bottom:16px;"]),
            ic = a.ZP.div.withConfig({componentId: "sc-udmmem-2"})(["display:flex;margin-bottom:8px;"]),
            sc = a.ZP.div.withConfig({componentId: "sc-udmmem-3"})(["flex-shrink:0;margin-right:4px;"]),
            rc = a.ZP.div.withConfig({componentId: "sc-udmmem-4"})(["flex:0 1 auto;"]),
            ac = (0, a.ZP)(ec.N).withConfig({componentId: "sc-udmmem-5"})(["height:12px;"]),
            lc = ({itemCount: e}) => (0, o.jsx)(nc, {
                children: [...new Array(e).keys()].map((e => (0, o.jsx)(oc, {
                    children: (0, o.jsxs)(ic, {
                        children: [(0, o.jsx)(sc, {
                            children: (0, o.jsx)(tc.M, {
                                height: 32,
                                width: 32
                            })
                        }), (0, o.jsxs)(rc, {
                            children: [(0, o.jsx)(ac, {
                                fontSize: "small",
                                children: "＊＊＊＊＊＊＊"
                            }), (0, o.jsx)("div", {children: (0, o.jsx)(ec.N, {children: "＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊"})})]
                        })]
                    })
                }, e)))
            }), cc = (0, r.forwardRef)((({notice: e, isCommentOff: t, position: n}, i) => {
                var s;
                const r = void 0 !== n && void 0 !== e ? {notices: e.notices.filter((e => e.placements.some((e => e.position === n))))} : e;
                if (!(null == (s = null == r ? void 0 : r.notices[0]) ? void 0 : s.contents[0])) return !0 === t ? (0, o.jsx)(jr, {
                    variant: "information",
                    isShow: !0,
                    title: "不具合のため、コメント欄を非表示にしています",
                    text: "ただいま不具合が発生しており、コメント欄を非表示にしています。復旧までしばらくお待ちください。"
                }) : null;
                const a = r.notices[0].contents[0];
                return a ? (null == a ? void 0 : a.linkUrl) ? (0, o.jsx)(jr, {
                    variant: "information",
                    isShow: !0,
                    title: a.title,
                    linkText: a.description,
                    linkURL: a.linkUrl,
                    ref: i,
                    dataClParams: "_cl_vmodule:cmt_info;_cl_link:to_info;_cl_position:0;"
                }) : (0, o.jsx)(jr, {variant: "information", isShow: !0, title: a.title, text: a.description}) : null
            }));
        const dc = ({propertyId: e, commentArticleId: t, canWebToApp: n}) => o => {
            return i = void 0, s = null, r = function* () {
                o({type: Ci});
                const i = yield tn.get({
                    url: `/api/public/comment-list/properties/${e}/articles/${t}`,
                    queryParameters: {start: 1, results: 2, canWebToApp: n}
                });
                if (i.isSuccess) {
                    const e = pc(i.response);
                    o({type: Pi, payload: e})
                } else 403 !== i.status ? 503 !== i.status ? o(Ti(ji)) : o(Ti(fi)) : o(Ti(wi))
            }, new Promise(((e, t) => {
                var n = e => {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        t(e)
                    }
                }, o = e => {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }, a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
                a((r = r.apply(i, s)).next())
            }));
            var i, s, r
        }, pc = e => ({
            comments: e.comments.filter((e => "permalink" in e && "share" in e && null === e.replyTo)).map((e => ({
                text: e.text,
                name: e.name,
                commentId: e.commentId,
                permalink: e.permalink,
                commentUrl: e.commentUrl,
                empathyCount: e.empathyCount,
                insightCount: e.insightCount,
                negativeCount: e.negativeCount,
                commentArticleId: e.commentArticleId,
                propertyId: e.propertyId,
                postDate: e.postDate,
                profileUrl: e.profile.url,
                profileImage: {url: e.profile.image.url},
                share: {url: e.share.url, text: e.share.text},
                snsShareLink: {twitter: e.snsShareLink.twitter, facebook: e.snsShareLink.facebook},
                reply: {totalResults: e.reply.totalResults},
                commentVoteStatus: lo
            }))),
            commentatorComments: e.commentatorComments.map((e => ({
                text: e.text,
                name: e.name,
                commentId: e.commentId,
                permalink: e.permalink,
                thumbsUpCount: e.thumbsUpCount,
                commentArticleId: e.commentArticleId,
                propertyId: e.propertyId,
                postDate: e.postDate,
                profileUrl: e.profile.url,
                profileImage: {url: e.profile.image.url},
                share: {url: e.share.url, text: e.share.text},
                snsShareLink: {twitter: e.snsShareLink.twitter, facebook: e.snsShareLink.facebook},
                commentator: {id: e.commentator.id, title: e.commentator.title, type: e.commentator.type},
                commentVoteStatus: lo,
                label: e.label
            }))),
            article: e.article ? {title: e.article.title} : null,
            isEnabledCommentSummaryInduction: e.isEnabledCommentSummary
        });
        var mc = Object.defineProperty, hc = Object.defineProperties, uc = Object.getOwnPropertyDescriptors,
            gc = Object.getOwnPropertySymbols, xc = Object.prototype.hasOwnProperty,
            _c = Object.prototype.propertyIsEnumerable,
            fc = (e, t, n) => t in e ? mc(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            wc = (e, t) => {
                for (var n in t || (t = {})) xc.call(t, n) && fc(e, n, t[n]);
                if (gc) for (var n of gc(t)) _c.call(t, n) && fc(e, n, t[n]);
                return e
            }, bc = (e, t) => hc(e, uc(t));
        const vc = a.ZP.span.withConfig({componentId: "sc-1hdlpx9-0"})(["text-align:center;", ""], (({$size: e}) => {
                switch (e) {
                    case"middle":
                        return (0, a.iv)(["display:inline-block;"]);
                    case"wide":
                    case"full":
                        return (0, a.iv)(["display:block;"]);
                    default:
                        return
                }
            })),
            yc = (0, a.iv)(["&&{display:block;font-size:", ";font-weight:bold;border-radius:", ";&:hover{text-decoration:none;cursor:pointer;}", " ", " ", "}"], se.px14, A, (({$size: e}) => {
                switch (e) {
                    case"middle":
                        return (0, a.iv)(["padding:8px 32px;padding-right:32px;padding-left:32px;"]);
                    case"wide":
                        return (0, a.iv)(["width:80%;padding-right:8px;padding-left:8px;margin:0 auto;"]);
                    case"full":
                        return (0, a.iv)(["width:100%;padding-right:8px;padding-left:8px;margin:0 auto;"]);
                    default:
                        return
                }
            }), (({theme: e, $type: t}) => {
                switch (t) {
                    case"simple":
                        return (0, a.iv)(["color:", ";background-color:", ";border:solid 1px ", ";&:hover{background-color:", ";}"], e.news.palette.btn_simple_text_common, e.news.palette.btn_simple_bg_common, e.news.palette.btn_simple_border_common, e.news.palette.bg_hover_normal_pc);
                    case"normal":
                        return (0, a.iv)(["color:", ";background-color:", ";border:solid 1px ", ";&:hover{background-color:", ";}"], e.news.palette.btn_normal_text_common, e.news.palette.btn_normal_bg_common, e.news.palette.btn_normal_border_common, e.news.palette.bg_hover_normal_pc);
                    case"primary":
                        return (0, a.iv)(["color:", ";background-color:", ";border:solid 1px ", ";&:hover{span{opacity:0.5;}}"], e.news.palette.btn_primary_text_common, e.news.palette.btn_primary_bg_common, e.news.palette.btn_primary_bg_common);
                    case"disabled":
                        return (0, a.iv)(["color:", ";background-color:", ";border:solid 1px ", ";&:hover{text-decoration:none;pointer-events:none;cursor:default;}"], e.news.palette.btn_disabled_text_common, e.news.palette.btn_disabled_bg_common, e.news.palette.btn_disabled_bg_common);
                    case"delete":
                        return (0, a.iv)(["color:", ";background-color:", ";border:solid 1px ", ";&:hover{span{opacity:0.5;}}"], e.news.palette.btn_delete_text_common, e.news.palette.btn_delete_bg_common, e.news.palette.btn_delete_border_common);
                    default:
                        return
                }
            }), (({$height: e}) => {
                switch (e) {
                    case"normal":
                        return (0, a.iv)(["padding-top:8px;padding-bottom:8px;"]);
                    case"large":
                        return (0, a.iv)(["padding-top:16px;padding-bottom:16px;"]);
                    default:
                        return
                }
            })), jc = a.ZP.button.withConfig({componentId: "sc-1hdlpx9-1"})(["", ""], yc),
            Ic = a.ZP.a.withConfig({componentId: "sc-1hdlpx9-2"})(["", ""], yc);

        class Cc extends r.Component {
            render() {
                var e;
                const t = this.props.hasUal ? {"data-ual-gotocontent": ""} : {},
                    n = this.props.useAnchorTag && "disabled" !== this.props.type;
                return (0, o.jsx)(vc, {
                    $size: this.props.size || "middle",
                    children: n ? (0, o.jsxs)(Ic, bc(wc({
                        $type: this.props.type,
                        $size: this.props.size || "middle",
                        $height: this.props.heightSize || "normal",
                        href: this.props.linkURL,
                        "data-cl-params": this.props.dataClParams
                    }, t), {
                        target: null != (e = this.props.linkTarget) ? e : "",
                        children: [(0, o.jsx)("span", {children: this.props.text}), this.props.children ? this.props.children : null]
                    })) : (0, o.jsxs)(jc, bc(wc({
                        $type: this.props.type,
                        $size: this.props.size || "middle",
                        $height: this.props.heightSize || "normal",
                        "data-cl-params": this.props.dataClParams
                    }, t), {
                        onClick: this.props.onClick,
                        disabled: this.props.isDisabled,
                        children: [(0, o.jsx)("span", {children: this.props.text}), this.props.children ? this.props.children : null]
                    }))
                })
            }
        }

        const Pc = a.ZP.div.withConfig({componentId: "sc-12sdqvx-0"})(["padding:40px 16px;font-size:", ";text-align:center;.newsFeed_list + &{border-top:1px solid ", ";}"], se.px14, (e => e.theme.news.palette.bor_lv2_pc)),
            kc = a.ZP.strong.withConfig({componentId: "sc-12sdqvx-1"})(["font-weight:normal;"]),
            Sc = a.ZP.p.withConfig({componentId: "sc-12sdqvx-2"})(["margin-top:4px;font-size:", ";line-height:1.3;color:", ";"], se.px14, (({theme: e}) => e.news.palette.text_sub_lv1_common)),
            Tc = a.ZP.p.withConfig({componentId: "sc-12sdqvx-3"})(["margin-top:8px;"]);

        class Oc extends r.Component {
            render() {
                return (0, o.jsxs)(Pc, {children: [(0, o.jsx)(kc, {children: this.props.title}), this.props.explain ? (0, o.jsx)(Sc, {children: this.props.explain}) : null, this.props.additionalComponent ? (0, o.jsx)(Tc, {children: this.props.additionalComponent}) : null]})
            }
        }

        const Dc = a.ZP.div.withConfig({componentId: "sc-1vcy0t8-0"})(["padding:40px 16px;font-size:", ";text-align:center;"], se.px14),
            Ec = a.ZP.p.withConfig({componentId: "sc-1vcy0t8-1"})(["font-size:", ";line-height:1.3;color:", ";"], se.px14, (({theme: e}) => e.news.palette.text_sub_lv1_common)),
            Lc = () => (0, o.jsx)(Dc, {children: (0, o.jsx)(Ec, {children: "エキスパートの設定変更により、コメント欄の表示は終了しました"})});
        var Zc = n(46407), zc = n(6478), $c = n(17545);
        const Ac = a.ZP.img.withConfig({componentId: "sc-5noars-0"})(["", ""], (({
                                                                                     styledWidth: e,
                                                                                     styledHeight: t
                                                                                 }) => (0, a.iv)(["width:", ";height:", ";object-fit:cover;border-radius:", ";"], e, t, H))),
            Rc = (0, r.memo)((({src: e, alt: t, width: n, height: i}) => (0, o.jsx)(Ac, {
                src: e,
                styledWidth: n,
                styledHeight: i,
                alt: t
            }))),
            Fc = a.ZP.div.withConfig({componentId: "sc-1ued22j-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;", " ", ""], (({isOverlayAddIconOnProfileImage: e}) => e ? (0, a.iv)(["position:relative;"]) : null), (({
                                                                                                                                                                                                                                                       styledWidth: e,
                                                                                                                                                                                                                                                       styledHeight: t,
                                                                                                                                                                                                                                                       setBorder: n
                                                                                                                                                                                                                                                   }) => (0, a.iv)(["width:", ";height:", ";", ""], e, t, n ? (0, a.iv)(["position:relative;&::after{position:absolute;top:0;left:0;box-sizing:border-box;display:block;width:", ";height:", ";content:'';border:solid 1px ", ";border-radius:", ";}"], e, t, (e => e.theme.news.palette.thumbnail_normal_border_common), H) : ""))),
            Uc = (0, a.iv)(["position:absolute;top:0;left:0;z-index:", ";color:", ";background-color:", ";border-radius:", ";height:", ";width:", ";"], D, (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.riff.background.overlay), H, (e => e.height), (e => e.width)),
            Bc = a.ZP.a.withConfig({componentId: "sc-1ued22j-1"})(["", " &:hover{color:", ";}"], Uc, (e => e.theme.news.palette.bg_lv1_common)),
            Nc = a.ZP.label.withConfig({componentId: "sc-1ued22j-2"})(["", ""], Uc),
            Mc = e => "linkUrl" in e && void 0 !== e.linkUrl && "" !== e.linkUrl, Vc = (0, r.memo)((e => {
                var t;
                return Mc(e) ? (0, o.jsx)(Bc, {
                    href: e.linkUrl,
                    width: I,
                    height: I,
                    "data-cl-params": e.linkClParams,
                    target: null != (t = e.target) ? t : void 0,
                    children: (0, o.jsx)($c.N, {size: 32})
                }) : (0, o.jsx)(Nc, {width: I, height: I, children: (0, o.jsx)($c.N, {size: 32})})
            })), Wc = (0, r.memo)((e => {
                var t;
                return (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(Rc, {
                        src: e.src,
                        width: e.width,
                        height: e.height,
                        alt: e.alt
                    }), Mc(e) ? (0, o.jsx)(Vc, {
                        linkUrl: e.linkUrl,
                        linkClParams: e.linkClParams,
                        target: null != (t = e.target) ? t : void 0
                    }) : (0, o.jsx)(Vc, {})]
                })
            })), Hc = (0, r.memo)((e => {
                var t, n;
                return (0, o.jsx)(Fc, {
                    styledWidth: e.width,
                    styledHeight: e.height,
                    setBorder: e.setBorder,
                    isOverlayAddIconOnProfileImage: e.isOverlayAddIconOnProfileImage,
                    children: Mc(e) ? e.isOverlayAddIconOnProfileImage ? (0, o.jsx)(Wc, {
                        src: e.src,
                        width: e.width,
                        height: e.height,
                        alt: e.alt,
                        linkUrl: e.linkUrl,
                        linkClParams: e.linkClParams,
                        target: null != (t = e.target) ? t : void 0
                    }) : (0, o.jsx)("a", {
                        href: e.linkUrl,
                        "data-cl-params": e.linkClParams,
                        target: null != (n = e.target) ? n : void 0,
                        children: (0, o.jsx)(Rc, {src: e.src, width: e.width, height: e.height, alt: e.alt})
                    }) : e.isOverlayAddIconOnProfileImage ? (0, o.jsx)(Wc, {
                        src: e.src,
                        width: e.width,
                        height: e.height,
                        alt: e.alt
                    }) : (0, o.jsx)(Rc, {src: e.src, width: e.width, height: e.height, alt: e.alt})
                })
            })), qc = (0, r.memo)((e => (0, o.jsx)(Hc, {
                setBorder: e.setBorder,
                src: e.src,
                width: e.width,
                height: e.height,
                alt: e.alt,
                linkUrl: "linkUrl" in e ? e.linkUrl : void 0,
                linkClParams: "linkClParams" in e ? e.linkClParams : void 0,
                target: "target" in e ? e.target : void 0,
                isOverlayAddIconOnProfileImage: !1
            }))), Yc = ((0, r.memo)((e => (0, o.jsx)(Hc, {
                setBorder: e.setBorder,
                src: e.src,
                width: e.width,
                height: e.height,
                alt: e.alt,
                linkUrl: "linkUrl" in e ? e.linkUrl : void 0,
                linkClParams: "linkClParams" in e ? e.linkClParams : void 0,
                target: "target" in e ? e.target : void 0,
                isOverlayAddIconOnProfileImage: !0
            }))), e => function (e) {
                return us.includes(e)
            }(e) ? "設問" : "記事");
        var Jc = n(7953), Gc = n(70838);
        const Xc = (e, t) => {
                switch (t) {
                    case Gc.g.PC:
                        return (0, Jc._)(e, 0, 80);
                    case Gc.g.SP:
                        return (0, Jc._)(e, 0, 50);
                    default:
                        return !1
                }
            },
            Qc = a.ZP.button.withConfig({componentId: "sc-1nejiws-0"})(["color:", ";&:hover{color:", ";text-decoration:underline;}"], (e => e.theme.news.palette.link_pc), (e => e.theme.news.palette.link_hover_pc)),
            Kc = ({text: e, rsec: t, pos: n}) => {
                const [i, s] = (0, r.useState)(!1);
                return ((e, t, n) => {
                    if (t) return !0;
                    switch (n) {
                        case Gc.g.PC:
                            return (0, Jc.x)(e) <= 80;
                        case Gc.g.SP:
                            return (0, Jc.x)(e) <= 50;
                        default:
                            return !1
                    }
                })(e, i, Gc.g.PC) ? (0, o.jsx)(r.Fragment, {children: e}) : (0, o.jsxs)(r.Fragment, {
                    children: [Xc(e, Gc.g.PC), (0, o.jsx)(Qc, {
                        onClick: () => s(!0),
                        "data-cl-params": `_cl_vmodule:${t};_cl_link:more;_cl_position:${n};`,
                        children: "…もっと見る"
                    })]
                })
            }, ed = a.ZP.div.withConfig({componentId: "sc-dblzex-0"})(["margin-top:8px;"]), td = "noError",
            nd = "conflict", od = "error", id = ({status: e}) => {
                const [t, n] = (0, r.useState)(td);
                return (0, r.useEffect)((() => {
                    So.includes(e) || (e !== fo ? To.includes(e) ? n(od) : n(td) : n(nd))
                }), [e]), (0, r.useEffect)((() => {
                    if (t === td) return;
                    const e = setTimeout((() => n(td)), 6e3);
                    return () => clearTimeout(e)
                }), [t]), t === nd ? (0, o.jsx)(ed, {
                    children: (0, o.jsx)(wr.v, {
                        border: !1,
                        variant: "warning",
                        children: (0, o.jsx)(vr.Z, {children: "すでにクリックされています。"})
                    })
                }) : t === od ? (0, o.jsx)(ed, {
                    children: (0, o.jsx)(wr.v, {
                        border: !1,
                        variant: "warning",
                        children: (0, o.jsx)(vr.Z, {children: "正常に処理できませんでした。しばらくしてから再度お試しください。"})
                    })
                }) : null
            },
            sd = (0, a.iv)(["display:flex;align-items:center;padding:0 2px;color:", ";border-radius:", ";"], (e => e.theme.news.palette.text_sub_lv2_common), A),
            rd = (0, a.iv)(["", " &:hover{color:", ";text-decoration:none;background-color:", ";}"], sd, (e => e.theme.news.palette.text_sub_lv2_common), (e => e.theme.news.palette.link_hover_bg_pc)),
            ad = (0, a.iv)(["flex-shrink:0;width:28px;height:28px;content:'';background-size:contain;"]),
            ld = (0, a.iv)(["", " animation:", ";"], ad, (({
                                                               showAnimation: e,
                                                               isVoted: t
                                                           }) => e && t ? (0, a.iv)(["", " 0.8s"], cd) : "")),
            cd = (0, a.F4)(["0%,100%{transform:scale(1);}20%{transform:scale(1.2);}30%{transform:scale(1.2);}45%{transform:scale(0.9);}80%{transform:scale(1);}"]),
            dd = "\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  margin-left: 2px;\n  line-height: 16px;\n",
            pd = (0, a.iv)(["", " color:", ";"], dd, (({isButtonPressed: e}) => e ? e => e.theme.news.palette.icon_comment_thumbsUpButton_common : e => e.theme.news.palette.text_sub_lv2_common)),
            md = (0, a.iv)(["", " color:", ";"], dd, (e => e.theme.news.palette.btn_disabled_text_common)),
            hd = (0, a.iv)(["display:block;font-size:", ";"], se.px12),
            ud = (0, a.iv)(["display:block;font-size:", ";"], se.px14),
            gd = e => e < 1e4 ? e.toString() : Math.floor(e / 1e3) / 10 + "万",
            xd = a.ZP.span.withConfig({componentId: "sc-14t8tvh-0"})(["", ""], hd),
            _d = a.ZP.span.withConfig({componentId: "sc-14t8tvh-1"})(["", ""], ud),
            fd = a.ZP.div.withConfig({componentId: "sc-14t8tvh-2"})(["", " &::before{", " background-image:url(", ");}"], sd, ad, te.img_icon_comment_empathy_disabled),
            wd = a.ZP.span.withConfig({componentId: "sc-14t8tvh-3"})(["", ""], md),
            bd = e => (0, o.jsx)(fd, {children: (0, o.jsxs)(wd, {children: [(0, o.jsx)(xd, {children: "共感した"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)(_d, {children: gd(e.count)})]})}),
            vd = (e, t) => {
                jl.Z.logClickEvent(t, e.sec, e.slk)
            };

        function yd() {
            return e = this, t = null, n = function* () {
                const e = yield fetch("/api/token", {method: "GET", credentials: "include"});
                if (!e.ok) throw new Error("fail to get token.");
                try {
                    return (yield e.json()).userToken
                } catch (e) {
                    throw new Error("fail to parse json.")
                }
            }, new Promise(((o, i) => {
                var s = e => {
                    try {
                        a(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }, r = e => {
                    try {
                        a(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
                a((n = n.apply(e, t)).next())
            }));
            var e, t, n
        }

        function jd(e) {
            return t = this, n = null, o = function* () {
                yield new Promise((t => setTimeout(t, e)))
            }, new Promise(((e, i) => {
                var s = e => {
                    try {
                        a(o.next(e))
                    } catch (e) {
                        i(e)
                    }
                }, r = e => {
                    try {
                        a(o.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }, a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, r);
                a((o = o.apply(t, n)).next())
            }));
            var t, n, o
        }

        var Id = (e, t, n) => new Promise(((o, i) => {
            var s = e => {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }, r = e => {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }, a = e => e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
            a((n = n.apply(e, t)).next())
        }));
        const Cd = (e, t, n, o) => i => Id(void 0, null, (function* () {
                i(qo(t));
                const s = o ? yield yd() : n;
                if (!s) return void i(Ko(t));
                const r = yield tn.putWithCredential({
                    url: `/api/comment-vote/properties/news_commentator/articles/${e}/comments/${t}/thumbsup?userType=commentator`,
                    userToken: s,
                    useAsWidget: o
                });
                r.isSuccess ? i(Jo(t)) : 409 !== r.status ? i(Ko(t)) : i(Yo(t))
            })), Pd = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(qo(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(Ko(n));
                const a = yield tn.putWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/empathy`,
                    userToken: r,
                    useAsWidget: i
                });
                a.isSuccess ? s(Go(n)) : 409 !== a.status ? s(Ko(n)) : s(Yo(n))
            })), kd = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(ei(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(ii(n));
                (yield tn.deleteWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/empathy`,
                    userToken: r,
                    useAsWidget: i
                })).isSuccess ? s(oi(n)) : s(ii(n))
            })), Sd = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(qo(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(Ko(n));
                const a = yield tn.putWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/insight`,
                    userToken: r,
                    useAsWidget: i
                });
                a.isSuccess ? s(Xo(n)) : 409 !== a.status ? s(Ko(n)) : s(Yo(n))
            })), Td = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(ti(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(si(n));
                (yield tn.deleteWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/insight`,
                    userToken: r,
                    useAsWidget: i
                })).isSuccess ? s(oi(n)) : s(si(n))
            })), Od = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(qo(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(Ko(n));
                const a = yield tn.putWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/negative`,
                    userToken: r,
                    useAsWidget: i
                });
                a.isSuccess ? s(Qo(n)) : 409 !== a.status ? s(Ko(n)) : s(Yo(n))
            })), Dd = (e, t, n, o, i) => s => Id(void 0, null, (function* () {
                s(ni(n));
                const r = i ? yield yd() : o;
                if (!r) return void s(ri(n));
                (yield tn.deleteWithCredential({
                    url: `/api/comment-vote/properties/${e}/articles/${t}/comments/${n}/reaction/negative`,
                    userToken: r,
                    useAsWidget: i
                })).isSuccess ? s(oi(n)) : s(ri(n))
            })), Ed = e => {
                const {opttype: t} = (0, i.v9)((({pageData: e}) => ({opttype: e.pageParam.opttype})));
                (0, r.useEffect)((() => {
                    if ("pc" !== t && "smartphone" !== t) return;
                    const e = "pc" === t ? "wrapper" : "contents";
                    window.customLogger && (window.customLogger.isTargetModule(e) ? window.customLogger.refreshModule(e) : window.customLogger.addModules(e, !1, {logViewWithoutLinks: !1}))
                }), e)
            },
            Ld = a.ZP.button.withConfig({componentId: "sc-1bswuwc-0"})(["", " ", " &::before{", " ", " background-size:contain;}"], rd, (({isShow: e}) => e ? "" : "display: none;"), ld, (({isVoted: e}) => e ? `background-image: url(${te.img_icon_comment_empathy_voted});` : `background-image: url(${te.img_icon_comment_empathy_default});`)),
            Zd = a.ZP.span.withConfig({componentId: "sc-1bswuwc-1"})(["", ""], pd),
            zd = a.ZP.span.withConfig({componentId: "sc-1bswuwc-2"})(["", ""], hd),
            $d = a.ZP.span.withConfig({componentId: "sc-1bswuwc-3"})(["", ""], ud), Ad = e => {
                const t = {
                    pageParam: {
                        pagetype: e.pageData.pageParam.pagetype,
                        conttype: e.pageData.pageParam.conttype
                    }
                }, {updateEmpathy: n} = ((e, t, n, o, s, a) => {
                    const l = (0, i.I0)();
                    return {
                        updateEmpathy: (0, r.useCallback)((i => jo.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "agbtn"
                        }, a), void l(Pd(e, t, n, o, s))) : Oo.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "agbtn_cancel"
                        }, a), void l(kd(e, t, n, o, s))) : void 0), [])
                    }
                })(e.propertyId, e.commentArticleId, e.commentId, e.csrfToken, !1, t), {
                    isEmpathyVoted: s,
                    isLoading: a,
                    isOtherReactionsVoted: l
                } = (c = e.status, {
                    isEmpathyVoted: (0, r.useMemo)((() => Co.includes(c)), [c]),
                    isLoading: (0, r.useMemo)((() => So.includes(c)), [c]),
                    isOtherReactionsVoted: (0, r.useMemo)((() => Po.includes(c) || ko.includes(c)), [c])
                });
                var c;
                return Ed([e.isDisabled, l]), e.isDisabled || l ? (0, o.jsx)(bd, {
                    count: e.count,
                    hideZeroCount: e.hideZeroCount
                }) : (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(Ld, {
                        isShow: s,
                        isVoted: !0,
                        showAnimation: !0,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:agbtn1cl;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(Zd, {
                            isButtonPressed: !0,
                            children: [(0, o.jsx)(zd, {children: "共感した"}), (0, o.jsx)($d, {children: gd(e.count + 1)})]
                        })
                    }), (0, o.jsx)(Ld, {
                        isShow: !s,
                        isVoted: !1,
                        showAnimation: !1,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:agbtn1;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(Zd, {
                            isButtonPressed: !1,
                            children: [(0, o.jsx)(zd, {children: "共感した"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)($d, {children: gd(e.count)})]
                        })
                    })]
                })
            }, Rd = a.ZP.span.withConfig({componentId: "sc-jgyd6m-0"})(["", ""], hd),
            Fd = a.ZP.span.withConfig({componentId: "sc-jgyd6m-1"})(["", ""], ud),
            Ud = a.ZP.div.withConfig({componentId: "sc-jgyd6m-2"})(["", " &::before{", " background-image:url(", ");}"], sd, ad, te.img_icon_comment_insights_disabled),
            Bd = a.ZP.span.withConfig({componentId: "sc-jgyd6m-3"})(["", ""], md),
            Nd = e => (0, o.jsx)(Ud, {children: (0, o.jsxs)(Bd, {children: [(0, o.jsx)(Rd, {children: "なるほど"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)(Fd, {children: gd(e.count)})]})}),
            Md = a.ZP.button.withConfig({componentId: "sc-18v174d-0"})(["", " ", " &::before{", " ", " background-size:contain;}"], rd, (({isShow: e}) => e ? "" : "display: none;"), ld, (({isVoted: e}) => e ? `background-image: url(${te.img_icon_comment_insights_voted});` : `background-image: url(${te.img_icon_comment_insights_default});`)),
            Vd = a.ZP.span.withConfig({componentId: "sc-18v174d-1"})(["", ""], pd),
            Wd = a.ZP.span.withConfig({componentId: "sc-18v174d-2"})(["", ""], hd),
            Hd = a.ZP.span.withConfig({componentId: "sc-18v174d-3"})(["", ""], ud), qd = e => {
                const t = {
                    pageParam: {
                        pagetype: e.pageData.pageParam.pagetype,
                        conttype: e.pageData.pageParam.conttype
                    }
                }, {updateInsight: n} = ((e, t, n, o, s, a) => {
                    const l = (0, i.I0)();
                    return {
                        updateInsight: (0, r.useCallback)((i => jo.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "agbtn"
                        }, a), void l(Sd(e, t, n, o, s))) : Do.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "agbtn_cancel"
                        }, a), void l(Td(e, t, n, o, s))) : void 0), [])
                    }
                })(e.propertyId, e.commentArticleId, e.commentId, e.csrfToken, !1, t), {
                    isInsightVoted: s,
                    isLoading: a,
                    isOtherReactionsVoted: l
                } = (c = e.status, {
                    isInsightVoted: (0, r.useMemo)((() => Po.includes(c)), [c]),
                    isLoading: (0, r.useMemo)((() => So.includes(c)), [c]),
                    isOtherReactionsVoted: (0, r.useMemo)((() => Co.includes(c) || ko.includes(c)), [c])
                });
                var c;
                return Ed([e.isDisabled, l]), e.isDisabled || l ? (0, o.jsx)(Nd, {
                    count: e.count,
                    hideZeroCount: e.hideZeroCount
                }) : (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(Md, {
                        isShow: s,
                        isVoted: !0,
                        showAnimation: !0,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:agbtn2cl;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(Vd, {
                            isButtonPressed: !0,
                            children: [(0, o.jsx)(Wd, {children: "なるほど"}), (0, o.jsx)(Hd, {children: gd(e.count + 1)})]
                        })
                    }), (0, o.jsx)(Md, {
                        isShow: !s,
                        isVoted: !1,
                        showAnimation: !1,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:agbtn2;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(Vd, {
                            isButtonPressed: !1,
                            children: [(0, o.jsx)(Wd, {children: "なるほど"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)(Hd, {children: gd(e.count)})]
                        })
                    })]
                })
            }, Yd = a.ZP.span.withConfig({componentId: "sc-1sywp1l-0"})(["", ""], hd),
            Jd = a.ZP.span.withConfig({componentId: "sc-1sywp1l-1"})(["", ""], ud),
            Gd = a.ZP.div.withConfig({componentId: "sc-1sywp1l-2"})(["", " &::before{", " background-image:url(", ");}"], sd, ad, te.img_icon_comment_negative_disabled),
            Xd = a.ZP.span.withConfig({componentId: "sc-1sywp1l-3"})(["", ""], md),
            Qd = e => (0, o.jsx)(Gd, {children: (0, o.jsxs)(Xd, {children: [(0, o.jsx)(Yd, {children: "うーん"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)(Jd, {children: gd(e.count)})]})}),
            Kd = a.ZP.button.withConfig({componentId: "sc-1rqan7b-0"})(["", " ", " &::before{", " ", " background-size:contain;}"], rd, (({isShow: e}) => e ? "" : "display: none;"), ld, (({isVoted: e}) => e ? `background-image: url(${te.img_icon_comment_negative_voted});` : `background-image: url(${te.img_icon_comment_negative_default});`)),
            ep = a.ZP.span.withConfig({componentId: "sc-1rqan7b-1"})(["", ""], pd),
            tp = a.ZP.span.withConfig({componentId: "sc-1rqan7b-2"})(["", ""], hd),
            np = a.ZP.span.withConfig({componentId: "sc-1rqan7b-3"})(["", ""], ud), op = e => {
                const t = {
                    pageParam: {
                        pagetype: e.pageData.pageParam.pagetype,
                        conttype: e.pageData.pageParam.conttype
                    }
                }, {updateNegative: n} = ((e, t, n, o, s, a) => {
                    const l = (0, i.I0)();
                    return {
                        updateNegative: (0, r.useCallback)((i => jo.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "disbtn"
                        }, a), void l(Od(e, t, n, o, s))) : Eo.includes(i) ? (vd({
                            sec: "cmt_usr",
                            slk: "disbtn_cancel"
                        }, a), void l(Dd(e, t, n, o, s))) : void 0), [])
                    }
                })(e.propertyId, e.commentArticleId, e.commentId, e.csrfToken, !1, t), {
                    isNegativeVoted: s,
                    isLoading: a,
                    isOtherReactionsVoted: l
                } = (c = e.status, {
                    isNegativeVoted: (0, r.useMemo)((() => ko.includes(c)), [c]),
                    isLoading: (0, r.useMemo)((() => So.includes(c)), [c]),
                    isOtherReactionsVoted: (0, r.useMemo)((() => Co.includes(c) || Po.includes(c)), [c])
                });
                var c;
                return Ed([e.isDisabled, l]), e.isDisabled || l ? (0, o.jsx)(Qd, {
                    count: e.count,
                    hideZeroCount: e.hideZeroCount
                }) : (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(Kd, {
                        isShow: s,
                        isVoted: !0,
                        showAnimation: !0,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:disbtn1cl;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(ep, {
                            isButtonPressed: !0,
                            children: [(0, o.jsx)(tp, {children: "うーん"}), (0, o.jsx)(np, {children: gd(e.count + 1)})]
                        })
                    }), (0, o.jsx)(Kd, {
                        isShow: !s,
                        isVoted: !1,
                        showAnimation: !1,
                        onClick: () => n(e.status),
                        disabled: a,
                        "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:disbtn1;_cl_position:${e.position};${e.clOtherParams}`,
                        children: (0, o.jsxs)(ep, {
                            isButtonPressed: !1,
                            children: [(0, o.jsx)(tp, {children: "うーん"}), 0 === e.count && e.hideZeroCount ? null : (0, o.jsx)(np, {children: gd(e.count)})]
                        })
                    })]
                })
            }, ip = a.ZP.ul.withConfig({componentId: "sc-11pem1p-0"})(["display:flex;"]),
            sp = a.ZP.li.withConfig({componentId: "sc-11pem1p-1"})(["& + &{margin-left:8px;}"]), rp = e => {
                const t = Object.keys(e.clOtherParams).map((t => [t, e.clOtherParams[t]])).filter((e => void 0 !== e[1])).map((([e, t]) => `${e}:${t};`)).join("");
                return (0, o.jsxs)(ip, {
                    children: [(0, o.jsx)(sp, {
                        children: (0, o.jsx)(Ad, {
                            count: e.empathyCount,
                            hideZeroCount: e.hideZeroCount,
                            isDisabled: e.isDisabled,
                            propertyId: e.propertyId,
                            commentArticleId: e.commentArticleId,
                            commentId: e.commentId,
                            status: e.status,
                            clVmodule: e.clVmodule,
                            position: e.position,
                            clOtherParams: t,
                            pageData: e.pageData,
                            csrfToken: e.csrfToken
                        })
                    }), (0, o.jsx)(sp, {
                        children: (0, o.jsx)(qd, {
                            count: e.insightCount,
                            hideZeroCount: e.hideZeroCount,
                            isDisabled: e.isDisabled,
                            propertyId: e.propertyId,
                            commentArticleId: e.commentArticleId,
                            commentId: e.commentId,
                            status: e.status,
                            clVmodule: e.clVmodule,
                            position: e.position,
                            clOtherParams: t,
                            pageData: e.pageData,
                            csrfToken: e.csrfToken
                        })
                    }), (0, o.jsx)(sp, {
                        children: (0, o.jsx)(op, {
                            count: e.negativeCount,
                            hideZeroCount: e.hideZeroCount,
                            isDisabled: e.isDisabled,
                            propertyId: e.propertyId,
                            commentArticleId: e.commentArticleId,
                            commentId: e.commentId,
                            status: e.status,
                            clVmodule: e.clVmodule,
                            position: e.position,
                            clOtherParams: t,
                            pageData: e.pageData,
                            csrfToken: e.csrfToken
                        })
                    })]
                })
            };
        var ap = n(88008);
        const lp = (0, a.iv)(["display:block;min-width:158px;height:32px;padding:0 8px 0 4px;font-size:", ";font-weight:bold;color:", ";border:1px solid;border-radius:", ";", ""], se.px12, (e => e.theme.news.palette.text_base_common), $, (e => e.hasVoted ? (0, a.iv)(["color:", ";background-color:", ";border-color:", ";"], e.theme.news.palette.text_sub_lv1_common, e.theme.news.palette.bg_lv2_common, e.theme.news.palette.bg_lv2_common) : (0, a.iv)(["color:", ";background-color:", ";border-color:", ";&:hover{background-color:", ";}"], e.theme.news.palette.text_base_common, e.theme.news.palette.bg_lv1_common, e.theme.news.palette.bor_lv2_pc, e.theme.news.palette.bg_hover_normal_pc))),
            cp = (0, a.iv)(["display:flex;align-items:center;justify-content:center;line-height:1;"]),
            dp = (0, a.iv)(["display:inline-block;margin-left:4px;", ""], (e => e.hasVoted ? (0, a.iv)(["color:#ff9c00;"]) : (0, a.iv)(["color:", ";"], e.theme.news.palette.text_sub_lv2_common))),
            pp = (0, a.iv)(["color:#ff9c00;"]),
            mp = (0, a.iv)(["display:flex;align-items:center;justify-content:center;min-width:158px;height:32px;padding:0 8px 0 4px;font-size:", ";font-weight:bold;"], se.px12),
            hp = (0, a.iv)(["display:flex;align-items:center;justify-content:center;line-height:1;color:", ";"], (e => e.theme.news.palette.btn_disabled_text_common)),
            up = (0, a.iv)(["display:inline-block;margin-left:4px;color:", ";"], (e => e.theme.news.palette.text_sub_lv1_common)),
            gp = (0, a.iv)(["color:", ";"], (e => e.theme.news.palette.icon_pc)),
            xp = (0, a.iv)(["display:flex;align-items:center;justify-content:center;color:", ";"], (e => e.theme.news.palette.btn_disabled_text_common)),
            _p = (0, a.iv)(["", ";margin-right:8px;"], (e => Er({
                size: 16,
                color: e.theme.news.palette.loading_gray_common
            }))), fp = a.ZP.button.withConfig({componentId: "sc-x1bzsn-0"})(["", ""], lp),
            wp = a.ZP.div.withConfig({componentId: "sc-x1bzsn-1"})(["", ""], mp),
            bp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-2"})(["", ""], xp),
            vp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-3"})(["", ""], _p),
            yp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-4"})(["", ""], cp),
            jp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-5"})(["", ""], hp),
            Ip = (0, a.ZP)(ap.c).withConfig({componentId: "sc-x1bzsn-6"})(["", ""], pp),
            Cp = (0, a.ZP)(ap.c).withConfig({componentId: "sc-x1bzsn-7"})(["", ""], gp),
            Pp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-8"})(["", ""], dp),
            kp = a.ZP.span.withConfig({componentId: "sc-x1bzsn-9"})(["", ""], up), Sp = ({
                                                                                             helpfulCount: e,
                                                                                             commentVoteStatus: t,
                                                                                             hasVoted: n
                                                                                         }) => t === uo ? (0, o.jsxs)(bp, {children: [(0, o.jsx)(vp, {}), "処理中…"]}) : t === co ? (0, o.jsxs)(yp, {
                children: [(0, o.jsx)(Ip, {size: 22}), "参考になった", (0, o.jsx)(Pp, {
                    hasVoted: n,
                    children: e + 1
                })]
            }) : (0, o.jsxs)(yp, {
                children: [(0, o.jsx)(Ip, {size: 22}), "参考になった", (0, o.jsx)(Pp, {
                    hasVoted: n,
                    children: e
                })]
            }), Tp = e => {
                const {updateHelpful: t} = ((e, t, n, o) => {
                    const s = (0, i.I0)();
                    return {
                        updateHelpful: (0, r.useCallback)((() => Id(void 0, null, (function* () {
                            yield jd(50), s(Cd(e, t, n, o))
                        }))), [])
                    }
                })(e.commentArticleId, e.commentId, e.csrfToken, !1), {hasVoted: n} = (s = e.commentVoteStatus, {hasVoted: (0, r.useMemo)((() => Io.includes(s)), [s])});
                var s;
                return e.isDisabled ? (0, o.jsx)(wp, {children: (0, o.jsxs)(jp, {children: [(0, o.jsx)(Cp, {size: 22}), "参考になった", (0, o.jsx)(kp, {children: e.helpfulCount})]})}) : (0, o.jsx)(fp, {
                    onClick: t,
                    hasVoted: n,
                    disabled: n,
                    "data-cl-params": `_cl_vmodule:${e.clVmodule};_cl_link:hlpflbtn;_cl_position:${e.pos};`,
                    children: (0, o.jsx)(Sp, {
                        helpfulCount: e.helpfulCount,
                        commentVoteStatus: e.commentVoteStatus,
                        hasVoted: n
                    })
                })
            },
            Op = a.ZP.li.withConfig({componentId: "sc-tjzn3k-0"})(["padding:12px 16px;& + &{border-top:1px solid ", ";}&:not(:first-child):last-child{position:relative;height:52px;overflow:hidden;&::after{position:absolute;bottom:0;left:0;z-index:", ";display:block;width:100%;height:100%;content:'';background:linear-gradient( to top,", " 0,rgb(255 255 255 / 0%) 100% );}}"], (e => e.theme.news.palette.bor_lv1_pc), E, (e => e.theme.news.palette.bg_lv1_common)),
            Dp = a.ZP.div.withConfig({componentId: "sc-tjzn3k-1"})(["display:flex;"]),
            Ep = a.ZP.div.withConfig({componentId: "sc-tjzn3k-2"})(["flex:0 1 auto;flex-basis:0;flex-grow:1;max-width:100%;margin-left:16px;"]),
            Lp = a.ZP.p.withConfig({componentId: "sc-tjzn3k-3"})(["font-size:", ";line-height:1.5;word-break:break-all;white-space:pre-wrap;"], se.px15),
            Zp = a.ZP.div.withConfig({componentId: "sc-tjzn3k-4"})(["display:flex;align-items:center;justify-content:", ";margin-top:6px;"], (({existsReply: e}) => e ? "space-between" : "flex-end")),
            zp = a.ZP.a.withConfig({componentId: "sc-tjzn3k-5"})(["font-size:", ";"], se.px14),
            $p = a.ZP.p.withConfig({componentId: "sc-tjzn3k-6"})(["font-size:", ";color:", ";"], se.px14, (e => e.theme.news.palette.text_sub_lv2_common)),
            Ap = a.ZP.span.withConfig({componentId: "sc-tjzn3k-7"})(["padding-left:4px;"]),
            Rp = a.ZP.div.withConfig({componentId: "sc-tjzn3k-8"})(["display:flex;align-items:center;"]),
            Fp = a.ZP.div.withConfig({componentId: "sc-tjzn3k-9"})(["margin-left:12px;"]),
            Up = (0, a.ZP)(Zc.L).withConfig({componentId: "sc-tjzn3k-10"})(["&:hover{color:", ";text-decoration:none;}"], (e => e.theme.riff.palette.base)),
            Bp = ({totalResults: e, commentUrl: t, index: n}) => 0 === e ? null : t ? (0, o.jsxs)(zp, {
                href: t,
                "data-cl-params": `_cl_vmodule:cmtload;_cl_link:to_rep;_cl_position:${n};`,
                children: ["返信", (0, o.jsxs)(Ap, {children: [e, "件"]})]
            }) : (0, o.jsxs)($p, {children: ["返信", (0, o.jsxs)(Ap, {children: [e, "件"]})]}),
            Np = e => e.isLast ? (0, o.jsx)(Op, {
                children: (0, o.jsxs)(Dp, {
                    children: [(0, o.jsx)(qc, {
                        src: e.profileImage.url,
                        width: I,
                        height: I,
                        alt: e.name,
                        linkUrl: e.profileUrl,
                        setBorder: !1
                    }), (0, o.jsx)(Ep, {children: (0, o.jsx)(Lp, {children: e.text})})]
                })
            }) : (0, o.jsx)(Op, {
                children: (0, o.jsxs)(Dp, {
                    children: [(0, o.jsx)(qc, {
                        src: e.profileImage.url,
                        width: I,
                        height: I,
                        alt: e.name,
                        linkUrl: e.profileUrl,
                        linkClParams: `_cl_vmodule:cmt_usr;_cl_link:profimg;_cl_position:${e.index};`,
                        setBorder: !1
                    }), (0, o.jsxs)(Ep, {
                        children: [(0, o.jsx)(Lp, {
                            children: (0, o.jsx)(Kc, {
                                text: e.text,
                                rsec: "cmt_usr",
                                pos: e.index
                            })
                        }), (0, o.jsxs)(Zp, {
                            existsReply: e.reply.totalResults > 0,
                            children: [(0, o.jsx)(Bp, {
                                totalResults: e.reply.totalResults,
                                commentUrl: e.commentUrl,
                                index: e.index
                            }), (0, o.jsxs)(Rp, {
                                children: [(0, o.jsx)(rp, {
                                    empathyCount: e.empathyCount,
                                    insightCount: e.insightCount,
                                    negativeCount: e.negativeCount,
                                    hideZeroCount: !1,
                                    isDisabled: !1,
                                    propertyId: e.propertyId,
                                    commentArticleId: e.commentArticleId,
                                    commentId: e.commentId,
                                    status: e.commentVoteStatus,
                                    clVmodule: "cmt_usr",
                                    position: String(e.index),
                                    clOtherParams: {cmt_id: e.commentId},
                                    pageData: e.pageData,
                                    csrfToken: e.token
                                }), (0, o.jsx)(Fp, {
                                    children: (0, o.jsx)(zc.Z, {
                                        size: "xxx-small",
                                        children: (0, o.jsx)(Up, {
                                            href: e.snsShareLink.twitter,
                                            "data-cl-params": `_cl_vmodule:cmt_usr;_cl_link:twshare;_cl_position:${e.index};`,
                                            target: "_blank",
                                            rel: "noreferrer noopener"
                                        })
                                    })
                                })]
                            })]
                        }), (0, o.jsx)(id, {status: e.commentVoteStatus})]
                    })]
                })
            }), Mp = () => {
                const {commentShort: e, pageData: t} = (0, i.v9)((e => ({
                    commentShort: e.commentShort,
                    pageData: e.pageData
                }))), {comments: n, commentArticleId: s, token: r} = e;
                return (0, o.jsx)("ul", {
                    children: n.map(((e, i) => {
                        const a = i + 1;
                        return (0, o.jsx)(Np, {
                            text: e.text,
                            name: e.name,
                            commentId: e.commentId,
                            permalink: e.permalink,
                            commentUrl: e.commentUrl,
                            propertyId: e.propertyId,
                            commentArticleId: s,
                            pageData: t,
                            empathyCount: e.empathyCount,
                            insightCount: e.insightCount,
                            negativeCount: e.negativeCount,
                            postDate: e.postDate,
                            profileUrl: e.profileUrl,
                            profileImage: e.profileImage,
                            snsShareLink: e.snsShareLink,
                            reply: e.reply,
                            commentVoteStatus: e.commentVoteStatus,
                            token: r,
                            isLast: n.length > 1 && n.length === a,
                            index: a
                        }, `${e.commentId}_${a}`)
                    }))
                })
            };
        var Vp = n(65529), Wp = n(51679);
        const Hp = a.ZP.a.withConfig({componentId: "sc-2mjst1-0"})(["display:flex;align-items:center;justify-content:center;width:320px;padding:8px 16px;color:", ";background-color:", ";border:solid 1px ", ";border-radius:", ";&:hover{color:", ";text-decoration:none;background-color:", ";}"], (e => e.theme.news.palette.btn_simple_text_common), (e => e.theme.news.palette.btn_simple_bg_common), (e => e.theme.news.palette.btn_simple_border_common), A, (e => e.theme.news.palette.btn_simple_text_common), (e => e.theme.news.palette.bg_hover_normal_pc)),
            qp = (0, a.ZP)(Wp.y).withConfig({componentId: "sc-2mjst1-1"})(["margin-right:4px;color:", ";"], (e => e.theme.news.palette.text_sub_lv2_common)),
            Yp = a.ZP.span.withConfig({componentId: "sc-2mjst1-2"})(["font-size:", ";font-weight:bold;"], se.px12),
            Jp = () => {
                const {loginOrCommentDetailUrl: e} = (0, i.v9)((e => ({loginOrCommentDetailUrl: e.commentShort.loginOrCommentDetailUrl})));
                return e ? (0, o.jsxs)(Hp, {
                    href: e,
                    "data-cl-params": "_cl_vmodule:artcmt_f;_cl_link:to_cmt;_cl_position:0;",
                    children: [(0, o.jsx)(qp, {size: 20}), (0, o.jsx)(Yp, {children: "コメントを書く"})]
                }) : null
            },
            Gp = a.ZP.div.withConfig({componentId: "sc-ry3ev7-0"})(["display:flex;align-items:center;justify-content:space-between;padding:12px 16px 0;", ""], (({existsNotice: e}) => e ? "padding-top: 0;" : "")),
            Xp = a.ZP.div.withConfig({componentId: "sc-ry3ev7-1"})(["display:flex;align-items:center;"]),
            Qp = (0, a.ZP)(Vp.g).withConfig({componentId: "sc-ry3ev7-2"})(["color:", ";"], (e => e.theme.news.palette.text_sub_lv2_common)),
            Kp = a.ZP.p.withConfig({componentId: "sc-ry3ev7-3"})(["padding-left:2px;font-size:", ";font-weight:bold;color:", ";"], se.px16, (e => e.theme.news.palette.text_base_common)),
            em = a.ZP.span.withConfig({componentId: "sc-ry3ev7-4"})(["padding-left:4px;"]),
            tm = ({existsNotice: e}) => {
                const {totalCommentCount: t} = (0, i.v9)((e => ({totalCommentCount: e.commentShort.totalCommentCount})));
                return (0, o.jsxs)(Gp, {
                    existsNotice: e,
                    children: [(0, o.jsxs)(Xp, {children: [(0, o.jsx)(Qp, {size: 24}), (0, o.jsxs)(Kp, {children: ["コメント", (0, o.jsxs)(em, {children: [t, "件"]})]})]}), (0, o.jsx)(Jp, {})]
                })
            }, nm = "commentary", om = "supplement", im = "viewpoint", sm = "suggestion",
            rm = (0, a.iv)(["display:inline-block;padding:", ";margin-right:", ";font-size:", ";line-height:1;color:", ";vertical-align:1px;border-radius:", ";"], (({isSmallSize: e}) => e ? "2px 3px" : "4px 6px 3px 6px"), (({isSmallSize: e}) => e ? "2px" : "4px"), (({isSmallSize: e}) => e ? se.px11 : se.px14), (e => e.theme.news.palette.text_white_common), (({isSmallSize: e}) => e ? z : $)),
            am = a.ZP.span.withConfig({componentId: "sc-84c7oa-0"})(["", " background-color:", ";"], rm, (e => e.theme.riff.palette.blue[5])),
            lm = a.ZP.span.withConfig({componentId: "sc-84c7oa-1"})(["", " background-color:", ";"], rm, (e => e.theme.riff.palette.pink[5])),
            cm = a.ZP.span.withConfig({componentId: "sc-84c7oa-2"})(["", " background-color:", ";"], rm, (e => e.theme.riff.palette.green[5])),
            dm = a.ZP.span.withConfig({componentId: "sc-84c7oa-3"})(["", " background-color:", ";"], rm, (e => e.theme.riff.palette.yellow[5])),
            pm = ({label: e, isSmallSize: t, commentatorType: n, pos: i, isFloating: s}) => {
                const a = ((e, t) => {
                    if (t) return "cmtfloat";
                    switch (e) {
                        case"author":
                            return "cmt_athr";
                        case"professional":
                            return "cmt_pro";
                        case"celebrity":
                            return "cmt_cele";
                        default:
                            return null
                    }
                })(n, s), l = ((e, t) => {
                    switch (e) {
                        case"commentary":
                            return t ? "lab_com" : "com";
                        case"suggestion":
                            return t ? "lab_sug" : "sug";
                        case"supplement":
                            return t ? "lab_sup" : "sup";
                        case"viewpoint":
                            return t ? "lab_vie" : "vie";
                        default:
                            return null
                    }
                })(e, s);
                switch (e) {
                    case nm:
                        return (0, o.jsxs)(r.Fragment, {
                            children: [(0, o.jsx)("a", {
                                "data-cl-params": a && l ? `_cl_vmodule:${a};_cl_link:${l};_cl_position:${i};` : "",
                                hidden: !0
                            }), (0, o.jsx)(am, {isSmallSize: t, children: "解説"})]
                        });
                    case sm:
                        return (0, o.jsxs)(r.Fragment, {
                            children: [(0, o.jsx)("a", {
                                "data-cl-params": a && l ? `_cl_vmodule:${a};_cl_link:${l};_cl_position:${i};` : "",
                                hidden: !0
                            }), (0, o.jsx)(lm, {isSmallSize: t, children: "提言"})]
                        });
                    case om:
                        return (0, o.jsxs)(r.Fragment, {
                            children: [(0, o.jsx)("a", {
                                "data-cl-params": a && l ? `_cl_vmodule:${a};_cl_link:${l};_cl_position:${i};` : "",
                                hidden: !0
                            }), (0, o.jsx)(cm, {isSmallSize: t, children: "補足"})]
                        });
                    case im:
                        return (0, o.jsxs)(r.Fragment, {
                            children: [(0, o.jsx)("a", {
                                "data-cl-params": a && l ? `_cl_vmodule:${a};_cl_link:${l};_cl_position:${i};` : "",
                                hidden: !0
                            }), (0, o.jsx)(dm, {isSmallSize: t, children: "見解"})]
                        });
                    default:
                        return null
                }
            };
        var mm = n(33870);
        const hm = (0, a.ZP)(Zc.L).withConfig({componentId: "sc-18ol1lg-0"})(["&:hover{color:", ";text-decoration:none;}"], (e => e.theme.riff.palette.base)),
            um = ({snsShareLink: e, rsec: t, pos: n}) => {
                const i = (0, r.useContext)(a.Ni);
                return (0, o.jsxs)(zc.Z, {
                    size: "xxx-small",
                    children: [(0, o.jsx)(hm, {
                        href: e.twitter,
                        "data-cl-params": `_cl_vmodule:${t};_cl_link:twshare;_cl_position:${n};`,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }), (0, o.jsx)(mm.L, {
                        href: e.facebook,
                        "data-cl-params": `_cl_vmodule:${t};_cl_link:fbshare;_cl_position:${n};`,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        style: {backgroundColor: "#fff", color: i.news.palette["btn-sns-bg-facebook"]}
                    })]
                })
            },
            gm = (0, a.iv)(["display:inline-block;flex-shrink:0;-ms-flex-negative:0;font-size:", ";color:", ";margin-left:4px;"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            xm = (0, a.iv)(["color:", ";&:hover{color:", ";}"], (e => e.theme.news.palette.text_sub_lv1_common), (e => e.theme.news.palette.text_sub_lv1_common)),
            _m = a.ZP.li.withConfig({componentId: "sc-1ndg0qx-0"})(["padding:12px 16px 8px;& + &{border-top:1px solid ", ";}"], (e => e.theme.news.palette.bor_lv1_pc)),
            fm = a.ZP.div.withConfig({componentId: "sc-1ndg0qx-1"})(["display:flex;"]),
            wm = a.ZP.div.withConfig({componentId: "sc-1ndg0qx-2"})(["flex:0 1 auto;flex-basis:0;flex-grow:1;max-width:100%;margin-left:12px;"]),
            bm = a.ZP.div.withConfig({componentId: "sc-1ndg0qx-3"})(["display:flex;align-items:center;"]),
            vm = a.ZP.p.withConfig({componentId: "sc-1ndg0qx-4"})(["flex:0 1 auto;max-width:100%;word-break:break-all;"]),
            ym = a.ZP.a.withConfig({componentId: "sc-1ndg0qx-5"})(["font-size:", ";font-weight:bold;color:", ";&:hover,&:visited{color:", ";}"], se.px14, (e => e.theme.news.palette.text_base_common), (e => e.theme.news.palette.text_base_common)),
            jm = a.ZP.img.withConfig({componentId: "sc-1ndg0qx-6"})(["flex-shrink:0;height:15px;margin-left:4px;vertical-align:-2px;"]),
            Im = a.ZP.time.withConfig({componentId: "sc-1ndg0qx-7"})(["", ""], gm),
            Cm = a.ZP.a.withConfig({componentId: "sc-1ndg0qx-8"})(["", ""], xm),
            Pm = a.ZP.p.withConfig({componentId: "sc-1ndg0qx-9"})(["font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            km = a.ZP.p.withConfig({componentId: "sc-1ndg0qx-10"})(["margin-top:4px;font-size:", ";line-height:1.5;word-break:break-all;white-space:pre-wrap;"], se.px15),
            Sm = a.ZP.div.withConfig({componentId: "sc-1ndg0qx-11"})(["display:flex;align-items:center;justify-content:space-between;padding-top:12px;"]),
            Tm = e => {
                const t = (e => {
                    switch (e) {
                        case"author":
                            return "cmt_athr";
                        case"professional":
                            return "cmt_pro";
                        case"celebrity":
                            return "cmt_cele";
                        default:
                            return ""
                    }
                })(e.commentator.type);
                return (0, o.jsx)(_m, {
                    children: (0, o.jsxs)(fm, {
                        children: [(0, o.jsx)(qc, {
                            src: e.profileImage.url,
                            width: C,
                            height: C,
                            alt: e.name,
                            linkUrl: e.profileUrl,
                            linkClParams: `_cl_vmodule:${t};_cl_link:profimg;_cl_position:${e.index};`,
                            setBorder: !1
                        }), (0, o.jsxs)(wm, {
                            children: [(0, o.jsxs)(bm, {
                                children: [(0, o.jsxs)(vm, {
                                    children: [(0, o.jsx)(ym, {
                                        href: e.profileUrl,
                                        "data-cl-params": `_cl_vmodule:${t};_cl_link:profnm;_cl_position:${e.index};`,
                                        children: e.name
                                    }), (0, o.jsx)(jm, {src: te.img_icon_expert_h30, alt: "認証済み"})]
                                }), (0, o.jsx)(Im, {
                                    children: (0, o.jsx)(Cm, {
                                        href: e.permalink,
                                        "data-cl-params": `_cl_vmodule:${t};_cl_link:prmtime;_cl_position:${e.index};`,
                                        children: e.postDate
                                    })
                                })]
                            }), (0, o.jsx)(Pm, {children: e.commentator.title}), (0, o.jsxs)(km, {
                                children: [(0, o.jsx)(pm, {
                                    label: e.label,
                                    isSmallSize: !1,
                                    commentatorType: e.commentator.type,
                                    pos: e.index,
                                    isFloating: !1
                                }), (0, o.jsx)(Kc, {text: e.text, rsec: t, pos: e.index})]
                            }), (0, o.jsxs)(Sm, {
                                children: [(0, o.jsx)(um, {
                                    snsShareLink: e.snsShareLink,
                                    rsec: t,
                                    pos: e.index
                                }), (0, o.jsx)(Tp, {
                                    commentArticleId: e.commentArticleId,
                                    commentId: e.commentId,
                                    helpfulCount: e.thumbsUpCount,
                                    csrfToken: e.token,
                                    commentVoteStatus: e.commentVoteStatus,
                                    clVmodule: t,
                                    pos: e.index,
                                    isDisabled: !1
                                })]
                            }), (0, o.jsx)(id, {status: e.commentVoteStatus})]
                        })]
                    })
                })
            }, Om = () => {
                const {commentShortState: e, pageData: t} = (0, i.v9)((e => ({
                    commentShortState: e.commentShort,
                    pageData: e.pageData
                }))), {commentatorComments: n, commentArticleId: s, token: r} = e;
                return (0, o.jsx)("ul", {
                    children: n.map(((e, n) => {
                        const i = n + 1;
                        return (0, o.jsx)(Tm, {
                            text: e.text,
                            name: e.name,
                            commentId: e.commentId,
                            permalink: e.permalink,
                            pageData: t,
                            commentArticleId: s,
                            propertyId: e.propertyId,
                            thumbsUpCount: e.thumbsUpCount,
                            postDate: e.postDate,
                            profileUrl: e.profileUrl,
                            profileImage: e.profileImage,
                            snsShareLink: e.snsShareLink,
                            commentVoteStatus: e.commentVoteStatus,
                            commentator: e.commentator,
                            label: e.label,
                            token: r,
                            index: i
                        }, `${e.commentId}_${i}`)
                    }))
                })
            }, Dm = e => null === e || (0, Jc.x)(e) <= 13 ? e : `${(0, Jc._)(e, 0, 13)}…`,
            Em = a.ZP.section.withConfig({componentId: "sc-c89yjt-0"})(["padding:8px 16px 0px;line-height:1.5;"]),
            Lm = a.ZP.div.withConfig({componentId: "sc-c89yjt-1"})(["display:flex;flex-flow:column;align-items:center;"]),
            Zm = a.ZP.span.withConfig({componentId: "sc-c89yjt-2"})(["display:inline-block;padding:0px 4px;margin-bottom:4px;font-size:", ";font-weight:bold;background-color:", ";"], se.px12, (e => e.theme.riff.palette.blue[1])),
            zm = a.ZP.span.withConfig({componentId: "sc-c89yjt-3"})(["font-size:", ";"], se.px11),
            $m = a.ZP.p.withConfig({componentId: "sc-c89yjt-4"})(["width:470px;margin-bottom:4px;"]),
            Am = a.ZP.span.withConfig({componentId: "sc-c89yjt-5"})(["font-weight:bold;"]),
            Rm = a.ZP.span.withConfig({componentId: "sc-c89yjt-6"})(["display:inline-block;"]),
            Fm = a.ZP.ul.withConfig({componentId: "sc-c89yjt-7"})(["display:flex;padding-left:4px;"]),
            Um = a.ZP.li.withConfig({componentId: "sc-c89yjt-8"})(["", " margin-right:24px;font-size:", ";"], (e => (e => {
                const t = e.paddingLeft ? e.paddingLeft : 12, n = e.color ? e.color : "#ccc",
                    o = e.fontSize ? e.fontSize : 14, i = e.lineHeight ? e.lineHeight : 1.4;
                return (0, a.iv)(["position:relative;padding-left:", "px;&::before{content:'';position:absolute;top:", "px;left:0;display:block;width:4px;height:4px;border-radius:", ";background-color:", ";}"], t, o * i / 2 - 2, F, n)
            })({color: e.theme.news.palette.text_base_common, fontSize: 14})), se.px14), Bm = () => {
                const e = (0, i.v9)((e => e.commentSummary));
                return (0, o.jsxs)(Em, {children: [(0, o.jsxs)(Zm, {children: ["コメントAI要約 ", (0, o.jsx)(zm, {children: "β版"})]}), (0, o.jsxs)(Lm, {children: [(0, o.jsxs)($m, {children: [(0, o.jsxs)(Am, {children: [e.strengths, " "]}), (0, o.jsx)(Rm, {children: "が話題"})]}), (0, o.jsxs)(Fm, {children: [(0, o.jsx)(Um, {children: Dm(e.summaryOfMajorityOpinion)}), (0, o.jsx)(Um, {children: Dm(e.summaryOfNonMajorityOpinion)})]})]})]})
            };
        var Nm = Object.defineProperty, Mm = Object.defineProperties, Vm = Object.getOwnPropertyDescriptors,
            Wm = Object.getOwnPropertySymbols, Hm = Object.prototype.hasOwnProperty,
            qm = Object.prototype.propertyIsEnumerable,
            Ym = (e, t, n) => t in e ? Nm(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Jm = (e, t) => {
                for (var n in t || (t = {})) Hm.call(t, n) && Ym(e, n, t[n]);
                if (Wm) for (var n of Wm(t)) qm.call(t, n) && Ym(e, n, t[n]);
                return e
            };
        const Gm = a.ZP.div.withConfig({componentId: "sc-1qibnrm-0"})(["border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            Xm = a.ZP.div.withConfig({componentId: "sc-1qibnrm-1"})(["", ""], (({isShow: e}) => e ? "" : "display: none;")),
            Qm = a.ZP.div.withConfig({componentId: "sc-1qibnrm-2"})([""]),
            Km = a.ZP.div.withConfig({componentId: "sc-1qibnrm-3"})(["", " + &{border-top:1px solid ", ";}"], Qm, (e => e.theme.news.palette.bor_lv1_pc)),
            eh = a.ZP.div.withConfig({componentId: "sc-1qibnrm-4"})(["", " + &{border-top:1px solid ", ";}"], Qm, (e => e.theme.news.palette.bor_lv1_pc)),
            th = a.ZP.div.withConfig({componentId: "sc-1qibnrm-5"})(["padding:16px 16px 0;text-align:center;"]),
            nh = a.ZP.div.withConfig({componentId: "sc-1qibnrm-6"})(["padding:40px 16px;font-size:", ";text-align:center;"], se.px14),
            oh = a.ZP.a.withConfig({componentId: "sc-1qibnrm-7"})(["color:", ";", ""], (e => e.theme.news.palette.link_pc), Zr),
            ih = () => (0, o.jsxs)(nh, {
                children: [(0, o.jsx)("p", {children: "違反コメント数などが基準を超えたため、コメント欄を自動的に非表示にしています。"}), (0, o.jsxs)("p", {
                    children: ["詳細は", (0, o.jsx)(oh, {
                        href: "https://news.yahoo.co.jp/newshack/information/20211019.html",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "こちら"
                    }), "をご覧ください。"]
                })]
            }), sh = () => {
                const {
                    propertyId: e,
                    totalCommentCount: t,
                    userCommentCount: n,
                    commentatorCommentCount: s,
                    commentUrl: a,
                    moduleStatus: l,
                    isShow: c,
                    commentSummaryStatus: d,
                    notice: p
                } = (0, i.v9)((e => {
                    var t;
                    return {
                        propertyId: null != (t = e.commentShort.propertyId) ? t : "news_user",
                        totalCommentCount: e.commentShort.totalCommentCount,
                        userCommentCount: e.commentShort.comments.length,
                        commentatorCommentCount: e.commentShort.commentatorComments.length,
                        commentUrl: e.commentShort.commentUrl,
                        moduleStatus: e.commentShort.moduleStatus,
                        isShow: e.commentShort.isShow,
                        commentSummaryStatus: e.commentSummary.status,
                        notice: e.commentShort.notice
                    }
                })), m = (0, i.v9)((e => e.commentSummary.isShowCommentSummary && "forbidden" !== e.commentSummary.status));
                (0, r.useEffect)((() => {
                    window.customLogger && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
                }), []);
                const [h, u] = (0, r.useState)(!1), g = (0, r.useCallback)((e => u(!!e)), []),
                    x = (0, r.useMemo)((() => ({notice: p, isCommentOff: l === bi})), [p, l]),
                    _ = (0, r.useMemo)((() => (0, o.jsx)(cc, Jm({}, x))), [x]), f = (0, r.useMemo)((() => {
                        return (0, o.jsx)(cc, (e = Jm({}, x), Mm(e, Vm({ref: g}))));
                        var e
                    }), [x, g]);
                return l === yi ? (0, o.jsxs)(Gm, {children: [c ? _ : null, (0, o.jsx)(Lc, {})]}) : l === fi ? (0, o.jsxs)(Gm, {
                    children: [c ? _ : null, (0, o.jsx)(Oc, {
                        title: "ただいま、コメントを非表示にしています",
                        explain: "アクセスが集中している可能性がありますので、しばらくしてから再度お試しください。"
                    })]
                }) : l === wi ? (0, o.jsxs)(Gm, {children: [c ? _ : null, (0, o.jsx)(ih, {})]}) : l === ji ? (0, o.jsxs)(Gm, {
                    children: [c ? _ : null, (0, o.jsx)(Oc, {
                        title: "コメントを取得できませんでした",
                        explain: "しばらくしてから再度お試しください"
                    })]
                }) : 0 === n && 0 === s ? (0, o.jsx)(Gm, {
                    children: (0, o.jsxs)(Xm, {
                        isShow: c,
                        children: [c ? f : null, (0, o.jsx)(tm, {existsNotice: h}), (0, o.jsx)(Oc, {title: `この${Yc(e)}にはまだコメントがありません`})]
                    })
                }) : (0, o.jsx)(Gm, {
                    children: (0, o.jsxs)(Xm, {
                        isShow: c,
                        children: [c ? f : null, (0, o.jsx)(tm, {existsNotice: h}), s > 0 ? (0, o.jsx)(Qm, {children: (0, o.jsx)(Om, {})}) : null, "success" === d ? (0, o.jsx)(eh, {children: (0, o.jsx)(Bm, {})}) : null, "success" !== d && n > 0 ? (0, o.jsx)(Km, {children: (0, o.jsx)(Mp, {})}) : null, n > 0 ? (0, o.jsx)(th, {
                            children: (0, o.jsx)(Cc, {
                                text: `もっと見る(${t}件)`,
                                type: "simple",
                                isDisabled: !1,
                                useAnchorTag: !0,
                                linkURL: a || void 0,
                                dataClParams: "_cl_vmodule:cmtload;_cl_link:to_all;_cl_position:0;" + (m ? "summary:true" : "")
                            })
                        }) : null]
                    })
                })
            };
        var rh = n(27916), ah = Object.defineProperty, lh = Object.defineProperties,
            ch = Object.getOwnPropertyDescriptors, dh = Object.getOwnPropertySymbols,
            ph = Object.prototype.hasOwnProperty, mh = Object.prototype.propertyIsEnumerable,
            hh = (e, t, n) => t in e ? ah(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            uh = (e, t) => {
                for (var n in t || (t = {})) ph.call(t, n) && hh(e, n, t[n]);
                if (dh) for (var n of dh(t)) mh.call(t, n) && hh(e, n, t[n]);
                return e
            };

        class gh extends r.Component {
            render() {
                var e;
                const t = this.props.id ? {id: this.props.id} : null,
                    n = this.props.dataClParams ? {"data-cl-params": this.props.dataClParams} : null,
                    i = null != (e = this.props.rootProps) ? e : null,
                    s = this.props.size ? {fontSize: this.props.size} : null;
                return (0, o.jsx)(rh.X, (r = uh(uh({}, t), n), a = {
                    onChange: e => {
                        this.props.changeHandler(e.target.checked)
                    },
                    checked: this.props.checked,
                    rootProps: uh(uh({}, {alignItems: "center", paddingRight: "1"}), i),
                    labelProps: uh({}, s),
                    children: this.props.text
                }, lh(r, ch(a))));
                var r, a
            }
        }

        const xh = a.ZP.div.withConfig({componentId: "sc-z2ska1-0"})(["display:", ";justify-content:flex-end;padding:8px 12px;font-size:", ";"], (({isShow: e}) => e ? "flex" : "none"), se.px12),
            _h = e => {
                const t = t => {
                    var n, o;
                    const i = e.isShow ? "CommentShortCheckboxHide" : "CommentShortCheckboxHideCancel";
                    if (window.customLogger) {
                        const e = "cmt_hide", s = t ? "hide" : "hide_cl",
                            r = null != (o = null == (n = document.getElementById(i)) ? void 0 : n.getAttribute("data-cl_cl_index")) ? o : "-1";
                        window.customLogger.logClick("wrapper", s, r, {_cl_vmodule: e, _cl_position: 0})
                    }
                    e.setIsShow(!t)
                };
                return (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(xh, {
                        isShow: e.isShow,
                        children: (0, o.jsx)(gh, {
                            text: "コメント非表示",
                            checked: !1,
                            id: "CommentShortCheckboxHide",
                            dataClParams: "_cl_vmodule:cmt_hide;_cl_link:hide;_cl_position:0;",
                            changeHandler: t,
                            size: "x-small"
                        })
                    }), (0, o.jsx)(xh, {
                        isShow: !e.isShow,
                        children: (0, o.jsx)(gh, {
                            text: "コメント非表示",
                            checked: !0,
                            id: "CommentShortCheckboxHideCancel",
                            dataClParams: "_cl_vmodule:cmt_hide;_cl_link:hide_cl;_cl_position:0;",
                            changeHandler: t,
                            size: "x-small"
                        })
                    })]
                })
            };
        var fh = Object.defineProperty, wh = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty,
            vh = Object.prototype.propertyIsEnumerable,
            yh = (e, t, n) => t in e ? fh(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            jh = (e, t) => {
                for (var n in t || (t = {})) bh.call(t, n) && yh(e, n, t[n]);
                if (wh) for (var n of wh(t)) vh.call(t, n) && yh(e, n, t[n]);
                return e
            };
        const Ih = (e, t, n, o) => i => {
                return s = void 0, r = null, a = function* () {
                    const s = void 0 !== (null == o ? void 0 : o.retry) && o.retry > 0 ? o.retry : 0;
                    i(er());
                    for (let o = 0; o <= s; o++) {
                        const r = yield tn.get({
                            url: `/api/public/east-primary/comment-summary/properties/${e}/articles/${t}`,
                            queryParameters: {token: n}
                        });
                        if (!r.isSuccess) {
                            if (403 === r.status) return void ("ngKeywordContained" === r.code ? i(nr("string" == typeof r.detail ? r.detail : null)) : i(ir()));
                            break
                        }
                        if ("created" === r.response.status) return void i(or(jh({}, r.response.data)));
                        if (o === s) break;
                        yield new Promise((e => setTimeout(e, 5e3)))
                    }
                    i(tr())
                }, new Promise(((e, t) => {
                    var n = e => {
                        try {
                            i(a.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }, o = e => {
                        try {
                            i(a.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }, i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
                    i((a = a.apply(s, r)).next())
                }));
                var s, r, a
            },
            Ch = a.ZP.aside.withConfig({componentId: "sc-1ak5zlk-0"})(["background-color:", ";"], (e => e.theme.news.palette.bg_lv1_common)),
            Ph = a.ZP.aside.withConfig({componentId: "sc-1ak5zlk-1"})(["background-color:", ";border-top:1px solid ", ";"], (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bor_lv2_pc)),
            kh = () => {
                var e, t;
                const n = (0, i.v9)((e => e.commentShort)), s = (0, i.v9)((e => e.commentSummary)),
                    a = (0, i.v9)((e => e.commentSummary.isShowCommentSummary)), {fetchComment: l} = (() => {
                        const e = (0, i.I0)();
                        return {fetchComment: t => e(dc(t))}
                    })(), {reflectStorage: c, setIsShow: d} = Ql(!1), {fetchCommentSummary: p} = ((e, t, n, o) => {
                        const s = (0, i.I0)();
                        return {fetchCommentSummary: () => s(Ih(e, t, n, o))}
                    })(null != (e = n.propertyId) ? e : "news_user", null != (t = n.commentArticleId) ? t : "", s.commentSummaryToken);
                (0, r.useEffect)((() => {
                    c(n.isShow), n.moduleStatus === xi && (l({
                        propertyId: n.propertyId,
                        commentArticleId: n.commentArticleId,
                        canWebToApp: !1
                    }), a && p())
                }), []);
                const m = (0, r.useMemo)((() => (0, o.jsx)(cc, {
                    notice: n.notice,
                    isCommentOff: n.moduleStatus === bi
                })), [n.notice, n.moduleStatus]);
                return n.moduleStatus === vi ? null : n.moduleStatus === bi ? (0, o.jsx)(Ph, {children: m}) : !a || n.moduleStatus !== xi && s.status !== Hs ? n.moduleStatus === xi ? (0, o.jsx)(Ch, {children: (0, o.jsx)(lc, {itemCount: 2})}) : (0, o.jsxs)(Ch, {
                    children: [(0, o.jsx)(sh, {}), n.moduleStatus === _i ? (0, o.jsx)(_h, {
                        isShow: n.isShow,
                        setIsShow: d
                    }) : null]
                }) : (0, o.jsx)(Ch, {children: (0, o.jsx)(lc, {itemCount: 2})})
            },
            Sh = a.ZP.aside.withConfig({componentId: "sc-xyd8oi-0"})(["background-color:", ";border-top:1px solid ", ";"], (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bor_lv2_pc)),
            Th = ({usedIn: e}) => {
                switch (e) {
                    case"article":
                        return (0, o.jsx)(Ul, {
                            id: "viewable_comment",
                            position: "middle",
                            dataClParams: "_cl_vmodule:v_hdlmod;_cl_link:comment;",
                            enableLocalLogging: !0
                        });
                    case"pickup":
                        return (0, o.jsx)(Ul, {
                            id: "viewable_comment",
                            position: "middle",
                            dataClParams: "_cl_vmodule:v_tpcmod;_cl_link:comment;_cl_position:0;",
                            enableLocalLogging: !0
                        });
                    case"polls":
                        return (0, o.jsx)(Ul, {
                            id: "viewable_comment",
                            position: "middle",
                            dataClParams: "_cl_vmodule:v_polmod;_cl_link:comment;_cl_position:0;",
                            enableLocalLogging: !0
                        });
                    case"expert":
                        return (0, o.jsx)(Ul, {
                            id: "viewable_comment",
                            position: "middle",
                            dataClParams: "_cl_vmodule:v_expmod;_cl_link:comment;_cl_position:0;",
                            enableLocalLogging: !0
                        });
                    default:
                        return null
                }
            }, Oh = ({usedIn: e}) => {
                const t = (0, r.useRef)(null), n = (0, r.useRef)(null), [s, a] = (0, r.useState)(!1), {
                    moduleStatus: l,
                    isShow: c,
                    notice: d
                } = (0, i.v9)((e => ({
                    moduleStatus: e.commentShort.moduleStatus,
                    isShow: e.commentShort.isShow,
                    notice: e.commentShort.notice
                }))), {reflectStorage: p} = Ql(!1);
                (0, r.useEffect)((() => (n.current = new IntersectionObserver(((e, t) => n => {
                    for (const o of n) o.isIntersecting && !e && t(!0)
                })(s, a), {threshold: 0}), t.current && n.current.observe(t.current), p(c), () => {
                    n.current && n.current.disconnect()
                })), []);
                const m = (0, r.useMemo)((() => (0, o.jsx)(cc, {notice: d, isCommentOff: l === bi})), [d, l]);
                return l === vi ? null : l === bi ? (0, o.jsx)(Sh, {children: m}) : (0, o.jsx)("div", {
                    id: "articleCommentModule",
                    ref: t,
                    children: s ? (0, o.jsxs)($l, {children: [(0, o.jsx)(Th, {usedIn: e}), (0, o.jsx)(kh, {})]}) : (0, o.jsx)("aside", {children: (0, o.jsx)(lc, {itemCount: 2})})
                })
            };

        class Dh extends r.Component {
            componentDidMount() {
                jl.Z.logPageView(this.props.pageData)
            }

            render() {
                return (0, o.jsx)(r.Fragment, {})
            }
        }

        const Eh = (0, i.$j)((e => ({pageData: e.pageData})))(Dh);
        var Lh = n(8190), Zh = Object.defineProperty, zh = Object.getOwnPropertySymbols,
            $h = Object.prototype.hasOwnProperty, Ah = Object.prototype.propertyIsEnumerable,
            Rh = (e, t, n) => t in e ? Zh(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Fh = (0, a.ZP)((e => {
                var t = e, {isShow: n} = t, i = ((e, t) => {
                    var n = {};
                    for (var o in e) $h.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                    if (null != e && zh) for (var o of zh(e)) t.indexOf(o) < 0 && Ah.call(e, o) && (n[o] = e[o]);
                    return n
                })(t, ["isShow"]);
                return (0, o.jsx)(Lh.k, ((e, t) => {
                    for (var n in t || (t = {})) $h.call(t, n) && Rh(e, n, t[n]);
                    if (zh) for (var n of zh(t)) Ah.call(t, n) && Rh(e, n, t[n]);
                    return e
                })({}, i))
            })).withConfig({componentId: "sc-sh60th-0"})(["", " transition:", ";"], (({isShow: e}) => e ? "visibility: visible;" : "opacity:0; visibility: hidden;"), ie),
            Uh = ({additionalBottomOffsetPx: e}) => {
                const [t, n] = (0, r.useState)(!1);
                (0, r.useEffect)((() => {
                    window.addEventListener("scroll", (() => {
                        window.pageYOffset > window.innerHeight ? n(!0) : n(!1)
                    }), {passive: !0})
                }), []);
                const i = e => {
                    setTimeout((() => {
                        window.scrollTo(window.scrollX, window.scrollY - e), window.scrollY > 0 && i(e)
                    }), 100)
                };
                return (0, o.jsx)(Fh, {
                    onClick: () => (() => {
                        const e = window.scrollY / 5;
                        i(e)
                    })(),
                    isShow: t,
                    style: {right: 20, bottom: void 0 === e ? 30 : e + 30},
                    "data-cl-params": "_cl_vmodule:pagetop;_cl_link:pagetop;"
                })
            }, Bh = a.ZP.header.withConfig({componentId: "sc-1sm8x6j-0"})(["padding:12px;"]),
            Nh = a.ZP.header.withConfig({componentId: "sc-1sm8x6j-1"})(["padding:12px 12px 4px;"]),
            Mh = a.ZP.div.withConfig({componentId: "sc-1sm8x6j-2"})(["display:flex;justify-content:space-between;"]);

        class Vh extends r.Component {
            render() {
                return this.props.narrowPaddingBottom ? (0, o.jsx)(Nh, {children: (0, o.jsx)(Mh, {children: this.props.children})}) : (0, o.jsx)(Bh, {children: (0, o.jsx)(Mh, {children: this.props.children})})
            }
        }

        Vh.defaultProps = {narrowPaddingBottom: !1};
        const Wh = a.ZP.a.withConfig({componentId: "sc-1ojo1gv-0"})(["display:block;padding:0 8px;font-size:", ";", ""], se.px14, (({
                                                                                                                                        isCurrent: e,
                                                                                                                                        theme: t
                                                                                                                                    }) => e ? (0, a.iv)(["font-weight:bold;color:", ";&:hover{color:", ";}"], t.news.palette.text_base_common, t.news.palette.link_hover_pc) : ""));

        class Hh extends r.Component {
            render() {
                return (0, o.jsx)(Wh, {
                    href: this.props.linkURL,
                    "data-cl-params": this.props.dataClParams,
                    isCurrent: this.props.isCurrent,
                    target: this.props.linkTargetBlank ? "_blank" : "",
                    children: this.props.linkText
                })
            }
        }

        Hh.defaultProps = {linkTargetBlank: !1};
        const qh = a.ZP.ul.withConfig({componentId: "sc-1n7qjpm-0"})(["display:flex;align-items:center;margin-right:-8px;font-weight:bold;"]),
            Yh = a.ZP.li.withConfig({componentId: "sc-1n7qjpm-1"})(["position:relative;& + &{&::before{position:absolute;top:50%;display:block;width:1px;height:16px;content:'';background-color:", ";transform:translateY(-50%);}}"], (e => e.theme.news.palette.bor_lv2_pc));

        class Jh extends r.Component {
            render() {
                return (0, o.jsx)(qh, {
                    children: (0, o.jsx)(Yh, {
                        children: (0, o.jsx)(Hh, {
                            linkURL: this.props.linkURL,
                            dataClParams: this.props.dataClParams,
                            linkText: this.props.linkText,
                            linkTargetBlank: this.props.linkTargetBlank,
                            isCurrent: !1
                        })
                    })
                })
            }
        }

        Jh.defaultProps = {linkTargetBlank: !1};
        const Gh = a.ZP.div.withConfig({componentId: "sc-oxitzj-0"})(["display:flex;align-items:center;"]),
            Xh = a.ZP.h2.withConfig({componentId: "sc-oxitzj-1"})(["font-weight:bold;"]),
            Qh = a.ZP.p.withConfig({componentId: "sc-oxitzj-2"})(["display:flex;align-items:center;margin-left:16px;"]),
            Kh = (0, a.iv)(["position:relative;display:block;height:20px;margin-right:2px;background-repeat:no-repeat;"]),
            eu = a.ZP.span.withConfig({componentId: "sc-oxitzj-3"})(["", " padding-left:22px;font-size:", ";font-weight:bold;line-height:20px;background-image:url(", ");background-size:20px auto;"], Kh, se.px12, te.img_icon_PayPay),
            tu = a.ZP.span.withConfig({componentId: "sc-oxitzj-4"})(["align-self:flex-end;font-size:", ";font-weight:normal;line-height:20px;"], se.px12);

        class nu extends r.Component {
            render() {
                return (0, o.jsxs)(Gh, {children: [(0, o.jsx)(Xh, {children: this.props.titleText}), this.props.hasPayPay ? (0, o.jsxs)(Qh, {children: [(0, o.jsx)(eu, {children: "PayPay残高"}), (0, o.jsx)(tu, {children: "使えます"})]}) : null]})
            }
        }

        class ou extends r.Component {
            render() {
                return (0, o.jsxs)(Vh, {
                    narrowPaddingBottom: this.props.narrowPaddingBottom,
                    children: [(0, o.jsx)(nu, {
                        titleText: this.props.titleText,
                        hasPayPay: this.props.hasPayPay
                    }), this.props.linkText && this.props.linkURL && this.props.dataClParams ? (0, o.jsx)(Jh, {
                        linkText: this.props.linkText,
                        linkURL: this.props.linkURL,
                        dataClParams: this.props.dataClParams,
                        linkTargetBlank: this.props.linkTargetBlank
                    }) : null]
                })
            }
        }

        ou.defaultProps = {linkTargetBlank: !1, narrowPaddingBottom: !1};
        const iu = (0, a.iv)(["display:flex;justify-content:space-between;margin:12px 12px 0;font-size:", ";", ""], se.px12, (({
                                                                                                                                   hasTitle: e,
                                                                                                                                   theme: t
                                                                                                                               }) => e ? (0, a.iv)(["position:relative;padding-bottom:8px;border-bottom:1px solid ", ";&:first-of-type{margin-top:0;}"], t.news.palette.bor_lv1_pc) : "")),
            su = (0, a.iv)(["display:flex;"]),
            ru = (0, a.iv)(["font-weight:bold;color:", ";"], (e => e.theme.news.palette.text_base_common)),
            au = (0, a.iv)(["display:flex;"]),
            lu = (0, a.iv)(["& + &{position:relative;padding-left:17px;&::before{position:absolute;top:50%;left:8px;display:block;width:1px;height:12px;content:'';background-color:", ";transform:translateY(-50%);}}"], (e => e.theme.news.palette.bor_lv2_pc)),
            cu = (0, a.iv)(["padding:12px;border-bottom:1px solid ", ";&:last-child{padding-bottom:0;margin-bottom:12px;border-bottom:0;}"], (e => e.theme.news.palette.bor_lv1_pc)),
            du = (0, a.iv)(["display:flex;flex-wrap:wrap;margin-left:-20px;font-size:", ";"], se.px14),
            pu = (0, a.iv)(["margin-left:20px;line-height:1.5;"]),
            mu = a.ZP.li.withConfig({componentId: "sc-wrk62g-0"})(["", ""], pu),
            hu = a.ZP.a.withConfig({componentId: "sc-wrk62g-1"})(["", ""], Zr);

        class uu extends r.Component {
            render() {
                return (0, o.jsx)(mu, {
                    children: (0, o.jsx)(hu, {
                        href: this.props.url,
                        "data-cl-params": this.props.dataClParams,
                        children: `${this.props.teamHome} vs. ${this.props.teamVisitor}`
                    })
                })
            }
        }

        const gu = a.ZP.li.withConfig({componentId: "sc-133cmag-0"})(["", ""], pu),
            xu = a.ZP.a.withConfig({componentId: "sc-133cmag-1"})(["", ""], Zr);

        class _u extends r.Component {
            render() {
                return (0, o.jsx)(gu, {
                    children: (0, o.jsx)(xu, {
                        href: this.props.url,
                        "data-cl-params": this.props.dataClParams,
                        children: this.props.name
                    })
                })
            }
        }

        var fu = Object.defineProperty, wu = Object.defineProperties, bu = Object.getOwnPropertyDescriptors,
            vu = Object.getOwnPropertySymbols, yu = Object.prototype.hasOwnProperty,
            ju = Object.prototype.propertyIsEnumerable,
            Iu = (e, t, n) => t in e ? fu(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Cu = (e, t) => {
                for (var n in t || (t = {})) yu.call(t, n) && Iu(e, n, t[n]);
                if (vu) for (var n of vu(t)) ju.call(t, n) && Iu(e, n, t[n]);
                return e
            }, Pu = (e, t) => wu(e, bu(t));
        const ku = a.ZP.div.withConfig({componentId: "sc-1yfye3h-0"})(["", ""], iu),
            Su = a.ZP.div.withConfig({componentId: "sc-1yfye3h-1"})(["", ""], su),
            Tu = a.ZP.div.withConfig({componentId: "sc-1yfye3h-2"})(["", ""], ru),
            Ou = a.ZP.div.withConfig({componentId: "sc-1yfye3h-3"})(["margin-left:8px;color:", ";"], (e => e.theme.news.palette.text_sub_lv2_common)),
            Du = a.ZP.ul.withConfig({componentId: "sc-1yfye3h-4"})(["", ""], au),
            Eu = a.ZP.li.withConfig({componentId: "sc-1yfye3h-5"})(["", ""], lu),
            Lu = a.ZP.a.withConfig({componentId: "sc-1yfye3h-6"})(["", ""], Zr),
            Zu = a.ZP.div.withConfig({componentId: "sc-1yfye3h-7"})(["", ""], cu),
            zu = a.ZP.ul.withConfig({componentId: "sc-1yfye3h-8"})(["", ""], du);

        class $u extends r.Component {
            render() {
                if (!this.props.npb.isShow && !this.props.mlb.isShow) return null;
                const e = this.props.npb.isShow ? (0, o.jsxs)(ku, {
                    hasTitle: this.props.hasTitle,
                    children: [(0, o.jsxs)(Su, {children: [(0, o.jsx)(Tu, {children: "スポーツナビ プロ野球 試合結果"}), (0, o.jsx)(Ou, {children: this.props.npb.date || ""})]}), (0, o.jsxs)(Du, {
                        children: [(0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/npb/",
                                "data-cl-params": "_cl_vmodule:npb;_cl_link:ysports;",
                                children: "プロ野球トップ"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/npb/schedule/",
                                "data-cl-params": "_cl_vmodule:npb;_cl_link:sche;",
                                children: "日程・結果"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/npb/standings/",
                                "data-cl-params": "_cl_vmodule:npb;_cl_link:stdngs;",
                                children: "順位表"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/npb/stats/",
                                "data-cl-params": "_cl_vmodule:npb;_cl_link:stats;",
                                children: "個人成績"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/npb/teams/",
                                "data-cl-params": "_cl_vmodule:npb;_cl_link:teams;",
                                children: "チーム"
                            })
                        })]
                    })]
                }) : null, t = this.props.npb.isShow ? (0, o.jsx)(Zu, {
                    children: (0, o.jsx)(zu, {
                        children: this.props.npb.games ? this.props.npb.games.map(((e, t) => (0, r.createElement)(uu, Pu(Cu({}, e), {
                            key: e.url,
                            dataClParams: `_cl_vmodule:npb;_cl_link:game;_cl_position:${t + 1};`
                        })))) : null
                    })
                }) : null, n = this.props.mlb.isShow ? (0, o.jsxs)(ku, {
                    hasTitle: this.props.hasTitle,
                    children: [(0, o.jsxs)(Su, {children: [(0, o.jsx)(Tu, {children: "スポーツナビ MLB 日本人選手出場試合"}), (0, o.jsx)(Ou, {children: this.props.mlb.date || ""})]}), (0, o.jsxs)(Du, {
                        children: [(0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/mlb/",
                                "data-cl-params": "_cl_vmodule:mlb;_cl_link:ysports;",
                                children: "MLBトップ"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/mlb/schedule/",
                                "data-cl-params": "_cl_vmodule:mlb;_cl_link:sche;",
                                children: "日程・結果"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/mlb/standings/",
                                "data-cl-params": "_cl_vmodule:mlb;_cl_link:stdngs;",
                                children: "順位表"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/mlb/stats/",
                                "data-cl-params": "_cl_vmodule:mlb;_cl_link:stats;",
                                children: "個人成績"
                            })
                        }), (0, o.jsx)(Eu, {
                            children: (0, o.jsx)(Lu, {
                                href: "https://baseball.yahoo.co.jp/mlb/teams/",
                                "data-cl-params": "_cl_vmodule:mlb;_cl_link:teams;",
                                children: "チーム"
                            })
                        })]
                    })]
                }) : null, i = this.props.mlb.isShow ? (0, o.jsx)(Zu, {
                    children: (0, o.jsx)(zu, {
                        children: this.props.mlb.players ? this.props.mlb.players.map(((e, t) => (0, r.createElement)(_u, Pu(Cu({}, e), {
                            key: `${e.url}#${t}`,
                            dataClParams: `_cl_vmodule:mlb;_cl_link:player;_cl_position:${t + 1};`
                        })))) : null
                    })
                }) : null;
                return (0, o.jsxs)(r.Fragment, {
                    children: [this.props.hasTitle ? (0, o.jsx)(ou, {
                        titleText: "野球情報",
                        hasPayPay: !1
                    }) : "", e, t, n, i]
                })
            }
        }

        const Au = a.ZP.section.withConfig({componentId: "sc-1ve9xnr-0"})(["border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            Ru = e => e.npb.isShow || e.mlb.isShow ? (0, o.jsx)(Au, {
                children: (0, o.jsx)($u, {
                    npb: e.npb,
                    mlb: e.mlb,
                    hasTitle: e.hasTitle
                })
            }) : null, Fu = () => {
                const e = lr((({articleDetail: e}) => e.flg.hasBaseball)), t = lr((({articleDetail: e}) => e.flg.hasMLB)),
                    n = lr((({baseballNpb: e}) => e)), i = lr((({baseballMlb: e}) => e)),
                    s = {isShow: n.isShow && e, games: n.games, date: n.date},
                    r = {isShow: i.isShow && t, players: i.players, date: i.date};
                return (0, o.jsx)(Ru, {npb: s, mlb: r, hasTitle: !0})
            },
            Uu = a.ZP.div.withConfig({componentId: "sc-1unlhv-0"})(["display:flex;align-items:center;& + &{margin-top:8px;}"]),
            Bu = a.ZP.div.withConfig({componentId: "sc-1unlhv-1"})(["& + &{margin-left:8px;}"]),
            Nu = a.ZP.span.withConfig({componentId: "sc-1unlhv-2"})(["display:block;width:70px;padding:3px 0;font-size:", ";font-weight:bold;color:", ";text-align:center;background:#555;border-radius:", ";"], se.px14, (e => e.theme.news.palette.text_white_common), $),
            Mu = a.ZP.p.withConfig({componentId: "sc-1unlhv-3"})(["font-size:", ";"], se.px12),
            Vu = a.ZP.a.withConfig({componentId: "sc-1unlhv-4"})(["", " font-size:", ";"], Zr, se.px16);

        class Wu extends r.Component {
            render() {
                const e = this.props.grade || "重賞";
                return (0, o.jsxs)(Uu, {
                    children: [(0, o.jsx)(Bu, {children: (0, o.jsx)(Nu, {children: e})}), (0, o.jsxs)(Bu, {
                        children: [(0, o.jsx)(Mu, {children: `${this.props.date} ${this.props.raceNum}`}), (0, o.jsxs)(Vu, {
                            href: this.props.url,
                            "data-cl-params": this.props.dataClParams,
                            children: [this.props.raceTitle, "【", this.props.status, "】"]
                        })]
                    })]
                })
            }
        }

        var Hu = Object.defineProperty, qu = Object.defineProperties, Yu = Object.getOwnPropertyDescriptors,
            Ju = Object.getOwnPropertySymbols, Gu = Object.prototype.hasOwnProperty,
            Xu = Object.prototype.propertyIsEnumerable,
            Qu = (e, t, n) => t in e ? Hu(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Ku = a.ZP.div.withConfig({componentId: "sc-17s6pma-0"})(["", ""], iu),
            eg = a.ZP.div.withConfig({componentId: "sc-17s6pma-1"})(["", ""], su),
            tg = a.ZP.div.withConfig({componentId: "sc-17s6pma-2"})(["", ""], ru),
            ng = a.ZP.ul.withConfig({componentId: "sc-17s6pma-3"})(["", ""], au),
            og = a.ZP.li.withConfig({componentId: "sc-17s6pma-4"})(["", ""], lu),
            ig = a.ZP.a.withConfig({componentId: "sc-17s6pma-5"})(["", ""], Zr),
            sg = a.ZP.div.withConfig({componentId: "sc-17s6pma-6"})(["", ""], cu);

        class rg extends r.Component {
            render() {
                if (!this.props.gradePickup.isShow) return null;
                const e = (0, o.jsxs)(Ku, {
                    hasTitle: this.props.hasTitle,
                    children: [(0, o.jsx)(eg, {children: (0, o.jsx)(tg, {children: "スポーツナビ 重賞ピックアップ"})}), (0, o.jsxs)(ng, {
                        children: [(0, o.jsx)(og, {
                            children: (0, o.jsx)(ig, {
                                href: "https://sports.yahoo.co.jp/keiba/",
                                "data-cl-params": "_cl_vmodule:hrace;_cl_link:ysports;",
                                children: "競馬トップ"
                            })
                        }), (0, o.jsx)(og, {
                            children: (0, o.jsx)(ig, {
                                href: "https://sports.yahoo.co.jp/keiba/schedule/monthly/",
                                "data-cl-params": "_cl_vmodule:hrace;_cl_link:sche;",
                                children: "日程・結果"
                            })
                        })]
                    })]
                }), t = (0, o.jsx)(sg, {
                    children: this.props.gradePickup.races ? this.props.gradePickup.races.map(((e, t) => {
                        return (0, r.createElement)(Wu, (n = ((e, t) => {
                            for (var n in t || (t = {})) Gu.call(t, n) && Qu(e, n, t[n]);
                            if (Ju) for (var n of Ju(t)) Xu.call(t, n) && Qu(e, n, t[n]);
                            return e
                        })({}, e), o = {
                            key: e.url,
                            dataClParams: `_cl_vmodule:hrace;_cl_link:race;_cl_position:${t + 1};`
                        }, qu(n, Yu(o))));
                        var n, o
                    })) : null
                });
                return (0, o.jsxs)(r.Fragment, {
                    children: [this.props.hasTitle ? (0, o.jsx)(ou, {
                        titleText: "競馬情報",
                        hasPayPay: !1
                    }) : "", e, t]
                })
            }
        }

        const ag = a.ZP.section.withConfig({componentId: "sc-1l7vizl-0"})(["border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            lg = e => e.gradePickup.isShow ? (0, o.jsx)(ag, {
                children: (0, o.jsx)(rg, {
                    gradePickup: e.gradePickup,
                    hasTitle: e.hasTitle
                })
            }) : null, cg = () => {
                const e = lr((({horseRacing: e, articleDetail: t}) => e.isShow && t.flg.hasGradePickup)),
                    t = lr((({horseRacing: e}) => e.races)), n = {isShow: e, races: t};
                return (0, o.jsx)(lg, {gradePickup: n, hasTitle: !0})
            }, dg = e => (0, o.jsx)(jr, {
                isShow: e.isShow,
                variant: "information",
                title: e.title || "【関連情報】",
                text: e.text,
                linkURL: e.linkURL,
                linkText: e.linkText
            }), pg = () => {
                const e = lr((e => e.additionalStatement));
                return (0, o.jsx)(dg, {isShow: e.isShow, text: e.text, linkURL: e.linkURL, linkText: e.linkText})
            },
            mg = a.ZP.footer.withConfig({componentId: "sc-17obzcp-0"})(["margin:0 16px 16px;font-size:", ";color:", ";text-align:right;"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            hg = a.ZP.time.withConfig({componentId: "sc-17obzcp-1"})(["display:inline-block;margin-left:4px;"]),
            ug = a.ZP.a.withConfig({componentId: "sc-17obzcp-2"})(["display:inline-block;margin-top:4px;font-weight:bold;"]),
            gg = e => (0, o.jsxs)(mg, {
                children: [(0, o.jsxs)("div", {children: [(0, o.jsx)("span", {children: "最終更新:"}), (0, o.jsxs)(hg, {children: [e.updateDate.date, " ", e.updateDate.time]})]}), (0, o.jsx)(ug, {
                    href: `/media/${e.media.mediaId}`,
                    "data-cl-params": "_cl_vmodule:cp_data;_cl_link:cp_name;",
                    children: e.media.mediaName
                })]
            }),
            xg = e => `service:news;apptype:web;opttype:${e.device};content_id:${e.contentId};id_type:shannon_article` + (e.mtestId ? `;mtestid:${e.mtestId}` : "");

        class _g extends r.Component {
            render() {
                return this.props.children || null
            }
        }

        class fg extends r.Component {
            render() {
                const e = this.filterChildrenByBucket("default"), t = this.filterChildrenByBucket(this.props.bucketId);
                if (!(null == e ? void 0 : e.length)) throw new Error("can not find default bucket Element");
                return t && t.length > 0 ? (0, o.jsx)(r.Fragment, {children: t}) : (0, o.jsx)(r.Fragment, {children: e})
            }

            isAbTestElement(e) {
                return (0, r.isValidElement)(e) && e.type === _g
            }

            filterChildrenByBucket(e) {
                var t;
                if (null != e) return null == (t = r.Children.map(this.props.children, (t => {
                    if (this.isAbTestElement(t) && t.props.buckets.includes(e)) return t
                }))) ? void 0 : t.filter((e => !!e))
            }
        }

        const wg = (0, i.$j)(((e, t) => {
            const n = e.userData.abTestBuckets;
            if (!n) return {bucketId: void 0};
            const o = null == n ? void 0 : n.find((e => e.experimentId === t.experimentId));
            return {bucketId: null == o ? void 0 : o.bucket}
        }))(fg), bg = "YAHOO.JP.News.Sns.Share", vg = 1, yg = e => {
            const [t, n] = (0, r.useState)(!1);
            return {
                saveShareDateTime: () => {
                    const t = {datetime: (new Date).getTime(), page: e}, n = dn.X.get(bg, vg),
                        o = n ? [t, ...n].slice(0, 150) : [t];
                    dn.X.set(bg, vg, o)
                }, checkXShareLog: () => {
                    const e = dn.X.get(bg, vg);
                    e && (null == e ? void 0 : e.some((e => (e => {
                        const t = new Date, n = new Date(t);
                        return n.setDate(t.getDate() - 21), e > n.getTime()
                    })(e.datetime)))) && n(!0)
                }, isSharedWithin21Days: t
            }
        };
        var jg = n(6027), Ig = n(31981);
        const Cg = a.ZP.div.withConfig({componentId: "sc-11egkwp-0"})(["position:relative;flex:1;min-height:56px;text-align:left;"]),
            Pg = a.ZP.a.withConfig({componentId: "sc-11egkwp-1"})(["position:absolute;bottom:0;display:inline-block;display:flex;align-items:center;min-height:29px;font-size:", ";color:", ";&:hover{color:", ";}"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common), (e => e.theme.news.palette.text_sub_lv1_common)),
            kg = a.ZP.span.withConfig({componentId: "sc-11egkwp-2"})(["padding-right:2px;font-size:0;"]),
            Sg = a.ZP.span.withConfig({componentId: "sc-11egkwp-3"})(["line-height:1;"]),
            Tg = ({link: e}) => (0, o.jsx)(Cg, {
                children: (0, o.jsxs)(Pg, {
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-cl-params": "_cl_vmodule:request;_cl_link:article;",
                    children: [(0, o.jsx)(kg, {children: (0, o.jsx)(Ig.h, {size: 16})}), (0, o.jsx)(Sg, {children: "記事に関する報告"})]
                })
            }), Og = e => e.slice(0, 255).replace(/%/g, "％").replace(/,/g, " "), Dg = () => {
                const e = lr((({articleDetail: e}) => Og(e.newsLink))), t = lr((({articleDetail: e}) => Og(e.headline))),
                    n = lr((({articleDetail: e}) => Og(e.media.mediaName))),
                    i = `id=${encodeURIComponent(e)},${encodeURIComponent(t)},${encodeURIComponent(n)}`;
                return (0, o.jsx)(Tg, {link: `https://support.yahoo-net.jp/voc/s/news-article-report?${i}`})
            },
            Eg = (0, a.F4)(["0%{display:none;opacity:", ";}1%{display:block;opacity:", ";}100%{display:block;opacity:", ";}"], Y, Y, q),
            Lg = (0, a.F4)(["0%,100%{transform:scale(1);}20%{transform:scale(1.2);}30%{transform:scale(1.2);}45%{transform:scale(0.9);}80%{transform:scale(1);}"]),
            Zg = a.ZP.svg.withConfig({componentId: "sc-vdobrn-0"})(["animation:", ";", ""], (({
                                                                                                  showButtonAnimation: e,
                                                                                                  isButtonPressed: t
                                                                                              }) => e && t ? (0, a.iv)(["", " 0.8s"], Lg) : ""), (({isButtonPressed: e}) => e ? (0, a.iv)([".fill{fill:", ";}"], (e => e.theme.news.palette.icon_ReactionButton_pressed)) : (0, a.iv)([".fill{fill:", ";}"], (e => e.theme.news.palette.icon_ReactionButton)))),
            zg = e => {
                const {showButtonAnimation: t, isButtonPressed: n} = e;
                return (0, o.jsx)(Zg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 26 38",
                    showButtonAnimation: t,
                    isButtonPressed: n,
                    width: "28px",
                    height: "28px",
                    children: (0, o.jsx)("g", {
                        id: "lightbulb",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            id: "Riff---Icon-/-05-XLarge",
                            transform: "translate(-11.000000, -5.000000)",
                            className: "fill",
                            children: (0, o.jsx)("path", {d: "M29.9111,35 C29.9681,35.372 30.0001,35.752 30.0001,36.143 C30.0001,39.93 27.3141,43 24.0001,43 C20.6871,43 18.0001,39.93 18.0001,36.143 C18.0001,35.84975 18.0181,35.5626875 18.0511469,35.2805469 L18.0891,35 L29.9111,35 Z M24,5 C31.18,5 37,10.82 37,18 C37,22.1152419 32.2783559,29.9464178 31.2121782,31.6622903 L31,32 L17,32 L16.4127085,31.0500923 L15.7647859,29.9574858 C14.0084664,26.9374506 11,21.2848938 11,18 C11,10.82 16.821,5 24,5 Z M24,9 C19.037,9 15,13.037 15,18 C15,19.7693824 16.9189386,23.9795943 19.0470104,27.6663636 L19.241,28 L28.759,28 L29.145827,27.329853 C31.1955986,23.726782 33,19.7167059 33,18 C33,13.037 28.963,9 24,9 Z"})
                        })
                    })
                })
            }, $g = e => {
                const {showButtonAnimation: t, isButtonPressed: n} = e;
                return (0, o.jsx)(Zg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 5 32",
                    showButtonAnimation: t,
                    isButtonPressed: n,
                    width: "28px",
                    height: "28px",
                    children: (0, o.jsx)("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            transform: "translate(-22.000000, -8.000000)",
                            className: "fill",
                            children: (0, o.jsx)("g", {
                                id: "exclamation",
                                transform: "translate(22.000000, 8.000000)",
                                children: (0, o.jsx)("path", {
                                    d: "M2.5,27 C3.88071187,27 5,28.1192881 5,29.5 C5,30.8807119 3.88071187,32 2.5,32 C1.11928813,32 0,30.8807119 0,29.5 C0,28.1192881 1.11928813,27 2.5,27 Z M2.5,0 C3.8254834,0 4.91003867,1.03153594 4.99468232,2.33562431 L5,2.5 L5,20.5 C5,21.8807119 3.88071187,23 2.5,23 C1.1745166,23 0.089961328,21.9684641 0.00531767968,20.6643757 L0,20.5 L0,2.5 L0.00531767968,2.33562431 C0.089961328,1.03153594 1.1745166,0 2.5,0 Z",
                                    id: "Combined-Shape"
                                })
                            })
                        })
                    })
                })
            }, Ag = e => {
                const {showButtonAnimation: t, isButtonPressed: n} = e;
                return (0, o.jsx)(Zg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 40 32",
                    showButtonAnimation: t,
                    isButtonPressed: n,
                    width: "30px",
                    height: "30px",
                    children: (0, o.jsx)("g", {
                        id: "study",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, o.jsx)("g", {
                            transform: "translate(-4.000000, -8.000000)", className: "fill", children: (0, o.jsx)("g", {
                                id: "informative",
                                transform: "translate(4.000000, 8.000000)",
                                children: (0, o.jsx)("path", {
                                    d: "M21.8253457,0.446681998 L38.9255951,9.30297007 C39.9016473,9.80847144 40.2823012,11.0079606 39.7758093,11.982104 C39.5866321,12.3459512 39.2893428,12.6425065 38.9246854,12.8311264 L22.2757503,21.4428246 C20.8384195,22.1862872 19.128611,22.1856931 17.6917992,21.441232 L3.999,14.347 L3.999,21.197 L5.34200439,30.8624316 C5.41798131,31.4094654 5.03611427,31.9145154 4.48908049,31.9904923 C4.44349777,31.9968232 4.39753239,32 4.35151212,32 L1.64848788,32 C1.09620313,32 0.64848788,31.5522847 0.64848788,31 C0.64848788,30.9539797 0.651664674,30.9080144 0.657995607,30.8624316 L1.999,21.2 L1.999,13.31 L1.07408375,12.8310276 C0.098123515,12.3253494 -0.282312127,11.1257913 0.224356959,10.1517397 C0.413242283,9.78861497 0.709828466,9.49253017 1.07361452,9.30391781 L18.1554269,0.447500839 C19.3056916,-0.1488776 20.6748139,-0.149183081 21.8253457,0.446681998 Z M33.0050793,18.88 L33.0050793,28.4979485 C33.0050753,29.3999046 32.4013606,30.1902568 31.5311682,30.4275118 C27.6861706,31.4758373 23.8424479,32 20,32 C16.1578177,32 12.3156917,31.4759097 8.47362215,30.4277291 C7.60356678,30.1903817 7,29.4000935 7,28.4982453 L7,18.88 L18.2007924,24.5309882 C19.333934,25.1026772 20.6711453,25.1026772 21.8042869,24.5309882 L33.0050793,18.88 Z",
                                    id: "Combined-Shape"
                                })
                            })
                        })
                    })
                })
            },
            Rg = a.ZP.div.withConfig({componentId: "sc-5gkwpc-0"})(["position:relative;display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;padding:0 12px;margin:", ";"], (({isRemovedRelatedLinks: e}) => e ? " 16px 0 20px" : "16px 0 4px")),
            Fg = (0, a.iv)(["position:relative;display:flex;align-items:center;margin-right:12px;font-size:", ";border-radius:", ";&::before{position:absolute;top:50%;left:100%;content:'';border:5px solid transparent;transform:translateY(-50%);}"], se.px12, A),
            Ug = a.ZP.div.withConfig({componentId: "sc-5gkwpc-1"})(["", "  display:", ";padding:6px 8px;color:", ";text-align:left;background-color:", ";animation:", ";&::before{position:absolute;top:50%;left:100%;content:'';border:5px solid transparent;border-left:8px solid ", ";transform:translateY(-50%);}"], Fg, (({isButtonPressed: e}) => e ? "flex" : "none"), (e => e.theme.news.palette.text_white_common), (e => e.theme.news.palette.icon_ReactionButton), (({isButtonPressed: e}) => e ? (0, a.iv)(["", " 0.4s ease;"], Eg) : ""), (e => e.theme.news.palette.icon_ReactionButton)),
            Bg = a.ZP.ul.withConfig({componentId: "sc-5gkwpc-2"})(["display:flex;align-items:center;order:3;"]),
            Ng = a.ZP.span.withConfig({componentId: "sc-5gkwpc-3"})(["margin-top:", ";font-size:", ";color:", ";"], (({positionAdjust: e}) => e ? "2px" : " 0"), se.px12, (({isButtonPressed: e}) => e ? e => e.theme.news.palette.icon_ReactionButton_pressed : e => e.theme.news.palette.icon_ReactionButton)),
            Mg = a.ZP.li.withConfig({componentId: "sc-5gkwpc-4"})(["position:relative;&:not(:first-child){margin-left:8px;}"]),
            Vg = a.ZP.button.withConfig({componentId: "sc-5gkwpc-5"})(["display:flex;flex-direction:column;align-items:center;padding:4px;&:hover{background:", ";border-radius:", ";}"], (e => e.theme.news.palette.link_hover_bg_pc), A),
            Wg = a.ZP.div.withConfig({componentId: "sc-5gkwpc-6"})(["position:absolute;top:-14px;right:", ";z-index:", ";min-width:5em;font-size:0;pointer-events:none;"], (({positionAdjust: e}) => e ? "-4px" : "4px"), E),
            Hg = a.ZP.span.withConfig({componentId: "sc-5gkwpc-7"})(["display:inline-block;padding:0 6px;font-size:", ";line-height:1.6;color:", ";text-align:center;white-space:nowrap;background:", ";border-bottom:1px solid #fff;border-radius:", ";"], se.px11, (e => e.theme.news.palette.text_white_common), (({
                                                                                                                                                                                                                                                                                                                          isButtonPressed: e,
                                                                                                                                                                                                                                                                                                                          theme: t
                                                                                                                                                                                                                                                                                                                      }) => e ? t.news.palette.bg_ReactionButtonTip_pressed_common : t.news.palette.bg_ReactionButtonTip_common), R),
            qg = a.ZP.button.withConfig({componentId: "sc-5gkwpc-8"})(["", "  order:1;max-width:180px;padding:6px 16px 6px 8px;color:", ";text-align:left;background-color:", ";&::before{border-left:8px solid ", ";}&:hover{color:", ";text-decoration:none;}"], Fg, (e => e.theme.news.palette.text_white_common), (e => e.theme.news.palette.bg_ReactionButtonTutorial_common), (e => e.theme.news.palette.bg_ReactionButtonTutorial_common), (e => e.theme.news.palette.text_white_common)),
            Yg = a.ZP.span.withConfig({componentId: "sc-5gkwpc-9"})(["position:absolute;top:2px;right:2px;display:block;"]),
            Jg = e => {
                var t, n, i, s, a, l, c, d, p, m, h, u, g, x, _, f, w, b, v, y;
                const [j, I] = (0, r.useState)(!1), C = (0, o.jsxs)(Ug, {
                    isButtonPressed: j,
                    children: ["ありがとうございます。", (0, o.jsx)("br", {}), "リアクションは媒体社の支援につながります。"]
                });
                if ((0, r.useEffect)((() => {
                    e.reaction && !e.reaction.isReflectedLocalStorage && e.reflectLocalStorage(e.reaction.contentId)
                }), []), (0, r.useEffect)((() => {
                    var e;
                    window.customLogger && !(null == (e = document.getElementById("articleReactionButton1")) ? void 0 : e.getAttribute("data-cl_cl_index")) && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
                }), [e]), !e.reaction) return null;
                if (e.reaction && !e.reaction.isReflectedLocalStorage) return (0, o.jsx)("div", {style: {height: "56px"}});
                const P = t => {
                        var n;
                        return void 0 === t || (null == (n = e.reaction) ? void 0 : n.isCountGetError) ? "" : t < 1e5 ? `${t.toLocaleString("ja-JP").split(".")[0]}` : "99,999+"
                    }, k = {info: 1, clear: 2, newpov: 3}, S = t => {
                        var n, o, i, s;
                        if (window.customLogger && e.reaction) {
                            if (e.reaction.isShownTutorial && e.hiddenReactionTutorial(), window.customLogger) {
                                e.reaction.selectedUiPattern && (window.customLogger.logEvent("ccl_reac", {
                                    shcid: null == (n = e.reaction) ? void 0 : n.contentId,
                                    uiid: null == (o = e.reaction) ? void 0 : o.selectedUiPattern
                                }), I(!1));
                                const r = k[t],
                                    a = null != (s = null == (i = document.getElementById(`articleReactionButton${r}`)) ? void 0 : i.getAttribute("data-cl_cl_index")) ? s : "-1";
                                e.addReaction(t, e.reaction.selectedUiPattern), window.customLogger.logClick("wrapper", t, a, {
                                    _cl_position: 1,
                                    _cl_vmodule: "like"
                                }), window.customLogger.logEvent("add_reac", {shcid: e.reaction.contentId, uiid: t})
                            }
                            setTimeout((() => {
                                I(!0)
                            }), 50)
                        }
                    }, T = t => {
                        var n, o;
                        if (window.customLogger && e.reaction) {
                            if (window.customLogger) {
                                const i = k[t],
                                    s = null != (o = null == (n = document.getElementById(`articleReactionButton${i}`)) ? void 0 : n.getAttribute("data-cl_cl_index")) ? o : "-1";
                                e.removeReaction(t), window.customLogger.logClick("wrapper", t, s, {
                                    _cl_position: 1,
                                    _cl_vmodule: "like_ccl"
                                }), window.customLogger.logEvent("ccl_reac", {shcid: e.reaction.contentId, uiid: t})
                            }
                            I(!1)
                        }
                    }, O = (0, o.jsxs)(Bg, {
                        children: [(0, o.jsxs)(Mg, {
                            children: [(0, o.jsx)(Wg, {
                                positionAdjust: !0,
                                children: (0, o.jsx)(Hg, {
                                    isButtonPressed: "info" === (null == (t = e.reaction) ? void 0 : t.selectedUiPattern),
                                    children: P(null == (i = null == (n = e.reaction) ? void 0 : n.counts) ? void 0 : i.info)
                                })
                            }), (0, o.jsxs)(Vg, {
                                id: "articleReactionButton1",
                                className: "cl-noclick-log",
                                "data-cl-params": "info" === (null == (s = e.reaction) ? void 0 : s.selectedUiPattern) ? "_cl_vmodule:like_ccl;_cl_link:info;_cl_position:1;" : "_cl_vmodule:like;_cl_link:info;_cl_position:1;",
                                onClick: () => {
                                    var t;
                                    "info" === (null == (t = e.reaction) ? void 0 : t.selectedUiPattern) ? T("info") : S("info")
                                },
                                children: [(0, o.jsx)(Ag, {
                                    isButtonPressed: "info" === (null == (a = e.reaction) ? void 0 : a.selectedUiPattern),
                                    showButtonAnimation: j
                                }), (0, o.jsx)(Ng, {
                                    isButtonPressed: "info" === (null == (l = e.reaction) ? void 0 : l.selectedUiPattern),
                                    positionAdjust: !1,
                                    children: "学びがある"
                                })]
                            })]
                        }), (0, o.jsxs)(Mg, {
                            children: [(0, o.jsx)(Wg, {
                                positionAdjust: !1,
                                children: (0, o.jsx)(Hg, {
                                    isButtonPressed: "clear" === (null == (c = e.reaction) ? void 0 : c.selectedUiPattern),
                                    children: P(null == (p = null == (d = e.reaction) ? void 0 : d.counts) ? void 0 : p.clear)
                                })
                            }), (0, o.jsxs)(Vg, {
                                id: "articleReactionButton2",
                                className: "cl-noclick-log",
                                "data-cl-params": "clear" === (null == (m = e.reaction) ? void 0 : m.selectedUiPattern) ? "_cl_vmodule:like_ccl;_cl_link:clear;_cl_position:1;" : "_cl_vmodule:like;_cl_link:clear;_cl_position:1;",
                                onClick: () => {
                                    var t;
                                    "clear" === (null == (t = e.reaction) ? void 0 : t.selectedUiPattern) ? T("clear") : S("clear")
                                },
                                children: [(0, o.jsx)(zg, {
                                    isButtonPressed: "clear" === (null == (h = e.reaction) ? void 0 : h.selectedUiPattern),
                                    showButtonAnimation: j
                                }), (0, o.jsx)(Ng, {
                                    isButtonPressed: "clear" === (null == (u = e.reaction) ? void 0 : u.selectedUiPattern),
                                    positionAdjust: !0,
                                    children: "わかりやすい"
                                })]
                            })]
                        }), (0, o.jsxs)(Mg, {
                            children: [(0, o.jsx)(Wg, {
                                positionAdjust: !1,
                                children: (0, o.jsx)(Hg, {
                                    isButtonPressed: "newpov" === (null == (g = e.reaction) ? void 0 : g.selectedUiPattern),
                                    children: P(null == (_ = null == (x = e.reaction) ? void 0 : x.counts) ? void 0 : _.newpov)
                                })
                            }), (0, o.jsxs)(Vg, {
                                id: "articleReactionButton3",
                                className: "cl-noclick-log",
                                "data-cl-params": "newpov" === (null == (f = e.reaction) ? void 0 : f.selectedUiPattern) ? "_cl_vmodule:like_ccl;_cl_link:newpov;_cl_position:1;" : "_cl_vmodule:like;_cl_link:newpov;_cl_position:1;",
                                onClick: () => {
                                    var t;
                                    "newpov" === (null == (t = e.reaction) ? void 0 : t.selectedUiPattern) ? T("newpov") : S("newpov")
                                },
                                children: [(0, o.jsx)($g, {
                                    isButtonPressed: "newpov" === (null == (w = e.reaction) ? void 0 : w.selectedUiPattern),
                                    showButtonAnimation: j
                                }), (0, o.jsx)(Ng, {
                                    isButtonPressed: "newpov" === (null == (b = e.reaction) ? void 0 : b.selectedUiPattern),
                                    positionAdjust: !0,
                                    children: "新しい視点"
                                })]
                            })]
                        })]
                    }),
                    D = (null == (v = e.reaction) ? void 0 : v.isShownTutorial) && !(null == (y = e.reaction) ? void 0 : y.selectedUiPattern) ? (0, o.jsxs)(qg, {
                        "aria-label": "チュートリアルを閉じる",
                        onClick: () => {
                            e.hiddenReactionTutorial()
                        },
                        children: [(0, o.jsxs)("p", {children: ["この記事はいかがでしたか？", (0, o.jsx)("br", {}), "リアクションで支援しよう"]}), (0, o.jsx)(Yg, {children: (0, o.jsx)(jg.b, {size: 12})})]
                    }) : null;
                return (0, o.jsxs)(Rg, {
                    isRemovedRelatedLinks: e.isRemovedRelatedLinks,
                    children: [(0, o.jsx)(Dg, {}), D, O, C]
                })
            }, Gg = ({isRemovedRelatedLinks: e}) => {
                var t, n;
                const i = fn(), s = lr((({articleDetail: e}) => e.media.mediaId)),
                    r = lr((({articleDetail: e}) => e.contentId)), a = lr((({userData: e}) => e.abTestBuckets)),
                    l = lr((({userToken: e}) => null != e ? e : void 0)), c = lr((({articleReaction: e}) => e)), d = c ? {
                        selectedUiPattern: c.selectedUiPattern,
                        contentId: r,
                        isReflectedLocalStorage: null != (t = c.isReflectedLocalStorage) && t,
                        counts: c.articleReactions,
                        isCountGetError: c.isArticleReactionError,
                        isShownTutorial: null == (n = c.isShownArticleReactionTutorial) || n
                    } : void 0;
                return (0, o.jsx)(Jg, {
                    reaction: d, miffyTestIds: null != a ? a : [], reflectLocalStorage: e => {
                        i((e => ({type: wn, payload: {contentId: e}}))(e))
                    }, addReaction: (e, t) => {
                        i((({
                                contentId: e,
                                uiPattern: t,
                                device: n,
                                mediaId: o,
                                categoryId: i,
                                beforeSelectedUiPattern: s,
                                accessToken: r,
                                os: a,
                                appType: l
                            }) => ({
                            type: bn,
                            payload: {
                                contentId: e,
                                uiPattern: t,
                                device: n,
                                os: null != a ? a : "other",
                                appType: null != l ? l : "other",
                                mediaId: o,
                                categoryId: i,
                                beforeSelectedUiPattern: s,
                                accessToken: r
                            }
                        }))({
                            contentId: r,
                            uiPattern: e,
                            device: "pc",
                            mediaId: s,
                            categoryId: null == c ? void 0 : c.categoryId,
                            beforeSelectedUiPattern: t,
                            accessToken: l
                        }))
                    }, removeReaction: e => {
                        i((({
                                contentId: e,
                                uiPattern: t,
                                device: n,
                                mediaId: o,
                                categoryId: i,
                                accessToken: s,
                                os: r,
                                appType: a
                            }) => ({
                            type: vn,
                            payload: {
                                contentId: e,
                                uiPattern: t,
                                device: n,
                                os: null != r ? r : "other",
                                appType: null != a ? a : "other",
                                mediaId: o,
                                categoryId: i,
                                accessToken: s
                            }
                        }))({
                            contentId: r,
                            uiPattern: e,
                            device: "pc",
                            mediaId: s,
                            categoryId: null == c ? void 0 : c.categoryId,
                            accessToken: l
                        }))
                    }, hiddenReactionTutorial: () => {
                        i({type: yn})
                    }, isRemovedRelatedLinks: e
                })
            };
        var Xg = n(49257);
        const Qg = a.ZP.div.withConfig({componentId: "sc-1ygf76q-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;margin:16px 16px 32px;background-color:", ";border-radius:", ";"], (e => e.theme.news.palette.bg_lv2_common), A),
            Kg = (0, a.ZP)(Xg.i).withConfig({componentId: "sc-1ygf76q-1"})(["color:", ";vertical-align:bottom;"], (e => e.theme.news.palette.comment_default_common)),
            ex = a.ZP.span.withConfig({componentId: "sc-1ygf76q-2"})(["font-size:", ";font-weight:bold;"], se.px16),
            tx = a.ZP.div.withConfig({componentId: "sc-1ygf76q-3"})(["width:206px;margin-top:12px;"]),
            nx = a.ZP.div.withConfig({componentId: "sc-1ygf76q-4"})(["margin-top:12px;text-align:center;"]),
            ox = a.ZP.p.withConfig({componentId: "sc-1ygf76q-5"})(["font-size:", ";line-height:1.5;color:", ";"], se.px13, (e => e.theme.news.palette.text_sub_lv2_common)),
            ix = a.ZP.div.withConfig({componentId: "sc-1ygf76q-6"})(["width:400px;margin-top:12px;"]),
            sx = (0, a.ZP)(wr.v).withConfig({componentId: "sc-1ygf76q-7"})(["width:100%;"]),
            rx = e => e.isRecommended ? (0, o.jsxs)(Qg, {
                children: [(0, o.jsxs)("p", {children: [(0, o.jsx)(Kg, {size: 24}), (0, o.jsx)(ex, {children: "ありがとうございました"})]}), (0, o.jsx)(tx, {
                    children: (0, o.jsx)(Cc, {
                        text: "推薦を取り消す",
                        type: e.isFetching ? "disabled" : "simple",
                        size: "full",
                        isDisabled: e.isFetching,
                        useAnchorTag: !1,
                        onClick: () => {
                            e.cancel(), window.customLogger && window.customLogger.logClick("expertpick", "ccl", "", {
                                _cl_position: 0,
                                authr_id: `${e.expertId}`
                            })
                        }
                    })
                }), "cancelError" === e.errorStatus && (0, o.jsx)(ix, {
                    children: (0, o.jsx)(sx, {
                        variant: "warning",
                        children: (0, o.jsx)(br.g, {children: "記事の推薦の取り消しに失敗しました"})
                    })
                }), (0, o.jsxs)(nx, {children: [(0, o.jsx)(ox, {children: "・推薦は記事内でユーザーに表示されるとともに、トピックスの編集チームに共有されます"}), (0, o.jsx)(ox, {children: "・当社と協議し定めた執筆内容の範囲内の記事を、事前にご案内したガイドラインに沿いご推薦ください"})]})]
            }) : (0, o.jsxs)(Qg, {
                children: [(0, o.jsxs)("p", {children: [(0, o.jsx)(Kg, {size: 24}), (0, o.jsx)(ex, {children: "この記事を推薦しますか（記事内に表示されます）"})]}), (0, o.jsx)(tx, {
                    children: (0, o.jsx)(Cc, {
                        text: "専門家として推薦する",
                        size: "middle",
                        type: e.isFetching ? "disabled" : "normal",
                        isDisabled: e.isFetching,
                        useAnchorTag: !1,
                        onClick: () => {
                            e.recommend(), window.customLogger && window.customLogger.logClick("expertpick", "pick", "", {
                                _cl_position: 0,
                                authr_id: `${e.expertId}`
                            })
                        }
                    })
                }), "limitRecommend" === e.errorStatus && (0, o.jsx)(ix, {
                    children: (0, o.jsxs)(sx, {
                        variant: "warning",
                        children: [(0, o.jsx)(br.g, {children: "推薦数が上限に達したため、推薦できません。"}), (0, o.jsx)(br.g, {children: "時間をおいてからお試しください"})]
                    })
                }), "recommendError" === e.errorStatus && (0, o.jsx)(ix, {
                    children: (0, o.jsx)(sx, {
                        variant: "warning",
                        children: (0, o.jsx)(br.g, {children: "記事の推薦に失敗しました"})
                    })
                }), (0, o.jsxs)(nx, {children: [(0, o.jsx)(ox, {children: "・推薦は記事内でユーザーに表示されるとともに、トピックスの編集チームに共有されます"}), (0, o.jsx)(ox, {children: "・当社と協議し定めた執筆内容の範囲内の記事を、事前にご案内したガイドラインに沿いご推薦ください"})]})]
            }), ax = () => {
                const e = to(), t = lr((({articleDetail: e}) => e.contentId)), n = lr((({articleDetail: e}) => e.headline)),
                    i = lr((({articleDetail: e}) => e.newsLink)), s = lr((({userToken: e}) => null != e ? e : void 0)),
                    r = lr((({articleReaction: e}) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.expertId) ? t : ""
                    })), a = lr((({articleExpertRecommend: e}) => null == e ? void 0 : e.errorStatus)),
                    l = lr((({articleExpertRecommend: e}) => {
                        var t, n;
                        return null != (n = null == (t = null == e ? void 0 : e.recommendedExpertIds) ? void 0 : t.includes(r)) && n
                    })), c = lr((({articleExpertRecommend: e}) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.isFetching) && t
                    }));
                return (0, o.jsx)(rx, {
                    recommend: () => {
                        e(oo(t, n, i, r, s))
                    }, cancel: () => {
                        e(io(t, r, s))
                    }, expertId: r, isRecommended: l, isFetching: c, errorStatus: a
                })
            };

        class lx {
            static convertCommaSeparated(e) {
                return e.toString() < "1000" ? e.toString() : this.replaceCommaSeparated(e)
            }

            static convertIncludeTaxStyle(e) {
                return `税込${this.convertCommaSeparated(e)}円`
            }

            static convertIncludeTaxPerMonthStyle(e) {
                return `税込${this.convertCommaSeparated(e)}円/月`
            }

            static convertJapanUnitAndCommaSeparated(e) {
                if (e < 1e3) return e.toString();
                if (e < 1e4) return this.convertCommaSeparated(e);
                const t = Math.floor(e / 1e4), n = Math.floor(e % 1e4);
                return `${t}万${n > 0 ? this.replaceCommaSeparated(n) : ""}`
            }

            static convertJapanUnitOrCommaSeparated(e) {
                if (e < 1e3) return e.toString();
                if (e < 1e4) return this.convertCommaSeparated(e);
                return `${Math.round(e / 1e4)}万`
            }

            static replaceCommaSeparated(e) {
                return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }
        }

        var cx = n(82116), dx = n(62495);
        const px = a.ZP.li.withConfig({componentId: "sc-qkog50-0"})(["display:flex;margin:0 4px;"]),
            mx = a.ZP.a.withConfig({componentId: "sc-qkog50-1"})(["position:relative;display:flex;align-items:center;justify-content:center;min-width:42px;padding:12px 4px;font-weight:bold;color:", ";background-color:", ";border:solid 1px ", ";border-radius:", ";&:hover{color:", ";text-decoration:none;background-color:", ";}"], (e => e.theme.news.palette.text_base_common), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.btn_simple_border_common), A, (e => e.theme.news.palette.text_base_common), (e => e.theme.news.palette.bg_hover_normal_pc)),
            hx = a.ZP.span.withConfig({componentId: "sc-qkog50-2"})(["position:relative;display:flex;align-items:center;justify-content:center;min-width:42px;padding:12px 4px;font-weight:bold;color:", ";background-color:", ";border:solid 1px ", ";border-radius:", ";"], (e => e.theme.news.palette.btn_current_text_common), (e => e.theme.news.palette.btn_current_bg_common), (e => e.theme.news.palette.btn_current_bg_common), A);

        class ux extends r.Component {
            render() {
                return (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsx)(px, {
                        children: this.props.isCurrent ? (0, o.jsx)(hx, {children: this.props.pageNumber}) : (0, o.jsx)(mx, {
                            href: this.props.url,
                            "data-cl-params": `_cl_vmodule:page;_cl_link:number;_cl_position:${this.props.pageNumber};`,
                            children: this.props.pageNumber
                        })
                    })
                })
            }
        }

        const gx = a.ZP.div.withConfig({componentId: "sc-brfqoi-0"})((({isNoBackground: e}) => (0, a.iv)(["padding:12px 8px;line-height:1.2;text-align:center;background-color:", ";border-top:1px ", " solid;border-bottom:1px ", " solid;", " &:last-child{border-bottom:0;}"], (e => e.theme.news.palette.bg_lv2_common), (e => e.theme.news.palette.bor_lv2_pc), (e => e.theme.news.palette.bor_lv2_pc), e && (0, a.iv)(["background-color:transparent;border:none;"])))),
            xx = a.ZP.div.withConfig({componentId: "sc-brfqoi-1"})(["margin:0 -4px;"]),
            _x = a.ZP.p.withConfig({componentId: "sc-brfqoi-2"})(["margin:8px 4px 0;font-size:", ";"], se.px14),
            fx = a.ZP.ul.withConfig({componentId: "sc-brfqoi-3"})(["display:flex;justify-content:center;font-size:", ";"], se.px15),
            wx = a.ZP.li.withConfig({componentId: "sc-brfqoi-4"})(["display:flex;margin:0 4px;"]),
            bx = (0, a.iv)(["position:relative;display:flex;align-items:center;justify-content:center;min-width:42px;padding:12px 4px;font-weight:bold;border:solid 1px ", ";border-radius:", ";"], (e => e.theme.news.palette.btn_simple_border_common), A),
            vx = a.ZP.a.withConfig({componentId: "sc-brfqoi-5"})(["", " color:", ";background-color:", ";&:hover{color:", ";text-decoration:none;background-color:", ";}"], bx, (e => e.theme.news.palette.text_base_common), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.text_base_common), (e => e.theme.news.palette.bg_hover_normal_pc)),
            yx = a.ZP.span.withConfig({componentId: "sc-brfqoi-6"})(["", " color:", ";background-color:", ";border-color:", ";"], bx, (e => e.theme.news.palette.btn_disabled_text_common), (e => e.theme.news.palette.btn_disabled_bg_common), (e => e.theme.news.palette.btn_disabled_bg_common));

        class jx extends r.Component {
            render() {
                const e = this.props.max, t = Math.ceil(e / 2), n = this.props.currentPage, i = this.props.lastPage,
                    s = n <= t ? 1 : n > i - t ? i - e + 1 >= 1 ? i - e + 1 : 1 : n - t + 1 >= 1 ? n - t + 1 : 1,
                    a = [...Array(i >= e ? e : i).keys()].map((e => e + s)), l = i > 0 ? a.map((e => (0, o.jsx)(ux, {
                        pageNumber: e,
                        url: this.props.hash ? `${this.props.url}${e}#${this.props.hash}` : `${this.props.url}${e}`,
                        isCurrent: e === +n
                    }, e))) : null, c = (0, o.jsxs)(yx, {children: [(0, o.jsx)(cx.Z, {size: 14}), "前へ"]}),
                    d = (0, o.jsxs)(vx, {
                        href: this.props.hash ? `${this.props.url}${+n - 1}#${this.props.hash}` : `${this.props.url}${+n - 1}`,
                        "data-cl-params": "_cl_vmodule:page;_cl_link:pre;",
                        children: [(0, o.jsx)(cx.Z, {size: 14}), "前へ"]
                    }), p = (0, o.jsxs)(yx, {children: ["次へ", (0, o.jsx)(dx.L, {size: 14})]}), m = (0, o.jsxs)(vx, {
                        href: this.props.hash ? `${this.props.url}${+n + 1}#${this.props.hash}` : `${this.props.url}${+n + 1}`,
                        "data-cl-params": "_cl_vmodule:page;_cl_link:next;",
                        children: ["次へ", (0, o.jsx)(dx.L, {size: 14})]
                    });
                return (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsx)(gx, {
                        isNoBackground: this.props.isNoBackground,
                        children: (0, o.jsxs)(xx, {children: [(0, o.jsxs)(fx, {children: [(0, o.jsx)(wx, {children: this.props.isPrev ? d : c}), l, (0, o.jsx)(wx, {children: this.props.isNext ? m : p})]}), (0, o.jsx)(_x, {children: this.props.children})]})
                    })
                })
            }
        }

        const Ix = a.ZP.div.withConfig({componentId: "sc-1g8xmax-0"})(["padding:0 16px;text-align:center;"]),
            Cx = a.ZP.a.withConfig({componentId: "sc-1g8xmax-1"})(["display:inline-block;font-size:", ";text-align:center;", ""], se.px14, Zr),
            Px = a.ZP.em.withConfig({componentId: "sc-1g8xmax-2"})(["margin:0 4px;font-weight:bold;"]),
            kx = a.ZP.span.withConfig({componentId: "sc-1g8xmax-3"})(["margin:0 4px;"]), Sx = e => {
                if ((0, r.useEffect)((() => {
                    e.maxPage > 1 && (null == window ? void 0 : window.ual) && window.ual("global", {
                        current_page: e.currentPage,
                        total_page: e.maxPage
                    })
                }), []), e.maxPage <= 1) return null;
                const t = `/articles/${e.contentId}?page=`, n = e.nextPageHead ? (0, o.jsx)(Ix, {
                    children: (0, o.jsx)(Cx, {
                        href: `${t}${+e.currentPage + 1}`,
                        "data-cl-params": "_cl_vmodule:detail;_cl_link:prgrph;",
                        children: `次ページは：${e.nextPageHead}`
                    })
                }) : null;
                return (0, o.jsxs)(r.Fragment, {
                    children: [n, (0, o.jsxs)(jx, {
                        max: 4,
                        isPrev: 1 !== e.currentPage,
                        isNext: e.currentPage !== e.maxPage,
                        currentPage: e.currentPage,
                        lastPage: e.maxPage,
                        url: t,
                        isNoBackground: !0,
                        children: [(0, o.jsx)(Px, {children: `${lx.convertCommaSeparated(e.currentPage)}`}), "/", (0, o.jsx)(kx, {children: `${lx.convertCommaSeparated(e.maxPage)}ページ`})]
                    })]
                })
            },
            Tx = a.ZP.p.withConfig({componentId: "sc-wwbbh8-0"})(["padding-left:16px;margin-bottom:4px;font-size:", ";color:", ";text-align:left;"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            Ox = e => e.author ? (0, o.jsx)(Tx, {children: e.author}) : null,
            Dx = a.ZP.div.withConfig({componentId: "sc-t6dt3r-0"})(["padding-bottom:12px;"]),
            Ex = a.ZP.p.withConfig({componentId: "sc-t6dt3r-1"})(["padding-top:4px;font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            Lx = a.ZP.div.withConfig({componentId: "sc-t6dt3r-2"})(["margin:0 -16px;"]),
            Zx = a.ZP.div.withConfig({componentId: "sc-t6dt3r-3"})(["height:360px;"]), zx = e => {
                const t = (0, r.useRef)(null), n = (0, r.useRef)(null), i = new Date, [s, a] = (0, r.useState)(!1);
                return (0, r.useEffect)((() => {
                    (null == t ? void 0 : t.current) && a(!0)
                }), []), (0, r.useEffect)((() => {
                    var e, t, o, i;
                    if (!s) return;
                    if (void 0 !== (null == (i = null == (o = null == (t = null == (e = null == window ? void 0 : window.YAHOO) ? void 0 : e.JP) ? void 0 : t.yvpub) ? void 0 : o.video) ? void 0 : i.init)) return void window.YAHOO.JP.yvpub.video.init();
                    const r = () => {
                        var e, t, n, o;
                        void 0 !== (null == (o = null == (n = null == (t = null == (e = null == window ? void 0 : window.YAHOO) ? void 0 : e.JP) ? void 0 : t.yvpub) ? void 0 : n.video) ? void 0 : o.init) && window.YAHOO.JP.yvpub.video.init()
                    };
                    return (null == n ? void 0 : n.current) && n.current.addEventListener("load", r), () => {
                        (null == n ? void 0 : n.current) && n.current.removeEventListener("load", r)
                    }
                }), [s]), (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsxs)(Dx, {
                        ref: t,
                        children: [e.isCaution ? (0, o.jsx)(Lx, {
                            children: (0, o.jsx)(jr, {
                                isShow: !0,
                                variant: "warning",
                                title: "【閲覧注意】この動画には暴力シーンや残酷な場面が含まれます"
                            })
                        }) : null, (0, o.jsxs)(Zx, {
                            children: [(0, o.jsx)("script", {
                                ref: n,
                                src: `https://s.yimg.jp/images/yvpub/player/js/player.js?v=${i.getTime()}`
                            }), s ? (0, o.jsx)("div", {
                                className: "yvpub-player",
                                "data-contentid": e.vid,
                                "data-shannonid": e.contentId,
                                "data-height": "360",
                                "data-width": "640",
                                "data-propertyname": "jp_news",
                                "data-recommend": "0",
                                "data-autostart": e.autostart === xt.I.ON ? "1" : "0",
                                "data-repeat": "0",
                                "data-mute": "1",
                                "data-ds": "88946_529602",
                                "data-servicekey": "news",
                                "data-screenname": "detail-article",
                                "data-afc": "0"
                            }) : null]
                        }), e.credit ? (0, o.jsx)(Ex, {children: e.credit}) : null]
                    })
                })
            };
        var $x = n(94654), Ax = n.n($x), Rx = n(71640), Fx = n.n(Rx);
        const Ux = e => {
                const t = encodeURIComponent(e.linkURL), n = t.length < 300 ? `url:${t};` : "",
                    i = e.linkText.match(/;|:/) ? "" : `title:${e.linkText};`;
                return (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsx)("a", {
                        href: e.linkURL,
                        "data-cl-params": `_cl_vmodule:related;_cl_link:photo;_cl_position:1;view_pos:1;shcid:${e.contentId};${n}${i}`,
                        children: e.linkText
                    })
                })
            }, Bx = e => (0, o.jsxs)(r.Fragment, {
                children: [" ", (0, o.jsx)("a", {
                    href: `https://stocks.finance.yahoo.co.jp/stocks/detail/?code=${e.stockCode}`,
                    children: `<${e.stockCodeString}>`
                }), " "]
            }), Nx = (e, t) => {
                const n = Fx()(e.text, t.match);
                return n.map(((o, i) => ({text: o, finance: n.length - 1 === i ? e.finance : t})))
            }, Mx = e => {
                const t = e.paragraphItems.map(((t, n) => t.link ? (0, o.jsx)("a", {
                    href: t.link,
                    "data-cl-params": e.dataClParams,
                    children: t.text
                }, `textItem_${e.bodyIndex}_${e.paragraphIndex}_${n}`) : e.finances ? ((e, t) => {
                    let n = [{text: e}];
                    return t.forEach((e => {
                        n = Ax()(n.map((t => Nx(t, e))))
                    })), n.map(((e, t) => (0, o.jsxs)(r.Fragment, {
                        children: [e.text, e.finance ? (0, o.jsx)(Bx, {
                            stockCode: e.finance.stockCode,
                            stockCodeString: e.finance.stockCodeString
                        }) : null]
                    }, t)))
                })(t.text, e.finances) : t.text));
                return (0, o.jsxs)(r.Fragment, {
                    children: [t, e.link ? (0, o.jsx)(Ux, {
                        linkText: e.link.linkText,
                        linkURL: e.link.linkURL,
                        contentId: e.contentId
                    }) : null]
                })
            },
            Vx = a.ZP.div.withConfig({componentId: "sc-1cmuo3x-0"})(["", " display:flex;padding-bottom:12px;"], (e => "right" === e.position ? "padding-left: 4px; justify-content: flex-start;" : "padding-right: 4px; justify-content: flex-end;")),
            Wx = a.ZP.div.withConfig({componentId: "sc-1cmuo3x-1"})(["display:inline-flex;height:18px;padding:0 8px;font-size:", ";line-height:18px;color:", ";text-align:center;vertical-align:middle;"], se.px12, (e => e.theme.news.palette.text_sub_lv2_common)),
            Hx = a.ZP.span.withConfig({componentId: "sc-1cmuo3x-2"})(["padding:0 4px;"]),
            qx = (0, a.iv)(["position:relative;width:18px;height:18px;border:1px solid ", ";border-radius:", ";"], (e => e.theme.news.palette.btn_simple_border_common), $),
            Yx = a.ZP.button.withConfig({componentId: "sc-1cmuo3x-3"})(["", " &:disabled{color:", ";cursor:default;background:", ";}"], qx, (e => e.theme.news.palette.btn_disabled_text_common), (e => e.theme.news.palette.btn_disabled_bg_common)),
            Jx = a.ZP.span.withConfig({componentId: "sc-1cmuo3x-4"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;"]),
            Gx = e => (0, o.jsxs)(Vx, {
                position: e.position,
                children: [1 === e.currentIndex ? (0, o.jsx)(Yx, {
                    "aria-label": "前へ",
                    disabled: !0,
                    children: (0, o.jsx)(Jx, {children: (0, o.jsx)(cx.Z, {size: 10})})
                }) : (0, o.jsx)(Yx, {
                    onClick: () => e.prev(),
                    "aria-label": "前へ",
                    children: (0, o.jsx)(Jx, {children: (0, o.jsx)(cx.Z, {size: 10})})
                }), (0, o.jsxs)(Wx, {children: [(0, o.jsx)("span", {children: e.currentIndex}), (0, o.jsx)(Hx, {children: "/"}), (0, o.jsx)("span", {children: e.total})]}), e.currentIndex === e.total ? (0, o.jsx)(Yx, {
                    "aria-label": "次へ",
                    disabled: !0,
                    children: (0, o.jsx)(Jx, {children: (0, o.jsx)(dx.L, {size: 10})})
                }) : (0, o.jsx)(Yx, {
                    onClick: () => e.next(),
                    "aria-label": "次へ",
                    children: (0, o.jsx)(Jx, {children: (0, o.jsx)(dx.L, {size: 10})})
                })]
            });
        var Xx = n(76752);
        const Qx = "https://s.yimg.jp/images/news-web/all/images/default_19x10_400_210.png",
            Kx = "https://news-pctr.c.yimg.jp/r/iwiz-tpc/images/tpc/eternal/2017/11/17/1510929920_1485224810_1607502417-x1280-y720.jpg",
            e_ = "https://news-pctr.c.yimg.jp/r/iwiz-tpc/images/tpc/eternal/2017/10/27/1509081692_1427194511_1427194505_topics550x550.jpg";
        let t_;

        class n_ extends r.Component {
            componentDidMount() {
                this.checkImageSize()
            }

            render() {
                return null
            }

            checkImageSize() {
                const e = this.selectUseImageSrc();
                if (void 0 === e) return;
                const t = document.createElement("img");
                t.onload = () => {
                    const e = t.width, n = t.height;
                    (e < 2 || n < 2) && this.props.actionOnError()
                }, t.onerror = () => {
                    this.props.actionOnError()
                }, t.src = e
            }

            selectUseImageSrc() {
                return window.HTMLPictureElement && this.props.resizedThumbUrl ? this.supportFormatWebp() ? this.props.resizedThumbUrl.webp : this.props.resizedThumbUrl.jpeg : this.props.imageSrc
            }

            supportFormatWebp() {
                if (void 0 !== t_) return t_;
                const e = document.createElement("canvas");
                return t_ = !!e.getContext("2d") && 0 === e.toDataURL("image/webp").indexOf("data:image/webp"), t_
            }
        }

        var o_ = Object.defineProperty, i_ = Object.defineProperties, s_ = Object.getOwnPropertyDescriptors,
            r_ = Object.getOwnPropertySymbols, a_ = Object.prototype.hasOwnProperty,
            l_ = Object.prototype.propertyIsEnumerable,
            c_ = (e, t, n) => t in e ? o_(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            d_ = (e, t) => {
                for (var n in t || (t = {})) a_.call(t, n) && c_(e, n, t[n]);
                if (r_) for (var n of r_(t)) l_.call(t, n) && c_(e, n, t[n]);
                return e
            }, p_ = (e, t) => i_(e, s_(t)),
            m_ = (e => (e.SMALL = "small", e.MIDDLE = "middle", e.LARGE = "large", e.WIDE = "wide", e.WIDE_19X10 = "wide_19x10", e))(m_ || {});
        const h_ = a.ZP.div.withConfig({componentId: "sc-1z2z0a-0"})(["display:flex;align-items:center;justify-content:center;flex-direction:column;overflow:hidden;", ";", ""], Dr({
                width: "100%",
                height: "100%"
            }), (({
                      hasVideo: e,
                      heightSize: t,
                      widthSize: n,
                      backgroundColor: o,
                      theme: i
                  }) => (0, a.iv)(["", " width:", ";height:", ";"], e ? (0, a.iv)(["background-color:", ";"], i.news.palette.thumbnail_movie_common) : (0, a.iv)(["background-color:", ";"], o || i.news.palette.thumbnail_normal_common), n, t))),
            u_ = a.ZP.img.withConfig({componentId: "sc-1z2z0a-1"})(["vertical-align:middle;user-select:none;", ""], (e => `max-height: calc(${e.heightSize} + 1px); max-width: calc(${e.widthSize} + 1px);`)),
            g_ = a.ZP.span.withConfig({componentId: "sc-1z2z0a-2"})(["", ";"], (e => {
                const t = e.padding ? e.padding : 4;
                return `\n    display: inline-flex;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    padding: calc(${t}px / 2) calc(${t}px) calc(${t}px / 2) calc(${t}px + 2px);\n    color: #fff;\n    font-family: Helvetica;\n    font-size: ${e.fontSize ? e.fontSize : 11}px;\n    line-height: 1;\n    background-color: rgba(0, 0, 0, 0.7);\n  `
            })({padding: 4, fontSize: 11})),
            x_ = a.ZP.span.withConfig({componentId: "sc-1z2z0a-3"})(["margin-left:4px;"]),
            __ = (0, a.ZP)(Xx.J).withConfig({componentId: "sc-1z2z0a-4"})(["margin:0 -2px;color:", ";"], (e => e.theme.riff.palette.base));

        class f_ extends r.Component {
            constructor(e) {
                super(e), this.state = {onError: !1}
            }

            render() {
                var e;
                const [t, n] = this.getImageWidthAndHeight(),
                    i = this.props.disableLazyLoading ? null : {loading: "lazy"}, s = (0, o.jsx)(u_, p_(d_({}, i), {
                        src: this.props.imageSrc || "",
                        alt: this.props.imageAlt || "",
                        widthSize: t,
                        heightSize: n
                    })),
                    a = this.props.resizedImageSrc && "" !== this.props.resizedImageSrc.webp && "" !== this.props.resizedImageSrc.jpeg ? (0, o.jsxs)("picture", {
                        children: [(0, o.jsx)("source", {
                            type: "image/webp",
                            srcSet: this.props.resizedImageSrc.webp
                        }), (0, o.jsx)("source", {type: "image/jpeg", srcSet: this.props.resizedImageSrc.jpeg}), s]
                    }) : s, l = (0, o.jsx)(u_, p_(d_({}, i), {
                        src: this.getDefaultImageUrl(),
                        alt: "",
                        widthSize: t,
                        heightSize: n
                    }));
                let c = "thumbnail";
                this.props.imageSize && (c += ` thumbnail-${this.props.imageSize}`);
                return (0, o.jsxs)(h_, {
                    className: c,
                    hasVideo: this.props.hasVideo,
                    widthSize: t,
                    heightSize: n,
                    backgroundColor: this.props.thumbnailBackgroundColor,
                    children: [this.state.onError ? l : (0, o.jsxs)(r.Fragment, {
                        children: [(0, o.jsx)(n_, {
                            imageSrc: this.props.imageSrc,
                            resizedThumbUrl: null != (e = this.props.resizedImageSrc) ? e : void 0,
                            actionOnError: () => {
                                this.setState({onError: !0})
                            }
                        }), a]
                    }), this.props.hasVideo ? (0, o.jsxs)(g_, {children: [(0, o.jsx)(__, {size: 11}), this.props.videoDuration ? (0, o.jsx)(x_, {children: this.props.videoDuration}) : null]}) : null]
                })
            }

            getImageWidthAndHeight() {
                if (this.props.imageWidth && this.props.imageHeight) return [this.props.imageWidth, this.props.imageHeight];
                switch (this.props.imageSize) {
                    case"small":
                        return [m, m];
                    case"middle":
                        return [h, h];
                    case"large":
                        return [u, u];
                    case"wide":
                        return [g, x];
                    case"wide_19x10":
                        return [_, f];
                    default:
                        return ["", ""]
                }
            }

            getDefaultImageUrl() {
                if (this.props.imageWidth && this.props.imageHeight) return class {
                    static getDefaultImage(e, t) {
                        const n = Number(e.replace("px", "")), o = Number(t.replace("px", "")),
                            i = isNaN(o) || isNaN(n) ? 1 : n / o;
                        return 19 === Math.floor(10 * i) ? Qx : i > 1 ? Kx : e_
                    }
                }.getDefaultImage(this.props.imageWidth, this.props.imageHeight);
                switch (this.props.imageSize) {
                    case"wide_19x10":
                        return Qx;
                    case"wide":
                        return Kx;
                    default:
                        return e_
                }
            }
        }

        const w_ = a.ZP.div.withConfig({componentId: "sc-1ydtow8-0"})(["width:200px;margin:0 auto;", ""], (e => e.isCurrent ? "" : "display: none;")),
            b_ = a.ZP.a.withConfig({componentId: "sc-1ydtow8-1"})(["color:", ";", ""], (e => e.theme.news.palette.link_pc), Zr),
            v_ = a.ZP.p.withConfig({componentId: "sc-1ydtow8-2"})(["margin:8px auto 10px;font-size:", ";line-height:1.4em;"], se.px12),
            y_ = e => {
                const t = (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(f_, {
                        imageHeight: y,
                        imageWidth: y,
                        imageSrc: e.thumb.uri || void 0,
                        resizedImageSrc: e.resizedThumbUrl,
                        disableLazyLoading: !0,
                        hasVideo: !1
                    }), e.caption ? (0, o.jsx)(v_, {children: e.caption}) : null]
                });
                return (0, o.jsx)(w_, {
                    isCurrent: e.index === e.currentIndex,
                    children: e.photoDetailUrl ? (0, o.jsx)(b_, {
                        href: e.photoDetailUrl,
                        "data-cl-params": `_cl_vmodule:detail;_cl_link:thum;_cl_position:${e.index};view_pos:${e.index};`,
                        children: t
                    }) : t
                })
            };
        var j_ = Object.defineProperty, I_ = Object.defineProperties, C_ = Object.getOwnPropertyDescriptors,
            P_ = Object.getOwnPropertySymbols, k_ = Object.prototype.hasOwnProperty,
            S_ = Object.prototype.propertyIsEnumerable,
            T_ = (e, t, n) => t in e ? j_(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const O_ = a.ZP.div.withConfig({componentId: "sc-y4oiv5-0"})(["float:", ";", " width:210px;margin-bottom:8px;overflow:hidden;"], (e => e.position), (e => "right" === e.position ? "margin-left: 12px;" : "margin-right: 12px;")),
            D_ = e => {
                const [t, n] = (0, r.useState)(1), i = e.thumbnailItems[0];
                if (!i) return null;
                const s = "right" === i.position ? "right" : "left";
                return (0, o.jsxs)(O_, {
                    position: s,
                    children: [e.thumbnailItems.length > 1 ? (0, o.jsx)(Gx, {
                        position: s,
                        total: e.thumbnailItems.length,
                        currentIndex: t,
                        prev: () => {
                            n(t - 1)
                        },
                        next: () => {
                            n(t + 1)
                        }
                    }) : null, e.thumbnailItems.map(((e, n) => {
                        return (0, r.createElement)(y_, (o = ((e, t) => {
                            for (var n in t || (t = {})) k_.call(t, n) && T_(e, n, t[n]);
                            if (P_) for (var n of P_(t)) S_.call(t, n) && T_(e, n, t[n]);
                            return e
                        })({}, e), I_(o, C_({key: n, index: n + 1, currentIndex: t}))));
                        var o
                    }))]
                })
            },
            E_ = a.ZP.p.withConfig({componentId: "sc-54nboa-0"})(["margin-bottom:1em;line-height:1.8em;word-break:normal;word-wrap:break-word;white-space:pre-wrap;a{", "}"], Zr),
            L_ = e => (0, o.jsx)(E_, {className: "yjSlinkDirectlink highLightSearchTarget", children: e.children});
        var Z_ = Object.defineProperty, z_ = Object.defineProperties, $_ = Object.getOwnPropertyDescriptors,
            A_ = Object.getOwnPropertySymbols, R_ = Object.prototype.hasOwnProperty,
            F_ = Object.prototype.propertyIsEnumerable,
            U_ = (e, t, n) => t in e ? Z_(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            B_ = (e, t) => {
                for (var n in t || (t = {})) R_.call(t, n) && U_(e, n, t[n]);
                if (A_) for (var n of A_(t)) F_.call(t, n) && U_(e, n, t[n]);
                return e
            };
        const N_ = a.ZP.div.withConfig({componentId: "sc-zniwbk-0"})(["margin:0 16px 16px;overflow:hidden;"]),
            M_ = a.ZP.h2.withConfig({componentId: "sc-zniwbk-1"})(["margin-bottom:8px;font-size:", ";font-weight:bold;line-height:1.6;"], se.px17),
            V_ = e => {
                const t = e.isFirst && e.objectItems ? e.objectItems.find((e => e.hasVideo && void 0 !== e.video)) : void 0,
                    n = e.objectItems ? e.objectItems.filter((e => !e.hasVideo)) : void 0,
                    i = e.textDetails.map(((t, n) => (0, o.jsx)(Mx, {
                        paragraphItems: t.paragraphItems,
                        link: t.link,
                        finances: t.finances,
                        contentId: e.contentId,
                        dataClParams: `_cl_vmodule:ht_body;_cl_link:search;_cl_position:${n + 1}`,
                        bodyIndex: e.bodyIndex,
                        paragraphIndex: n
                    }, n)));
                return (0, o.jsxs)(N_, {children: [e.head ? (0, o.jsx)(M_, {children: e.head}) : null, (null == t ? void 0 : t.video) ? (0, o.jsx)(zx, (s = B_({}, t.video), r = {contentId: e.contentId}, z_(s, $_(r)))) : null, n ? (0, o.jsx)(D_, {thumbnailItems: n}) : null, (0, o.jsx)(L_, {children: i})]});
                var s, r
            },
            W_ = a.ZP.div.withConfig({componentId: "sc-1h0nnjs-0"})(["display:flex;align-items:baseline;justify-content:space-between;margin-top:8px;font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_base_common)),
            H_ = a.ZP.p.withConfig({componentId: "sc-1h0nnjs-1"})(["display:flex;align-items:center;line-height:20px;"]),
            q_ = a.ZP.span.withConfig({componentId: "sc-1h0nnjs-2"})(["position:relative;display:inline-block;height:20px;padding-left:22px;margin-right:2px;font-size:", ";font-weight:bold;background-image:url(", ");background-repeat:no-repeat;background-size:20px auto;"], se.px12, te.img_icon_PayPay),
            Y_ = a.ZP.p.withConfig({componentId: "sc-1h0nnjs-3"})(["font-size:", ";"], se.px12),
            J_ = a.ZP.em.withConfig({componentId: "sc-1h0nnjs-4"})(["font-size:", ";font-weight:bold;"], se.px14);

        class G_ extends r.Component {
            render() {
                return (0, o.jsxs)(W_, {children: [(0, o.jsxs)(H_, {children: [(0, o.jsx)(q_, {children: "PayPay残高"}), "使えます"]}), (0, o.jsxs)(Y_, {children: ["税込", (0, o.jsx)(J_, {children: lx.convertCommaSeparated(this.props.taxIncludedPrice)}), "円"]})]})
            }
        }

        const X_ = a.ZP.div.withConfig({componentId: "sc-1iorhqr-0"})(["margin-bottom:4px;word-break:break-all;"]),
            Q_ = a.ZP.a.withConfig({componentId: "sc-1iorhqr-1"})(["display:flex;align-items:center;padding:12px;text-decoration:none;&:visited ", "{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], X_, (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_normal_pc), X_, (e => e.theme.news.palette.link_hover_pc)),
            K_ = a.ZP.div.withConfig({componentId: "sc-1iorhqr-2"})(["flex:1 1 0%;margin-left:8px;"]),
            ef = a.ZP.div.withConfig({componentId: "sc-1iorhqr-3"})(["margin-top:8px;font-size:", ";line-height:1.1;color:", ";", "{font-size:", ";", "{font-size:", ";}}"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common), Y_, se.px16, J_, se.px20),
            tf = a.ZP.div.withConfig({componentId: "sc-1iorhqr-4"})(["display:flex;flex-wrap:wrap;"]),
            nf = a.ZP.span.withConfig({componentId: "sc-1iorhqr-5"})(["display:inline-block;flex:0 1 auto;margin-right:8px;"]),
            of = a.ZP.span.withConfig({componentId: "sc-1iorhqr-6"})(["margin-left:4px;font-size:0;"]),
            sf = e => (0, o.jsx)("li", {
                children: (0, o.jsxs)(Q_, {
                    href: e.link,
                    "data-cl-params": e.dataClParams,
                    children: [(0, o.jsx)(f_, {
                        imageWidth: j,
                        imageHeight: j,
                        imageSrc: e.thumbUrl || void 0,
                        resizedImageSrc: null,
                        hasVideo: !!e.durationString,
                        videoDuration: e.durationString
                    }), (0, o.jsxs)(K_, {children: [(0, o.jsx)(X_, {children: e.title}), (0, o.jsxs)(ef, {children: [(0, o.jsxs)(tf, {children: [(0, o.jsx)(nf, {children: e.mediaName}), (0, o.jsx)("span", {children: `${e.date} ${e.time}`}), (0, o.jsx)(of, {children: (0, o.jsx)($r, {type: "PAY"})})]}), (0, o.jsx)(G_, {taxIncludedPrice: e.taxIncludedPrice})]})]})]
                })
            }), rf = a.ZP.h3.withConfig({componentId: "sc-19p6iuh-0"})(["margin:0 16px;font-weight:normal;"]),
            af = e => e.destination ? (0, o.jsxs)("section", {
                children: [(0, o.jsx)(rf, {children: "【この記事にも注目】"}), (0, o.jsx)("ul", {
                    children: (0, o.jsx)(sf, {
                        title: e.destination.headline,
                        link: e.destination.newsLink,
                        mediaName: e.destination.mediaName,
                        thumbUrl: e.destination.thumbnailUrl,
                        date: e.destination.createDate.date,
                        time: e.destination.createDate.time,
                        taxIncludedPrice: e.destination.taxIncludePrice,
                        dataClParams: "_cl_vmodule:paid_pr;_cl_link:title;_cl_position:1;",
                        durationString: e.destination.durationString,
                        hasVideo: e.destination.hasVideo
                    })
                })]
            }) : null,
            lf = a.ZP.ul.withConfig({componentId: "sc-1nsqm6k-0"})(["color:", ";"], (e => e.theme.news.palette.text_base_common)),
            cf = a.ZP.h3.withConfig({componentId: "sc-1nsqm6k-1"})(["font-size:", ";font-weight:normal;"], se.px15),
            df = a.ZP.a.withConfig({componentId: "sc-1nsqm6k-2"})(["", " display:block;font-size:", ";word-wrap:break-word;"], Zr, se.px15),
            pf = a.ZP.section.withConfig({componentId: "sc-1nsqm6k-3"})(["margin:16px 16px 12px;line-height:1.6;"]),
            mf = e => e.relatedLink && 0 !== e.relatedLink.length ? (0, o.jsx)(r.Fragment, {
                children: (0, o.jsxs)(pf, {
                    children: [(0, o.jsx)(cf, {children: "【関連記事】"}), (0, o.jsx)(lf, {
                        children: e.relatedLink.map(((t, n) => {
                            const i = encodeURIComponent(t.uri), s = i.length < 300 ? `url:${i};` : "",
                                r = t.title.match(/;|:/) ? "" : `title:${t.title};`;
                            return (0, o.jsx)("li", {
                                children: (0, o.jsx)(df, {
                                    href: t.uri,
                                    "data-cl-params": `_cl_vmodule:related;_cl_link:pc;_cl_position:${n + 1};shcid:${e.contentId};${s}${r}`,
                                    children: t.title
                                })
                            }, n)
                        }))
                    })]
                })
            }) : null;
        var hf = n(24479);
        const uf = a.ZP.div.withConfig({componentId: "sc-19x1zhz-0"})(["display:flex;justify-content:flex-end;margin:20px 16px 40px;"]),
            gf = a.ZP.a.withConfig({componentId: "sc-19x1zhz-1"})(["display:flex;align-items:center;justify-content:center;width:206px;height:38px;border:1px solid ", ";border-radius:", ";&:hover{text-decoration:none;}", ""], (e => e.theme.news.palette.btn_simple_border_common), A, (({
                                                                                                                                                                                                                                                                                                 isHovered: e,
                                                                                                                                                                                                                                                                                                 theme: t
                                                                                                                                                                                                                                                                                             }) => e ? (0, a.iv)(["background-color:", ";"], t.news.palette.bg_hover_normal_pc) : (0, a.iv)(["background-color:", ";"], t.news.palette.btn_simple_bg_common))),
            xf = a.ZP.p.withConfig({componentId: "sc-19x1zhz-2"})(["font-size:", ";font-weight:bold;line-height:1;color:", ";white-space:nowrap;"], se.px14, (e => e.theme.news.palette.text_base_common)),
            _f = e => {
                const {saveShareDateTime: t} = yg("article"), [n, i] = (0, r.useState)(!1);
                return (0, o.jsx)(uf, {
                    children: (0, o.jsxs)(gf, {
                        isHovered: n,
                        onMouseEnter: () => {
                            i(!0)
                        },
                        onMouseLeave: () => {
                            i(!1)
                        },
                        href: e.twitterUrl,
                        "data-cl-params": "_cl_vmodule:sns_under;_cl_link:tw;",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        onClick: () => {
                            i(!1), t()
                        },
                        children: [(0, o.jsx)(hf.F, {
                            size: "24px",
                            margin: "0",
                            padding: "0",
                            color: "primary"
                        }), (0, o.jsx)(xf, {children: "X(旧Twitter)でシェア"})]
                    })
                })
            }, ff = e => {
                const t = (new Date).getTime() - e.getTime(), n = 36e5;
                if (n > t) return !0;
                return t / n < 48
            };
        var wf = Object.defineProperty, bf = Object.defineProperties, vf = Object.getOwnPropertyDescriptors,
            yf = Object.getOwnPropertySymbols, jf = Object.prototype.hasOwnProperty,
            If = Object.prototype.propertyIsEnumerable,
            Cf = (e, t, n) => t in e ? wf(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Pf = e => {
            const {checkXShareLog: t, isSharedWithin21Days: n} = yg("article");
            return (0, r.useEffect)((() => {
                t()
            }), []), (0, o.jsxs)(r.Fragment, {
                children: [(0, o.jsxs)("div", {
                    className: "article_body highLightSearchTarget",
                    "data-ual-view-type": "detail",
                    "data-ual": `${xg({contentId: e.article.contentId, mtestId: e.mtestId, device: "pc"})}`,
                    children: [e.article.paragraphs ? e.article.paragraphs.map(((t, n) => {
                        return (0, r.createElement)(V_, (o = ((e, t) => {
                            for (var n in t || (t = {})) jf.call(t, n) && Cf(e, n, t[n]);
                            if (yf) for (var n of yf(t)) If.call(t, n) && Cf(e, n, t[n]);
                            return e
                        })({}, t), i = {
                            bodyIndex: n,
                            key: n,
                            isFirst: 0 === n,
                            contentId: e.article.contentId
                        }, bf(o, vf(i))));
                        var o, i
                    })) : null, e.article.maxPage === e.article.currentPage ? (0, o.jsx)(Ox, {author: e.article.author}) : null]
                }), (0, o.jsx)(Sx, {
                    contentId: e.article.contentId,
                    currentPage: e.article.currentPage,
                    maxPage: e.article.maxPage,
                    nextPageHead: e.article.nextPageHead
                }), (0, o.jsx)($l, {
                    children: (0, o.jsx)(Fl, {
                        id: "viewable_article_bottom",
                        position: "bottom",
                        dataClParams: "_cl_vmodule:v_hdlmod;_cl_link:endoftxt;_cl_position:0;"
                    })
                }), e.isExpert && e.expertId && ff(new Date(e.article.createDateTime)) ? (0, o.jsx)(ax, {}) : null, (0, o.jsx)(Gg, {isRemovedRelatedLinks: e.isRemovedRelatedLinks}), n && e.twitterUrl ? (0, o.jsx)(_f, {twitterUrl: e.twitterUrl}) : null, e.userData.isAppByYJ ? null : (0, o.jsx)(af, {destination: e.article.destination}), (0, o.jsxs)(wg, {
                    experimentId: "mfn_46142",
                    children: [(0, o.jsx)(_g, {
                        buckets: ["default", "art04ct"],
                        children: (0, o.jsx)(mf, {relatedLink: e.article.relatedLink, contentId: e.article.contentId})
                    }), (0, o.jsx)(_g, {buckets: ["art04t1"]})]
                })]
            })
        }, kf = a.ZP.a.withConfig({componentId: "sc-1enscux-0"})(["display:none;"]);

        class Sf extends r.Component {
            render() {
                return (0, o.jsx)(kf, {
                    href: this.props.mediaUri,
                    "data-cl-params": this.props.dataClParams,
                    children: (0, o.jsx)("img", {
                        src: this.props.bannerUri,
                        alt: this.props.mediaName,
                        width: "170",
                        height: "40"
                    })
                })
            }
        }

        const Tf = (0, a.ZP)(Zc.L).withConfig({componentId: "sc-mdnn4p-0"})(["&:hover{color:", ";background-color:#000;}"], (e => e.theme.riff.palette.base)),
            Of = (0, a.ZP)(mm.L).withConfig({componentId: "sc-mdnn4p-1"})(["&:hover{color:", ";background-color:#fff;}"], (e => e.theme.riff.components["social-button"].background.facebook)),
            Df = e => {
                var t, n;
                const {saveShareDateTime: i} = yg("article");
                return e.ngSocialModule ? null : (0, o.jsxs)(zc.Z, {
                    size: e.iconSize,
                    children: [(0, o.jsx)(Tf, {
                        onClick: () => {
                            e.enableSaveShareLog && i()
                        },
                        href: e.twitterUrl,
                        "data-cl-params": null != (t = e.twitterDataClParams) ? t : "_cl_vmodule:sns;_cl_link:tw;_cl_position:1;",
                        target: "_blank",
                        rel: "noopener"
                    }), (0, o.jsx)(Of, {
                        href: e.facebookUrl,
                        "data-cl-params": null != (n = e.facebookDataClParams) ? n : "_cl_vmodule:sns;_cl_link:fb;_cl_position:1;",
                        target: "_blank",
                        rel: "noopener"
                    })]
                })
            }, Ef = () => {
                const e = lr((({articleDetail: e}) => e.snsShareUrlsForArticleDetailPerPosition.up.twitter)),
                    t = lr((({articleDetail: e}) => e.snsShareUrlsForArticleDetailPerPosition.up.facebook)),
                    n = lr((({articleDetail: e}) => e.media.ngSocialModule)), i = lr((({pageData: e}) => e.isPay)),
                    s = void 0 === i || !i;
                return (0, o.jsx)(Df, {
                    twitterUrl: e,
                    facebookUrl: t,
                    ngSocialModule: n,
                    enableSaveShareLog: s,
                    iconSize: "xxx-small"
                })
            };
        var Lf = n(69572), Zf = n.n(Lf), zf = n(80706), $f = n(94952);
        const Af = ({propertyId: e, commentArticleId: t, fetchOnMount: n = !0}) => {
                var o, s, a;
                const l = (0, i.I0)(), c = (0, i.v9)((n => an(n, e, null != t ? t : ""))),
                    d = null != (o = null == c ? void 0 : c.digest) ? o : null,
                    p = null != (s = null == c ? void 0 : c.isLoading) && s,
                    m = null != (a = null == c ? void 0 : c.isError) && a,
                    h = (0, r.useCallback)((({remoteConfig: e, commentShort: t}) => {
                        if (!e.isEnabledComment) return !1;
                        if (!d || 0 === d.totalCount) return !1;
                        if (!t.isShow) return !1;
                        return !(0 === d.commentatorCount && d.totalCount < 100) && (0 !== d.commentatorCount || 0 !== d.comments.length)
                    }), [d]), u = (0, r.useCallback)((() => {
                        return n = void 0, o = null, i = function* () {
                            e && t && l(ln({propertyId: e, commentArticleId: t}))
                        }, new Promise(((e, t) => {
                            var s = e => {
                                try {
                                    a(i.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }, r = e => {
                                try {
                                    a(i.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }, a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, r);
                            a((i = i.apply(n, o)).next())
                        }));
                        var n, o, i
                    }), [t, e]);
                return (0, r.useEffect)((() => {
                    n && u()
                }), [n, u]), {commentDigest: d, isLoading: p, isError: m, fetchCommentDigest: u, isShowCommentFloating: h}
            }, Rf = a.ZP.div.withConfig({componentId: "sc-1n9vtw0-0"})(["display:flex;margin-left:8px;line-height:1.5;"]),
            Ff = a.ZP.button.withConfig({componentId: "sc-1n9vtw0-1"})(["display:block;text-decoration:none;&:hover{text-decoration:none;opacity:", ";}&:focus{outline:revert;}"], J),
            Uf = (0, a.ZP)(zf.G).withConfig({componentId: "sc-1n9vtw0-2"})(["position:relative;top:1px;color:#3474ce;"]),
            Bf = a.ZP.span.withConfig({componentId: "sc-1n9vtw0-3"})(["display:flex;align-items:center;font-size:", ";", ""], se.px14, (({commentsCount: e}) => e >= 1500 ? `color: #f76564;\n        ${Uf} {\n        color: #f76564\n        }` : "color: #3474ce;")),
            Nf = a.ZP.span.withConfig({componentId: "sc-1n9vtw0-4"})(["display:flex;align-items:center;margin:0 8px 0 4px;"]),
            Mf = a.ZP.img.withConfig({componentId: "sc-1n9vtw0-5"})(["width:", ";height:", ";margin-right:-4px;border:2px solid #aacdff;border-radius:50%;", ""], T, T, (({zIndex: e}) => `z-index: ${e};`)),
            Vf = a.ZP.img.withConfig({componentId: "sc-1n9vtw0-6"})(["width:", ";height:", ";margin-right:-4px;border:1px solid #fff;border-radius:50%;", ""], T, T, (({zIndex: e}) => `z-index: ${e};`)),
            Wf = e => {
                var t, n, i;
                const s = () => {
                        var e;
                        const t = null == (e = document.getElementById("articleCommentModule")) ? void 0 : e.getBoundingClientRect();
                        t && window.scrollTo(0, t.top)
                    }, {commentDigest: r} = Af({
                        propertyId: "news_user",
                        commentArticleId: null != (t = e.contentId) ? t : void 0
                    }),
                    a = Zf()([...null != (n = null == r ? void 0 : r.commentatorComments) ? n : [], ...null != (i = null == r ? void 0 : r.comments) ? i : []], 3),
                    l = a && a.length > 0 ? a.map(((e, t) => {
                        const n = 5 - t;
                        return e.commentatorTitle ? (0, o.jsx)(Mf, {
                            src: e.profileImageUrl,
                            zIndex: n
                        }, `iconList_${t}`) : (0, o.jsx)(Vf, {src: e.profileImageUrl, zIndex: n}, `iconList_${t}`)
                    })) : null;
                return (0, o.jsxs)(Rf, {
                    children: [(0, o.jsxs)(Ff, {
                        "data-cl-params": "_cl_vmodule:cmtmod;_cl_link:count;",
                        onClick: s,
                        children: [(0, o.jsxs)(Bf, {
                            commentsCount: e.commentsCount,
                            "aria-hidden": "true",
                            children: [(0, o.jsx)(Uf, {size: 18}), e.commentsCount]
                        }), (0, o.jsxs)($f.T, {children: ["コメント", e.commentsCount, "件"]})]
                    }), l ? (0, o.jsx)(Ff, {
                        "data-cl-params": "_cl_vmodule:cmtmod;_cl_link:profimg;",
                        onClick: s,
                        children: (0, o.jsx)(Nf, {"aria-hidden": "true", children: l})
                    }) : null]
                })
            }, Hf = ({size: e}) => (0, o.jsxs)("svg", {
                width: e,
                height: e,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                role: "img",
                "area-label": "専門家認証マーク",
                children: [(0, o.jsx)("rect", {
                    x: "6",
                    y: "6",
                    width: "12",
                    height: "12",
                    fill: "white"
                }), (0, o.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M15.889 10.482L12.3535 14.018L11.293 15.078C11.0975 15.2735 10.781 15.2735 10.586 15.078L9.525 14.018L8.1105 12.6035C7.72 12.2125 7.72 11.5795 8.1105 11.1895C8.501 10.7985 9.134 10.7985 9.5245 11.1895L10.9395 12.604L14.4745 9.068C14.8655 8.6775 15.4985 8.6775 15.889 9.068C16.2795 9.4585 16.2795 10.0915 15.889 10.482ZM21 9.0645L18.3795 7.3465L17.562 4.3145L14.437 4.4705L12 2.5L9.563 4.4705L6.4375 4.3145L5.62 7.3465L3 9.0645L4.114 12L3 14.9355L5.62 16.653L6.4375 19.6855L9.563 19.529L12 21.5L14.437 19.529L17.562 19.6855L18.3795 16.653L21 14.9355L19.886 12L21 9.0645Z",
                    fill: "#3474CE"
                })]
            }),
            qf = a.ZP.div.withConfig({componentId: "sc-yl69s-0"})(["display:flex;align-items:center;height:30px;padding:4px 8px;margin:8px 8px 18px;background-color:", ";border-radius:", ";"], (e => e.theme.news.palette.bg_lv2_common), A),
            Yf = a.ZP.span.withConfig({componentId: "sc-yl69s-1"})(["display:flex;align-items:center;margin-left:2px;font-size:", ";font-weight:bold;color:", ";"], se.px12, (e => e.theme.news.palette.text_base_common)),
            Jf = a.ZP.a.withConfig({componentId: "sc-yl69s-2"})(["display:inline-flex;align-items:center;font-size:", ";line-height:1;color:", ";&:hover{color:", ";}"], se.px13, (e => e.theme.news.palette.link_pc), (e => e.theme.news.palette.link_hover_pc)),
            Gf = a.ZP.img.withConfig({componentId: "sc-yl69s-3"})(["width:", ";height:", ";margin:0 2px;border:2px solid #aacdff;border-radius:50%;"], T, T),
            Xf = ({
                      count: e,
                      firstReactedExpert: t
                  }) => e < 1 ? null : (0, o.jsxs)(qf, {
                children: [(0, o.jsx)(Hf, {size: 20}), (0, o.jsxs)(Yf, {
                    children: [(0, o.jsxs)(Jf, {
                        href: t.expertProfileUrl,
                        "data-cl-params": "_cl_vmodule:expertpick_info;_cl_link:prof;_cl_position:0;",
                        children: [(0, o.jsx)(Gf, {src: t.expertImageUrl}), t.expertName]
                    }), 1 === e ? "さんが推薦中" : `さんなど${e}名の専門家が推薦中`]
                })]
            }),
            Qf = a.ZP.div.withConfig({componentId: "sc-yl69s-4"})(["display:flex;align-items:center;white-space:nowrap;"]),
            Kf = a.ZP.span.withConfig({componentId: "sc-yl69s-5"})(["position:relative;display:inline-block;padding-left:16px;font-size:", ";font-weight:bold;line-height:16px;color:", ";white-space:nowrap;&::before{position:absolute;top:0;left:0;width:16px;height:16px;content:'';background-image:url(", ");background-repeat:no-repeat;background-size:contain;}"], se.px10, (e => e.theme.news.palette.expert_label_text), te.img_icon_expert_verified),
            ew = () => (0, o.jsx)(Qf, {children: (0, o.jsx)(Kf, {children: "専門家が推薦中"})}),
            tw = a.ZP.div.withConfig({componentId: "sc-uzx6gd-0"})(["margin-left:8px;"]),
            nw = a.ZP.h1.withConfig({componentId: "sc-uzx6gd-1"})(["margin:16px 16px 0;font-size:", ";font-weight:bold;line-height:1.3;letter-spacing:-0.05em;"], se.px22),
            ow = a.ZP.div.withConfig({componentId: "sc-uzx6gd-2"})(["display:flex;align-items:center;justify-content:space-between;margin:8px 16px 16px;", ""], (({isDisplayExpertRecommendTopLabel: e}) => e && (0, a.iv)(["margin-bottom:0;"]))),
            iw = a.ZP.div.withConfig({componentId: "sc-uzx6gd-3"})(["display:flex;align-items:center;"]),
            sw = a.ZP.p.withConfig({componentId: "sc-uzx6gd-4"})(["font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            rw = a.ZP.span.withConfig({componentId: "sc-uzx6gd-5"})(["margin-left:4px;"]),
            aw = a.ZP.span.withConfig({componentId: "sc-uzx6gd-6"})(["margin-left:4px;font-size:0;"]), lw = e => {
                const t = e.headlineInTagList.map(((e, t) => "link" === e.type && e.titleLink ? (0, o.jsx)("a", {
                        href: e.titleLink,
                        "data-cl-params": "_cl_vmodule:hashtag;_cl_link:title;_cl_position:0;",
                        children: e.text
                    }, t) : e.text)),
                    n = void 0 !== e.expertRecommendCount && e.expertRecommendCount > 0 && void 0 !== e.firstReactedExpert;
                return (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsxs)("header", {
                        children: [(0, o.jsx)(nw, {children: t}), (0, o.jsxs)(ow, {
                            isDisplayExpertRecommendTopLabel: n,
                            children: [(0, o.jsxs)(iw, {
                                children: [(0, o.jsxs)(sw, {children: [(0, o.jsxs)("time", {children: [e.createDate.date, " ", e.createDate.time]}), (0, o.jsx)(rw, {children: "配信"})]}), e.isPay ? (0, o.jsx)(aw, {children: (0, o.jsx)($r, {type: "PAY"})}) : null, e.isCommentVisible && e.isCommentAllowed && e.commentCount > 0 ? (0, o.jsx)(Wf, {
                                    commentsCount: e.commentCount,
                                    contentId: e.contentId
                                }) : null, (0, o.jsx)(tw, {children: (0, o.jsx)(Ef, {})})]
                            }), (0, o.jsx)(Sf, {
                                // mediaName: e.media.mediaName,
                                // mediaUri: e.media.mediaUrl,
                                // bannerUri: e.media.bannerUri,
                                // dataClParams: "_cl_vmodule:detail;_cl_link:banner;"
                            })]
                        }), e.expertRecommendCount && e.firstReactedExpert ? (0, o.jsx)(Xf, {
                            count: e.expertRecommendCount,
                            firstReactedExpert: e.firstReactedExpert
                        }) : null]
                    })
                })
            }, cw = e => ((0, r.useEffect)((() => {
                const e = () => {
                    (null == window ? void 0 : window.ual) && (window.ual("init", "uamods"), window.ual("ctrl", "start"))
                };
                document.prerendering ? document.addEventListener("prerenderingchange", e, {once: !0}) : e()
            }), []), (0, o.jsxs)("article", {
                id: "uamods",
                children: [(0, o.jsx)(lw, {
                    headline: e.article.headline,
                    headlineInTagList: e.article.headlineInTagList,
                    isPay: e.article.isPay,
                    createDate: e.article.createDate,
                    media: e.article.media,
                    expireDate: e.article.expireDate,
                    commentCount: e.commentCount,
                    isCommentVisible: e.isCommentVisible,
                    isCommentAllowed: e.isCommentAllowed,
                    contentId: e.article.contentId,
                    expertRecommendCount: e.expertRecommendCount,
                    firstReactedExpert: e.firstReactedExpert
                }), (0, o.jsx)(Pf, {
                    article: e.article,
                    userData: e.userData,
                    mtestId: e.mtestId,
                    twitterUrl: e.twitterUrl,
                    facebookUrl: e.facebookUrl,
                    isRemovedRelatedLinks: e.isRemovedRelatedLinks,
                    isExpert: e.isExpert,
                    expertId: e.expertId
                }), (0, o.jsx)(gg, {updateDate: e.article.updateDate, media: e.article.media}), (0, o.jsx)(pg, {})]
            })), dw = () => {
                const e = lr((({articleDetail: e}) => e)), t = lr((({userData: e}) => e)),
                    n = lr((({pageData: e}) => e.pageParam.mtestid)), i = lr((({commentShort: e}) => e.totalCommentCount)),
                    s = lr((({articleDetail: e}) => e.isCommentVisible)),
                    r = lr((({articleDetail: e, remoteConfig: t}) => e.commentPermission && t.isEnabledComment)),
                    a = lr((({articleDetail: e}) => {
                        var t;
                        return null == (t = e.snsShareUrlsForArticleDetailPerPosition) ? void 0 : t.ud.twitter
                    })), l = lr((({articleDetail: e}) => {
                        var t;
                        return null == (t = e.snsShareUrlsForArticleDetailPerPosition) ? void 0 : t.ud.facebook
                    })), c = lr((({userData: e}) => {
                        var t, n;
                        return "art04t1" === (null == (n = null == (t = e.abTestBuckets) ? void 0 : t.find((e => "mfn_46142" === e.experimentId))) ? void 0 : n.bucket)
                    })), d = lr((({articleReaction: e}) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.isExpert) && t
                    })), p = lr((({articleReaction: e}) => null == e ? void 0 : e.expertId)),
                    m = lr((({articleExpertReaction: e}) => e));
                return (0, o.jsx)(cw, {
                    article: e,
                    userData: t,
                    mtestId: n,
                    commentCount: i,
                    isCommentVisible: s,
                    isCommentAllowed: r,
                    twitterUrl: a,
                    facebookUrl: l,
                    isRemovedRelatedLinks: c,
                    isExpert: d,
                    expertId: p,
                    expertRecommendCount: (() => {
                        if (!ff(new Date(e.createDateTime))) return;
                        const t = m;
                        return void 0 !== t && !0 === t.isSuccess ? t.data.count : void 0
                    })(),
                    firstReactedExpert: (() => {
                        if (!ff(new Date(e.createDateTime))) return;
                        const t = m;
                        return void 0 !== t && !0 === t.isSuccess ? t.data.firstReactedExpert : void 0
                    })()
                })
            },
            pw = a.ZP.div.withConfig({componentId: "sc-1vss3ue-0"})(["line-height:1.3;border-bottom:solid 1px ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            mw = a.ZP.div.withConfig({componentId: "sc-1vss3ue-1"})(["position:relative;display:flex;flex-grow:1;"]),
            hw = a.ZP.div.withConfig({componentId: "sc-1vss3ue-2"})(["margin-left:8px;"]),
            uw = a.ZP.div.withConfig({componentId: "sc-1vss3ue-3"})(["flex:1;"]),
            gw = a.ZP.p.withConfig({componentId: "sc-1vss3ue-4"})(["padding:0 0 4px;font-size:", ";"], se.px13),
            xw = a.ZP.p.withConfig({componentId: "sc-1vss3ue-5"})(["font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            _w = a.ZP.span.withConfig({componentId: "sc-1vss3ue-6"})(["margin-right:4px;"]),
            fw = a.ZP.span.withConfig({componentId: "sc-1vss3ue-7"})(["display:inline-block;margin-right:4px;"]),
            ww = a.ZP.p.withConfig({componentId: "sc-1vss3ue-8"})(["margin-top:4px;font-size:", ";color:", ";text-align:right;"], se.px12, (e => e.theme.news.palette.text_base_common)),
            bw = a.ZP.em.withConfig({componentId: "sc-1vss3ue-9"})(["font-size:", ";font-weight:bold;"], se.px16),
            vw = a.ZP.a.withConfig({componentId: "sc-1vss3ue-10"})(["display:block;padding:8px 0;&:visited{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_subColumn_pc), gw, (e => e.theme.news.palette.link_hover_pc));

        class yw extends r.Component {
            render() {
                const e = this.props.hasVideo && this.props.duration ? this.props.duration : void 0,
                    t = this.props.articleSourceParam ? Es(this.props.newsLink, {source: this.props.articleSourceParam}) : this.props.newsLink;
                return (0, o.jsx)(pw, {
                    children: (0, o.jsxs)(vw, {
                        href: t,
                        "data-cl-params": `_cl_vmodule:${this.props.clVmodule};_cl_link:title;_cl_position:${this.props.pos};`,
                        children: [(0, o.jsxs)(mw, {
                            children: [(0, o.jsxs)(uw, {children: [(0, o.jsx)(gw, {children: this.props.headline}), (0, o.jsxs)(xw, {children: [this.props.mediaName ? (0, o.jsx)(_w, {children: this.props.mediaName}) : null, (0, o.jsxs)("time", {children: [(0, o.jsx)(fw, {children: this.props.dateString}), (0, o.jsx)(fw, {children: this.props.timeString})]})]})]}), "" !== this.props.croppedThumbUrl && (0, o.jsx)(hw, {
                                children: (0, o.jsx)(f_, {
                                    imageSize: m_.SMALL,
                                    imageSrc: this.props.croppedThumbUrl,
                                    resizedImageSrc: null,
                                    hasVideo: !!e,
                                    videoDuration: e
                                })
                            })]
                        }), this.props.taxIncludedPrice && (0, o.jsxs)(ww, {children: ["税込", (0, o.jsx)(bw, {children: lx.convertCommaSeparated(this.props.taxIncludedPrice)}), "円"]})]
                    })
                }, this.props.newsLink)
            }
        }

        var jw = n(34621);
        const Iw = a.ZP.h2.withConfig({componentId: "sc-jh2t43-0"})(["padding:4px;font-size:", ";font-weight:bold;border-bottom:1px solid ", ";&:empty{margin-top:-16px;border-bottom:none;}a:hover{text-decoration:underline;}"], se.px14, (e => e.theme.news.palette.bor_lv2_pc)),
            Cw = a.ZP.p.withConfig({componentId: "sc-jh2t43-1"})(["display:flex;align-items:center;margin-top:4px;font-size:", ";line-height:20px;"], se.px12),
            Pw = (0, a.ZP)(jw.Y).withConfig({componentId: "sc-jh2t43-2"})(["margin-right:2px;width:20px;height:20px;"]),
            kw = a.ZP.span.withConfig({componentId: "sc-jh2t43-3"})(["margin-right:2px;"]),
            Sw = a.ZP.span.withConfig({componentId: "sc-jh2t43-4"})(["font-weight:normal;"]);

        class Tw extends r.Component {
            render() {
                const e = this.props.linkURL && this.props.linkDataClParams ? (0, o.jsx)("a", {
                    href: this.props.linkURL,
                    "data-cl-params": this.props.linkDataClParams,
                    children: this.props.titleText
                }) : this.props.titleText;
                return (0, o.jsxs)(Iw, {children: [e, (0, o.jsxs)(Cw, {children: [(0, o.jsx)(Pw, {}), (0, o.jsx)(kw, {children: "PayPay残高"}), (0, o.jsx)(Sw, {children: "使えます"})]})]})
            }
        }

        var Ow = Object.defineProperty, Dw = Object.defineProperties, Ew = Object.getOwnPropertyDescriptors,
            Lw = Object.getOwnPropertySymbols, Zw = Object.prototype.hasOwnProperty,
            zw = Object.prototype.propertyIsEnumerable,
            $w = (e, t, n) => t in e ? Ow(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const Aw = a.ZP.section.withConfig({componentId: "sc-tzrpk7-0"})(["padding:0 0 16px;"]);

        class Rw extends r.Component {
            componentDidUpdate() {
                window.customLogger && this.props.list.length > 0 && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
            }

            render() {
                if (this.props.isError || 0 === this.props.list.length) return null;
                const e = this.props.list.map(((e, t) => {
                    return (0, r.createElement)(yw, (n = ((e, t) => {
                        for (var n in t || (t = {})) Zw.call(t, n) && $w(e, n, t[n]);
                        if (Lw) for (var n of Lw(t)) zw.call(t, n) && $w(e, n, t[n]);
                        return e
                    })({}, e), o = {
                        key: t,
                        clVmodule: "prec_sub",
                        pos: t + 1,
                        articleSourceParam: this.props.articleSourceParam
                    }, Dw(n, Ew(o))));
                    var n, o
                }));
                return (0, o.jsxs)(Aw, {
                    children: [(0, o.jsx)(Tw, {
                        titleText: "あわせて読みたい有料記事",
                        linkURL: Es("/paidnews", {source: "pc-common-subcolumntitle"}),
                        linkDataClParams: "_cl_vmodule:prec_sub;_cl_link:more;"
                    }), (0, o.jsx)("ul", {children: e})]
                })
            }
        }

        const Fw = () => {
                const e = lr((({articleOtherData: e}) => e.isError)), t = (0, i.v9)(Zs);
                return (0, o.jsx)(Rw, {isError: e, list: t})
            },
            Uw = a.ZP.a.withConfig({componentId: "sc-t8wyrz-0"})(["display:block;&:hover{text-decoration:none;opacity:", ";}"], J),
            Bw = a.ZP.div.withConfig({componentId: "sc-t8wyrz-1"})(["display:flex;align-items:center;justify-content:center;padding:4px 8px;font-size:", ";color:", ";background:", ";border-radius:", " ", " 0 0;"], se.px12, (e => e.theme.news.palette.text_sub_lv2_common), (e => e.theme.news.palette.bg_lv2_common), A, A),
            Nw = (0, a.iv)(["display:flex;padding:4px 8px 8px;"]),
            Mw = a.ZP.div.withConfig({componentId: "sc-t8wyrz-2"})(["", " align-items:center;"], Nw),
            Vw = a.ZP.div.withConfig({componentId: "sc-t8wyrz-3"})(["", " align-items:start;"], Nw),
            Ww = a.ZP.div.withConfig({componentId: "sc-t8wyrz-4"})(["flex:0 1 auto;"]),
            Hw = a.ZP.dl.withConfig({componentId: "sc-t8wyrz-5"})(["margin-bottom:4px;font-size:", ";"], se.px11),
            qw = a.ZP.dt.withConfig({componentId: "sc-t8wyrz-6"})(["color:", ";"], (e => e.theme.news.palette.text_base_common)),
            Yw = (0, a.ZP)(Vp.g).withConfig({componentId: "sc-t8wyrz-7"})(["margin-right:2px;color:", ";"], (e => e.theme.news.palette.text_sub_lv2_common)),
            Jw = (0, a.ZP)(Xg.i).withConfig({componentId: "sc-t8wyrz-8"})(["color:", ";vertical-align:bottom;"], (e => e.theme.news.palette.brand_common)),
            Gw = a.ZP.dd.withConfig({componentId: "sc-t8wyrz-9"})(["color:", ";", ";@media screen\0{&{", ";}}"], (e => e.theme.news.palette.text_sub_lv2_common), Tr({lines: 1}), Or({
                lineHeight: 1.1,
                fontSize: 11,
                numberOfLine: 1,
                bgColor: "#fff",
                widthSize: 1
            })),
            Xw = a.ZP.p.withConfig({componentId: "sc-t8wyrz-10"})(["font-size:", ";color:", ";", ";@media screen\0{&{", ";}}"], se.px12, (e => e.theme.news.palette.text_base_common), Tr({lines: 3}), Or({
                lineHeight: 1.2,
                fontSize: 12,
                numberOfLine: 3,
                bgColor: "#fff",
                widthSize: 1
            })),
            Qw = a.ZP.p.withConfig({componentId: "sc-t8wyrz-11"})(["display:flex;align-items:center;justify-content:center;padding:8px;font-size:", ";color:", ";text-align:right;border-top:1px solid ", ";"], se.px12, (e => e.theme.news.palette.link_pc), (e => e.theme.news.palette.bor_lv2_pc)),
            Kw = a.ZP.div.withConfig({componentId: "sc-t8wyrz-12"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;width:44px;height:44px;margin:8px auto 0;"]);

        class eb extends r.Component {
            render() {
                return (0, o.jsxs)(Uw, {
                    href: this.props.fullPageUrl,
                    "data-cl-params": "_cl_vmodule:cmtfloat;_cl_link:more;",
                    children: [(0, o.jsxs)(Bw, {
                        children: [(0, o.jsx)(Yw, {
                            size: 15,
                            role: "img",
                            "aria-label": "コメント数"
                        }), this.props.totalCount]
                    }), this.getCommentItem(), (0, o.jsx)(Qw, {children: "もっと見る"})]
                })
            }

            getCommentItem() {
                return this.props.authorCount > 0 && null !== this.props.authorComment ? (0, o.jsxs)(r.Fragment, {children: [this.createProfileImage(this.props.authorComment), this.createAuthorCommentItem(this.props.authorComment)]}) : this.props.totalCount > 0 && null !== this.props.comment ? (0, o.jsxs)(r.Fragment, {children: [this.createProfileImage(this.props.comment), this.createCommentItem(this.props.comment)]}) : null
            }

            createAuthorCommentItem(e) {
                return (0, o.jsx)(Vw, {
                    children: (0, o.jsxs)(Ww, {
                        children: [(0, o.jsxs)(Hw, {
                            children: [(0, o.jsxs)(qw, {
                                children: [e.name, (0, o.jsx)(Jw, {
                                    size: 15,
                                    role: "img",
                                    "aria-label": "認証済みユーザー"
                                })]
                            }), (0, o.jsx)(Gw, {children: e.commentatorTitle})]
                        }), (0, o.jsxs)(Xw, {
                            children: [(0, o.jsx)(pm, {
                                label: e.label,
                                isSmallSize: !0,
                                commentatorType: e.commentatorType,
                                pos: 0,
                                isFloating: !0
                            }), e.text]
                        })]
                    })
                })
            }

            createProfileImage(e) {
                return (0, o.jsx)(Kw, {
                    children: (0, o.jsx)(qc, {
                        src: e.profileImageUrl,
                        width: P,
                        height: P,
                        alt: "",
                        setBorder: !1
                    })
                })
            }

            createCommentItem(e) {
                return (0, o.jsx)(Mw, {children: (0, o.jsx)(Ww, {children: (0, o.jsx)(Xw, {children: e.text})})})
            }
        }

        const tb = a.ZP.div.withConfig({componentId: "sc-13eq9c6-0"})(["position:fixed;bottom:0;width:", "px;", " background:", ";border:1px solid ", ";border-radius:", ";box-shadow:0 0px 6px -4px rgb(0 0 0 / 30%);transition:", ";", " &::before,&::after{position:absolute;display:block;content:'';}&::before{top:50%;right:-4px;width:0;margin-top:-4px;border-color:transparent ", " ", " transparent;border-style:solid;border-width:4px;box-shadow:1px 1px 0 ", ",0px 0px 6px -2px rgb(0 0 0 / 30%);transform:rotate(-45deg);}&::after{top:50%;right:0;width:8px;height:20px;margin-top:-6px;background-color:", ";}@media print{&{display:none;}}", ""], 130, (e => `left: ${e.left}px;`), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bor_lv2_pc), A, ne, (e => e.isViewIn ? (0, a.iv)(["pointer-events:auto;opacity:", ";transform:translateY(-20px);"], q) : (0, a.iv)(["pointer-events:none;opacity:", ";transform:translateY(50px);"], Y)), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bor_lv2_pc), (e => e.theme.news.palette.bg_lv1_common), (e => e.hasBottomMargin ? (0, a.iv)(["margin-bottom:90px;"]) : ""));

        class nb extends r.Component {
            constructor(e) {
                super(e), this.setLeft = () => {
                    const e = this.getLeft();
                    void 0 !== e && this.setState({left: e}, (() => {
                        setTimeout((() => {
                            this.setFooterViewIn()
                        }), 500)
                    }))
                }, this.state = {
                    left: 0,
                    isViewableWidth: !1,
                    isFooterViewIn: !1,
                    isInitialView: !1
                }, this.commentFloatingElement = (0, r.createRef)()
            }

            componentDidMount() {
                this.props.fetchData(), this.setState({isViewableWidth: this.isViewableWidth()}, (() => {
                    this.setLeft(), setTimeout((() => {
                        this.setState({isInitialView: !0})
                    }), 500)
                })), window.addEventListener("scroll", (() => {
                    this.setLeft(), this.setFooterViewIn()
                }), {passive: !0}), window.addEventListener("resize", (() => {
                    this.setLeft(), this.setFooterViewIn()
                }), {passive: !0})
            }

            componentDidUpdate() {
                var e;
                (null == (e = window.customLogger) ? void 0 : e.isTargetModule("wrapper")) && window.customLogger.refreshModule("wrapper")
            }

            render() {
                return this.state.isViewableWidth && this.props.isCommentAllowed ? (0, o.jsx)(tb, {
                    isViewIn: this.state.isInitialView && this.props.showCommentFloating && !this.state.isFooterViewIn,
                    left: this.state.left,
                    ref: this.commentFloatingElement,
                    hasBottomMargin: this.props.hasBottomMarginForOverlayAd,
                    children: (0, o.jsx)(eb, {
                        totalCount: this.props.totalCount,
                        authorCount: this.props.authorCount,
                        comment: this.props.comment,
                        authorComment: this.props.authorComment,
                        fullPageUrl: this.props.fullPageUrl
                    })
                }) : null
            }

            setFooterViewIn() {
                const e = document.getElementById("yjnFooter");
                e && window.pageYOffset + window.innerHeight > e.offsetTop ? this.setState({isFooterViewIn: !0}) : this.setState({isFooterViewIn: !1})
            }

            getLeft() {
                const e = document.getElementById("contentsWrap"), t = null == e ? void 0 : e.getBoundingClientRect();
                if (void 0 !== t) return t.left - 138
            }

            isViewableWidth() {
                return window.innerWidth >= 1266
            }
        }

        const ob = () => {
            var e, t, n, s, r;
            const a = (0, i.v9)((e => e.remoteConfig)), l = (0, i.v9)((e => e.commentShort)),
                c = (0, i.v9)((e => e.articleDetail)), d = (0, i.v9)((e => e.commentShort.commentUrl)), {
                    commentDigest: p,
                    fetchCommentDigest: m,
                    isShowCommentFloating: h
                } = Af({propertyId: "news_user", commentArticleId: c.contentId, fetchOnMount: !1});
            return c.isCommentVisible && c.commentPermission ? (0, o.jsx)(nb, {
                showCommentFloating: h({
                    remoteConfig: a,
                    commentShort: l
                }),
                isCommentAllowed: c.commentPermission,
                totalCount: null != (e = null == p ? void 0 : p.totalCount) ? e : 0,
                authorCount: null != (t = null == p ? void 0 : p.commentatorCount) ? t : 0,
                comment: (null == (n = null == p ? void 0 : p.comments) ? void 0 : n[0]) ? null == p ? void 0 : p.comments[0] : null,
                authorComment: null != (r = null == (s = null == p ? void 0 : p.commentatorComments) ? void 0 : s[0]) ? r : null,
                fullPageUrl: null != d ? d : `/articles/${c.contentId}/comments`,
                hasBottomMarginForOverlayAd: !0,
                fetchData: m
            }) : null
        };

        class ib extends r.Component {
            constructor(e) {
                super(e), this.state = {fetched: !1}
            }

            componentDidMount() {
                "" !== this.props.contentId && (this.props.fetchData(), this.setState({fetched: !0}))
            }

            componentDidUpdate() {
                !1 === this.state.fetched && "" !== this.props.contentId && (this.props.fetchData(), this.setState({fetched: !0}))
            }

            render() {
                return null
            }
        }

        const sb = () => {
                const e = Cs(), t = lr((({articleDetail: e}) => e.contentId)), n = lr((({articleDetail: e}) => e.category)),
                    i = lr((({articleDetail: e}) => e.isPay)), s = lr((({userToken: e}) => e));
                return (0, o.jsx)(ib, {
                    contentId: t, fetchData: () => {
                        e(((e, t, n, o) => i => Is(void 0, null, (function* () {
                            if (n) {
                                if (!o) return Promise.reject({statusCode: 403});
                                try {
                                    return fetch(`/api/articleOtherData/micropayment?contentId=${e}`, {
                                        method: "GET",
                                        credentials: "same-origin",
                                        headers: {UserToken: o}
                                    }).then((e => {
                                        if (e.ok) return e.json();
                                        const t = e.status;
                                        return Promise.reject({statusCode: t})
                                    })).then((e => {
                                        i({type: $i, payload: ys({}, e)})
                                    }))
                                } catch (e) {
                                    return
                                }
                            } else try {
                                return fetch(`/api/public/articleOtherData/free?contentId=${e}&category=${t}`, {
                                    method: "GET",
                                    credentials: "same-origin"
                                }).then((e => {
                                    if (e.ok) return e.json();
                                    const t = e.status;
                                    return Promise.reject({statusCode: t})
                                })).then((e => {
                                    i({type: $i, payload: ys({}, e)})
                                }))
                            } catch (e) {
                                return
                            }
                        })))(t, n, i, s))
                    }
                })
            }, rb = "YAHOO.JP.News.Article.dislike.idList", ab = 1, lb = () => ({
                addToLocalStorage: e => {
                    var t;
                    const n = dn.X.get(rb, ab), o = null != (t = null == n ? void 0 : n.items) ? t : [];
                    o.some((({shcid: t}) => t === e)) || (o.push({shcid: e}), dn.X.set(rb, ab, {items: o}))
                }, removeFromLocalStorage: e => {
                    var t;
                    const n = dn.X.get(rb, ab), o = null != (t = null == n ? void 0 : n.items) ? t : [];
                    dn.X.set(rb, ab, {items: o.filter((t => t.shcid !== e))})
                }
            }),
            cb = (0, a.ZP)(jg.b).withConfig({componentId: "sc-xbekc9-0"})(["color:", ";"], (e => e.theme.news.palette.text_sub_lv1_common)),
            db = a.ZP.div.withConfig({componentId: "sc-xbekc9-1"})(["position:absolute;right:0;bottom:0;display:", ";width:100%;"], (({isDislike: e}) => e ? "none" : "block")),
            pb = a.ZP.div.withConfig({componentId: "sc-xbekc9-2"})(["position:absolute;right:8px;bottom:8px;visibility:visible;opacity:", ";transition:", ";"], q, oe),
            mb = a.ZP.button.withConfig({componentId: "sc-xbekc9-3"})(["display:flex;text-decoration:none;&:hover{text-decoration:none;}"]),
            hb = a.ZP.div.withConfig({componentId: "sc-xbekc9-4"})(["display:", ";align-items:center;height:100%;padding:8px;font-size:", ";"], (({isDislike: e}) => e ? "flex" : "none"), se.px14),
            ub = a.ZP.div.withConfig({componentId: "sc-xbekc9-5"})(["display:flex;flex-direction:column;width:100%;height:100%;padding:8px;border:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            gb = a.ZP.div.withConfig({componentId: "sc-xbekc9-6"})(["margin:auto;"]),
            xb = a.ZP.button.withConfig({componentId: "sc-xbekc9-7"})(["color:", ";&:hover{color:", ";text-decoration:underline;}"], (e => e.theme.news.palette.link_pc), (e => e.theme.news.palette.link_hover_pc)),
            _b = a.ZP.div.withConfig({componentId: "sc-xbekc9-8"})(["position:absolute;", " bottom:32px;display:", ";z-index:", ";&::before,&::after{position:absolute;right:", ";bottom:-5px;width:15px;height:15px;content:' ';transform:rotate(50deg) skew(10deg);}&::before{background-color:", ";border:1px solid #e6e6e6;box-shadow:0 2px 2px 1px rgb(0 0 0 / 10%);}&::after{background-color:", ";}"], (({shouldPreventOverlapWithCommentFloating: e}) => e ? (0, a.iv)(["left:-8px;"]) : (0, a.iv)(["right:2px;"])), (({isDislikeBalloonOpen: e}) => e ? "block" : "none"), O, (({shouldPreventOverlapWithCommentFloating: e}) => e ? "36px" : "5px"), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bg_lv1_common)),
            fb = a.ZP.div.withConfig({componentId: "sc-xbekc9-9"})(["position:relative;font-size:", ";background-color:", ";border:1px solid #e6e6e6;border-radius:", ";box-shadow:0 1px 2px 2px rgb(0 0 0 / 10%);"], se.px16, (e => e.theme.news.palette.bg_lv1_common), A),
            wb = a.ZP.button.withConfig({componentId: "sc-xbekc9-10"})(["padding:8px 12px;line-height:1.5;color:", ";white-space:nowrap;"], (e => e.theme.news.palette.link_pc)),
            bb = e => {
                var t;
                const {addToLocalStorage: n, removeFromLocalStorage: i} = lb(),
                    s = (0, r.useRef)(null), [a, l] = (0, r.useState)(0),
                    c = lr((({pageData: t}) => "article" === t.pageParam.conttype && e.dislikePos % 4 == 1 && e.isShowCommentFloating));
                (0, r.useEffect)((() => {
                    if (s.current) {
                        const e = s.current.offsetHeight;
                        l((t => Math.max(t, e)))
                    }
                }), [null == (t = null == s ? void 0 : s.current) ? void 0 : t.offsetHeight]);
                return (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsxs)(db, {
                        isDislike: e.isDislike,
                        children: [(0, o.jsx)(pb, {
                            children: (0, o.jsx)(mb, {
                                id: `newsFeed_item_dislike_toggle_button_id-${e.dislikePos}`,
                                "data-cl-params": `_cl_vmodule:smlr;_cl_link:feedback;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                onClick: e.updateDislikeBalloon,
                                "aria-label": "記事の非表示設定を開く",
                                children: (0, o.jsx)(cb, {size: 14})
                            })
                        }), (0, o.jsx)(_b, {
                            isDislikeBalloonOpen: e.isDislikeBalloonOpen,
                            shouldPreventOverlapWithCommentFloating: c,
                            children: (0, o.jsx)(fb, {
                                children: (0, o.jsx)(wb, {
                                    "data-cl-params": `_cl_vmodule:smlr;_cl_link:hidelist;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                    onClick: () => {
                                        e.updateDislikeBalloon(), n(e.contentId), e.setDislike(!0)
                                    },
                                    children: "この記事を非表示にする"
                                })
                            })
                        })]
                    }), (0, o.jsx)(hb, {
                        isDislike: e.isDislike,
                        ref: s,
                        style: {minHeight: `${a}px`},
                        children: (0, o.jsxs)(ub, {
                            children: [(0, o.jsx)(gb, {children: "記事を非表示にしました"}), (0, o.jsx)(xb, {
                                "data-cl-params": `_cl_vmodule:smlr;_cl_link:undo;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                onClick: () => {
                                    i(e.contentId), e.setDislike(!1)
                                },
                                children: "元に戻す"
                            })]
                        })
                    })]
                })
            };
        var vb = Object.defineProperty, yb = Object.defineProperties, jb = Object.getOwnPropertyDescriptors,
            Ib = Object.getOwnPropertySymbols, Cb = Object.prototype.hasOwnProperty,
            Pb = Object.prototype.propertyIsEnumerable,
            kb = (e, t, n) => t in e ? vb(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Sb = (e, t) => {
                for (var n in t || (t = {})) Cb.call(t, n) && kb(e, n, t[n]);
                if (Ib) for (var n of Ib(t)) Pb.call(t, n) && kb(e, n, t[n]);
                return e
            };
        const Tb = a.ZP.div.withConfig({componentId: "sc-1kng0sa-0"})(["width:100%;margin-top:4px;"]),
            Ob = a.ZP.div.withConfig({componentId: "sc-1kng0sa-1"})(["position:relative;height:", ";"], (({isDislike: e}) => e ? "100%" : "auto")),
            Db = a.ZP.div.withConfig({componentId: "sc-1kng0sa-2"})(["position:relative;width:100%;padding-bottom:calc(100% * (5 / 6));", " &::after{position:absolute;top:0;left:0;z-index:", ";box-sizing:border-box;width:100%;height:100%;content:'';border:1px solid ", ";}"], (e => (e.hasVideo ? "background-color: #000;" : `background-color: ${e.backgroundColor || e.theme.news.palette.thumbnail_normal_common};`) + "\n  "), O, (e => e.theme.news.palette.thumbnail_normal_border_common)),
            Eb = a.ZP.img.withConfig({componentId: "sc-1kng0sa-3"})(["position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;transform:translate(-50%,-50%);"]),
            Lb = a.ZP.p.withConfig({componentId: "sc-1kng0sa-4"})(["margin-top:4px;font-size:", ";", ";@media screen\0{&{", ";}}"], se.px14, Tr({lines: 3}), Or({
                lineHeight: 1.4,
                fontSize: 14,
                numberOfLine: 3,
                bgColor: "#fff",
                widthSize: 1
            })),
            Zb = a.ZP.a.withConfig({componentId: "sc-1kng0sa-5"})(["display:", ";height:100%;padding:8px;", " &:hover{text-decoration:none;background:", ";", "{text-decoration:underline;&::before,&::after{background:", ";}}}"], (({isDislike: e}) => e ? "none" : "block"), Zr, (e => e.theme.news.palette.bg_hover_normal_pc), Lb, (e => e.theme.news.palette.bg_hover_normal_pc)),
            zb = a.ZP.p.withConfig({componentId: "sc-1kng0sa-6"})(["font-size:", ";line-height:1.2;color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            $b = a.ZP.span.withConfig({componentId: "sc-1kng0sa-7"})(["position:absolute;right:0;bottom:0;display:inline-flex;padding:calc(4px / 2) 4px;font-family:Helvetica;font-size:11px;line-height:1;color:", ";background-color:rgb(0 0 0 / 70%);"], (e => e.theme.news.palette.bg_lv1_common)),
            Ab = a.ZP.span.withConfig({componentId: "sc-1kng0sa-8"})(["display:inline-block;margin-top:4px;"]),
            Rb = a.ZP.span.withConfig({componentId: "sc-1kng0sa-9"})(["display:inline-block;margin-left:4px;font-size:", ";"], se.px12),
            Fb = a.ZP.time.withConfig({componentId: "sc-1kng0sa-10"})(["display:block;margin-top:4px;margin-left:-4px;font-size:0;"]),
            Ub = a.ZP.span.withConfig({componentId: "sc-1kng0sa-11"})(["display:inline-block;margin-left:4px;font-size:", ";"], se.px12),
            Bb = a.ZP.span.withConfig({componentId: "sc-1kng0sa-12"})(["margin-left:8px;vertical-align:5px;"]),
            Nb = (0, a.ZP)(Xx.J).withConfig({componentId: "sc-1kng0sa-13"})(["margin-right:2px;color:", ";"], (e => e.theme.riff.palette.base)),
            Mb = a.ZP.p.withConfig({componentId: "sc-1kng0sa-14"})(["font-size:", ";color:", ";text-align:right;"], se.px12, (e => e.theme.news.palette.text_base_common)),
            Vb = a.ZP.em.withConfig({componentId: "sc-1kng0sa-15"})(["font-size:", ";font-weight:bold;"], se.px16);

        class Wb extends r.Component {
            render() {
                var e, t, n, i, s;
                const a = {};
                void 0 !== this.props.ualGotoContent && (a["data-ual-gotocontent"] = this.props.ualGotoContent);
                const l = this.props.resizedThumbUrl && "" !== this.props.resizedThumbUrl.webp && "" !== this.props.resizedThumbUrl.jpeg ? (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsxs)("picture", {
                        children: [(0, o.jsx)("source", {
                            type: "image/webp",
                            srcSet: this.props.resizedThumbUrl.webp
                        }), (0, o.jsx)("source", {
                            type: "image/jpeg",
                            srcSet: this.props.resizedThumbUrl.jpeg
                        }), (0, o.jsx)(Eb, {
                            loading: "lazy",
                            src: this.props.croppedThumbUrl || this.props.resizedThumbUrl.jpeg,
                            alt: ""
                        })]
                    })
                }) : (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsx)(Eb, {
                        loading: "lazy",
                        src: this.props.croppedThumbUrl,
                        alt: ""
                    })
                }), c = this.props.showPayIcon ? (0, o.jsx)(Bb, {children: (0, o.jsx)($r, {type: "PAY"})}) : null;
                return (0, o.jsx)(Tb, {
                    children: (0, o.jsxs)(Ob, {
                        isDislike: null != (t = null == (e = this.props.dislikeProps) ? void 0 : e.isDislike) && t,
                        children: [(0, o.jsxs)(Zb, (d = Sb({
                            href: this.props.newsLink,
                            "data-cl-params": this.props.dataClParams
                        }, a), p = {
                            isDislike: null != (i = null == (n = this.props.dislikeProps) ? void 0 : n.isDislike) && i,
                            children: [(0, o.jsxs)(Db, {
                                hasVideo: this.props.hasVideo,
                                backgroundColor: this.props.thumbnailBackgroundColor,
                                children: [l, this.props.duration ? (0, o.jsxs)($b, {children: [(0, o.jsx)(Nb, {size: 11}), this.props.duration]}) : null]
                            }), (0, o.jsxs)("div", {
                                children: [(0, o.jsx)(Lb, {children: this.props.headline}), (0, o.jsxs)(zb, {
                                    children: [this.props.mediaName ? (0, o.jsx)(Ab, {children: this.props.mediaName}) : null, (0, o.jsxs)(Fb, {
                                        dateTime: this.props.dateTime ? this.props.dateTime : "datetime",
                                        children: [(0, o.jsx)(Rb, {children: this.props.dateString}), (0, o.jsx)(Ub, {children: this.props.timeString}), c]
                                    })]
                                }), this.props.taxIncludedPrice ? (0, o.jsxs)(Mb, {children: ["税込", (0, o.jsx)(Vb, {children: lx.convertCommaSeparated(this.props.taxIncludedPrice)}), "円"]}) : null]
                            })]
                        }, yb(d, jb(p)))), void 0 === (null == (s = this.props.dislikeProps) ? void 0 : s.contentId) ? null : (0, o.jsx)(bb, {
                            contentId: this.props.dislikeProps.contentId,
                            isDislike: this.props.dislikeProps.isDislike,
                            dislikePos: this.props.dislikeProps.pos,
                            setDislike: this.props.dislikeProps.setDislike,
                            updateDislikeBalloon: this.props.dislikeProps.updateDislikeBalloon,
                            isDislikeBalloonOpen: this.props.dislikeProps.isDislikeBalloonOpen,
                            isShowCommentFloating: this.props.dislikeProps.isShowCommentFloating
                        })]
                    })
                });
                var d, p
            }
        }

        var Hb = Object.defineProperty, qb = Object.defineProperties, Yb = Object.getOwnPropertyDescriptors,
            Jb = Object.getOwnPropertySymbols, Gb = Object.prototype.hasOwnProperty,
            Xb = Object.prototype.propertyIsEnumerable,
            Qb = (e, t, n) => t in e ? Hb(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Kb = (e, t) => {
                for (var n in t || (t = {})) Gb.call(t, n) && Qb(e, n, t[n]);
                if (Jb) for (var n of Jb(t)) Xb.call(t, n) && Qb(e, n, t[n]);
                return e
            };
        const ev = a.ZP.li.withConfig({componentId: "sc-8tdxi4-0"})(["position:relative;box-sizing:border-box;display:flex;width:25%;"]),
            tv = e => {
                const [t, n] = (0, r.useState)(!1), i = (0, r.useCallback)((() => {
                    void 0 !== e.dislikeProps && e.dislikeProps.updatePanelListDislikeBalloon(e.contentId)
                }), [e.contentId, e.dislikeProps]);
                return (0, o.jsx)(ev, {
                    "data-ual-view-type": "list",
                    "data-ual": `${xg({
                        contentId: e.contentId,
                        mtestId: e.mtestId,
                        device: "pc"
                    })};element_id:${e.elementId}`,
                    children: (0, o.jsx)(Wb, {
                        headline: e.headline,
                        mediaName: e.mediaName,
                        newsLink: e.newsLink,
                        croppedThumbUrl: e.croppedThumbUrl,
                        resizedThumbUrl: e.resizedThumbUrl,
                        taxIncludedPrice: e.taxIncludedPrice,
                        dateString: e.dateString,
                        timeString: e.timeString,
                        dataClParams: e.dataClParams,
                        dateTime: e.dateTime,
                        showPayIcon: e.showPayIcon,
                        hasVideo: e.hasVideo,
                        duration: e.duration,
                        ualGotoContent: "",
                        thumbnailBackgroundColor: e.thumbnailBackgroundColor,
                        dislikeProps: void 0 !== e.dislikeProps ? (s = Kb({}, e.dislikeProps), a = {
                            contentId: e.contentId,
                            isDislike: t,
                            setDislike: n,
                            updateDislikeBalloon: i
                        }, qb(s, Yb(a))) : void 0
                    })
                });
                var s, a
            };
        var nv = Object.defineProperty, ov = Object.defineProperties, iv = Object.getOwnPropertyDescriptors,
            sv = Object.getOwnPropertySymbols, rv = Object.prototype.hasOwnProperty,
            av = Object.prototype.propertyIsEnumerable,
            lv = (e, t, n) => t in e ? nv(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const cv = a.ZP.ul.withConfig({componentId: "sc-1xzk7uw-0"})(["display:flex;flex-wrap:wrap;margin:-12px 8px 0;"]),
            dv = (0, a.ZP)($l).withConfig({componentId: "sc-1xzk7uw-1"})(["position:relative;padding-bottom:4px;border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc));

        class pv extends r.Component {
            render() {
                return (0, o.jsxs)(dv, {
                    forwardedAs: "section",
                    id: "uamods-also_read",
                    children: [(0, o.jsx)(Fl, {
                        id: "viewable_article_recommend",
                        position: "middle",
                        dataClParams: "_cl_vmodule:v_dtlmod;_cl_link:smlr;_cl_position:0;"
                    }), (0, o.jsx)(ou, {
                        titleText: "こんな記事も読まれています",
                        hasPayPay: !1
                    }), (0, o.jsx)(cv, {
                        children: this.props.recommend.map(((e, t) => {
                            return (0, r.createElement)(tv, (n = ((e, t) => {
                                for (var n in t || (t = {})) rv.call(t, n) && lv(e, n, t[n]);
                                if (sv) for (var n of sv(t)) av.call(t, n) && lv(e, n, t[n]);
                                return e
                            })({}, e), o = {
                                dataClParams: this.getDataClParams({
                                    pos: t + 1,
                                    shcId: e.contentId,
                                    mitInfo: e.mitInfo,
                                    isPay: e.isPay,
                                    isVideo: e.hasVideo
                                }),
                                elementId: this.props.elementId,
                                mtestId: this.props.mtestId,
                                key: t,
                                showPayIcon: !1,
                                dislikeProps: this.props.canDislikeOnPanelList && void 0 !== this.props.updatePanelListDislikeBalloon ? {
                                    pos: t + 1,
                                    isDislikeBalloonOpen: e.isDislikeBalloonOpen,
                                    updatePanelListDislikeBalloon: this.props.updatePanelListDislikeBalloon,
                                    isShowCommentFloating: this.props.isShowCommentFloating
                                } : void 0
                            }, ov(n, iv(o))));
                            var n, o
                        }))
                    })]
                })
            }

            getDataClParams(e) {
                return `_cl_vmodule:smlr;_cl_link:title;_cl_position:${e.pos};shcid:${e.shcId};video:${e.isVideo ? 1 : 0};pay:${e.isPay ? 1 : 0};` + (e.mitInfo ? `mit_info:${e.mitInfo};` : "")
            }
        }

        const mv = pv,
            hv = a.ZP.div.withConfig({componentId: "sc-1h7su4-0"})(["", ""], (e => (0, a.iv)(["min-height:", "px;"], e.minHeight)));

        class uv extends r.Component {
            constructor(e) {
                super(e), this.state = {onMount: !1}
            }

            componentDidUpdate() {
                this.props.recommend && !this.state.onMount && this.setState({onMount: !0}, (() => {
                    const e = () => {
                        (null == window ? void 0 : window.ual) && (window.ual("init", "uamods-also_read"), window.ual("ctrl", "start"))
                    };
                    document.prerendering ? document.addEventListener("prerenderingchange", e, {once: !0}) : e(), window.customLogger && this.props.recommend && this.props.recommend.length > 0 && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
                }))
            }

            render() {
                return this.props.isError ? null : this.state.onMount && this.props.recommend ? this.props.recommend.length < 4 ? null : void 0 !== this.props.updatePanelListDislikeBalloon && !this.props.isReplaced && this.props.canDislikeOnPanelList ? (0, o.jsx)(hv, {minHeight: 243}) : (0, o.jsx)(hv, {
                    minHeight: 243,
                    children: (0, o.jsx)(mv, {
                        contentId: this.props.contentId,
                        mtestId: this.props.mtestId,
                        recommend: this.props.recommend,
                        elementId: "second-article_detail-also_read",
                        thumbnailBackgroundColor: this.props.thumbnailBackgroundColor,
                        updatePanelListDislikeBalloon: this.props.updatePanelListDislikeBalloon,
                        canDislikeOnPanelList: this.props.canDislikeOnPanelList,
                        isShowCommentFloating: this.props.isShowCommentFloating
                    })
                }) : (0, o.jsx)(hv, {minHeight: 243})
            }
        }

        const gv = (e, t) => {
                var n;
                const o = xv(), i = null != (n = null == o ? void 0 : o.items) ? n : [];
                0 !== i.length && t(null == i ? void 0 : i.some((t => t.shcid === e)))
            }, xv = () => dn.X.get(rb, ab), _v = () => {
                const e = lr((({articleDetail: e}) => e.contentId)), t = lr((({pageData: e}) => e.pageParam.mtestid)),
                    n = lr((({articleOtherData: e}) => e.isError)),
                    s = lr((({articleOtherData: e}) => e.pcArticleRecommend)), a = lr((({articleOtherData: e}) => {
                        var t;
                        return null == (t = e.pcArticleRecommend) ? void 0 : t.isReplaced
                    })), l = (0, i.I0)(), {isShowCommentFloating: c} = Af({
                        propertyId: "news_user",
                        commentArticleId: e,
                        fetchOnMount: !1
                    }), d = (0, i.v9)((e => e.remoteConfig)), p = (0, i.v9)((e => e.commentShort)),
                    m = (0, r.useRef)(null == s ? void 0 : s.recommend);
                (0, r.useEffect)((() => {
                    !m.current && (null == s ? void 0 : s.recommend) && h(), m.current = null == s ? void 0 : s.recommend
                }), [null == s ? void 0 : s.recommend]), (0, r.useEffect)((() => (window.addEventListener("pageshow", h), () => window.removeEventListener("pageshow", h))), []);
                const h = e => {
                    var t;
                    if (e && !e.persisted) return;
                    const n = null == (t = xv()) ? void 0 : t.items.map((e => e.shcid));
                    l((e => ({type: Hi, payload: {contentIds: e}}))(n))
                }, u = n || null === s || s.isError, g = (null == s ? void 0 : s.recommend) ? s.recommend.map((e => {
                    var t, n, o;
                    return {
                        contentId: e.contentId || "",
                        headline: e.title,
                        mediaName: e.mediaName,
                        newsLink: e.link,
                        croppedThumbUrl: e.thumbUrl || void 0,
                        resizedThumbUrl: e.resizedThumbUrl || void 0,
                        dateString: e.createTime ? e.createTime.date : "",
                        timeString: e.createTime ? e.createTime.time : "",
                        hasVideo: null !== e.video,
                        duration: null != (n = null == (t = e.video) ? void 0 : t.duration) ? n : void 0,
                        mitInfo: e.mitInfo,
                        isPay: e.isPay,
                        isDislikeBalloonOpen: null != (o = e.isDislikeBalloonOpen) && o
                    }
                })) : null;
                return (0, o.jsx)(uv, {
                    contentId: e,
                    mtestId: t,
                    isError: u,
                    recommend: g,
                    updatePanelListDislikeBalloon: e => {
                        l((e => ({type: Wi, payload: {contentId: e}}))(e))
                    },
                    isReplaced: null != a && a,
                    canDislikeOnPanelList: !0,
                    isShowCommentFloating: c({remoteConfig: d, commentShort: p})
                })
            },
            fv = a.ZP.span.withConfig({componentId: "sc-k9lpz5-0"})(["display:inline-block;height:20px;padding:4px 10px;font-size:", ";font-weight:bold;line-height:1;color:", ";background:", ";border-radius:", ";"], se.px12, (e => e.theme.news.palette.text_white_common), (e => e.theme.news.palette.brand_common), R);

        class wv extends r.Component {
            render() {
                return (0, o.jsx)(fv, {children: this.props.text})
            }
        }

        var bv = n(81857), vv = n(26495), yv = n(74818), jv = n(57028);
        yv.kL.register(yv.qi), yv.kL.register(jv.Z);
        const Iv = e => {
                const t = (0, r.useContext)(a.Ni), n = ((e, t) => {
                    const n = e.map(((e, t) => ({
                            floor: Math.floor(e),
                            afterDecimalPoint: Number((e - Math.floor(e)).toFixed(2)),
                            index: t
                        }))).sort(((e, t) => t.afterDecimalPoint - e.afterDecimalPoint)),
                        o = t - n.reduce(((e, t) => e + t.floor), 0);
                    for (let e = 0; e < o; e++) {
                        const t = n[e];
                        t && t.floor++
                    }
                    return n.sort(((e, t) => e.index - t.index)).map((e => e.floor))
                })(e.data.map((e => e.percent)), 100), i = {
                    responsive: !1,
                    events: [],
                    plugins: {
                        datalabels: {
                            color: t.news.palette.text_white_common,
                            font: {weight: "bold", size: e.fontSize},
                            formatter: (e, t) => 0 === e || e <= 10 && 2 === t.dataIndex ? "" : `${Math.round(e)}%`
                        }, title: {display: !1}, legend: {display: !1}
                    },
                    animation: {duration: 0}
                }, s = {
                    datasets: [{
                        data: n,
                        backgroundColor: [t.news.palette.polls_graph_lv1_common, t.news.palette.polls_graph_lv2_common, t.news.palette.polls_graph_lv3_common],
                        borderColor: "rgba(0,0,255,0)",
                        hoverBackgroundColor: [t.news.palette.polls_graph_lv1_common, t.news.palette.polls_graph_lv2_common, t.news.palette.polls_graph_lv3_common]
                    }]
                };
                return (0, o.jsx)(vv.by, {data: s, options: i, height: e.height, width: e.width})
            },
            Cv = (0, a.iv)(["position:absolute;bottom:0;z-index:", ";display:block;width:100%;height:50%;content:'';background:linear-gradient(to top,rgba(255,255,255) 0%,rgba(255,255,255,0.0001) 50%);"], E),
            Pv = ((0, a.iv)(["background:linear-gradient(to top,rgba(249,249,249) 0%,rgba(249,249,249,0.0001) 50%);"]), (0, a.iv)(["flex:none;width:", ";height:", ";border-radius:", ";"], k, k, W)),
            kv = a.ZP.div.withConfig({componentId: "sc-d3b3ex-0"})(["text-align:center;"]),
            Sv = a.ZP.p.withConfig({componentId: "sc-d3b3ex-1"})(["margin-top:8px;font-size:", ";color:", ";text-align:center;"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            Tv = e => (0, o.jsxs)(r.Fragment, {
                children: [e.isShowButton && (0, o.jsx)(kv, {
                    children: (0, o.jsx)(Cc, {
                        text: "voting" === e.status ? "あなたの意見は？" : "結果詳細をみる",
                        type: "simple",
                        size: "middle",
                        isDisabled: !1,
                        linkURL: e.pollsUrl,
                        useAnchorTag: !0,
                        dataClParams: "_cl_vmodule:vote_mod;_cl_link:result;_cl_position:" + ("voting" === e.status ? 1 : 2),
                        linkTarget: e.isWidget ? "_parent" : void 0
                    })
                }), (0, o.jsx)(Sv, {children: "※ 統計に基づく世論調査ではありません。"})]
            }),
            Ov = a.ZP.div.withConfig({componentId: "sc-omm1y8-0"})(["display:flex;align-items:flex-start;margin:12px 8px 0 0;"]),
            Dv = a.ZP.div.withConfig({componentId: "sc-omm1y8-1"})(["width:130px;height:130px;margin:0px 20px;"]),
            Ev = a.ZP.ul.withConfig({componentId: "sc-omm1y8-2"})(["display:flex;flex:1;flex-direction:column;"]),
            Lv = a.ZP.span.withConfig({componentId: "sc-omm1y8-3"})(["", " margin-right:8px;"], Pv),
            Zv = a.ZP.li.withConfig({componentId: "sc-omm1y8-4"})(["", " display:flex;align-items:baseline;margin-top:12px;"], (zv = {circle: Lv}, (0, a.iv)(["&:nth-child(1) ", "{background-color:", ";}&:nth-child(2) ", "{background-color:", ";}&:nth-child(3) ", "{background-color:", ";}"], zv.circle, (e => e.theme.news.palette.polls_graph_lv1_common), zv.circle, (e => e.theme.news.palette.polls_graph_lv2_common), zv.circle, (e => e.theme.news.palette.polls_graph_lv3_common))));
        var zv;
        const $v = a.ZP.span.withConfig({componentId: "sc-omm1y8-5"})(["display:block;font-size:", ";color:", ";word-break:break-all;"], se.px14, (e => e.theme.news.palette.text_base_common)),
            Av = a.ZP.div.withConfig({componentId: "sc-omm1y8-6"})(["margin-top:16px;"]),
            Rv = a.ZP.div.withConfig({componentId: "sc-omm1y8-7"})(["width:100%;"]), Fv = e => {
                const t = Zf()(e.choices.slice().sort(((e, t) => t.count - e.count)), 4);
                return (0, o.jsxs)(Ov, {
                    children: [(0, o.jsx)(Dv, {
                        children: (0, o.jsx)(Iv, {
                            height: 130,
                            width: 130,
                            fontSize: 16,
                            data: t
                        })
                    }), (0, o.jsxs)(Rv, {
                        children: [(0, o.jsx)(Ev, {children: t.map(((e, t) => (0, o.jsxs)(Zv, {children: [(0, o.jsx)(Lv, {}), (0, o.jsx)($v, {children: e.choice})]}, t)))}), (0, o.jsx)(Av, {
                            children: (0, o.jsx)(Tv, {
                                status: e.status,
                                pollsUrl: e.pollsUrl,
                                isWidget: e.isWidget,
                                isShowButton: e.isShowButton
                            })
                        })]
                    })]
                })
            }, Uv = a.ZP.div.withConfig({componentId: "sc-d5bwo9-0"})(["margin:0 8px;"]),
            Bv = a.ZP.p.withConfig({componentId: "sc-d5bwo9-1"})(["display:flex;align-items:center;justify-content:center;height:104px;font-size:", ";color:", ";word-break:break-all;"], se.px16, (e => e.theme.news.palette.text_base_common)),
            Nv = e => (0, o.jsxs)(Uv, {
                children: [(0, o.jsx)(Bv, {children: "この設問にはまだ回答がありません。"}), (0, o.jsx)(Tv, {
                    status: e.status,
                    pollsUrl: e.pollsUrl,
                    isWidget: e.isWidget,
                    isShowButton: e.isShowButton
                })]
            }), Mv = a.ZP.div.withConfig({componentId: "sc-le14pn-0"})(["margin:12px 8px 0;"]),
            Vv = a.ZP.div.withConfig({componentId: "sc-le14pn-1"})(["display:block;height:", ";border-radius:", ";", ""], S, z, (({percent: e}) => `width: calc((100% - 56px) * ${e} / 100);`)),
            Wv = a.ZP.li.withConfig({componentId: "sc-le14pn-2"})(["", " display:flex;align-items:center;margin-top:8px;"], (e => (0, a.iv)(["&:nth-child(1) ", "{background-color:", ";}&:nth-child(2) ", "{background-color:", ";}&:nth-child(3) ", "{background-color:", ";}&:nth-child(4) ", "{background:", ";}"], e.bar, (e => e.theme.news.palette.polls_graph_lv1_common), e.bar, (e => e.theme.news.palette.polls_graph_lv2_common), e.bar, (e => e.theme.news.palette.polls_graph_lv3_common), e.bar, (e => e.theme.news.palette.polls_graph_lv4_common)))({bar: Vv})),
            Hv = a.ZP.div.withConfig({componentId: "sc-le14pn-3"})(["width:46%;margin-right:8px;text-align:right;"]),
            qv = a.ZP.ul.withConfig({componentId: "sc-le14pn-4"})(["position:relative;&::after{", "}"], (({isGradation: e}) => e ? Cv : "")),
            Yv = a.ZP.p.withConfig({componentId: "sc-le14pn-5"})(["font-size:", ";line-height:1.6;color:", ";word-break:break-all;"], se.px14, (e => e.theme.news.palette.text_base_common)),
            Jv = a.ZP.div.withConfig({componentId: "sc-le14pn-6"})(["display:flex;flex:1;align-items:center;width:54%;"]),
            Gv = a.ZP.span.withConfig({componentId: "sc-le14pn-7"})(["width:48px;margin-right:auto;margin-left:8px;font-size:", ";color:", ";"], se.px14, (e => e.theme.news.palette.text_base_common)),
            Xv = a.ZP.div.withConfig({componentId: "sc-le14pn-8"})(["margin-top:8px;"]), Qv = e => {
                const t = Zf()(e.choices, 4);
                return (0, o.jsxs)(Mv, {
                    children: [(0, o.jsx)(qv, {
                        isGradation: e.choices.length > 4,
                        children: t.map(((e, t) => (0, o.jsxs)(Wv, {children: [(0, o.jsx)(Hv, {children: (0, o.jsx)(Yv, {children: e.choice})}), (0, o.jsxs)(Jv, {children: [(0, o.jsx)(Vv, {percent: e.percent}), (0, o.jsx)(Gv, {children: `${e.percent}%`})]})]}, t)))
                    }), (0, o.jsx)(Xv, {
                        children: (0, o.jsx)(Tv, {
                            status: e.status,
                            pollsUrl: e.pollsUrl,
                            isWidget: e.isWidget,
                            isShowButton: e.isShowButton
                        })
                    })]
                })
            }, Kv = e => {
                const [t, n] = (0, r.useState)(!1), o = (e => {
                    const [t, n] = (0, r.useState)(!1), o = e.target;
                    return (0, r.useEffect)((() => {
                        if (null === o.current) return;
                        const t = new IntersectionObserver((([t]) => {
                            var o;
                            e.callback && t && e.callback(t), n(null != (o = null == t ? void 0 : t.isIntersecting) && o)
                        }), {root: e.root, rootMargin: e.rootMargin, threshold: e.threshold});
                        return t.observe(o.current), () => {
                            o.current && t.unobserve(o.current)
                        }
                    }), [o, e]), t
                })({target: e.target, root: e.root, rootMargin: e.rootMargin, threshold: e.threshold});
                return (0, r.useEffect)((() => {
                    o && n(!0)
                }), [o]), t
            }, ey = e => Kv({target: e.target, rootMargin: e.rootMargin, threshold: e.threshold}) ? e.children : null;
        var ty = n(48826);
        const ny = a.ZP.span.withConfig({componentId: "sc-1fwbxy1-0"})(["", " display:flex;align-items:center;"], (({
                                                                                                                        theme: e,
                                                                                                                        isHighlighted: t,
                                                                                                                        count: n
                                                                                                                    }) => t ? n && n >= 1500 ? (0, a.iv)(["color:", ";"], e.news.palette.comment_many_common) : (0, a.iv)(["color:", ";"], e.news.palette.comment_default_common) : (0, a.iv)(["color:", ";"], e.news.palette.text_sub_lv1_common))),
            oy = a.ZP.span.withConfig({componentId: "sc-1fwbxy1-1"})(["font-size:", ";"], se.px12),
            iy = e => !e.count || e.count <= 0 ? null : (0, o.jsxs)(ny, {
                isHighlighted: e.isHighlighted,
                count: e.count,
                className: e.className,
                children: [(0, o.jsx)(ty.IconCommentBold, {size: 16}), (0, o.jsx)(oy, {children: e.count})]
            }), sy = a.ZP.div.withConfig({componentId: "sc-1ll4vq8-0"})(["display:flex;"]),
            ry = a.ZP.span.withConfig({componentId: "sc-1ll4vq8-1"})(["display:flex;align-items:center;margin:0px 4px;"]),
            ay = a.ZP.img.withConfig({componentId: "sc-1ll4vq8-2"})(["width:", ";height:", ";margin-right:-4px;border:2px solid #aacdff;border-radius:50%;", ""], T, T, (({zIndex: e}) => `z-index: ${e};`)),
            ly = (0, a.ZP)(ay).withConfig({componentId: "sc-1ll4vq8-3"})(["border:1px solid #fff;"]),
            cy = a.ZP.button.withConfig({componentId: "sc-1ll4vq8-4"})(["display:block;text-decoration:none;&:hover{text-decoration:none;opacity:", ";}&:focus{outline:revert;}"], J),
            dy = e => {
                var t, n;
                if (!e.count || e.count <= 0) return null;
                let i = 10;
                const s = null == (t = e.commentatorIconList) ? void 0 : t.map(((e, t) => (i--, (0, o.jsx)(ay, {
                        src: e,
                        zIndex: i,
                        alt: ""
                    }, `commentatorIconList_${t}`)))),
                    r = null == (n = e.userIconList) ? void 0 : n.map(((e, t) => (i--, (0, o.jsx)(ly, {
                        src: e,
                        zIndex: i,
                        alt: ""
                    }, `userIconList_${t}`)))), a = () => {
                        const e = document.getElementById("articleCommentModule");
                        e && e.scrollIntoView(!0)
                    }, l = (0, o.jsx)(iy, {count: e.count, isHighlighted: e.isHighlighted});
                return (0, o.jsxs)(sy, {
                    className: e.className,
                    children: [e.isScrollToCommentModule ? (0, o.jsx)(cy, {
                        "data-cl-params": "_cl_vmodule:cmtmod;_cl_link:count;_cl_position:1;",
                        onClick: a,
                        "aria-label": `コメント${e.count}件`,
                        children: l
                    }) : l, (s || r) && (e.isScrollToCommentModule ? (0, o.jsx)(cy, {
                        "data-cl-params": "_cl_vmodule:cmtmod;_cl_link:profimg;_cl_position:1;",
                        onClick: a,
                        "aria-label": "コメントアイコン",
                        children: (0, o.jsxs)(ry, {children: [s, r]})
                    }) : (0, o.jsxs)(ry, {children: [s, r]}))]
                })
            }, py = e => {
                var t, n;
                const {commentDigest: i} = Af({propertyId: e.propertyId, commentArticleId: e.commentArticleId}),
                    s = null != (t = null == i ? void 0 : i.commentatorComments.map((e => e.profileImageUrl)).slice(0, 3)) ? t : [],
                    r = null == i ? void 0 : i.comments.map((e => e.profileImageUrl)).slice(0, 3 - s.length);
                return (0, o.jsx)(dy, {
                    count: null != (n = null == i ? void 0 : i.totalCount) ? n : null,
                    isHighlighted: e.isHighlighted,
                    className: e.className,
                    commentatorIconList: s,
                    userIconList: r,
                    isScrollToCommentModule: e.isScrollToCommentModule
                })
            }, my = a.ZP.section.withConfig({componentId: "sc-soqa65-0"})(["width:100%;padding-bottom:8px;"]),
            hy = a.ZP.h3.withConfig({componentId: "sc-soqa65-1"})(["", ""], (({isYjApp: e}) => e ? (0, a.iv)(["& > span{color:#444 !important;background-color:#f0f0f0 !important;}"]) : "")),
            uy = a.ZP.div.withConfig({componentId: "sc-soqa65-2"})(["padding:0 12px;margin-top:12px;border-left:2px solid ", ";"], (e => e.theme.news.palette.bor_lv1_pc)),
            gy = a.ZP.div.withConfig({componentId: "sc-soqa65-3"})(["word-break:break-all;"]),
            xy = a.ZP.p.withConfig({componentId: "sc-soqa65-4"})(["margin-right:8px;font-size:", ";font-weight:bold;line-height:1.6;color:", ";"], se.px16, (e => e.theme.news.palette.text_base_common)),
            _y = a.ZP.div.withConfig({componentId: "sc-soqa65-5"})(["display:flex;align-items:center;color:", ";"], (e => e.theme.news.palette.text_sub_lv2_common)),
            fy = a.ZP.span.withConfig({componentId: "sc-soqa65-6"})(["display:flex;align-items:center;font-size:", ";"], se.px12),
            wy = a.ZP.span.withConfig({componentId: "sc-soqa65-7"})(["margin-right:1px;font-size:", ";"], se.px14),
            by = (0, a.ZP)(py).withConfig({componentId: "sc-soqa65-8"})(["margin-left:8px;"]), vy = e => {
                const t = (0, r.useRef)(null);
                return (0, o.jsxs)(my, {
                    ref: t,
                    children: [(0, o.jsx)(hy, {
                        isYjApp: e.isYjApp,
                        children: (0, o.jsx)(wv, {text: "みんなの意見"})
                    }), (0, o.jsxs)(uy, {
                        children: [(0, o.jsxs)(gy, {
                            children: [(0, o.jsx)(xy, {children: e.title}), (0, o.jsxs)(_y, {
                                children: [(0, o.jsxs)(fy, {children: ["投票数：", (0, o.jsx)(wy, {children: lx.convertCommaSeparated(e.totalCount)}), "票"]}), e.allowComment && (0, o.jsx)(ey, {
                                    target: t,
                                    rootMargin: "200px",
                                    children: (0, o.jsx)(by, {
                                        propertyId: "polls_user",
                                        commentArticleId: e.issueId.toString(),
                                        isHighlighted: !0,
                                        isScrollToCommentModule: !1
                                    })
                                })]
                            })]
                        }), 0 === e.totalCount ? (0, o.jsx)(Nv, {
                            status: e.status,
                            pollsUrl: e.pollsUrl,
                            isWidget: e.isWidget,
                            isShowButton: !0
                        }) : e.chart === bv.y.BAR ? (0, o.jsx)(Qv, {
                            status: e.status,
                            choices: e.choices,
                            pollsUrl: e.pollsUrl,
                            isWidget: e.isWidget,
                            isShowButton: !0
                        }) : (0, o.jsx)(Fv, {
                            status: e.status,
                            choices: e.choices,
                            pollsUrl: e.pollsUrl,
                            isWidget: e.isWidget,
                            isShowButton: !0
                        })]
                    })]
                })
            }, yy = (0, a.ZP)($l).withConfig({componentId: "sc-9v2e72-0"})(["padding:0px 16px 16px;"]),
            jy = e => e.issue ? (0, o.jsxs)(yy, {
                children: [(0, o.jsx)(Fl, {
                    id: "viewable_polls",
                    position: "middle",
                    dataClParams: `_cl_vmodule:${e.clVmodule};_cl_link:survey;_cl_position:0;`
                }), (0, o.jsx)(vy, {
                    issueId: e.issue.issueId,
                    title: e.issue.title,
                    status: e.issue.status,
                    chart: e.issue.chart,
                    choices: e.issue.choices,
                    totalCount: e.issue.totalCount,
                    pollsUrl: e.issue.pollsUrl,
                    isWidget: !1,
                    isYjApp: !1,
                    allowComment: e.issue.allowComment
                })]
            }) : null, Iy = () => {
                const e = lr((({pollsModule: e}) => e)), t = e.isEnabledPolls && e.issue ? e.issue : void 0,
                    n = lr((({pageData: e}) => e.pageParam.mtestid));
                return (0, o.jsx)(jy, {issue: t, clVmodule: "v_hdlmod", mtestid: n})
            }, Cy = a.ZP.li.withConfig({componentId: "sc-gluump-0"})(["", " padding:4px 0;font-size:", ";"], pu, se.px14),
            Py = a.ZP.a.withConfig({componentId: "sc-gluump-1"})(["", ""], Zr);

        class ky extends r.Component {
            render() {
                return (0, o.jsx)(Cy, {
                    children: (0, o.jsx)(Py, {
                        href: this.props.url,
                        "data-cl-params": this.props.dataClParams,
                        children: `${this.props.teamHome} vs. ${this.props.teamVisitor}`
                    })
                })
            }
        }

        const Sy = a.ZP.li.withConfig({componentId: "sc-wd1m1l-0"})(["", ""], pu),
            Ty = a.ZP.a.withConfig({componentId: "sc-wd1m1l-1"})(["", ""], Zr);

        class Oy extends r.Component {
            render() {
                return (0, o.jsx)(Sy, {
                    children: (0, o.jsx)(Ty, {
                        href: this.props.url,
                        "data-cl-params": this.props.dataClParams,
                        children: this.props.name
                    })
                })
            }
        }

        var Dy = Object.defineProperty, Ey = Object.defineProperties, Ly = Object.getOwnPropertyDescriptors,
            Zy = Object.getOwnPropertySymbols, zy = Object.prototype.hasOwnProperty,
            $y = Object.prototype.propertyIsEnumerable,
            Ay = (e, t, n) => t in e ? Dy(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Ry = (e, t) => {
                for (var n in t || (t = {})) zy.call(t, n) && Ay(e, n, t[n]);
                if (Zy) for (var n of Zy(t)) $y.call(t, n) && Ay(e, n, t[n]);
                return e
            }, Fy = (e, t) => Ey(e, Ly(t));
        const Uy = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-0"})(["", ""], iu),
            By = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-1"})(["", ""], su),
            Ny = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-2"})(["", ""], ru),
            My = a.ZP.ul.withConfig({componentId: "sc-1mc3z0i-3"})(["", ""], au),
            Vy = a.ZP.li.withConfig({componentId: "sc-1mc3z0i-4"})(["", ""], lu),
            Wy = a.ZP.a.withConfig({componentId: "sc-1mc3z0i-5"})(["", ""], Zr),
            Hy = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-6"})(["display:flex;align-items:center;& + &{margin-top:8px;}"]),
            qy = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-7"})(["& + &{margin-left:8px;}"]),
            Yy = a.ZP.div.withConfig({componentId: "sc-1mc3z0i-8"})(["", ""], cu),
            Jy = a.ZP.ul.withConfig({componentId: "sc-1mc3z0i-9"})(["", ""], du),
            Gy = a.ZP.a.withConfig({componentId: "sc-1mc3z0i-10"})(["display:block;width:70px;padding:3px 0;font-size:", ";font-weight:bold;text-align:center;border:1px solid ", ";border-radius:", ";"], se.px14, (e => e.theme.news.palette.bor_lv2_pc), $);

        class Xy extends r.Component {
            render() {
                if (!this.props.j1League.isShow && !this.props.jLeagueCup.isShow && !this.props.overseas.isShow) return null;
                const e = this.props.j1League.isShow || this.props.jLeagueCup.isShow ? (0, o.jsxs)(Uy, {
                        hasTitle: this.props.hasTitle,
                        children: [(0, o.jsx)(By, {children: (0, o.jsx)(Ny, {children: "スポーツナビ 今日のJリーグ試合情報"})}), (0, o.jsxs)(My, {
                            children: [(0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/jleague/",
                                    "data-cl-params": "_cl_vmodule:jleague;_cl_link:ysports;",
                                    children: "Jリーグトップ"
                                })
                            }), (0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/jleague/category/j1",
                                    "data-cl-params": "_cl_vmodule:jleague;_cl_link:j1;",
                                    children: "J1"
                                })
                            }), (0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/jleague/category/j2",
                                    "data-cl-params": "_cl_vmodule:jleague;_cl_link:j2;",
                                    children: "J2"
                                })
                            }), (0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/jleague/category/jcup",
                                    "data-cl-params": "_cl_vmodule:jleague;_cl_link:jcup;",
                                    children: "Jリーグ杯"
                                })
                            })]
                        })]
                    }) : null, t = this.props.j1League.isShow ? (0, o.jsxs)(Hy, {
                        children: [(0, o.jsx)(qy, {
                            children: (0, o.jsx)(Gy, {
                                href: "https://soccer.yahoo.co.jp/jleague/category/j1",
                                "data-cl-params": "_cl_vmodule:jleague;_cl_link:j1game;_cl_position:t;",
                                children: "J1"
                            })
                        }), (0, o.jsx)(qy, {
                            children: (0, o.jsx)(Jy, {
                                children: this.props.j1League.games ? this.props.j1League.games.map(((e, t) => (0, r.createElement)(ky, Fy(Ry({}, e), {
                                    key: t,
                                    dataClParams: `_cl_vmodule:jleague;_cl_link:j1game;_cl_position:${t + 1};`
                                })))) : null
                            })
                        })]
                    }) : null, n = this.props.jLeagueCup.isShow ? (0, o.jsxs)(Hy, {
                        children: [(0, o.jsx)(qy, {
                            children: (0, o.jsx)(Gy, {
                                href: "https://soccer.yahoo.co.jp/jleague/category/jcup",
                                "data-cl-params": "_cl_vmodule:jleague;_cl_link:jcupgame;_cl_position:t;",
                                children: "Jリーグ杯"
                            })
                        }), (0, o.jsx)(qy, {
                            children: (0, o.jsx)(Jy, {
                                children: this.props.jLeagueCup.games ? this.props.jLeagueCup.games.map(((e, t) => (0, r.createElement)(ky, Fy(Ry({}, e), {
                                    key: t,
                                    dataClParams: `_cl_vmodule:jleague;_cl_link:jcupgame;_cl_position:${t + 1};`
                                })))) : null
                            })
                        })]
                    }) : null,
                    i = this.props.j1League.isShow || this.props.jLeagueCup.isShow ? (0, o.jsxs)(Yy, {children: [t, n]}) : null,
                    s = this.props.overseas.isShow ? (0, o.jsxs)(Uy, {
                        hasTitle: this.props.hasTitle,
                        children: [(0, o.jsx)(By, {children: (0, o.jsx)(Ny, {children: "スポーツナビ 海外サッカー 日本人選手出場試合"})}), (0, o.jsxs)(My, {
                            children: [(0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/ws/",
                                    "data-cl-params": "_cl_vmodule:wldsocc;_cl_link:ysports;",
                                    children: "海外サッカートップ"
                                })
                            }), (0, o.jsx)(Vy, {
                                children: (0, o.jsx)(Wy, {
                                    href: "https://soccer.yahoo.co.jp/ws/japanese/players",
                                    "data-cl-params": "_cl_vmodule:wldsocc;_cl_link:jpplyers;",
                                    children: "日本人選手"
                                })
                            })]
                        })]
                    }) : null, a = this.props.overseas.isShow ? (0, o.jsx)(Yy, {
                        children: (0, o.jsx)(Jy, {
                            children: this.props.overseas.players ? this.props.overseas.players.map(((e, t) => (0, r.createElement)(Oy, Fy(Ry({}, e), {
                                key: t,
                                dataClParams: `_cl_vmodule:wldsocc;_cl_link:player;_cl_position:${t + 1};`
                            })))) : null
                        })
                    }) : null;
                return (0, o.jsxs)(r.Fragment, {
                    children: [this.props.hasTitle ? (0, o.jsx)(ou, {
                        titleText: "サッカー情報",
                        hasPayPay: !1
                    }) : "", e, i, s, a]
                })
            }
        }

        const Qy = a.ZP.section.withConfig({componentId: "sc-1961vhj-0"})(["border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            Ky = e => e.j1League.isShow || e.jLeagueCup.isShow || e.overseas.isShow ? (0, o.jsx)(Qy, {
                children: (0, o.jsx)(Xy, {
                    j1League: e.j1League,
                    jLeagueCup: e.jLeagueCup,
                    overseas: e.overseas,
                    hasTitle: e.hasTitle
                })
            }) : null, ej = () => {
                const e = lr((({soccerJ1League: e}) => e)), t = lr((({soccerJLeagueCup: e}) => e)),
                    n = lr((({soccerOverseas: e}) => e)), i = lr((({articleDetail: e}) => e.flg.hasSoccer)),
                    s = {isShow: e.isShow && i, games: e.games}, r = {isShow: t.isShow && i, games: t.games},
                    a = {isShow: n.isShow && i, players: n.players};
                return (0, o.jsx)(Ky, {j1League: s, jLeagueCup: r, overseas: a, hasTitle: !0})
            }, tj = ({condition: e, children: t}) => (0, o.jsx)("div", {
                style: {visibility: e ? "visible" : "hidden"},
                children: t
            }), nj = (0, i.$j)(((e, t) => {
                var n, o;
                const i = t.page || null;
                return {
                    typeTag: null != (n = t.typeTag) ? n : al(i, e.globalNavigation.currentCategory),
                    spaYadsUpdateCount: null == (o = e.yads) ? void 0 : o.spaYadsUpdateCount,
                    shannonId: e.pageData.yads.shannonId,
                    categoryId: e.pageData.yads.categoryId
                }
            }), {})(rl),
            oj = a.ZP.li.withConfig({componentId: "sc-1t7ra5j-0"})(["line-height:1.3;border-bottom:solid 1px ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            ij = a.ZP.span.withConfig({componentId: "sc-1t7ra5j-1"})(["margin-left:4px;font-size:0;vertical-align:middle;"]),
            sj = a.ZP.div.withConfig({componentId: "sc-1t7ra5j-2"})(["margin-left:8px;"]),
            rj = a.ZP.div.withConfig({componentId: "sc-1t7ra5j-3"})(["position:relative;display:flex;"]),
            aj = a.ZP.span.withConfig({componentId: "sc-1t7ra5j-4"})(["display:block;flex-shrink:0;width:30px;font-family:Arial,Helvetica,sans-serif;font-size:", ";font-weight:bold;color:", ";text-align:center;"], se.px18, (e => e.theme.news.palette.text_base_common)),
            lj = a.ZP.div.withConfig({componentId: "sc-1t7ra5j-5"})(["display:flex;flex-grow:1;"]),
            cj = a.ZP.div.withConfig({componentId: "sc-1t7ra5j-6"})(["flex:1;"]),
            dj = a.ZP.p.withConfig({componentId: "sc-1t7ra5j-7"})(["padding:0 0 4px;font-size:", ";"], se.px13),
            pj = a.ZP.div.withConfig({componentId: "sc-1t7ra5j-8"})(["font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            mj = a.ZP.span.withConfig({componentId: "sc-1t7ra5j-9"})(["margin-right:4px;"]),
            hj = a.ZP.span.withConfig({componentId: "sc-1t7ra5j-10"})(["display:inline-block;margin-right:4px;"]),
            uj = a.ZP.a.withConfig({componentId: "sc-1t7ra5j-11"})(["display:block;padding:8px 0;&:visited{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_subColumn_pc), dj, (e => e.theme.news.palette.link_hover_pc));

        class gj extends r.Component {
            render() {
                const e = this.props.hasVideo && this.props.duration ? this.props.duration : void 0,
                    t = "" !== this.props.thumb.url ? (0, o.jsx)(sj, {
                        children: (0, o.jsx)(f_, {
                            imageSize: m_.SMALL,
                            imageSrc: this.props.thumb.url,
                            resizedImageSrc: this.props.resizedThumbUrl,
                            hasVideo: !!e,
                            videoDuration: e
                        })
                    }) : null, n = this.props.isPay ? (0, o.jsx)(ij, {children: (0, o.jsx)($r, {type: "PAY"})}) : null;
                return (0, o.jsx)(oj, {
                    children: (0, o.jsx)(uj, {
                        href: this.props.newsLink,
                        "data-cl-params": `_cl_vmodule:${this.props.ultSec};_cl_link:title;_cl_position:${this.props.rankingNumber};`,
                        children: (0, o.jsxs)(rj, {children: [null !== this.props.rankingNumber && (0, o.jsx)(aj, {children: this.props.rankingNumber}), (0, o.jsxs)(lj, {children: [(0, o.jsxs)(cj, {children: [(0, o.jsx)(dj, {children: this.props.headline}), (0, o.jsxs)(pj, {children: [(0, o.jsx)(mj, {children: this.props.mediaName}), (0, o.jsxs)("time", {children: [(0, o.jsx)(hj, {children: this.props.dateString}), (0, o.jsx)(hj, {children: this.props.timeString})]}), n]})]}), t]})]})
                    })
                }, this.props.newsLink)
            }
        }

        var xj = Object.defineProperty, _j = Object.defineProperties, fj = Object.getOwnPropertyDescriptors,
            wj = Object.getOwnPropertySymbols, bj = Object.prototype.hasOwnProperty,
            vj = Object.prototype.propertyIsEnumerable,
            yj = (e, t, n) => t in e ? xj(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const jj = a.ZP.h2.withConfig({componentId: "sc-1f41srm-0"})(["padding:4px;font-size:", ";font-weight:bold;border-bottom:1px solid ", ";"], se.px14, (e => e.theme.news.palette.bor_lv2_pc)),
            Ij = a.ZP.a.withConfig({componentId: "sc-1f41srm-1"})(["&:hover{text-decoration:underline;}"]),
            Cj = a.ZP.section.withConfig({componentId: "sc-1f41srm-2"})(["padding:0 0 16px;"]);

        class Pj extends r.Component {
            render() {
                var e;
                if (this.props.isError || !this.props.list) return null;
                const t = this.props.url ? (0, o.jsx)(jj, {
                    children: (0, o.jsx)(Ij, {
                        href: this.props.url,
                        "data-cl-params": `_cl_vmodule:${this.props.ultSec};_cl_link:more;`,
                        children: this.props.title
                    })
                }) : (0, o.jsx)(jj, {children: this.props.title}), n = this.props.yadsDs ? (0, o.jsx)(tj, {
                    condition: null == (e = this.props.isShowAd) || e,
                    children: (0, o.jsx)(nj, {
                        ds: this.props.yadsDs,
                        parentElement: `yads_${this.props.yadsDs}`,
                        isAdWithRightColumnFeed: !0,
                        page: this.props.page,
                        typeTag: this.props.typeTag,
                        isMainColumn: !1,
                        isNoTopBorder: !1,
                        isWithMarginBottom: !1
                    })
                }) : null;
                return (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsx)(Cj, {
                        children: (0, o.jsxs)("div", {
                            id: this.props.ultSec,
                            children: [t, (0, o.jsx)("ol", {
                                children: this.props.list.map((e => {
                                    return (0, r.createElement)(gj, (t = ((e, t) => {
                                        for (var n in t || (t = {})) bj.call(t, n) && yj(e, n, t[n]);
                                        if (wj) for (var n of wj(t)) vj.call(t, n) && yj(e, n, t[n]);
                                        return e
                                    })({}, e), n = {key: e.newsLink, ultSec: this.props.ultSec}, _j(t, fj(n))));
                                    var t, n
                                }))
                            })]
                        })
                    }), n]
                })
            }
        }

        const kj = ({yadsDs: e, typeTag: t}) => {
            const n = lr((({zasshinewsRanking: e}) => e)), i = lr((({pageData: e}) => e.yads.shannonId)),
                s = lr((({pageData: e}) => e.yads.categoryId));
            return (0, o.jsx)(Pj, {
                yadsDs: e,
                typeTag: t,
                title: n.title,
                url: n.url,
                list: n.list,
                isError: !n.list || 0 === n.list.length,
                ultSec: "zcaccr",
                shannonId: i,
                categoryId: s
            })
        };

        class Sj extends r.Component {
            componentDidMount() {
                var e;
                const t = {
                    serviceCode: this.props.serviceCode,
                    appID: this.props.appId,
                    contentID: this.props.contentId,
                    linkCount: this.props.linkCount,
                    dataSource: "shannon",
                    device: "pc",
                    mtestID: null != (e = this.props.mtestID) ? e : ""
                }, n = document.createElement("script");
                n.src = "https://s.yimg.jp/images/slink/directlink/1.0/js/directlink.js", document.body.appendChild(n), n.onload = function () {
                    const e = document.createElement("script");
                    e.innerText = `YAHOO.JP.srch.directlink.onLoad(function(sl) { sl.setParams(${JSON.stringify(t)}); } );`, document.body.appendChild(e)
                }
            }

            render() {
                return null
            }
        }

        const Tj = () => {
            const e = lr((({articleDetail: e}) => e.directLinkAppId)), t = lr((({articleDetail: e}) => e.contentId)),
                n = lr((({pageData: e}) => e.pageParam.mtestid));
            return (0, o.jsx)(Sj, {serviceCode: "nws", linkCount: "5", appId: e, contentId: t, mtestID: n})
        }, Oj = ({yadsDs: e, typeTag: t}) => {
            const n = lr((({textnewsRanking: e}) => e)), i = lr((({pageData: e}) => e.yads.shannonId)),
                s = lr((({pageData: e}) => e.yads.categoryId)), r = !n.list || 0 === n.list.length;
            return (0, o.jsx)(Pj, {
                isError: r,
                title: n.title,
                url: n.url,
                list: n.list,
                ultSec: "accr",
                shannonId: i,
                categoryId: s,
                yadsDs: e,
                typeTag: t
            })
        };
        var Dj = Object.defineProperty, Ej = Object.getOwnPropertySymbols, Lj = Object.prototype.hasOwnProperty,
            Zj = Object.prototype.propertyIsEnumerable,
            zj = (e, t, n) => t in e ? Dj(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;

        class $j extends r.Component {
            componentDidUpdate() {
                window.customLogger && this.props.list && this.props.list.length > 0 && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
            }

            render() {
                return (0, o.jsx)(Pj, ((e, t) => {
                    for (var n in t || (t = {})) Lj.call(t, n) && zj(e, n, t[n]);
                    if (Ej) for (var n of Ej(t)) Zj.call(t, n) && zj(e, n, t[n]);
                    return e
                })({}, this.props))
            }
        }

        const Aj = ({yadsDs: e, typeTag: t}) => {
            const n = lr((({articleOtherData: e}) => e.videotextnewsRanking)),
                i = lr((({pageData: e}) => e.yads.shannonId)), s = lr((({pageData: e}) => e.yads.categoryId));
            return null === n ? (0, o.jsx)($j, {isError: !0, ultSec: "", categoryId: s}) : (0, o.jsx)($j, {
                yadsDs: e,
                typeTag: t,
                shannonId: i,
                categoryId: s,
                title: n.title,
                url: n.url,
                list: n.list,
                isError: !n.list || 0 === n.list.length,
                ultSec: "vaccr"
            })
        };
        var Rj = n(35937), Fj = n.n(Rj);
        const Uj = e => {
                const t = [], n = new Date;
                for (const o of e) {
                    const e = n.getTime() - o.datetime, i = Math.floor(e / 864e5);
                    if (6 < i) break;
                    "pageview" === o.type && (-1 === t.indexOf(i) && t.push(i))
                }
                const o = t.length;
                return 0 === o ? 1 : o
            }, Bj = e => {
                for (const t of e) if ("view" === t.type && "comment" === t.payload.slk) return t.datetime
            }, Nj = () => {
                const e = dn.X.get("YAHOO.JP.News.commentPlugin", 1);
                return void 0 === e || e.isShow ? "0" : "1"
            }, Mj = e => {
                const t = e.filter((e => "click" === e.type && ("cmt" === e.payload.sec || "cmt_usr" === e.payload.sec) && e.payload.slk && -1 !== ["agbtn", "disbtn"].indexOf(e.payload.slk))).length - e.filter((e => "click" === e.type && ("cmt" === e.payload.sec || "cmt_usr" === e.payload.sec) && e.payload.slk && -1 !== ["agbtn_cancel", "disbtn_cancel"].indexOf(e.payload.slk))).length;
                return t > 0 ? t : 0
            },
            Vj = e => e.filter((e => "click" === e.type && ("artcmt_f" === e.payload.sec || "cmt_u_f" === e.payload.sec))).length;

        class Wj extends r.Component {
            constructor() {
                super(...arguments), this.createCustomLoggerInstance = ({isBFCache: e, isPrerendered: t}) => {
                    if (!this.customLogger) return;
                    const n = (e => {
                        const t = jl.Z.getLogs();
                        return {
                            pageViewDaysInLast7days: Uj(t),
                            newestCommentViewTime: Bj(t),
                            userCommentDisplaySetting: "pc" === e.opttype && "detail" === e.pagetype && void 0 !== e.conttype && -1 !== ["topics", "article", "mgznart"].indexOf(e.conttype) ? Nj() : void 0,
                            userCommentVoteCount: Mj(t),
                            userCommentPostCount: Vj(t)
                        }
                    })(this.props.pageParam), o = {
                        visit: n.pageViewDaysInLast7days,
                        cmt_view: n.newestCommentViewTime,
                        cmt_hide: n.userCommentDisplaySetting,
                        cmt_vote: String(n.userCommentVoteCount),
                        cmt_post: String(n.userCommentPostCount),
                        is_bfche: e ? "1" : "0",
                        is_prere: t ? "1" : "0"
                    };
                    this.customLogger.destroy(), this.customLogger.targetClass("tracked_mods").setPageData(Fj()(Object.assign({}, this.props.pageParam, o), (e => void 0 !== e))), this.customLogger.setCustomLoggerCoreConf({
                        click_sendbeacon: !0,
                        viewability: this.props.isEnabledViewable,
                        target_modules_viewability: [],
                        viewability_time: 1e3
                    }), window.customLogger = this.customLogger.initCustomLoggerCore()
                }
            }

            componentDidMount() {
                const e = {};
                this.props.pageParam.mtestid.split("&").forEach((t => {
                    const [n, o] = t.split("=");
                    n && o && (e[n] = o)
                })), this.validatePageData() && window.DSCustomLogger && (this.customLogger = new window.DSCustomLogger.CustomLogger, window.addEventListener("pageshow", (e => {
                    e.persisted && this.createCustomLoggerInstance({isBFCache: !0, isPrerendered: !1})
                })), document.prerendering ? document.addEventListener("prerenderingchange", (() => this.createCustomLoggerInstance({
                    isBFCache: !1,
                    isPrerendered: !0
                })), {once: !0}) : this.createCustomLoggerInstance({isBFCache: !1, isPrerendered: !1}))
            }

            shouldComponentUpdate(e) {
                return this.props.isManualUpdate && void 0 !== e.spaPvCount && this.props.spaPvCount !== e.spaPvCount
            }

            componentDidUpdate() {
                this.createCustomLoggerInstance({isBFCache: !1, isPrerendered: !1})
            }

            componentWillUnmount() {
                this.customLogger && this.customLogger.destroy()
            }

            render() {
                return null
            }

            validatePageData() {
                const e = this.props.pageParam;
                return "" !== e.service && "" !== e.pagetype && "" !== e.opttype && "" !== e.apptype
            }
        }

        var Hj = Object.defineProperty, qj = Object.defineProperties, Yj = Object.getOwnPropertyDescriptors,
            Jj = Object.getOwnPropertySymbols, Gj = Object.prototype.hasOwnProperty,
            Xj = Object.prototype.propertyIsEnumerable,
            Qj = (e, t, n) => t in e ? Hj(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            Kj = (e, t) => {
                for (var n in t || (t = {})) Gj.call(t, n) && Qj(e, n, t[n]);
                if (Jj) for (var n of Jj(t)) Xj.call(t, n) && Qj(e, n, t[n]);
                return e
            };
        const eI = () => {
                const e = lr((({articleDetail: e}) => e.createDateTime)), t = lr((({articleExpertReaction: e}) => e)),
                    n = !!(null == t ? void 0 : t.isSuccess) && t.data.count > 0, i = lr((({pageData: e}) => e.pageParam)),
                    s = lr((({userData: e}) => e.isLogin)), r = lr((({articleDetail: e}) => e.bodyLength)),
                    a = lr((({articleDetail: e}) => e.isPay)),
                    l = lr((({purchaseInfo: e}) => null == e ? void 0 : e.isPurchased)), c = ((e, t) => {
                        if (e) return t ? "purchased" : "pay"
                    })(a, l), d = ff(new Date(e)) && n ? "1" : "0";
                return (0, o.jsx)(Wj, {
                    pageParam: (p = Kj({}, i), m = {
                        status: s ? "login" : "logout",
                        v_pkjp: 1,
                        autoplay: "off",
                        body_cnt: r,
                        payment: c,
                        expick: d
                    }, qj(p, Yj(m))), isEnabledViewable: !0, isManualUpdate: !1
                });
                var p, m
            }, tI = ({typeTag: e}) => {
                const t = lr(ar), n = lr((({pageData: e}) => e.yads.shannonId)), i = lr((({sponsoredAd: e}) => e)),
                    s = lr((({pageData: e}) => e.yads.categoryId)), r = i ? i.yadsCategoryId : s, a = `yads_${t}`;
                return (0, o.jsxs)(wg, {
                    experimentId: "mfn_70886",
                    children: [(0, o.jsx)(_g, {
                        buckets: ["art17ct", "default"],
                        children: (0, o.jsx)(rl, {
                            ds: t,
                            typeTag: e,
                            categoryId: r,
                            shannonId: n,
                            parentElement: a,
                            minHeightForPreventLayoutShift: "250",
                            isMainColumn: !1,
                            isNoTopBorder: !1,
                            isWithMarginBottom: !1
                        })
                    }), (0, o.jsx)(_g, {
                        buckets: ["art17t1", "art17t2"],
                        children: (0, o.jsx)(rl, {
                            ds: t,
                            typeTag: e,
                            categoryId: r,
                            shannonId: n,
                            parentElement: a,
                            minHeightForPreventLayoutShift: "250",
                            isMainColumn: !1,
                            isNoTopBorder: !1,
                            isWithMarginBottom: !1,
                            allowPrerendering: !0
                        })
                    })]
                })
            }, nI = a.ZP.div.withConfig({componentId: "sc-48uw6j-0"})(["margin-left:8px;"]),
            oI = a.ZP.span.withConfig({componentId: "sc-48uw6j-1"})(["margin-left:4px;font-size:0;vertical-align:middle;"]),
            iI = a.ZP.li.withConfig({componentId: "sc-48uw6j-2"})(["line-height:1.3;border-bottom:solid 1px ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            sI = a.ZP.p.withConfig({componentId: "sc-48uw6j-3"})(["padding:0 0 4px;font-size:", ";"], se.px13),
            rI = a.ZP.a.withConfig({componentId: "sc-48uw6j-4"})(["display:block;padding:8px 0;&:visited{color:", ";}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_subColumn_pc), sI, (e => e.theme.news.palette.link_hover_pc)),
            aI = a.ZP.div.withConfig({componentId: "sc-48uw6j-5"})(["position:relative;display:flex;"]),
            lI = a.ZP.div.withConfig({componentId: "sc-48uw6j-6"})(["display:flex;flex-grow:1;"]),
            cI = a.ZP.div.withConfig({componentId: "sc-48uw6j-7"})(["flex:1;"]),
            dI = a.ZP.div.withConfig({componentId: "sc-48uw6j-8"})(["padding-bottom:4px;font-size:", ";color:", ";"], se.px11, (e => e.theme.news.palette.text_base_common)),
            pI = a.ZP.span.withConfig({componentId: "sc-48uw6j-9"})(["font-weight:bold;"]),
            mI = a.ZP.span.withConfig({componentId: "sc-48uw6j-10"})(["letter-spacing:-1px;"]),
            hI = a.ZP.div.withConfig({componentId: "sc-48uw6j-11"})(["font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            uI = a.ZP.span.withConfig({componentId: "sc-48uw6j-12"})(["margin-right:4px;"]),
            gI = a.ZP.span.withConfig({componentId: "sc-48uw6j-13"})(["display:inline-block;margin-right:4px;"]);

        class xI extends r.Component {
            render() {
                var e, t;
                const n = this.props.hasVideo ? this.props.durationString : void 0, i = (0, o.jsx)(nI, {
                    children: (0, o.jsx)(f_, {
                        imageSize: m_.SMALL,
                        imageSrc: null == (e = this.props.thumbnail) ? void 0 : e.url,
                        resizedImageSrc: null != (t = this.props.resizedThumbnailUrl) ? t : null,
                        hasVideo: !!n,
                        videoDuration: n
                    })
                }), s = this.props.isPay ? (0, o.jsx)(oI, {children: (0, o.jsx)($r, {type: "PAY"})}) : null;
                return (0, o.jsx)(iI, {
                    children: (0, o.jsx)(rI, {
                        href: this.props.newsLink,
                        "data-cl-params": `_cl_vmodule:${this.props.ultSec};_cl_link:title;_cl_position:${this.props.pos};type:${this.props.modelType};shcid:${this.props.contentId};`,
                        children: (0, o.jsx)(aI, {children: (0, o.jsxs)(lI, {children: [(0, o.jsxs)(cI, {children: [(0, o.jsx)(sI, {children: this.props.headline}), (0, o.jsxs)(dI, {children: [(0, o.jsx)(pI, {children: this.props.reactionCount}), (0, o.jsx)(mI, {children: "リアクション"})]}), (0, o.jsxs)(hI, {children: [(0, o.jsx)(uI, {children: this.props.mediaName}), (0, o.jsxs)("time", {children: [(0, o.jsx)(gI, {children: this.props.dateString}), (0, o.jsx)(gI, {children: this.props.timeString}), s]})]})]}), i]})})
                    })
                }, this.props.newsLink)
            }
        }

        const _I = a.ZP.h2.withConfig({componentId: "sc-phc6gy-0"})(["padding:4px;font-size:", ";font-weight:bold;border-bottom:1px solid ", ";"], se.px14, (e => e.theme.news.palette.bor_lv2_pc)),
            fI = a.ZP.section.withConfig({componentId: "sc-phc6gy-1"})(["padding:0 0 16px;"]);

        class wI extends r.Component {
            render() {
                if (this.props.isError) return null;
                const e = (0, o.jsx)(_I, {children: this.props.title}),
                    t = this.props.recommendations.map(((e, t) => (0, o.jsx)(xI, {
                        contentId: e.contentId,
                        headline: e.headline,
                        mediaName: e.mediaName,
                        newsLink: e.newsLink,
                        isPay: e.isPay,
                        hasVideo: e.hasVideo,
                        durationString: e.durationString,
                        thumbnail: e.thumbnail,
                        resizedThumbnailUrl: e.resizedThumbnailUrl,
                        reactionCount: e.reactionCount,
                        dateString: e.dateString,
                        timeString: e.timeString,
                        ultSec: this.props.ultSec,
                        modelType: "rec",
                        pos: t + 1
                    }, e.newsLink)));
                return (0, o.jsx)(fI, {
                    children: (0, o.jsxs)("div", {
                        id: this.props.ultSec,
                        children: [e, (0, o.jsx)("ol", {children: t})]
                    })
                })
            }
        }

        const bI = () => {
                const e = lr((({reactionBaseRecommend: e}) => e)),
                    t = !(null == e ? void 0 : e.isViewable) || e.recommendations.length < 5,
                    n = e && !t ? e.recommendations : [];
                return (0, o.jsx)(wI, {
                    title: "こんな記事もリアクションされています",
                    recommendations: n,
                    isError: t,
                    ultSec: "lk_rec"
                })
            },
            vI = a.ZP.li.withConfig({componentId: "sc-4e2sy7-0"})((({isShowAd: e}) => (0, a.iv)(["visibility:", ";border-top:1px solid ", ";"], e ? "visible" : "hidden", (e => e.theme.news.palette.bor_lv1_pc)))),
            yI = a.ZP.div.withConfig({componentId: "sc-4e2sy7-1"})(["", " ", " border-bottom:1px solid ", ";&:empty{margin-top:-1px;}"], Ya, Ja, (e => e.theme.news.palette.bor_lv1_pc));

        class jI extends r.Component {
            componentDidMount() {
                !window.ytManager && window.YadsTimelineManager && (window.ytManager = new window.YadsTimelineManager({
                    yads_ad_ds: this.props.yadsAdDsId,
                    yads_bucket_id: window.miffy_bucket_id || "",
                    yads_type_tag: window.miffy_type_tag || this.props.yadsTypeTag || "",
                    yads_shannon_id: this.props.shannonId,
                    yads_placement_category_id: this.props.categoryId
                })), window.ytManager && window.ytManager.insertAd(`ad${this.props.itemNumber}`)
            }

            render() {
                var e;
                return (0, o.jsx)(vI, {
                    isShowAd: null == (e = this.props.isShowAd) || e,
                    children: (0, o.jsx)(yI, {id: `ad${this.props.itemNumber}`})
                })
            }
        }

        const II = (0, a.iv)(["", ";margin:12px auto;"], (e => Er({
                size: 29,
                color: e.theme.news.palette.loading_gray_common
            }))),
            CI = ((0, a.iv)(["", ""], (e => (0, a.iv)(["position:relative;min-height:calc( ", "px * ", " );padding-bottom:16px;&::before{position:absolute;top:0;left:", "px;z-index:", ";display:block;width:", ";height:100%;content:'';background-image:url('https://s.yimg.jp/images/news-web/all/images/skeletonScreen_thumb.svg'),url('https://s.yimg.jp/images/news-web/all/images/skeletonScreen_list.svg');background-repeat:repeat-y,repeat-y;background-position:0 0,0 ", "px;background-size:", "px ", "px,100% ", "px;animation:skeletonScreenWave 1s infinite;}", ""], e.listHeight, e.articleCount, e.left, E, e.width, e.position, e.position, e.listHeight, e.listHeight, Lr))({
                listHeight: 104,
                articleCount: 10,
                left: 4,
                width: "calc(100% - 8px)",
                position: 95
            })), a.ZP.div.withConfig({componentId: "sc-10wa6pi-0"})(["padding:16px;border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv1_pc))),
            PI = a.ZP.button.withConfig({componentId: "sc-10wa6pi-1"})(["display:block;width:100%;padding:16px 0;font-size:", ";font-weight:bold;color:", ";text-decoration:none;background-color:", ";border:solid 1px ", ";border-radius:", ";&:hover{background-color:", ";}"], se.px14, (e => e.theme.news.palette.btn_simple_text_common), (e => e.theme.news.palette.btn_simple_bg_common), (e => e.theme.news.palette.btn_simple_border_common), A, (e => e.theme.news.palette.bg_hover_normal_pc)),
            kI = a.ZP.div.withConfig({componentId: "sc-10wa6pi-2"})(["", ""], II);

        class SI extends r.Component {
            render() {
                var e, t;
                const n = `_cl_vmodule:${null != (e = this.props.clVmodule) ? e : "load"};_cl_link:${null != (t = this.props.clLink) ? t : "auto"};${void 0 !== this.props.clPosition ? `_cl_position:${this.props.clPosition};` : ""}`;
                return (0, o.jsx)(CI, {
                    className: "newsFeed_more",
                    children: this.props.isFetching ? (0, o.jsx)(kI, {}) : (0, o.jsx)(PI, {
                        onClick: () => this.props.loadMore(),
                        "data-cl-params": n,
                        children: "もっと見る"
                    })
                })
            }
        }

        const TI = a.ZP.span.withConfig({componentId: "sc-jksony-0"})(["margin-top:2px;font-size:", ";color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            OI = (0, a.ZP)(Vp.g).withConfig({componentId: "sc-jksony-1"})(["margin:2px 0 0 8px;"]);

        class DI extends r.Component {
            render() {
                return this.props.commentCount <= 0 ? null : (0, o.jsxs)(r.Fragment, {children: [(0, o.jsx)(OI, {size: 16}), (0, o.jsx)(TI, {children: this.props.commentCount})]})
            }
        }

        const EI = (0, a.ZP)(jg.b).withConfig({componentId: "sc-dvkg80-0"})(["color:", ";"], (e => e.theme.news.palette.text_sub_lv1_common)),
            LI = a.ZP.div.withConfig({componentId: "sc-dvkg80-1"})(["position:absolute;right:0;bottom:0;display:", ";width:100%;"], (({isDislike: e}) => e ? "none" : "block")),
            ZI = a.ZP.div.withConfig({componentId: "sc-dvkg80-2"})(["position:absolute;right:0;bottom:8px;margin-right:14px;visibility:visible;opacity:", ";transition:", ";"], q, oe),
            zI = a.ZP.button.withConfig({componentId: "sc-dvkg80-3"})(["display:block;text-decoration:none;&:hover{text-decoration:none;}"]),
            $I = a.ZP.div.withConfig({componentId: "sc-dvkg80-4"})(["display:", ";justify-content:space-between;padding:12px;font-size:", ";"], (({isDislike: e}) => e ? "flex" : "none"), se.px14),
            AI = a.ZP.button.withConfig({componentId: "sc-dvkg80-5"})(["color:", ";&:hover{color:", ";text-decoration:underline;}"], (e => e.theme.news.palette.link_pc), (e => e.theme.news.palette.link_hover_pc)),
            RI = a.ZP.div.withConfig({componentId: "sc-dvkg80-6"})(["position:absolute;right:8px;bottom:40px;display:", ";&::before,&::after{position:absolute;right:5px;bottom:-5px;width:15px;height:15px;content:' ';transform:rotate(50deg) skew(10deg);}&::before{background-color:", ";border:1px solid #e6e6e6;box-shadow:0 2px 2px 1px rgb(0 0 0 / 10%);}&::after{background-color:", ";}"], (({isDislikeBalloonOpen: e}) => e ? "block" : "none"), (e => e.theme.news.palette.bg_lv1_common), (e => e.theme.news.palette.bg_lv1_common)),
            FI = a.ZP.div.withConfig({componentId: "sc-dvkg80-7"})(["position:relative;font-size:", ";background-color:", ";border:1px solid #e6e6e6;border-radius:", ";box-shadow:0 1px 2px 2px rgb(0 0 0 / 10%);"], se.px16, (e => e.theme.news.palette.bg_lv1_common), A),
            UI = a.ZP.button.withConfig({componentId: "sc-dvkg80-8"})(["padding:8px 12px !important;line-height:1.5;color:", ";"], (e => e.theme.news.palette.link_pc)),
            BI = e => {
                const {addToLocalStorage: t, removeFromLocalStorage: n} = lb();
                return (0, o.jsxs)(r.Fragment, {
                    children: [(0, o.jsxs)(LI, {
                        isDislike: e.isDislike,
                        children: [(0, o.jsx)(ZI, {
                            children: (0, o.jsx)(zI, {
                                id: `newsFeed_item_dislike_toggle_button_id-${e.dislikePos}`,
                                "data-cl-params": `_cl_vmodule:stream;_cl_link:feedback;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                onClick: e.updateDislikeBalloon,
                                "aria-label": "記事の非表示設定を開く",
                                children: (0, o.jsx)(EI, {size: 14})
                            })
                        }), (0, o.jsx)(RI, {
                            isDislikeBalloonOpen: e.isDislikeBalloonOpen,
                            children: (0, o.jsx)(FI, {
                                children: (0, o.jsx)(UI, {
                                    "data-cl-params": `_cl_vmodule:stream;_cl_link:hidelist;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                    onClick: () => {
                                        e.updateDislikeBalloon(), t(e.contentId), e.setDislike(!0)
                                    },
                                    children: "この記事を非表示にする"
                                })
                            })
                        })]
                    }), (0, o.jsxs)($I, {
                        isDislike: e.isDislike,
                        children: [(0, o.jsx)("div", {children: "記事を非表示にしました"}), (0, o.jsx)("div", {
                            children: (0, o.jsx)(AI, {
                                "data-cl-params": `_cl_vmodule:stream;_cl_link:undo;_cl_position:${e.dislikePos};shcid:${e.contentId};`,
                                onClick: () => {
                                    n(e.contentId), e.setDislike(!1)
                                },
                                children: "元に戻す"
                            })
                        })]
                    })]
                })
            };
        var NI = Object.defineProperty, MI = Object.defineProperties, VI = Object.getOwnPropertyDescriptors,
            WI = Object.getOwnPropertySymbols, HI = Object.prototype.hasOwnProperty,
            qI = Object.prototype.propertyIsEnumerable,
            YI = (e, t, n) => t in e ? NI(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            JI = (e, t) => {
                for (var n in t || (t = {})) HI.call(t, n) && YI(e, n, t[n]);
                if (WI) for (var n of WI(t)) qI.call(t, n) && YI(e, n, t[n]);
                return e
            }, GI = (e, t) => MI(e, VI(t)), XI = (e, t) => {
                var n = {};
                for (var o in e) HI.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && WI) for (var o of WI(e)) t.indexOf(o) < 0 && qI.call(e, o) && (n[o] = e[o]);
                return n
            };
        const QI = a.ZP.span.withConfig({componentId: "sc-7fplg-0"})(["margin-left:12px;font-size:0;"]),
            KI = a.ZP.div.withConfig({componentId: "sc-7fplg-1"})(["margin-top:8px;font-size:", ";color:", ";", ""], se.px12, (e => e.theme.news.palette.text_sub_lv2_common), Tr({lines: 1})),
            eC = a.ZP.span.withConfig({componentId: "sc-7fplg-2"})(["&:not(:last-child){margin-right:4px;}"]),
            tC = (0, a.ZP)($l).withConfig({componentId: "sc-7fplg-3"})(["list-style:none;& + &{border-top:1px solid ", ";}"], (e => e.theme.news.palette.bor_lv1_pc)),
            nC = a.ZP.div.withConfig({componentId: "sc-7fplg-4"})(["margin-right:8px;margin-bottom:auto;"]),
            oC = a.ZP.div.withConfig({componentId: "sc-7fplg-5"})(["flex:1 1 0%;"]),
            iC = a.ZP.div.withConfig({componentId: "sc-7fplg-6"})(["margin-bottom:4px;line-height:1.3;word-break:break-all;"]),
            sC = a.ZP.div.withConfig({componentId: "sc-7fplg-7"})(["padding-right:20px;margin-top:8px;font-size:", ";line-height:1.1;color:", ";"], se.px12, (e => e.theme.news.palette.text_sub_lv1_common)),
            rC = a.ZP.div.withConfig({componentId: "sc-7fplg-8"})(["display:", ";"], (({isDislike: e}) => e ? "none" : "block")),
            aC = a.ZP.div.withConfig({componentId: "sc-7fplg-9"})(["display:flex;align-items:center;margin-left:-8px;"]),
            lC = a.ZP.span.withConfig({componentId: "sc-7fplg-10"})(["margin-left:8px;"]),
            cC = a.ZP.time.withConfig({componentId: "sc-7fplg-11"})(["margin-left:8px;"]),
            dC = a.ZP.div.withConfig({componentId: "sc-7fplg-12"})(["margin-left:8px;"]),
            pC = a.ZP.a.withConfig({componentId: "sc-7fplg-13"})(["display:flex;flex-grow:1;align-items:center;padding:12px;text-decoration:none;&:visited{", "{color:", ";}}&:hover{text-decoration:none;background-color:", ";", "{color:", ";text-decoration:underline;}}"], iC, (e => e.theme.news.palette.link_visited_pc), (e => e.theme.news.palette.bg_hover_normal_pc), iC, (e => e.theme.news.palette.link_hover_pc));

        class mC extends r.Component {
            constructor(e) {
                super(e), this.setDislike = e => {
                    this.setState((t => GI(JI({}, t), {isDislike: e})))
                }, this.setHasDisliked = e => {
                    this.setState((t => GI(JI({}, t), {hasDisliked: e})))
                }, this.handlePageShow = e => {
                    e.persisted && void 0 !== this.props.contentId && null !== this.props.contentId && gv(this.props.contentId, this.setHasDisliked)
                }, this.fetchIfAdditionalDataViewIn = () => {
                    "fetching" !== this.props.commentCountFetchStatus && "fetching" !== this.props.expertRecommendCountFetchStatus && null !== this.liElement.current && this.liElement.current.getBoundingClientRect().top - 200 - window.innerHeight < 0 && this.liElement.current.getBoundingClientRect().bottom + 200 > 0 && (window.removeEventListener("scroll", this.fetchIfAdditionalDataViewIn), this.props.fetchArticleAdditionalData())
                }, this.liElement = (0, r.createRef)(), this.state = {isDislike: !1, hasDisliked: !1}
            }

            shouldComponentUpdate(e, t) {
                const n = this.props, {fetchArticleAdditionalData: o, updateDislikeBalloon: i} = n,
                    s = XI(n, ["fetchArticleAdditionalData", "updateDislikeBalloon"]),
                    r = e, {fetchArticleAdditionalData: a, updateDislikeBalloon: l} = r,
                    c = XI(r, ["fetchArticleAdditionalData", "updateDislikeBalloon"]);
                return !Vt()(s, c) || !Vt()(this.state, t)
            }

            componentDidMount() {
                this.liElement.current && null === this.props.commentCount && window.addEventListener("scroll", this.fetchIfAdditionalDataViewIn, {passive: !0}), window.addEventListener("pageshow", this.handlePageShow), gv(this.props.contentId, this.setHasDisliked)
            }

            componentWillUnmount() {
                window.removeEventListener("pageshow", this.handlePageShow)
            }

            render() {
                const e = this.props.hasVideo && this.props.duration ? this.props.duration : void 0,
                    t = this.props.isShowDateTime && this.props.createTime ? (0, o.jsx)(cC, {children: `${this.props.createTime.date} ${this.props.createTime.time}`}) : null,
                    n = this.props.isPay ? (0, o.jsx)(QI, {children: (0, o.jsx)($r, {type: "PAY"})}) : null,
                    i = this.props.hashTag.map(((e, t) => (0, o.jsx)(eC, {children: e}, `hashTag_${t}`))),
                    s = 0 !== this.props.hashTag.length ? (0, o.jsx)(KI, {children: i}) : null,
                    r = {"data-ual-view-type": "list"};
                r["data-ual"] = `${xg({
                    contentId: this.props.contentId,
                    mtestId: this.props.mtestId,
                    device: "pc"
                })};element_id:second-article_detail-recommend`;
                const a = ({}) => "complete" !== this.props.commentCountFetchStatus || "complete" !== this.props.expertRecommendCountFetchStatus ? null : this.props.createUnixTimeStamp && ff(new Date(this.props.createUnixTimeStamp)) && this.props.expertRecommendCount && this.props.expertRecommendCount > 0 ? (0, o.jsx)(dC, {children: (0, o.jsx)(ew, {})}) : this.props.commentCount && this.props.commentCount > 0 ? (0, o.jsx)(DI, {commentCount: this.props.commentCount}) : null;
                return this.state.hasDisliked ? null : (0, o.jsxs)(tC, {
                    forwardedAs: "li",
                    dataAttrs: r,
                    ref: this.liElement,
                    children: [(0, o.jsx)(Fl, {
                        id: `viewable_newsfeed_${this.props.pos}`,
                        position: "bottom",
                        dataClParams: `_cl_vmodule:v_hdltl;_cl_link:stream;_cl_position:${this.props.pos};`
                    }), (0, o.jsx)(rC, {
                        isDislike: this.state.isDislike,
                        children: (0, o.jsxs)(pC, {
                            href: this.props.newsLink,
                            "data-cl-params": this.props.dataClParams,
                            "data-ual-gotocontent": !0,
                            children: [(0, o.jsx)(nC, {
                                children: (0, o.jsx)(f_, {
                                    imageSize: this.props.thumbnailSize,
                                    imageSrc: this.props.thumbUrl || void 0,
                                    resizedImageSrc: this.props.resizedThumbUrl,
                                    hasVideo: !!e,
                                    videoDuration: e
                                })
                            }), (0, o.jsxs)(oC, {children: [(0, o.jsx)(iC, {children: this.props.title}), (0, o.jsxs)(sC, {children: [(0, o.jsxs)(aC, {children: [(0, o.jsx)(a, {}), (0, o.jsx)(lC, {children: this.props.mediaName}), t, n]}), s, this.props.taxIncludedPrice ? (0, o.jsx)(G_, {taxIncludedPrice: this.props.taxIncludedPrice}) : null]})]})]
                        })
                    }), this.props.isPay ? null : (0, o.jsx)(BI, {
                        contentId: this.props.contentId,
                        isDislike: this.state.isDislike,
                        dislikePos: this.props.pos,
                        setDislike: this.setDislike,
                        updateDislikeBalloon: this.props.updateDislikeBalloon,
                        isDislikeBalloonOpen: this.props.isDislikeBalloonOpen
                    })]
                })
            }
        }

        var hC = Object.defineProperty, uC = Object.getOwnPropertySymbols, gC = Object.prototype.hasOwnProperty,
            xC = Object.prototype.propertyIsEnumerable,
            _C = (e, t, n) => t in e ? hC(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const fC = a.ZP.aside.withConfig({componentId: "sc-1fksag6-0"})(["border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc));

        class wC extends r.Component {
            constructor(e) {
                super(e), this.state = {onMount: !1}
            }

            componentDidUpdate() {
                this.props.isError || this.state.onMount || this.setState({onMount: !0}, (() => {
                    const e = () => {
                        (null == window ? void 0 : window.ual) && (window.ual("init", "uamods-recommend"), window.ual("ctrl", "start"))
                    };
                    document.prerendering ? document.addEventListener("prerenderingchange", e, {once: !0}) : e(), window.customLogger && this.props.feedItems.length > 0 && (window.customLogger.isTargetModule("wrapper") ? window.customLogger.refreshModule("wrapper") : window.customLogger.addModules("wrapper", !1, {logViewWithoutLinks: !1}))
                }))
            }

            render() {
                const e = this.props.feedItems.map(((e, t) => this.createFeedItem(e, t, this.props.yadsTagType, this.props.yadsDs, this.props.categoryId, this.props.shannonId))),
                    t = this.props.infiniteFeedIsError ? this.getErrorModuleElement() : (0, o.jsx)(SI, {
                        isFetching: this.props.infiniteFeedIsFetching,
                        loadMore: this.props.fetchMore
                    });
                return this.props.isError ? null : (0, o.jsx)(r.Fragment, {
                    children: (0, o.jsxs)(fC, {
                        className: "articleNewsFeed",
                        id: "newsFeed",
                        children: [(0, o.jsx)(ou, {
                            titleText: "あわせて読みたい記事",
                            hasPayPay: !1
                        }), (0, o.jsxs)($l, {
                            className: "newsFeed",
                            id: "uamods-recommend",
                            children: [(0, o.jsx)(Fl, {
                                id: "viewable_newsfeed_top",
                                position: "top",
                                dataClParams: "_cl_vmodule:v_hdlmod;_cl_link:timeline;"
                            }), (0, o.jsx)("ul", {
                                className: "newsFeed_list",
                                children: e
                            }), this.props.infiniteFeedIsLimit ? null : t]
                        })]
                    })
                })
            }

            createFeedItem(e, t, n, i, s, r) {
                var a, l, c, d, p;
                const m = t + 1;
                switch (e.viewType) {
                    case zi.bW.ARTICLE:
                        const t = e, h = this.getDataClParams({
                            clVmodule: "stream",
                            clLink: "title",
                            index: m,
                            size: "small",
                            isPay: t.isPay,
                            isVideo: !!t.video,
                            type: "smlr",
                            shcId: t.contentId,
                            mitInfo: t.mitInfo
                        });
                        return (0, o.jsx)(mC, {
                            title: t.title,
                            newsLink: t.link,
                            mediaName: t.mediaName,
                            thumbUrl: t.thumbUrl,
                            resizedThumbUrl: t.resizedThumbUrl,
                            hasVideo: !(void 0 === (null == (a = t.video) ? void 0 : a.duration)),
                            duration: null != (c = null == (l = t.video) ? void 0 : l.duration) ? c : null,
                            createUnixTimeStamp: t.createUnixTimeStamp,
                            createTime: t.createTime,
                            isShowDateTime: !0,
                            isPay: t.isPay,
                            taxIncludedPrice: t.taxIncludedPrice,
                            thumbnailSize: m_.MIDDLE,
                            dataClParams: h,
                            pos: m,
                            contentId: t.contentId || "",
                            mtestId: this.props.mtestId,
                            fetchArticleAdditionalData: () => t.contentId && t.createUnixTimeStamp ? this.props.fetchArticleAdditionalData(t.contentId, t.articleType || null, new Date(t.createUnixTimeStamp), this.props.getFeatureToggle("expertComment")) : null,
                            commentCountFetchStatus: t.commentCountFetchStatus,
                            commentCount: null != (d = t.commentCount) ? d : null,
                            expertRecommendCount: t.expertRecommendCount,
                            expertRecommendCountFetchStatus: t.expertRecommendCountFetchStatus,
                            hashTag: t.hashTag,
                            updateDislikeBalloon: () => t.contentId ? this.props.updateDislikeBalloon(t.contentId) : null,
                            isDislikeBalloonOpen: t.isDislikeBalloonOpen
                        }, m);
                    case zi.bW.ARTICLE_WIDE:
                        const u = e, g = this.getDataClParams({
                            clVmodule: "stream",
                            clLink: "title",
                            index: m,
                            size: "large",
                            isPay: u.isPay,
                            isVideo: !!u.video,
                            type: "smlr",
                            shcId: u.contentId,
                            mitInfo: u.mitInfo
                        });
                        return (0, o.jsx)(mC, {
                            title: u.title,
                            newsLink: u.link,
                            mediaName: u.mediaName,
                            thumbUrl: u.wideThumbUrl,
                            resizedThumbUrl: u.resizedWideThumbUrl,
                            hasVideo: !1,
                            duration: null,
                            createUnixTimeStamp: u.createUnixTimeStamp,
                            createTime: u.createTime,
                            isShowDateTime: !0,
                            isPay: u.isPay,
                            taxIncludedPrice: u.taxIncludedPrice,
                            thumbnailSize: m_.WIDE,
                            dataClParams: g,
                            pos: m,
                            contentId: u.contentId || "",
                            mtestId: this.props.mtestId,
                            fetchArticleAdditionalData: () => u.contentId && u.createUnixTimeStamp ? this.props.fetchArticleAdditionalData(u.contentId, t.articleType || null, new Date(u.createUnixTimeStamp), this.props.getFeatureToggle("expertComment")) : null,
                            commentCountFetchStatus: u.commentCountFetchStatus,
                            commentCount: null != (p = u.commentCount) ? p : null,
                            expertRecommendCount: u.expertRecommendCount,
                            expertRecommendCountFetchStatus: u.expertRecommendCountFetchStatus,
                            hashTag: u.hashTag,
                            updateDislikeBalloon: () => u.contentId ? this.props.updateDislikeBalloon(u.contentId) : null,
                            isDislikeBalloonOpen: u.isDislikeBalloonOpen
                        }, m);
                    case zi.bW.AD_INFEED:
                        return (0, o.jsx)(jI, {
                            itemNumber: m,
                            yadsAdDsId: i,
                            yadsTypeTag: n,
                            shannonId: r,
                            categoryId: s
                        }, m);
                    default:
                        return null
                }
            }

            getDataClParams(e) {
                return `${`_cl_vmodule:${e.clVmodule};_cl_link:${e.clLink};_cl_position:${e.index};contsize:${e.size};pay:${e.isPay ? 1 : 0};video:${e.isVideo ? 1 : 0};type:${e.type};`}${e.shcId ? `shcid:${e.shcId};` : ""}${e.mitInfo ? `mit_info:${e.mitInfo};` : ""}`
            }

            getErrorModuleElement() {
                return (0, o.jsx)(Oc, {
                    title: "記事を表示できませんでした。",
                    explain: "しばらく時間をおいて再度お試しください。",
                    additionalComponent: (0, o.jsx)(Cc, {
                        text: "更新する",
                        type: "simple",
                        isDisabled: !1,
                        onClick: () => {
                            this.props.infiniteFeedIsErrorOnClient ? location.reload() : this.props.fetchMore()
                        },
                        useAnchorTag: !1
                    })
                })
            }
        }

        const bC = (vC = wC, e => {
            const t = (0, i.v9)((e => e.featureToggle)), n = (0, r.useCallback)((e => t[e]), [t]);
            return (0, o.jsx)(vC, ((e, t) => {
                for (var n in t || (t = {})) gC.call(t, n) && _C(e, n, t[n]);
                if (uC) for (var n of uC(t)) xC.call(t, n) && _C(e, n, t[n]);
                return e
            })({getFeatureToggle: n}, e))
        });
        var vC;
        const yC = ({yadsTagType: e, yadsDs: t}) => {
                var n;
                const i = Cs(), s = lr((({articleDetail: e}) => e.contentId)), r = lr((({articleDetail: e}) => e.category)),
                    a = lr((({articleOtherData: e}) => e)), l = lr(zs), c = lr((({userToken: e}) => e)),
                    d = null != (n = lr((({pageData: e}) => e.yads.shannonId))) ? n : "",
                    p = lr((({pageData: e}) => e.yads.categoryId)), m = lr((({pageData: e}) => e.pageParam.mtestid)),
                    h = a.isError || null === a.pcArticleRecommend || a.pcArticleRecommend.isError || a.pcArticleRecommend.timeline.items.length < 1;
                return (0, o.jsx)(bC, {
                    contentId: s,
                    feedItems: l,
                    isError: h,
                    yadsTagType: e,
                    yadsDs: t,
                    mtestId: m,
                    infiniteFeedIsError: a.infiniteTimelineItems.isError,
                    infiniteFeedIsFetching: a.infiniteTimelineItems.isFetching,
                    infiniteFeedIsLimit: a.infiniteTimelineItems.isLimit,
                    infiniteFeedIsErrorOnClient: a.infiniteTimelineItems.isErrorOnClient,
                    fetchMore: () => {
                        i(((e, t, n = 0) => o => Is(void 0, null, (function* () {
                            return o(ss(!0)), null === t ? (o(ss(!1)), void o({
                                type: Ni,
                                payload: {statusCode: 400}
                            })) : fetch(`/api/newsFeed/new/${e}?start=${n}&results=60&device=pc&without_ad=true`, {
                                method: "GET",
                                credentials: "same-origin",
                                headers: {UserToken: t}
                            }).then((e => {
                                if (e.ok) return e.json();
                                const t = e.status;
                                return Promise.reject({statusCode: t})
                            })).then((e => {
                                o(ss(!1)), o({type: Bi, payload: {body: e}})
                            })).catch((e => {
                                o(ss(!1)), o({type: Ni, payload: {statusCode: e.statusCode || 400}})
                            }))
                        })))(r, c, a.infiniteTimelineItems.items.length))
                    },
                    fetchArticleAdditionalData: (e, t, n, o) => {
                        i(((e, t, n) => o => Is(void 0, null, (function* () {
                            if ("expert" === t && !n) return;
                            if (null === t) return;
                            o(rs(e, "fetching"));
                            const i = function (e) {
                                switch (e) {
                                    case"news":
                                        return "news_user";
                                    case"polls":
                                        return "polls_user";
                                    case"expert":
                                        return "expert_user";
                                    default:
                                        return e
                                }
                            }(t);
                            return fetch(`/api/public/comment-count/properties/${i}/articles/${e}`, {
                                method: "GET",
                                credentials: "same-origin"
                            }).then((e => {
                                if (e.ok) return e.json();
                                const t = e.status;
                                return Promise.reject({statusCode: t})
                            })).then((t => {
                                o({type: Ai, payload: js(ys({}, t), {contentId: e})})
                            })).finally((() => {
                                o(rs(e, "complete"))
                            }))
                        })))(e, t, o)), ff(n) && i((e => t => Is(void 0, null, (function* () {
                            t(as(e, "fetching"));
                            try {
                                const n = yield ls.L.api.public.article_expert_reaction._articleId(e).$get({config: {credentials: "same-origin"}});
                                t({type: Fi, payload: js(ys({}, n), {contentId: e})})
                            } catch (e) {
                                if (e instanceof is.B && void 0 !== e.status) return Promise.reject({statusCode: e.status})
                            } finally {
                                t(as(e, "complete"))
                            }
                        })))(e))
                    },
                    updateDislikeBalloon: e => {
                        i((e => ({type: Vi, payload: {contentId: e}}))(e))
                    },
                    shannonId: d,
                    categoryId: p
                })
            },
            jC = a.ZP.div.withConfig({componentId: "sc-1y0aijw-0"})(["padding:12px 0 4px;border-top:1px solid ", ";"], (e => e.theme.news.palette.bor_lv2_pc)),
            IC = e => (0, o.jsx)(jC, {
                children: (0, o.jsx)(rl, {
                    typeTag: e.yadsTagType,
                    ds: e.yadsDs,
                    parentElement: `yads_${e.yadsDs}`,
                    shannonId: e.shannonId,
                    categoryId: e.categoryId,
                    minHeightForPreventLayoutShift: e.minHeightForPreventLayoutShift,
                    isMainColumn: !1,
                    isNoTopBorder: !1,
                    isWithMarginBottom: !1
                })
            }), CC = a.ZP.div.withConfig({componentId: "sc-16jacoc-0"})(["display:flex;justify-content:space-around;"]),
            PC = e => (0, o.jsx)(r.Fragment, {
                children: (0, o.jsxs)(CC, {
                    children: [(0, o.jsx)(rl, {
                        typeTag: e.yadsTagType,
                        ds: e.leftYadsDs,
                        parentElement: `yads_${e.leftYadsDs}`,
                        shannonId: e.shannonId,
                        categoryId: e.categoryId,
                        minHeightForPreventLayoutShift: "250",
                        isMainColumn: !1,
                        isNoTopBorder: !1,
                        isWithMarginBottom: !1
                    }), (0, o.jsx)(rl, {
                        typeTag: e.yadsTagType,
                        ds: e.rightYadsDs,
                        parentElement: `yads_${e.rightYadsDs}`,
                        shannonId: e.shannonId,
                        categoryId: e.categoryId,
                        minHeightForPreventLayoutShift: "250",
                        isMainColumn: !1,
                        isNoTopBorder: !1,
                        isWithMarginBottom: !1
                    })]
                })
            }), kC = (0, a.iv)(["position:relative;"]), SC = e => (0, o.jsxs)(r.Fragment, {
                children: [(0, o.jsx)(mr, {children: (0, o.jsx)(wl, {})}), (0, o.jsxs)(gr, {
                    overWriteStyle: kC,
                    children: [(0, o.jsx)(Pr, {}), (0, o.jsx)(Cr, {}), (0, o.jsx)(Ma, {}), (0, o.jsx)(Wr, {}), (0, o.jsx)(dw, {}), (0, o.jsx)(bl, {children: (0, o.jsx)(Iy, {})}), (0, o.jsx)(yl, {
                        children: (0, o.jsx)(PC, {
                            leftYadsDs: "86813_284715",
                            rightYadsDs: "86813_284714",
                            yadsTagType: e.yadsTagType,
                            shannonId: e.shannonId,
                            categoryId: e.categoryId
                        })
                    }), (0, o.jsx)(_v, {}), (0, o.jsx)(yl, {
                        children: (0, o.jsx)(IC, {
                            yadsDs: "20806_10381",
                            yadsTagType: e.yadsTagType,
                            shannonId: e.shannonId,
                            categoryId: e.categoryId,
                            minHeightForPreventLayoutShift: "200"
                        })
                    }), (0, o.jsxs)(bl, {children: [(0, o.jsx)(Fu, {}), (0, o.jsx)(cg, {}), (0, o.jsx)(ej, {})]}), (0, o.jsx)(Oh, {usedIn: "article"}), (0, o.jsx)(bl, {
                        children: (0, o.jsx)(yC, {
                            yadsTagType: e.yadsTagType,
                            yadsDs: "71913_258678"
                        })
                    }), (0, o.jsx)(bl, {children: (0, o.jsx)(ob, {})})]
                }), (0, o.jsxs)(fr, {
                    hasOverlayAd: !0,
                    children: [(0, o.jsx)(tI, {typeTag: e.yadsTagType}), (0, o.jsxs)(wg, {
                        experimentId: "mfn_70886",
                        children: [(0, o.jsx)(_g, {
                            buckets: ["art17ct", "default"],
                            children: (0, o.jsx)(cl, {
                                ds: "30357_208277",
                                parentElement: "yads_30357_208277",
                                typeTag: e.yadsTagType,
                                minHeightForPreventLayoutShift: "250",
                                isMainColumn: !1,
                                isNoTopBorder: !1,
                                isWithMarginBottom: !1
                            })
                        }), (0, o.jsx)(_g, {
                            buckets: ["art17t1", "art17t2"],
                            children: (0, o.jsx)(cl, {
                                ds: "30357_208277",
                                parentElement: "yads_30357_208277",
                                typeTag: e.yadsTagType,
                                minHeightForPreventLayoutShift: "250",
                                isMainColumn: !1,
                                isNoTopBorder: !1,
                                isWithMarginBottom: !1,
                                allowPrerendering: !0
                            })
                        })]
                    }), (0, o.jsx)(Ha, {}), (0, o.jsx)(Oj, {
                        yadsDs: "99604_135693",
                        typeTag: e.yadsTagType
                    }), (0, o.jsx)(Wa, {}), (0, o.jsx)(cl, {
                        ds: "26744_15363",
                        parentElement: "yads_26744_15363",
                        typeTag: e.yadsTagType,
                        minHeightForPreventLayoutShift: "250",
                        isMainColumn: !1,
                        isNoTopBorder: !1,
                        isWithMarginBottom: !1
                    }), (0, o.jsx)(kj, {
                        yadsDs: "54879_45284",
                        typeTag: e.yadsTagType
                    }), (0, o.jsxs)(bl, {
                        children: [(0, o.jsx)(Va, {}), (0, o.jsx)(Aj, {
                            yadsDs: "91302_196830",
                            typeTag: e.yadsTagType
                        }), (0, o.jsx)(Fw, {}), (0, o.jsx)(bI, {})]
                    }), (0, o.jsx)(cl, {
                        ds: "57876_31261",
                        parentElement: "yads_57876_31261",
                        typeTag: e.yadsTagType,
                        minHeightForPreventLayoutShift: "250",
                        isMainColumn: !1,
                        isNoTopBorder: !1,
                        isWithMarginBottom: !1
                    })]
                }), (0, o.jsx)(Uh, {additionalBottomOffsetPx: 90}), (0, o.jsxs)(mr, {children: [(0, o.jsx)(eI, {}), (0, o.jsx)(gl, {}), (0, o.jsx)(xl, {}), (0, o.jsx)(Eh, {}), (0, o.jsx)(Tj, {}), (0, o.jsx)(hl, {}), (0, o.jsx)(sb, {}), (0, o.jsx)(Cl, {})]})]
            }), TC = () => {
                const e = lr((({pageData: e}) => {
                    var t;
                    return null != (t = e.pageParam.vtestid) ? t : ""
                })), t = lr((({pageData: e}) => e.yads.shannonId)), n = lr((({pageData: e}) => e.yads.categoryId));
                return (0, o.jsx)(SC, {yadsTagType: e, shannonId: t, categoryId: n})
            };
        var OC = Object.defineProperty, DC = Object.defineProperties, EC = Object.getOwnPropertyDescriptors,
            LC = Object.getOwnPropertySymbols, ZC = Object.prototype.hasOwnProperty,
            zC = Object.prototype.propertyIsEnumerable,
            $C = (e, t, n) => t in e ? OC(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
        const AC = a.ZP.div.withConfig({componentId: "sc-ojfqy8-0"})(["", " ", ""], Ya, Ja),
            RC = a.ZP.div.withConfig({componentId: "sc-ojfqy8-1"})(["", " position:fixed;bottom:0;z-index:", ";width:100%;text-align:center;background-color:rgb(0 0 0 / 30%);border-bottom:medium solid #000;border-bottom-width:calc(env(safe-area-inset-bottom));transform:translateZ(0);@media print{display:none;}iframe{margin:0 auto;}"], (({isShown: e}) => e ? "visibility: visible;" : "visibility: hidden;"), L),
            FC = e => {
                const t = `yads_${e.ds}`, [n, i] = (0, r.useState)(!1), [s, a] = (0, r.useState)(!1),
                    l = (0, r.useCallback)((() => {
                        if (!window.yadsRequestAsync) return;
                        let n = {
                            yads_ad_ds: e.ds,
                            yads_parent_element: t,
                            yads_bucket_id: window.miffy_bucket_id || "",
                            yads_type_tag: window.miffy_type_tag || "",
                            yads_placement_category_id: e.categoryId
                        };
                        var o, i;
                        e.shannonId && (o = ((e, t) => {
                            for (var n in t || (t = {})) ZC.call(t, n) && $C(e, n, t[n]);
                            if (LC) for (var n of LC(t)) zC.call(t, n) && $C(e, n, t[n]);
                            return e
                        })({}, n), i = {yads_shannon_id: e.shannonId}, n = DC(o, EC(i))), window.yadsRequestAsync(n)
                    }), [e, t]);
                return (0, r.useEffect)((() => {
                    const t = document.getElementById(e.lrecElementId), n = new IntersectionObserver((e => {
                        var t;
                        1 === (null == (t = e[0]) ? void 0 : t.intersectionRatio) ? a(!0) : a(!1)
                    }), {threshold: 1, rootMargin: "9999% 0px -100% 0px"});
                    t && n.observe(t)
                }), [e.lrecElementId]), (0, r.useEffect)((() => {
                    !n && s && (l(), i(!0))
                }), [n, s, l]), (0, o.jsx)(RC, {isShown: s, children: (0, o.jsx)(AC, {id: t})})
            }, UC = () => {
                const e = lr((({pageData: e}) => e.yads.shannonId)), t = lr((({pageData: e}) => e.yads.categoryId)),
                    n = `yads_${lr(ar)}`;
                return (0, o.jsx)(FC, {ds: "92617_605855", shannonId: e, categoryId: t, lrecElementId: n})
            }, BC = window.__PRELOADED_STATE__, NC = cr(BC);
        delete window.__PRELOADED_STATE__;
        const MC = document.getElementById("contents");
        (0, s.a)(MC, (0, o.jsx)(i.zt, {
            store: NC,
            serverState: BC,
            children: (0, o.jsx)(tt, {children: (0, o.jsx)(TC, {})})
        }));
        (0, s.s)(document.getElementById("highlight")).render((0, o.jsx)(Ge, {
            serviceCode: "nws",
            time: Math.floor((new Date).getTime() / 6e5).toString(),
            targetClassName: "highLightSearchTarget"
        }));
        const VC = document.getElementById("searchBoxWrap-header");
        (0, s.a)(VC, (0, o.jsx)(i.zt, {
            store: NC,
            serverState: BC,
            children: (0, o.jsx)(tt, {children: (0, o.jsx)(Ne, {})})
        }));
        const WC = document.getElementById("logger");
        (0, s.a)(WC, (0, o.jsx)(i.zt, {
            store: NC,
            serverState: BC,
            children: (0, o.jsx)(tt, {children: (0, o.jsx)(Je, {})})
        }));
        (0, s.s)(document.getElementById("overlayAd")).render((0, o.jsx)(i.zt, {
            store: NC,
            serverState: BC,
            children: (0, o.jsx)(tt, {children: (0, o.jsx)(UC, {})})
        }))
    }
}]);