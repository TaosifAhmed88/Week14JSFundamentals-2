function calculateDaysUntilEvent(eventDate) {
    
    const eventDateTime = new Date(eventDate);
    
    const now = new Date();
    
    const difference = eventDateTime - now;
    
    const daysUntilEvent = Math.ceil(difference / (1000 * 60 * 60 * 24));
  
    return daysUntilEvent;
  }
  
  const eventDate = "2024-07-01"; // Assuming the event starts on June 1, 2024
  const daysUntilEvent = calculateDaysUntilEvent(eventDate);
  console.log(`There are ${daysUntilEvent} days until the event.`);
  