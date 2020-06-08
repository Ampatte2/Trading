
import {gql} from 'apollo-boost';

const queries = {
btc_prices : gql(`
    query btc($currency: String!, $index: Int!){
    btc_prices(limit: 100, offset:$index, where: {currency_code: {_eq: $currency}}) {
        closing_price
        currency_code
        highest_price
        lowest_price
        opening_price
        time
        volume_btc
        volume_currency
    }
}

`),
crypto_prices : gql(`
        query crypto($currency: String!, $index: Int!){
            crypto_prices(limit: 100, offset:$index, where: {currency_code: {_eq: $currency}}) {
                closing_price
                currency_code
                highest_price
                lowest_price
                opening_price
                time
                volume_btc
                volume_crypto
            }
        }
        
    `),
eth_prices:gql(`
    query eth($currency: String!, $index: Int!){
        eth_prices(limit: 100, offset:$index, where: {currency_code: {_eq: $currency}}) {
            closing_price
            currency_code
            highest_price
            lowest_price
            opening_price
            time
            volume_currency
            volume_eth
        }
    }

`)
}

export default queries