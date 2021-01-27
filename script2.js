// Object constructors

function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var courses = [
    new Course("Up and Running with ECMAScript 6", "Aman Gupta", 1, true, 2342 ),
    new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0)
];
console.log(courses[0].updateViews());
