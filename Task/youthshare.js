
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBjg5dohVn9xVF6yO33Vad93krDoJqw0WYn&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36516756&time=1614526034&app_version=2.0.2&sign=7455159faae39e5501d5a9e80feb2b44",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjgZ2pFmArLms053QEy4K5N3rYk6pmxVGl&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36494223&time=1614526236&app_version=2.0.2&sign=405606b5ddd3e58de3f48e4488200d05",
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1lqwYYqCvxKRvcvdOE324D56Pd3OMonkQx9&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36430997&time=1614526609&app_version=2.0.2&sign=4a5b34b5931edd92f158ad3c9c5e6b02",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792jwb5U0pNE0tmdqjXJa9Ee0q6OyNbJvDX&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36497248&time=1614526276&app_version=2.0.2&sign=58be90711e5c650ef86e3b65d7ce7a21",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9VYvkTVA5YVFgGGQy678oADjvkbgZRGLV&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36439347&time=1614581790&app_version=2.0.2&sign=07fc8ad34ac254aa57d4f36a3d94d00d",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLarv3X9mSRWj0RfNppANQagRQY9OZjA5eJpl&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36511230&time=1614581827&app_version=2.0.2&sign=0445658ec86c8e34916a59d1ba35e17d",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaWwgWzJcy2vQysXnnLX0an93eRAO8BMxdvD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36494570&time=1614581841&app_version=2.0.2&sign=c2aa03caa389e41d45b4d4a4fa49a10b",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAygqW5cwnZ5wcXll8R8awr9G5ZDV6ldJ2N&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510789&time=1614581853&app_version=2.0.2&sign=982d07e47db0e0521328fe98db8a3027", 
"https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3VrMvqt63J56ILZZLeQ7gXDkJEqdw5xObL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36522994&time=1614595787&app_version=2.0.2&sign=0b895c54c2e7ede052752e38d3985d8a",
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azVdjmpCQjKqQcreerXraV6yqY2lXojxeM8&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36508729&time=1614595896&app_version=2.0.2&sign=1e16b16add71f6e8f93f51261a544d1a", 
"https://focus.youth.cn/article/s?signature=6K3Zgj0LVrQbJw94VjgWOnIED6VEcoPPoRZ4mxB5qW8oDnvelE&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36494466&time=1614595930&app_version=2.0.2&sign=a45972c7d8b6e46878fec5db6038add8", 
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1lq8EljUvxKRvcvddvey4D56Pd3OMonkQx9&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36494570&time=1614595956&app_version=2.0.2&sign=80a2a183e947638d744287235319a350", 
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8bDDNSLAgWLcMyyMmOa8B9yl0Z2eRAmzr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36494426&time=1614595977&app_version=2.0.2&sign=4e76763a7e5d6fa8055c9708b016761c", 
"https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3VrWJRC63J56ILZZLoR7gXDkJEqdw5xObL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36512583&time=1614595995&app_version=2.0.2&sign=fef48ba4a38e8d701c27f55429b04e28", 
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bxqDm0SeQO9eCJXXJzl1LwQPGzxp0AvZME&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510624&time=1614596014&app_version=2.0.2&sign=5d285c2a825376b1dede7b3c7a455ffc", 
"https://focus.youth.cn/article/s?signature=gDKBr63RYWdkby97bxqGZ6teQO9eCJXXJ2W1LwQPGzxp0AvZME&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36489508&time=1614596031&app_version=2.0.2&sign=b400895086417afb9155ed385b498de3", 
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1MngQooFpl25pULKKLAd49VGjJl8gXB5keP&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510663&time=1614596052&app_version=2.0.2&sign=44e37c0a0d63a2d47c785c33a3c79671", 
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KmgWPyTrD2PrTZBBZ5daMQLb6BeXxq2kEr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36511230&time=1614596068&app_version=2.0.2&sign=640c084675bd0d759acce3982acb3c65", 
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dBkZJNuAQ3vAce66ewZ75okQ0dyYRDBzxL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36499301&time=1614596258&app_version=2.0.2&sign=4c3f476d7930bd8417d431dc579faa70", 
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7OLgZL2HN6XANTgRRgdma0PMbqvLnr9EKzR&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36493996&time=1614596275&app_version=2.0.2&sign=1e05b4109a1259290307ffc8906d48b2", 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PxgBj0uZQKGZtbWWbGV1GV8wZPJorvpjEW&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36503877&time=1614596295&app_version=2.0.2&sign=2404d2e7184e1770516e6a0890028650", 
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaWwgLlEFy2vQysXnnXexan93eRAO8BMxdvD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36523682&time=1614596314&app_version=2.0.2&sign=a71283233ba8e1f80617651798027fd2", 
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKaxVKyy2T2Mbl2CKZZKBg4DwldQJz0L2RON3&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36500337&time=1614596337&app_version=2.0.2&sign=f712ee5fd27e7a269a30162ad097aaa9", 
"https://focus.youth.cn/article/s?signature=ZRpgeBYKPdGlvj24GogWYkSDkdZDTqddq034X96VqmbxkDwr0n&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36512572&time=1614596360&app_version=2.0.2&sign=94b366aceedf3b3b0024b2b2e7ab52a0", 
"https://focus.youth.cn/article/s?signature=ZRpgeBYKPdGlvj24GogexYtDkdZDTqddqOM4X96VqmbxkDwr0n&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36514755&time=1614596378&app_version=2.0.2&sign=4c1a55f776bd7846875a6d02174d8a3e", 
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4Kmg8dGHrD2PrTZBBZQPaMQLb6BeXxq2kEr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36510191&time=1614596401&app_version=2.0.2&sign=f8fd0115b84311c7bade8813e0b3fa69", 
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eJOk9yid28MdHBxxBkV7gRyAEYpXDmeo0O&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36466337&time=1614596421&app_version=2.0.2&sign=11f771cc934835a1dd9b604c335b8fe3", 
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YwgvqpF8L698tVddVYp1L3yAP6WMnmlGK9&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36520245&time=1614596439&app_version=2.0.2&sign=1bed953b44f6d1dc231e977c9954ac82", 
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4p9Ar8Xiqzdwqsz33zVJ7M8ZkP3BAW9pJqD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36515935&time=1614596456&app_version=2.0.2&sign=c9b9a8bb45d1b6553c19a2b052ef38de", 
"https://focus.youth.cn/article/s?signature=ZLAxJmwrdW82D634ZeNmypIz2xGzfvyyZdX1N9B05XEbOlQGnj&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36561121&time=1614658511&app_version=2.0.2&sign=155148fc91b9998ad7fcf94035083454"; 
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782qyN3h5eO05czQQoql1gxne6rYKdpWVoR&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36561118&time=1614658537&app_version=2.0.2&sign=06936ec862cf83219f1c11a9c0301a6c"; 
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1yVxWBMfRexBRfYNNOXj4xKXjQqgZBMVdDe&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36560786&time=1614658560&app_version=2.0.2&sign=8c6160e0da7ed9adb7992867d7817aa5"; 
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY75DEyJpHqb5jqsvJJVy24lK9opXE8ZO3mrb&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36560784&time=1614658587&app_version=2.0.2&sign=7ba4d6d412c0427209bbf14c841f292f"; 
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1yVxWBjHRexBRfYNNOKW4xKXjQqgZBMVdDe&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36560776&time=1614658630&app_version=2.0.2&sign=66bc5cd1ff4ddf9d2a8393035fbd1c2b"; 
"https://focus.youth.cn/article/s?signature=nME6PzmgxDLdbpG4wVEgoEFdW6odHRYYOwo1rjJNqwAQ0OoW9B&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558269&time=1614658653&app_version=2.0.2&sign=7a01f348fe3b11454bbb8523d4cb69c9"; 
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dB6lbyuAQ3vAce66lM675okQ0dyYRDBzxL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558263&time=1614658712&app_version=2.0.2&sign=02b07ec9812210fd33c73ff9930c747e"; 
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9YBK0FVA5YVFgGGKKV78oADjvkbgZRGLV&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558259&time=1614658730&app_version=2.0.2&sign=319754347e4993ad193b841808e29bb1"; 
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4p9jLV3Cqzdwqsz33JJq7M8ZkP3BAW9pJqD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558255&time=1614658758&app_version=2.0.2&sign=9e1719feff8c77c9a37035a9f908aaf7"; 
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7NEK30jcYBDpYTvNNEQ34nMY6dljLxe9Opk&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558250&time=1614658778&app_version=2.0.2&sign=5a3a28e00b9f6a87fd1d184f6bc15aea"; 
"https://focus.youth.cn/article/s?signature=KYJBMEDexQprwO0aJJRrKBHgLb0giljjnNjaj5zbg8RLkP9oXd&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558246&time=1614658797&app_version=2.0.2&sign=77847c03b7718cbd555e304d931e720e"; 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PxNm6ltZQKGZtbWWj0Y1GV8wZPJorvpjEW&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36558232&time=1614658821&app_version=2.0.2&sign=e4271fafca22de8a9af3a162149b3657"; 
"https://focus.youth.cn/article/s?signature=89NvAVZQolPrzM0a3VMnyAU63J56ILZZlmn7gXDkJEqdw5xObL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36557086&time=1614658882&app_version=2.0.2&sign=55f993ecbc203c1d8977822671fd6a0b"; 
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4Kmo0BXUrD2PrTZBBkeWaMQLb6BeXxq2kEr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555814&time=1614658915&app_version=2.0.2&sign=09e4538cf392e8e613d5efa59fd065ae"; 
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YwqRxzS8L698tVddrJG1L3yAP6WMnmlGK9&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555529&time=1614658935&app_version=2.0.2&sign=04512cc408671c42e90727955d20e7dd"; 
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dB60poCAQ3vAce66gVW75okQ0dyYRDBzxL&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555523&time=1614658953&app_version=2.0.2&sign=7454f5a2af29727753f1ac8317624ac5"; 
"https://focus.youth.cn/article/s?signature=6K3Zgj0LVrQbJw94VjEVJjiED6VEcoPPZKj4mxB5qW8oDnvelE&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555517&time=1614658969&app_version=2.0.2&sign=c482f54b2ca01a34dba4a0147e258f03"; 
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7NEKomQfYBDpYTvNNQb24nMY6dljLxe9Opk&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555505&time=1614659041&app_version=2.0.2&sign=cb812a7d89236cf1351461b3fdb739ad"; 
"https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4p9jPWAtqzdwqsz33MLK7M8ZkP3BAW9pJqD&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555496&time=1614659067&app_version=2.0.2&sign=680addda32fcceab4ca2456f93dab65a"; 
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8nZgLSLAgWLcMyyDx2a8B9yl0Z2eRAmzr&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36555494&time=1614659089&app_version=2.0.2&sign=452c3cf23475c0ed17d9881429a5b1d4"; 
"https://focus.youth.cn/article/s?signature=gzRBYKnQDmkx3yL1PxNp5VFZQKGZtbWWPwX1GV8wZPJorvpjEW&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36554893&time=1614659111&app_version=2.0.2&sign=4588808380b3033d4adc2e103e10fcd2"; 
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nRpvR2S06Y90t500XbD7ZPYQ3lm9pbD2yn&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36554026&time=1614659125&app_version=2.0.2&sign=9107bdd9522eb3dd7d279aeed9f771d4"; 
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamBbGpYFyZJ0ysOqqKbw1nX3kY58KdmBzRO&uid=51638237&phone_code=36cef368385ab4ef4666ce337c13a054&scid=36552793&time=1614659145&app_version=2.0.2&sign=7cb6cdf27bb06c512f8f2186e59d88a1"]

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
