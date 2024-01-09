var tyrano = {
    plugin: {}
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
            $.getScript("./tyrano/plugins/" + array_src[i] + "/" + array_src[i] + ".js", function () {
                count_src++;

                if (count_src == array_src.length) {
                    if (call_back) {
                        call_back(array_src);
                    }
                }
            });
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
    }
};`s`