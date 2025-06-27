function solution(s) {
    var answer = '';
    // 20250627

    answer = s.toLowerCase().split(' ').map(item => {
        if(item !== ''){
            let first = item[0].toUpperCase();
            let last = item.split('');
            last.splice(0, 1);
            return first + last.join('');
        }
       
    }).join(' ')
    

    
    // 2023
//     let arr = s.split('');
    
//     // arr.length-1은 if문에서 마지막 단어를 체크하지 않으므로
//     // (if문에서 -1의 경우를 보기 때문에) arr.length로 해줌
//     for(let i=0; i<arr.length; i++){
//         if(arr[i-1] === " " || i === 0) {
//             arr[i] = arr[i].toUpperCase();
//         } else {
//             arr[i] = arr[i].toLowerCase();
//         }
//     }
//     answer = arr.join('');
    
    return answer;
}