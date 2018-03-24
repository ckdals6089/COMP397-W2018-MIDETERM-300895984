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
    var Oceantwo = /** @class */ (function (_super) {
        __extends(Oceantwo, _super);
        // public properties
        // Constructor
        function Oceantwo() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean2")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Oceantwo.prototype._reset = function () {
            this.x = -960;
        };
        // move the object to some new location
        Oceantwo.prototype._move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Oceantwo.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Oceantwo.prototype.Start = function () {
            this._dx = 7;
            this._reset();
        };
        // updates the game object every frame
        Oceantwo.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Oceantwo;
    }(createjs.Bitmap));
    objects.Oceantwo = Oceantwo;
})(objects || (objects = {}));
//# sourceMappingURL=oceantwo.js.map