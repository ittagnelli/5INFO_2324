let stringa = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

function p_maiusc (str)
{
    let str2 = []
    for (let s of str)
    {
        console.log(s)
        if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90)
        {
            str2.push(s)
        }
    }
    return str2
}

console.log(p_maiusc(stringa));