const express = require('express')
const router = express.Router()
const alert = require('alert')
const actions = require('../methods/actions')
const palindromeActions = require('../methods/palindromeActions')
const quantBillsActions = require('../methods/quantBillsActions')



router.get('/', (req, res) => { res.render('menu') })

router.get('/cep', (req, res) => { res.render('getDataCEP') })

router.post('/calculate', (req, res) => {
    if (actions.validateCep(req.body.cep1) && actions.validateCep(req.body.cep2) && actions.validateCep(req.body.cep3) && actions.validateCep(req.body.cep4) && actions.validateCep(req.body.cep5)) {
        ceps = actions.showData(req.body.cep1, req.body.cep2, req.body.cep3, req.body.cep4, req.body.cep5, res)

    } else {
        res.redirect('/cep')
    }
})

router.get('/palindromes', (req, res) => { res.render('palindromes') })

router.post('/calculatePalindromes', (req, res) => {
    palindromes = palindromeActions.getPalindromes(req.body.limitNumber)
    alert(palindromes)
    res.redirect('/palindromes')
})

router.get('/minimum', (req, res) => { res.render('minimum') })

router.post('/calculateMinimumBills', (req, res) => {
    if (quantBillsActions.validateMoney(req.body.quantMoney)) {
        quantBills = quantBillsActions.getQuantBills(req.body.quantMoney)
        res.render('minimum', {
            quantMoneyBills: true,
            oneHundredBills: quantBills[0],
            tenBills: quantBills[1],
            oneBills: quantBills[2],
            changeMoney: quantBills[3],
            originalValue: req.body.quantMoney
        })
    } else
        res.redirect('/minimum')
})



module.exports = router