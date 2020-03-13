if (process.argv[2].slice(-1) === "s"){
    let time = Number(process.argv[2].slice(0, -1))

    let interval = global.setInterval(() => {
        if (time === 0) {
            global.clearInterval(interval)
            process.exit(0)
        }
        for (let i = time-1; i > 0; i--){
            console.log(`Left: ${i}s`)
        }
    }, 1000)
}

let time = Number(process.argv[2].slice(0, -3)) * 60

let interval = global.setInterval(() => {
    if (time === 0) {
        global.clearInterval(interval)
        process.exit(0)
    }
    for (let i = time-1; i > 0; i--){
        console.log(`Left: ${i}s`)
    }
}, 1000)
