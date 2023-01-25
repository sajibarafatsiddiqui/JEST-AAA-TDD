const stringLength =(msg) => {
    let l = msg.length
    if (l < 1 || l > 10){
       throw (Error)
    }
    return l;
}

module.exports ={stringLength}