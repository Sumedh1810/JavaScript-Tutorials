let user = {
    name: "Sumedh P",
    email: "sumedh@gmail.com",
    age: 21,
    isLoggedIn: false,
    blogs: [
        {title: "BLOG 1", numComments: 5, wordCount: 570},
        {title: "BLOG 2", numComments: 7, wordCount: 1200}
    ],
    allBlogConsole(){
        this.blogs.forEach(blog => console.log(blog));
    }
};

user.allBlogConsole();