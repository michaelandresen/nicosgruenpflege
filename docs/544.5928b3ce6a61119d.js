"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[544],{4544:(Pn,he,d)=>{d.r(he),d.d(he,{KontaktModule:()=>Tn});var p=d(9808),fe=d(9736),o=d(1223),_t=d(2076),yt=d(8306),vt=d(4742),Ct=d(8421),Vt=d(7669),At=d(5403),Mt=d(3268),bt=d(1810),Et=d(4004);let pe=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),y=(()=>{class n extends pe{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),wt={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},Nt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends pe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ft(){const n=(0,p.q)()?(0,p.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Nt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([wt]),o.qOj]}),n})();function g(n){return null==n||0===n.length}function me(n){return null!=n&&"number"==typeof n.length}const l=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators"),St=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class H{static min(t){return function _e(n){return t=>{if(g(t.value)||g(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function ye(n){return t=>{if(g(t.value)||g(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function ve(n){return g(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function Ce(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ve(n){return g(n.value)||St.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ae(n){return t=>g(t.value)||!me(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Me(n){return t=>me(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function be(n){if(!n)return A;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(g(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Ne(t)}static composeAsync(t){return Se(t)}}function A(n){return null}function De(n){return null!=n}function Ee(n){const t=(0,o.QGY)(n)?(0,_t.D)(n):n;return(0,o.CqO)(t),t}function Oe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function we(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function Gt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Ne(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return Oe(we(e,t))}}function j(n){return null!=n?Ne(Fe(n)):null}function Se(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return function Dt(...n){const t=(0,Vt.jO)(n),{args:e,keys:r}=(0,vt.D)(n),i=new yt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let v=a,V=a;for(let U=0;U<a;U++){let de=!1;(0,Ct.Xf)(e[U]).subscribe(new At.Q(s,Bn=>{de||(de=!0,V--),c[U]=Bn},()=>v--,void 0,()=>{(!v||!de)&&(V||s.next(r?(0,bt.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Mt.Z)(t)):i}(we(e,t).map(Ee)).pipe((0,Et.U)(Oe))}}function q(n){return null!=n?Se(Fe(n)):null}function Ge(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function xe(n){return n._rawValidators}function Te(n){return n._rawAsyncValidators}function L(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function Be(n,t){const e=L(t);return L(n).forEach(i=>{w(e,i)||e.push(i)}),e}function Pe(n,t){return L(t).filter(e=>!w(n,e))}class ke{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=j(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class _ extends ke{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class u extends ke{get formDirective(){return null}get path(){return null}}class Ie{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let $=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(_,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Re=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function M(n,t){z(n,t),t.valueAccessor.writeValue(n.value),function Ut(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&He(n,t)})}(n,t),function jt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Ht(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&He(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Rt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function S(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),x(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function G(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function z(n,t){const e=xe(n);null!==t.validator?n.setValidators(Ge(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Te(n);null!==t.asyncValidator?n.setAsyncValidators(Ge(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();G(t._rawValidators,i),G(t._rawAsyncValidators,i)}function x(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=xe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Te(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return G(t._rawValidators,r),G(t._rawAsyncValidators,r),e}function He(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function W(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function J(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function $t(n){return Object.getPrototypeOf(n.constructor)===y}(s)?r=s:i=s}),i||r||e||null}function T(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const b="VALID",B="INVALID",C="PENDING",D="DISABLED";function K(n){return(ee(n)?n.validators:n)||null}function Le(n){return Array.isArray(n)?j(n):n||null}function X(n,t){return(ee(t)?t.asyncValidators:n)||null}function $e(n){return Array.isArray(n)?q(n):n||null}function ee(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const Ye=n=>n instanceof f,te=n=>n instanceof P;function Ze(n){return Ye(n)?n.value:n.getRawValue()}function ze(n,t){const e=te(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function We(n,t){te(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class ne{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Le(this._rawValidators),this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===B}get pending(){return this.status==C}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Le(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=$e(t)}addValidators(t){this.setValidators(Be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Pe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Pe(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Ee(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Yt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=te(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:(n=>n instanceof zt)(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(B)?B:b}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ee(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class f extends ne{constructor(t=null,e,r){super(K(e),X(r,e)),this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){T(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){T(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class P extends ne{constructor(t,e,r){super(K(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){We(this,t),Object.keys(t).forEach(r=>{ze(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Ze(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class zt extends ne{constructor(t,e,r){super(K(e),X(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){We(this,t),t.forEach((r,i)=>{ze(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Ze(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const oe=new o.OlP("NgModelWithFormControlWarning"),nn={provide:_,useExisting:(0,o.Gpc)(()=>k)};let k=(()=>{class n extends _{constructor(e,r,i,s){super(),this._ngModelWarningConfig=s,this.update=new o.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=J(0,i)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&S(r,this,!1),M(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}W(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&S(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(m,10),o.Y36(h,10),o.Y36(oe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o._Bn([nn]),o.qOj,o.TTD]}),n})();const rn={provide:u,useExisting:(0,o.Gpc)(()=>I)};let I=(()=>{class n extends u{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(x(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return M(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){S(e.control||null,e,!1),T(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function qe(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(S(r||null,e),Ye(i)&&(M(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function je(n,t){z(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function qt(n,t){return x(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){z(this.form,this),this._oldForm&&x(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([rn]),o.qOj,o.TTD]}),n})();const an={provide:_,useExisting:(0,o.Gpc)(()=>ae)};let ae=(()=>{class n extends _{constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=J(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),W(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function N(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(m,10),o.Y36(h,10),o.Y36(oe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([an]),o.qOj,o.TTD]}),n})(),An=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[nt]]}),n})(),Mn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:oe,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[An]}),n})();var bn=d(1135);function Dn(n,t){1&n&&(o.TgZ(0,"span",5),o._uU(1,"*"),o.qZA())}function En(n,t){if(1&n&&o._UZ(0,"input",6),2&n){const e=o.oxw(2);o.Q6J("name",e.name)("formControl",e.control)("size",e.size)}}function On(n,t){if(1&n&&o._UZ(0,"textarea",7),2&n){const e=o.oxw(2);o.Q6J("name",e.name)("formControl",e.control)("cols",e.size||null)("rows",e.rows)}}function wn(n,t){if(1&n&&(o.TgZ(0,"label"),o.Hsn(1),o.YNc(2,Dn,2,0,"span",1),o._UZ(3,"br"),o.ynx(4,2),o.YNc(5,En,1,3,"input",3),o.YNc(6,On,1,4,"textarea",4),o.BQk(),o.qZA()),2&n){const e=t.ngIf;o.xp6(2),o.Q6J("ngIf",e.required),o.xp6(2),o.Q6J("ngSwitch",e.type),o.xp6(1),o.Q6J("ngSwitchCase","input"),o.xp6(1),o.Q6J("ngSwitchCase","textarea")}}const Fn=["*"];let Nn=(()=>{class n{constructor(e){this.controlContainer=e,this.size="20",this.rows="50",this.viewModel$=new bn.X({required:!1,type:"input"}),this.deferredControlValueAccessorCalls=[]}set formControlDirective(e){console.log("setFormControlDirective:",e),this._formControlDirective=e,this.deferredControlValueAccessorCalls.forEach(r=>r(this._formControlDirective.valueAccessor)),this.deferredControlValueAccessorCalls=[]}set type(e){this.viewModel$.next(Object.assign(Object.assign({},this.viewModel$.value),{type:e}))}get control(){let e;return e=this.formControl?this.formControl:this.controlContainer.control.get(this.formControlName),e}ngAfterViewInit(){const e=this.control;Promise.resolve().then(()=>{this.viewModel$.next(Object.assign(Object.assign({},this.viewModel$.value),{required:e.hasValidator(H.required)}))}),this.name||(this.name=this.formControlName)}writeValue(e){var r;this._formControlDirective?null===(r=this._formControlDirective.valueAccessor)||void 0===r||r.writeValue(e):this.deferredControlValueAccessorCalls.push(i=>i.writeValue(e))}registerOnChange(e){var r;this._formControlDirective?null===(r=this._formControlDirective.valueAccessor)||void 0===r||r.registerOnChange(e):this.deferredControlValueAccessorCalls.push(i=>i.registerOnChange(e))}registerOnTouched(e){var r;this._formControlDirective?null===(r=this._formControlDirective.valueAccessor)||void 0===r||r.registerOnTouched(e):this.deferredControlValueAccessorCalls.push(i=>i.registerOnTouched(e))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u))},n.\u0275cmp=o.Xpm({type:n,selectors:[["nicosgruenpflege-labeled-input"]],viewQuery:function(e,r){if(1&e&&o.Gf(k,5),2&e){let i;o.iGM(i=o.CRH())&&(r.formControlDirective=i.first)}},inputs:{label:"label",name:"name",size:"size",rows:"rows",formControlName:"formControlName",formControl:"formControl",type:"type"},features:[o._Bn([{provide:h,multi:!0,useExisting:n}])],ngContentSelectors:Fn,decls:2,vars:3,consts:[[4,"ngIf"],["class","mandatory",4,"ngIf"],[3,"ngSwitch"],["type","text",3,"name","formControl","size",4,"ngSwitchCase"],[3,"name","formControl","cols","rows",4,"ngSwitchCase"],[1,"mandatory"],["type","text",3,"name","formControl","size"],[3,"name","formControl","cols","rows"]],template:function(e,r){1&e&&(o.F$t(),o.YNc(0,wn,7,4,"label",0),o.ALo(1,"async")),2&e&&o.Q6J("ngIf",o.lcZ(1,1,r.viewModel$))},directives:[p.O5,p.RF,p.n9,O,$,k],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:block}form.ng-submitted   .ng-invalid[_nghost-%COMP%]   label[_ngcontent-%COMP%], form.ng-submitted   .ng-invalid   [_nghost-%COMP%]   label[_ngcontent-%COMP%]{color:red;font-weight:700}form.ng-submitted   .ng-invalid[_nghost-%COMP%]   input[_ngcontent-%COMP%], form.ng-submitted   .ng-invalid   [_nghost-%COMP%]   input[_ngcontent-%COMP%], form.ng-submitted   .ng-invalid[_nghost-%COMP%]   textarea[_ngcontent-%COMP%], form.ng-submitted   .ng-invalid   [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border:solid red 1px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),n})();const Sn=["frm"];let Gn=(()=>{class n{constructor(e){this.form=new P({name:new f(void 0,H.required),strasse:new f,email:new f,plz:new f,ort:new f,telefon:new f,nachricht:new f(void 0,H.required)}),this.document=e}ngAfterViewInit(){console.log("formElement:",this.formElement)}submit(){this.form.invalid?this.scrollToFirstInvalidElement():this.sendEmail()}scrollToFirstInvalidElement(){const e=this.formElement.nativeElement.querySelector(".ng-invalid");e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&e.focus()}sendEmail(){const r=Object.entries(this.form.value).filter(([a,c])=>!!c&&"nachricht"!==a).map(([a,c])=>`${a.substring(0,1).toUpperCase()}${a.substring(1)}: ${c}`).join("\r\n"),i=encodeURIComponent(`${r}\r\n-------------------------\r\n${this.form.value.nachricht}`),s=document.createElement("a");s.href=`mailto:nico.andresen@gmx.de?subject=Kontaktanfrage&body=${i}`,s.click()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(p.K0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["nicosgruenpflege-kontakt"]],viewQuery:function(e,r){if(1&e&&o.Gf(Sn,5),2&e){let i;o.iGM(i=o.CRH())&&(r.formElement=i.first)}},decls:25,vars:1,consts:[["autocomplete","on",3,"formGroup","ngSubmit"],["frm",""],["formControlName","name"],["formControlName","strasse"],[1,"postal-code-city"],["size","5","formControlName","plz","name","postal-code",1,"postal-code"],["formControlName","ort",1,"city"],["formControlName","email"],["formControlName","telefon"],["formControlName","nachricht","type","textarea","rows","10"],[1,"submit"]],template:function(e,r){1&e&&(o.TgZ(0,"h2"),o._uU(1,"Sie sind interessiert an einem individuellen Angebot?"),o.qZA(),o.TgZ(2,"p"),o._uU(3," Dann informieren Sie sich kostenlos und unverbindlich. F\xfcllen Sie einfach dieses Kontaktformular aus. Ich werde mich umgehend bei Ihnen melden.\n"),o.qZA(),o._UZ(4,"br"),o.TgZ(5,"form",0,1),o.NdJ("ngSubmit",function(){return r.submit()}),o.TgZ(7,"nicosgruenpflege-labeled-input",2),o._uU(8," Vor- und Nachname "),o.qZA(),o.TgZ(9,"nicosgruenpflege-labeled-input",3),o._uU(10," Stra\xdfe und Hausnummer "),o.qZA(),o.TgZ(11,"div",4),o.TgZ(12,"nicosgruenpflege-labeled-input",5),o._uU(13," PLZ "),o.qZA(),o.TgZ(14,"nicosgruenpflege-labeled-input",6),o._uU(15," Ort "),o.qZA(),o.qZA(),o.TgZ(16,"nicosgruenpflege-labeled-input",7),o._uU(17," E-Mail "),o.qZA(),o.TgZ(18,"nicosgruenpflege-labeled-input",8),o._uU(19," Telefon "),o.qZA(),o.TgZ(20,"nicosgruenpflege-labeled-input",9),o._uU(21," Nachricht "),o.qZA(),o.TgZ(22,"div",10),o.TgZ(23,"button"),o._uU(24,"E-Mail senden"),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("formGroup",r.form))},directives:[et,Re,I,Nn,$,ae],styles:["nicosgruenpflege-labeled-input[_ngcontent-%COMP%]{padding-bottom:.5em}nicosgruenpflege-labeled-input[_ngcontent-%COMP%]:not(.postal-code){width:100%;max-width:500px}.submit[_ngcontent-%COMP%]{max-width:500px;text-align:center}.postal-code-city[_ngcontent-%COMP%]{max-width:500px;display:flex;grid-gap:10px;gap:10px}.postal-code[_ngcontent-%COMP%]{flex:0 0 auto}.city[_ngcontent-%COMP%]{flex:1}"],changeDetection:0}),n})(),xn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[fe.Bz.forChild([{path:"",component:Gn}])],fe.Bz]}),n})(),Tn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[p.ez,Mn,xn]]}),n})()}}]);