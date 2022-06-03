class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

let commentInfo={
    user:{
        avatar:"",
        uname:""
    },
    content:"",
    created:"",
    style:"",
    images:[]
}

console.log("commentInfo");
console.log(commentInfo);
let shop=new Shop({})

let java_fields=""
// for (const field of shop) {
//     console.log("field");
//     console.log(field);
// }

function title(str){
    // a = a[0].toUpperCase() + a.substr(1)  
    return        str[0].toUpperCase() + str.substr(1)  
}
// Func.name
// shop
// Shop.name

// 这个可以
for (const field in shop) {
    console.log("field");
    console.log(field);
    // title
    // js title 
    let  fieldClsName= title(field)
    // java_fields+=`${fieldClsName } ${field};\n`
    java_fields+=`String ${field};\n`
    //  let val=shop[field]
}
console.log("java_fields");
console.log(java_fields);
console.log(shop);

let classStr=`
import lombok.Data;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ${Shop.name} {
    ${java_fields}
}`

console.log(classStr);