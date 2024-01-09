namespace tyrano.plugin.kag.tag {
  interface MaskParams {
    time: number | string;
    effect: string;
    color: string;
    graphic: string;
    folder: string;
  }

  interface MaskOffParams {
    time: number | string;
    effect: string;
  }

  export class Mask implements TyranoTag {
    constructor(private kag: Kag) {}

    vital: string[] = [];
    pm: MaskParams = {
      time: 1000,
      effect: "fadeIn",
      color: "0x000000",
      graphic: "",
      folder: "",
    };

    start(pm: MaskParams) {
      const that = this;
      that.kag.weaklyStop();

      if (pm.time == "0") {
        pm.time = "1";
      }

      const j_div = $(
        "<div class='layer layer_mask' data-effect='" +
          pm.effect +
          "' style='z-index:100000000;position:absolute;'>"
      );
      j_div.css("animation-duration", parseInt(pm.time) + "ms");

      const sc_width = parseInt(that.kag.config.scWidth);
      const sc_height = parseInt(that.kag.config.scHeight);

      let behind = false;

      j_div.css({ width: sc_width, height: sc_height });

      if (pm.color == "none") {
        j_div.css("background-color", "");
      } else {
        j_div.css("background-color", $.convertColor(pm.color));
      }

      if (pm.graphic != "") {
        let folder = "";
        if (pm.folder != "") {
          folder = pm.folder;
        } else {
          folder = "image";
        }

        const storage_url = `./data/${folder}/${pm.graphic}`;
        j_div.css("background-image", `url(${storage_url})`);

        // 画像が設定されている場合
        behind = true;
      }

      // 外に線が見える対応
      if (behind == false) {
        j_div.css("transform", "scale(1.02)");
      }

      $(".tyrano_base").append(j_div);

      const animationEnd =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      j_div.addClass(`animated ${pm.effect}`).one(animationEnd, function () {
        // $(this).removeClass(`animated ${pm.effect}`);

        if (behind == false) {
          $("#root_layer_game").css("opacity", 0);
        }

        that.kag.ftag.nextOrder();
      });
    }
  }

  export class MaskOff implements TyranoTag {
    constructor(private kag: Kag) {}

    vital: string[] = [];
    pm: MaskOffParams = {
      time: 1000,
      effect: "fadeOut",
    };

    start(pm: MaskOffParams) {
      const that = this;
      const j_div = $(".layer_mask");

      if (pm.time == "0") {
        pm.time = "1";
      }

      $("#root_layer_game").css("opacity", 1);

      if (j_div.get(0)) {
        const _effect = j_div.attr("data-effect");
        j_div.removeClass(`animated ${_effect}`);
        j_div.css("animation-duration", parseInt(pm.time) + "ms");

        const animationEnd =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        j_div.addClass(`animated ${pm.effect}`).one(animationEnd, function () {
          j_div.remove();
          that.kag.cancelWeakStop();
          that.kag.ftag.nextOrder();
        });
      } else {
        that.kag.cancelWeakStop();
        that.kag.ftag.nextOrder();
      }
    }
  }
}

// プラグインに登録
tyrano.plugin.kag.ftag.tag.mask = new tyrano.plugin.kag.tag.Mask(this.kag);
tyrano.plugin.kag.ftag.tag.mask_off = new tyrano.plugin.kag.tag.MaskOff(
  this.kag
);
