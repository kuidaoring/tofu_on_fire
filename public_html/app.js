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
        ],
        yuujsato: [
        ]
};
var user = USERS.yuujsato;

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
        if (user.length === 0 || $.inArray(data.value.key, user)) {
            // upが来て興味をもってればピンを光らせる
            k.digitalWrite(PIN, UP);
        }
        console.log(data.value.key);
    } else {
        if (user.length === 0 || $.inArray(data.value.key, user)) {
            // downが来て興味をもってればピンを光らせる
            k.digitalWrite(PIN, DOWN);
        }
        console.log(data.value.key);
    }
});

// 興味選択開始
$('#kyoumiList li').on("tap", function(e) {
    console.log("touchstart: " + $(e.target).text());
    ds.push({
        state: "UP",
        key: $(e.target).text(),
    });
});

// 興味選択終わり
// ボタンを押してる間光るようにtouchendで光るのをやめる
$("#kyoumiList li").on("tap", function(e) {
    console.log("touchend: " + $(e.target).text());
    ds.push({
        state: "DOWN",
        key: $(e.target).text(),
    });
});

// ページ遷移とページ行き過ぎ抑止
var maxPageNum = $("section").length - 1;
$(".next_btn").on("tap", function() {
    var pages = $("core-animated-pages")[0];
    if (pages.selected < maxPageNum) {
        pages.selected += 1;
    }
});

});
