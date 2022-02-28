async function waitWithTimeoutTs(promise: Promise<any>, timeout: number, timeoutMessage = "timeout") {
    let timer: number;
    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => reject(timeoutMessage), timeout);
    }); 
    try {
        return await Promise.race([timeoutPromise, promise]);
    } finally {
        return clearTimeout(timer);
    }    // 别忘了清 timer
}


(async () => {
    const business = new Promise(resolve => setTimeout(resolve, 1000 * 10));
    try {
        await waitWithTimeout(business, 1000);
        console.log("[Success]");
    } catch (err) {
        console.log("[Error]", err);    // [Error] timeout
    }
})();