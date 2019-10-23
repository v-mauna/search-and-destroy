'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    if(linkedlist.head === null){
        return false
    }
    let savedNodes = [];
    let currentNode = linkedlist.head;
    while(!(savedNodes.includes(currentNode.value)) && currentNode.next){
        savedNodes.push(currentNode.value);
        if(currentNode.next){
            currentNode = currentNode.next;
        }
    }

        return savedNodes.includes(currentNode.value)
    }

const findLoop = (linkedList) => {
    
}

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop