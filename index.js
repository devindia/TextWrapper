/**
 * index.js
 * 
 * Implementation of "Read More" or "See More" and "Read Less" or "See Less" 
 * on a long string while displaying on UI.
 * 
 * functions seeMore , seeLess , letterLimit
 * 
 * By Debasish Roy, https://github.com/devindia
 * 
 * License : ( ISC )
 * source  : https://github.com/devindia/TextWrapper
 * 
 */

var seeMore = (id1, id2) => {
    let id_1c = document.getElementById(id1);
    let id_2c = document.getElementById(id2);
    id_1c.style.display = "none";
    id_2c.style.display = "inline";
}

var seeLess = (id1, id2) => {
    let id_1c = document.getElementById(id1);
    let id_2c = document.getElementById(id2);
    id_1c.style.display = "inline";
    id_2c.style.display = "none";
}

var letterLimit = (text, no) => {
    return text.slice(0, no);
}

module.exports.seeMore = seeMore;
module.exports.seeLess = seeLess;
module.exports.letterLimit = letterLimit;