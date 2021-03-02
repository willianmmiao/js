
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3VrQqEs63J56ILZ20wO7gXDkJEqdw5xObL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36518867&time=1614669305&app_version=2.0.2&sign=50b5608b5e6609332fedd4e2b2e08abb", 
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q8drl8TQgbOQcNv90AK1rny295VAlmPWzY&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36551777&time=1614669324&app_version=2.0.2&sign=65cd67e1e6451c706341a3d10a1bd2a8", 
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1lq8RXLHvxKRvcvdMgAE4D56Pd3OMonkQx9&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36518024&time=1614669341&app_version=2.0.2&sign=37f072193c7294270be534028cf09cf6", 
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bxqz6VSeQO9eCJXmK5k1LwQPGzxp0AvZME&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36522652&time=1614669371&app_version=2.0.2&sign=279bac62991c925965a364469c4c3ea0", 
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q8yQpOFQgbOQcNv90yP1rny295VAlmPWzY&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36530871&time=1614669388&app_version=2.0.2&sign=d1616b1f7a995f18f33e3f7237ab8491", 
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PbpvQSWz8bWFkB9jXRavNyb8EMlgYnm6k&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510758&time=1614669411&app_version=2.0.2&sign=d8d89ad147eb7cf7abc70da700494acb", 
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PLxp3fWz8bWFkB9jXXavNyb8EMlgYnm6k&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36547038&time=1614669432&app_version=2.0.2&sign=5707f7610a682f45b650b1f8a8c674eb", 
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4QqgeQxtDZXjDTx0MbQd4koMEv6nydKPZLD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36513732&time=1614669497&app_version=2.0.2&sign=f882157a3d8eed4e59a5e43c434eebe8", 
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1MnpOZVipl25pULKXnZ049VGjJl8gXB5keP&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36552475&time=1614669525&app_version=2.0.2&sign=219ab013ccf6c1fb9a7e41d4b5dd49a5", 
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7o9wqEGSMGLzMix623mG1jpGDnANbo8KXQr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36457138&time=1614669541&app_version=2.0.2&sign=03fe6338112cf346aee31b20800a45fc", 
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792BGWxT0pNE0tmdr8ooa9Ee0q6OyNbJvDX&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36550967&time=1614669568&app_version=2.0.2&sign=35841503520a9b7f02e188f59d35f877", 
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLarv5bDBhRWj0RfNp0XzGagRQY9OZjA5eJpl&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36545778&time=1614669587&app_version=2.0.2&sign=a68dc7e8372f92995dc44962f9699bbc", 
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nRpv0Qh06Y90t50VkgG7ZPYQ3lm9pbD2yn&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555496&time=1614669606&app_version=2.0.2&sign=693484daa4a1ea50f92de58cc865c69e", 
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gMA9ZBHYP2bYTenvE2yayGDn2Z0PAvkopB&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36551527&time=1614669626&app_version=2.0.2&sign=4aae0edf61cd547b438fc4fc4e2fc6b7", 
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4XjgL90t2eQY2CAEKWm9alyGPYqnLbZRBXK&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36518208&time=1614669646&app_version=2.0.2&sign=1dcb61edbdac99370211b48977f3e340", 
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azVd2zlfQjKqQcregQYPaV6yqY2lXojxeM8&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510762&time=1614669711&app_version=2.0.2&sign=b78a0e77bb89668e8c4f26dfc5505976", 
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4p9jbGksqzdwqsz3pvQQ7M8ZkP3BAW9pJqD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36561183&time=1614669747&app_version=2.0.2&sign=b58539934e12075e9324849eea328691", 
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamBAyRrCyZJ0ysOqYEPZ1nX3kY58KdmBzRO&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36237257&time=1614669789&app_version=2.0.2&sign=da81fb32b1850313ec0a750d21b6ebea", 
"https://focus.youth.cn/article/s?signature=mq63rgk0doNXbYK7LMNrm9uzX3Ozf8zZqX6aEMLO9lwG2zQJeB&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36293332&time=1614669832&app_version=2.0.2&sign=22641cba4c0456cbd454906a5d618989", 
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjeRJ8TmArLms05nNXy4K5N3rYk6pmxVGl&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36127467&time=1614669850&app_version=2.0.2&sign=ef3845141deaf54dfbe52f82d993da82", 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PxeMovcZQKGZtbWMqGo1GV8wZPJorvpjEW&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36171903&time=1614669867&app_version=2.0.2&sign=93b6ec299b9180a4dac379bfa77b450d", 
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8mzWdcLAgWLcMyjeZ3a8B9yl0Z2eRAmzr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36222655&time=1614669883&app_version=2.0.2&sign=631f50c299db75e8c42265521a584b5f", 
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gMRZZRhYP2bYTenvE05ayGDn2Z0PAvkopB&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36112059&time=1614669899&app_version=2.0.2&sign=39700731e88e6f3395973868e9c1e2ec", 
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1MnrYx9Cpl25pULKXnmE49VGjJl8gXB5keP&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36360991&time=1614669916&app_version=2.0.2&sign=7618aa7ebc0be50a8bb265812777228e", 
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4p9rZKPiqzdwqsz3pv8x7M8ZkP3BAW9pJqD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36227757&time=1614669932&app_version=2.0.2&sign=916670b704be63b7fd9e79a6110f64ff", 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1Px5PybfZQKGZtbWMqAY1GV8wZPJorvpjEW&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36212118&time=1614669954&app_version=2.0.2&sign=e71e23ffa15fd36bd6d547d1b2bb1815", 
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1MnexndFpl25pULKXnyB49VGjJl8gXB5keP&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36161029&time=1614669978&app_version=2.0.2&sign=d178b9f030a2896502ed2c95a44d2475", 
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4Xj5y9bs2eQY2CAEKWE0alyGPYqnLbZRBXK&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36158113&time=1614670047&app_version=2.0.2&sign=23bfc873c4ff08e7b637735e7d99c2ee", 
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q8KP0EfQgbOQcNv90vG1rny295VAlmPWzY&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36202188&time=1614670071&app_version=2.0.2&sign=fdce9689002491b9c238f474eb558ecb", 
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY75DZdzbfqb5jqsvJZEZQ4lK9opXE8ZO3mrb&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36258004&time=1614670091&app_version=2.0.2&sign=fca280085fbd68d65e4ab444da5751a5", 
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2G6vowCVQG0VFNKQ5QE1nPDWpxVg2LZmRX&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36442519&time=1614670115&app_version=2.0.2&sign=06d770fd872d37388b41a09676f20187"]

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
