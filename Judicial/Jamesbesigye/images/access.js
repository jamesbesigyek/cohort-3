
// assigning all elements to their appororiate methods

const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll =document.querySelectorAll('.demo-query-all')

//changing the border color of id demo to purple
demoId.style.border ='2px solid purple'

// changing the border colour of classes
for (i=0; i<demoClass.length; i++)
{
    demoClass[i].style.border = '2px solid orange'
}

// changing the border colour of all tags
for (i =0; i<demoTag.length; i++)
{
    demoTag[i].style.border='2px solid blue'
}

// changing the border colour of the querys
demoQuery.style.border = '2px solid red'

demoQueryAll.forEach(
    query=>{
        query.style.border ='2px solid green'
    }
);

