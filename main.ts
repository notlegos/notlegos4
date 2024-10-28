function stepOnD () {
    if (isMine(theLevel, "D")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.explosion)
        notLegos.mp3sayPlay(notLegos.playerSaying.ouch)
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.cannon, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.cannon, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.off)
        if (hitMineD) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineD = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.left, notLegos.hues.pink)
        notLegos.sayIndicate(notLegos.side.right, notLegos.hues.cyan)
        notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.indicateL)
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.indicateR)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorCenter || monitorRight)) {
            sayMode(false, true, true)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.off)
        if (monitorCenter) {
            notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.off)
            monitorCenter = false
            stepOnE()
        } else {
            notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.off)
            monitorRight = false
            stepOnF()
        }
    }
}
function radioSay (text5: string, val: number) {
    radio.sendValue("" + btToken + text5, val)
    notLegos.printLine("said: " + text5 + "=" + val, 7)
}
function stepOnA () {
    postScore()
    notLegos.sayLights(notLegos.vfxRegion.WheelOuter, notLegos.vfxEffect.active)
    notLegos.sayLights(notLegos.vfxRegion.SpotA, notLegos.vfxEffect.mine)
    notLegos.sayIndicate(notLegos.side.left, notLegos.hues.yellow)
    notLegos.sayIndicate(notLegos.side.right, notLegos.hues.blue)
    notLegos.setVolume(notLegos.mp3type.music, 80)
    basic.pause(20)
    notLegos.mp3musicPlay(notLegos.musicGenre.awaiting)
    while (lastSonarRead >= 10) {
        basic.pause(20)
    }
    notLegos.mp3sayPlay(notLegos.playerSaying.ready)
    notLegos.mp3musicPlay(notLegos.musicGenre.level)
    notLegos.sayLights(notLegos.vfxRegion.WheelOuter, notLegos.vfxEffect.off)
    notLegos.sayLights(notLegos.vfxRegion.SpotA, notLegos.vfxEffect.active)
    notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.indicateL)
    notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.indicateR)
    basic.pause(1000)
    castleMode = "monitoring"
    while (!(monitorLeft || monitorRight)) {
        sayMode(true, false, true)
        basic.pause(10)
    }
    notLegos.mp3sayPlay(notLegos.playerSaying.yay)
    castleMode = "tripped"
    notLegos.sayLights(notLegos.vfxRegion.SpotA, notLegos.vfxEffect.off)
    if (monitorLeft) {
        notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.off)
        monitorLeft = false
        stepOnB()
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.off)
        monitorRight = false
        stepOnC()
    }
}
function stepOnB () {
    if (isMine(theLevel, "B")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.slash)
        notLegos.mp3sayPlay(notLegos.playerSaying.ouch)
        notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.redrack, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.redrack, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.off)
        if (hitMineB) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineB = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.left, notLegos.hues.orange)
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.indicateL)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorRight)) {
            sayMode(false, false, true)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.off)
        monitorRight = false
        stepOnD()
    }
}
function runWelcome () {
    notLegos.setVolume(notLegos.mp3type.music, 100)
    basic.pause(20)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.parade)
    fogLow = true
    fogHigh = true
    fogBlow = true
    notLegos.mp3musicPlay(notLegos.musicGenre.intro)
    basic.pause(notLegos.mp3durationMusic() * 1000)
    notLegos.sayMotor(notLegos.motors.swing, notLegos.motorState.mid)
    basic.pause(1000)
    notLegos.sayMotor(notLegos.motors.wheel, notLegos.motorState.max)
    basic.pause(1000)
    notLegos.sayMotor(notLegos.motors.swing, notLegos.motorState.off)
    basic.pause(500)
    notLegos.sayMotor(notLegos.motors.wheel, notLegos.motorState.off)
    notLegos.mp3voicePlay(notLegos.voiceSaying.welcome)
    basic.pause(400)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.glow)
    basic.pause(2000)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.off)
    notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.active)
    notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.active)
    basic.pause(3500)
    notLegos.mp3voicePlay(notLegos.voiceSaying.intro)
    notLegos.sayIndicate(notLegos.side.left, notLegos.hues.yellow)
    notLegos.sayIndicate(notLegos.side.right, notLegos.hues.cyan)
    notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.off)
    notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.off)
    fogHigh = false
    fogBlow = false
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(3500)
    notLegos.sayLights(notLegos.vfxRegion.BrickDragon, notLegos.vfxEffect.indicateL)
    basic.pause(1400)
    notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.indicateR)
    notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.indicateR)
    notLegos.sayMotor(notLegos.motors.door, notLegos.motorState.max)
    notLegos.setVolume(notLegos.mp3type.music, 85)
    basic.pause(3000)
    notLegos.sayLights(notLegos.vfxRegion.KongBack, notLegos.vfxEffect.idle)
    notLegos.sayLights(notLegos.vfxRegion.Sock, notLegos.vfxEffect.idle)
    basic.pause(500)
    notLegos.sayLights(notLegos.vfxRegion.Swing, notLegos.vfxEffect.idle)
    basic.pause(500)
    notLegos.sayLights(notLegos.vfxRegion.WheelOuter, notLegos.vfxEffect.idle)
    basic.pause(500)
    notLegos.mp3musicPlay(notLegos.musicGenre.awaiting)
    castleMode = "awaiting"
}
function buttonPress (button: string) {
    notLegos.printLine("button: " + button, 6)
    if (button == "e") {
        runWelcome()
    } else if (button == "d") {
        runTutorial()
    } else {
        runGame()
    }
}
function won () {
    notLegos.mp3musicPlay(notLegos.musicGenre.won)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.parade)
}
function setRadio (key: string, channel: number) {
    btToken = "" + key.substr(0, 2) + "$"
    radio.setGroup(channel)
}
function runTutorial () {
    pins.digitalWritePin(DigitalPin.P5, 0)
    fogLow = true
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.off)
    basic.pause(5)
    notLegos.setVolume(notLegos.mp3type.music, 70)
    notLegos.sayLights(notLegos.vfxRegion.WheelOuter, notLegos.vfxEffect.active)
    notLegos.sayIndicate(notLegos.side.left, notLegos.hues.cyan)
    basic.pause(20)
    notLegos.mp3musicPlay(notLegos.musicGenre.tutorial)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto1)
    basic.pause(3700)
    notLegos.sayLights(notLegos.vfxRegion.SpotA, notLegos.vfxEffect.indicateL)
    basic.pause(2450)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto2)
    basic.pause(700)
    notLegos.sayLights(notLegos.vfxRegion.SpotA, notLegos.vfxEffect.active)
    notLegos.sayIndicate(notLegos.side.left, notLegos.hues.orange)
    notLegos.sayIndicate(notLegos.side.right, notLegos.hues.lime)
    basic.pause(1500)
    notLegos.sayLights(notLegos.vfxRegion.SpotB, notLegos.vfxEffect.indicateL)
    notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.indicateR)
    basic.pause(2300)
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(800)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto3)
    basic.pause(7600)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto4)
    basic.pause(6300)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto5)
    basic.pause(13200)
    notLegos.mp3voicePlay(notLegos.voiceSaying.howto6)
    basic.pause(7000)
    notLegos.setVolume(notLegos.mp3type.music, 80)
    basic.pause(20)
    notLegos.mp3musicPlay(notLegos.musicGenre.awaiting)
    castleMode = "awaiting"
}
function sayReset () {
    radioSay("RESET", 1)
}
function generateMinefields () {
    masterAvoidList2 = "CEH_CEI_CFH_CFI_BDH_BDI_BGH_BGI".split("_")
    listOut2 = ["temp"]
    while (masterAvoidList2.length > 0) {
        thisItem = masterAvoidList2._pickRandom()
        listOut2.push(thisItem)
        masterAvoidList2.removeAt(masterAvoidList2.indexOf(thisItem))
    }
    listOut2.shift()
    return listOut2
}
function stepOnE () {
    if (isMine(theLevel, "E")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.explosion)
        notLegos.mp3sayPlay(notLegos.playerSaying.ouch)
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.shark, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.shark, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.off)
        if (hitMineE) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineE = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.left, notLegos.hues.orange)
        notLegos.sayIndicate(notLegos.side.right, notLegos.hues.pink)
        notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.indicateL)
        notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.indicateR)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorCenter || monitorLeft)) {
            sayMode(true, true, false)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.off)
        if (monitorCenter) {
            notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.off)
            monitorCenter = false
            stepOnD()
        } else {
            notLegos.sayLights(notLegos.vfxRegion.SpotD, notLegos.vfxEffect.off)
            monitorLeft = false
            stepOnG()
        }
    }
}
function nextLevel () {
    if (theLevel < 7) {
        theLevel = theLevel + 1
        minesHit = 0
        hitMineB = false
        hitMineC = false
        hitMineD = false
        hitMineE = false
        hitMineF = false
        hitMineG = false
        hitMineH = false
        hitMineI = false
        notLegos.printLine(mineList[theLevel], 5)
        stepOnA()
    } else {
        won()
    }
}
function stepOnG () {
    if (isMine(theLevel, "G")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.ghost)
        notLegos.mp3sayPlay(notLegos.playerSaying.nay)
        notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.ghost, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.ghost, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.off)
        if (hitMineG) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineG = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.right, notLegos.hues.green)
        notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.indicateR)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorRight)) {
            sayMode(false, false, true)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotG, notLegos.vfxEffect.off)
        monitorRight = false
    }
    magicianSays(false)
}
function stepOnC () {
    if (isMine(theLevel, "C")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.splash)
        notLegos.mp3sayPlay(notLegos.playerSaying.ouch)
        notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.shark, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.shark, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.off)
        if (hitMineC) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineC = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.right, notLegos.hues.cyan)
        notLegos.sayLights(notLegos.vfxRegion.SpotE, notLegos.vfxEffect.indicateR)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorLeft)) {
            sayMode(true, false, false)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotC, notLegos.vfxEffect.off)
        monitorLeft = false
        stepOnE()
    }
}
function sayMode (left: boolean, center: boolean, right: boolean) {
    if (left) {
        laserMode = "l"
    } else {
        laserMode = ""
    }
    if (center) {
        laserMode = "" + laserMode + "c"
    }
    if (right) {
        laserMode = "" + laserMode + "r"
    }
    radioSay("D" + laserMode, 1)
}
function stepOnF () {
    if (isMine(theLevel, "F")) {
        notLegos.mp3sfxPlay(notLegos.sfxType.slash)
        notLegos.mp3sayPlay(notLegos.playerSaying.ouch)
        notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.mine)
        notLegos.sayMotor(notLegos.motors.shell, notLegos.motorState.max)
        basic.pause(1000)
        notLegos.sayMotor(notLegos.motors.shell, notLegos.motorState.min)
        notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.off)
        if (hitMineF) {
            digits.showPrettyNumber(-100)
            theScore = theScore - 100
        } else {
            hitMineF = true
            digits.showPrettyNumber(-10)
            theScore = theScore - 10
        }
        basic.pause(1000)
        if (theScore > 0) {
            digits.showPrettyNumber(theScore)
            minesHit = minesHit + 1
            stepOnA()
        } else {
            digits.showPrettyNumber(0)
            lost()
        }
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.active)
        notLegos.sayIndicate(notLegos.side.left, notLegos.hues.cyan)
        notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.indicateL)
        basic.pause(1200)
        castleMode = "monitoring"
        while (!(monitorLeft)) {
            sayMode(true, false, false)
            basic.pause(10)
        }
        notLegos.mp3sayPlay(notLegos.playerSaying.yay)
        castleMode = "tripped"
        notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.off)
        monitorLeft = false
    }
    magicianSays(true)
}
function magicianSays (startLeft: boolean) {
    notLegos.sayIndicate(notLegos.side.left, notLegos.hues.cyan)
    notLegos.sayIndicate(notLegos.side.right, notLegos.hues.green)
    if (startLeft) {
        notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.active)
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.active)
    }
    mineLeft = isMine(theLevel, "H")
    if (mineLeft) {
        if (theLevel <= 1) {
            if (minesHit <= 1) {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.medium)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.easy)
            }
        } else if (theLevel <= 3) {
            if (minesHit <= 1) {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.hard)
            } else if (minesHit <= 2) {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.medium)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.easy)
            }
        } else {
            if (minesHit <= 2) {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.hard)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.left, notLegos.magicianDifficulty.medium)
            }
        }
    } else {
        if (theLevel <= 1) {
            if (minesHit <= 1) {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.medium)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.easy)
            }
        } else if (theLevel <= 3) {
            if (minesHit <= 1) {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.hard)
            } else if (minesHit <= 2) {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.medium)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.easy)
            }
        } else {
            if (minesHit <= 2) {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.hard)
            } else {
                notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.medium)
            }
        }
    }
    basic.pause(notLegos.mp3durationSfxVoice() * 1000)
    if (startLeft) {
        notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.indicateR)
        theGuess = "left"
    } else {
        notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.indicateL)
        theGuess = "right"
    }
    castleMode = "monitoring"
    basic.pause(1200)
    while (lastHunt == 0) {
        sayMode(false, true, false)
        if (monitorCenter) {
            if (theGuess == "left") {
                theGuess = "right"
                notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.active)
                notLegos.sayIndicate(notLegos.side.left, notLegos.hues.cyan)
                notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.indicateL)
            } else {
                theGuess = "left"
                notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.active)
                notLegos.sayIndicate(notLegos.side.right, notLegos.hues.green)
                notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.indicateR)
            }
            notLegos.mp3sayPlay(notLegos.playerSaying.yay)
            basic.pause(1200)
            monitorCenter = false
        } else if (lastGesture != 0) {
            notLegos.mp3magicianAgain()
        }
        basic.pause(20)
        sayMode(false, true, false)
    }
    castleMode = "tripped"
    if (theGuess == "left") {
        if (mineLeft) {
            notLegos.mp3sfxPlay(notLegos.sfxType.correct)
            notLegos.mp3sayPlay(notLegos.playerSaying.success)
            notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.off)
            basic.pause(1000)
            notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.off)
            nextLevel()
        } else {
            notLegos.mp3sfxPlay(notLegos.sfxType.incorrect)
            notLegos.mp3sayPlay(notLegos.playerSaying.failure)
            notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.off)
            notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.mine)
            if (hitMineH) {
                digits.showPrettyNumber(-100)
                theScore = theScore - 100
            } else {
                hitMineH = true
                digits.showPrettyNumber(-10)
                theScore = theScore - 10
            }
            basic.pause(1000)
            if (theScore > 0) {
                digits.showPrettyNumber(theScore)
                minesHit = minesHit + 1
                stepOnA()
            } else {
                digits.showPrettyNumber(0)
                lost()
            }
        }
    } else if (theGuess == "right") {
        if (!(mineLeft)) {
            notLegos.mp3sfxPlay(notLegos.sfxType.correct)
            notLegos.mp3sayPlay(notLegos.playerSaying.success)
            notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.off)
            basic.pause(1000)
            notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.off)
            nextLevel()
        } else {
            notLegos.mp3sfxPlay(notLegos.sfxType.incorrect)
            notLegos.mp3sayPlay(notLegos.playerSaying.failure)
            notLegos.sayLights(notLegos.vfxRegion.SpotH, notLegos.vfxEffect.off)
            notLegos.sayLights(notLegos.vfxRegion.SpotI, notLegos.vfxEffect.mine)
            if (hitMineI) {
                digits.showPrettyNumber(-100)
                theScore = theScore - 100
            } else {
                hitMineI = true
                digits.showPrettyNumber(-10)
                theScore = theScore - 10
            }
            basic.pause(1000)
            if (theScore > 0) {
                digits.showPrettyNumber(theScore)
                minesHit = minesHit + 1
                stepOnA()
            } else {
                digits.showPrettyNumber(0)
                lost()
            }
        }
    }
}
function postScore () {
    if (theLevel == 0) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score1, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score1, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score1, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score1, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score1, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 1) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score2, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score2, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score2, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score2, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score2, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 2) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score3, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score3, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score3, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score3, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score3, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 3) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score4, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score4, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score4, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score4, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score4, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 4) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score5, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score5, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score5, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score5, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score5, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 5) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score6, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score6, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score6, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score6, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score6, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 6) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score7, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score7, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score7, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score7, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score7, notLegos.vfxEffect.mine)
            lost()
        }
    } else if (theLevel == 7) {
        if (minesHit == 0) {
            notLegos.sayLights(notLegos.vfxRegion.Score8, notLegos.vfxEffect.green)
        } else if (minesHit == 1) {
            notLegos.sayLights(notLegos.vfxRegion.Score8, notLegos.vfxEffect.yellow)
        } else if (minesHit == 2) {
            notLegos.sayLights(notLegos.vfxRegion.Score8, notLegos.vfxEffect.orange)
        } else if (minesHit == 3) {
            notLegos.sayLights(notLegos.vfxRegion.Score8, notLegos.vfxEffect.red)
        } else {
            notLegos.sayLights(notLegos.vfxRegion.Score8, notLegos.vfxEffect.mine)
            lost()
        }
    }
}
function ready_oled () {
    if (isCastleSay) {
        notLegos.printLine("W" + Math.constrain(lastWater, 0, 99) + " Fog: " + fogToggle, 1)
        notLegos.printLine("D" + lastSonarRead + " H" + Math.round(lastHue / 1) + " G" + lastGesture + " N" + lastHunt, 2)
        notLegos.printLine("Mode: " + castleMode, 4)
        for (let index = 0; index < 0; index++) {
            notLegos.printLine(" V" + notLegos.mp3durationMusic(), 3)
            notLegos.printLine("M:" + notLegos.mp3durationMusic(), 5)
        }
        for (let index = 0; index < 1; index++) {
            monitors = ""
            if (monitorLeft) {
                monitors = "" + monitors + "LEFT"
            }
            if (monitorCenter) {
                monitors = "" + monitors + " CENTER"
            }
            if (monitorRight) {
                monitors = "" + monitors + " RIGHT"
            }
            notLegos.printLine(monitors, 3)
        }
    } else {
        notLegos.printLine("M: " + castleMode + "" + "", 1)
        notLegos.printLine("R" + Math.constrain(lastLaserR, 0, 9) + " C" + Math.constrain(lastLaserC, 0, 9) + " L" + Math.constrain(lastLaserL, 0, 9), 2)
        for (let index = 0; index < 1; index++) {
            monitors = ""
            if (monitorLeft) {
                monitors = "" + monitors + "LEFT"
            }
            if (monitorCenter) {
                monitors = "" + monitors + " CENTER"
            }
            if (monitorRight) {
                monitors = "" + monitors + " RIGHT"
            }
            notLegos.printLine(monitors, 6)
        }
    }
}
radio.onReceivedValue(function (name, value) {
    if (name.substr(0, btToken.length) == btToken) {
        theName = name.substr(btToken.length, name.length - btToken.length)
        if (isCastleSay) {
            if (theName == "READY") {
                monitorLeft = false
                monitorCenter = false
                monitorRight = false
                castleMode = "ready"
                notLegos.setVolume(notLegos.mp3type.music, 60)
                basic.pause(500)
                notLegos.mp3musicPlay(notLegos.musicGenre.awaiting)
                notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.idle)
                basic.pause(20)
                for (let index = 0; index < 0; index++) {
                    notLegos.sayLights(notLegos.vfxRegion.KongFront, notLegos.vfxEffect.mine)
                    while (lastHunt == 0) {
                        basic.pause(100)
                    }
                    runWelcome()
                }
                for (let index = 0; index < 0; index++) {
                    runTutorial()
                }
                castleMode = "awaiting"
            } else if (theName == "BREAK") {
                if (value == 1) {
                    monitorLeft = true
                } else if (value == 2) {
                    monitorCenter = true
                } else if (value == 3) {
                    monitorRight = true
                }
            } else if (theName == "check") {
            	
            }
        } else {
            if (theName == "RESET") {
                resetCastleDo()
                radioSay("READY", 1)
            } else if (theName.charAt(0) == "L") {
                lightRef = parseFloat(theName.substr(1, theName.length - 1))
                notLegos.printLine("light: " + lightRef, 4)
                notLegos.setEffectShim(lightRef, value)
            } else if (theName.charAt(0) == "M") {
                motorRef = parseFloat(theName.substr(1, theName.length - 1))
                notLegos.printLine("motor: " + motorRef, 5)
                notLegos.motorSetShim(motorRef, value)
            } else if (theName.charAt(0) == "I") {
                sideRef = parseFloat(theName.substr(1, theName.length - 1))
                if (sideRef == 0) {
                    notLegos.setIndicateLShim(value)
                } else {
                    notLegos.setIndicateRShim(value)
                }
            } else if (theName.charAt(0) == "D") {
                laserRef = theName.substr(1, theName.length - 1)
                if (laserRef.includes("l")) {
                    monitorLeft = true
                } else {
                    monitorLeft = false
                }
                if (laserRef.includes("c")) {
                    monitorCenter = true
                } else {
                    monitorCenter = false
                }
                if (laserRef.includes("r")) {
                    monitorRight = true
                } else {
                    monitorRight = false
                }
            } else if (theName == "welco") {
            	
            }
        }
        notLegos.printLine("heard: " + theName + "=" + value, 6)
    }
})
function isMine (level: number, space: string) {
    theMines = mineList[level]
    return theMines.indexOf(space) >= 0
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (isCastleSay) {
        notLegos.mp3sayPlay(notLegos.playerSaying.ready)
        notLegos.mp3magician(notLegos.magicianSaysSide.right, notLegos.magicianDifficulty.hard)
        notLegos.mp3magicianAgain()
    }
})
function resetCastleDo () {
    notLegos.setEffect(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.off)
    notLegos.motorSet(notLegos.motors.wheel, notLegos.motorState.off)
    notLegos.motorSet(notLegos.motors.swing, notLegos.motorState.off)
    notLegos.motorSet(notLegos.motors.shark, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.ghost, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.cannon, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.oarrack, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.shell, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.door, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.dragon, notLegos.motorState.min)
    notLegos.motorSet(notLegos.motors.redrack, notLegos.motorState.min)
    monitorLeft = false
    monitorCenter = false
    monitorRight = false
}
function runGame () {
    castleMode = "play"
    theScore = 1000
    theLevel = 0
    notLegos.sayMotor(notLegos.motors.door, notLegos.motorState.max)
    mineList = generateMinefields()
    fogLow = false
    fogHigh = true
    pins.digitalWritePin(DigitalPin.P5, 1)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.off)
    minesHit = 0
    hitMineB = false
    hitMineC = false
    hitMineD = false
    hitMineE = false
    hitMineF = false
    hitMineG = false
    hitMineH = false
    hitMineI = false
    digits.showPrettyNumber(theScore)
    notLegos.printLine(mineList[theLevel], 5)
    stepOnA()
}
function lost () {
    notLegos.mp3musicPlay(notLegos.musicGenre.lost)
    notLegos.sayLights(notLegos.vfxRegion.CastleAll, notLegos.vfxEffect.mine)
}
let buttonRow = 0
let iTook = 0
let lastVolumeRead = 0
let prevLaserR = 0
let prevLaserL = 0
let prevLaserC = 0
let theMines = ""
let laserRef = ""
let sideRef = 0
let motorRef = 0
let lightRef = 0
let theName = ""
let monitors = ""
let lastWater = 0
let theGuess = ""
let mineLeft = false
let laserMode = ""
let mineList: string[] = []
let hitMineI = false
let hitMineH = false
let hitMineG = false
let hitMineF = false
let hitMineC = false
let hitMineE = false
let thisItem = ""
let listOut2: string[] = []
let masterAvoidList2: string[] = []
let hitMineB = false
let monitorLeft = false
let btToken = ""
let monitorRight = false
let monitorCenter = false
let minesHit = 0
let theScore = 0
let hitMineD = false
let theLevel = 0
let castleMode = ""
let digits: notLegos.TM1637LEDs = null
let isCastleSay = false
let fogBlow = false
let fogHigh = false
let fogLow = false
let fogToggle = false
let lastHunt = 0
let lastLaserC = 0
let lastLaserL = 0
let lastLaserR = 0
let lastHue = 0
let lastGesture = 0
let lastSonarRead = 0
let fogLevel = 0
lastSonarRead = 0
lastGesture = 0
lastHue = 0
lastLaserR = 0
lastLaserL = 0
lastLaserC = 0
lastHunt = 0
fogToggle = false
fogLow = false
fogHigh = false
fogBlow = false
pins.setAudioPinEnabled(false)
led.enable(false)
setRadio("KC", 171)
isCastleSay = notLegos.SonarFirstRead(DigitalPin.P8, DigitalPin.P9) > 0
notLegos.oledinit()
if (isCastleSay) {
    notLegos.potSet(AnalogPin.P10)
    digits = notLegos.tm1637Create(DigitalPin.P7, DigitalPin.P6)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    notLegos.mp3setPorts(notLegos.mp3type.music, SerialPin.P14)
    notLegos.mp3setPorts(notLegos.mp3type.sfxvoice, SerialPin.P15)
    notLegos.mp3setPorts(notLegos.mp3type.player, SerialPin.P16)
    basic.pause(20)
    notLegos.setVolume(notLegos.mp3type.sfxvoice, 100)
    notLegos.setVolume(notLegos.mp3type.player, 100)
    notLegos.setVolume(notLegos.mp3type.music, 100)
} else {
    notLegos.castleLights()
    resetCastleDo()
}
let iBegan = input.runningTimeMicros()
let isReady = true
castleMode = "init"
loops.everyInterval(10, function () {
    if (!(isCastleSay)) {
        prevLaserC = lastLaserC
        prevLaserL = lastLaserL
        prevLaserR = lastLaserR
        lastLaserC = pins.analogReadPin(AnalogReadWritePin.P2)
        lastLaserL = pins.analogReadPin(AnalogReadWritePin.P0)
        lastLaserR = pins.analogReadPin(AnalogReadWritePin.P1)
        if (monitorLeft && lastLaserL + prevLaserL <= 8) {
            radioSay("BREAK", 1)
            monitorLeft = false
            monitorCenter = false
            monitorRight = false
        } else if (monitorCenter && lastLaserC + prevLaserC <= 8) {
            radioSay("BREAK", 2)
            monitorLeft = false
            monitorCenter = false
            monitorRight = false
        } else if (monitorRight && lastLaserR + prevLaserR <= 8) {
            radioSay("BREAK", 3)
            monitorLeft = false
            monitorCenter = false
            monitorRight = false
        }
    }
})
loops.everyInterval(500, function () {
    if (isCastleSay) {
        lastWater = Math.round(pins.analogReadPin(AnalogReadWritePin.P2) / 30 - 0)
        lastVolumeRead = pins.analogReadPin(AnalogReadWritePin.P10)
        fogToggle = pins.analogReadPin(AnalogReadWritePin.P0) < 1000
        notLegos.printLine("//Castle Say//" + iTook, 0)
        notLegos.updateVolumeGlobal()
        if (castleMode == "init") {
            sayReset()
        }
        if (fogToggle) {
            if (fogLow) {
                pins.digitalWritePin(DigitalPin.P12, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P12, 1)
            }
            if (fogHigh) {
                pins.digitalWritePin(DigitalPin.P11, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P11, 1)
            }
        } else {
            pins.digitalWritePin(DigitalPin.P11, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
        }
        if (fogBlow) {
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P13, 1)
        }
    } else {
        notLegos.printLine("//Castle Do// " + iTook, 0)
    }
})
loops.everyInterval(500, function () {
    if (castleMode == "goplay") {
        runGame()
        for (let index = 0; index < 0; index++) {
            runWelcome()
            notLegos.mp3sfxPlay(notLegos.sfxType.slash)
            notLegos.sayMotor(notLegos.motors.shell, notLegos.motorState.max)
            notLegos.sayLights(notLegos.vfxRegion.SpotF, notLegos.vfxEffect.mine)
            notLegos.sayLights(notLegos.vfxRegion.BrickShell, notLegos.vfxEffect.mine)
        }
    } else if (castleMode == "gotutorial") {
        castleMode = "tutorial"
        runTutorial()
    }
})
loops.everyInterval(40, function () {
    iBegan = input.runningTime()
    if (isCastleSay) {
        buttonRow = pins.analogReadPin(AnalogReadWritePin.P4)
        if (buttonRow < 10) {
            buttonPress("a")
        } else if (buttonRow < 60) {
            buttonPress("b")
        } else if (buttonRow < 110) {
            buttonPress("c")
        } else if (buttonRow < 200) {
            buttonPress("d")
        } else if (buttonRow < 700) {
            buttonPress("e")
        }
        lastHunt = pins.digitalReadPin(DigitalPin.P3)
        lastHue = Connected.readColor()
        lastGesture = Connected.getGesture()
        if (castleMode == "awaiting" && lastHue > 205) {
            castleMode = "goplay"
        } else if (castleMode == "awaiting" && lastGesture != 0) {
            castleMode = "gotutorial"
        }
        lastSonarRead = notLegos.SonarNextRead()
    } else {
        notLegos.castleSayTick()
    }
    ready_oled()
    notLegos.changeThree()
    iTook = input.runningTime() - iBegan
})
