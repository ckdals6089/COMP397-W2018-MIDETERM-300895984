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
    var CloudTwo = /** @class */ (function (_super) {
        __extends(CloudTwo, _super);
        // private instance variables
        // public properties
        // Constructor
        function CloudTwo() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        CloudTwo.prototype.Start = function () {
            this.Reset();
            this.rotation = 90;
        };
        // updates the game object every frame
        CloudTwo.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        CloudTwo.prototype.Reset = function () {
            this.x = 680;
            this.y = Math.floor((Math.random() * (480 - this.halfHeight)));
            this._dy = Math.floor((Math.random() * 4) - 2);
            this._dx = Math.floor((Math.random() * 5) + 5);
        };
        // move the object to some new location
        CloudTwo.prototype.Move = function () {
            this.y -= this._dy;
            this.x -= this._dx;
        };
        // check to see if some boundary has been passed
        CloudTwo.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x <= -this.halfWidth) {
                this.Reset();
            }
        };
        return CloudTwo;
    }(objects.GameObject));
    objects.CloudTwo = CloudTwo;
})(objects || (objects = {}));
//# sourceMappingURL=cloudtwo.js.map