export default function multiplyTable(start, end) {
    if(compare(start, end)) {
        return null;
    }

    if(checkNumberRange(start) && checkNumberRange(end)) {
        
    }    
}

function compare(start, end) {
    return start > end
}

function checkNumberRange(number) {
    return number >= 1 && number <= 1000
}