;
(self.AMP = self.AMP || []).push({
    m: 0,
    v: "2205051832000",
    n: "amp-ad",
    ev: "0.1",
    l: !0,
    f: function(t, e) {
        ! function() {
            function e(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function r(t, r) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (n) return (n = n.call(t)).next.bind(n); if (Array.isArray(t) || (n = function(t, r) { if (t) { if ("string" == typeof t) return e(t, r); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, r) : void 0 } }(t)) || r && t && "number" == typeof t.length) { n && (t = n); var i = 0; return function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }
            var n;

            function i() { return n || (n = Promise.resolve(void 0)) }
            var a = function() {
                var t = this;
                this.promise = new Promise((function(e, r) { t.resolve = e, t.reject = r }))
            };

            function s(t, e) { return (s = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && s(t, e)
            }

            function c(t) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function p(t) { return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function d(t, e) { if (e && ("object" === p(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) }

            function u(t) {
                var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
                return function() {
                    var r, n = c(t);
                    if (e) {
                        var i = c(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return d(this, r)
                }
            }
            var m, h = Object.prototype,
                l = h.hasOwnProperty;

            function f(t) { var e = Object.create(null); return t && Object.assign(e, t), e }

            function v(t, e) { return l.call(t, e) }
            h.toString;
            var g = Array.isArray;

            function b(t) { return JSON.parse(t) }

            function j(t, e) { try { return b(t) } catch (t) { return null == e || e(t), null } }
            var y, w = JSON.parse('{"_ping_":{"renderStartImplemented":true,"clientIdScope":"_PING_","consentHandlingOverride":true},"1wo":{},"24smi":{"prefetch":"https://jsn.24smi.net/smi.js","preconnect":"https://data.24smi.net"},"4wmarketplace":{"renderStartImplemented":true},"a8":{"prefetch":"https://statics.a8.net/amp/ad.js","renderStartImplemented":true},"a9":{"prefetch":"https://z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"},"accesstrade":{"prefetch":"https://h.accesstrade.net/js/amp/amp.js"},"adagio":{"prefetch":"https://js-ssl.neodatagroup.com/adagio_amp.js","preconnect":["https://ad-aws-it.neodatagroup.com","https://tracker.neodatagroup.com"],"renderStartImplemented":true},"adblade":{"prefetch":"https://web.adblade.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.adblade.com","https://static.adblade.com"],"renderStartImplemented":true},"adbutler":{"prefetch":"https://servedbyadbutler.com/app.js"},"adenza":{"renderStartImplemented":true},"adform":{},"adfox":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"adgeneration":{"prefetch":"https://i.socdm.com/sdk/js/adg-script-loader.js"},"adglare":{"renderStartImplemented":true},"adhese":{"renderStartImplemented":true},"adincube":{"renderStartImplemented":true},"adition":{},"adman":{},"admanmedia":{"renderStartImplemented":true},"admixer":{"renderStartImplemented":true,"preconnect":["https://inv-nets.admixer.net","https://cdn.admixer.net"]},"adnuntius":{"prefetch":"https://cdn.adnuntius.com/adn.js","renderStartImplemented":true},"adocean":{"consentHandlingOverride":true},"adop":{},"adpicker":{"renderStartImplemented":true},"adplugg":{"prefetch":"https://www.adplugg.com/serve/js/ad.js","renderStartImplemented":true},"adpon":{"prefetch":"https://ad.adpon.jp/amp.js","clientIdScope":"AMP_ECID_ADPON"},"adpushup":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.adpushup.com"},"adreactor":{},"ads2bid":{"renderStartImplemented":true},"adsensor":{"prefetch":"https://wfpscripts.webspectator.com/amp/adsensor-amp.js","clientIdScope":"amp_ecid_adensor","renderStartImplemented":true},"adservsolutions":{},"adskeeper":{"renderStartImplemented":true,"preconnect":["https://jsc.adskeeper.com","https://servicer.adskeeper.com","https://s-img.adskeeper.com"]},"adsloom":{"clientIdScope":"AMP_ECID_ADSLOOM"},"adsnative":{"prefetch":"https://static.adsnative.com/static/js/render.v1.js","preconnect":"https://api.adsnative.com"},"adspeed":{"preconnect":"https://g.adspeed.net","renderStartImplemented":true},"adspirit":{},"adstir":{"prefetch":"https://js.ad-stir.com/js/adstir_async.js","preconnect":"https://ad.ad-stir.com"},"adstyle":{"prefetch":"https://widgets.ad.style/amp.js","preconnect":["https://w.ad.style"]},"adtech":{"prefetch":"https://s.aolcdn.com/os/ads/adsWrapper3.js","preconnect":["https://mads.at.atwola.com","https://aka-cdn.adtechus.com"]},"adtelligent":{"preconnect":["https://s.adtelligent.com"],"renderStartImplemented":true},"adthrive":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js"],"preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"adunity":{"preconnect":["https://content.adunity.com"],"renderStartImplemented":true},"aduptech":{"prefetch":"https://s.d.adup-tech.com/jsapi","preconnect":["https://d.adup-tech.com","https://m.adup-tech.com","https://v.adup-tech.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"adventive":{"preconnect":["https://ads.adventive.com","https://amp.adventivedev.com"],"renderStartImplemented":true},"adverline":{"prefetch":"https://ads.adverline.com/richmedias/amp.js","preconnect":["https://adnext.fr"],"renderStartImplemented":true},"adverticum":{},"advertserve":{"renderStartImplemented":true},"adyoulike":{"consentHandlingOverride":true,"prefetch":"https://fo-static.omnitagjs.com/amp.js","renderStartImplemented":true},"adzerk":{},"affiliateb":{"prefetch":"https://track.affiliate-b.com/amp/a.js","renderStartImplemented":true},"aja":{"prefetch":["https://cdn.as.amanad.adtdp.com/sdk/asot-amp.js","https://cdn.as.amanad.adtdp.com/sdk/asot-v2.js"],"preconnect":["https://ad.as.amanad.adtdp.com"]},"appvador":{"prefetch":["https://cdn.apvdr.com/js/VastAdUnit.min.js","https://cdn.apvdr.com/js/VideoAd.min.js","https://cdn.apvdr.com/js/VideoAd3PAS.min.js","https://cdn.apvdr.com/js/VideoAdAutoPlay.min.js","https://cdn.apvdr.com/js/VideoAdNative.min.js"],"renderStartImplemented":true},"amoad":{"prefetch":["https://j.amoad.com/js/a.js","https://j.amoad.com/js/n.js"],"preconnect":["https://d.amoad.com","https://i.amoad.com","https://m.amoad.com","https://v.amoad.com"]},"amplified":{"preconnect":"https://srv.clickfuse.com","renderStartImplemented":true},"andbeyond":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":"https://cdn.andbeyond.media"},"aniview":{"renderStartImplemented":true},"anyclip":{"prefetch":"https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre.js","preconnect":["https://trafficmanager.anyclip.com","https://lreprx-server.anyclip.com"],"renderStartImplemented":true},"appnexus":{"prefetch":"https://acdn.adnxs.com/ast/ast.js","preconnect":"https://ib.adnxs.com","renderStartImplemented":true},"atomx":{"prefetch":"https://s.ato.mx/p.js"},"avantisvideo":{"renderStartImplemented":true},"beaverads":{"renderStartImplemented":true},"beopinion":{"prefetch":"https://widget.beop.io/sdk.js","preconnect":["https://t.beop.io","https://s.beop.io","https://data.beop.io"],"renderStartImplemented":true},"bidtellect":{},"blade":{"prefetch":"https://sdk.streamrail.com/blade/sr.blade.js","renderStartImplemented":true},"brainy":{},"bringhub":{"renderStartImplemented":true,"preconnect":["https://static.bh-cdn.com","https://core-api.bringhub.io"]},"broadbandy":{"renderStartImplemented":true},"broadstreetads":{"prefetch":"https://cdn.broadstreetads.com/init-2.min.js","renderStartImplemented":true},"byplay":{},"caajainfeed":{"prefetch":["https://cdn.amanad.adtdp.com/sdk/ajaamp.js"],"preconnect":["https://ad.amanad.adtdp.com"]},"capirs":{"renderStartImplemented":true},"caprofitx":{"prefetch":["https://cdn.caprofitx.com/pfx.min.js","https://cdn.caprofitx.com/tags/amp/profitx_amp.js"],"preconnect":"https://ad.caprofitx.adtdp.com"},"cedato":{"renderStartImplemented":true},"chargeads":{},"colombia":{"prefetch":"https://static.clmbtech.com/ad/commons/js/colombia-amp.js"},"colombiafeed":{"prefetch":"https://static.clmbtech.com/c1e/static/themes/js/colombiafeed-amp.js"},"conative":{"renderStartImplemented":true},"connatix":{"renderStartImplemented":true},"contentad":{},"criteo":{"prefetch":"https://static.criteo.net/js/ld/publishertag.js","preconnect":"https://cas.criteo.com"},"csa":{"prefetch":"https://www.google.com/adsense/search/ads.js"},"dable":{"preconnect":["https://static.dable.io","https://api.dable.io","https://images.dable.io"],"renderStartImplemented":true},"dex":{"renderStartImplemented":true},"digiteka":{"renderStartImplemented":true},"directadvert":{"renderStartImplemented":true},"distroscale":{"preconnect":["https://c.jsrdn.com","https://s.jsrdn.com","https://i.jsrdn.com"],"renderStartImplemented":true},"dotandads":{"prefetch":"https://amp.ad.dotandad.com/dotandadsAmp.js","preconnect":"https://bal.ad.dotandad.com"},"dynad":{"preconnect":["https://t.dynad.net","https://tm.jsuol.com.br"]},"eadv":{"renderStartImplemented":true,"clientIdScope":"AMP_ECID_EADV","prefetch":["https://www.eadv.it/track/esr.min.js","https://www.eadv.it/track/ead.min.js"]},"empower":{"prefetch":"https://cdn.empower.net/sdk/amp-ad.min.js","renderStartImplemented":true},"engageya":{},"epeex":{},"eplanning":{"prefetch":"https://us.img.e-planning.net/layers/epl-amp.js"},"exco":{"renderStartImplemented":true},"ezoic":{"prefetch":["https://www.googletagservices.com/tag/js/gpt.js","https://g.ezoic.net/ezoic/ampad.js"],"clientIdScope":"AMP_ECID_EZOIC","consentHandlingOverride":true,"renderStartImplemented":true},"f1e":{"prefetch":"https://img.ak.impact-ad.jp/util/f1e_amp.min.js"},"f1h":{"preconnect":"https://img.ak.impact-ad.jp","renderStartImplemented":true},"fake":{},"fake-delayed":{"renderStartImplemented":true},"feedad":{"clientIdScope":"__fa_amp","prefetch":"https://web.feedad.com/sdk/feedad-async.js","renderStartImplemented":true,"fullWidthHeightRatio":1.7777777777777777,"consentHandlingOverride":true},"felmat":{"prefetch":"https://t.felmat.net/js/fmamp.js","renderStartImplemented":true},"finative":{},"firstimpression":{"prefetch":"https://ecdn.firstimpression.io/static/js/fiamp.js","preconnect":"https://cdn.firstimpression.io","renderStartImplemented":true,"consentHandlingOverride":true},"flite":{},"fluct":{"prefetch":["https://pdn.adingo.jp/p.js"],"preconnect":["https://cdn-fluct.sh.adingo.jp","https://sh.adingo.jp","https://i.adingo.jp"]},"forkmedia":{"renderStartImplemented":true},"freewheel":{"prefetch":"https://cdn.stickyadstv.com/prime-time/fw-amp.min.js","renderStartImplemented":true},"fusion":{"prefetch":"https://assets.adtomafusion.net/fusion/latest/fusion-amp.min.js"},"gecko":{},"genieessp":{"prefetch":"https://js.gsspcln.jp/l/amp.js"},"giraff":{"renderStartImplemented":true},"glomex":{"prefetch":"https://player.glomex.com/integration/1/amp-embed.js"},"gmossp":{"prefetch":"https://cdn.gmossp-sp.jp/ads/amp.js"},"gumgum":{"prefetch":"https://js.gumgum.com/slot.js","renderStartImplemented":true},"holder":{"prefetch":"https://i.holder.com.ua/js2/holder/ajax/ampv1.js","preconnect":"https://h.holder.com.ua","renderStartImplemented":true},"ibillboard":{},"idealmedia":{"renderStartImplemented":true,"preconnect":["https://jsc.idealmedia.io","https://servicer.idealmedia.io","https://s-img.idealmedia.io/"]},"imedia":{"prefetch":"https://i.imedia.cz/js/im3.js","renderStartImplemented":true},"imobile":{"prefetch":"https://spamp.i-mobile.co.jp/script/amp.js","preconnect":"https://spad.i-mobile.co.jp"},"imonomy":{"renderStartImplemented":true},"improvedigital":{},"industrybrains":{"prefetch":"https://web.industrybrains.com/js/ads/async/show.js","preconnect":["https://staticd.cdn.industrybrains.com","https://static.industrybrains.com"],"renderStartImplemented":true},"inmobi":{"prefetch":"https://cf.cdn.inmobi.com/ad/inmobi.secure.js","renderStartImplemented":true},"innity":{"prefetch":"https://cdn.innity.net/admanager.js","preconnect":"https://as.innity.com","renderStartImplemented":true},"insticator":{"preconnect":"https://d3lcz8vpax4lo2.cloudfront.net","renderStartImplemented":true},"insurads":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":["https://tpc.googlesyndication.com","https://adservice.google.com","https://cdn.insurads.com","https://services.insurads.com","https://messaging.insurads.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"invibes":{"prefetch":"https://k.r66net.com/GetAmpLink","renderStartImplemented":true,"consentHandlingOverride":true},"iprom":{"prefetch":"https://cdn.ipromcloud.com/ipromNS.js"},"ix":{"prefetch":["https://js-sec.indexww.com/apl/amp.js"],"preconnect":"https://as-sec.casalemedia.com","renderStartImplemented":true},"jubna":{},"kargo":{},"ketshwa":{},"kiosked":{"renderStartImplemented":true},"jioads":{"renderStartImplemented":true},"jixie":{"prefetch":["https://scripts.jixie.media/jxamp.min.js"],"clientIdScope":"__jxamp","clientIdCookieName":"_jx","renderStartImplemented":true},"kixer":{"prefetch":"https://cdn.kixer.com/ad/load.js","renderStartImplemented":true},"kuadio":{},"lentainform":{"renderStartImplemented":true,"preconnect":["https://jsc.lentainform.com","https://servicer.lentainform.com","https://s-img.lentainform.com"]},"ligatus":{"prefetch":"https://ssl.ligatus.com/render/ligrend.js","renderStartImplemented":true},"lockerdome":{"prefetch":"https://cdn2.lockerdomecdn.com/_js/amp.js","renderStartImplemented":true},"logly":{"preconnect":["https://l.logly.co.jp","https://cdn.logly.co.jp"],"renderStartImplemented":true},"loka":{"prefetch":"https://loka-cdn.akamaized.net/scene/amp.js","preconnect":["https://scene-front.lokaplatform.com","https://loka-materials.akamaized.net"],"renderStartImplemented":true},"luckyads":{"renderStartImplemented":true},"macaw":{"renderStartImplemented":true},"mads":{"prefetch":"https://eu2.madsone.com/js/tags.js"},"mantis-display":{"prefetch":"https://assets.mantisadnetwork.com/mantodea.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://res.cloudinary.com","https://resize.mantisadnetwork.com"]},"marfeel":{"prefetch":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","preconnect":["https://live.mrf.io","https://tpc.googlesyndication.com","https://fastlane.rubiconproject.com","https://htlb.casalemedia.com","https://prg.smartadserver.com","https://ib.adnxs.com","https://bidder.criteo.com","https://marfeel-d.openx.net","https://ice.360yield.com","https://mbid.marfeelrev.com","https://adservice.google.com"],"consentHandlingOverride":true},"mantis-recommend":{"prefetch":"https://assets.mantisadnetwork.com/recommend.min.js","preconnect":["https://mantodea.mantisadnetwork.com","https://resize.mantisadnetwork.com"]},"mediaad":{},"medianet":{"preconnect":"https://contextual.media.net","renderStartImplemented":true},"mediavine":{"prefetch":"https://amp.mediavine.com/wrapper.min.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true,"consentHandlingOverride":true},"medyanet":{"renderStartImplemented":true},"meg":{"renderStartImplemented":true},"mgid":{"renderStartImplemented":true,"preconnect":["https://jsc.mgid.com","https://servicer.mgid.com","https://s-img.mgid.com"]},"microad":{"prefetch":"https://j.microad.net/js/camp.js","preconnect":["https://s-rtb.send.microad.jp","https://s-rtb.send.microadinc.com","https://cache.send.microad.jp","https://cache.send.microadinc.com","https://deb.send.microad.jp"]},"miximedia":{"renderStartImplemented":true},"mixpo":{"prefetch":"https://cdn.mixpo.com/js/loader.js","preconnect":["https://player1.mixpo.com","https://player2.mixpo.com"]},"monetizer101":{"renderStartImplemented":true},"mox":{"prefetch":["https://ad.mox.tv/js/amp.min.js","https://ad.mox.tv/mox/mwayss_invocation.min.js"],"renderStartImplemented":true},"my6sense":{"renderStartImplemented":true},"myfinance":{"preconnect":["https://a.myfidevs.io","https://static.myfinance.com","https://www.myfinance.com"],"renderStartImplemented":true,"clientIdScope":"AMP_ECID_GOOGLE"},"myoffrz":{"renderStartImplemented":true},"mytarget":{"prefetch":"https://ad.mail.ru/static/ads-async.js","renderStartImplemented":true},"myua":{"renderStartImplemented":true},"mywidget":{"preconnect":"https://likemore-fe.go.mail.ru","prefetch":"https://likemore-go.imgsmail.ru/widget_amp.js","renderStartImplemented":true},"nativeroll":{"prefetch":"https://cdn01.nativeroll.tv/js/seedr-player.min.js"},"nativery":{"preconnect":"https://cdn.nativery.com"},"nativo":{"prefetch":"https://s.ntv.io/serve/load.js"},"navegg":{"renderStartImplemented":true},"nend":{"prefetch":"https://js1.nend.net/js/amp.js","preconnect":["https://output.nend.net","https://img1.nend.net"]},"netletix":{"preconnect":["https://call.netzathleten-media.de"],"renderStartImplemented":true},"noddus":{"prefetch":"https://noddus.com/amp_loader.js","renderStartImplemented":true},"nokta":{"prefetch":"https://static.virgul.com/theme/mockups/noktaamp/ampjs.js","renderStartImplemented":true},"nws":{},"oblivki":{"renderStartImplemented":true},"onead":{"prefetch":"https://ad-specs.guoshipartners.com/static/js/onead-amp.min.js","renderStartImplemented":true},"onnetwork":{"renderStartImplemented":true},"openadstream":{},"openx":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"opinary":{"renderStartImplemented":true},"outbrain":{"renderStartImplemented":true,"prefetch":"https://widgets.outbrain.com/widgetAMP/outbrainAMP.min.js","preconnect":["https://odb.outbrain.com"],"consentHandlingOverride":true},"pixels":{"prefetch":"https://cdn.adsfactor.net/amp/pixels-amp.min.js","clientIdCookieName":"__AF","renderStartImplemented":true},"playstream":{"prefetch":"https://app.playstream.media/js/amp.js","renderStartImplemented":true},"plista":{},"polymorphicads":{"prefetch":"https://www.polymorphicads.jp/js/amp.js","preconnect":["https://img.polymorphicads.jp","https://ad.polymorphicads.jp"],"renderStartImplemented":true},"popin":{"renderStartImplemented":true},"postquare":{},"ppstudio":{"renderStartImplemented":true},"pressboard":{"renderStartImplemented":true},"promoteiq":{},"pubexchange":{},"pubguru":{"renderStartImplemented":true},"pubmatic":{"prefetch":"https://ads.pubmatic.com/AdServer/js/amp.js"},"pubmine":{"prefetch":["https://s.pubmine.com/head.js"],"preconnect":"https://delivery.g.switchadhub.com","renderStartImplemented":true},"puffnetwork":{"prefetch":"https://static.puffnetwork.com/amp_ad.js","renderStartImplemented":true},"pulse":{"prefetch":"https://static.pulse.mail.ru/pulse-widget-amp.js","renderStartImplemented":true},"pulsepoint":{"prefetch":"https://ads.contextweb.com/TagPublish/getjs.static.js","preconnect":"https://tag.contextweb.com"},"purch":{"prefetch":"https://ramp.purch.com/serve/creative_amp.js","renderStartImplemented":true},"quoraad":{"prefetch":"https://a.quora.com/amp_ad.js","preconnect":"https://ampad.quora.com","renderStartImplemented":true},"rakutenunifiedads":{"prefetch":"https://s-cdn.rmp.rakuten.co.jp/js/amp.js","renderStartImplemented":true},"rbinfox":{"renderStartImplemented":true},"rcmwidget":{"prefetch":"https://rcmjs.rambler.ru/static/rcmw/rcmw-amp.js","renderStartImplemented":true,"clientIdScope":"__rcmw_amp"},"readmo":{"renderStartImplemented":true},"realclick":{"renderStartImplemented":true},"recomad":{"renderStartImplemented":true},"recreativ":{"prefetch":"https://go.rcvlink.com/static/amp.js","renderStartImplemented":true},"relap":{"renderStartImplemented":true},"relappro":{"prefetch":"https://cdn.relappro.com/adservices/amp/relappro.amp.min.js","preconnect":"https://tags.relappro.com","renderStartImplemented":true},"remixd":{"preconnect":"https://tags.remixd.com","renderStartImplemented":true},"revcontent":{"prefetch":"https://labs-cdn.revcontent.com/build/amphtml/revcontent.amp.min.js","preconnect":["https://trends.revcontent.com","https://cdn.revcontent.com","https://img.revcontent.com"],"renderStartImplemented":true},"revjet":{"prefetch":"https://cdn.revjet.com/~cdn/JS/03/amp.js","renderStartImplemented":true},"rfp":{"prefetch":"https://js.rfp.fout.jp/rfp-amp.js","preconnect":"https://ad.rfp.fout.jp","renderStartImplemented":true},"rnetplus":{},"rubicon":{},"runative":{"prefetch":"https://cdn.run-syndicate.com/sdk/v1/n.js","renderStartImplemented":true},"sabavision":{"renderStartImplemented":true},"sas":{"renderStartImplemented":true},"seedingalliance":{},"seedtag":{"prefetch":"https://config.seedtag.com/omid/bridge/bridge.js","preconnect":["https://s.seedtag.com"],"consentHandlingOverride":true,"renderStartImplemented":true},"sekindo":{"renderStartImplemented":true},"sharethrough":{"renderStartImplemented":true},"shemedia":{"prefetch":["https://securepubads.g.doubleclick.net/tag/js/gpt.js","https://ads.shemedia.com/static/amp.js"],"preconnect":["https://partner.googleadservices.com","https://tpc.googlesyndication.com","https://ads.blogherads.com"],"renderStartImplemented":true},"sklik":{"prefetch":"https://c.imedia.cz/js/amp.js"},"slimcutmedia":{"preconnect":["https://sb.freeskreen.com","https://static.freeskreen.com","https://video.freeskreen.com"],"renderStartImplemented":true},"smartads":{"prefetch":"https://smart-ads.biz/amp.js"},"smartadserver":{"prefetch":"https://ec-ns.sascdn.com/diff/js/amp.v0.js","preconnect":"https://static.sascdn.com","renderStartImplemented":true},"smartclip":{"prefetch":"https://cdn.smartclip.net/amp/amp.v0.js","preconnect":"https://des.smartclip.net","renderStartImplemented":true},"smi2":{"renderStartImplemented":true},"smilewanted":{"prefetch":"https://prebid.smilewanted.com/amp/amp.js","preconnect":"https://static.smilewanted.com","renderStartImplemented":true},"sogouad":{"prefetch":"https://theta.sogoucdn.com/wap/js/aw.js","renderStartImplemented":true},"sortable":{"prefetch":"https://www.googletagservices.com/tag/js/gpt.js","preconnect":["https://tags-cdn.deployads.com","https://partner.googleadservices.com","https://securepubads.g.doubleclick.net","https://tpc.googlesyndication.com"],"renderStartImplemented":true},"sona":{"renderStartImplemented":true},"sovrn":{"prefetch":"https://ap.lijit.com/www/sovrn_amp/sovrn_ads.js"},"speakol":{"renderStartImplemented":true},"spotx":{"preconnect":"https://js.spotx.tv","renderStartImplemented":true},"springAds":{"preconnect":["https://ib.adnxs.com"],"renderStartImplemented":true},"ssp":{"prefetch":"https://ssp.imedia.cz/static/js/ssp.js","renderStartImplemented":true,"consentHandlingOverride":true},"strossle":{"preconnect":["https://amp.spklw.com","https://widgets.sprinklecontent.com","https://images.sprinklecontent.com"]},"sunmedia":{"preconnect":["https://static.sunmedia.tv","https://services.sunmedia.tv","https://creative.sunmedia.tv","https://vod.sunmedia.tv","https://mx-sunmedia.videoplaza.tv","https://es-sunicontent.videoplaza.tv","https://es-sunelespanol.videoplaza.tv","https://es-suncopperland.videoplaza.tv","https://search.spotxchange.com","https://tpc.googlesyndication.com"],"clientIdScope":"AMP_ECID_SUNMEDIA","fullWidthHeightRatio":1,"renderStartImplemented":true},"svknative":{"renderStartImplemented":true,"prefetch":"https://widget.svk-native.ru/js/embed.js"},"swoop":{"prefetch":"https://www.swoop-amp.com/amp.js","preconnect":["https://www.swpsvc.com","https://client.swpcld.com"],"renderStartImplemented":true},"taboola":{},"tagon":{"prefetch":"https://js.tagon.co/tagon-amp.min.js"},"tail":{"renderStartImplemented":true},"tcsemotion":{"prefetch":"https://ads.tcsemotion.com/www/delivery/amphb.js","renderStartImplemented":true},"teads":{"prefetch":"https://a.teads.tv/media/format/v3/teads-format.min.js","preconnect":["https://cdn2.teads.tv","https://t.teads.tv","https://r.teads.tv"],"consentHandlingOverride":true},"temedya":{"prefetch":["https://widget.cdn.vidyome.com/builds/loader-amp.js","https://vidyome-com.cdn.vidyome.com/vidyome/builds/widgets.js"],"renderStartImplemented":true},"torimochi":{"renderStartImplemented":true},"tracdelight":{"prefetch":"https://scripts.tracdelight.io/amp.js","renderStartImplemented":true},"trafficstars":{"prefetch":"https://cdn.tsyndicate.com/sdk/v1/master.spot.js","renderStartImplemented":true},"triplelift":{},"trugaze":{"clientIdScope":"__tg_amp","renderStartImplemented":true},"uas":{"prefetch":"https://ads.pubmatic.com/AdServer/js/phoenix.js"},"ucfunnel":{"renderStartImplemented":true},"uzou":{"preconnect":["https://speee-ad.akamaized.net"],"renderStartImplemented":true},"unruly":{"prefetch":"https://video.unrulymedia.com/native/native-loader.js","renderStartImplemented":true},"valuecommerce":{"prefetch":"https://amp.valuecommerce.com/amp_bridge.js","preconnect":["https://ad.jp.ap.valuecommerce.com"],"renderStartImplemented":true},"vdoai":{"prefetch":"https://a.vdo.ai/core/dependencies_amp/vdo.min.js","renderStartImplemented":true},"videointelligence":{"preconnect":"https://s.vi-serve.com","renderStartImplemented":true},"videonow":{"renderStartImplemented":true},"viralize":{"renderStartImplemented":true},"vlyby":{"prefetch":"https://cdn.vlyby.com/amp/qad/qad-outer2.js"},"vmfive":{"prefetch":"https://man.vm5apis.com/dist/adn-web-sdk.js","preconnect":["https://vawpro.vm5apis.com","https://vahfront.vm5apis.com"],"renderStartImplemented":true},"webediads":{"prefetch":"https://eu1.wbdds.com/amp.min.js","preconnect":["https://goutee.top","https://mediaathay.org.uk"],"renderStartImplemented":true},"weborama-display":{"prefetch":["https://cstatic.weborama.fr/js/advertiserv2/adperf_launch_1.0.0_scrambled.js","https://cstatic.weborama.fr/js/advertiserv2/adperf_core_1.0.0_scrambled.js"]},"whopainfeed":{"prefetch":"https://widget.infeed.com.ar/widget/widget-amp.js"},"widespace":{},"wisteria":{"renderStartImplemented":true},"wpmedia":{"prefetch":"https://std.wpcdn.pl/wpjslib/wpjslib-amp.js","preconnect":["https://www.wp.pl","https://v.wpimg.pl"],"renderStartImplemented":true},"wunderkind":{"preconnect":["https://tag.wknd.ai","https://api.bounceexchange.com"],"renderStartImplemented":true,"fullWidthHeightRatio":1.3333333333333333},"xlift":{"prefetch":"https://cdn.x-lift.jp/resources/common/xlift_amp.js","renderStartImplemented":true},"yahoo":{"prefetch":"https://s.yimg.com/aaq/ampad/display.js","preconnect":"https://us.adserver.yahoo.com"},"yahoofedads":{"renderStartImplemented":true},"yahoojp":{"prefetch":["https://s.yimg.jp/images/listing/tool/yads/ydn/amp/amp.js","https://yads.c.yimg.jp/js/yads.js"],"preconnect":"https://yads.yahoo.co.jp"},"yahoonativeads":{"renderStartImplemented":true},"yandex":{"prefetch":"https://yandex.ru/ads/system/context.js","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"yektanet":{"preconnect":["https://cdn.yektanet.com","https://cg-sc.yektanet.com","https://native.yektanet.com","https://nfetch.yektanet.net","https://rfetch.yektanet.net","https://scrapper.yektanet.com","https://ua.yektanet.com","https://bfetch.yektanet.com","https://mostatil.cdn.yektanet.com"],"renderStartImplemented":true},"yengo":{"renderStartImplemented":true},"yieldbot":{"prefetch":["https://cdn.yldbt.com/js/yieldbot.intent.amp.js","https://msg.yldbt.com/js/ybmsg.html"],"preconnect":"https://i.yldbt.com"},"yieldmo":{"prefetch":"https://static.yieldmo.com/ym.1.js","preconnect":["https://s.yieldmo.com","https://ads.yieldmo.com"],"renderStartImplemented":true},"yieldone":{"prefetch":"https://img.ak.impact-ad.jp/ic/pone/commonjs/yone-amp.js"},"yieldpro":{"preconnect":"https://creatives.yieldpro.eu","renderStartImplemented":true},"zedo":{"prefetch":"https://ss3.zedo.com/gecko/tag/Gecko.amp.min.js","renderStartImplemented":true},"zen":{"prefetch":"https://zen.yandex.ru/widget-loader","preconnect":["https://yastatic.net/"],"renderStartImplemented":true},"zergnet":{},"zucks":{"preconnect":["https://j.zucks.net.zimg.jp","https://sh.zucks.net","https://k.zucks.net","https://static.zucks.net.zimg.jp"]},"baidu":{"prefetch":"https://dup.baidustatic.com/js/dm.js","renderStartImplemented":true},"sulvo":{}}');

            function I(t) { return 1 == (null == t ? void 0 : t.nodeType) }

            function S(t, e, r, n, i, a, s, o, c, p, d) { return t }

            function k(t) { return (t.ownerDocument || t).defaultView }

            function x(t, e) { return t.replace(/^|,/g, "$&".concat(e, " ")) }

            function _(t) { S(/^[\w-]+$/.test(t)) }

            function O(t) {
                var e;
                null === (e = t.parentElement) || void 0 === e || e.removeChild(t)
            }

            function A(t) { return t.parent && t.parent != t }
            var P = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

            function M(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; try { return decodeURIComponent(t) } catch (t) { return e } }

            function z(t) {
                var e, r = f();
                if (!t) return r;
                for (; e = P.exec(t);) {
                    var n = M(e[1], e[1]),
                        i = e[2] ? M(e[2].replace(/\+/g, " "), e[2]) : "";
                    r[n] = i
                }
                return r
            }

            function E(t) { var e = (t || self).location; return z(e.originalHash || e.hash) }
            var N = "";

            function T(t) { var e = t || self; return e.__AMP_MODE ? e.__AMP_MODE : e.__AMP_MODE = function(t) { return { localDev: !1, development: C(t, E(t)), esm: !1, test: !1, rtvVersion: R(t) } }(e) }

            function R(t) { var e; return N || (N = (null === (e = t.AMP_CONFIG) || void 0 === e ? void 0 : e.v) || "01".concat("2205051832000")), N }

            function C(t, e) { var r = e || E(t); return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(r.development) || !!t.AMP_DEV_MODE }

            function D(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

            function H(t) {
                var e = Object.getOwnPropertyDescriptor(t, "message");
                if (null != e && e.writable) return t;
                var r = t.message,
                    n = t.stack,
                    i = new Error(r);
                for (var a in t) i[a] = t[a];
                return i.stack = n, i
            }

            function F(t) {
                for (var e, n = null, i = "", a = r(arguments, !0); !(e = a()).done;) {
                    var s = e.value;
                    s instanceof Error && !n ? n = H(s) : (i && (i += " "), i += s)
                }
                return n ? i && (n.message = i + ": " + n.message) : n = new Error(i), n
            }

            function L(t) {
                var e, r;
                null === (e = (r = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(r, t)
            }
            self.__AMP_LOG = self.__AMP_LOG || { user: null, dev: null, userForEmbed: null };
            var U = self.__AMP_LOG;

            function W(t, e) { throw new Error("failed to call initLogConstructor") }

            function G(t) {
                return U.user || (U.user = V()),
                    function(t, e) { return e && e.ownerDocument.defaultView != t }(U.user.win, t) ? U.userForEmbed || (U.userForEmbed = V()) : U.user
            }

            function V(t) { return W() }

            function q() { return U.dev || (U.dev = W()) }

            function B(t, e, r, n, i, a, s, o, c, p, d) { return t }

            function Y(t, e, r, n, i, a, s, o, c, p, d) { return G().assert(t, e, r, n, i, a, s, o, c, p, d) }

            function J(t, e) { return tt(t = function(t) { return t.__AMP_TOP || (t.__AMP_TOP = t) }(t), e) }

            function $(t, e) { return tt(Q(Z(t)), e) }

            function X(t, e) { return function(t, e) { var r = et(t, e); if (r) return r; var n, i, s, o, c = rt(t); return c[e] = (i = (n = new a).promise, s = n.reject, o = n.resolve, i.catch((function() {})), { obj: null, promise: i, resolve: o, reject: s, context: null, ctor: null }), c[e].promise }(Q(t), e) }

            function K(t, e) { return et(Q(t), e) }

            function Z(t) { return t.nodeType ? (e = k(t), J(e, "ampdoc")).getAmpDoc(t) : t; var e }

            function Q(t) { var e = Z(t); return e.isSingleDoc() ? e.win : e }

            function tt(t, e) { B(nt(t, e)); var r = rt(t)[e]; return r.obj || (B(r.ctor), B(r.context), r.obj = new r.ctor(r.context), B(r.obj), r.context = null, r.resolve && r.resolve(r.obj)), r.obj }

            function et(t, e) { var r = rt(t)[e]; return r ? r.promise ? r.promise : (tt(t, e), r.promise = Promise.resolve(r.obj)) : null }

            function rt(t) { var e = t.__AMP_SERVICES; return e || (e = t.__AMP_SERVICES = {}), e }

            function nt(t, e) { var r = t.__AMP_SERVICES && t.__AMP_SERVICES[e]; return !(!r || !r.ctor) }

            function it(t, e, r, n) { var i = K(t, e); if (i) return i; var a = Z(t); return a.whenExtensionsKnown().then((function() { var t = a.getExtensionVersion(r); return t ? J(a.win, "extensions").waitForExtension(r, t) : null })).then((function(r) { return r ? n ? K(t, e) : X(t, e) : null })) }
            var at, st, ot, ct = function(t) { return J(t, "ampdoc") },
                pt = function(t) { return it(t, "amp-analytics-instrumentation", "amp-analytics") },
                dt = function(t) { return $(t, "documentInfo").get() },
                ut = function(t) { return tt(t, "timer") },
                mt = function(t) { return it(t, "consentPolicyManager", "amp-consent") },
                ht = function(t) { return $(t, "viewport") },
                lt = "image_stacked",
                ft = "image_sidebyside",
                vt = "mobile_banner_image_sidebyside",
                gt = "pub_control_image_stacked",
                bt = "pub_control_image_sidebyside",
                jt = "pub_control_image_card_stacked",
                yt = "pub_control_image_card_sidebyside",
                wt = "pub_control_text",
                It = "pub_control_text_card",
                St = "data-matched-content-ui-type",
                kt = "data-matched-content-columns-num",
                xt = "data-matched-content-rows-num",
                _t = (D(at = {}, lt, 1 / 1.91), D(at, ft, 1 / 3.82), D(at, vt, 1 / 3.82), D(at, gt, 1 / 1.91), D(at, bt, 1 / 3.82), D(at, jt, 1 / 1.91), D(at, yt, 1 / 3.74), D(at, wt, 0), D(at, It, 0), at),
                Ot = (D(st = {}, lt, 80), D(st, ft, 0), D(st, vt, 0), D(st, gt, 80), D(st, bt, 0), D(st, jt, 85), D(st, yt, 0), D(st, wt, 80), D(st, It, 80), st),
                At = (D(ot = {}, gt, 100), D(ot, bt, 200), D(ot, jt, 150), D(ot, yt, 250), D(ot, wt, 100), D(ot, It, 150), ot),
                Pt = "pub_control_",
                Mt = '\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"';

            function zt(t) { return t >= 1200 ? { width: 1200, height: 600 } : t >= 850 ? { width: t, height: Math.floor(.5 * t) } : t >= 550 ? { width: t, height: Math.floor(.6 * t) } : t >= 468 ? { width: t, height: Math.floor(.7 * t) } : { width: t, height: Math.floor(3.44 * t) } }

            function Et(t, e) { return t * _t[e] + Ot[e] }

            function Nt(t, e) { return (t - 8 * e - 8) / e }

            function Tt(t, e) { return Math.floor(t * e + 8 * e + 8) }

            function Rt(t) { return "fixed" == t || "fixed-height" == t || "responsive" == t || "fill" == t || "flex-item" == t || "fluid" == t || "intrinsic" == t }

            function Ct(t) { var e, r = parseFloat(t); return "number" == typeof(e = r) && isFinite(e) ? r : void 0 }

            function Dt(t, e, r, n) { return { left: t, top: e, width: r, height: n, bottom: e + n, right: t + r, x: t, y: e } }

            function Ht(t, e, r) { return 0 == e && 0 == r || 0 == t.width && 0 == t.height ? t : Dt(t.left + e, t.top + r, t.width, t.height) }

            function Ft(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.needsRootBounds,
                    i = r.rootMargin,
                    a = r.threshold,
                    s = A(e) && (n || i) ? e.document : void 0;
                return new e.IntersectionObserver(t, { threshold: a, root: s, rootMargin: i })
            }
            var Lt, Ut = new WeakMap,
                Wt = new WeakMap;

            function Gt(t) {
                for (var e = new Set, r = t.length - 1; r >= 0; r--) {
                    var n = t[r],
                        i = n.target;
                    if (!e.has(i)) {
                        e.add(i);
                        var a = Wt.get(i);
                        if (a)
                            for (var s = 0; s < a.length; s++)(0, a[s])(n)
                    }
                }
            }

            function Vt(t) { return { "time": t.time, "rootBounds": qt(t.rootBounds), "boundingClientRect": qt(t.boundingClientRect), "intersectionRect": qt(t.intersectionRect), "intersectionRatio": t.intersectionRatio } }

            function qt(t) { return null === t ? null : function(t) { return Dt(Number(t.left), Number(t.top), Number(t.width), Number(t.height)) }(t) }
            var Bt, Yt = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
                Jt = { "getPropertyPriority": function() { return "" }, "getPropertyValue": function() { return "" } };

            function $t(t, e, r, n, i) {
                var a = function(t, e, r) {
                    if (e.startsWith("--")) return e;
                    Lt || (Lt = f());
                    var n = Lt[e];
                    if (!n || r) {
                        if (n = e, void 0 === t[e]) {
                            var i = function(t) { return t.charAt(0).toUpperCase() + t.slice(1) }(e),
                                a = function(t, e) { for (var r = 0; r < Yt.length; r++) { var n = Yt[r] + e; if (void 0 !== t[n]) return n } return "" }(t, i);
                            void 0 !== t[a] && (n = a)
                        }
                        r || (Lt[e] = n)
                    }
                    return n
                }(t.style, e, i);
                if (a) {
                    var s, o = n ? r + n : r;
                    t.style.setProperty((s = a.replace(/[A-Z]/g, (function(t) { return "-" + t.toLowerCase() })), Yt.some((function(t) { return s.startsWith(t + "-") })) ? "-".concat(s) : s), o)
                }
            }

            function Xt(t, e) { for (var r in e) $t(t, r, e[r]) }

            function Kt(t, e) { return t.getComputedStyle(e) || Jt }

            function Zt(t) { return t.data }
            var Qt = "__AMP__AD_CONTAINER",
                te = { "AMP-FX-FLYING-CARPET": !0, "AMP-LIGHTBOX": !0, "AMP-STICKY-AD": !0, "AMP-LIGHTBOX-GALLERY": !0 };

            function ee(t, e) { var r = Kt(e, t).position; return "fixed" == r || "sticky" == r }

            function re(t) {
                if (void 0 === t[Qt]) {
                    for (var e = t.parentElement; e && "BODY" != e.tagName;) {
                        if (te[e.tagName]) return t[Qt] = e.tagName;
                        e = e.parentElement
                    }
                    t[Qt] = null
                }
                return t[Qt]
            }
            var ne = "amp-ad-ui",
                ie = { TOP: "top", BOTTOM: "bottom", LEFT: "left", RIGHT: "right", BOTTOM_RIGHT: "bottom-right" },
                ae = "sticky",
                se = function() {
                    function t(t) {
                        if (this.HG = t, this.Gn = t.element, this.Ml = t.win.document, this.Ddt = null, this.Wdt = null, this.Gn.hasAttribute(ae) && (this.Gn.getAttribute(ae) || G().error(ne, 'amp-ad sticky is deprecating empty attribute value, please use <amp-ad sticky="bottom" instead'), this.Wdt = this.Gn.getAttribute(ae) || ie.BOTTOM_RIGHT, this.Gn.setAttribute(ae, this.Wdt), Object.values(ie).includes(this.Wdt) || (G().error(ne, "Invalid sticky ad type: ".concat(this.Wdt)), this.Wdt = null)), this.Gdt = !1, this.$dt = void 0, this.$y = [], this.Gn.hasAttribute("data-ad-container-id")) {
                            var e = this.Gn.getAttribute("data-ad-container-id"),
                                r = this.Ml.getElementById(e);
                            r && "AMP-LAYOUT" == r.tagName && r.contains(this.Gn) && (this.Ddt = r)
                        }
                        if (!t.getFallback()) {
                            var n = this.Kdt("fallback");
                            n && this.HG.element.appendChild(n)
                        }
                    }
                    var e = t.prototype;
                    return e.applyNoContentUI = function() {
                        var t, e, r, n, i = this;
                        "AMP-STICKY-AD" !== re(this.Gn) ? "AMP-FX-FLYING-CARPET" !== re(this.Gn) ? (this.Ddt ? (r = (n = this.Gn.getAmpDoc(), $(n, "mutator")).attemptCollapse(this.Ddt)).then((function() {})) : r = this.HG.attemptCollapse(), r.catch((function() { i.HG.mutateElement((function() { i.HG.togglePlaceholder(!1), i.HG.toggleFallback(!0) })) }))) : (t = this.Gn, _(e = "amp-fx-flying-carpet"), e = e.toUpperCase(), function(t, r) { for (var n = [], i = t.parentElement; i; i = i.parentElement) i.tagName == e && n.push(i); return n }(t))[0].getImpl().then((function(t) {
                            var e = t.getChildren();
                            1 === e.length && e[0] === i.Gn && i.HG.collapse()
                        })) : this.HG.collapse()
                    }, e.applyUnlayoutUI = function() {
                        var t = this;
                        this.HG.mutateElement((function() { t.HG.toggleFallback(!1) }))
                    }, e.Kdt = function(t) {
                        if ("AMP-EMBED" == this.Gn.tagName) return null;
                        var e = this.Ml.createElement("div");
                        e.setAttribute(t, "");
                        var r = this.Ml.createElement("div");
                        return r.classList.add("i-amphtml-ad-default-holder"), r.setAttribute("data-ad-holder-text", "Ad"), e.appendChild(r), e
                    }, e.validateStickyAd = function() { Y(this.Ml.querySelectorAll("amp-sticky-ad.i-amphtml-built, amp-ad[sticky].i-amphtml-built").length <= 1, "At most one sticky ad can be loaded per page") }, e.isStickyAd = function() { return null !== this.Wdt }, e.maybeInitStickyAd = function() {
                        var t = this;
                        if (this.isStickyAd()) {
                            var e = this.Gn.getAmpDoc();
                            $t(this.Gn, "visibility", "visible"), this.Wdt == ie.TOP && (this.$dt = ht(e).onScroll((function() {
                                var r = e.win.scrollY;
                                $t(t.Gn, "visibility", r > 50 ? "visible" : "hidden")
                            })), this.$y.push(this.$dt)), ht(e).addToFixedLayer(this.Gn, !0), this.adjustPadding(), this.Gdt || (this.cee(), this.Gdt = !0)
                        }
                    }, e.getScrollPromiseForStickyAd = function() { var t = this; return this.isStickyAd() ? new Promise((function(e) { var r = ht(t.Gn.getAmpDoc()).onScroll((function() { e(), r() })) })) : Promise.resolve(null) }, e.adjustPadding = function() {
                        if (this.Wdt == ie.BOTTOM || this.Wdt == ie.BOTTOM_RIGHT) {
                            var t = this.Gn.offsetHeight;
                            ht(this.Gn.getAmpDoc()).updatePaddingBottom(t)
                        }
                    }, e.Zdt = function() {
                        var t, e = this;
                        (t = this.HG.win, J(t, "vsync")).mutate((function() {
                            var t = ht(e.Gn.getAmpDoc());
                            t.removeFromFixedLayer(e.element), O(e.Gn), t.updatePaddingBottom(0)
                        })), this.$dt && this.$dt()
                    }, e.cee = function() {
                        var t, e, r, n, i, a, s, o, c, p, d = (t = this.Gn.ownerDocument, e = { "aria-label": this.Gn.getAttribute("data-close-button-aria-label") || "Close this ad" }, function(t, e) { for (var r in e) t.setAttribute(r, e[r]); return t }(t.createElement("button"), e));
                        this.$y.push((r = d, n = "click", i = this.Zdt.bind(this), a = void 0, s = r, o = i, c = function(t) { try { return o(t) } catch (t) { var e, r; throw null === (e = (r = self).__AMP_REPORT_ERROR) || void 0 === e || e.call(r, t), t } }, p = function() {
                            if (void 0 !== Bt) return Bt;
                            Bt = !1;
                            try {
                                var t = {get capture() { return Bt = !0, !1 } };
                                self.addEventListener("test-options", null, t), self.removeEventListener("test-options", null, t)
                            } catch (t) {}
                            return Bt
                        }(), s.addEventListener(n, c, !!p && a), function() { null == s || s.removeEventListener(n, c, !!p && a), o = null, s = null, c = null })), d.classList.add("amp-ad-close-button"), this.Gn.appendChild(d)
                    }, e.updateSize = function(t, e, r, n, i) {
                        var a, s, o = this;
                        t = parseInt(t, 10), isNaN(t) || (a = Math.max(this.Gn.offsetHeight + t - r, t)), e = parseInt(e, 10), isNaN(e) || (s = Math.max(this.Gn.offsetWidth + e - n, e));
                        var c = { success: !0, newWidth: s, newHeight: a };
                        if (!a && !s) return Promise.reject(new Error("undefined width and height"));
                        if ("AMP-STICKY-AD" == re(this.Gn)) return c.success = !1, Promise.resolve(c);
                        if (this.isStickyAd()) { var p = this.HG.getViewport(); if (t * e > .2 * p.getHeight() * p.getWidth() || a > .5 * p.getHeight()) return c.success = !1, Promise.resolve(c) }
                        return this.HG.attemptChangeSize(a, s, i).then((function() { return o.Ed(o.Gn.querySelector("iframe"), t, e), c }), (function() { return c.success = !1, c }))
                    }, e.Ed = function(t, e, r) { Xt(t, { "height": "".concat(e, "px"), "width": "".concat(r, "px") }) }, e.cleanup = function() { this.$y.forEach((function(t) { return t() })), this.$y.length = 0 }, t
                }();
            t.AmpAdUIHandler = se;
            var oe = function() {
                function t() {}
                return t.generate = function(t) {
                    return function(t) { for (var e = t.length, r = 5381, n = 0; n < e; n++) r = 33 * r ^ t.charCodeAt(n); return String(r >>> 0) }(function(t) {
                        for (var e = [], r = 0; I(t) && r < 25;) {
                            var n = "";
                            t.id && (n = "/".concat(t.id));
                            var i = t.nodeName.toLowerCase();
                            e.push("".concat(i).concat(n).concat(ce(t))), r++, t = t.parentElement
                        }
                        return e.join()
                    }(t))
                }, t
            }();

            function ce(t) { for (var e = t.nodeName, r = 0, n = 0, i = t.previousElementSibling; i && n < 25 && r < 100;) i.nodeName == e && n++, r++, i = i.previousElementSibling; return n < 25 && r < 100 ? ".".concat(n) : "" }

            function pe(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n)
                }
                return r
            }

            function de(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pe(Object(r), !0).forEach((function(e) { D(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) }))
                }
                return t
            }
            var ue = "__AMP__EXPERIMENT_TOGGLES";

            function me(t) {
                var e, n, i, a, s;
                if (t[ue]) return t[ue];
                t[ue] = f();
                var o = t[ue];
                S(o);
                var c = de(de({}, null !== (e = t.AMP_CONFIG) && void 0 !== e ? e : {}), null !== (n = t.AMP_EXP) && void 0 !== n ? n : b((null === (i = t.__AMP_EXP) || void 0 === i ? void 0 : i.textContent) || "{}"));
                for (var p in c) { var d = c[p]; "number" == typeof d && d >= 0 && d <= 1 && (o[p] = Math.random() < d) }
                var u = null === (a = t.AMP_CONFIG) || void 0 === a ? void 0 : a["allow-doc-opt-in"];
                if (g(u) && u.length) {
                    var m = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                    if (m)
                        for (var h, l, v = r((null === (h = m.getAttribute("content")) || void 0 === h ? void 0 : h.split(",")) || [], !0); !(l = v()).done;) {
                            var j = l.value;
                            u.includes(j) && (o[j] = !0)
                        }
                }
                Object.assign(o, function(t) {
                    var e, n = "";
                    try { var i; "localStorage" in t && (n = null !== (i = t.localStorage.getItem("amp-experiment-toggles")) && void 0 !== i ? i : "") } catch (t) { q().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.") }
                    for (var a, s = (null === (e = n) || void 0 === e ? void 0 : e.split(/\s*,\s*/g)) || [], o = f(), c = r(s, !0); !(a = c()).done;) {
                        var p = a.value;
                        p && ("-" == p[0] ? o[p.substr(1)] = !1 : o[p] = !0)
                    }
                    return o
                }(t));
                var y = null === (s = t.AMP_CONFIG) || void 0 === s ? void 0 : s["allow-url-opt-in"];
                if (g(y) && y.length)
                    for (var w, I = z(t.location.originalHash || t.location.hash), k = r(y, !0); !(w = k()).done;) {
                        var x = w.value,
                            _ = I["e-".concat(x)];
                        "1" == _ && (o[x] = !0), "0" == _ && (o[x] = !1)
                    }
                return o
            }
            var he = /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org((\/.*)|($))+/,
                le = "position";

            function fe(t) { return "string" == typeof t && t.startsWith("amp-") && -1 != t.indexOf("{") }
            var ve = "ini-load",
                ge = ["script", "style"],
                be = ["amp-accordion", "amp-app-banner", "amp-carousel", "amp-fit-text", "amp-form", "amp-selector", "amp-sidebar"],
                je = ["action", "alt", "class", "disabled", "height", "href", "id", "name", "placeholder", "readonly", "src", "tabindex", "title", "type", "value", "width"];

            function ye(t) { var e = t.tagName.toLowerCase(); return e.startsWith("amp-") ? !(!be.includes(e) || !t.textContent) : !(ge.includes(e) || !t.textContent) }

            function we(t, e, r) { r.push("<".concat(t.tagName.toLowerCase())), e.forEach((function(e) { t.hasAttribute(e) && r.push(" ".concat(e, '="').concat(t.getAttribute(e), '"')) })), r.push(">") }
            var Ie, Se, ke = function() {
                function t(t) { this.pi = t, this.bi = 0, this.gi = 0, this.yi = f() }
                var e = t.prototype;
                return e.has = function(t) { return !!this.yi[t] }, e.get = function(t) { var e = this.yi[t]; if (e) return e.access = ++this.gi, e.payload }, e.put = function(t, e) { this.has(t) || this.bi++, this.yi[t] = { payload: e, access: this.gi }, this.wi() }, e.wi = function() {
                    if (!(this.bi <= this.pi)) {
                        var t, e = this.yi,
                            r = this.gi + 1;
                        for (var n in e) {
                            var i = e[n].access;
                            i < r && (r = i, t = n)
                        }
                        void 0 !== t && (delete e[t], this.bi--)
                    }
                }, t
            }();

            function xe(t, e) {
                return Ie || (Ie = self.document.createElement("a"), Se = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new ke(100))),
                    function(t, e, r) {
                        if (r && r.has(e)) return r.get(e);
                        t.href = e, t.protocol || (t.href = t.href);
                        var n, i = { href: t.href, protocol: t.protocol, host: t.host, hostname: t.hostname, port: "0" == t.port ? "" : t.port, pathname: t.pathname, search: t.search, hash: t.hash, origin: null };
                        "/" !== i.pathname[0] && (i.pathname = "/" + i.pathname), ("http:" == i.protocol && 80 == i.port || "https:" == i.protocol && 443 == i.port) && (i.port = "", i.host = i.hostname), n = t.origin && "null" != t.origin ? t.origin : "data:" != i.protocol && i.host ? i.protocol + "//" + i.host : i.href, i.origin = n;
                        var a = i;
                        return r && r.put(e, a), a
                    }(Ie, t, e ? null : Se)
            }

            function _e(t, e, r, n) {
                return function(t, e, r) {
                    if (!e) return t;
                    var n = t.split("#", 2),
                        i = n[0].split("?", 2);
                    return i[0] + (i[1] ? r ? "?".concat(e, "&").concat(i[1]) : "?".concat(i[1], "&").concat(e) : "?".concat(e)) + (n[1] ? "#".concat(n[1]) : "")
                }(t, function(t, e) { return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e)) }(e, r), n)
            }

            function Oe(t) { return "https:" == (t = function(t) { return "string" == typeof t ? xe(t) : t }(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || (r = ".localhost", (n = (e = t.hostname).length - r.length) >= 0 && e.indexOf(r, n) == n); var e, r, n }
            new Set(["c", "v", "a", "ad"]);
            var Ae = "unlisten";

            function Pe(t, e, r) { var n = function(t, e) { var r = t.listeningFors; return !r && e && (r = t.listeningFors = Object.create(null)), r || null }(t, r); if (!n) return n; var i = n[e]; return !i && r && (i = n[e] = []), i || null }

            function Me(t, e) {
                for (var r = e; r && r != r.parent; r = r.parent)
                    if (r == t) return !0;
                return !1
            }

            function ze(t) { for (var e = { "sentinel": Ae }, r = t.length - 1; r >= 0; r--) { var n = t[r]; if (!n.frame.contentWindow) { t.splice(r, 1); var i = n.events; for (var a in i) i[a].splice(0, 1 / 0).forEach((function(t) { t(e) })) } } }

            function Ee(t, e, r, n, i, a) {
                B(t.src), B(!t.parentNode), B(r);
                var s = t.ownerDocument.defaultView;
                ! function(t) {
                    t.listeningFors || t.addEventListener("message", (function(e) {
                        if (Zt(e)) {
                            var r = function(t) {
                                return "string" == typeof t && (t = "{" == t.charAt(0) ? j(t, (function(t) { q().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", t) })) || null : fe(t) ? function(t) {
                                    if (!fe(t)) return null;
                                    var e = t.indexOf("{");
                                    return S(-1 != e), j(t.substr(e), (function(e) {
                                        ! function(t) {
                                            var e = F.apply(null, arguments);
                                            setTimeout((function() { throw L(e), e }))
                                        }(new Error("MESSAGING: Failed to parse message: ".concat(t, "\n").concat(e.message)))
                                    }))
                                }(t) : null), t
                            }(Zt(e));
                            if (r && r.sentinel) {
                                var n = function(t, e, r, n) {
                                    var i, a = Pe(t, e);
                                    if (!a) return a;
                                    for (var s = 0; s < a.length; s++) {
                                        var o = a[s],
                                            c = o.frame.contentWindow;
                                        if (c) { if (n == c || Me(c, n)) { i = o; break } } else setTimeout(ze, 0, a)
                                    }
                                    return i ? i.events : null
                                }(t, r.sentinel, e.origin, e.source);
                                if (n) { var i = n[r.type]; if (i) { i = i.slice(); for (var a = 0; a < i.length; a++)(0, i[a])(r, e.source, e.origin, e) } }
                            }
                        }
                    }))
                }(s);
                var o, c = function(t, e, r) { for (var n, i = Pe(t, Re(e, r), !0), a = 0; a < i.length; a++) { var s = i[a]; if (s.frame === e) { n = s; break } } return n || (n = { frame: e, events: Object.create(null) }, i.push(n)), n.events }(s, t, n),
                    p = xe(t.src).origin,
                    d = c[e] || (c[e] = []),
                    u = function(e, n, s, c) { if ("amp" == e.sentinel) { if (n != t.contentWindow) return; if (p != s && ("null" != s || !a)) return }(i || n == t.contentWindow) && (e.sentinel != Ae ? r(e, n, s, c) : o()) };
                return d.push(u), o = function() {
                    if (u) {
                        var t = d.indexOf(u);
                        t > -1 && d.splice(t, 1), u = null, d = null, r = null
                    }
                }
            }

            function Ne(t, e, r) {
                var n = [];
                return "string" == typeof e && (e = [e]), new Promise((function(i) {
                    for (var a = 0; a < e.length; a++) {
                        var s = e[a],
                            o = Ee(t, s, (function(t, e, r, a) {
                                for (var s = 0; s < n.length; s++) n[s]();
                                i({ data: t, source: e, origin: r, event: a })
                            }), r);
                        n.push(o)
                    }
                }))
            }

            function Te(t, e, r, n, i) {
                if (t.contentWindow) {
                    n.type = r, n.sentinel = Re(t, i);
                    var a = n;
                    i && (a = "amp-" + JSON.stringify(n));
                    for (var s = 0; s < e.length; s++) {
                        var o = e[s];
                        o.win.postMessage(a, o.origin)
                    }
                }
            }

            function Re(t, e) { return e ? t.getAttribute("data-amp-3p-sentinel") : "amp" }
            var Ce = function() {
                    function t(t, e, r, n) {
                        var i = this;
                        this.cb = t, this.gb = r, this.yb = [], this.wb = Ee(this.cb, e, (function(t, e, r) { i.yb.some((function(t) { return t.win == e })) || i.yb.push({ win: e, origin: r }), n(t, e, r) }), this.gb, this.gb)
                    }
                    var e = t.prototype;
                    return e.send = function(t, e) {
                        (function(t, e) {
                            for (var r = [], n = 0, i = 0; i < t.length; i++) {
                                var a = t[i];
                                a.win.parent ? (n < i && (t[n] = a), n++) : r.push(a)
                            }
                            n < t.length && (t.length = n)
                        })(this.yb), Te(this.cb, this.yb, t, e, this.gb)
                    }, e.destroy = function() { this.wb(), this.yb.length = 0 }, t
                }(),
                De = function() {
                    function t(t, e) {
                        var r = this;
                        this.Ob = t, this.Pe = ut(t.win), this.jb = null, this.Qdt = null, this.uo = !1, this.tgt = [], this.egt = 0, this.rgt = this.ngt.bind(this), this.igt = new Ce(e, "send-intersections", !0, (function() { return r.agt() })), this.sgt = null
                    }
                    var e = t.prototype;
                    return e.fire = function() { this.Qdt && (this.Qdt.unobserve(this.Ob.element), this.Qdt.observe(this.Ob.element)) }, e.ogt = function() { this.sgt && (this.sgt(), this.sgt = null) }, e.agt = function() {
                        var t = this;
                        this.jb || (this.jb = new IntersectionObserver((function(e) {
                            var r = e[e.length - 1];
                            t.cgt(r)
                        })), this.jb.observe(this.Ob.element)), this.Qdt || (this.Qdt = new IntersectionObserver((function(e) {
                            var r = e[e.length - 1];
                            t.pgt(r)
                        }))), this.fire()
                    }, e.cgt = function(t) {
                        var e = 0 != t.intersectionRatio;
                        if (this.uo != e)
                            if (this.uo = e, this.pgt(t), e) {
                                var r = this.fire.bind(this),
                                    n = this.Ob.getViewport().onScroll(r),
                                    i = this.Ob.getViewport().onChanged(r);
                                this.sgt = function() { n(), i() }
                            } else this.ogt()
                    }, e.pgt = function(t) {
                        var e = Vt(t);
                        null === e.rootBounds && (e.rootBounds = this.Ob.getViewport().getRect()), this.tgt.length > 0 && this.tgt[this.tgt.length - 1].time == e.time || (this.tgt.push(e), this.egt || (this.ngt(), this.egt = this.Pe.delay(this.rgt, 100)))
                    }, e.ngt = function() { this.egt = 0, this.tgt.length && (this.igt.send("intersection", { "changes": this.tgt }), this.tgt.length = 0) }, e.destroy = function() { this.jb && (this.jb.disconnect(), this.jb = null), this.Qdt && (this.Qdt.disconnect(), this.Qdt = null), this.Pe.cancel(this.egt), this.ogt(), this.igt.destroy() }, t
                }(),
                He = !1,
                Fe = self.__AMP_ERRORS || [];
            self.__AMP_ERRORS = Fe;
            var Le = function() {
                function t(t) { this.t = t.win, this.HG = t, this.Gn = t.element, this.dgt = t.uiHandler, this.iframe = null, this.ugt = 0, this.mgt = null, this.hgt = null, this.lgt = null, this.fgt = !1, this.$y = [], this.bo = ht(this.HG.getAmpDoc()), this.uo = !1, this.vgt = !1 }
                var e = t.prototype;
                return e.init = function(t, e, r) {
                    var n = this;
                    B(!this.iframe), this.iframe = t, this.iframe.setAttribute("scrolling", "no"), this.dgt.isStickyAd() || this.iframe.classList.add("i-amphtml-fill-content");
                    var i, s = ut(this.HG.win);
                    this.mgt = new De(this.HG, this.iframe), this.hgt = new Ce(this.iframe, "send-embed-state", !0, (function() { return n.ggt(n.uo) })), (me(this.t)["inabox-position-api"] || /^adsense$/i.test(this.Gn.getAttribute("type")) && !(function(t) { return t.crypto && (t.crypto.subtle || t.crypto.webkitSubtle) }(i = this.t) && function(t) { return he.test(t.location.origin) }(i))) && (this.lgt = new Ce(this.iframe, "send-positions", !0, (function() { n.$v(), n.bgt() }))), Ne(this.iframe, "entity-id", !0).then((function(t) { n.Gn.creativeId = t.data.id })), this.jgt("get-html", (function(t) {
                        var e = t.selector,
                            r = t.attributes,
                            i = "";
                        return n.Gn.hasAttribute("data-html-access-allowed") && (i = function(t, e, r) {
                            var n = t.document.querySelector(e),
                                i = [];
                            return n && function(t, e, r) {
                                for (var n = [t], i = e.filter((function(t) { return je.includes(t) })); n.length > 0;) {
                                    var a = n.pop();
                                    if ("string" == typeof a) r.push(a);
                                    else if (a.nodeType === Node.TEXT_NODE) {
                                        var s;
                                        r.push(null !== (s = a.textContent) && void 0 !== s ? s : "")
                                    } else if (I(a) && ye(a)) { we(a, i, r), n.push("</".concat(a.tagName.toLowerCase(), ">")); for (var o = a.lastChild; o; o = o.previousSibling) n.push(o) }
                                }
                            }(n, r, i), i.join("").replace(/\s{2,}/g, " ")
                        }(n.HG.win, e, r)), Promise.resolve(i)
                    })), this.jgt("get-consent-state", (function() { return n.HG.getConsentState().then((function(t) { return { consentState: t } })) })), this.$y.push(Ee(this.iframe, "embed-size", (function(t, e, r, i) { t.hasOverflow && (n.Gn.warnOnMissingOverflow = !1), Date.now() - n.ugt >= 500 ? n.P3(t.id, t.height, t.width, e, r, i) : n.ygt(!1, t.id, t.width, t.height, e, r) }), !0, !0)), this.$y.push(this.HG.getAmpDoc().onVisibilityChanged((function() { n.ggt(n.uo) }))), this.$y.push(Ee(this.iframe, "user-error-in-iframe", (function(t) { n.wgt(t.message, 1 == t.expected) }), !0, !0));
                    var o = this.HG.loadPromise(this.iframe).then((function() { return n.iframe && (n.iframe.readyState = "complete"), s.promise(10) })),
                        c = new a,
                        p = c.promise,
                        d = c.resolve,
                        u = new a,
                        m = u.promise,
                        h = u.resolve;
                    return this.HG.config && this.HG.config.renderStartImplemented ? Ne(this.iframe, ["render-start", "no-content"], !0).then((function(t) { "render-start" == t.data.type ? (n.Igt(t), d()) : (n.Sgt(), h()) })) : (Ne(this.iframe, "bootstrap-loaded", !0).then((function() { d() })), Ne(this.iframe, "no-content", !0).then((function() { n.Sgt(), h() }))), Ne(this.iframe, ve, !0).then((function() { n.HG.signals().signal(ve) })), this.Gn.appendChild(this.iframe), e && !r ? (this.HG.renderStarted(), d()) : $t(this.iframe, "visibility", "hidden"), (e && r ? p : Promise.race([p, o, s.promise(1e4)])).then((function() { n.HG.renderStarted(), n.iframe && $t(n.iframe, "visibility", "") })), Promise.race([o, m])
                }, e.jgt = function(t, e) {
                    var r = this;
                    this.$y.push(Ee(this.iframe, t, (function(n, i, a) {
                        if (r.iframe) {
                            var s = n.messageId,
                                o = n.payload;
                            e(o).then((function(e) {
                                var n = {};
                                n.messageId = s, n.content = e, Te(r.iframe, [{ win: i, origin: a }], t + "-result", n, !0)
                            }))
                        }
                    }), !0, !1))
                }, e.Igt = function(t) {
                    var e = Zt(t);
                    this.P3(void 0, e.height, e.width, t.source, t.origin, t.event)
                }, e.freeXOriginIframe = function(t) { this.Hn(), t || this.iframe && (O(this.iframe), this.iframe = null) }, e.Sgt = function() { this.iframe && (this.freeXOriginIframe(this.iframe.name.indexOf("_master") >= 0), this.dgt.applyNoContentUI()) }, e.Hn = function() { this.$y.forEach((function(t) { return t() })), this.$y.length = 0, this.hgt && (this.hgt.destroy(), this.hgt = null), this.lgt && (this.lgt.destroy(), this.lgt = null), this.mgt && (this.mgt.destroy(), this.mgt = null) }, e.P3 = function(t, e, r, n, i, a) {
                    var s = this;
                    this.HG.getVsync().mutate((function() {
                        if (s.iframe) {
                            var o = s.iframe.offsetHeight,
                                c = s.iframe.offsetWidth;
                            s.dgt.updateSize(e, r, o, c, a).then((function(e) { e.success ? s.ugt = 0 : s.ugt = Date.now(), s.dgt.adjustPadding(), s.ygt(e.success, t, e.newWidth, e.newHeight, n, i) }), (function() {}))
                        }
                    }))
                }, e.ygt = function(t, e, r, n, i, a) { this.iframe && Te(this.iframe, [{ win: i, origin: a }], t ? "embed-size-changed" : "embed-size-denied", { "id": e, "requestedWidth": r, "requestedHeight": n }, !0) }, e.ggt = function(t) { this.hgt && this.hgt.send("embed-state", { "inViewport": t, "pageHidden": !this.HG.getAmpDoc().isVisible() }) }, e.kgt = function() { var t = this; return this.bo.getClientRectAsync(this.iframe).then((function(e) { return B(e), { "targetRect": e, "viewportRect": t.bo.getRect() } })) }, e.$v = function() {
                    var t = this;
                    this.vgt || (this.vgt = !0, this.kgt().then((function(e) { t.vgt = !1, t.lgt.send(le, e) })))
                }, e.bgt = function() {
                    var t = this;
                    this.fgt || (this.fgt = !0, this.$y.push(this.bo.onScroll(function(t, e, r) {
                        var n = 0,
                            i = null;

                        function a(r) { i = null, n = t.setTimeout(s, 100), e.apply(null, r) }

                        function s() { n = 0, i && a(i) }
                        return function() {
                            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            n ? i = e : a(e)
                        }
                    }(this.t, (function() { t.kgt().then((function(e) { t.lgt.send(le, e) })) })))), this.$y.push(this.bo.onResize((function() { t.kgt().then((function(e) { t.lgt.send(le, e) })) }))))
                }, e.viewportCallback = function(t) { this.uo = t, this.ggt(t) }, e.onLayoutMeasure = function() { this.mgt && this.mgt.fire() }, e.wgt = function(t, e) {
                    if ("string" == typeof t)
                        if (e) q().expectedError("amp-ad-xorigin-iframe", t);
                        else {
                            var r = new Error(t);
                            r.name = "3pError",
                                function(t, e) {
                                    if (ct(e).isSingleDoc()) {
                                        var r = { "errorName": t.name, "errorMessage": t.message };
                                        ! function(t, e) {
                                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                                            pt(t).then((function(i) { i && i.triggerEventForTarget(t, e, r, n) }))
                                        }(function(t) { var e = ct(t).getSingleDoc().getRootNode(); return e.documentElement || e.body || e }(e), "user-error", r, !1)
                                    }
                                }(r, this.HG.win)
                        }
                }, t
            }();
            t.AmpAdXOriginIframeHandler = Le;
            var Ue = null,
                We = null,
                Ge = function() { return self.AMP.config.urls }();

            function Ve(t, e, r, n) {
                var i = Date.now(),
                    a = e.getAttribute("width"),
                    s = e.getAttribute("height");
                (n = n || {}).width = Ct(a), n.height = Ct(s), e.getAttribute("title") && (n.title = e.getAttribute("title"));
                var o = t.location.href;
                "about:srcdoc" == o && (o = t.parent.location.href);
                var c, p, d, u, m = Z(e),
                    h = dt(e),
                    l = (u = e, $(u, "viewer")).getUnconfirmedReferrerUrl(),
                    f = function(t) { for (var e = t.ownerDocument.body, r = 0, n = 0, i = t; i && i != e; i = i.offsetParent) r += i.offsetLeft, n += i.offsetTop; var a = t.offsetHeight; return Dt(r, n, t.offsetWidth, a) }(e);
                n._context = { "ampcontextVersion": "2205051832000", "ampcontextFilepath": "".concat(Ge.thirdParty, "/").concat("2205051832000", "/ampcontext-v0.js"), "sourceUrl": h.sourceUrl, "referrer": l, "canonicalUrl": h.canonicalUrl, "pageViewId": h.pageViewId, "location": { "href": o }, "startTime": i, "tagName": e.tagName, "mode": { localDev: !1, development: T(d).development, esm: T(d).esm, test: !1, rtvVersion: T(d).rtvVersion }, "canary": (c = t, !(null === (p = c.AMP_CONFIG) || void 0 === p || !p.canary)), "hidden": !m.isVisible(), "initialLayoutRect": f ? { "left": f.left, "top": f.top, "width": f.width, "height": f.height } : null, "domFingerprint": oe.generate(e), "experimentToggles": me(t), "sentinel": r };
                var v = e.getAttribute("src");
                return v && (n.src = v), n
            }
            var qe = function() { return self.AMP.config.urls }(),
                Be = {};

            function Ye(t, e, r, n) {
                var i = r || e.getAttribute("type");
                Y(i, "Attribute type required for <amp-ad>: %s", e);
                var a = function(t) { for (var e = 0, r = t; r && r != r.parent; r = r.parent) e++; return String(e) + "-" + Xe(t) }(t),
                    s = {};
                return function(t, e) { var r = t.dataset; for (var n in r) n.startsWith("vars") || (e[n] = r[n]); var i = t.getAttribute("json"); if (i) { var a = j(i); if (void 0 === a) throw G().createError("Error parsing JSON in json attribute in element %s", t); for (var s in a) e[s] = a[s] } }(e, s), (s = Ve(t, e, a, s)).type = i, Object.assign(s._context, n), s
            }

            function Je(t) { return "".concat(qe.thirdParty, "/").concat("2205051832000", "/vendor/").concat(t).concat(".js") }

            function $e(t, e, r) {
                return function(t, e, r) {
                    var n = e.getMetaByName("amp-3p-iframe-src");
                    if (!n) return null;
                    var i = function(t, e) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source"; return Y(null != t, "%s %s must be available", e, r), Y(Oe(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', e, r, t), t }(n, 'meta[name="amp-3p-iframe-src"]');
                    Y(-1 == i.indexOf("?"), "3p iframe url must not include query string %s in element %s.", i, n);
                    var a = xe(i);
                    return Y("localhost" == a.hostname && !r || a.origin != xe(t.location.href).origin, "3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.", i, a.origin, n), "".concat(i, "?").concat("2205051832000")
                }(t, e, r) || function(t, e) { return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN = t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN || "d-" + Xe(t), "https://" + t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN + ".".concat(qe.thirdPartyFrameHost, "/").concat("2205051832000", "/") + "".concat("frame", ".html") }(t)
            }

            function Xe(t) {
                var e;
                if (t.crypto && t.crypto.getRandomValues) {
                    var r = new Uint32Array(2);
                    t.crypto.getRandomValues(r), e = String(r[0]) + r[1]
                } else e = String(t.Math.random()).substr(2) + "0";
                return e
            }

            function Ke(t) {
                if (t.sandbox && t.sandbox.supports) {
                    for (var e = ["allow-top-navigation-by-user-activation", "allow-popups-to-escape-sandbox"], r = 0; r < e.length; r++) { var n = e[r]; if (!t.sandbox.supports(n)) return void q().info("3p-frame", "Iframe doesn't support %s", n) }
                    t.sandbox = e.join(" ") + " " + ["allow-forms", "allow-modals", "allow-pointer-lock", "allow-popups", "allow-same-origin", "allow-scripts"].join(" ")
                }
            }
            var Ze = function() {
                    function t() { this.nr = [] }
                    var e, r = t.prototype;
                    return r.peek = function() { var t = this.length; return t ? this.nr[t - 1].item : null }, r.enqueue = function(t, e) {
                        if (isNaN(e)) throw new Error("Priority must not be NaN.");
                        var r = this.rr(e);
                        this.nr.splice(r, 0, { item: t, priority: e })
                    }, r.rr = function(t) {
                        for (var e = -1, r = 0, n = this.length; r <= n && (e = Math.floor((r + n) / 2)) !== this.length;)
                            if (this.nr[e].priority < t) r = e + 1;
                            else {
                                if (!(e > 0 && this.nr[e - 1].priority >= t)) break;
                                n = e - 1
                            }
                        return e
                    }, r.forEach = function(t) { for (var e = this.length; e--;) t(this.nr[e].item) }, r.dequeue = function() { var t = this.nr.pop(); return t ? t.item : null }, (e = [{ key: "length", get: function() { return this.nr.length } }]) && function(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }(t.prototype, e), t
                }(),
                Qe = "CHUNK",
                tr = /nochunking=1/.test(self.location.hash),
                er = i();
            var rr = "not_run",
                nr = function() {
                    function t(t) { this.state = rr, this.sr = t }
                    var e = t.prototype;
                    return e.ur = function(t) { if ("run" != this.state) { this.state = "run"; try { this.sr(t) } catch (t) { throw this.hr(t), t } } }, e.ar = function() { return this.sr.displayName || this.sr.name }, e.hr = function(t) {}, e.cr = function() { return !1 }, e.lr = function() { return !1 }, t
                }(),
                ir = function(t) {
                    o(r, t);
                    var e = u(r);

                    function r(t, r, n) { var i; return (i = e.call(this, t)).vr = n, i }
                    var n = r.prototype;
                    return n.hr = function(t) {
                        var e;
                        B((e = self.document).defaultView), He || (He = !0, function(t) { Xt(t.body, { opacity: 1, visibility: "visible", "animation": "none" }) }(e))
                    }, n.cr = function() { return this.dr() }, n.lr = function() { return this.vr.mr }, n.dr = function() { return this.vr.ampdoc.isVisible() }, r
                }(nr),
                ar = function() {
                    function t(t) {
                        var e, r = this;
                        this.ampdoc = t, this.t = t.win, this.pr = new Ze, this.br = this.gr.bind(this), this.yr = 0, this.wr = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending), this.Ar = !1, this.er = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"), this.t.addEventListener("message", (function(t) { "amp-macro-task" == Zt(t) && r.gr(null) })), this.mr = !1, (e = t, X(e, "viewer")).then((function() { r.mr = !0 })), t.onVisibilityChanged((function() { t.isVisible() && r.Er() }))
                    }
                    var e = t.prototype;
                    return e.run = function(t, e) {
                        var r = new nr(t);
                        this.Or(r, e)
                    }, e.runForStartup = function(t) {
                        var e = new ir(t, this.t, this);
                        this.Or(e, Number.POSITIVE_INFINITY)
                    }, e.Or = function(t, e) { this.pr.enqueue(t, e), this.Er() }, e.Pr = function(t) { for (var e = this.pr.peek(); e && e.state !== rr;) this.pr.dequeue(), e = this.pr.peek(); return e && t && this.pr.dequeue(), e }, e.gr = function(t) {
                        var e, r = this,
                            n = this.Pr(!0);
                        if (!n) return this.Ar = !1, this.yr = 0, !1;
                        try { e = Date.now(), n.ur(t) } finally { er.then().then().then().then().then().then().then().then().then((function() { r.Ar = !1, r.yr += Date.now() - e, q().fine(Qe, n.ar(), "Chunk duration", Date.now() - e, r.yr), r.Er() })) }
                        return !0
                    }, e.Tr = function(t) {
                        var e = this;
                        if (this.er && (this.wr ? this.t.navigator.scheduling.isInputPending() : this.yr > 5)) return this.yr = 0, void this.Ir();
                        er.then((function() { e.br(t) }))
                    }, e.Er = function() {
                        if (!this.Ar) {
                            var t = this.Pr();
                            if (t) return t.cr() ? (this.Ar = !0, void this.Tr(null)) : void(t.lr() && this.t.requestIdleCallback ? (e = this.t, r = 2e3, n = this.br, i = Date.now(), e.requestIdleCallback((function t(a) {
                                if (a.timeRemaining() < 15) {
                                    var s = r - (Date.now() - i);
                                    s <= 0 || a.didTimeout ? (q().fine(Qe, "Timed out", r, a.didTimeout), n(a)) : (q().fine(Qe, "Rescheduling with", s, a.timeRemaining()), e.requestIdleCallback(t, { timeout: s }))
                                } else q().fine(Qe, "Running idle callback with ", 15), n(a)
                            }), { timeout: r })) : this.Ir())
                        }
                        var e, r, n, i
                    }, e.Ir = function() { this.t.postMessage("amp-macro-task", "*") }, t
                }(),
                sr = "amp-ad-3p-impl",
                or = function(t) {
                    o(r, t);
                    var e = u(r);

                    function r(t) { var r; return (r = e.call(this, t)).cb = null, r.config = null, r.uiHandler = null, r.y4 = null, r.Pb = null, r.i5 = null, r.xgt = !1, r._gt = null, r.sgt = null, r.$y = [], r.jb = null, r.ft = void 0, r.ji = null, r.MM = void 0, r.Ogt = !1, r.Agt = !1, r.$b = null, r }
                    var n = r.prototype;
                    return n.getLayoutPriority = function() { return this.element.getAmpDoc().isSingleDoc() ? 2 : 1 }, n.renderOutsideViewport = function() {
                        if (this.win["3pla"]) return !1;
                        var e = function(t) {
                            var e = t.getAttribute("data-loading-strategy");
                            if (null == e) return null;
                            if ("prefer-viewability-over-views" == e || "" == e) return 1.25;
                            var r = "Value of data-loading-strategy should be a float number in range of [0, 3], but got " + e,
                                n = G().assertNumber(parseFloat(e), r);
                            return Y(n >= 0 && n <= 3, r), n
                        }(this.element);
                        return null !== e ? e : t.prototype.renderOutsideViewport.call(this)
                    }, n.isLayoutSupported = function(t) { return Rt(t) }, n.getResource = function() { return this.element.getResources().getResourceForElement(this.element) }, n.getConsentPolicy = function() {
                        var e = this.element.getAttribute("type"),
                            r = w[e];
                        return r && r.consentHandlingOverride ? null : t.prototype.getConsentPolicy.call(this)
                    }, n.buildCallback = function() {
                        var t = this;
                        this.MM = this.element.getAttribute("type");
                        var e = Math.round(this.getResource().getUpgradeDelayMs());
                        if (q().info(sr, "upgradeDelay ".concat(this.MM, ": ").concat(e)), this.Pb = this.getPlaceholder(), this.i5 = this.getFallback(), this.config = w[this.MM], Y(this.config, 'Type "'.concat(this.MM, '" is not supported in amp-ad')), this.uiHandler = new se(this), this.uiHandler.validateStickyAd(), this.uiHandler.getScrollPromiseForStickyAd().then((function() { return t.uiHandler.maybeInitStickyAd() })), this.uiHandler.isStickyAd() && function(t, e, r) {
                                if (tr) er.then(e);
                                else {
                                    var n = function(t) {
                                        return e = "chunk", r = ar,
                                            function(t, e, r, n, i, a) {
                                                var s = rt(t),
                                                    o = s[r];
                                                o || (o = s[r] = { obj: null, promise: null, resolve: null, reject: null, context: null, ctor: null, sharedInstance: !1 }), o.ctor || (o.ctor = n, o.context = e, o.sharedInstance = !1, o.resolve && tt(t, r))
                                            }(Q(n = Z(t)), n, e, r), $(t, "chunk");
                                        var e, r, n
                                    }(t);
                                    n.run(e, r)
                                }
                            }(this.element, (function() { return t.layoutCallback() }), 10), this.Agt = this.Pgt(), this.Agt) return this.Mgt()
                    }, n.Pgt = function() { return !!this.element.hasAttribute("data-full-width") && (Y("100vw" == this.element.getAttribute("width"), 'Ad units with data-full-width must have width="100vw".'), Y(!!this.config.fullWidthHeightRatio, "Ad network does not support full width ads."), q().info(sr, "#${this.getResource().getId()} Full width requested"), !0) }, n.preconnectCallback = function(t) {
                        var e = this,
                            r = J(this.win, "preconnect");
                        ! function(t, e, r, n) {
                            var i = $e(t, r);
                            n.preload(r, i, "document"), n.preload(r, Je(e), "script")
                        }(this.win, this.MM, this.getAmpDoc(), r), "string" == typeof this.config.prefetch ? r.preload(this.getAmpDoc(), this.config.prefetch, "script") : this.config.prefetch && this.config.prefetch.forEach((function(t) { r.preload(e.getAmpDoc(), t, "script") })), "string" == typeof this.config.preconnect ? r.url(this.getAmpDoc(), this.config.preconnect, t) : this.config.preconnect && this.config.preconnect.forEach((function(n) { r.url(e.getAmpDoc(), n, t) }));
                        var n = this.element.getAttribute("src");
                        n && r.url(this.getAmpDoc(), n)
                    }, n.onLayoutMeasure = function() {
                        var t = this;
                        if (this.xgt = ! function(t, e) {
                                var r = !1,
                                    n = 0,
                                    i = t;
                                do { te[i.tagName] ? (n++, r = !1) : ee(i, e) && (r = !0), i = i.parentElement } while (i && "BODY" != i.tagName);
                                return !r && n <= 1
                            }(this.element, this.win), void 0 === this.ft && (this.ft = re(this.element)), this.zgt(), this.y4 && this.y4.onLayoutMeasure(), this.Agt && !this.Ogt) {
                            this.Ogt = !0;
                            var e = this.getLayoutBox();
                            this.getVsync().run({ measure: function(e) { e.direction = Kt(t.win, t.element).direction }, mutate: function(r) { "rtl" == r.direction ? $t(t.element, "marginRight", e.left, "px") : $t(t.element, "marginLeft", -e.left, "px") } }, { direction: "" })
                        }
                    }, n.zgt = function() {
                        if (this.y4 && this.y4.iframe) {
                            var t = this.getViewport().getLayoutRect(this.y4.iframe),
                                e = this.getLayoutBox();
                            this._gt = Ht(t, -e.left, -e.top)
                        }
                    }, n.getIntersectionElementLayoutBox = function() { if (!this.y4 || !this.y4.iframe) return t.prototype.getIntersectionElementLayoutBox.call(this); var e = this.getLayoutBox(); return this._gt || this.zgt(), Ht(B(this._gt), e.left, e.top) }, n.layoutCallback = function() {
                        var e = this;
                        if (this.ji) return this.ji;
                        Y(!this.xgt || this.uiHandler.isStickyAd(), "<amp-ad> is not allowed to be placed in elements with position:fixed: %s unless it has sticky attribute", this.element);
                        var r, n, s, o, c, p, d, u, m, h = this.getConsentState(),
                            l = t.prototype.getConsentPolicy.call(this),
                            f = l ? function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"; return mt(t).then((function(t) { return t ? t.getConsentStringInfo(e) : null })) }(this.element, l) : Promise.resolve(null),
                            v = l ? function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"; return mt(t).then((function(t) { return t ? t.getConsentMetadataInfo(e) : null })) }(this.element, l) : Promise.resolve(null),
                            g = l ? (r = this.element, n = l, mt(r).then((function(t) { return t ? t.getMergedSharedData(n) : null }))) : Promise.resolve(null),
                            b = dt(this.element).pageViewId64;
                        return this.ji = Promise.all([(s = this, m = w[s.element.getAttribute("type")], m && m.clientIdScope ? (o = s.getAmpDoc(), c = m.clientIdScope, p = m.clientIdCookieName, isNaN(void 0), d = (u = o, X(u, "cid")).then((function(t) { if (t) return t.get({ scope: c, createCookieIfNotPresent: !0, cookieName: p }, Promise.resolve(void 0)).catch((function(t) { q().error("AD-CID", t) })) })), ut(o.win).timeoutPromise(1e3, d, "cid timeout").catch((function(t) { q().warn("AD-CID", t) }))) : i()), h, g, f, v, b]).then((function(t) {
                                var r = { "clientId": t[0] || null, "container": e.ft, "initialConsentState": t[1], "consentSharedData": t[2], "initialConsentValue": t[3], "initialConsentMetadata": t[4], "pageViewId64": t[5] },
                                    n = e.element.getIntersectionChangeEntry(),
                                    i = function(t, e, r, n) {
                                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                            a = i.allowFullscreen,
                                            s = void 0 !== a && a,
                                            o = i.initialIntersection;
                                        B(void 0 === e.isConnected || !0 === e.isConnected);
                                        var c = Ye(t, e, r, n);
                                        o && (c._context.initialIntersection = o);
                                        var p = t.document.createElement("iframe");
                                        Be[c.type] || (Be[c.type] = 0), Be[c.type] += 1;
                                        var d = e.getAmpDoc(),
                                            u = $e(t, d),
                                            m = xe(u).hostname,
                                            h = JSON.stringify({ "host": m, "bootstrap": Je(c.type), "type": c.type, "count": Be[c.type], "attributes": c });
                                        return p.src = u, p.ampLocation = xe(u), p.name = h, c.width && (p.width = c.width), c.height && (p.height = c.height), c.title && (p.title = c.title), s && p.setAttribute("allowfullscreen", "true"), p.setAttribute("scrolling", "no"), $t(p, "border", "none"), p.onload = function() { this.readyState = "complete" }, p.setAttribute("allow", "sync-xhr 'none';"), ["facebook"].includes(r) || Ke(p), p.setAttribute("data-amp-3p-sentinel", c._context.sentinel), p
                                    }(k(e.element), e.element, e.MM, r, { initialIntersection: Vt(n) });
                                return i.title = e.element.title || "Advertisement", e.y4 = new Le(e), e.y4.init(i)
                            })).then((function() {
                                e.$b = function(t, e, r) {
                                    var n = k(t),
                                        i = Ut.get(n);
                                    i || Ut.set(n, i = Ft(Gt, n));
                                    var a = Wt.get(t);
                                    return a || (a = [], Wt.set(t, a)), a.push(e), i.observe(t),
                                        function() {
                                            ! function(t, e) {
                                                var r, n, i, a = Wt.get(t);
                                                if (a && (n = e, -1 != (i = (r = a).indexOf(n)) && (r.splice(i, 1), 1) && !a.length)) {
                                                    var s = k(t),
                                                        o = Ut.get(s);
                                                    null == o || o.unobserve(t), Wt.delete(t)
                                                }
                                            }(t, e)
                                        }
                                }(e.element, (function(t) { var r = t.isIntersecting; return e.Kb(r) }))
                            })),
                            function(t, e) {
                                if (void 0 === t["3pla"] && (t["3pla"] = 0), t["3pla"]++, !Ue) {
                                    var r = new a;
                                    Ue = r.promise, We = r.resolve
                                }
                                ut(t).timeoutPromise(1e3, e).catch((function() {})).then((function() {--t["3pla"] || (We(), Ue = null, We = null) }))
                            }(this.win, this.ji), this.ji
                    }, n.Kb = function(t) { this.y4 && this.y4.viewportCallback(t) }, n.unlayoutOnPause = function() { return !0 }, n.unlayoutCallback = function() { var t; return this.$y.forEach((function(t) { return t() })), this.$y.length = 0, null === (t = this.$b) || void 0 === t || t.call(this), this.$b = null, this.ji = null, this.uiHandler.applyUnlayoutUI(), this.y4 && (this.y4.freeXOriginIframe(), this.y4 = null), this.uiHandler && this.uiHandler.cleanup(), !0 }, n.getConsentState = function() { var e = t.prototype.getConsentPolicy.call(this); return e ? function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"; return mt(t).then((function(t) { return t ? t.whenPolicyResolved(e) : null })) }(this.element, e) : Promise.resolve(null) }, n.Mgt = function() {
                        var t = this.getViewport().getSize(),
                            e = Math.min(500, t.height),
                            r = t.width,
                            n = this.Egt(r, e);
                        return this.attemptChangeSize(n, r).then((function() { q().info(sr, "Size change accepted: ".concat(r, "x").concat(n)) }), (function() { q().info(sr, "Size change rejected: ".concat(r, "x").concat(n)) }))
                    }, n.Egt = function(t, e) {
                        return "mcrspv" === this.element.getAttribute("data-auto-format") ? (r = t, (i = (a = { numberOfRows: (n = this.element).getAttribute(xt), numberOfColumns: n.getAttribute(kt), layoutType: n.getAttribute(St) }).numberOfRows || a.numberOfColumns || a.layoutType ? function(t, e) {
                            var r, n = function(t) {
                                var e = 0;
                                if (t.layoutType && e++, t.numberOfColumns && e++, t.numberOfRows && e++, e < 3) return { validationError: "Tags ".concat(St, ", ").concat(kt, " and ").concat(xt, " should be set together.") };
                                var r = t.layoutType.split(","),
                                    n = t.numberOfRows.split(","),
                                    i = t.numberOfColumns.split(",");
                                if (r.length !== n.length || r.length !== i.length) return { validationError: "Lengths of parameters ".concat(St, ", ").concat(kt, " and ").concat(xt, " must match. Example: ").concat(Mt) };
                                if (r.length > 2) return { validationError: "The parameter length of attribute ".concat(St, ", ").concat(kt, " and ").concat(xt, " is too long. At most 2 parameters for each ") + "attribute are needed: one for mobile and one for desktop, while " + "you are providing ".concat(r.length, " parameters. Example: ").concat(Mt, ".") };
                                for (var a = [], s = [], o = 0; o < r.length; o++) {
                                    var c = Number(n[o]);
                                    if (isNaN(c) || 0 === c) return { validationError: "Wrong value '".concat(n[o], "' for ").concat(xt, ".") };
                                    a.push(c);
                                    var p = Number(i[o]);
                                    if (isNaN(p) || 0 === p) return { validationError: "Wrong value '".concat(i[o], "' for ").concat(kt, ".") };
                                    s.push(p)
                                }
                                return { numberOfRows: a, numberOfColumns: s, layoutTypes: r }
                            }(e);
                            if (n.validationError) return { slotWidth: 0, slotHeight: 0, numberOfColumns: 0, numberOfRows: 0, layoutType: lt, validationError: n.validationError };
                            r = 2 === n.layoutTypes.length && t >= 468 ? 1 : 0;
                            var i = function(t) { return 0 === t.indexOf(Pt) ? t : Pt + t }(n.layoutTypes[r]),
                                a = function(t, e, r) { for (var n = At[r], i = e; t / i < n && i > 1;) i--; return i }(t, n.numberOfColumns[r], i),
                                s = n.numberOfRows[r],
                                o = function(t, e, r, n) { var i = Tt(Et(Nt(t, e), n), r); return t > 1500 ? { width: 0, height: 0, sizeError: "Calculated slot width is too large: " + t } : i > 1500 ? { width: 0, height: 0, sizeError: "Calculated slot height is too large: " + i } : { width: t, height: i } }(t, a, s, i);
                            return o.sizeError ? { slotWidth: 0, slotHeight: 0, numberOfColumns: 0, numberOfRows: 0, layoutType: i, validationError: o.sizeError } : { slotWidth: o.width, slotHeight: o.height, numberOfColumns: a, numberOfRows: s, layoutType: i }
                        }(r, a) : function(t, e) { if (t < 468) { if (e) { var r = function(t, e, r, n) { var i = Nt(t, 1); return { width: t, height: Math.floor(i / 1.91 + 70) + Tt(Et(i, "mobile_banner_image_sidebyside"), 11) } }(t); return { slotWidth: r.width, slotHeight: r.height, numberOfColumns: 1, numberOfRows: 12, layoutType: "mobile_banner_image_sidebyside" } } var n = zt(t); return { slotWidth: n.width, slotHeight: n.height, numberOfColumns: 1, numberOfRows: 13, layoutType: ft } } var i = zt(t); return { slotWidth: i.width, slotHeight: i.height, numberOfColumns: 4, numberOfRows: 2, layoutType: lt } }(r, r <= 468)).validationError ? (G().error("AMP-AD", i.validationError), 0) : (n.setAttribute(xt, i.numberOfRows), n.setAttribute(kt, i.numberOfColumns), n.setAttribute(St, i.layoutType), i.slotHeight)) : (s = Math.round(t / this.config.fullWidthHeightRatio), S(100 <= (o = e)), Math.min(Math.max(s, 100), o));
                        var r, n, i, a, s, o
                    }, r
                }(t.BaseElement),
                cr = {},
                pr = null,
                dr = function(t) {
                    o(r, t);
                    var e = u(r);

                    function r(t) { var r; return (r = e.call(this, t)).ci = null, r.Ngt = null, r.uiHandler = null, r }
                    var n = r.prototype;
                    return n.getLayoutPriority = function() { return 0 }, n.isLayoutSupported = function(t) { return Rt(t) }, n.buildCallback = function() {
                        this.ci = this.element.getAttribute("data-url"), this.Ngt = this.element.getAttribute("data-slot"), Y(null === this.Ngt || this.Ngt.match(/^[0-9a-z]+$/), "custom ad slot should be alphanumeric: " + this.Ngt);
                        var t, e, r = (t = this.element, nt(e = Q(Z(t)), "url") ? tt(e, "url") : null);
                        Y(this.ci && r.isSecure(this.ci), "custom ad url must be an HTTPS URL"), this.uiHandler = new se(this)
                    }, n.layoutCallback = function() {
                        var t, e = this,
                            r = this.Tgt(),
                            n = cr[r] || (t = this.win, J(t, "xhr")).fetchJson(r).then((function(t) { return t.json() }));
                        return null !== this.Ngt && (cr[r] = n), n.then((function(t) {
                            var r, n = t;
                            if (null !== e.Ngt && (n = v(t, e.Ngt) ? t[e.Ngt] : null), n && "object" == p(n)) {
                                n = e.Rgt(n), e.renderStarted();
                                try {
                                    (r = e.element, $(r, "templates")).findAndRenderTemplate(e.element, n).then((function(t) {! function(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }(e.element), e.element.appendChild(t), e.signals().signal(ve) }))
                                } catch (t) { e.uiHandler.applyNoContentUI() }
                            } else e.uiHandler.applyNoContentUI()
                        }))
                    }, n.Rgt = function(t) {
                        if (e = this.element, _("template"), function(t, e) {
                                if (void 0 !== y ? y : y = function(t) {
                                        try {
                                            var e = t.ownerDocument,
                                                r = e.createElement("div"),
                                                n = e.createElement("div");
                                            return r.appendChild(n), r.querySelector(":scope div") === n
                                        } catch (t) { return !1 }
                                    }(t)) return t.querySelector(x(e, ":scope"));
                                var r = function(t, e) {
                                    var r = t.classList,
                                        n = "i-amphtml-scoped";
                                    r.add(n);
                                    var i = x(e, ".".concat(n)),
                                        a = t.querySelectorAll(i);
                                    return r.remove(n), a
                                }(t, e)[0];
                                return void 0 === r ? null : r
                            }(e, "> ".concat("template"))) return t;
                        var e;
                        if (Y(t.templateId, "TemplateId not specified"), Y(t.data && "object" == p(t.data), "Template data not specified"), this.element.setAttribute("template", t.templateId), t.vars && "object" == p(t.vars))
                            for (var r = t.vars, n = Object.keys(r), i = 0; i < n.length; i++) { var a = "data-vars-" + n[i]; try { this.element.setAttribute(a, r[n[i]]) } catch (t) { this.user().error("amp-ad-custom", "Fail to set attribute: ", t) } }
                        return t.data
                    }, n.unlayoutCallback = function() { return this.uiHandler.applyUnlayoutUI(), !0 }, n.Tgt = function() {
                        if (null === this.Ngt) return Y(this.ci);
                        if (null === pr) {
                            pr = {};
                            for (var t = {}, e = (o = this.element, "BODY", o.closest ? o.closest("BODY") : function(t, e, r) {
                                    var n;
                                    for (n = t; n && void 0 !== n; n = n.parentElement)
                                        if (e(n)) return n;
                                    return null
                                }(o, (function(t) { return function(t, e) { var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector; return !!r && r.call(t, "BODY") }(t) }))).querySelectorAll("amp-ad[type=custom]"), r = 0; r < e.length; r++) {
                                var n = e[r],
                                    i = n.getAttribute("data-url"),
                                    a = n.getAttribute("data-slot");
                                null !== a && (i in t || (t[i] = []), t[i].push(encodeURIComponent(a)))
                            }
                            for (var s in t) pr[s] = _e(s, "ampslots", t[s].join(","))
                        }
                        var o;
                        return pr[this.ci]
                    }, r
                }(t.BaseElement),
                ur = function(t) {
                    o(r, t);
                    var e = u(r);

                    function r() { return e.apply(this, arguments) }
                    var n = r.prototype;
                    return n.isLayoutSupported = function(t) { return !0 }, n.upgradeCallback = function() {
                        var t, e = this,
                            r = (m || (m = f({ "adsense": function() { return !0 }, "adzerk": function() { return !0 }, "dianomi": function() { return !0 }, "doubleclick": function() { return !0 }, "fake": function() { return !0 }, "nws": function() { return !0 }, "smartadserver": function() { return !0 }, "valueimpression": function() { return !0 } })), m),
                            n = this.element.getAttribute("data-consent-notification-id"),
                            a = n ? (t = this.element, function(t, e, r, n) { return it(t, "userNotificationManager", r, void 0).then((function(t) { return function(t, e, r) { return Y(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", r, r, r) }(t, 0, r) })) }(t, 0, "amp-user-notification")).then((function(t) { return t.get(n) })) : i(),
                            s = this.element.getAttribute("type");
                        return a.then((function() {
                            var t = "custom" === s;
                            if (Y(t || v(w, s) || v(r, s), 'Unknown ad type "'.concat(s, '"')), t) return new dr(e.element);
                            e.win.ampAdSlotIdCounter = e.win.ampAdSlotIdCounter || 0;
                            var n = e.win.ampAdSlotIdCounter++;
                            return new Promise((function(t) {
                                e.getVsync().mutate((function() {
                                    e.element.setAttribute("data-amp-slot-index", n);
                                    var i = e.element.getAmpDoc().getMetaByName("amp-3p-iframe-src");
                                    if (!r[s] || !r[s](e.win, e.element, i)) return t(new or(e.element));
                                    var a, o = function(t) { return "amp-ad-network-".concat(t, "-impl") }(s);
                                    e.element.setAttribute("data-a4a-upgrade-type", o), t((a = e.win, J(a, "extensions")).loadElementClass(o).then((function(t) { return new t(e.element) })).catch((function(t) { var r = e.element.tagName; return e.user().error(r, "Unable to load ad implementation for type ", s, ", falling back to 3p, error: ", t), new or(e.element) })))
                                }))
                            }))
                        }))
                    }, r
                }(t.BaseElement);
            t.registerElement("amp-ad", ur, 'amp-ad iframe,amp-embed iframe{border:0!important;margin:0!important;padding:0!important;position:relative}.i-amphtml-ad-default-holder{position:absolute;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:hsla(0,0%,78%,0.05)}.i-amphtml-ad-default-holder:after{content:"Ad";content:attr(data-ad-holder-text);background-color:transparent;border-radius:2px;color:#696969;font-size:10px;line-height:1;font-family:Arial,sans-serif;padding:3px 4px 1px;border:1px solid #696969}amp-ad[sticky]{visibility:hidden;-ms-flex-align:center;align-items:center}amp-ad[type=adsense],amp-ad[type=doubleclick]{direction:ltr}amp-ad[data-a4a-upgrade-type=amp-ad-network-adsense-impl]>iframe,amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl]>iframe{min-height:0;min-width:0}amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl][height=fluid]>iframe{height:100%!important;width:100%!important;position:relative}amp-ad[data-a4a-upgrade-type=amp-ad-network-doubleclick-impl][height=fluid]{width:100%!important}amp-ad .amp-ad-close-button{position:absolute;width:28px;height:28px;right:0;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg width="13" height="13" viewBox="341 8 13 13" xmlns="http://www.w3.org/2000/svg"><path fill="%234F4F4F" d="M354 9.31 352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z" fill-rule="evenodd"/></svg>\');background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-ad .amp-ad-close-button:before{position:absolute;content:"";top:-20px;right:0;left:-20px;bottom:0}amp-ad[sticky=bottom-right] .amp-ad-close-button,amp-ad[sticky=bottom] .amp-ad-close-button,amp-ad[sticky=left] .amp-ad-close-button,amp-ad[sticky=right] .amp-ad-close-button{top:-28px}amp-ad[sticky=top] .amp-ad-close-button{transform:rotate(270deg);bottom:-28px}amp-ad[sticky=left] .amp-ad-close-button{transform:rotate(90deg);left:0}[dir=rtl] amp-ad .amp-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] amp-ad .amp-ad-close-button:before{right:-20px;left:0}amp-ad[sticky]{z-index:2147483647;position:fixed;overflow:visible!important;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}amp-ad[sticky=top]{padding-bottom:5px;top:0}amp-ad[sticky=bottom],amp-ad[sticky=top]{width:100%!important;max-height:20%!important;background:#fff}amp-ad[sticky=bottom]{max-width:100%;padding-bottom:env(safe-area-inset-bottom,0px);bottom:0;padding-top:4px}amp-ad[sticky=bottom-right]{bottom:0;right:0}amp-ad[sticky=left],amp-ad[sticky=right]{background:#fff}amp-ad[sticky=left] iframe,amp-ad[sticky=right] iframe{max-width:120px!important}amp-ad[sticky=left]{left:0}amp-ad[sticky=right]{right:0}@media (max-width:1024px){amp-ad[sticky=left],amp-ad[sticky=right]{display:none!important}}\n/*# sourceURL=/extensions/amp-ad/0.1/amp-ad.css*/'), t.registerElement("amp-embed", ur)
        }();
        /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    }
});
//# sourceMappingURL=amp-ad-0.1.js.map