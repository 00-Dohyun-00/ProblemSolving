function solution(s) {
    var answer = 0;
    let arr = s.split('');
    const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine'];
    for(let i = 0; i<eng.length; i++){
        for(let j=0; j<s.length; j++){
            if(arr[j] === eng[i][0] && arr[j+1] === eng[i][1]){
                arr.splice(j, eng[i].length, i);
            }
        }
    }
    answer = Number(arr.join(''));
    
    return answer;
}