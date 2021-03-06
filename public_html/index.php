<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>イルミなふだ</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="stylesheet" href="./style.css">
<script type="text/javascript" src="http://konashi.ux-xu.com/kjs/konashi-bridge.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="http://cdn.mlkcca.com/v0.2.8/milkcocoa.js"></script>
<!-- polymer -->
<script type="text/javascript" src="./bower_components/webcomponentsjs/webcomponents.min.js"></script>
<link rel="import" href="./bower_components/polymer/polymer.html">
<link rel="import" href="./bower_components/core-animated-pages/core-animated-pages.html">
<link rel="import" href="./bower_components/core-animated-pages/transitions/slide-from-right.html">


</head>
<body unresolved touch-action="pan-y">

<core-animated-pages transitions="slide-from-right">

<section class="core-selected">
<!-- スプラッシュ画面 -->
<?php include("start.php"); ?>
</section>

<section>
<!-- プロフィール入力 -->
<?php include("profile.php"); ?>
</section>


<section>
<!-- 興味リスト -->
<?php include("kyoumiList.php"); ?>
<?php include("personList.php"); ?>
<?php include("tabMenu.php"); ?>

<script>
$("#kyoumiList").css("height",window.innerHeight - 64);
$("#personList").css("height",window.innerHeight - 64);
$("#kyoumiList li").append("<span class='likeBtn'>♥</span>");

$("#tabMenu li").on("click",function(){
    $("#tabMenu li").removeClass("cur");
    $(this).addClass("cur");
    if($("#personList").hasClass("disable")){
        $("#personList").removeClass("disable");
        $("#kyoumiList").addClass("disable");
    }else{
        $("#personList").addClass("disable");
        $("#kyoumiList").removeClass("disable");
    }
});



</script>

</section>

<section>
</section>


</core-animated-pages>

<script type="text/javascript" src="./app.js"></script>
</body>
</html>
