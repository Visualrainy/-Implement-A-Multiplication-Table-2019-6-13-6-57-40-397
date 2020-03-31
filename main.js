export default function multiplyTable(start, end) {
    if(compare(start, end)) {
        return null;
    }

    let result='';

    if(checkNumberRange(start) && checkNumberRange(end)) {
        for(let right = start; right <= end; right++) {
            for(let left = start; left <= right; left++) {
                result += left + '*' + right + '=' + left*right + ' ';
            }
            result = result.trim();
            if(right !== end) {
                result += '\n';
            }
        }
    }    
    return result;
}

function compare(start, end) {
    return start > end
}

function checkNumberRange(number) {
    return number >= 1 && number <= 1000
}