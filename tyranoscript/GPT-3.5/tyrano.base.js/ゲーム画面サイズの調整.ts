const gameScreenSizeManager = {
  setBaseSize: function (width, height) {
    this.tyrano.get(".tyrano_base").css({
      width: width,
      height: height,
      "background-color": "black",
    });
  },
  fitBaseSize: function (width, height) {
    var that = this;
    setTimeout(function () {
      that._fitBaseSize(width, height);
    }, 300);
  },
  _fitBaseSize: function (width, height, timeout = 100) {
    var that = this;
    var view_width = $.getViewPort().width;
    var view_height = $.getViewPort().height;
    var width_f = view_width / width;
    var height_f = view_height / height;
    var scale_f = 0;
    var j_tyrano_base = $("#tyrano_base");
    var screen_ratio = this.tyrano.kag.config.ScreenRatio;
    var is_window_wider_than_game = width_f > height_f;

    if (screen_ratio == "fix") {
      if (is_window_wider_than_game) {
        scale_f = height_f;
      } else {
        scale_f = width_f;
      }
      this.tyrano.kag.tmp.base_scale = scale_f;
      $.setTimeout(function () {
        var margin_top = 0;
        var margin_left = 0;
        if (
          that.tyrano.kag.config["ScreenCentering"] &&
          that.tyrano.kag.config["ScreenCentering"] == "true"
        ) {
          j_tyrano_base.css({
            "transform-origin": "0 0",
            margin: 0,
          });
          if (is_window_wider_than_game) {
            margin_left =
              Math.abs(
                parseInt(window.innerWidth) -
                  parseInt(that.tyrano.kag.config.scWidth * scale_f)
              ) / 2;
            margin_top =
              document.documentElement.clientHeight - window.innerHeight;
          } else {
            margin_top =
              Math.abs(
                parseInt(window.innerHeight) -
                  parseInt(that.tyrano.kag.config.scHeight * scale_f)
              ) / 2;
            margin_left = 0;
          }
          j_tyrano_base.css({
            "margin-left": parseInt(margin_left) + "px",
            "margin-top": parseInt(margin_top) + "px",
          });
        }

        j_tyrano_base.css("transform", "scale(" + scale_f + ") ");
        if (parseInt(view_width) < parseInt(width)) {
          if (scale_f < 1) {
            window.scrollTo(0, 1);
          }
        }

        if (
          that.tyrano.kag.config["vchat"] &&
          that.tyrano.kag.config["vchat"] == "true"
        ) {
          var base_height = Math.round(
            parseInt($("#tyrano_base").css("height")) * scale_f
          );
          var vchat_height = view_height - base_height;
          $("#vchat_base").css({
            "margin-top": base_height,
            height: vchat_height,
          });
        }

        that.updateScreenInfo({
          scale_x: scale_f,
          scale_y: scale_f,
          top: margin_top,
          left: margin_left,
          original_width: parseInt(width),
          original_height: parseInt(height),
          viewport_width: view_width,
          viewport_height: view_height,
        });

        that.kag.trigger("resize", {
          target: j_tyrano_base,
          screen_info: that.tyrano.kag.tmp.screen_info,
        });
      }, timeout);
    } else if (screen_ratio == "fit") {
      $.setTimeout(function () {
        j_tyrano_base.css(
          "transform",
          "scaleX(" + width_f + ") scaleY(" + height_f + ")"
        );
        window.scrollTo(0, 1);
        that.updateScreenInfo({
          scale_x: width_f,
          scale_y: height_f,
          top: 0,
          left: 0,
          original_width: parseInt(width),
          original_height: parseInt(height),
          viewport_width: view_width,
          viewport_height: view_height,
        });

        that.kag.trigger("resize", {
          target: j_tyrano_base,
          screen_info: that.tyrano.kag.tmp.screen_info,
        });
      }, timeout);
    } else {
      that.updateScreenInfo({
        scale_x: 1,
        scale_y: 1,
        top: 0,
        left: 0,
        original_width: parseInt(width),
        original_height: parseInt(height),
        viewport_width: view_width,
        viewport_height: view_height,
      });
    }
  },
  updateScreenInfo: function (data) {
    const info = this.tyrano.kag.tmp.screen_info;
    $.extend(info, data);
    info.width = info.original_width * info.scale_x;
    info.height = info.original_height * info.scale_y;
    info.right = info.left + info.width;
    info.bottom = info.top + info.height;
  },
};
