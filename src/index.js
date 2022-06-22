module.exports = function toReadable(number) {
    let arr = String(number).split(''),
        res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) res.push('zero');
        if (arr[i] == 1) res.push('one');
        if (arr[i] == 2) res.push('two');
        if (arr[i] == 3) res.push('three');
        if (arr[i] == 4) res.push('four');
        if (arr[i] == 5) res.push('five');
        if (arr[i] == 6) res.push('six');
        if (arr[i] == 7) res.push('seven');
        if (arr[i] == 8) res.push('eight');
        if (arr[i] == 9) res.push('nine');
    }

    if (res.length == 3) {
        res[0] += ` hundred`;
        if (res[1] == 'zero' && res[2] == 'zero') res = res.slice(0, 1);
        if (res[1] == 'zero' && res[2] != 'zero') res.splice(1, 1);
        countSecondDecade();
        countDickers();
    }

    if (res.length == 2) {
        countSecondDecade();
        countDickers();
    }


    function countSecondDecade() {
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'zero') {
            res.splice(1, 1);
            res[res.length - 1] = 'ten';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'one') {
            res.splice(1, 1);
            res[res.length - 1] = 'eleven';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'two') {
            res.splice(1, 1);
            res[res.length - 1] = 'twelve';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'three') {
            res.splice(1, 1);
            res[res.length - 1] = 'thirteen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'four') {
            res.splice(1, 1);
            res[res.length - 1] = 'fourteen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'five') {
            res.splice(1, 1);
            res[res.length - 1] = 'fifteen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'six') {
            res.splice(1, 1);
            res[res.length - 1] = 'sixteen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'seven') {
            res.splice(1, 1);
            res[res.length - 1] = 'seventeen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'eight') {
            res.splice(1, 1);
            res[res.length - 1] = 'eighteen';
        }
        if (res[res.length - 2] == 'one' && res[res.length - 1] == 'nine') {
            res.splice(1, 1);
            res[res.length - 1] = 'nineteen';
        }
    }

    function countDickers() {
        if (res[res.length - 2] == 'two') {
            res[res.length - 2] = 'twenty';
        } else if (res[res.length - 2] == 'three') {
            res[res.length - 2] = 'thirty';
        } else if (res[res.length - 2] == 'four') {
            res[res.length - 2] = 'forty';
        } else if (res[res.length - 2] == 'five') {
            res[res.length - 2] = 'fifty';
        } else if (res[res.length - 2] == 'six') {
            res[res.length - 2] = 'sixty';
        } else if (res[res.length - 2] == 'seven') {
            res[res.length - 2] = 'seventy';
        } else if (res[res.length - 2] == 'eight') {
            res[res.length - 2] = 'eighty';
        } else if (res[res.length - 2] == 'nine') {
            res[res.length - 2] = 'ninety';
        }
    }

    function delZero() {
        if (res[res.length - 1] == 'zero') {
            res.pop();
        }
    }

    if (number != 0) delZero();

    return res.join(' ');
}
