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


function getBiliUrl() {
    // clearfix cube-list
    cubeList = document.getElementsByClassName("clearfix cube-list")[0];
    // console.log("cubeList");
    // console.log(cubeList);
    lis = cubeList.getElementsByTagName("li");
    url = "www.bilibili.com/video/";
    outData = "";
    for (let i = 0; i < lis.length; i++) {
        // data-aid

        li = lis[i];
        dataId = li.getAttribute("data-aid");
        titleDom = li.getElementsByClassName("title")[0];
        title = titleDom.textContent;
        //  getAttribute("属性")
        //  dataIdLst.push(dataId);
        //  links.push (  url+dataId);
        outData += title + "," + url + dataId + "\n";
        // console.log( url+dataId);

    }
    // console.log(outData);

    downloadTxt("bili一只小黄书历史视频page1.csv",outData);
}

getBiliUrl();

