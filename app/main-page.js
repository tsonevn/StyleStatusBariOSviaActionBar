"use strict";
var frame_1 = require("ui/frame");
function loaded(args) {
    var page = args.object;
    if (page.ios) {
        var navigationBar = frame_1.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
}
exports.loaded = loaded;
//# sourceMappingURL=main-page.js.map