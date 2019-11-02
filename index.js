class TextWrapper {

    seeMore(id1, id2) {
        let id_1c = document.getElementById(id1);
        let id_2c = document.getElementById(id2);
        id_1c.style.display = "none";
        id_2c.style.display = "inline";
    }

    seeLess(id1, id2) {
        let id_1c = document.getElementById(id1);
        let id_2c = document.getElementById(id2);
        id_1c.style.display = "inline";
        id_2c.style.display = "none";
    }

    letterLimit(text, no) {
        return text.slice(0, no);
    }

}

module.exports = TextWrapper;