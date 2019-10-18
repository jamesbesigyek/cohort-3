/* create six objects of and six instance of each */
function book (title, author, pages, isbn, edition, releaseDate) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isbn = isbn
  this.edition = edition
  this.releaseDate = releaseDate
}

function chair (color, type, size) {
  this.color = color
  this.size = size
  this.type = type
}

function school (name, level, classNumbers, studentTotalNumber, teacherTotalNumber) {
  this.name = name
  this.level = level
  this.classNumbers = classNumbers
  this.studentTotalNumber = studentTotalNumber
  this.teacherTotalNumber = teacherTotalNumber
}
