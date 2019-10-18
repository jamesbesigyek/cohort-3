/* create six objects of and six instance of each */
/**
 * This is an object called book with the following instances
 *
 * @param {Book title} title
 * @param {Name of author} author
 * @param {Total number of pages} pages
 * @param {International Standard Book Number} isbn
 * @param {book edition} edition
 * @param {the date it was released} releaseDate
 */
function book(title, author, pages, isbn, edition, releaseDate) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.edition = edition;
  this.releaseDate = releaseDate;
}

/**
 * This is an object called vehicle with the following instances
 *
 * @param {the person who manufactured } manufacturer
 * @param {color of vehicle} color
 * @param {the type of engine inside the vehicle} engineType
 * @param {the vehicle's top speed} speed
 * @param {number seater in the vehicle} seaters
 * @param {price of the vehicle on the market} price
 */
function vehicle(manufacturer, color, engineType, speed, seaters, price) {
  this.manufacturer = manufacturer;
  this.color = color;
  this.engineType = engineType;
  this.speed = speed;
  this.seaters = seaters;
  this.price = price;
}
let benz = new vehicle("mercedes", "black", "v-6", "120km/hr", 4, "$300");
console.log(benz);
console.log(benz.color);

/**
 * This is an object called school with the following instances
 * @param {name of the school} name
 * @param {level of education the school holds} level
 * @param {number of class rooms} classroom
 * @param {total number of students a school holds} students
 * @param {total number of teachers a school holds} teachers
 * @param {where the school is located} location
 */
function school(name, level, classroom, students, teachers, location) {
  this.name = name;
  this.level = level;
  this.classroom = classroom;
  this.students = students;
  this.teachers = teachers;
  this.location = location;
}

/**
 * This is an object called country with the following instances
 *
 * @param {name of country} name
 * @param {continent of the country} continent
 * @param {country motto} motto
 * @param {what the country citizens are called} citizen
 * @param {country currency} currency
 * @param {name of president} president
 */
function country(name, continent, motto, citizen, currency, president) {
  this.name = name;
  this.continent = continent;
  this.motto = motto;
  this.citizen = citizen;
  this.currency = currency;
  this.president = president;
}

/**
 * This is an object called phone with the following instances
 *
 * @param {name of the phone} name
 * @param {brand of the phone} brand
 * @param {software version} version
 * @param {screen size} screenSize
 * @param {weight of the phone} weight
 * @param {size of random access memory} memory
 */
function phone(name, brand, version, screenSize, weight, memory) {
  this.name = name;
  this.brand = brand;
  this.version = version;
  this.screenSize = screenSize;
  this.weight = weight;
  this.memory = memory;
}

/**
 * This is an object called film with the following instances
 *
 * @param {title of the movie} title
 * @param {the time take watching} duration
 * @param {the movie director} director
 * @param {the movie producer} producer
 * @param {boolean in case the movie has a copyright} copyright
 * @param {catergory of the movie} genre
 */
function film(title, duration, director, producer, copyright, genre) {
  this.title = title;
  this.duration = duration;
  this.director = director;
  this.producer = producer;
  this.copyright = copyright;
  this.genre = genre;
}
