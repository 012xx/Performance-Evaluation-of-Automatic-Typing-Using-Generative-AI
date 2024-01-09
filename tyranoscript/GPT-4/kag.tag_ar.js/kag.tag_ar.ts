//背景変更
tyrano.plugin.kag.tag.bgcamera = {
  vital: [],

  pm: {
    name: "",
    wait: "true",
    time: 1000,
    fit: "true", //比率を崩しても全画面に配置するならtrue。比率を保持して配置するならfalse。カメラの解像度によっては黒塗りの部分ができる可能性があります。

    width: "",
    height: "",
    left: "",
    top: "",

    qrcode: "off", //デフォルトはoff

    debug: "false",

    mode: "", // front or back or auto //前面と背面カメラが有る場合に、指定できます。何も指定しないと標準のカメラが選択されます。
    stop: "false",

    audio: "false",
  },

  start: function (pm) {
    this.kag.ftag.hideNextImg();

    var that = this;

    this.kag.stat.qr.mode = pm.qrcode;

    if (pm.time == 0) pm.wait = "false";

    //現在の背景画像の要素を取得
    var video = document.createElement("video");
    video.id = "bgcamera";

    video.style.backgroundColor = "black";
    video.style.position = "absolute";
    video.style.top = "0px";
    video.style.left = "0px";
    video.style.width = "100%";
    video.style.display = "none";
    video.autoplay = true;
    video.autobuffer = true;

    if (pm.width != "") {
      video.style.width = pm.width + "px";
    }

    if (pm.height != "") {
      video.style.height = pm.height + "px";
    } else {
      if (pm.fit == "true") {
        var scWidth = parseInt(this.kag.config.scWidth);
        var scHeight = parseInt(this.kag.config.scHeight);

        if (scWidth > scHeight) {
          video.style.height = "";
          video.style.width = "100%";
        } else {
          video.style.height = "100%";
          video.style.width = "";
        }
      } else {
        video.style.height = "";
      }
    }

    if (pm.left != "") {
      video.style.left = pm.left + "px";
    }

    if (pm.top != "") {
      video.style.top = pm.top + "px";
    }

    video.setAttribute("playsinline", "1");

    if (pm.mute == "true") {
      video.muted = true;
    }

    //表示の準備完了
    (function () {
      var _video = video;
      var _pm = pm;
      video.addEventListener("canplay", function () {
        j_video.fadeIn(parseInt(pm.time), function () {
          that.kag.tmp.camera_stream = true;

          if (pm.wait == "true" && pm.stop == "false") {
            that.kag.ftag.nextOrder();
          }
          that.checkPicture(_video, _pm);
        });
      });
    })();

    var opt = {
      video: true, //ビデオを取得する
      audio: false, //音声が必要な場合はture
    };

    var audio = false;

    if (pm.audio == "true") {
      opt["audio"] = true;
    }

    var mode = "";

    if (pm.mode == "back") {
      opt["video"] = { facingMode: "environment" };
    } else if (pm.mode == "front") {
      opt["video"] = { facingMode: "user" };
    }

    let j_video = $(video);

    //名前の設定
    $.setName(j_video, pm.name);

    j_video.css("z-index", 1);
    j_video.addClass("bgcamera");

    this.kag.stat.current_bgcamera = pm;

    $("#tyrano_base").append(j_video);

    var media = navigator.mediaDevices.getUserMedia(opt);

    //ストリーミング
    media.then((stream) => {
      video.srcObject = stream;

      video.onloadedmetadata = (e) => {
        //this.checkPicture(video);
      };
    });

    if (pm.wait == "false" && pm.stop == "false") {
      that.kag.ftag.nextOrder();
    }
  },

  checkPicture: function (video, pm) {
    //カメラが非表示になったら停止させる。ストロングストップのときも停止
    if (this.kag.tmp.camera_stream == false) {
      return;
    }

    if (
      this.kag.stat.qr.mode == "off" ||
      this.kag.stat.is_strong_stop != true
    ) {
      setTimeout(() => {
        this.checkPicture(video, pm);
      }, 1000);

      return;
    }

    var scWidth = parseInt(this.kag.config.scWidth) / 4;
    var scHeight = parseInt(this.kag.config.scHeight) / 4;

    var canvas = document.createElement("canvas");
    canvas.width = scWidth;
    canvas.height = scHeight;

    var ctx = canvas.getContext("2d");

    // カメラの映像をCanvasに複写
    //ctx.fillRect(0, 0, w, h);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // QRコードの読み取り
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    //----------------------
    // 存在する場合
    //----------------------

    var mode = this.kag.stat.qr.mode;

    if (code) {
      var url = code.data;

      if (pm.debug == "true") {
        alert(url);
      }

      if (url.indexOf("http") != -1) {
        //webの場合かつ、QRコードが反応するようになってたら
        if (mode == "all" || mode == "define" || mode == "web") {
          //defineが存在したらジャンプに切り替える
          if (this.kag.stat.qr.define[url]) {
            var jump_pm = this.kag.stat.qr.define[url];

            //[s]で止まってるときだけ有効
            if (this.kag.stat.is_strong_stop == true) {
              this.kag.cancelWeakStop();
              this.kag.ftag.startTag("jump", jump_pm);
            }
          } else {
            if (mode != "define") {
              location.href = url;
            }
          }
        }
      } else if (url.indexOf("tyrano:") != -1) {
        if (mode == "all" || mode == "jump") {
          let tmp = $.replaceAll(url, "tyrano://", "");
          let tmp2 = $.getUrlQuery(tmp);
          let jump_pm = {};

          if (tmp2["storage"]) {
            jump_pm["storage"] = tmp2["storage"];
          }

          if (tmp2["target"]) {
            jump_pm["target"] = tmp2["target"];
          }

          //QRの反応は止まる
          this.kag.stat.qr.mode = "off";

          //[s]で止まってるときだけ有効
          if (this.kag.stat.is_strong_stop == true) {
            this.kag.cancelWeakStop();
            this.kag.ftag.startTag("jump", jump_pm);
          }
        }
      } else if (url.indexOf("[jump") != -1) {
        //文字列形式の場合
        //[jump storage="scene1.ks" target="*test" ]
        if (mode == "all" || mode == "jump") {
          let obj = this.kag.parser.makeTag(url);
          let jump_pm = obj.pm;

          //QRの反応は止まる
          this.kag.stat.qr.mode = "off";

          //[s]で止まってるときだけ有効
          if (this.kag.stat.is_strong_stop == true) {
            this.kag.cancelWeakStop();
            this.kag.ftag.startTag("jump", jump_pm);
          }
        }
      }

      setTimeout(() => {
        this.checkPicture(video, pm);
      }, 300);
    }
    //----------------------
    // 存在しない場合
    //----------------------
    else {
      // 0.3秒後にもう一度チェックする
      setTimeout(() => {
        this.checkPicture(video, pm);
      }, 300);
    }
  },
};

/*
#[qr_config]

:group
AR関連

:title
QRコードの動作設定

:exp
QRコードの各種動作設定が可能です。

:sample

;QRコードでティラノのジャップのみ有効にする
[qr_config qrcode="jump"]

:param
qrcode = QRコードを読み込んだときの動作を設定できます。<br>`jump`(ゲーム内移動のQRのみ反応)<br>`web`(他サイトへのリンクだけ反応)<br>`define`(`[qr_define]`で定義したものだけに反応)<br>`all`(すべてに反応)<br>`off`(QRコードに反応しない)

#[end]
*/

tyrano.plugin.kag.tag.qr_config = {
  vital: [],

  pm: {
    qrcode: "",
  },

  start: function (pm) {
    var that = this;

    if (pm.qrcode != "") {
      this.kag.stat.qr.mode = pm.qrcode;
    }

    that.kag.ftag.nextOrder();
  },
};

/*
#[stop_bgcamera]

:group
AR関連

:title
カメラストリームの停止

:exp
`[bgcamera]`を非表示にします。

:sample
[stop_bgcamera time=1000]

:param
time = ミリ秒で指定。動画をフェードアウトして削除することが可能です。,
wait = 動画のフェードアウトを待つかどうか`true`または`false`を指定します。

#[end]
*/

tyrano.plugin.kag.tag.stop_bgcamera = {
  vital: [],

  pm: {
    time: "1000",
    wait: "true",
  },

  start: function (pm) {
    var that = this;

    that.kag.tmp.camera_stream = false;

    $(".tyrano_base")
      .find("#bgcamera")
      .stop(true, true)
      .fadeOut(parseInt(pm.time), function () {
        $(this)[0]
          .srcObject.getVideoTracks()
          .forEach((track) => {
            track.stop();
          });

        $(this)[0]
          .srcObject.getAudioTracks()
          .forEach((track) => {
            track.stop();
          });

        $(this).remove();

        if (pm.wait == "true") {
          that.kag.ftag.nextOrder();
        }
      });

    if (!$(".tyrano_base").find("#bgcamera").get(0)) {
      that.kag.ftag.nextOrder();
      return;
    }

    if (pm.wait == "false") {
      that.kag.ftag.nextOrder();
    }

    this.kag.stat.current_bgcamera = "";
  },
};

/*
#[qr_define]

:group
AR関連

:title
QRコードの置き換え

:exp
QRコードの特定のURLを`[jump]`に置き換えることができます。
例えば、モニュメントや商品についているQRコードをゲーム内のイベントに置き換える事ができます。

:sample
[qr_define url="https://tyrano.jp" storage="scene1.ks" target="test" ]

:param
url     = カメラを写したときに反応させるURLを定義します。,
storage = URLが読み込まれたときに発動するジャンプ先のシナリオファイルを指定します。,
target  = ジャンプ先のラベルを指定します。,
clear   = `true`を指定すると定義を削除できます。

#[end]
*/

tyrano.plugin.kag.tag.qr_define = {
  vital: ["url"],

  pm: {
    url: "",
    storage: "",
    target: "",
    clear: "false",
  },

  start: function (pm) {
    var that = this;

    if (pm["clear"] == "true") {
      delete this.kag.stat.qr.define[pm.url];
    } else {
      this.kag.stat.qr.define[pm.url] = pm;
    }

    that.kag.ftag.nextOrder();
  },
};
