module scenes {
    export class PlayTwoScene extends objects.Scene {
      // Private Instance Variables
      private _oceantwo: objects.Oceantwo;
      private _planetwo: objects.PlaneTwo;
      private _islandtwo: objects.IslandTwo;
      private _cloudstwo: objects.CloudTwo[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
  
      private _engineSound: createjs.AbstractSoundInstance;
      private _cointwo: objects.CoinTwo;
  
      // Public Properties
  
      // Constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // Private Mathods
 
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        this._oceantwo = new objects.Oceantwo();
        this._planetwo = new objects.PlaneTwo();
        managers.Game.planetwo = this._planetwo;
  
        this._cointwo = new objects.CoinTwo();
        this._islandtwo = new objects.Island();
  
        // instantiate the cloud array
        this._cloudstwo = new Array<objects.Cloud>();
        this._cloudNum = 2;
        // loop and add each cloud to the array
        for (let count = 0; count < this._cloudNum; count++) {
          this._cloudstwo[count] = new objects.Cloud();
        }
  
        this._engineSound = createjs.Sound.play("engine");
        this._engineSound.loop = -1; // play forever
        this._engineSound.volume = 0.3;
  
        // create the scoreboard UI for the Scene
        this._scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = this._scoreBoard;
  
        this.Main();
      }
  
      // triggered every frame
      public Update(): void {
        this._oceantwo.Update();
        this._planetwo.Update();
  
        this._cointwo.y = this._islandtwo.y;
        this._cointwo.x = this._islandtwo.x;
        this._cointwo.Update();
  
        this._islandtwo.Update();
  
        // check collision between plane and coin
        managers.Collision.Check(this._planetwo, this._cointwo);
  
        this._cloudstwo.forEach(cloud => {
          cloud.Update();
          // check collision between plane and current cloud
          managers.Collision.Check(this._planetwo, cloud);
        });
  
        // if lives fall below zero switch scenes to the game over scene
        if(this._scoreBoard.Lives <= 0) {
          this._engineSound.stop();
          managers.Game.currentScene = config.Scene.OVER;
        }
  
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the ocean to the scene
        this.addChild(this._oceantwo);
  
        // add the island to the scene
        this.addChild(this._islandtwo);
  
        // add the coin to the scene
        this.addChild(this._cointwo);
  
        // add the plane to the scene
        this.addChild(this._planetwo);
        this.addChild(this._planetwo.planeFlash); // add the plane flashing effect
  
        // add clouds to the scene
  
        this._cloudstwo.forEach(cloud => {
          this.addChild(cloud);
        });
  
        // add scoreboard labels to the scene
        this.addChild(this._scoreBoard.LivesLabel);
        this.addChild(this._scoreBoard.ScoreLabel);
      }
    }
  }
  