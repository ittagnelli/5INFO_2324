const only_upper = (s) => {
    return s.split('').filter(e => e.charCodeAt() > 65 && e.charCodeAt() < 90);
};

let str = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";
console.log(`IN: ${str}\nOUT: ${only_upper(str)}`);