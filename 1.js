let allusers = ['Taosif','Ahmed','Abrar','Kaif','Sohel','Gulfam','Patel','Mohtaseen']

function isUserPresent (user){
    if(allusers.includes(user)){
        console.log(`Yes, ${user} is a valid user`);
    }
    else{
        console.log(`No, ${user} is not a valid user`);
    }
}

isUserPresent(`Taosif`);