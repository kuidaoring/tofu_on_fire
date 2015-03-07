<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>イルミなふだ</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" href="./style.css">
<script type="text/javascript" src="http://konashi.ux-xu.com/kjs/konashi-bridge.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="http://cdn.mlkcca.com/v0.2.8/milkcocoa.js"></script>

</head>
<body>

<script>
window.onload = function(){
$("#profilePage").removeClass("disable");
}
</script>

<!-- プロフィール入力 -->
<?php include("profile.php"); ?>


<!-- 興味リスト -->
<?php include("kyoumiList.php"); ?>




<script type="text/javascript" src="./app.js"></script>
</body>
</html>
