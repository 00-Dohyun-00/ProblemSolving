function solution(priorities, location) {
    var answer = 0;
    let nowidx = location;
    let bigger = false;
    
    while(true){
        
        let arr = priorities.filter((item, idx) => {
            if(idx !== 0){
                return item > priorities[0];
            }
        });
        if(arr.length !== 0){
            bigger = true;
        } else {
            bigger = false;
        }
        
                
        if(bigger){
            priorities.push(priorities[0])
            priorities.shift();
            if(nowidx == 0){
                nowidx = priorities.length - 1;
            } else {
                nowidx--;
            }
        } else {
            if(nowidx == 0){
                answer++;
                 console.log('sfwf')
                break;
            } else {
                nowidx--;
            }
            priorities.shift();
            answer++;
        }
        
        

    }
    return answer;
}