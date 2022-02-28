function waitWithTimeout(promise, timeout, timeoutMessage = "timeout") {
    let timer;
    const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => reject(timeoutMessage), timeout);
    }); 
    return Promise.race([timeoutPromise, promise])
        .finally(() => clearTimeout(timer));    // 别忘了清 timer
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