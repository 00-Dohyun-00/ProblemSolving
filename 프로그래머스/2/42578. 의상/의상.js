function solution(clothes) {
    var answer = 1;
    let arr = [];
    
    arr.push([clothes[0][1], 1]);
    
    for(let i =1; i<clothes.length; i++){
        let has = false;
        for(let j = 0; j<arr.length; j++){
            if(clothes[i][1] == arr[j][0]){
                arr[j][1]++;
                has = true;
            }
        }
        
        if(!has){
            arr.push([clothes[i][1], 1])
        }
    }
    
    for(let i = 0; i<arr.length; i++){
        answer *= (arr[i][1] + 1);
    }
    
    answer -= 1;
    return answer;
}