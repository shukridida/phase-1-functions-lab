// Code your solution in this
// Code your solution in this file!
function distanceFromHqInBlocks(Hq){
    if (Hq > 42) {
        return Hq-42
    }
    else{
        return 42-Hq
    }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet(start,destination){
    if(start<destination){
        return(destination - start)*264

    }
    else{
        return(start - destination)*264
    }
}
function calculatesFarePrice(start,destination){
    let distance=distanceTravelledInFeet(start,destination)
        if (distance<400){
            return 0
        }else if(distance>400 && distance <=2000){
            return(distance-400)*0.02
        }else if (distance>2000&&distance<=2500){
            return 25
        }else {
            return `cannot travel that far`
        }
    }