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
      
      this.$mobile = tag('div', {
         className: 'mobile menu',
         children: [
            tag('div', {
               className: 'icon-mobile',
               children: [
                  tag('div', {
                     className: 'icon-menu-mobile',
                     child: tag('img', {
                        className: 'icon-img',
                        src: 'https://github.com/cubarabara/Icon/assets/36744420/d3f63798-2b73-4b79-b2b7-0538c8b48438',
                     })
                  }),
                  tag('div', {
                     className: 'icon-text-mobile icon-text',
                     textContent: 'MOBILE'
                  }),
               ],
            }),
            tag('div', {
               className: 'menu-mobile',
            }),
         ],
      });
      
      this.$tablet = tag('div', {
         className: 'tablet menu',
         children: [
            tag('div', {
               className: 'icon-tablet',
               children: [
                  tag('div', {
                     className: 'icon-menu-tablet',
                     child: tag('img', {
                        className: 'icon-img',
                        src: 'https://github.com/cubarabara/Icon/assets/36744420/d15786e0-ee3f-43f5-b85b-5a00fc56ba4d',
                     })
                  }),
                  tag('div', {
                     className: 'icon-text-tablet icon-text',
                     textContent: 'TABLET'
                  }),
               ],
            }),
            tag('div', {
               className: 'menu-tablet',
            }),
         ],
      });
      
      this.$desktop = tag('div', {
         className: 'desktop menu',
         children: [
            tag('div', {
               className: 'icon-desktop',
               children: [
                  tag('div', {
                     className: 'icon-menu-desktop',
                     child: tag('img', {
                        className: 'icon-img',
                        src: 'https://github.com/cubarabara/Icon/assets/36744420/f690e127-7cac-48ed-9b8f-aa2cb650db59',
                     })
                  }),
                  tag('div', {
                     className: 'icon-text-desktop icon-text',
                     textContent: 'DESKTOP'
                  }),
               ],
            }),
            tag('div', {
               className: 'menu-desktop menu-list',
               
               child: tag ('ul', {
                  className: "list-menu-desktop",
                  children: [
                     tag('li', {
                        className: '1',
                        child: tag('a',{
                           textContent: '10 Notebook',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1024x600',
                           })
                        })
                     }),
                     tag('li', {
                        className: '2',
                        child: tag('a',{
                           textContent: '12 Netbook',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1024x768',
                           })
                        })
                     }),
                     tag('li', {
                        className: '3',
                        child: tag('a',{
                           textContent: '13 Notebook',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1280x800',
                           })
                        })
                     }),
                     tag('li', {
                        className: '4',
                        child: tag('a',{
                           textContent: '15 Notebook',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1366x768',
                           })
                        })
                     }),
                     tag('li', {
                        className: '5',
                        child: tag('a',{
                           textContent: '19 Desktop',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1440x900',
                           })
                        })
                     }),
                     tag('li', {
                        className: '6',
                        child: tag('a',{
                           textContent: '20 Desktop',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1600x900',
                           })
                        })
                     }),
                     tag('li', {
                        className: '7',
                        child: tag('a',{
                           textContent: '22 Desktop',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1680x1050',
                           })
                        })
                     }),
                     tag('li', {
                        className: '8',
                        child: tag('a',{
                           textContent: '23 Desktop',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1920x1080',
                           })
                        })
                     }),
                     tag('li', {
                        className: '9',
                        child: tag('a',{
                           textContent: '24 Desktop',
                           className: 'list',
                           child: tag('span',{
                              textContent: '1920x1200',
                           })
                        })
                     }),
                  ]
               })
            }),
         ],
      });
      
      this.$customScreen = tag('div', {
         className: 'customScreen menu',
         children: [
            tag('div', {
               className: 'icon-custom-screen',
               children: [
                  tag('div', {
                     className: 'icon-menu-custom-screen',
                     child: tag('img', {
                        className: 'icon-img',
                        src: 'https://github.com/cubarabara/Icon/assets/36744420/b7df6c90-0dcf-4def-b0cc-bd32ec0ab3e7',
                     })
                  }),
                  tag('div', {
                     className: 'icon-text-custom-screen icon-text',
                     textContent: 'CUSTOM SCREEN'
                  }),
               ],
            }),
            tag('div', {
               className: 'menu-custom-screen',
            }),
         ],
      });
      
      /*this.$iframes = tag('div', {
         className: 'iframes',
      });*/

      document.head.append(this.$style);
      this.$page.append(this.$container);
      
      /* navbar */
      this.$container.append(this.$navbar);
      this.$navbar.append(this.$mobile);
      this.$navbar.append(this.$tablet);
      this.$navbar.append(this.$desktop);
      this.$navbar.append(this.$customScreen);
      
      
      // this.$container.append(this.$iframes);
      
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
      const result = await prompt('Enter URL', '', 'text', {
         required: true,
         placeholder: 'http://',
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
