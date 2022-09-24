

// let  pics= document.getElementsByClassName("qFtWQg")
// let  pics= document.getElementsByClassName("T96P6A")
// AiHWyw

function downloadTxt(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}




let  pics= document.getElementsByClassName("AiHWyw")

let  title= document.getElementsByClassName("WtTJUQ")[0].textContent
function  getFileSplits(httpStr) {
    // httpStr.replace(/\\/g, "https://");
    httpStr=  httpStr.replace(/https:\/\//g, "");
    // js replace
    let  sps= httpStr.split("/");

    return sps

}

function  makePngImgUrl(sps) {
    return "https://media-public.canva.cn/"+sps[1]+"/"+sps[2]+"/1/s.png";
    // return "https://media-public.canva.cn/"+sps[1]+"/"+sps[2]+"/2/s.png";
    // return sps

}

let outJson=""
let outJsonList=[]
let out=""
for(let i=0;i<pics.length;i++){
    let picDom=  pics[i]
     let src= picDom.src
    //  console.log(src);
     if(!src){
        continue
     }
 
     let  alt= picDom.alt
    //  缩略图
    // https://media-public.canva.cn/nOifE/MAEOrznOifE/2/s.png
    //  https://marketplace.canva.cn/tOthk/MAEOr8tOthk/2/tl/canva-MAEOr8tOthk.png
    // picDom.getElementsByTagName("img")
    // https://www.baidu.com/111/222/333
    // https://blog.csdn.net/diandian82/article/details/9023707
    // sscanf("https://www.baidu.com/111/222/333","https://%s/%s/%s/%s",domain,path,filename,ext)
    let sps= getFileSplits(src)
    let  pngUrl= makePngImgUrl(sps)
    // console.log(pngUrl);
    out+=pngUrl+"\n"
    outJsonList.push({
        pngUrl,
        alt
    })
}

downloadTxt(title+".txt", out)
downloadTxt(title+".json", JSON.stringify(outJsonList))