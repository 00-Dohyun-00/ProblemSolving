function solution(lottos, win_nums) {
    var answer = [];
    const RANKING = [6,6,5,4,3,2,1]
    
    let matched = lottos.filter(item => win_nums.includes(item)).length;
    let zeros = lottos.filter(item => item === 0).length;
    
    let max = RANKING[matched + zeros];
    let min = RANKING[matched];
    answer = [max, min];
    return answer;
}