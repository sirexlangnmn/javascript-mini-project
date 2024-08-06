"use strict";
const getValue = (id) => document.getElementById(id).value;

const getId = (id) => document.getElementById(id);

const onClickEvent = (id, functionName) => document.getElementById(id).addEventListener('click', functionName);

const createElement = (id) => document.createElement(id);

const toLowerCase = str => str.toLowerCase();

const toUpperCase = str => str.toUpperCase();
