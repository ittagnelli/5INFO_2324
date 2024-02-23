let _time1 = {
    ore: 12,
    minuti: 30,
    secondi: 40
};

let _time2 = {
    ore: 13,
    minuti: 30,
    secondi: 40
};

let _time3 = {
    ore: 13,
    minuti: 31,
    secondi: 0
};

function diff_time(time1, time2) {
    let ora_diff = time2.ore - time1.ore;
    let minuti_diff = time2.minuti - time1.minuti;
    let secondi_diff = time2.secondi - time1.secondi;

    return {
	ora_diff: ora_diff,
	minuti_diff: minuti_diff,
	secondi_diff: secondi_diff,
	ms_diff: ora_diff*60*60*1000 + minuti_diff*60*1000 + secondi_diff*1000
    }
};

(() => {
    console.log(diff_time(_time1, _time2));
    console.log(diff_time(_time3, _time2));
})();
