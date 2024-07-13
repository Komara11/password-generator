let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

function generatePassword(len){
    const lowerAlphaBet = 'qwertyuiopasdfghjklzxcvbnm'
    const upperAlphaBet = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const num = '0123456789'
    const symbol = '!@#$%^&*()_+=[]|\:;"<>,./~'

    const data = lowerAlphaBet + upperAlphaBet + num + symbol

    let generator = '';
    for(let i = 0; i<len; i++){
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}
function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}
function savePassword(){
    let save = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${save}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
}
