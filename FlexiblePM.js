// ==UserScript==
// @name PM Flexible UI
// @namespace ''
// @description Make the Property Manager UI more flexible
// @match https://control.akamai.com/apps/property-manager/*
// @version     1.1
// @author      Jaime Escalona
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Change background
addGlobalStyle ('body.core-1-7, body.core-1-8 { background: rgb(21,42,74); background: radial-gradient(circle, rgba(21,42,74,1) 0%, rgba(25,63,103,1) 35%, rgba(51,153,203,1) 100%); }');

// Texts color
addGlobalStyle ('body { color: #424554; }');

// Title Color
addGlobalStyle ('h1, h3, .h1 ,h3 { color: #FFF; }')

// Adjust the width of PM box to 95% viewport width
addGlobalStyle('.container { width: 85% !important; }');

// Adjust the variable list box to fit all variables
addGlobalStyle('pm-variable-list .variable-table-scrolling-wrapper { max-height: 500px !important; }');

// Set the rule tree height, width and color
//addGlobalStyle ('.rule-tree .scroll { height: 100%; overflow-y: visible; overflow-x: visible; }');
addGlobalStyle ('.col-xs-3 { width: 35%; }');
addGlobalStyle ('.rule-tree .list-group>.list-group-item { background-color: rgb(254 255 245); }');

// Set the matches and behaviors panel width
addGlobalStyle ('.col-xs-9 { width: 65%; }');

// Set the rules box height and scroll
addGlobalStyle ('.rules { height:1500px; overflow-y:auto; }');

// Change criteria box color
addGlobalStyle ('.edit-page pm-match-list .matches.all, .edit-page pm-match-list .matches.any .pm-match { background-color: #f7ebe2; }');
addGlobalStyle ('.edit-page .no-matches, .edit-page .pm-match { background-color: #f7ebe2 }');
addGlobalStyle ('.edit-page pm-match-list .matches .condition-separator > span { background: #f7ebe2 }');

// Change the behavior box color
addGlobalStyle ('.edit-page .no-behaviors, .edit-page pm-behavior { background-color: #d5ebf4; }');

// Move Info box to the right side and re-color
addGlobalStyle ('.popover { left: unset !important; right: 0 !important; background-color: rgb(189 255 197); }');
addGlobalStyle ('.popover.left > .arrow:after { border-left-color: rgb(189 255 197); }')
addGlobalStyle ('.popover.right > .arrow:after { border-right-color: rgb(189 255 197); }')
addGlobalStyle ('.popover.top > .arrow:after { border-top-color: rgb(189 255 197); }')
addGlobalStyle ('h3.popover-title { color: rgb(102 102 102); }')

// Increase the allowed number of child rules to 10
addGlobalStyle ('.rule-tree .list-group>.list-group-item[depth="7"] { padding-left: 105px; }');
addGlobalStyle ('.rule-tree .list-group>.list-group-item[depth="8"] { padding-left: 120px; }');
addGlobalStyle ('.rule-tree .list-group>.list-group-item[depth="9"] { padding-left: 135px; }');
addGlobalStyle ('.rule-tree .list-group>.list-group-item[depth="10"] { padding-left: 150px; }');
addGlobalStyle ('.rule-tree .list-group>.list-group-item[depth="11"] { padding-left: 165px; }');
