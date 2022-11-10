def on_gesture_shake():
    global szám
    szám = randint(1, 6)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

szám = 0
for index in range(6):
    for index2 in range(6):
        led.plot(index, index2)
    basic.pause(100)

def on_forever():
    if szám == 6:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . . . .
        """)
    elif szám == 5:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
        """)
    elif szám == 4:
                basic.show_leds("""
                    . . . . .
                                . # . # .
                                . . . . .
                                . # . # .
                                . . . . .
                """)
    elif szám == 3:
        basic.show_leds("""
            . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
        """)
    elif szám == 2:
        basic.show_leds("""
            . . . . .
                        . . . # .
                        . . . . .
                        . # . . .
                        . . . . .
        """)
    elif szám == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    else:
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
basic.forever(on_forever)
