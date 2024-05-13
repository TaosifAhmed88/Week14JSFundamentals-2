function wordCounter(sentence) {
    const words = sentence.split(/\s+/);
    
    const wordMap = new Map();
    
    words.forEach(word => {
      const lowercaseWord = word.toLowerCase();
      
      if (wordMap.has(lowercaseWord)) {
        wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
      } else {
        wordMap.set(lowercaseWord, 1);
      }
    });
    
    return wordMap;
  }
  
  const sentence = "please please submit your assignment on time, your assignments are important";
  const result = wordCounter(sentence);
  
  console.log(result);
  
