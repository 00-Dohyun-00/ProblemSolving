#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char* my_string, const char* is_suffix) {
    int answer = 0;
    
    char s[101] = "";
    int idx = 0;

    for(int i = strlen(my_string) - strlen(is_suffix); my_string[i] != '\0'; i++){
            s[idx++] = my_string[i];
    }

    s[idx] = '\0';

    printf("%s, %s", s, is_suffix);
    if(strcmp(s, is_suffix) == 0){
        answer = 1;
    }


    return answer;
}