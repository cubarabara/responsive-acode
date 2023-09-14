import plugin from '../plugin.json';
import style from './style.scss';
import tag from 'html-tag-js';

const selectionMenu = acode.require('selectionMenu');
const toast = acode.require('toast');

class AcodePlugin {

   async init($page) {
      selectionMenu.add(this.run.bind(this), 'Dubug', 'all');
      // editorManager.
      editorManager.editor.commands.addCommand({
         name: "test1",
         description: "Responsive",
         bindKey: {
            win: "Ctrl-T"
         },
         exec: this.run.bind(this),
      });

      // Initialising $page for plugin
      $page.id = 'acode-plugin-package-adder';
      $page.settitle("Responsive");
      this.$page = $page

      this.$runBtn = tag('span', {
         className: 'icon play_circle_filled',
         attr: {
            action: 'run',
         },
         onclick: this.run.bind(this),
      });

      // Adding custom styles to $page 
      this.$style = tag('style', {
         textContent: style,
      })

      this.$divWrapper = tag('div', {
         className: 'wrapper',
      })

      this.$iframeMobile = tag('iframe', {
         className: 'iframeMobile',
         src: "http://localhost:5173/",
         width: "335",
         height: "480"
      })

      document.head.append(this.$style);
      document.head.querySelector("[name='viewport']").remove();
      this.$page.append(this.$divWrapper)
      this.$divWrapper.append(this.$iframeMobile)

      this.checkRunnable();
      editorManager.on('switch-file', this.checkRunnable.bind(this));
      editorManager.on('rename-file', this.checkRunnable.bind(this));
      document.head.append(this.$style);
   }

   async run() {
      this.$page.show();
      window.toast('Hello, World!', 3000);
   }

   async destroy() {
      if (this.$runBtn) {
         this.$runBtn.onclick = null;
         this.$runBtn.remove();
      }
      editorManager.off('switch-file', this.checkRunnable.bind(this));
      editorManager.off('rename-file', this.checkRunnable.bind(this));
   }

   checkRunnable() {
      const file = editorManager.activeFile;
      if (this.$runBtn.isConnected) {
         this.$runBtn.remove();
      }
      if (file) {
         const $header = root.get('header');
         $header.get('.icon.play_arrow')?.remove();
         $header.insertBefore(this.$runBtn, $header.lastChild);
      }
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
