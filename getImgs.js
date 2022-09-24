


let iconHolders=document.getElementsByClassName("icon--holder")

let title= document.getElementsByClassName("font-h3 bold")[0].textContent
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



let htmlBody=""
for(let i=0;i<iconHolders.length;i++){
    let iconHolder=  iconHolders[i];
    let  a= iconHolder.getElementsByTagName("a")[0]
    let  img= iconHolder.getElementsByTagName("img")[0]
    // let  href= iconHolder.href
    // let  href= a.href
    // let  href= img.href
    let  href= img.src
    // console.log("href");
    // console.log(href);
    let  GifUrl= getGifUrl(href)
    console.log("GifUrl");
    console.log(GifUrl);

    let htmlCode=  `<img src="${GifUrl}" alt="">\n`
    // `<img src="${GifUrl}"/> `
    htmlBody+=htmlCode
}

function getGifUrl(pngUrl){
    
   pngUrl=pngUrl.replaceAll("https://cdn-icons-png.flaticon.com/128/","https://cdn-icons-gif.flaticon.com/")
   console.log(pngUrl);
   pngUrl= pngUrl.substring(0,pngUrl.length-4)+".gif"
   return pngUrl
    // .replaceAll("https://cdn-icons-png.flaticon.com/128/","https://cdn-icons-gif.flaticon.com/")
}

// var n=str.replaceAll("Microsoft","Runoob");
// 

let htmlDoc=  `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>${title}</title>

    <style>
     
    </style>

</head>

<body>
${htmlBody}
</body>

</html>`
downloadTxt(title+"_gifs.html",htmlDoc)