/**
 * Created by kevin on 17/4/12.
 */
export function deepCopy(source) {
    var result={};
    for (var key in source) {
        if(typeof source[key] === 'object') {
            if(String(source[key]) == 'null') {
                result[key] = ''
            }
            result[key] = deepCopy(source[key])
        }else {
            result[key] = source[key]
        }
    }
    return result;
}