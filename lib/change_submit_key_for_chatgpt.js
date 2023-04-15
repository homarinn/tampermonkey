// ==UserScript==
// @name         Enterで改行、Ctrl + Enter(⌘ + Enter)で送信
// @version      1
// @description  【ChatGPT対応】Windowsなら「Ctrl + Enter」、Macなら「⌘ + Enter」で送信されるように変更する(テキストエリアのみ)
// @author       Homare Asakura
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// ==/UserScript==
(function() {
    'use strict';

    const userAgent = window.navigator.userAgent.toLowerCase();
    document.addEventListener('keydown', (e) => {
        // テキストエリアのみ
        if (e.target.tagName !== 'TEXTAREA') {
            return;
        }

        let withKey;

        // WindowsならCtrl
        if (userAgent.indexOf("windows nt") !== -1) {
            withKey = e.ctrlKey;
        }

        // Macなら⌘
        if (userAgent.indexOf("mac os x") !== -1) {
            withKey = e.metaKey;
        }

        // Enter + 指定キーを押していない場合は送信をストップ
        if (e.code == "Enter" && !withKey) {
            e.stopPropagation();
        }
    }, { capture: true });
})();
