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

k.ready(function() {
    k.digitalWrite(PIN, DOWN);
});

k.find();
var milkcocoa_app_id = 'io-ji6yr5qe9';
var milkcocoa = new MilkCocoa("https://" + milkcocoa_app_id + ".mlkcca.com/");
var ds = milkcocoa.dataStore("message");

//まるっと削除
ds.query().done(function(data) {
    data.forEach(function(value) {
        ds.remove(value.id);
    });
});


//リアルタイムに変更を監視
ds.on("push", function(data) {
    if (data.value.state && data.value.state === "UP"){
        if (user.length === 0 || $.inArray(data.value.key, user)) {
            k.digitalWrite(PIN, UP);
        }
        console.log(data.value.key);
    } else {
        if (user.length === 0 || $.inArray(data.value.key, user)) {
            k.digitalWrite(PIN, DOWN);
        }
        console.log(data.value.key);
    }
    $('#debug').append($('<div>').text(data.value.state));
});

$('.syumiList li').on("touchstart", function(e) {
    ds.push({
        state: "UP",
        key: $(e.target).text(),
    });
});

$(".syumiList li").on("touchend", function(e) {
    ds.push({
        state: "DOWN",
        key: $(e.target).text(),
    });
});

});
