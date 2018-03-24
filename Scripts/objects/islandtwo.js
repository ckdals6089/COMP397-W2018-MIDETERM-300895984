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
    var IslandTwo = /** @class */ (function (_super) {
        __extends(IslandTwo, _super);
        // private instance variables
        // public properties
        // Constructor
        function IslandTwo() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        IslandTwo.prototype.Start = function () {
            this.rotation = 90;
            this._dx = 5;
            this.Reset();
        };
        // updates the game object every frame
        IslandTwo.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        IslandTwo.prototype.Reset = function () {
            this.x = 680;
            this.y = Math.floor((Math.random() * (480 - this.halfHeight)));
        };
        // move the object to some new location
        IslandTwo.prototype.Move = function () {
            this.x -= this._dx;
        };
        // check to see if some boundary has been passed
        IslandTwo.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x >= -this.width) {
                this.Reset();
            }
        };
        return IslandTwo;
    }(objects.GameObject));
    objects.IslandTwo = IslandTwo;
})(objects || (objects = {}));
//# sourceMappingURL=islandtwo.js.map