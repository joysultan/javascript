// discount ticket progress
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity<=100){
        const first100Price = 100;
        const price = ticketQuantity * first100Price;
        return price;
    }
    else if(ticketQuantity<=200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    
  else {
    const first100Price = 100 *first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
    
}
const my100TicketPrice = ticketPrice(2);
console.log('ticket-Price:', my100TicketPrice);

// discount ticket progress 