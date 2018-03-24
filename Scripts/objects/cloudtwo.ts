module objects {
    export class CloudTwo extends objects.GameObject {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor() {
        super("cloud");
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
        this.Reset();
      }
  
      // updates the game object every frame
      public Update():void {
        this.Move();
        this.CheckBounds();
      }
  
      // reset the objects location to some value
      public Reset():void {
        this.y = Math.floor((Math.random() * (640 - this.height)) + this.halfHeight);
        this.x = -this.width;
        this._dy = Math.floor((Math.random() * 5) - 5);
        this._dx = Math.floor((Math.random() * 4) + 2);
      }
  
      // move the object to some new location
      public Move():void {
        this.x += this._dx;
        this.y += this._dy;
      }
  
      // check to see if some boundary has been passed
      public CheckBounds():void {
        // check lower bounds
        if(this.x >= 480 + this.width) {
          this.Reset();
        }
      }
    }
  }
  