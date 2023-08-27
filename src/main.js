import plugin from '../plugin.json';
import style from './style.scss';
import tag from 'html-tag-js';

const selectionMenu = acode.require('selectionMenu');
const toast = acode.require('toast');

class AcodePlugin {

    async init($page) {
        selectionMenu.add(this.run.bind(this), 'Hi', 'all');
        // editorManager.
        editorManager.editor.commands.addCommand({
            name: "test",
            description: "test",
            bindKey: {
                win: "Ctrl-T"
            },
            exec: this.run.bind(this),
        });

        // Initialising $page for plugin
        $page.id = 'acode-plugin-package-adder';
        $page.settitle("Add Package");
        this.$page = $page

        // Adding custom styles to $page 
        this.$style = tag('style', {
            textContent: style,
        })

        this.$divWrapper = tag('div', {
            className: 'wrapper',
        })
        
        this.$iframeMobile = tag('iframe', {
            className: 'iframeMobile',
            src: "http://localhost:5173/"
        })

        document.head.append(this.$style)
        this.$page.append(this.$divWrapper)
        this.$divWrapper.append(this.$iframeMobile)
    }

    async run() {
        this.$page.show();
        window.toast('Hello, World!', 3000);
    }

    async destroy() {

    }
}

if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        await acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}