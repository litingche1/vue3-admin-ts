/**
 * //校验手机号码
 * @param {*} value 
 */
export function checkPhone(value:string):Boolean {
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}
/**
 * //校验密码
 * @param {*} value 
 */

export function checkPassword(value:string):Boolean {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return reg.test(value)
}
/**
 * //校验验证码
 * @param {*} value 
 */

export function checkCode(value:string):Boolean {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
    return reg.test(value)
}