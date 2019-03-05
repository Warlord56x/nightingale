/* component constructors */
const MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer
const MDCToolbar = mdc.toolbar.MDCToolbar
const MDCRipple = mdc.ripple.MDCRipple

/* components */
const drawer = new MDCTemporaryDrawer(document.querySelector('.drawer'))
const toolbar = new MDCToolbar(document.querySelector('.toolbar'))
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust')
const footer = new MDCToolbar(document.querySelector('.footer'))

/* icons & ripple effects */
const menu = document.querySelector('.menu')
menu.addEventListener('click', () => drawer.open = true)
const menuRipple = new MDCRipple(menu)
menuRipple.unbounded = true
const download = document.querySelector('.download')
const downloadRipple = new MDCRipple(download)
downloadRipple.unbounded = true
const bugs = document.querySelector('.bugs')
const bugsRipple = new MDCRipple(bugs)
bugsRipple.unbounded = true
const code = document.querySelector('.code')
const codeRipple = new MDCRipple(code)
codeRipple.unbounded = true
