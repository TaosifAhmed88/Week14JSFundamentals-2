function uniqueCharactersCheck(name){
    const charachtersSet = new Set(name);

     if (charachtersSet.size === name.length){
        console.log("The input string contains unique charachters");
     }
     else{
        console.log("The input string contains duplicates");
     }
}
uniqueCharactersCheck("TaosifMaqsud")