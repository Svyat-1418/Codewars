function highAndLow(strOfNums){
    let res = ""
    let arrayOfNums = strOfNums.split()
    let highestNum = arrayOfNums[0]
    let lowestNum = arrayOfNums[0]
    for (let i = 0; i < highestNum.length; i++) {
        if (highestNum[i] > highestNum) highestNum = highestNum[i]
    }
    for (let i = 0; i < lowestNum.length; i++) {
        if (lowestNum[i] < lowestNum) lowestNum = lowestNum[i]
    }
    res = `${highestNum} ${lowestNum}`

    return res
}