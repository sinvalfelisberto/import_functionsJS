//like time.sleep() from python3
function sleep(milliseconds) {
    let start = new Date().getTime()
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break
        }
    }
}

//how to implement:

for (let i = 10; i > 0; i--) {
    console.log(`${i}`)
    sleep(1000) //one second === 1000 milliseconds --- setInterval/setTimeOut like...
}
