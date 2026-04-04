#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* n_str) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char* answer = (char*)malloc(11);
    int idx = 0;
    bool is_first_zero = true;
    
    for(int i = 0; n_str[i] != '\0'; i++){
        if(n_str[i] != '0'){
            answer[idx++] = n_str[i]; 
            is_first_zero = false;
        } else if(n_str[i] == '0' && !is_first_zero) {
            answer[idx++] = n_str[i]; 
        }
    }
    answer[idx] = '\0';
    
    return answer;
}