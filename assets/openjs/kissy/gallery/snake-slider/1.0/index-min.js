/*! caja-kissy  */
KISSY.add("openjs/kissy/gallery/snake-slider/1.0/index",function(n,t){function e(e){function r(e,r){this.mod=r;var i,o,a,s=cajaAFTB.untame(e);if(s.container=n.get(s.container,r),i=s.slices)for(a=i.length;--a>-1;)(o=i[a])&&(o.sliceNode=n.get(o.sliceNode,r),o.indicatorNode=n.get(o.indicatorNode,r),o.lazyRenderNode=n.get(o.lazyRenderNode,r));this.inner=new t(s)}function i(e){if(e&&"object"==typeof e&&e.constructor!=t.CHILD_WIDGET){try{e=cajaAFTB.untame(e)}catch(r){}var i=e.sliceNode;i&&(e.sliceNode="string"==typeof i?n.get(i,this.mod):i),i=e.indicatorNode,i&&(e.indicatorNode="string"==typeof i?n.get(i,this.mod):i),i=e.lazyRenderNode,i&&(e.lazyRenderNode="string"==typeof i?n.get(i,this.mod):i)}return e}var o;for(n.augment(r,{switchTo:function(n){this.inner.switchTo(n)},nextSlice:function(n){return this.inner.nextSlice(n)},previousSlice:function(n){return this.inner.previousSlice(n)},getActiveSlice:function(){return this.inner.getActiveSlice()},getSliceByIndex:function(n){return this.inner.getSliceByIndex(n)},getSliceById:function(n){return this.inner.getSliceById(n)},bindSliceEvent:function(n,t,e){var r=this;this.inner.bindSliceEvent(n,function(n){t.call(cajaAFTB.untame(e)||r,n)})},bindIndicatorEvent:function(n,t,e){var r=this;this.inner.bindIndicatorEvent(n,function(n){t.call(cajaAFTB.untame(e)||r,n)})},startAutoSwitch:function(n){this.inner.startAutoSwitch(n)},appendSlice:function(n){return this.inner.appendSlice(i(n))},insertSlice:function(n,t){return this.inner.insertSlice(i(n),t)},removeSlice:function(n){return this.inner.removeSlice(n)},clearSlices:function(){this.inner.clearSlices()},stopAutoSwitch:function(){this.inner.stopAutoSwitch()},pauseAutoSwitch:function(){this.inner.pauseAutoSwitch()},resumeAutoSwitch:function(){this.inner.resumeAutoSwitch()},isAutoSwitchStarted:function(){return this.inner.isAutoSwitchStarted()},on:function(n,t,r){var i=this;this.inner.on(n,function(n){t.call(cajaAFTB.untame(r)||i,e.tame(n))})},get:function(n){var t=this.inner.get(n);return t.hasOwnProperty("nodeType")?cajaAFTB.tameNode(t,!0):e.tame(t)}}),e.markCtor(r),methods=["switchTo","nextSlice","previousSlice","getActiveSlice","getSliceByIndex","getSliceById","bindSliceEvent","bindIndicatorEvent","startAutoSwitch","appendSlice","insertSlice","removeSlice","clearSlices","stopAutoSwitch","pauseAutoSwitch","resumeAutoSwitch","isAutoSwitchStarted","on","get"],o,o=methods.length;--o>-1;)e.grantMethod(r,methods[o]);var a=t.CHILD_WIDGET,s=a.bindSliceEvent,u=a.bindIndicatorEvent,c=a.appendTo,l=a.insertTo,d=a.get;for(a.bindSliceEvent=function(n,t,e){var r=this;s.call(this,n,function(n){t.call(cajaAFTB.untame(e)||r,n)})},a.bindIndicatorEvent=function(n,t,e){var r=this;u.call(this,n,function(n){t.call(cajaAFTB.untame(e)||r,n)})},a.appendTo=function(n){return e.tame(c.call(this,cajaAFTB.untame(n)))},a.insertTo=function(n,t){return e.tame(l.call(this,cajaAFTB.untame(n),t))},a.get=function(n){var t=d.call(this,n);return t.hasOwnProperty("nodeType")?cajaAFTB.tameNode(t,!0):e.tame(t)},e.markCtor(a),methods=["bindSliceEvent","bindIndicatorEvent","appendTo","insertTo","activate","deactivate","displayActiveSliceStyle","displayInactiveSliceStyle","displayActiveIndicatorStyle","displayInactiveIndicatorStyle","renderLazily","remove","on","get"],o,o=methods.length;--o>-1;)e.grantMethod(a,methods[o]);return function(n){var t={SnakeSlider:e.markFunction(function(){var t=cajaAFTB.untame(arguments[0]);return new r(t,n.mod)}),kissy:!0};return t}}return e},{requires:["gallery/snake-slider/1.0/index"]});