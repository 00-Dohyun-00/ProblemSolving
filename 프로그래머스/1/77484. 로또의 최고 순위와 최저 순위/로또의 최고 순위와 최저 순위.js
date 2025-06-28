function solution(lottos, win_nums) {
    var answer = [];
    let rank = [6,6,5,4,3,2,1];
    let matched = lottos.filter(item => win_nums.includes(item)).length;
    let zero = lottos.filter(item => item === 0).length;
    
    
    let max = rank[matched + zero];
    let min = rank[matched];
    
    answer = [max, min];
    return answer;
}