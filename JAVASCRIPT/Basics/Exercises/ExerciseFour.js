function speeding (speed){
    maxSpeed = 70;
    let penaltyPoints = Math.floor( (speed - maxSpeed)/5 )

    if (penaltyPoints >= 12){
        return 'suspended';
    }
    else if (penaltyPoints == 0){
        return 'OK';
    }
    return penaltyPoints;
    
}

speeding(80);