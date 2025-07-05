// Code your solution here
const drivers=[
    {
        name:'natasha',
        hometown:'new york'
    },
    {
        name:'sophia',
        hometown:'turkey'
    },
    {
        name:'Natasha',
        hometown:'kentucky'
    },
    {
        name:'leslie',
        hometown:'cairo'
    }
]

function findMatching(theArray, matchingName){
    return theArray.filter(driver=> driver.toLowerCase()===matchingName.toLowerCase())
}

console.log(findMatching(drivers, 'natasha'))

function fuzzyMatch(theArray, beginsWith){
    return theArray.filter(driver=>driver.toLowerCase().startsWith(beginsWith.toLowerCase()))
}
console.log(fuzzyMatch(drivers, 'L'))

function matchName(arrayOfDriver, matches){
    return arrayOfDriver.filter(driver=> driver.name===matches)
}

console.log(matchName(drivers, 'leslie'))
