function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    arr.forEach((item, i) => {
        arr[i] = Number(item);
    });
    arr.sort((a,b) => a - b);

    answer = String(arr[0]) + ' ' + String(arr[arr.length-1]);
    
    return answer;
}