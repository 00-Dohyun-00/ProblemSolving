#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* my_string, int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char* answer = (char*)malloc(n+1);
    int index = 0;
    int start = 0;
    int end = 0;
    int i = 0;
    
    // 문자열 길이
    while(my_string[i] != '\0'){
        end++;
        i++;
    }
    
    // 시작 인덱스
    start = end - n;
    

    for(int j = start; j <= end; j++){
        answer[index++] = my_string[j];
    }
    
    answer[index] = '\0';
    
    
    return answer;
}