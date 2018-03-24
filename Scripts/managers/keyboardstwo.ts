module managers {
    export class KeyboardTwo {
      // private instance variables
  
      // public instance variables
      public moveForward: boolean;
      public moveBackward: boolean;
      public moveup: boolean;
      public movedown: boolean;
      public jump: boolean;
      public enabled: boolean;
      public paused: boolean;
  
      // constructors
      constructor() {
        this.enabled = true;
        document.addEventListener('keydown', this.onKeyDown.bind(this), false);
        document.addEventListener('keyup', this.onKeyUp.bind(this), false);
      }
  
      // private methods
  
      // public methods
      public onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode) {
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
      }
  
      public onKeyUp(event:KeyboardEvent): void {
        switch(event.keyCode) {
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
      }
    }
  }
  