const cal_date = (d) => {
    return d.s + d.m * 60 + d.h * 1440;
};

const min_date = (date1, date2, date3) => {
    let list = [
                {date: date1, val: cal_date(date1)},
                {date: date2, val: cal_date(date2)},
                {date: date3, val: cal_date(date3)}
                ];
    list.sort((a, b) => a.val - b.val);
    return list[0].date;
};

let min = min_date({h: 1, m: 10, s: 34}, {h: 2, m: 50, s: 14}, {h: 1, m: 45, s: 54})
console.log("La data minore è:\t", min);