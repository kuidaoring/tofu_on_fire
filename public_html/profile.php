<div id="profilePage">

<h1>あなたの情報</h1>
<p>この情報でOK？</p>

<h2>出身地</h2>
<select id="todofuken">
    <option>北海道</option>
    <option>青森</option>
    <option>岩手</option>
    <option>宮城</option>
    <option>秋田</option>
    <option>山形</option>
    <option>福島</option>
    <option>東京</option>
    <option>神奈川</option>
    <option>埼玉</option>
    <option>千葉</option>
    <option>茨城</option>
    <option>栃木</option>
    <option>群馬</option>
    <option>山梨</option>
    <option>新潟</option>
    <option>長野</option>
    <option>愛知</option>
    <option selected>岐阜</option>
    <option>静岡</option>
    <option>三重</option>
    <option>富山</option>
    <option>石川</option>
    <option>福井</option>
    <option>大阪</option>
    <option>兵庫</option>
    <option>京都</option>
    <option>滋賀</option>
    <option>奈良</option>
    <option>和歌山</option>
    <option>島根</option>
    <option>鳥取</option>
    <option>岡山</option>
    <option>広島</option>
    <option>山口</option>
    <option>徳島</option>
    <option>香川</option>
    <option>愛媛</option>
    <option>高知</option>
    <option>福岡</option>
    <option>佐賀</option>
    <option>長崎</option>
    <option>熊本</option>
    <option>大分</option>
    <option>宮崎</option>
    <option>鹿児島</option>
    <option>沖縄</option>
</select>

<h2>職業</h2>
<select id="syokugyo">
    <option>エンジニア</option>
    <option>デザイナー</option>
    <option>ディレクター</option>
    <option>プロデューサー</option>
    <option>データアナリスト</option>
    <option>営業</option>
    <option>経営者</option>
    <option>学生</option>
    <option>その他</option>
</select>

<h2>年齢</h2>
<select id="nenrei"></select>

<button class="next_btn">次へ</button>

<script>
for(var n = 0;n<=120;n++){
    if(n == 28){
        $("#nenrei").append("<option selected>"+n+"歳</option>");
    }else{
        $("#nenrei").append("<option>"+n+"歳</option>");
    }
}
</script>
</div>
