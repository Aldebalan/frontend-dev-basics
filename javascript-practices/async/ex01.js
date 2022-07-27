const fetch = function(params, callback){
    // 
    // 비동기 코드(함수): 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
    //
    setTimeout(function() {
        if(params === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);
}

// callback 함수, 데이터는 error, data 표준
// readFile(options, function(error, data){});

// test01: success
fetch('param-data', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
    
    console.log(data);
});

// test02: fail
fetch('param-error', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
    
    console.log(data);
});


console.log("wait....");