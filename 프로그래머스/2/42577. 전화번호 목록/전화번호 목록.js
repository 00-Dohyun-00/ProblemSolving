function solution(phone_book) {
    var answer = true;
    
    phone_book.sort();
    
    for(let i=0; i<phone_book.length-1; i++){
     
        // 접두어면 answer = false;
        if(phone_book[i+1].startsWith(phone_book[i])){
            answer = false;
            break;
        }
 
    }
    return answer;
}