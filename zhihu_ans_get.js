
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



function downloadPage() {

    // let  ContentItem_titles =document.getElementsByclassName("ContentItem-title")
    // let ContentItem_titles = document.getElementsByClassName("ContentItem-title")
    let RichContent_inners = document.getElementsByClassName("RichContent-inner")
    // let RichContent_inners =document.getElementsByclassName("RichContent-inner")
    // getElementsByClassName()
    let ContentItem_titles = document.getElementsByClassName("ContentItem-title")
    console.log("ContentItem_titles");
    console.log(ContentItem_titles);
    // for (const i in ContentItem_titles) {
    let answerList = []
    for (let i = 0; i < ContentItem_titles.length; i++) {

        let titleDom = ContentItem_titles[i]
        //    let meta=  titleDom.getElementsByClassName("meta")[0]
        //    let meta=  titleDom.getbyTagName("meta")[0]
        // console.log("titleDom");
        // console.log(titleDom);
        let title = titleDom.textContent
        let RichContent = RichContent_inners[i].textContent
        try {
            let meta = titleDom.getElementsByTagName("meta")[0]
            // console.log("meta");
            // console.log(meta);
            let metaContent = meta.content
            console.log("metaContent");
            console.log(metaContent);
            let link = metaContent

            answerList.push({
                title,
                link,
                RichContent
            })

        } catch (error) {
            console.log(error);
            console.log("titleDom");
            //         titleDom
            // init.js:1 20
            // 他会去读取长度？
            console.log(titleDom);
        }

        // let metaContent = meta.content
        // console.log("metaContent");
        // console.log(metaContent);
    }
    // for (const iterator of object) {

    // }

    console.log("answerList");
    console.log(answerList);

    // let cur 
    let currentPage = document.getElementsByClassName("Button PaginationButton PaginationButton--current Button--plain")[0].textContent
    console.log("currentPage");
    console.log(currentPage);


    let answerListStr = JSON.stringify(answerList)
    // let  txtName =`zhihu_answerList_page_${currentPage}.txt`
    let txtName = `zhihu_answerList_page_${currentPage}.json`
    // downloadTxt("answerList.txt",answerListStr)

    downloadTxt(txtName, answerListStr)
    let PaginationButton_next = document.getElementsByClassName("Button PaginationButton PaginationButton-next Button--plain")[0]
    if (PaginationButton_next == null) {
        console.log("没有找到下一个的按钮");
        console.log("停止了");
        // currentPage
        console.log("currentPage 在这一页 停止");
        console.log(currentPage);
        clearInterval(downloadPageInterval)
    } else {
        PaginationButton_next.click()
    }

}



let downloadPageInterval = setInterval(() => {
    downloadPage()
}, 4000)