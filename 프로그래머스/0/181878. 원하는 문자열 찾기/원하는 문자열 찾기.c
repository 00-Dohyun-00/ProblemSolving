#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char* myString, const char* pat) {
    int answer = 0;
    char newString[strlen(myString)+1], newPat[strlen(pat)+1];
    
    for(int i = 0; myString[i] != '\0'; i++){
        newString[i] = tolower(myString[i]);
    }
    newString[strlen(myString)] = '\0';
    
    for(int i = 0; pat[i] != '\0'; i++){
        newPat[i] = tolower(pat[i]);
    }
    newPat[strlen(pat)] = '\0';
    
    if(strstr(newString, newPat)){
        answer = 1;
    }
    
    
    return answer;
}