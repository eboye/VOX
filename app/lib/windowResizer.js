import config from '../config';

const BrowserWindow = require('electron').remote.BrowserWindow;

export function resize(minimize) {
    let width = config.maxSize.width;
    let height = config.maxSize.height;

    if (minimize) {
        width = config.minSize.width;
        height = config.minSize.height;
    }

    BrowserWindow.getFocusedWindow().setSize(width, height);
}
