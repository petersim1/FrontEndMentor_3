const colorPallete = {
    Theme1:{
        mainBG:'hsl(222, 26%, 31%)',
        navbar:'white',
        toggle:'white',
        toggleBG:'hsl(223, 31%, 20%)',
        screen:'white',
        screenBG:'hsl(224, 36%, 15%)',
        keyBG:'hsl(223, 31%, 20%)',
        nKey:'black',
        nKeyBG:'hsl(30, 25%, 89%)',
        nKeyShadow:'hsl(28, 16%, 65%)',
        tKey:'white',
        tKeyBG:'hsl(225, 21%, 49%)',
        tKeyShadow:'hsl(224, 28%, 35%)',
        eKey:'black',
        eKeyBG:'hsl(6, 63%, 50%)',
        eKeyShadow:'hsl(6, 70%, 34%)'
    },
    Theme2:{
        mainBG:'hsl(0, 0%, 90%)',
        navbar:'hsl(60, 10%, 19%)',
        toggle:'hsl(60, 10%, 19%)',
        toggleBG:'hsl(0, 5%, 81%)',
        screen:'hsl(60, 10%, 19%)',
        screenBG:'hsl(0, 0%, 93%)',
        keyBG:'hsl(0, 5%, 81%)',
        nKey:'hsl(60, 10%, 19%)',
        nKeyBG:'hsl(45, 7%, 89%)',
        nKeyShadow:'hsl(35, 11%, 61%)',
        tKey:'white',
        tKeyBG:'hsl(185, 42%, 37%)',
        tKeyShadow:'hsl(185, 58%, 25%)',
        eKey:'white',
        eKeyBG:'hsl(25, 98%, 40%)',
        eKeyShadow:'hsl(25, 99%, 27%)'
    },
    Theme3:{
        mainBG:'hsl(268, 75%, 9%)',
        navbar:'hsl(52, 100%, 62%)',
        toggle:'hsl(52, 100%, 62%)',
        toggleBG:'hsl(268, 71%, 12%)',
        screen:'hsl(52, 100%, 62%)',
        screenBG:'hsl(268, 71%, 12%)',
        keyBG:'hsl(268, 71%, 12%)',
        nKey:'hsl(52, 100%, 62%)',
        nKeyBG:'hsl(268, 47%, 21%)',
        nKeyShadow:'hsl(290, 70%, 36%)',
        tKey:'white',
        tKeyBG:'hsl(281, 89%, 26%)',
        tKeyShadow:'hsl(285, 91%, 52%)',
        eKey:'black',
        eKeyBG:'hsl(176, 100%, 44%)',
        eKeyShadow:'hsl(177, 92%, 70%)'
    },
}


var num1 = ''
var num2 = ''
var sign = ''


var theme = 'Theme1'

$('button').click(clickFct)

function clickFct() {
    let string = this.innerHTML
    


    if (!isNaN(Number(string)) || string == '.') {
        if (sign.length == 0) {
            num1 += string
            $('#answer').text(num1.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }
        else {
            num2 += string
            $('#answer').text(num2.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }
    }
    else if (string == '=') {
        if (num1.length > 0 & num2.length > 0) {
            console.log(num1,num2)
            equals(maths(num1,num2,sign))
        }
        else {
            if (num1.length > 0) {
                equals(num1)
            }
            else {
                equals(0)
            }
        }
    }
    else if (string == 'RESET') {
        resetScreen()
    }
    else if (string == 'DEL') {
        if (num2.length > 0) {
            num2 = ''
        }
        else {
            num1 = ''
        }
    }
    else {
        sign = string
    }
}

function maths(n1,n2,sign) {
    n1 = Number(n1)
    n2 = Number(n2)
    if (sign == '+') {
        return n1 + n2
    }
    else if (sign == '-') {
        return n1 - n2
    }
    else if (sign == 'x') {
        return n1*n2
    }
    else {
        return n1/n2
    }
}

function equals(result) {
    $('#answer').text(result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    num1 = String(result)
    num2 = ''
    sign = ''
}

function resetScreen() {
    $('#answer').text('')
    num1 = ''
    num2 = ''
    string = ''
}


$('#ball').click(ballToggle)

function ballToggle() {
    let pos = $('#ball').css('left')
    if (theme == 'Theme1') {
        $('#ball').css('left','33%')
        theme = 'Theme2'
    }
    else if (theme =='Theme2') {
        $('#ball').css('left','66%')
        theme = 'Theme3'
    }
    else {
        $('#ball').css('left','0%')
        theme = 'Theme1'
    }
    themeToggle(theme)
}

function themeToggle(curTheme) {

    palleteUse = colorPallete[curTheme]

    $('body').css('background-color',palleteUse['mainBG'])
    $('span').css('color',palleteUse['toggle'])
    $('.navbar-brand').css('color',palleteUse['navbar'])
    $('.toggle').css('background-color',palleteUse['toggleBG'])
    $('#screen').css('color',palleteUse['screen'])
    $('#screen').css('background-color',palleteUse['screenBG'])
    $('#keyboard').css('background-color',palleteUse['keyBG'])
    $('.number').css('color',palleteUse['nKey'])
    $('.number').css('background-color',palleteUse['nKeyBG'])
    $('.number').css('border-bottom-color',palleteUse['nKeyShadow'])
    $('.text').css('color',palleteUse['tKey'])
    $('.text').css('background-color',palleteUse['tKeyBG'])
    $('.text').css('border-bottom-color',palleteUse['tKeyShadow'])
    $('.equals').css('color',palleteUse['eKey'])
    $('.equals').css('background-color',palleteUse['eKeyBG'])
    $('.equals').css('border-bottom-color',palleteUse['eKeyShadow'])
}