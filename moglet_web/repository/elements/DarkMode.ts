export default class DarkMode {
    constructor() {}

    static changeLight() {
        document.documentElement.style.setProperty('--g-color-main-white', '#ffffff');
        document.documentElement.style.setProperty('--g-color-main-black', '#000000');
        document.documentElement.style.setProperty('--g-color-main-dark', '#1B1F3A');
        document.documentElement.style.setProperty('--g-color-main-red', '#FD3B3B');
        document.documentElement.style.setProperty('--g-color-main-orange', '#FE7913');
        
        document.documentElement.style.setProperty('--g-color-lightgray', '#F2F2F2');
        document.documentElement.style.setProperty('--g-color-lightgray-text', '#8787A3');
        document.documentElement.style.setProperty('--g-color-darkgray', '#555555');
        document.documentElement.style.setProperty('--g-color-darkgray-text', '#999999');
        
        document.documentElement.style.setProperty('--g-color-button', '#FD3B3B');
        document.documentElement.style.setProperty('--g-color-button-hover', '#FE7913');
        document.documentElement.style.setProperty('--g-color-button-text', '#ffffff');
        
        document.documentElement.style.setProperty('--g-input-bg', '#ffffff');
        document.documentElement.style.setProperty('--g-input-text', '#000000');
        
        document.documentElement.style.setProperty('--gray-bar', '#DCDCDC50');
        document.documentElement.style.setProperty('--table-border-inner', '#bbbbbb');
        document.documentElement.style.setProperty('--sidebar-text', '#ffffff');
        document.documentElement.style.setProperty('--header-bg', '#ffffff');
    }
    
    static changeDark() {
        document.documentElement.style.setProperty('--g-color-main-white', '#171B26');
        document.documentElement.style.setProperty('--g-color-main-black', '#E9ECF3');
        document.documentElement.style.setProperty('--g-color-main-dark', '#161616');
        document.documentElement.style.setProperty('--g-color-main-red', '#FD3B3B');
        document.documentElement.style.setProperty('--g-color-main-orange', '#FE7913');
        
        document.documentElement.style.setProperty('--g-color-lightgray', '#171B26');
        document.documentElement.style.setProperty('--g-color-lightgray-text', '#171B26');
        document.documentElement.style.setProperty('--g-color-darkgray', '#111520');
        document.documentElement.style.setProperty('--g-color-darkgray-text', '#111520');
        
        document.documentElement.style.setProperty('--g-color-button', '#222325');
        document.documentElement.style.setProperty('--g-color-button-hover', '#35373a');
        document.documentElement.style.setProperty('--g-color-button-text', '#EAEAEA');
        
        document.documentElement.style.setProperty('--g-input-bg', '#3C3C3C');
        document.documentElement.style.setProperty('--g-input-text', '#EAEAEA');


        document.documentElement.style.setProperty('--gray-bar', '#161616');
        document.documentElement.style.setProperty('--table-border-inner', '#000000');
        document.documentElement.style.setProperty('--sidebar-text', '#ffffff');
        document.documentElement.style.setProperty('--header-bg', '#171B26');
    }
}