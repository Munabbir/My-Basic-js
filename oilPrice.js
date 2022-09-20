function oilPrice(dLitter,pLitter,oLitter){
   let digel=114;
   let digelSum=digel*dLitter;
   let petrol=130;
   let petrolSum=petrol*pLitter;
   let octene=135;
   let octeneSum=octene *oLitter;
   
   
    let totlacost=digelSum+petrolSum+octeneSum;
   
    return totlacost;
   }
   
   console.log(oilPrice(1, 1, 1));
   console.log(oilPrice(30, 20, 10));
   console.log(oilPrice(1, 0, 2));
   console.log(oilPrice(0, 2, 3));
   
   