enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(90)
    servos.P1.setRange(90, 180)
    servos.P1.setAngle(90)
    servos.P1.setStopOnNeutral(false)
    datalogger.log(
        datalogger.createCV("co1", 1),
        datalogger.createCV("co1", 1),
        datalogger.createCV("co1", 1)
    )
    datalogger.setColumnTitles(
        "co1",
        "co1",
        "co1"
    )
    datalogger.mirrorToSerial(true)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.log(
        datalogger.createCV("co3", 3),
        datalogger.createCV("co3", 3),
        datalogger.createCV("co3", 3)
    )
    datalogger.setColumnTitles(
        "co3",
        "co3",
        "co3"
    )
    datalogger.mirrorToSerial(true)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(-90)
    servos.P1.setRange(-90, 0)
    servos.P1.setAngle(0)
    servos.P1.setStopOnNeutral(true)
    datalogger.log(
        datalogger.createCV("co2", 2),
        datalogger.createCV("co2", 2)
    )
    datalogger.setColumnTitles(
        "co2",
        "co2",
        "co2"
    )
    datalogger.mirrorToSerial(true)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . # . #
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    datalogger.mirrorToSerial(true)
    serial.writeNumbers([
        input.lightLevel(),
        8,
        input.lightLevel(),
        input.runningTime(),
        input.temperature(),
        input.runningTimeMicros(),
        input.compassHeading(),
        input.runningTimeMicros(),
        input.soundLevel()
    ])
    datalogger.log(
        datalogger.createCV("co4", 4),
        datalogger.createCV("co4", 4),
        datalogger.createCV("co4", 4)
    )
    datalogger.setColumnTitles(
        "co4",
        "co4",
        "co4"
    )
})