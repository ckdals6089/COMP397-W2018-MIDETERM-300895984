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
    var PlaneTwo = /** @class */ (function (_super) {
        __extends(PlaneTwo, _super);
        // Constructor
        function PlaneTwo() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        PlaneTwo.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        PlaneTwo.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash();
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            this.rotation = 90;
            this.y = 200;
            this.x = 100;
        };
        // updates the game object every frame
        PlaneTwo.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        PlaneTwo.prototype.Reset = function () {
        };
        // move the object to some new location
        PlaneTwo.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            if (managers.Game.keyboardManager.moveLeft) {
                this.y -= 5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.y += 5;
            }
            this.planeFlash.y = this.y;
            this.planeFlash.x = this.x;
        };
        // check to see if some boundary has been passed
        PlaneTwo.prototype.CheckBounds = function () {
            // right boundary
            if (this.y >= 480 - this.halfHeight) {
                this.y = 480 - this.halfHeight;
            }
            // left boundary
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        return PlaneTwo;
    }(objects.GameObject));
    objects.PlaneTwo = PlaneTwo;
})(objects || (objects = {}));
//# sourceMappingURL=planetwo.js.map