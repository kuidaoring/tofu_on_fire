$(function() {

var NAME = "mbed HRM1017";
var PIN = 5;
var UP = k.LOW
var DOWN = k.HIGH;
var USERS = {
        ysasaki: [
            "うんこ",
            "Perfume",
            "ONE OK ROCK",
        ],
        kinadu: [],
        yeshi: [
            "フォクすけ",
            "JavaScript",
        ],
        yuujsato: [
            "JavaScript",
            "ビール",
        ]
};
var user = USERS.kinadu;

if (location.href.match(/yeshi$/)) {
    user = USERS.yeshi;
} else if (location.href.match(/yuujsato$/)) {
    user = USERS.yuujsato;
}

// konashiの初期化と端末の発見
k.ready(function() {
    k.digitalWrite(PIN, DOWN);
});
k.find();


// milkcocoa初期化
var milkcocoa_app_id = 'io-ji6yr5qe9';
var milkcocoa = new MilkCocoa("https://" + milkcocoa_app_id + ".mlkcca.com/");
var ds = milkcocoa.dataStore("message");

// milkcocoaから不要なデータをまるっと削除
ds.query().done(function(data) {
    data.forEach(function(value) {
        ds.remove(value.id);
    });
});

//リアルタイムに変更を監視
ds.on("push", function(data) {
    if (data.value.state && data.value.state === "UP"){
        if (user.length === 0){
            console.log("match all");
            // upが来て興味をもってればピンを光らせる
            k.digitalWrite(PIN, UP);
        } else if($.inArray(data.value.key, user) !== -1) {
            // upが来て興味をもってればピンを光らせる
            console.log("match user");
            k.digitalWrite(PIN, UP);
        } else {
            console.log("no match");
        }
        console.log("UP: " + data.value.key);
    } else {
        if (user.length === 0) {
            console.log("match all");
            // downが来て興味をもってればピンを光らせる
            k.digitalWrite(PIN, DOWN);
        } else if($.inArray(data.value.key, user) !== -1) {
            console.log("match user");
            // downが来て興味をもってればピンを光らせる
            k.digitalWrite(PIN, DOWN);
        } else {
            console.log("no match");
        }
        console.log("DOWN: " + data.value.key);
    }
});

// 興味選択開始
$('#kyoumiList li').on("down", function(e) {
    console.log("touchstart: " + $(e.target).text());
    ds.push({
        state: "UP",
        key: $(e.target).text().replace(/♥/, ''),
    });
});

// 興味選択終わり
// ボタンを押してる間光るようにtouchendで光るのをやめる
$("#kyoumiList li").on("up", function(e) {
    console.log("touchend: " + $(e.target).text());
    ds.push({
        state: "DOWN",
        key: $(e.target).text().replace(/♥/, ''),
    });
});

// ページ遷移とページ行き過ぎ抑止
var maxPageNum = $("section").length - 1;
$(".next_btn,.loginBtn").on("tap", function() {
    var pages = $("core-animated-pages")[0];
    if (pages.selected < maxPageNum) {
        pages.selected += 1;
    }
});

});
