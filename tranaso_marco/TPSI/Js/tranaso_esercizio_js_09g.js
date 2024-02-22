function minTime(tempo1, tempo2, tempo3) {
    const seconds1 = tempo1.h * 3600 + tempo1.m * 60 + tempo1.s;
    const seconds2 = tempo2.h * 3600 + tempo2.m * 60 + tempo2.s;
    const seconds3 = tempo3.h * 3600 + tempo3.m * 60 + tempo3.s;
    const minSeconds = Math.min(seconds1, seconds2, seconds3);
    const hours = Math.floor(minSeconds / 3600);
    const minutes = Math.floor((minSeconds % 3600) / 60);
    const seconds = minSeconds % 60;

    return { h: hours, m: minutes, s: seconds };
}
function main() {
    const tempo1 = { h: 10, m: 30, s: 15 };
    const tempo2 = { h: 9, m: 45, s: 30 };
    const tempo3 = { h: 11, m: 20, s: 5 };

    console.log("Orario più piccolo");
    const result = minTime(tempo1, tempo2, tempo3);
    console.log(result);
}
main();
