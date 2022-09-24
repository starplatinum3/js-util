

// let  readlines= document.getElementsByClassName("noveContent readline")
let  noveContent= document.getElementsByClassName("noveContent readline")[0]
let  readlines=  noveContent.getElementsByTagName("p")
for (let i=0; i<readlines.length; i++){
   let line=  readlines[i].textContent
   console.log(line);

}


function downloadPic(url){
    var x=new XMLHttpRequest();
    // x.open("GET", "http://danml.com/wave2.gif", true);
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.onload=function(e){
        var url = window.URL.createObjectURL(x.response)
        var a = document.createElement('a');
        a.href = url
        a.download = ''
        a.click()
    }
    x.send();
}
