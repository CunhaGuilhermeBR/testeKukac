var functions = {
    getQuantBills: function(number) {
        let quantOneHundred = 0;
        let quantTen = 0;
        let quantOne = 0;
        let exchange = 0;

        while (number >= 100) {
            number -= 100
            quantOneHundred++
        }

        while (number >= 10) {
            number -= 10
            quantTen++
        }

        while (number >= 1) {
            number -= 1
            quantOne++
        }
        if (number > 0) {
            exchange = 1 - number
            quantOne++
            number = 0
        }

        quantBills = [quantOneHundred, quantTen, quantOne, exchange]
        return quantBills

    },
    validateMoney(number) {
        strMoney = number.toString()
        if (strMoney.match(/,/)) {
            strMoney = strMoney.split(",")
        } else if (strMoney.match(/./)) {
            strMoney = strMoney.split(".")
        } else
            return false
        if (strMoney.length != 2)
            return false
        return strMoney[1].length == 2
    }
}


module.exports = functions