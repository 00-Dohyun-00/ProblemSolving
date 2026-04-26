function solution(clothes) {
    var answer = 1;
    const hash = new Map();
    
    for(let i = 0; i<clothes.length; i++){
        if(hash.has(clothes[i][1])){
            let value = hash.get(clothes[i][1]);
            value.push(clothes[i][0]);
            hash.set(clothes[i][1], value);
        } else {
            hash.set(clothes[i][1], [clothes[i][0]]);
        }
    }
    
    
    for(const [key, value] of hash){
       answer *= value.length + 1;
    }
    

    return answer - 1;
}