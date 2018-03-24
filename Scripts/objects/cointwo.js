var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var CoinTwo = /** @class */ (function (_super) {
        __extends(CoinTwo, _super);
        // private instance variables
        // public properties
        // constructors
        function CoinTwo() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        CoinTwo.prototype.Start = function () {
        };
        CoinTwo.prototype.Update = function () {
            this.CheckBounds();
        };
        CoinTwo.prototype.CheckBounds = function () {
            //      if(this.y > (480 + this.height)) {
            if (this.x <= -this.width) {
                this.alpha = 1;
            }
        };
        return CoinTwo;
    }(objects.GameObject));
    objects.CoinTwo = CoinTwo;
})(objects || (objects = {}));
//# sourceMappingURL=cointwo.js.map