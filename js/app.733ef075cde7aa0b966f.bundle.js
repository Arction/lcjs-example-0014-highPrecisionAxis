(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,AxisTickStrategies:i,Themes:r}=s,d=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({defaultAxisX:{type:"linear-highPrecision"}}).setTitle("High precision Axis XY (1 second high-resolution data)").setPadding({right:40}),o=d.getDefaultAxisX().setTickStrategy(i.Time,(e=>e)),h=d.getDefaultAxisY(),u=d.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setCursorInterpolationEnabled(!0),c=d.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setCursorInterpolationEnabled(!0);d.addLegendBox().add(d).setAutoDispose({type:"max-width",maxWidth:.3}),fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/0014/data.json").then((e=>e.json())).then((e=>{u.add(e.trace0),c.add(e.trace1),o.fit(!1),setTimeout((()=>{o.setInterval({start:436.72461163324084,end:436.89107794426303,animate:1e3}),h.setInterval({start:87.52113652316002,end:89.79482263187646,animate:1e3}),setTimeout((()=>{o.fit(2e3),h.fit(2e3)}),2500)}),1500)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);