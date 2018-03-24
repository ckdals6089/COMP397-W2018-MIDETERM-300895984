var managers;
(function (managers) {
    var KeyboardTwo = /** @class */ (function () {
        // constructors
        function KeyboardTwo() {
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        // private methods
        // public methods
        KeyboardTwo.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.A:
                case config.Keys.UP_ARROW:
                    this.moveForward = true;
                    break;
                case config.Keys.W:
                case config.Keys.LEFT_ARROW:
                    this.moveup = true;
                    break;
                case config.Keys.D:
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = true;
                    break;
                case config.Keys.S:
                case config.Keys.RIGHT_ARROW:
                    this.movedown = true;
                    break;
                case config.Keys.SPACE:
                    this.jump = true;
                    break;
            }
        };
        KeyboardTwo.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.A:
                case config.Keys.UP_ARROW:
                    this.moveForward = false;
                    break;
                case config.Keys.W:
                case config.Keys.LEFT_ARROW:
                    this.moveup = false;
                    break;
                case config.Keys.D:
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = false;
                    break;
                case config.Keys.S:
                case config.Keys.RIGHT_ARROW:
                    this.movedown = false;
                    break;
                case config.Keys.SPACE:
                    this.jump = false;
                    break;
            }
        };
        return KeyboardTwo;
    }());
    managers.KeyboardTwo = KeyboardTwo;
})(managers || (managers = {}));
//# sourceMappingURL=keyboardstwo.js.map