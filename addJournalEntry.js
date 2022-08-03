

import journal from JOURNAL

for (let arr of journal) {
    console.log(arr)
}

// let journal = []

// const addEntry = (events, squirrel) => {
//     journal.push({events, squirrel})
    
// }


function phi(table) {
    return ((table[3] * table[0]) - (table[2] * table[1])) /
        Math.sqrt((table[2] + table[3]) * (table[0]+ table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
}

console.log(phi([76,9,4,1]))


//extract a two by two table for events

function tableForEvents(event, journal) {
    
    //create an empty table  and initialize it to zero
    //where we going to store those events
    let table = [0, 0, 0, 0]
    let pizzasArray = [];
   
    
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        let pizzas = entry.events;
        
        //collect only pizzas and put in the pizzArray
        for (let p = 0; p < pizzas.length; p++) {
            if (pizzas[p] === 'pizza') {
                pizzasArray.push(pizzas[p])
            }
        }
        if (entry.events.include(event)) {
            index +=1
        }

        if (entry.squirrel) {
            index +=2
        }
        table[index] += 1;
    }
    console.log(pizzasArray)
    return table
}
console.log(tableForEvents('pizza',journal))


//find all the events that occured in the journal
function findEveryTypeOfEvent(journal) {
    
    //create an empty array where we'll store each event
    let events = [];
    //get all the element in journal =>objects
    for (let entry of journal) {
       
        //loop thru values from events 
        for (let event of entry.events) {
          
            //check if it contains the event in the values
            //add to event  new array otherwise
            if (!events.includes(event)) {
                events.push(event)
            }

        }
    }
    return events
}

console.log(findEveryTypeOfEvent(journal))

//find correlation of all events
for (let ev of findEveryTypeOfEvent(journal)) {
    console.log(ev ," : ", phi(tableForEvents(ev, journal)))
}

//find correlation > 0.1 or < -0.1
for (let c of findEveryTypeOfEvent(journal)) {
    
    //save value of phi in correlation
    let correlation = phi(tableForEvents(c, journal))
    if (correlation > .1 || correlation < -.1) {
        console.log(c, ":" , correlation)
    }
}

//filter correlation having strong  positive effect and that 
//of strong negative effect
//add new value to journal events
for (let co of journal) {
    if (co.events.includes('peanut') && !co.events.includes('brushed teeth')) {
       co.events.push("peanut teeth")
    }
}
 console.log(phi(tableForEvents('peanut teeth', journal)))
 //=> peanut teeth : 1
