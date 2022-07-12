/**
 * let: Block Scope의 변수
 */

try {
    if(true) {
        let i = 20;
        var j = 10;
    }

    console.log(j);
    console.log(i);
} catch(e) {
    console.log('[오류]' + e);
}

// cf. var의 함수 범위
try{
    let f = function() {
        // let m = 20;
        var m  = 20;
    }

    f();

    console.log(m);
} catch(e) {
    console.log('[오류]' + e);
}

