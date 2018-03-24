module scenes {
    export class PlayTwoScene extends objects.Scene {
      // Private Instance Variables
      private _ocean2: objects.Oceantwo;
      private _planetwo: objects.PlaneTwo;
      private _island: objects.Island;
      private _cloudstwo: objects.CloudTwo[];
      private _cloudNum: number;
      private _scoreBoard: managers.ScoreBoard;
  
      private _engineSound: createjs.AbstractSoundInstance;
      private _coin: objects.Coin;
  
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
        this._ocean2 = new objects.Oceantwo();
        this._planetwo = new objects.PlaneTwo();
        managers.Game.planetwo = this._planetwo;
  
        this._coin = new objects.Coin();
        this._island = new objects.Island();
  
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
        this._ocean2.Update();
        this._planetwo.Update();
  
        this._coin.x = this._island.x;
        this._coin.y = this._island.y;
        this._coin.Update();
  
        this._island.Update();
  
        // check collision between plane and coin
        managers.Collision.Check(this._planetwo, this._coin);
  
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
        this.addChild(this._ocean2);
  
        // add the island to the scene
        this.addChild(this._island);
  
        // add the coin to the scene
        this.addChild(this._coin);
  
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
  