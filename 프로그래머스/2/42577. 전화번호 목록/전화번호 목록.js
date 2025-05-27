function solution(phone_book) {
    var answer = true;

// 효울성 테스트 2/4 통과
    // let dup = [];
    // phone_book.forEach(key => {   
    //     if(1 < dup.length) {
    //         answer = false;
    //         return;
    //     }
    //     dup = phone_book.filter(str => {
    //         return key === str.substr(0, key.length)
    //     });
    // })    

// 효울성 테스트 0/4 통과
    // phone_book.sort();
    // phone_book.forEach(key => {   
    //     phone_book.forEach(str => {
    //         if(key !== str && key === str.substr(0, key.length)){
    //             answer = false;
    //             return;
    //         } 
    //     }); 
    // })  


// 통과, but 해시 아님
//     phone_book.sort();
//     for (let i = 0; i < phone_book.length - 1; i++) {
//         if (phone_book[i + 1].startsWith(phone_book[i])) {
//             answer = false;
//         }
//     }
    

    const hash = new Map();

    // 모든 번호를 해시에 저장
    for (const number of phone_book) {
        hash.set(number, true);
    }

    // 각 번호에 대해 접두어가 존재하는지 검사
    // ex) ["119", "97674223", "1195524421"] 에서
    // number가 "1195524421"일때 for문의 세 바퀴 째에서 prefix = 119됨
    // hash.has(prefix)탐색시 "119" 있으므로 answer = false
    for (const number of phone_book) {
        let prefix = '';
        // 자기 자신 제외하기 위해 number.length - 1
        for (let i = 0; i < number.length - 1; i++) {
            prefix += number[i]; // 번호의 마지막 숫자 빼고 하나씩 검사
            if (hash.has(prefix)) {
                answer = false;
            }
        }
    }
   
    return answer;
}