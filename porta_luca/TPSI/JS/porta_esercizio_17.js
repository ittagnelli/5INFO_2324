function dividi(str){
    str.split('');
    let str2=[];
    for(item of str){
        if(item.charCodeAt()>=65 && item.charCodeAt()<=90){
            str2.push(item);
        }
    }
    console.log(str2);
}

let str='ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff';
dividi(str);