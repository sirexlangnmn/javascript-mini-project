"use strict";
const getValue = (htmlId) => {
    return document.getElementById(htmlId).value;
}

const getId = (htmlId) => {
    return document.getElementById(htmlId);
}

const onClickEvent = (htmlId, functionName) => {
    document.getElementById(htmlId).addEventListener('click', functionName);
}