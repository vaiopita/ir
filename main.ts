makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    basic.showNumber(9)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.White)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # . . . #
        # . . . #
        # # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . # .
        # . . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # . #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.OFF)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Red)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.showNumber(7)
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Right, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    basic.showNumber(6)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinRight, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.showNumber(5)
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.showNumber(4)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Left, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Blue)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, 100)
    basic.pause(1000)
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
})
makerbit.connectIrReceiver(DigitalPin.P8)
