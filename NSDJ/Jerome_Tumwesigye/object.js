/*Object oriented programing using a constructor 
which is a special method used to initialise an instantiated object. */

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


//This function for an object fruit and its instances.
function fruit(color,size,weight,taste,cost,shape){ 

    
    this.name=name
    this.age=age
    this.maritalStatus=maritalStatus
    this.residence=residence
    this.diagnosis=diagnosis
    this.condition=condition
}

orange=new fruit("orange", "small", 30, "bitter", 1000, "round")
mango=new fruit("brown", "medium", 65, "sweet",500,"oval")
apple=new fruit("yellow", "medium", 77, "sweet",2000, "round")
ovacado=new fruit("green", "big", , 95, "tasty", 1500, "oval")
Berry=new fruit("purple", "small", 28, "sour",5000, "circular")
passionFruits=new fruit("black", "small",54 "bitter", 3000,"circular")


//function for an object girl and its instances.
function girl(size,height,voice,hair,birthmonth,birthYear){ 
    this.size=size
    this.height=height
    this.voice=voice
    this.hair=hair
    this.birthmonth=birthmonth
    this.birthYear=birthYear
   
}

sandra=new girl("big","short","deep","curly","january",1994)
sylvia=new girl("small","tall","deep","natural","july",1996)
susan=new girl("small","tall","soft","short","august",1998)
aisha=new girl("medium","medium","soft","draids","december",2000)
esether=new girl("big","tall","deep","draids","july",1992)
birthYear=new girl("medium","medium","soft","natural","april",2001)



//function for an object boy and its instances.
function boy(occupation,residence,voice,height,birthmonth,birthYear){ 
    this.occupation=occupation
    this.residence=residence
    this.voice=voice
    this.height=height
    this.birthmonth=birthmonth
    this.birthYear=birthYear
}

daniel=new boy("carpenter","bwaise","deep", "medium", "july", 2000)
john=new boy("engineer","kito","soft","short","july",1996)
patrick=new boy("doctor","muyenga","soft","tall","december",2000)
nicholas=new boy("developer","ggaba","deep","short","april",2001)
emma=new boy("nurse","nsambya","soft","short","january",1994)
james=new boy("accountant","kira", "soft","tall","august",1998)


//function for an object country and its instances
function country(population,currency,colonialMaster,independenceYear,president, continent){ 
    this.population=population
    this.currency=currency
    this.colonialMaster=colonialMaster
    this.independenceYear=independenceYear
    this.president=president
    this.africa=africa
}
    
uganda=new country(40,"ugx","britain",1962,"museven","africa")
kenya=new country(50,"ksh","britain",1960,"kenyatta","africa")
rwanda=new country(20,"franks","france",1994,"kagame","africa")
burundi=new country(25,"dollar","portugal",1980,"jerome","africa")
tanzania=new country(60, "tsh","germany",1960,"magufuli","africa")
sudan=new fcountry(45,"dollar","sudan",2007,"kir","africa")


//function for an object pupil and its instances.
function pupil(classLevel, age,gender,residence,father,mother){ 
    this.classLevel=classLevel
    this.age=age
    this.gender=gender
    this.residence=residence
    this.father=father
    this.mother=mother
}

tiana=new pupil("p.2",6,"female","kahiihi","dan","MimeTypeArray")
elisha=new pupil("p.4",8,"male","nsiika","herbert","josephine")
daphine=new pupil("p.1",4,"male","rubindi","robert","atim")
miriam=new pupil("p.2",6,"female","kikoni","jerome","aisha")
annet=new pupil("p.3",5,"female","bwaise","nicholas","jovita")
gilbert=new pupil("p.1",3,"male","kito","henry","racheal")


