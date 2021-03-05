
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4XjRk0psoWJYMFAEDgydalyGPYqnLbZRBXK&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36637431&time=1614944064&app_version=2.0.2&sign=493d5423917522131361470df66ddf26", 
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YwolLGhMqN9kcVd5KLd1L3yAP6WMnmlGK9&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36630283&time=1614944093&app_version=2.0.2&sign=5948a513f92a982d205b42e552b67ca7", 
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxO9o3tqBJReijQ2Z5y78M9zV2YP3KBGAe&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36633854&time=1614944110&app_version=2.0.2&sign=aa6ad2b5399e6dec24688581ed68ba07", 
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azVRGnNF8Z0qGSrewGKZaV6yqY2lXojxeM8&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36630981&time=1614944133&app_version=2.0.2&sign=3bf79e7bcfbb40be0c8a9530025694d2", 
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9xorjtJdnYEtgGrmLD78oADjvkbgZRGLV&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36653237&time=1614944166&app_version=2.0.2&sign=b58e1f392e416d2f9940b8bdc7f15dca",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxOl6GTqBJReijQ2ZpD78M9zV2YP3KBGAe&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36635537&time=1614944185&app_version=2.0.2&sign=33e8d78597681823406725c4f48892ff", 
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9xje3FJdnYEtgGrmww78oADjvkbgZRGLV&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36640054&time=1614944208&app_version=2.0.2&sign=bab3e5fdfb18215e45b62c6493bd4a92", 
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjLoroUeVjL5c05PzQ64K5N3rYk6pmxVGl&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36653244&time=1614944227&app_version=2.0.2&sign=993febf53fd7946eb91c0b2a2e3a13dd", 
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLarv5AJ9S9yM0XuNpjL6bagRQY9OZjA5eJpl&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36587368&time=1614944257&app_version=2.0.2&sign=3d63108400bf8a7743d9751526a9cdae", 
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxONyRCqBJReijQ2ZND78M9zV2YP3KBGAe&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36631837&time=1614944273&app_version=2.0.2&sign=b1f624ee3e14fe1582353a237df95063",
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782bl9dSYnqvDizQp6RK1gxne6rYKdpWVoR&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634660&time=1614945235&app_version=2.0.2&sign=5de99e1aaf1e979c918a419aa27ac5f8", 
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7o9KDmPI6O3ypcx60DGE1jpGDnANbo8KXQr&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36610945&time=1614945319&app_version=2.0.2&sign=7778fcc162d531a5b8cf1b3155485b45", 
"https://focus.youth.cn/article/s?signature=KYJBMEDexQprwO0aJJRldnIVoG6dFljeqvKaj5zbg8RLkP9oXd&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36624434&time=1614945348&app_version=2.0.2&sign=1e187d4b2f462f24e8f58cd695ae0e79", 
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8NVgMfVp9Q5FMy8G0Ea8B9yl0Z2eRAmzr&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36636804&time=1614945367&app_version=2.0.2&sign=db4be4597c6ce53eb376743b93cc58ea", 
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjQJlQFezw8yF05PR9N4K5N3rYk6pmxVGl&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36618857&time=1614945384&app_version=2.0.2&sign=7dd4c75c365b321509ef2c7b2404adc7",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1MnpV3XTK86XeCLKoeOE49VGjJl8gXB5keP&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36551341&time=1614945401&app_version=2.0.2&sign=b5bb1bab206cbdbcb797ed4c5b7170ed", 
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjQJOWcezw8yF05PR9y4K5N3rYk6pmxVGl&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36618675&time=1614945422&app_version=2.0.2&sign=02f06e7c65d387afecf5d77d0cee90da", 
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7NEKlLzuXGdkvhvNo2P34nMY6dljLxe9Opk&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36610688&time=1614945439&app_version=2.0.2&sign=73778573e6c96ea0481588ea81a28765", 
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782qAZXIYnqvDizQp5Lo1gxne6rYKdpWVoR&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36627080&time=1614945464&app_version=2.0.2&sign=c586ce281cc40471385b11d5e10920d1", 
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RBQAeWsJV3nofORJeEl1ov3Xqel0ngwVyZ&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634267&time=1614945485&app_version=2.0.2&sign=853650ed8ff0b0c9b9556b03fbb84d73"]

let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    for (let i = 0; i < articles.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(9000);

        await visit();
        await $.wait(9000);

        await openpage();
        await $.wait(9000);

        await callback();
        await $.wait(9000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
