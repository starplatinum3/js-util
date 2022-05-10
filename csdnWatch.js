// #userSkin > div.user-profile-body > div > div.user-profile-body-right > div.navList-box > div.mainContent > div

let watchLst = document.querySelector("#userSkin > div.user-profile-body > div > div.user-profile-body-right > div.navList-box > div.mainContent > div")
console.log("watchLst");
console.log(watchLst);
watchLst = Array.prototype.slice.call(watchLst);
watchLst1 = [].slice.call(watchLst);
console.log("watchLst1.length");
console.log(watchLst1.length);
console.log("watchLst.length");
console.log(watchLst.length);
for (let index = 0; index < watchLst.length; index++) {
    const element = watchLst[index];
    console.log("element");
    console.log(element);
}


let  mainContent= document.getElementsByClassName("mainContent")[0]
// for (let index = 0; index < mainContent.length; index++) {
//     const element = array[index];
    
// }
// let name =document.querySelector("#userSkin > div.user-profile-body > div > div.user-profile-body-right > div.navList-box > div.mainContent > div > div:nth-child(2) > div:nth-child(1) > div > div.sub-people-left > div > div.sub-people-title > a > div")

for (let index = 0; index < 11; index++) {
    // const element = array[index];
    let name = document.querySelector(`#userSkin > div.user-profile-body > div > div.user-profile-body-right > div.navList-box > div.mainContent > div > div:nth-child(2) > div:nth-child(${index}) > div > div.sub-people-left > div > div.sub-people-title > a > div`)
    // console.log("name");
    // console.log(name);
    if (name === null) {
        continue
    }
    let nameText = name.textContent
    // console.log("nameText");
    // console.log(nameText);
    // if(nameText.includes("dea")){
        console.log("nameText");
        console.log(nameText);

    if (nameText.includes("De")) {
        console.log("nameText");
        console.log(nameText);
    }
}