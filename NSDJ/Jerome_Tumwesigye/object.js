/*Object oriented programing using a constructor 
is a special method used to initialise an instantiated object. 

Below are six different objects each having six instances.

It should however be noted that the data presented herein is only for demonstration purposes 
*/

//name,age,maritalStatus,residence,diagnosis,condition are propertis of the object 'patient'.
function patient(name,age,maritalStatus,residence,diagnosis,condition){ 

    //'this' is a key word used to name a property of the object (patient) and then the property can be assigned a value
    this.name=name
    this.age=age
    this.maritalStatus=maritalStatus
    this.residence=residence
    this.diagnosis=diagnosis
    this.condition=condition
}

//sarah, otim, betty are instances of the object patient
sarah=new patient("Sarah Birungi", 23, "Single", "Ibanda","Malaria", "severe")
otim=new patient("Otim John", 25, "Single", "Mayuge","Diarrhoea", "severe")
betty=new patient("Betty Olive", 29, "Married", "Gulu","Cough", "not severe")
mark=new patient("Mark Opio", 39, "Single", "Soroti","Cancer", "severe")
martin=new patient("Martin Akol", 27, "Single", "Amuriat","Flu", "not severe")
angel=new patient("Angel Kebirungi", 46, "Married", "Isingiro","HIV", "not severe")

//Command the console to output one instance of the object and its property
console.log(otim.diagnosis)


//color, size etc are properties of an object fruit
function fruit(color,size,weight,taste,cost,shape){ 

  //naming the properties using 'this'  
    this.color=color
    this.size=size
    this.weight=weight
    this.taste=taste
    this.cost=cost
    this.shape=shape
}
//orange, mango etc are instances of an object fruit and are defined using 'new'
orange=new fruit("orange", "small", 30, "bitter", 1000, "round")
mango=new fruit("brown", "medium", 65, "sweet",500,"oval")
apple=new fruit("yellow", "medium", 77, "sweet",2000, "round")
ovacado=new fruit("green", "big", 95, "tasty", 1500, "oval")
Berry=new fruit("purple", "small", 28, "sour",5000, "circular")
passionFruits=new fruit("black", "small",54, "bitter", 3000,"circular")

console.log(apple.color)



//size, height etc are prperties of an object girl
function girl(size,height,voice,hair,birthmonth,birthYear){ 

    //the properties are named using 'this'
    this.size=size
    this.height=height
    this.voice=voice
    this.hair=hair
    this.birthmonth=birthmonth
    this.birthYear=birthYear
   
}
//sandra, sylivia etc are instances of an object girl and sre defined using 'new'
sandra=new girl("big","short","deep","curly","January",1994)
sylvia=new girl("small","tall","deep","natural","July",1996)
susan=new girl("small","tall","soft","short","August",1998)
aisha=new girl("medium","medium","soft","draids","December",2000)
esether=new girl("big","tall","deep","draids","July",1992)
birthYear=new girl("medium","medium","soft","natural","April",2001)

console.log(sandra.birthYear)



//occupation, residence etc are properties of an object boy
function boy(occupation,residence,voice,height,birthmonth,birthYear){ 

    //the properties are named using 'this'
    this.occupation=occupation
    this.residence=residence
    this.voice=voice
    this.height=height
    this.birthmonth=birthmonth
    this.birthYear=birthYear
}
//daniel,john etc are instances of an object boy and sre defined using 'new'
daniel=new boy("Carpenter","Bwaise","deep", "medium", "July", 2000)
john=new boy("Engineer","Kito","soft","short","July",1996)
patrick=new boy("Doctor","Muyenga","soft","tall","December",2000)
nicholas=new boy("Developer","Ggaba","deep","short","April",2001)
emma=new boy("Nurse","Nsambya","soft","short","January",1994)
james=new boy("Accountant","Kira", "soft","tall","August",1998)

console.log(john.voice)

//population, currency etc are properties of an object country
function country(population,currency,colonialMaster,independenceYear,president, continent){ 
    //these properties are named using 'this'
    this.population=population
    this.currency=currency
    this.colonialMaster=colonialMaster
    this.independenceYear=independenceYear
    this.president=president
    this.continent=continent
}
 //uganda, kenya etc are instances of an object country.   
uganda=new country(40,"ugx","britain",1962,"Museven","africa")
kenya=new country(50,"ksh","britain",1960,"Kenyatta","africa")
rwanda=new country(20,"franks","france",1994,"Kagame","africa")
burundi=new country(25,"dollar","portugal",1980,"Jerome","africa")
tanzania=new country(60, "tsh","germany",1960,"Magufuli","africa")
sudan=new country(45,"dollar","sudan",2007,"Kir","africa")

console.log(kenya.currency)

//classLevel, age etc are properties of an object pupil
function pupil(classLevel, age,gender,residence,father,mother){ 
    
    //the properties are named using 'this'
    this.classLevel=classLevel
    this.age=age
    this.gender=gender
    this.residence=residence
    this.father=father
    this.mother=mother
}
//tiana, elisha etc are instances of an object pupil.
tiana=new pupil("P.2",6,"female","Kahiihi","Dan","Mary")
elisha=new pupil("P.4",8,"male","Nsiika","Herbert","Josephine")
daphine=new pupil("P.1",4,"male","Rubindi","Robert","Atim")
miriam=new pupil("P.2",6,"female","Kikoni","Jerome","Aisha")
annet=new pupil("P.3",5,"female","Bwaise","Nicholas","Jovita")
gilbert=new pupil("P.1",3,"male","Kito","Henry","Racheal")

console.log(annet.age)

/* Note that in D.O.M -  Document Oriented Model of programmining,
a function is regarded as a first class object, */