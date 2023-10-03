/*v2.2.0*/

import plugin from '../plugin.json';
import style from './style.scss';
import tag from 'html-tag-js';

const selectionMenu = acode.require('selectionMenu');
const toast = acode.require('toast');
const prompt = acode.require('prompt');

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
      $page.id = "responsiveTools";
      $page.settitle("Responsive");
      this.$page = $page;

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
      });

      this.$container = tag('div', {
         className: 'container',
      });
      
      this.$navbar = tag('div', {
         className: 'navbar',
      });
      
      this.$iframes = tag('div', {
         className: 'iframes',
      });

      document.head.append(this.$style);
      
      this.$page.append(this.$container)
      this.$container.append(this.$navbar)
      
      this.$page.append(this.$iframes)
      

      this.checkRunnable();
      editorManager.on('switch-file', this.checkRunnable.bind(this));
      editorManager.on('rename-file', this.checkRunnable.bind(this));

      // remove and reset zoom, use the back arrow 
      $page.querySelector(".arrow_back").addEventListener("click", () => {
         document.querySelector("[name='viewport']").setAttribute("content", " width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
         $page.remove();
      })
      
      document.addEventListener("backbutton", onBackKeyDown); 
      function onBackKeyDown() {
         document.querySelector("[name='viewport']").setAttribute("content", " width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
         $page.remove();
      }
   }

   async run() {
      const result = await prompt('Enter Url', '', 'text', {
         required: true,
         placeholder: 'Url',
      });

      // set src iframe
      if (result) {
         this.$page.show();
         document.querySelector("[name='viewport']").setAttribute("content", "width=1024, height=768");
      }
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
   acode.setPluginInit(
      plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
         if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
         }
         acodePlugin.baseUrl = baseUrl;
         await acodePlugin.init($page, cacheFile, cacheFileUrl);
      }
   );
   acode.setPluginUnmount(plugin.id, () => {
      acodePlugin.destroy();
   });
}
