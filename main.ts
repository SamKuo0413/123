keyboard.kbEvent(KeyValue.keyminus, function () {
    if (ESP8266_IoT.thingSpeakState(true)) {
        keyboard.setIndexColor(11, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
        I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
    }
})
keyboard.kbEvent(KeyValue.keyequal, function () {
    let 國文老師的物聯網密碼 = ""
    keyboard.setIndexColor(0, 0xff0000)
    basic.pause(200)
    keyboard.ledBlank()
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Put In Your", 3, 0)
    I2C_LCD1602.ShowString("Homework", 4, 1)
    if (箱子號碼 == 1) {
        basic.pause(10000)
        第一台的距離二 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        if (第一台的距離一 > 第一台的距離二) {
            ESP8266_IoT.setData(
            國文老師的物聯網密碼,
            最後出現數座號
            )
            第一台的距離一 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
        }
    }
    if (箱子號碼 == 2) {
        basic.pause(10000)
        第二台的距離二 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        if (第二台的距離一 > 第二台的距離二) {
            ESP8266_IoT.setData(
            國文老師的物聯網密碼,
            最後出現數座號
            )
            第二台的距離一 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
        }
    }
    if (箱子號碼 == 3) {
        basic.pause(10000)
        第三台的距離二 = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        if (第三台的距離一 > 第三台的距離二) {
            ESP8266_IoT.setData(
            國文老師的物聯網密碼,
            最後出現數座號
            )
            第三台的距離一 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
        }
    }
})
keyboard.kbEvent(KeyValue.keydf, function () {
    if (ESP8266_IoT.thingSpeakState(true)) {
        keyboard.setIndexColor(15, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("Hello", 0, 0)
        for (let index = 0; index < 4; index++) {
            if (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || (keyboard.keyPressed(KeyValue.key4) || (keyboard.keyPressed(KeyValue.key5) || (keyboard.keyPressed(KeyValue.key6) || (keyboard.keyPressed(KeyValue.key7) || (keyboard.keyPressed(KeyValue.key8) || keyboard.keyPressed(KeyValue.key9)))))))))) {
                箱子號碼 = keyboard.keyMathNumber()
                I2C_LCD1602.ShowString("Code" + " " + 箱子號碼, 3, 1)
            }
        }
    }
})
let 第三台的距離二 = 0
let 第二台的距離二 = 0
let 第一台的距離二 = 0
let 箱子號碼 = 0
let 第三台的距離一 = 0
let 第二台的距離一 = 0
let 第一台的距離一 = 0
let 最後出現數座號 = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Enter The Code", 1, 0)
I2C_LCD1602.ShowString("Code" + " " + 最後出現數座號, 3, 1)
第一台的距離一 = sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.Centimeters
)
第二台的距離一 = sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.MicroSeconds
)
第三台的距離一 = sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.MicroSeconds
)
ESP8266_IoT.connectWifi("your_ssid", "your_pw")
if (ESP8266_IoT.wifiState(false)) {
    basic.showString("mistake1")
} else {
    ESP8266_IoT.connectThingSpeak()
    if (ESP8266_IoT.thingSpeakState(false)) {
        basic.showString("mistake2")
    }
}
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0)) {
        keyboard.setIndexColor(0, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key1)) {
        keyboard.setIndexColor(1, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key2)) {
        keyboard.setIndexColor(2, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key3)) {
        keyboard.setIndexColor(3, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key4)) {
        keyboard.setIndexColor(4, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key5)) {
        keyboard.setIndexColor(5, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key6)) {
        keyboard.setIndexColor(6, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key7)) {
        keyboard.setIndexColor(7, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key8)) {
        keyboard.setIndexColor(8, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
    if (keyboard.keyPressed(KeyValue.key9)) {
        keyboard.setIndexColor(9, 0xff0000)
        basic.pause(200)
        keyboard.ledBlank()
    }
})
basic.forever(function () {
    if (箱子號碼 > 10) {
        I2C_LCD1602.ShowString("Code" + "             ", 3, 1)
    }
})
basic.forever(function () {
    if (最後出現數座號 > 99999) {
        I2C_LCD1602.ShowString("Code" + "               ", 3, 1)
    }
    basic.pause(1500)
})
basic.forever(function () {
    if (keyboard.keyPressed(KeyValue.key0) || (keyboard.keyPressed(KeyValue.key1) || (keyboard.keyPressed(KeyValue.key2) || (keyboard.keyPressed(KeyValue.key3) || (keyboard.keyPressed(KeyValue.key4) || (keyboard.keyPressed(KeyValue.key5) || (keyboard.keyPressed(KeyValue.key6) || (keyboard.keyPressed(KeyValue.key7) || (keyboard.keyPressed(KeyValue.key8) || keyboard.keyPressed(KeyValue.key9)))))))))) {
        最後出現數座號 = keyboard.keyMathNumber()
        I2C_LCD1602.ShowString("Code" + " " + 最後出現數座號, 3, 1)
    }
})
