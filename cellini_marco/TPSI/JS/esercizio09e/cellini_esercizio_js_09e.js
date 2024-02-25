const delta_time = (time1, time2) => {
    return {
        ms: 60000 - Math.floor(time1.ss - time2.ss) * 1000,
        s: 60 - Math.floor(time1.ss - time2.ss),
        m: (60 - Math.floor(time1.ss - time2.ss)) / 60,
        h: (60 - Math.floor(time1.ss - time2.ss)) / 360
    };
};

let diff = delta_time({ hh: 12, mm: 45, ss: 49 }, { hh: 12, mm: 46, ss: 0 });
console.log(`differenza di millisecondi:\t${diff.ms}\ndifferenza di secondi:\t${diff.s}\ndifferenza di minuti:\t${diff.m}\ndifferenza di ore:\t${diff.h}\n`);