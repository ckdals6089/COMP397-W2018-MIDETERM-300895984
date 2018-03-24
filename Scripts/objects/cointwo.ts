module objects {
       export class CoinTwo extends objects.GameObject {
            // private instance variables
    
            // public properties
    
            // constructors
            constructor() {
                super("coin");
                this.Start();
            }
    
            // private methods
    
            // public methods
            public Start(): void {
    
            }
    
            public Update(): void {
                this.CheckBounds();
            }
    
            public CheckBounds(): void {
                //      if(this.y > (480 + this.height)) {
                if (this.x <=  -this.width) {
                    this.alpha = 1;
                }
            }
        }
    }