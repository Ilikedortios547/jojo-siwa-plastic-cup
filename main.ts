function armup () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 60)
}
function armdown () {
	
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.Chessboard)
