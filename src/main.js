/*v2.2.0-beta*/

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

      this.$navbar = tag('div', {
         className: "navbar",
         children: [
            tag("input", {
               className: "menu-navbar hamburgerMenu",
               type: 'checkbox',
            }),
            tag("span", {
               className: "menu-navbar icon arrow_forward",
            })
         ],
      });

      this.$menuSlide = tag("div", {
         className: "menu-slide",
         child: tag('div', {
            className: 'menu',
            children: [
               tag('div', {
                  className: 'custom-screen',
                  children: [
                     tag('input', {
                        className: 'input-width',
                        placeholder: 'width',
                        type: 'number',
                     }),
                     tag('input', {
                        className: 'input-height',
                        placeholder: 'height',
                        type: 'number',
                     }),
                     tag('button', {
                        className: 'btnApply',
                        textContent: 'Apply',
                     }),
                  ],
               }),
               tag('ul', {
                  className: 'menu-list',
                  children: [
                     tag('li', {
                        className: 'dropdown',
                        children: [
                           tag('label', {
                              textContent: 'MOBILE',
                              className: 'label',
                              child: tag('i', {
                                 className: 'icon expand_more',
                              }),
                           }),
                           tag('ul', {
                              className: 'mobile',
                              children: [
                                 tag('li', {
                                    className: 'dropdown',
                                    children: [
                                       tag('label', {
                                          textContent: 'iPhone',
                                          className: 'label',
                                          child: tag('i', {
                                             className: 'icon expand_more',
                                          }),
                                       }),
                                       tag('ul', {
                                          className: 'submenu',
                                          children: [
                                             tag('li', {
                                                child: tag('label', {
                                                   textContent: 'iPhone',
                                                   className: 'ppp',
                                                   child: tag('i', {
                                                      textContent: '320x568',

                                                   }),
                                                }),
                                             }),
                                             tag('li', {
                                                child: tag('label', {
                                                   textContent: 'iPhone',
                                                   className: 'ppp',
                                                   child: tag('i', {
                                                      textContent: '320x568',

                                                   }),
                                                }),
                                             }),
                                          ],
                                       }),
                                    ],
                                 }),
                                 tag('li', {
                                    className: 'dropdown',
                                    children: [
                                       tag('label', {
                                          textContent: 'Samsung',
                                          className: 'label',
                                          child: tag('i', {
                                             className: 'icon expand_more',
                                          }),
                                       }),
                                       tag('ul', {
                                          className: 'submenu',
                                          children: [
                                             tag('li', {
                                                child: tag('label', {
                                                   textContent: 'iPhone',
                                                   className: 'ppp',
                                                   child: tag('i', {
                                                      textContent: '320x568',

                                                   }),
                                                }),
                                             }),
                                             tag('li', {
                                                child: tag('label', {
                                                   textContent: 'iPhone',
                                                   className: 'ppp',
                                                   child: tag('i', {
                                                      textContent: '320x568',

                                                   }),
                                                }),
                                             }),
                                          ],
                                       }),
                                    ],
                                 }),
                              ],
                           }),
                        ],
                     }),
                     tag('li', {
                        className: 'dropdown',
                        child: tag('label', {
                           textContent: 'TABLET',
                           className: 'label',
                           child: tag('i', {
                              className: 'icon expand_more',
                           }),
                        }),
                     }),
                     tag('li', {
                        className: 'dropdown',
                        children: [
                           tag('label', {
                              textContent: 'DESKTOP',
                              className: 'label',
                              child: tag('i', {
                                 className: 'icon expand_more',
                              }),
                           }),
                           tag('ul', {
                              // className: 'desktop list',
                           })
                        ],
                     }),
                  ],
               }),
            ],
         }),
      });

      this.$iframes = tag('div', {
         className: "iframes",
      });

      document.head.append(this.$style);
      this.$page.append(this.$navbar);
      this.$page.append(this.$menuSlide);
      this.$page.append(this.$iframes);

      this.checkRunnable();
      editorManager.on('switch-file', this.checkRunnable.bind(this));
      editorManager.on('rename-file', this.checkRunnable.bind(this));

      // remove and reset zoom, use the back arrow 
      $page.querySelector(".arrow_forward").addEventListener("click", () => {
         document.querySelector("[name='viewport']").setAttribute("content", " width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
         $page.remove();
      });

      document.addEventListener("backbutton", onBackKeyDown);
      function onBackKeyDown() {
         document.querySelector("[name='viewport']").setAttribute("content", " width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
         $page.remove();
      }

      /* remove header */
      $page.header.remove();

      /* mavbar */
      const toggelMenu = $page.querySelector(".hamburgerMenu");
      const menuSlide = $page.querySelector(".menu-slide");
      toggelMenu.addEventListener("click", function() {
         menuSlide.classList.toggle('active');
      });
      
      /*Custom Screen */
      const customWidth = $page.querySelectorAll('.input-width');
      const customHeight = $page.querySelectorAll('.input-height');
      $page.querySelector(".btnApply").addEventListener("click", () => {
         console.log("pp");
      });
      
      /* drop Down */
      const dropDown = $page.querySelectorAll('.dropdown');
      dropDown.forEach(item => {
         item.addEventListener('click', function (event) {
            event.stopPropagation();
            if (this.classList.contains('active')) {
               this.classList.remove('active');
            } else if (this.parentElement.parentElement.classList.contains('active')) {
               if (this.classList.contains('active')) {
                  this.classList.remove('active');
               } else {
                  Array.from(this.parentElement.children).forEach(itemMenu => {
                     itemMenu.classList.remove('active');
                  });
                  this.classList.add('active')
               }
            } else {
               dropDown.forEach(dropDownE => {
                  dropDownE.classList.remove('active');
               });
               this.classList.add('active');
            }
         });
      });
   }

   async run() {
      const result = await prompt('Enter Url', '', 'text', {
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
