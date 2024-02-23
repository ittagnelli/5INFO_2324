let string = "hello world";

function upper_case(str) {
    for(i = 0; i < string.length; i++) {

        let pippo = str.slice(i-1, i);
        let pluto = pippo

        if (pippo > 97 && pippo < 122) pippo -= 32;
        str = str.replace(pluto, String.fromCharCode(pippo));
    }
    console.log((str.join()).replaceAll(",", ""));
}
string = string.split("");
upper_case(string);