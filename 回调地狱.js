// a({
//     parameter : someParameter,
//     callback : function(status) {
//         if (status == states.SUCCESS) {
//           b(function(status) {
//               if (status == states.SUCCESS) {
//                  c(function(status){
//                      if (status == states.SUCCESS) {
//                          // Not an exaggeration. I have seen
//                          // code that looks like this regularly.
//                     // 一点也不夸张。我经常看到这样的代码。
      
//                      }
//                  });
//               }
//           });
//         } else if (status == states.PENDING) {

//         }
//     }
// });

// 如果写成有名函数
a({
    parameter: someParameter,
    callback: aCallBack
});


const aCallBack = function (status) {
    if (status == states.SUCCESS) {
        b(bCallBack);
    } else if (status == states.PENDING) {

    }
}

const bCallBack = function (status) {
    if (status == states.SUCCESS) {
        c(cCallback);
    }
}

const cCallback = function (status) {
    if (status == states.SUCCESS) {
        // Not an exaggeration. I have seen
        // code that looks like this regularly.
    
    }
}



// https://www.itranslater.com/qa/details/2325851226333774848