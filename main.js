const MDCRipple = mdc.ripple.MDCRipple;
const MDCMenu = mdc.menu.MDCMenu;
MDCRipple.attachTo(document.querySelector('.menu-icon'));
MDCRipple.attachTo(document.querySelector('.download-icon'));
MDCRipple.attachTo(document.querySelector('.issues-icon'));
MDCRipple.attachTo(document.querySelector('.code-icon'));
const menu = new MDCMenu(document.querySelector('.menu'));