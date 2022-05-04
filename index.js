// Code your solution in this file!
var hqLocation = 42;

function distanceFromHqInBlocks(someNumber){
    return Math.abs(someNumber - hqLocation);
}

// distanceFromHqInBlocks(43);

// distanceFromHqInBlocks(50);

// distanceFromHqInBlocks(34);

function distanceFromHqInFeet(someNumber){
    let blockDistance = distanceFromHqInBlocks(someNumber);
    return blockDistance * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let fareCost = distanceTravelledInFeet(start, destination); 
        if (fareCost <= 400){
            return fareCost * 0;
        }
            else if (fareCost > 400 && fareCost <= 2000){
                return (fareCost - 400) * 0.02;
            }
                else if (fareCost > 2000 && fareCost <= 2500){
                    return 25;
                }
                    else if (fareCost > 2500){
                        return `cannot travel that far`;
                    }
}

