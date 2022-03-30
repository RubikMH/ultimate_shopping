const intEn = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const intFa = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']

const convertInt = (number) => {
    let result = ''
    let arr = number.toString().split('')
    arr.map((element) => {
        for (let i = 0; i < intEn.length; i++) {
            if (element == intEn[i]) {
                result += intFa[i]
            }
        }
    })

    return result
}
export default convertInt