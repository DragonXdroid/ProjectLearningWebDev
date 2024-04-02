 
function StopWatch() {

    let startTime = 0;
    let duration = 0;
    let isRunning = false

    this.start = function (){
        startTime = Date.now()

        if (isRunning){
            throw new Error("Watch is Running")
        }
        isRunning = true
        
    }

    this.stop = function(){
        duration += (Date.now() - startTime)/ 1000;
        if (!isRunning){
            throw new Error("Watch is Running")
        }
        isRunning = false
        
    }

    this.reset = function(){
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration + " :seconds";
        }
    })

}