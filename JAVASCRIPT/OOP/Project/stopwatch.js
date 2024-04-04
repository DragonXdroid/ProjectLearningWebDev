 
function StopWatch() {

    let startTime = 0;
    let duration = 0;
    let isRunning = false
     
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration + " :seconds";
        }
    })

    Object.defineProperty(this, 'startTime', {
        
        get: function(){
            return startTime;
        }
    })

    Object.defineProperty(this, 'isRunning', {
        get: function(){
            return isRunning;
        }
    })

}

StopWatch.prototype.start = function(){
    this.startTime = Date.now()

        if ( this.isRunning){
            throw new Error("Watch is Running")
        }
        this.isRunning = true
}

StopWatch.prototype.stop = function(){
    this.duration += (Date.now() -  this.startTime)/ 1000;
    if (!this.isRunning){
        throw new Error("Watch is Running")
    }
    this.isRunning = false        
}

StopWatch.prototype.reset = function(){
    this.duration = 0;
}