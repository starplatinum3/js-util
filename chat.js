class Chat {
    constructor(id, name, avatar, unReadCount, lastMessage, mobile, email, type) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.unReadCount = unReadCount;
        this.lastMessage = lastMessage;
        this.mobile = mobile;
        this.email = email;
        this.type = type;
    }
}

let currentMessage = {
    mine: true,
    avatar: "currentUser.avatar",
    username: "currentUser.name",
    timestamp: "time",
    content:" self.messageContent",
    fromId: "currentUser.id",
    chatId: "self.chat.id",
    // chatID 可能是个朋友  也可能是个聊天室
    type: "self.chat.type"
};

let chat = new Chat()
console.log("chat");
console.log(chat);
// js 类的属性遍历
// console.log(Object.keys(xiaoming));
// 

function objToJavaPojo(obj) {
    let fieldStr = ""
    for (let o of Object.keys(obj)) {
        // console.log(o);
        fieldStr += `private String ${o};\n`
    }

    let javaPojoStr = `
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Chat{
    ${fieldStr}
}`
    console.log(`
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Chat{
    ${fieldStr}
}`);

    return javaPojoStr
}

let fieldStr = ""
for (let o of Object.keys(chat)) {
    console.log(o);
    fieldStr += `private String ${o};\n`
}

console.log(`
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Chat{
    ${fieldStr}
}`);

let  msg= objToJavaPojo(currentMessage)
console.log(msg);