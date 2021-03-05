
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Qq6ogxcPmOj3Ix0D58E4koMEv6nydKPZLD&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36632488&time=1614944335&app_version=2.0.2&sign=caeacfaddb73c943a6e0d457134185ae", 
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxONWrUqBJReijQ2Zm378M9zV2YP3KBGAe&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36631262&time=1614944350&app_version=2.0.2&sign=21c912a50caaa98de5764c33c6c0105c", 
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAyModNsz3p5yFXlkYV8awr9G5ZDV6ldJ2N&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36653456&time=1614944368&app_version=2.0.2&sign=db6f0311b933469735f2a10575256350", 
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxOlqLCqBJReijQ2ZqO78M9zV2YP3KBGAe&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36636743&time=1614944382&app_version=2.0.2&sign=cade17b23762b0dfa3bd374940958485", 
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8N3egfVnDWJUMy8Gwja8B9yl0Z2eRAmzr&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36653450&time=1614944401&app_version=2.0.2&sign=26a018215dde17decf3b09a4a6ceeb81",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792N6BYsxY9EKFmdZQXBa9Ee0q6OyNbJvDX&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36630579&time=1614944419&app_version=2.0.2&sign=4dd2bfea1537a598467699aeb7c160fd", 
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azVqgbkH8Z0qGSrewGovaV6yqY2lXojxeM8&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36584842&time=1614944435&app_version=2.0.2&sign=f77d57a50f6a726b0564494caef4d9b4", 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PxvAnqFmnqG6CbWE8gw1GV8wZPJorvpjEW&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36454813&time=1614944458&app_version=2.0.2&sign=1f00dda428cbe3908458967dd2ea5316", 
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792NY3WTxY9EKFmdZQo0a9Ee0q6OyNbJvDX&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36643667&time=1614944473&app_version=2.0.2&sign=f0745de75ce8766f8a3a0c5546ac8cb3", 
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eJEZkZhYrVM9FBx3jLx7gRyAEYpXDmeo0O&uid=54172453&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36633126&time=1614944488&app_version=2.0.2&sign=64ccbcb9285ea70c1435ee93ed6ab020",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjLmQWCezw8yF05PRNQ4K5N3rYk6pmxVGl&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634471&time=1614945529&app_version=2.0.2&sign=febef9553b87a0961c5f513930f7dcfd", 
"https://focus.youth.cn/article/s?signature=ZRpgeBYKPdGlvj24Goy9Lkiz9ePLFqdmr294X96VqmbxkDwr0n&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36625696&time=1614945546&app_version=2.0.2&sign=0d2b75d75b1ef6a029d517207080c80a", 
"https://focus.youth.cn/article/s?signature=8DpYRNzAGL5bkKE1RBQAp0UJV3nofORJenP1ov3Xqel0ngwVyZ&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634588&time=1614945566&app_version=2.0.2&sign=5d5d1f30b77373c0029070a52a6c9379", 
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamB2JQyiRModeUOq9QNZ1nX3kY58KdmBzRO&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634593&time=1614945582&app_version=2.0.2&sign=1c93745bdaaca7f84f44f4705657ae2d", 
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nRpVNzujwRqKs50lWzy7ZPYQ3lm9pbD2yn&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36594133&time=1614945599&app_version=2.0.2&sign=5ba9d4908ee10ee86195550501b9ed7f",
"https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4kxRDgWUqYgLoFjQ20xO78M9zV2YP3KBGAe&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36587236&time=1614945616&app_version=2.0.2&sign=0cc3afe2e5526f6fe0574ce8df55c8cd", 
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YwqzlqtMoKdpcVd5Lqj1L3yAP6WMnmlGK9&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36584625&time=1614945639&app_version=2.0.2&sign=06f797213eba71e6d83d2b5462bc29ad", 
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wVEmNpSkw3RziRYd58W1rjJNqwAQ0OoW9B&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36589024&time=1614945657&app_version=2.0.2&sign=c126063f611e78cbadb03bd02062ceda", 
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamB2JXQIRModeUOq9Qb61nX3kY58KdmBzRO&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634216&time=1614945672&app_version=2.0.2&sign=c3595c808f23c2f33af6b342d6af62c9", 
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eJEkovSYj5wviBx3WQM7gRyAEYpXDmeo0O&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36634936&time=1614945690&app_version=2.0.2&sign=e9d4aa420d259bcfa6a8c8dfd9e0620f", 
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PLbNgImlvjQckBeMrwavNyb8EMlgYnm6k&uid=54182047&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36607258&time=1614945706&app_version=2.0.2&sign=93bf784526deffd6b5c7631bbaeb1fad"]

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
