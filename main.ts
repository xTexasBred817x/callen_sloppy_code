// Program should start when an input device on micro:bit A is pressed on PIN 0.
input.onPinPressed(TouchPin.P0, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        radio.sendNumber(1)
    }
})
// When the input is pressed on micro:bit A, the signal starts this code on micro:bit B. This code scrolls a string that says "HELLO".
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.showString("HELLO")
    basic.clearScreen()
})
