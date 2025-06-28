function solution(array, commands) {
    var answer = [];
    
    commands.forEach(item => {
        let newarr = array.slice(item[0]-1, item[1]).sort((a,b)=> a-b);
        answer.push(newarr[item[2]-1]);
    })
    
    
    
    return answer;
}