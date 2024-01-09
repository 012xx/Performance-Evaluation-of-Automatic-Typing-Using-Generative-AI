var tyrano = {
  plugin: {},
};

var tyranoCore = {
  base: null,

  options: {
    width: 0,
    height: 0,
    onComplete: function () {},
  },

  status: {
    loaded_plugin: 0,
  },

  init: function (options) {
    var that = this;

    this.base = object(tyrano.base);
    this.base.init(this);

    this.config = window.config;
    that.loadModule();
  },

  loadPlugins: function (array_src, call_back) {
    var that = this;
    var count_src = 0;

    for (var i = 0; i < array_src.length; i++) {
      $.getScript(
        "./tyrano/plugins/" + array_src[i] + "/" + array_src[i] + ".js",
        function () {
          count_src++;

          if (count_src == array_src.length) {
            if (call_back) {
              call_back(array_src);
            }
          }
        }
      );
    }
  },

  loadModule: function () {
    var that = this;
    var array_src = ["kag"];

    for (var i = 0; i < array_src.length; i++) {
      var _name = array_src[i];
      this[_name] = object(tyrano.plugin[_name]);
      this[_name].tyrano = this;
      this[_name].init();
    }

    this.completeLoad();
  },

  completeLoad: function () {
    this.build();
  },

  build: function () {},

  get: function (mark) {
    return $(mark);
  },

  test: function () {
    //alert("tyrano test");
  },
};

// テスト用のユーティリティ関数
function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

// テストケース
function runTests() {
  // TyranoCore インスタンスの生成テスト
  const core = new TyranoCore();
  assert(
    core instanceof TyranoCore,
    "core should be an instance of TyranoCore"
  );

  // get メソッドの存在テスト
  assert(typeof core.get === "function", "get should be a function");

  // test メソッドの存在テスト
  assert(typeof core.test === "function", "test should be a function");

  console.log("All tests passed!");
}

runTests();
