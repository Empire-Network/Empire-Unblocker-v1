const blocked = [
    "trk.pinterest.com",
    "widgets.pinterest.com",
    "events.reddit.com",
    "events.redditmedia.com",
    "ads.youtube.com",
    "ads-api.tiktok.com",
    "analytics.tiktok.com",
    "ads-sg.tiktok.com",
    "analytics-sg.tiktok.com",
    "business-api.tiktok.com",
    "ads.tiktok.com",
    "log.byteoversea.com",
    "ads.yahoo.com",
    "analytics.yahoo.com",
    "geo.yahoo.com",
    "udc.yahoo.com",
    "udcm.yahoo.com",
    "advertising.yahoo.com",
    "analytics.query.yahoo.com",
    "partnerads.ysm.yahoo.com",
    "log.fc.yahoo.com",
    "gemini.yahoo.com",
    "adtech.yahooinc.com",
    "extmaps-api.yandex.net",
    "appmetrica.yandex.ru",
    "adfstat.yandex.ru",
    "metrika.yandex.ru",
    "advertising.yandex.ru",
    "offerwall.yandex.net",
    "adfox.yandex.ru",
    "auction.unityads.unity3d.com",
    "webview.unityads.unity3d.com",
    "config.unityads.unity3d.com",
    "adserver.unityads.unity3d.com",
    "iot-eu-logser.realme.com",
    "iot-logser.realme.com",
    "bdapi-ads.realmemobile.com",
    "bdapi-in-ads.realmemobile.com",
    "api.ad.xiaomi.com",
    "data.mistat.xiaomi.com",
    "data.mistat.india.xiaomi.com",
    "data.mistat.rus.xiaomi.com",
    "sdkconfig.ad.xiaomi.com",
    "sdkconfig.ad.intl.xiaomi.com",
    "globalapi.ad.xiaomi.com",
    "tracking.rus.miui.com",
    "adsfs.oppomobile.com",
    "adx.ads.oppomobile.com",
    "ck.ads.oppomobile.com",
    "data.ads.oppomobile.com",
    "metrics.data.hicloud.com",
    "metrics2.data.hicloud.com",
    "grs.hicloud.com",
    "logservice.hicloud.com",
    "logservice1.hicloud.com",
    "logbak.hicloud.com",
    "click.oneplus.cn",
    "open.oneplus.net",
    "samsungads.com",
    "smetrics.samsung.com",
    "nmetrics.samsung.com",
    "samsung-com.112.2o7.net",
    "analytics-api.samsunghealthcn.com",
    "advertising.apple.com",
    "tr.iadsdk.apple.com",
    "iadsdk.apple.com",
    "metrics.icloud.com",
    "metrics.apple.com",
    "metrics.mzstatic.com",
    "api-adservices.apple.com",
    "books-analytics-events.apple.com",
    "weather-analytics-events.apple.com",
    "notes-analytics-events.apple.com",
    "fwtracks.freshmarketer.com",
    "adtago.s3.amazonaws.com",
    "analytics.s3.amazonaws.com",
    "advice-ads.s3.amazonaws.com",
    "advertising-api-eu.amazon.com",
    "pagead2.googlesyndication.com",
    "adservice.google.com",
    "afs.googlesyndication.com",
    "mediavisor.doubleclick.net",
    "ads30.adcolony.com",
    "adc3-launch.adcolony.com",
    "events3alt.adcolony.com",
    "wd.adcolony.com",
    "adservetx.media.net",
    "app-measurement.com",
    "analytics.google.com",
    "click.googleanalytics.com",
    "identify.hotjar.com",
    "events.hotjar.io",
    "o2.mouseflow.com",
    "gtm.mouseflow.com",
    "api.mouseflow.com",
    "realtime.luckyorange.com",
    "upload.luckyorange.net",
    "cs.luckyorange.net",
    "an.facebook.com",
    "static.ads-twitter.com",
    "ads-api.twitter.com",
  ];

self.__uv$config = {
    prefix: '/students/lesson/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
try {
window.addEventListener('load', function () {
 
    console.log("loaded");if(typeof window != 'undefined') {
    console.log("Injection started");
    let backBtnExists = document.getElementById("__snorlax__backBtn");
    if(/students/.test(window.location.href) && !backBtnExists) {
    console.log("Started adding button");
    const backBtnDiv = document.createElement("div");
    const backBtn = document.createElement("button");
    const backBtnStyle = document.createElement("style");
    document.body.prepend(backBtnDiv);
    backBtnDiv.appendChild(backBtn);
    backBtnDiv.appendChild(backBtnStyle);
    try {
    backBtn.addEventListener('click', function() {__uv.openUrl('../../science');});
    console.log("Event listener added")
    } catch(e) {console.log(e);}
    backBtn.id = "__snorlax__backBtn";
    backBtnStyle.innerHTML = "#__snorlax__backBtn{position: absolute; z-index: 9999; left: 1vw; top: 2vh; color: white;text-decoration: none;letter-spacing: 3px;font-weight: bold;font-size: 14px;padding: 14px 16px;background-color: rgba(0, 0, 0, 0.1);border-radius: 8px;border: none;transition: background-color .5s;cursor: pointer;}#__snorlax__backBtn:hover{background-color: rgba(2, 55, 105, 0.637);}";
    backBtn.innerHTML = "Go Home"
    console.log("Finished adding button " + backBtn);
    } else if(backBtnExists){console.log("Back Button Already Exists")} else {console.log("Not Injecting, Wrong Page")}
}  })} catch(e){}
 /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */
 inject: async (url) => {
    if (url.host === 'discord.com') {
        return `
            <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
            <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
          `;
    }

    return ``;
}

