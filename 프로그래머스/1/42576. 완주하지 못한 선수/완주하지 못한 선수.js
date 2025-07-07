function solution(participant, completion) {
    var answer = '';
    let hash = new Map();
    
    for(let i = 0; i<participant.length; i++){
        let name =  participant[i];
        let val = hash.get(name);
        if(val){
            hash.set(name, val + 1);
        } else {
            hash.set(name, 1);
        }
    }
    
    for(let i = 0; i<completion.length; i++){
        let name =  completion[i];
        let val = hash.get(name);
        if(val){
            hash.set(name, val - 1);
        } else {
            hash.set(name, 0);
        }
    }
    
    for(const [key, value] of hash){
        if(value !== 0){
            answer = key;
            break;
        }
    }

    
    return answer;
}