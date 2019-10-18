/* create six objects of and six instance of each */
function book (title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function chair (color, type, size) {
  this.color = color
  this.size = size
  this.type = type
}

function school (name, level, numberOfStudents, classes) {
  this.name = name
  this.level = level
  this.numberOfStudents = numberOfStudents
  this.classes = classes
}
