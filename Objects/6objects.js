/*
objects-6
properties-6
instances-6
  */
/* we create properties of an object using the key word "this" and assigning it to.
then we create instances of differnt objects by using the constructor "new" */

/* 1st object is shoe. i used "this" to declare the given 
properties(brand,type,size,colour,material,origin) and assigned them values 
using the "=" sign.Then used the constructor "new" to create different instances 
of the object shoe*/
function shoe(brand,type,size,colour,material,origin){
    (this.brand=brand)
    (this.type=type)
    (this.size=size)
    (this.colour=colour)
    (this.material=material)
    (this.origin=origin)
}
shoe1 = new shoe ("bata","flat",6,"black","suede","Uganda" )
shoe2 = new shoe ("H&M", "wedges",7,"yellow","leather","UK")
shoe3 = new shoe ("Atmosphere","boots",5,"red","rubber","UK")
shoe4 = new shoe ("Armani", "wedges", 8, "yellow", "leather", "Italy")
shoe5 = new shoe ("bata", "boots", 9, "black", "leather", "Uganda")
shoe6 = new shoe ("Wide fit", "flat", 5, "red", "rubber", "UK")

/* 2nd object is anime, i used "this" to declare the given
properties (genre, origin, title, year, studio, mangaka) and assigned them values
using the "=" sign.Then used the constructor "new" to create different instances 
of the object anime*/
function anime(genre, origin, title, year, studio, mangaka){
    (this.genre=genre)
    (this.origin=origin)
    (this.title=title)
    (this.year=year)
    (this.studio = studio)
    (this. mangaka = mangaka)
}
anime1 = new anime ("vampire","japan","vampire knight", "ufotable","kaname")
anime2 = new anime ("shounen","japan","kimetsu no yaiba","ufotable","kenji" )
anime3 = new anime ("romance","japan","kaicho wa maid-sama","studio plus","yuki")
anime4 = new anime ("shounen","japan","kimetsu no yaiba","ufotable","kenji")
anime5 = new anime ("action","china","moudou zu shi","wuu yii","kotaro")
anime6 = new anime("thriller", "japan", "kimetsu no yaiba","studio plus","reni yuu")

/* 3rd object is jewelry, i used "this" to declare the given
properties (store,type,size,shape,origin,quality) and assigned them values
using the "=" sign.Then used the constructor "new" to create different instances 
of the object jewelry*/
function jewelry(store,type,size,shape,origin,quality){
    (this.store = store)
    (this.type = type)
    (this.size = size)
    (this.shape = shape)
    (this.origin = origin)
    (this.quality = quality)
}
jewelry1 = new jewelry('armani','gold','100grams','round','italy','original')
jewelry2 = new jewelry('owori','sliver','50grams','triangle','uganda','original')
jewelry3 = new jewelry('giovanni','bronze','30grams','square','italy','duplicate')
jewelry4 = new jewelry('jimmy choo', 'gold','500grams','triangle, korea, original')
jewelry5 = new jewelry('guess', 'copper','300grams' ,'oval', 'USA', 'original')
jewelry6 = new jewelry('owori','platnium','35grams','rectangle, uganda, original')

/* 4th object is university, i used "this" to declare the given
properties (name,college,program,origin,started,status) and assigned them values
using the "=" sign.Then used the constructor "new" to create different instances
of the object university*/

function university(name,college,program,origin,started,status){
    (this.name = name)
    (this.department = department)
    (this.program = program)
    (this.origin = origin)
    (this.started = started)
    (this.status = status)
}
university1 = new university("makerere","Business school","economics",'uganda',1923,"public")
university2 = new university("havard", "business school","commerce",'USA',1553,'public')
university3 = new university("ucu","law school","law",'Uganda',1995,"private")
university4 = new university("oxford","medcial school","public health",1690,'UK',"public")
university5 = new university("duke","Humanities","social sciences",'USA',1550,"private")
university6 = new university("inti","natural science","chemical engineering",1998,'Malaysia',"public")

/* 5th object is phone, i used "this" to declare the given
properties (brand,version,size,colour,screen,origin) and assigned them values
using the "=" sign.Then used the constructor "new" to create different instances
of the object phone*/
function phone(brand,version,size,colour,screen,origin)
{
    (this.brand = brand)
    (this.version = version)
    (this.size = size)
    (this.colour = colour)
    (this.screen = screen)
    (this.origin = origin)
}

phone1 = new phone("sumsang","s.8","64gb","black","edge","south korea")
phone2 = new phone("techno", "x-5", "8gb", "red", "straight", "china")
phone3 = new phone("iphone", "x", "64gb", "blue", "straight", "USA")
phone4 = new phone("sumsang", "grand 2", "16gb", "black", "straight", "south korea")
phone5 = new phone("itel", "y", "32gb", "black", "straight", "china")
phone6 = new phone("sumsang", "s.9", "32gb", "sliver", "edge", "south korea")

/* 6th object is laptop, i used "this" to declare the given
properties  (brand,screen,colour,processor,hard_disk,origin,)and assigned them values
using the "=" sign.Then used the constructor "new" to create different instances
of the object laptop*/

function laptop(brand,screen,colour,processor,hard_disk,origin){
    (this.brand = brand)
    (this.screen = screen)
    (this.colour = colour)
    (this.processor = processor)
    (this.hard_disk =hard_disk)
    (this.origin = origin)
}

laptop1 = new laptop("sumsang", "20inches","black","i7" ,"1TB", "south korea")
laptop2 = new laptop("macbook", "19inches", "sliver", "i7", "2TB", "USA")
laptop3 = new laptop("sumsang", "10inches", "black", "i5", "1TB", "south korea")
laptop4 = new laptop("dell", "", "15inches", "i7", "500GB", "USA")
laptop5 = new laptop("sumsang", "16inches", "black", "i3", "1TB", "south korea")
laptop6 = new laptop("acer","20inches","blue", "intel", "1TB", "USA")

