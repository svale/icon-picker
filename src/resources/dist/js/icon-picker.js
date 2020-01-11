void 0===Craft.IconPicker&&(Craft.IconPicker={}),function(e){Craft.IconPicker.Input=Garnish.Base.extend({$container:null,$selectize:null,$spinner:null,iconData:null,preppedIconData:{},init:function(i){this.options=i;var n=this;this.loadSpriteSheets(),this.loadFonts(),this.$container=e("#"+i.inputId+"-field"),this.$selectize=this.$container.find(".icon-picker-select"),this.$spinner=this.$container.find(".spinner"),this.fixClipping(),this.$selectize.selectize({maxItems:1,maxOptions:i.settings.maxIconsShown,valueField:"value",labelField:"label",searchField:["label","description"],options:[],optgroups:[],optgroupField:"parent_id",create:!1,preload:"focus",render:{item:function(e,i){if("svg"==e.type)var n='<img src="'+e.url+'" alt="'+i(e.label)+'" />';else if("sprite"==e.type)var n='<svg viewBox="0 0 1000 1000"><use xlink:href="#'+e.url+'" /></svg>';else if("glyph"==e.type)var n='<span class="icon-picker-font font-face-'+e.name+'">'+e.url+"</span>";else if("css"==e.type)var n='<span class="icon-picker-font '+e.classes+'">'+e.url+"</span>";return'<div class="icon-picker-thumb"><div class="icon-picker-thumb-icon">'+n+"</div><span>"+i(e.label)+"</span></div>"},option:function(e,i){if("svg"==e.type)var s='<img src="'+e.url+'" alt="'+i(e.label)+'" title="'+i(e.label)+'" />';else if("sprite"==e.type)var s='<svg viewBox="0 0 1000 1000"><use xlink:href="#'+e.url+'" /></svg>';else if("glyph"==e.type)var s='<span class="icon-picker-font font-face-'+e.name+'">'+e.url+"</span>";else if("css"==e.type)var s='<span class="icon-picker-font '+e.classes+'">'+e.url+"</span>";var t;return'<div class="icon-picker-item"><div class="icon-picker-item-wrap"><div class="icon-picker-item-icon">'+s+'</div><span class="icon-picker-item-label">'+(n.options.settings.showLabels?i(e.label):"")+"</span></div></div>"}},load:function(s,t){if(n.$spinner.removeClass("hidden"),!e.isEmptyObject(n.preppedIconData))return n.$spinner.addClass("hidden"),t(n.preppedIconData);var a=n.$selectize[0].selectize,r=[],o=0;e.ajax({url:Craft.getActionUrl("icon-picker/icons/icons-for-field",{fieldId:i.fieldId}),type:"GET",error:function(){t()},success:function(i){e.each(i,(function(i,n){var s={id:o,label:i};a.addOptionGroup(s.id,s),e.each(n,(function(e,i){i.parent_id=s.id,r.push(i)})),o++})),n.preppedIconData=r,n.$spinner.addClass("hidden"),t(n.preppedIconData)}})}})},fixClipping:function(){var e=this.$container.parents(".ni_block");e.length&&(e.css({overflow:"visible"}),e.find(".ni_block_body").css({overflow:"visible"}))},loadFonts:function(){for(var i=0;i<this.options.fonts.length;i++){var n=this.options.fonts[i];if(-1==e.inArray(n.name,Craft.IconPicker.Cache.fonts))if(Craft.IconPicker.Cache.fonts.push(n.name),"local"==n.type){var s='@font-face {font-family: "'+n.name+'";src: url("'+n.url+'");font-weight: normal;font-style: normal;}.'+n.name+' {font-family: "'+n.name+'" !important;}';e("head").append('<style type="text/css">'+s+"</style>")}else"remote"==n.type&&e("head").append('<link rel="stylesheet" type="text/css" href="'+n.url+'">')}},loadSpriteSheets:function(){for(var i=0;i<this.options.spriteSheets.length;i++){var n=this.options.spriteSheets[i];-1==e.inArray(n.name,Craft.IconPicker.Cache.stylesheets)&&(Craft.IconPicker.Cache.stylesheets.push(n.name),e.get(n.url,(function(i){var s=document.createElement("div");s.innerHTML=(new XMLSerializer).serializeToString(i.documentElement),$svg=e(s).find("> svg"),$svg.attr("id","icon-picker-spritesheet-"+n.name),$svg.css("display","none").prependTo("body")})))}}})}(jQuery);
//# sourceMappingURL=icon-picker.js.map