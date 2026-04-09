#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// order_len은 배열 order의 길이입니다.
// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char* order[], size_t order_len) {
    int answer = 0;
    char* price4500[] = {"iceamericano", "americanoice", "hotamericano", "americanohot", "americanohot", "americano", "anything"};
    char* price5000[] = {"icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot", "cafelatte"};
    for(int i = 0; i< order_len; i++){
        for(int j = 0; j < sizeof(price4500)/sizeof(price4500[0]); j++){
            if(strcmp(order[i], price4500[j]) == 0){
                answer += 4500;
                break;
            }
        }
        for(int j = 0; j < sizeof(price4500)/sizeof(price5000[0]); j++){
            if(strcmp(order[i], price5000[j]) == 0){
                answer += 5000;
                break;
            }
        }
    }
    return answer;
}