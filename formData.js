// import MapUtil from "./top/starp/MapUtil";

// const MapUtil = require("./top/starp/MapUtil");

let param = new Map();
param.set("client_id", "v-client");
param.set("client_secret", "v-client-ppp");
param.set("grant_type", "password");
param.set("scope", "select");
param.set("username", "uisr");
param.set("password", "password.trim()");
// param.set("username", username.trim());
// param.set("password", password.trim());
// console.log(param);

let FormBodyIn=""

// mapOf(
let mapStr = ""
let urlStr = ""
param.forEach((v, k) => {
    mapStr += `"${k}" to "${v}",\n`
    urlStr+=`${k}=${v}&`
    FormBodyIn+=`.add("${k}","${v}")\n`
})

function mapToKtlMap(map){
    let mapStr = ""
    let urlStr = ""
    map.forEach((v, k) => {
        mapStr += `"${k}" to "${v}",\n`
        urlStr+=`${k}=${v}&`
        FormBodyIn+=`.add("${k}","${v}")\n`
    })
    let ktMapStr = `mapOf(
        ${mapStr}
    )`
    return ktMapStr
}

let ktMapStr = `mapOf(
    ${mapStr}
)`

let FormBody=`FormBody.Builder()
${FormBodyIn}
.build()
`
console.log(FormBody);
console.log(urlStr);
// let urlWholeStr = ``


class MapUtil {
    static _strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    /**
    *map转换为json
    */
    static _mapToJson(map) {
        return JSON.stringify(this._strMapToObj(map));
    }

}





let jsonStr = MapUtil._mapToJson(param)
// let jsonStr= _mapToJson(param)
console.log("jsonStr");
console.log(jsonStr);
// _strMapToObj(strMap){
//     let obj= Object.create(null);
//     for (let[k,v] of strMap) {
//       obj[k] = v;
//     }
//     return obj;
//   }
//   /**
//   *map转换为json
//   */
//   _mapToJson(map) {
//   return JSON.stringify(this._strMapToObj(map));
//   }

console.log(ktMapStr);

// js map 打印成json 