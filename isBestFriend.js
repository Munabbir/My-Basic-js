function isBestFriend(obj1,obj2){

    if(obj1.name==obj2.friend && obj2.name === obj1.friend){
       return true;
    }
 
    return false
 }
 
 const user = { name: 'abul', friend: 'babul' };
 
 const user1 = { name: 'babul', friend: 'abul' };
 console.log(isBestFriend(user, user1));
 