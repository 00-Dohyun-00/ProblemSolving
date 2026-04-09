#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* my_string, int s, int e) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char* answer = (char*)malloc(strlen(my_string) + 1);
    int idx = 0;
    char re[e-s];
    int re_idx = 0;
    
    for(int i = e; i >= s; i--){
        re[re_idx++] = my_string[i];
    }
    re[re_idx] = '\0';
    
    for(int i = 0; my_string[i] != '\0'; i++){
        if(i < s || i > e){
            answer[idx++] = my_string[i];
        } else {
            for(int j = 0; re[j] != '\0'; j++){
                answer[idx++] = re[j];
            }
            i += e-s;
        }
    }
    answer[idx] = '\0';
    
    return answer;
}