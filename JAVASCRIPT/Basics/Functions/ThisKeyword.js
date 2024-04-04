// method (functions inside of a object) -> if 'this' is in an object it refers to the object 
// function -> refers to the global object (window (in browsers), global (in node))

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    play() {
        console.log(this) // this refernece to this object itself
    },
    showTags(){
        this.tags.forEach(tag => {
            console.log(this, tag)
        })   // pass this so this call back function calls the video object
        // lambda expressions also work here
    }
};

video.stop = function(){
    console.log(this) // still refers to the video object as this is a method that belongs to the video object
}

 