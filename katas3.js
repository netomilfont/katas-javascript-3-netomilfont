const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (result) {

    console.log(result)

}


function kata1() {
    let result = ''
    for(let i = 1; i <= 25; i++) {
        result += ` ${i}`
    }
    
    return showResults(result)
}

kata1()

function kata2() {
    let result = ''
    for(let i = 25; i >= 1; i--) {
        
        result += ` ${i}`
    }

    return showResults(result)
}

kata2()

function kata3() {
    let result =  ''
    for(let i = -1; i >= -25; i--) {
        result += ` ${i}`
    }

    return showResults(result)
    
}

kata3()

function kata4() {
    let result =  ''
    for(let i = -25; i < 0; i++) {
        result += ` ${i}`
    }

    return showResults(result)
}

kata4()

function kata5() {
    let result = ''
    for(let i = -25; i <= 25; i++) {
        if(i % 2 !== 0) {
            result += ` ${i}`

        }
    }

    return showResults(result)
}

kata5()

function kata6() {
    let result = ''
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0) {
            result += ` ${i}`
        }
    }

    return showResults(result)
}

kata6()

function kata7() {
    let result = ''
    for(let i = 1; i <= 100; i++) {
        if(i % 7 == 0) {
            result += ` ${i}`
        }
    }

    return showResults(result)
}

kata7()

function kata8() {
    let result = ''
    for(let i = 100; i >= 1; i--) {
        if(i % 3 == 0 || i % 7 == 0) {
            result += ` ${i}`
        }
    }

    return showResults(result)
}

kata8()

function kata9() {
    let result = ''
    for(let i = 1; i <= 100; i++) {
        if(i % 2 !== 0 && i % 5 == 0) {
            result += ` ${i}`
        }
    }

    return showResults(result)
}


kata9()

function kata10(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        result += ` ${array[i]}`
    }

    return showResults(result)
}

kata10(sampleArray)

function kata11(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            result += ` ${array[i]}`

        }
    }

    return showResults(result)
}

kata11(sampleArray)

function kata12(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            result += ` ${array[i]}`

        }
    }

    return showResults(result)
}

kata12(sampleArray)

function kata13(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 8 == 0) {
            result += ` ${array[i]}`

        }
    }

    return showResults(result)
}

kata13(sampleArray)

function kata14(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        result += ` ${array[i] ** 2}`
    }

    return showResults(result)
}

kata14(sampleArray)

function kata15() {
    let result = 0
    for(let i = 1; i <= 20; i++) {
        result += i
    }

    return showResults(result)
}

kata15()

function kata16(array) {
    let result = 0
    for(let i = 0; i < array.length; i++){
        result += array[i]
    }

    return showResults(result)
}

kata16(sampleArray)

function kata17(array) {
    let result = ''
    for(let i = 0; i < array.length; i++) {
        if(array[i] > result) {
            result = array[i]
        }
    }

    return showResults(result)
}

kata17(sampleArray)

function kata18(array) {
    let result = array[0]
    for(let i = 0; i < array.length; i++) {
        if(array[i] < result) {
            result = array[i]
        }
    }

    return showResults(result)
}

kata18(sampleArray)