tinymce.PluginManager.add("importcss",function(t){function e(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t}function n(e,n){function r(t,e){var c=t.href;(e||o[c])&&(!n||n(c))&&(i(t.imports,function(t){r(t,!0)}),i(t.cssRules||t.rules,function(t){t.styleSheet?r(t.styleSheet,!0):t.selectorText&&i(t.selectorText.split(","),function(t){s.push(tinymce.trim(t))})}))}var s=[],o={};i(t.contentCSS,function(t){o[t]=!0});try{i(e.styleSheets,r)}catch(c){}return s}function r(e){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(r){var s=r[1],i=r[2].substr(1).split(".").join(" ");return r[1]?(n={title:e},t.schema.getTextBlockElements()[s]?n.block=s:t.schema.getBlockElements()[s]?n.selector=s:n.inline=s):r[2]&&(n={inline:"span",title:e.substr(1),classes:i}),t.settings.importcss_merge_classes!==!1?n.classes=i:n.attributes={"class":i},n}}var s=this,i=tinymce.each;t.settings.style_formats||t.on("renderFormatsMenu",function(o){var c=t.settings,l={},a=c.importcss_selector_converter||r,f=e(c.importcss_selector_filter);t.settings.importcss_append||o.control.items().remove();var m=c.importcss_groups;if(m)for(var u=0;u<m.length;u++)m[u].filter=e(m[u].filter);i(n(t.getDoc(),e(c.importcss_file_filter)),function(e){if(-1===e.indexOf(".mce-")&&!l[e]&&(!f||f(e))){var n,r=a.call(s,e);if(r){var i=r.name||tinymce.DOM.uniqueId();if(m)for(var c=0;c<m.length;c++)if(!m[c].filter||m[c].filter(e)){m[c].item||(m[c].item={text:m[c].title,menu:[]}),n=m[c].item.menu;break}t.formatter.register(i,r);var u=tinymce.extend({},o.control.settings.itemDefaults,{text:r.title,format:i});n?n.push(u):o.control.add(u)}l[e]=!0}}),i(m,function(t){o.control.add(t.item)}),o.control.renderNew()}),s.convertSelectorToFormat=r});