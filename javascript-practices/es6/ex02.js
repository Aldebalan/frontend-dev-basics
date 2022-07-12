/**
 * const: Block Scope의 상수
 */

// 1. block scope 확인
try {
    if(true) {
        const num = 10;
    }

    console.log(num);

} catch(e) {
    console.error('[오류]' + e);
}

// 2. 대입 (Assigment) 에러
try {
    if(true) {
        const o = {};
        o.name = '둘리';    // 에러X

        o = {};             // o는 20번 라인에서 지정되어 있으므로 대입 불가 (TypeError)
    }
} catch(e) {
    console.error('[오류]' + e);
}