const test = require('tape')
const appCep = require('./methods/cepActions')
const appBills = require('./methods/quantBillsActions')
const appPalindromes = require('./methods/palindromeActions')

console.log('TESTES!')

//Test 1
test('Validacao CEP', (t) => {
    t.assert(appCep.validateCep('30855100') === true, "Validacao correta do teste 1!")
    t.end()
})

//Test 2
test('Validacao CEP numero errado', (t) => {
    t.assert(appCep.validateCep('12345') === false, "Validacao correta do teste 2!")
    t.end()
})

//Test 3
test('Validacao CEP nao e um numero', (t) => {
    t.assert(appCep.validateCep('cep') === false, "Validacao correta do teste 3!")
    t.end()
})

//Test 4
test('Validacao CEP nao e um numero, 8 digitos', (t) => {
    t.assert(appCep.validateCep('cepcepce') === false, "Validacao correta do teste 4!")
    t.end()
})

//Test 5
test('Validacao valor correto', (t) => {
    console.log(appBills.validateMoney(100.50))
    t.assert(appBills.validateMoney('100.50') === true, "Validacao correta do teste 5!")
    t.end()
})

//Test 6
test('Validacao nao e numero', (t) => {
    t.assert(appBills.validateMoney('dinheiro') === false, "Validacao correta do teste 6!")
    t.end()
})

//Test 7
test('Validacao numero formato incorreto', (t) => {
    t.assert(appBills.validateMoney('100,520') === false, "Validacao correta do teste 7!")
    t.end()
})


//Test 8
test('Validacao troco', (t) => {
    let bills = (appBills.getQuantBills(100.50))
    let correctBills = [1, 0, 1, 0.5]
    t.assert(bills == correctBills, "Validacao correta do teste 8!")
    t.end()
})

//Test 9
test('Validacao troco', (t) => {
    let bills = (appBills.getQuantBills(10.00))
    let correctBills = [0, 1, 0, 0]
    t.assert(bills == correctBills, "Validacao correta do teste 9!")
    t.end()
})

//Test 10
test('Validacao palindromo 11', (t) => {
    console.log(appPalindromes.getPalindromes(11))
    t.assert(appPalindromes.getPalindromes(11) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "Validacao correta do teste 10!")
    t.end()
})

//Test 11
test('Validacao palindromo nao e um numero', (t) => {
    console.log(appPalindromes.getPalindromes('palindromo'))
    t.assert(appPalindromes.getPalindromes('palindromo') === [], "Validacao correta do teste 11!")
    t.end()
})