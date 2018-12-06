(function ($) {
    var methods = {
        init: function () {
            var wrappers = $('.gif-wrapper');
            wrappers.each(function () {
                var _that = $(this);
                _that.html("<img src='" + _that.data('gif-url') + "'>");
            });
            return this.each(function () {
                var elem = $(this);
                elem.on('click', function () {
                    if ('loaded' === elem.data('video'))
                        return false;
                    wrappers.each(function () {
                        var _that = $(this);
                        if ('loaded' === _that.data('video')) {
                            _that.html("<img src='" + _that.data('gif-url') + "'>");
                            _that.data('video', '');
                        }
                    });
                    elem.data('video', 'loaded');
                    elem.html("<iframe id='you-video' src='" + elem.data('video-url') + "?autoplay=1' width='" + elem.width() + "' height='" + elem.height() + "'></iframe>");
                });
            });
        }
    };
    $.fn.initVideo = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error(method + 'is invalid for $.initVideo');
        }
    };
}(jQuery));