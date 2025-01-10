export const id=2361;export const ids=[2361];export const modules={52361:(e,i,t)=>{t.r(i),t.d(i,{HaFormInteger:()=>h});var a=t(36312),s=t(66360),d=t(29818),l=t(50880);t(29906);let h=(0,a.A)([(0,d.EM)("ha-form-integer")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.P)("ha-textfield ha-slider")],key:"_input",value:void 0},{kind:"field",key:"_lastValue",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return void 0!==this.schema.valueMin&&void 0!==this.schema.valueMax&&this.schema.valueMax-this.schema.valueMin<256?s.qy` <div> ${this.label} <div class="flex"> ${this.schema.required?"":s.qy` <ha-checkbox @change="${this._handleCheckboxChange}" .checked="${void 0!==this.data}" .disabled="${this.disabled}"></ha-checkbox> `} <ha-slider labeled .value="${this._value}" .min="${this.schema.valueMin}" .max="${this.schema.valueMax}" .disabled="${this.disabled||void 0===this.data&&!this.schema.required}" @change="${this._valueChanged}"></ha-slider> </div> ${this.helper?s.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:""} </div> `:s.qy` <ha-textfield type="number" inputMode="numeric" .label="${this.label}" .helper="${this.helper}" helperPersistent .value="${void 0!==this.data?this.data:""}" .disabled="${this.disabled}" .required="${this.schema.required}" .autoValidate="${this.schema.required}" .suffix="${this.schema.description?.suffix}" .validationMessage="${this.schema.required?this.localize?.("ui.common.error_required"):void 0}" @input="${this._valueChanged}"></ha-textfield> `}},{kind:"method",key:"updated",value:function(e){e.has("schema")&&this.toggleAttribute("own-margin",!("valueMin"in this.schema&&"valueMax"in this.schema||!this.schema.required))}},{kind:"get",key:"_value",value:function(){return void 0!==this.data?this.data:this.schema.required?void 0!==this.schema.description?.suggested_value&&null!==this.schema.description?.suggested_value||this.schema.default||this.schema.valueMin||0:this.schema.valueMin||0}},{kind:"method",key:"_handleCheckboxChange",value:function(e){let i;if(e.target.checked){for(const e of[this._lastValue,this.schema.description?.suggested_value,this.schema.default,0])if(void 0!==e){i=e;break}}else this._lastValue=this.data;(0,l.r)(this,"value-changed",{value:i})}},{kind:"method",key:"_valueChanged",value:function(e){const i=e.target,t=i.value;let a;if(""!==t&&(a=parseInt(String(t))),this.data!==a)(0,l.r)(this,"value-changed",{value:a});else{const e=void 0===a?"":String(a);i.value!==e&&(i.value=e)}}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`:host([own-margin]){margin-bottom:5px}.flex{display:flex}ha-slider{flex:1}ha-textfield{display:block}`}}]}}),s.WF)},29906:(e,i,t)=>{var a=t(36312),s=t(68689),d=t(75609),l=t(66360),h=t(29818),r=t(61582);(0,a.A)([(0,h.EM)("ha-slider")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"connectedCallback",value:function(){(0,s.A)(t,"connectedCallback",this,3)([]),this.dir=r.G.document.dir}},{kind:"field",static:!0,key:"styles",value(){return[...(0,s.A)(t,"styles",this),l.AH`:host{--md-sys-color-primary:var(--primary-color);--md-sys-color-on-primary:var(--text-primary-color);--md-sys-color-outline:var(--outline-color);--md-sys-color-on-surface:var(--primary-text-color);--md-slider-handle-width:14px;--md-slider-handle-height:14px;--md-slider-state-layer-size:24px;min-width:100px;min-inline-size:100px;width:200px}`]}}]}}),d.$)}};
//# sourceMappingURL=2361.HaZxmErwwcg.js.map