#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char* myString, const char* pat) {
    int answer = 0;
    for(int i = 0; myString[i] != '\0'; i++){
        if(myString[i] == pat[0]){
            bool is = true;
            for(int j = 0; pat[j] != '\0'; j++){
                if(myString[i + j] != pat[j]){
                    is = false;
                    break;
                }
            }
            if(is){
                answer++;
            }
        }
       
    }
    return answer; 
}