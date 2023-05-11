export function helperThrottle(fn, limit) {
    let flag = true
    return function () {
        let args = arguments
        if (flag) {
            fn(...args)
            flag = false
            setTimeout(() => {
                flag = true
            }, limit)
        }
    }
}