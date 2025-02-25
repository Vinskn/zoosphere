import random from "crypto-random-string";

const randomString = (num) => {
    const randomize = random({
        length: num
    })
    return randomize
}

export default randomString;