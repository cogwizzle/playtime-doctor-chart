if(!self.define){let s,c={};const e=(e,i)=>(e=new URL(e+".js",i).href,c[e]||new Promise((c=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=c,document.head.appendChild(s)}else s=e,importScripts(e),c()})).then((()=>{let s=c[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,o)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(c[d])return;let l={};const a=s=>e(s,d),r={module:{uri:d},exports:l,require:a};c[d]=Promise.all(i.map((s=>r[s]||a(s)))).then((s=>(o(...s),l)))}}define(["./workbox-cffbb336"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"images/android-chrome-192x192.png",revision:"c2ef9af91b9d966ab37f4e1a1d459314"},{url:"images/android-chrome-512x512.png",revision:"6b739f9404a597ce2cac9e13daba00ac"},{url:"images/apple-touch-icon.png",revision:"391e116864a823bbeb7a8dad7711166e"},{url:"images/favicon-16x16.png",revision:"6becc1ce7ed2f6aed26c4a818fb9db53"},{url:"images/favicon-32x32.png",revision:"a928f1b5466bb44fa3674c325f6e8e61"},{url:"images/favicon.ico",revision:"bf403594c06dca7cff3a973dea55d178"},{url:"images/Screenshot.png",revision:"0657ee0b409077d7021a87c0c042a0ad"},{url:"index.html",revision:"3596457e87bad6c9538f23659a9aa6f2"},{url:"manifest.json",revision:"0afb688326878b2e98a73ba97010f381"},{url:"src/generate-random-patient.mjs",revision:"52f5261e8f0913c1d867f887f8b944a5"},{url:"src/index.mjs",revision:"c3a16a2b4113e6b58d5a9abd64e61ae0"},{url:"styles/index.css",revision:"2fbce3391bbb181e394bda4d65a3f92b"},{url:"styles/pico-1.5.11/composer.json",revision:"06c7f0c20f18f1059d06d34ca4fbbd64"},{url:"styles/pico-1.5.11/css/pico.classless.css",revision:"09db8406dcdebe606b16e709228083f1"},{url:"styles/pico-1.5.11/css/pico.classless.min.css",revision:"14cd180ff7a313ae4bcdef0427d1d744"},{url:"styles/pico-1.5.11/css/pico.css",revision:"e81f8b4bfdcce2ef54fbc6c396daec2c"},{url:"styles/pico-1.5.11/css/pico.fluid.classless.css",revision:"d8d785b5184b54a8d056966bc12b43bc"},{url:"styles/pico-1.5.11/css/pico.fluid.classless.min.css",revision:"e94aa72083fa7f332c57308e693bc153"},{url:"styles/pico-1.5.11/css/pico.min.css",revision:"455ab69407682da90cbcc4919d455820"},{url:"styles/pico-1.5.11/css/pico.slim.css",revision:"2b7abfee8af20c0768da44f7dec78362"},{url:"styles/pico-1.5.11/css/pico.slim.min.css",revision:"7e907e8538cf30c40aef4b1b893447f4"},{url:"styles/pico-1.5.11/css/postcss.config.js",revision:"3f491feeb20b0acccd2b4aaac4ebaaab"},{url:"styles/pico-1.5.11/css/themes/default.css",revision:"a458e1c2568e765ba762666068eed69e"},{url:"styles/pico-1.5.11/css/themes/default.min.css",revision:"f1fd3084f53b1a42397e9097237822d0"},{url:"styles/pico-1.5.11/docs/accordions.html",revision:"62c179a42b799d4df3a92fa8a41e8e6e"},{url:"styles/pico-1.5.11/docs/buttons.html",revision:"49fa25afaf802833505f0760a3040b2f"},{url:"styles/pico-1.5.11/docs/cards.html",revision:"d5141c7fd871be7a1aec6bc7672fcc0a"},{url:"styles/pico-1.5.11/docs/classless.html",revision:"d52b2ce8192de886519bd97c7f23f020"},{url:"styles/pico-1.5.11/docs/containers.html",revision:"780b574cfbf12a58f041865d37143988"},{url:"styles/pico-1.5.11/docs/css/pico.docs.css",revision:"00a5203aca949bbbbc3f95a708d78557"},{url:"styles/pico-1.5.11/docs/css/pico.docs.min.css",revision:"ba336e462333c85caffec2a047bd95d8"},{url:"styles/pico-1.5.11/docs/customization.html",revision:"a48d02142724710f740884a6345361eb"},{url:"styles/pico-1.5.11/docs/dropdowns.html",revision:"e24de0586492819c605f5b4c3961b1f6"},{url:"styles/pico-1.5.11/docs/forms.html",revision:"82c277c644686f578e73df652ad66adf"},{url:"styles/pico-1.5.11/docs/grid.html",revision:"6e19d0bacf7fb2c11e59c1cd697177bc"},{url:"styles/pico-1.5.11/docs/index.html",revision:"2fa9bacbf26c43590f2cea9bae4640ec"},{url:"styles/pico-1.5.11/docs/js/commons.js",revision:"3b411f7e30afc9ddcef1562fa4bc3b14"},{url:"styles/pico-1.5.11/docs/js/commons.min.js",revision:"7ebe0fc9e614923990c2bba09b1dcd02"},{url:"styles/pico-1.5.11/docs/js/customization.js",revision:"890983b8546e6b896b6140d335f9a0ca"},{url:"styles/pico-1.5.11/docs/js/customization.min.js",revision:"d7f7645116376c49d40f2ae692cab4f3"},{url:"styles/pico-1.5.11/docs/js/grid.js",revision:"279c094947f30e95f9f595b6dad6d882"},{url:"styles/pico-1.5.11/docs/js/grid.min.js",revision:"873a6af513c7cc608558ee31c996698b"},{url:"styles/pico-1.5.11/docs/js/modal.js",revision:"6ea8d50f346a8d1ff44b5ec31c66d0ed"},{url:"styles/pico-1.5.11/docs/js/modal.min.js",revision:"0d87fb217033f58affd6889ca1fb063d"},{url:"styles/pico-1.5.11/docs/js/src/color-picker.js",revision:"9870c41a8f074fb8146004d6fb04a323"},{url:"styles/pico-1.5.11/docs/js/src/material-design-colors.js",revision:"e61fcb4d5965d37f4837c9bab8ae8852"},{url:"styles/pico-1.5.11/docs/js/src/theme-switcher.js",revision:"b5f3b2dfe6024d1447956300a5c814ed"},{url:"styles/pico-1.5.11/docs/js/src/toggle-navigation.js",revision:"48ac77827a1741dc7b3dc9fb831e07ef"},{url:"styles/pico-1.5.11/docs/loading.html",revision:"25214aba09bc7ca0d8418b2778b9f645"},{url:"styles/pico-1.5.11/docs/modal.html",revision:"a713da2c322484ece67b7783c7653fdc"},{url:"styles/pico-1.5.11/docs/navs.html",revision:"9999915f215a5c2841e258d3d4f78e45"},{url:"styles/pico-1.5.11/docs/progress.html",revision:"3beee64aa34e1123616ee5d51918e3e0"},{url:"styles/pico-1.5.11/docs/rtl.html",revision:"0538a85e09a15916f01b330524ba4f7a"},{url:"styles/pico-1.5.11/docs/scroller.html",revision:"a3ce4da7a58de738592f29baf0b05f57"},{url:"styles/pico-1.5.11/docs/scss/components/_modal.scss",revision:"d7d57eb881f3cc858f179f5ae043406f"},{url:"styles/pico-1.5.11/docs/scss/components/_nav.scss",revision:"ef6d8b9b455031f46b93972608181e5b"},{url:"styles/pico-1.5.11/docs/scss/components/_theme-switcher.scss",revision:"fdc7c21cfe6ea9b581bb01ceea377248"},{url:"styles/pico-1.5.11/docs/scss/content/_code.scss",revision:"ed06d4fb1725aec5d6b179f40feab670"},{url:"styles/pico-1.5.11/docs/scss/content/_typography.scss",revision:"7573e625dc9cc0e72b23914186b70e8f"},{url:"styles/pico-1.5.11/docs/scss/layout/_aside.scss",revision:"652ff75e3a7a60b13281550fc59a3894"},{url:"styles/pico-1.5.11/docs/scss/layout/_document.scss",revision:"466c1a14053046f6a1f9a6dbcbc4e8df"},{url:"styles/pico-1.5.11/docs/scss/layout/_documentation.scss",revision:"89f092cd95ddddb8a646f55749e89259"},{url:"styles/pico-1.5.11/docs/scss/layout/_main.scss",revision:"92602ea8db81185d9db3bed91274f219"},{url:"styles/pico-1.5.11/docs/scss/pico.docs.scss",revision:"a0f3ccd04427ca6717fbb8d9281325db"},{url:"styles/pico-1.5.11/docs/scss/themes/_docs.scss",revision:"4c0f3af3407fbceaedc0db2a37c97769"},{url:"styles/pico-1.5.11/docs/scss/themes/docs/_dark.scss",revision:"2d1aa6b868665dda0a2c6ddcc8b8e071"},{url:"styles/pico-1.5.11/docs/scss/themes/docs/_icons.scss",revision:"ebcaa300cf3b701c7ea2ab7f04e9cad6"},{url:"styles/pico-1.5.11/docs/scss/themes/docs/_light.scss",revision:"ff2ffff9516594337f629b7b9f584869"},{url:"styles/pico-1.5.11/docs/src/_footer.html",revision:"2e22e5a6afe5a7308b8ff3bf20306d6e"},{url:"styles/pico-1.5.11/docs/src/_head.html",revision:"e465ab1b0f4aa184f1540fb205b23102"},{url:"styles/pico-1.5.11/docs/src/_nav.html",revision:"34ae215d1f023d8fc25d73a6c509e092"},{url:"styles/pico-1.5.11/docs/src/_sidebar.html",revision:"ab55ad9cf587f3ddec392dc0ffac6656"},{url:"styles/pico-1.5.11/docs/src/accordions.html",revision:"d350b35e71f9e974f665c803ca9ad3b8"},{url:"styles/pico-1.5.11/docs/src/buttons.html",revision:"5231f5bb690bffc17041c4d4a96be7e7"},{url:"styles/pico-1.5.11/docs/src/cards.html",revision:"aad4e90b65c11516ca1c0fcf6335683c"},{url:"styles/pico-1.5.11/docs/src/classless.html",revision:"65871a3730620b3dc2937bbabb4c25e7"},{url:"styles/pico-1.5.11/docs/src/containers.html",revision:"1b0759558c769665246ffe2aff53f22b"},{url:"styles/pico-1.5.11/docs/src/customization.html",revision:"6d61bc7f719e026a5f1d4a1d3f9b8ae5"},{url:"styles/pico-1.5.11/docs/src/dropdowns.html",revision:"e7d535c994410342d3352fbfd3bb4fc0"},{url:"styles/pico-1.5.11/docs/src/forms.html",revision:"5f98ab863c9222285cc0571d5db0ac61"},{url:"styles/pico-1.5.11/docs/src/grid.html",revision:"904b8320ad5c115611f02222109657fc"},{url:"styles/pico-1.5.11/docs/src/index.html",revision:"b43dd528b36fa2b2dc2a7b6652b45ea6"},{url:"styles/pico-1.5.11/docs/src/loading.html",revision:"a49e288c703406b4dbde37ca97a13fed"},{url:"styles/pico-1.5.11/docs/src/modal.html",revision:"0d34a73a73a3a81cffed0579657b36ce"},{url:"styles/pico-1.5.11/docs/src/navs.html",revision:"9452c0d2e8c1c4384782f1bf0915339f"},{url:"styles/pico-1.5.11/docs/src/progress.html",revision:"6d94be7e4ec5adff50093f2b324d9f0e"},{url:"styles/pico-1.5.11/docs/src/rtl.html",revision:"96f5b84ad5ee9ad74470297425714df2"},{url:"styles/pico-1.5.11/docs/src/scroller.html",revision:"5affa1de8ea8edfac3e6107de96a53b4"},{url:"styles/pico-1.5.11/docs/src/tables.html",revision:"152a55fdbd97b7f025d8554bc838a0f6"},{url:"styles/pico-1.5.11/docs/src/themes.html",revision:"ce3c2e5dcf487179e0b70f6e86e6469b"},{url:"styles/pico-1.5.11/docs/src/tooltips.html",revision:"677088d0bc8292ab66c54a1d333b1887"},{url:"styles/pico-1.5.11/docs/src/typography.html",revision:"8eb39e64179c134c4e52c0938dec0bfa"},{url:"styles/pico-1.5.11/docs/src/we-love-classes.html",revision:"04cd99faef6b5d77fbec37539e5a9e85"},{url:"styles/pico-1.5.11/docs/tables.html",revision:"032d0f97a836502b93d58257f349f4b1"},{url:"styles/pico-1.5.11/docs/themes.html",revision:"eb477b02db689933121aef3e453d1b0a"},{url:"styles/pico-1.5.11/docs/tooltips.html",revision:"2ae3d6f0c0a34f7f4fddaf4f306cd2fa"},{url:"styles/pico-1.5.11/docs/typography.html",revision:"191b4456068e2776afbf9a7b3bf43958"},{url:"styles/pico-1.5.11/docs/we-love-classes.html",revision:"f47edc6b5b4ffabcbb02d2bc7d4f31dc"},{url:"styles/pico-1.5.11/LICENSE.md",revision:"07b4ccf9a3cd695e65d78d0a614bec00"},{url:"styles/pico-1.5.11/package-lock.json",revision:"f752f257e4c79d3ac123247e17769206"},{url:"styles/pico-1.5.11/package.json",revision:"2c32483b4a8f0fc6fe9bb00c46bb466d"},{url:"styles/pico-1.5.11/README.md",revision:"0b6e993cf8d1e088b632c3c5cccf1b12"},{url:"styles/pico-1.5.11/scss/_functions.scss",revision:"2c5f517b52a73f9b3ab3066b3e40bfeb"},{url:"styles/pico-1.5.11/scss/_variables.scss",revision:"5deab7c53062365edf74e938300cb158"},{url:"styles/pico-1.5.11/scss/components/_accordion.scss",revision:"5a06c9488791a592684260c3123d0be2"},{url:"styles/pico-1.5.11/scss/components/_card.scss",revision:"5d8d641a716b1f12b26967dada9cafc1"},{url:"styles/pico-1.5.11/scss/components/_dropdown.scss",revision:"c89f4c05fddee11c0d99cb4017818d0f"},{url:"styles/pico-1.5.11/scss/components/_modal.scss",revision:"bda33670e50400ac8abc711daafec4f8"},{url:"styles/pico-1.5.11/scss/components/_nav.scss",revision:"8443d59d171a306d90fac7dec9f178dc"},{url:"styles/pico-1.5.11/scss/components/_progress.scss",revision:"246eab0d786afb4b65a43efc75f7f949"},{url:"styles/pico-1.5.11/scss/content/_button.scss",revision:"898c981f4613d23a3ea033acdff1557a"},{url:"styles/pico-1.5.11/scss/content/_code.scss",revision:"8fa5f324fc186cc4b9df949c0520f6d5"},{url:"styles/pico-1.5.11/scss/content/_embedded.scss",revision:"8c7784bcc7d28e0febc54bdb21e74558"},{url:"styles/pico-1.5.11/scss/content/_form-alt-input-types.scss",revision:"b69c54b5236bd3675f5db9cef3d0f961"},{url:"styles/pico-1.5.11/scss/content/_form-checkbox-radio.scss",revision:"1f11a2a05aeb6f9e2f39fb4700e79357"},{url:"styles/pico-1.5.11/scss/content/_form.scss",revision:"c5b65e795a97575116ae0345ff398fe4"},{url:"styles/pico-1.5.11/scss/content/_miscs.scss",revision:"4c437600d3da518987546f27293b8841"},{url:"styles/pico-1.5.11/scss/content/_table.scss",revision:"978530c14355ab72596e4416a8de1d55"},{url:"styles/pico-1.5.11/scss/content/_typography.scss",revision:"dcf35fd7c65d54b8a4b0059d7c7f6c83"},{url:"styles/pico-1.5.11/scss/layout/_container.scss",revision:"582ac4782525098c34e24cfb3ef2218d"},{url:"styles/pico-1.5.11/scss/layout/_document.scss",revision:"3c52243f8942eeb6af1740d64a1c9563"},{url:"styles/pico-1.5.11/scss/layout/_grid.scss",revision:"f99b608b7c33d64a79a7cb219ad5068f"},{url:"styles/pico-1.5.11/scss/layout/_scroller.scss",revision:"b9dfd82e192f26bf7b40bf67126df122"},{url:"styles/pico-1.5.11/scss/layout/_section.scss",revision:"067cf05f7a65c263dd8d19356a1d0856"},{url:"styles/pico-1.5.11/scss/layout/_sectioning.scss",revision:"130dda95b1c6eaa5a6d3bf83b91c0d8e"},{url:"styles/pico-1.5.11/scss/pico.classless.scss",revision:"8e1014bf1dcf1e78c28c1b15b8c8fe5f"},{url:"styles/pico-1.5.11/scss/pico.fluid.classless.scss",revision:"a3d768ce34e2fc52a1f588a258292c84"},{url:"styles/pico-1.5.11/scss/pico.scss",revision:"9a665fb223cbf6970415c0f01287a9bd"},{url:"styles/pico-1.5.11/scss/pico.slim.scss",revision:"9e04aae16a29b27f4a893c86d7615bbd"},{url:"styles/pico-1.5.11/scss/postcss.config.js",revision:"04ea24fb13157142df0e01ceb29ab0ed"},{url:"styles/pico-1.5.11/scss/themes/default.scss",revision:"8db723b0f3f4a7f87b7c7a9a569b7a44"},{url:"styles/pico-1.5.11/scss/themes/default/_colors.scss",revision:"b03f2cb35050f2d5083ac4ea04d5c273"},{url:"styles/pico-1.5.11/scss/themes/default/_dark.scss",revision:"49f685c562fd7aa8d352d62795c099f7"},{url:"styles/pico-1.5.11/scss/themes/default/_light.scss",revision:"bbfca73de2e1ff58d237ecceb7fb75b6"},{url:"styles/pico-1.5.11/scss/themes/default/_styles.scss",revision:"a954b905bce2bad0f6af57ff0ea0ca2b"},{url:"styles/pico-1.5.11/scss/utilities/_accessibility.scss",revision:"bdc7d41e40d801aa5ca0ecd473bc6ebb"},{url:"styles/pico-1.5.11/scss/utilities/_loading.scss",revision:"cef1a11fa6f7668c326ac13210ac30a2"},{url:"styles/pico-1.5.11/scss/utilities/_reduce-motion.scss",revision:"ed8586275a4ebbf2e91be22af4102a1f"},{url:"styles/pico-1.5.11/scss/utilities/_tooltip.scss",revision:"b25dc55a184000440adacf180536172e"},{url:"styles/utils.css",revision:"5d2e3f76532c3cf5900d9c4270c199a0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
