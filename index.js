let blocks 
let feet 
let start
let finish
let distance
let feat

function distanceFromHqInBlocks(someValue){
    if(someValue < 42){
        blocks = 42- someValue
        return blocks
    }else{
        blocks = someValue-42
       return blocks
    }
}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue)
    feet = blocks* 264
    return feet

}

function distanceTravelledInFeet(start,finish){

    if(start > finish){
        distance = ((start-finish)*264)
        return distance

    } else if(finish >start){
         distance = ((finish-start)*264)
         return distance
    }
    
}

function calculatesFarePrice(start, finish) {
    distanceTravelledInFeet(start,finish)
    //feat=distance
    if(distance>0 && distance<400){
        return 0 
    }else if(distance>=400 && distance<2000){
        return (distance-400)*2/100
    }else if (distance>=2000 && distance<=2500){
        return 25
    }else if (distance>2500){
        return 'cannot travel that far'
    }
}
