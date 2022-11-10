input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 6; index++) {
        szám = randint(1, 6)
        if (szám == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        } else if (szám == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        } else if (szám == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        } else if (szám == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        } else if (szám == 2) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
                `)
        } else if (szám == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        basic.pause(100 * index)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 4)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, 0)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(4, index)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(4 - index, 4)
        basic.pause(50)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(0, 4 - index)
        basic.pause(50)
    }
})
let szám = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
