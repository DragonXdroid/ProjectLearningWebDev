
function BlogPost(title, body, author, views, isLive){
    this.title = title
    this.body = body
    this.author = author
    this.views = views
    this.comments = []
    this.isLive = isLive
}

let post = new BlogPost();