export class Character {

    constructor(x) {
        
        let isOnTheGround = true;
        this.jump = function() {
            if(isOnTheGround) {

                isOnTheGround = false;
                let i = 100;
                let isBack = false;

                const jumpInterval = setInterval(function() {
                    if(i == 300) isBack = true;
                    else if(i == 100 && isBack == true) {
                        isOnTheGround = true;
                        clearInterval(jumpInterval);
                    }
                    x.style.bottom = i + "%";
                    i += isBack ? i > 280 ? -1 : -4 : i > 280 ? 1 : 4;
                },1);
            }
        };

        let i = 0;
        let stopped;
        this.toRight = function() {
            stopped = false;
            const walk = setInterval(function() {
                if(stopped == true) clearInterval(walk);
                x.style.left = i + "px";
                i+=2;
            },1);
        }

        this.toLeft = function() {
            stopped = false;
            const walk = setInterval(function() {
                if(stopped == true) clearInterval(walk);
                x.style.left = i + "px";
                i-=2;
            },1);
        }

        this.stop = function() {
            stopped = true;
        }
    }
}
