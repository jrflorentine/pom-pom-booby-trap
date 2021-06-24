input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(30)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "alert") {
        servos.P0.setAngle(240)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(150)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendString("alert")
})
radio.setGroup(1)
servos.P0.setAngle(30)
basic.forever(function () {
	
})
