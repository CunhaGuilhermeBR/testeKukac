const axios = require('axios')
var functions = {
    validateCep: function(cep) {
        var valid_cep_regex = /^[0-9]{8,}$/;

        cep = trim(cep)
        return valid_cep_regex.test(cep)
    },
    showData: async function(cep1, cep2, cep3, cep4, cep5, res) {
        let ceps = []
        api = await returnJson(cep1)
        ceps.push(getData(api))

        api = await returnJson(cep2)
        ceps.push(getData(api))

        api = await returnJson(cep3)
        ceps.push(getData(api))

        api = await returnJson(cep4)
        ceps.push(getData(api))

        api = await returnJson(cep5)
        ceps.push(getData(api))

        res.render('showDataCEP', {
            publicPlace1: ceps[0].publicPlace,
            complement1: ceps[0].complement,
            district1: ceps[0].district,
            city1: ceps[0].city,
            state1: ceps[0].state,

            publicPlace2: ceps[1].publicPlace,
            complement2: ceps[1].complement,
            district2: ceps[1].district,
            city2: ceps[1].city,
            state2: ceps[1].state,

            publicPlace3: ceps[2].publicPlace,
            complement3: ceps[2].complement,
            district3: ceps[2].district,
            city3: ceps[2].city,
            state3: ceps[2].state,

            publicPlace4: ceps[3].publicPlace,
            complement4: ceps[3].complement,
            district4: ceps[3].district,
            city4: ceps[3].city,
            state4: ceps[3].state,

            publicPlace5: ceps[4].publicPlace,
            complement5: ceps[4].complement,
            district5: ceps[4].district,
            city5: ceps[4].city,
            state5: ceps[4].state,
        })
    }
}

async function returnJson(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response
    } catch {
        console.log('Error', error.message)
        return null
    }
}

function getData(api) {
    let cep = new Object();
    if (api == null) {
        const error_message = 'Informacao nao disponivel no momento'
        cep.cep = cep;
        cep.publicPlace = error_message;
        cep.complement = error_message;
        cep.district = error_message;
        cep.city = error_message;
        cep.state = error_message;
    } else {
        cep.cep = cep;
        cep.publicPlace = api.data.logradouro;
        cep.complement = api.data.complemento;
        cep.district = api.data.bairro;
        cep.city = api.data.localidade;
        cep.state = api.data.uf;
    }
    return cep;
}

function trim(str) {
    return str.replace(/^s+|s+$/g, '');
}

module.exports = functions