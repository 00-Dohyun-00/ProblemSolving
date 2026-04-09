#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
char* solution(const char* myString, const char* pat) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    char* answer = (char*)malloc(strlen(myString)+1);
    int lastIdx = -1;
    
    for(int i = 0; myString[i] != '\0'; i++){
        if(myString[i] == pat[0]){
            bool isSame = true;
            
            for(int j = 0; pat[j] != '\0'; j++){
                if(myString[i + j] != pat[j]){
                    isSame = false;
                }
            }
            
            if(isSame){
                lastIdx = i + strlen(pat);
            }
        }
    }
    
    int idx = 0;
    for(int i = 0; i < lastIdx; i++){
        answer[idx++] = myString[i];
    }
    answer[idx] = '\0';
    return answer;
}