let V=0,Q=null,S=`undefined`,Z=`boolean`,O=128,_=`string`,R=1,$=`Object`,T=`utf-8`,Y=`number`,a1=4,X=`function`,N=Array,U=Error,a0=FinalizationRegistry,a2=Object,W=Uint8Array,P=undefined;var H=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>V){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>V){c+=u(a[V])};for(let d=R;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==$){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return $}};if(a instanceof U){return `${a.name}: ${a.message}\n${a.stack}`};return d});var J=((a,b)=>{});var z=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_ref__h0e6ce15c6a266861(c,d,y(e))}finally{b[x++]=P}});var G=((a,b)=>{a=a>>>V;const c=F();const d=c.subarray(a/a1,a/a1+ b);const e=[];for(let a=V;a<d.length;a++){e.push(f(d[a]))};return e});var g=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var C=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__h21d05e8cdef7152e(c,d,y(e))}finally{b[x++]=P}});var M=(async(b)=>{if(a!==P)return a;if(typeof b===S){b=new URL(`homepage-2de107da1f4b782_bg.wasm`,import.meta.url)};const c=I();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var L=(b=>{if(a!==P)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var B=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h476dee5682830e02(b,c,g(d))});var r=(()=>{if(q===Q||q.byteLength===V){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===P||a===Q);var c=(a=>b[a]);var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;s=Q;q=Q;E=Q;i=Q;a.__wbindgen_start();return a});var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>V});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/a1+ R]=p(d)?V:d;r()[a/a1+ V]=!p(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/a1+ R]=p(d)?V:d;r()[a/a1+ V]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>V});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/a1+ R]=p(d)?V:d;r()[a/a1+ V]=!p(d)});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>V});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==R){b.a=V;return !0};const c=!1;return c});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new U();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,R)}});b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===_?e:P;var g=p(f)?V:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a1+ R]=h;r()[b/a1+ V]=g});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbindgen_in=((a,b)=>{const d=c(a) in c(b);return d});b.wbg.__wbindgen_error_new=((a,b)=>{const c=new U(k(a,b));return g(c)});b.wbg.__wbg_crypto_d05b68a3572bb8ca=(a=>{const b=c(a).crypto;return g(b)});b.wbg.__wbg_process_b02b3570280d0366=(a=>{const b=c(a).process;return g(b)});b.wbg.__wbg_versions_c1cb42213cedf0f5=(a=>{const b=c(a).versions;return g(b)});b.wbg.__wbg_node_43b1089f407e4ec2=(a=>{const b=c(a).node;return g(b)});b.wbg.__wbg_msCrypto_10fc94afee92bd76=(a=>{const b=c(a).msCrypto;return g(b)});b.wbg.__wbg_require_9a7e0f667ead4995=function(){return D((()=>{const a=module.require;return g(a)}),arguments)};b.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return D(((a,b)=>{c(a).randomFillSync(f(b))}),arguments)};b.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return D(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbindgen_jsval_loose_eq=((a,b)=>{const d=c(a)==c(b);return d});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?R:V):2;return d});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===Y?d:P;t()[a/8+ R]=p(e)?V:e;r()[a/a1+ V]=!p(e)});b.wbg.__wbindgen_as_number=(a=>{const b=+c(a);return b});b.wbg.__wbindgen_number_new=(a=>{const b=a;return g(b)});b.wbg.__wbg_getwithrefkey_da95c5f2892b1e93=((a,b)=>{const d=c(a)[c(b)];return g(d)});b.wbg.__wbg_set_2e973e6a06d4c5c3=((a,b,d)=>{c(a)[f(b)]=f(d)});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=G(b,c).slice();a.__wbindgen_free(b,c*a1,a1);console.error(...d)});b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return p(b)?V:g(b)});b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return D(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_93f8de4acdef6da8=function(){return D(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===V?P:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_ea32ad2506f7ae78=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Element_813f33306edae612=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_230708ae7f4baac5=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?V:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_eb21059e86b1e9f4=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_removeAttribute_0c021c98a4dc7402=function(){return D(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_f7ffa687ef977957=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return p(b)?V:g(b)});b.wbg.__wbg_location_b17760ac7977a47a=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_history_6882f83324841599=function(){return D((a=>{const b=c(a).history;return g(b)}),arguments)};b.wbg.__wbg_setchecked_50e21357d62a8ccd=((a,b)=>{c(a).checked=b!==V});b.wbg.__wbg_value_99f5294791d62576=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_setvalue_bba31de32cdbb32c=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_value_ffef403d62e3df58=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_setvalue_cbab536654d8dd52=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_state_dce1712758f75ed1=function(){return D((a=>{const b=c(a).state;return g(b)}),arguments)};b.wbg.__wbg_replaceState_05b49e34dd5c56f9=function(){return D(((a,b,d,e,f,g)=>{c(a).replaceState(c(b),k(d,e),f===V?P:k(f,g))}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_ef56f954a86c7472=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_dfffc3b2ba786fb8=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_parentNode_e3a5ee563364a613=(a=>{const b=c(a).parentNode;return p(b)?V:g(b)});b.wbg.__wbg_parentElement_45a9756dc74ff48b=(a=>{const b=c(a).parentElement;return p(b)?V:g(b)});b.wbg.__wbg_childNodes_535387effca84f4e=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_d22dbf81f92f163b=(a=>{const b=c(a).lastChild;return p(b)?V:g(b)});b.wbg.__wbg_nextSibling_87d2b32dfbf09fe3=(a=>{const b=c(a).nextSibling;return p(b)?V:g(b)});b.wbg.__wbg_setnodeValue_d1cec51282858afe=((a,b,d)=>{c(a).nodeValue=b===V?P:k(b,d)});b.wbg.__wbg_textContent_528ff517a0418a3e=((b,d)=>{const e=c(d).textContent;var f=p(e)?V:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_cloneNode_ea49a704f0699b2e=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_2be91083083caa9e=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_660924798c7e128c=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_bubbles_31126fc08276cf99=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_ae95595adf5ae83d=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_bd8a0336a042e053=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_href_a5b902312c18d121=function(){return D(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f}),arguments)};b.wbg.__wbg_pathname_d98d0a003b664ef0=function(){return D(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f}),arguments)};b.wbg.__wbg_search_40927d5af164fdfe=function(){return D(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f}),arguments)};b.wbg.__wbg_hash_163703b5971e593c=function(){return D(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f}),arguments)};b.wbg.__wbg_href_14a0154147810c9c=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_pathname_3bec400c9c042d62=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_search_6b70a3bf2ceb3f63=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_hash_6169ffe1f1446fd4=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbg_sethash_06df74e85ecce4f6=((a,b,d)=>{c(a).hash=k(b,d)});b.wbg.__wbg_new_79acf9a4da56c772=function(){return D(((a,b)=>{const c=new URL(k(a,b));return g(c)}),arguments)};b.wbg.__wbg_newwithbase_98813076a95cdc23=function(){return D(((a,b,c,d)=>{const e=new URL(k(a,b),k(c,d));return g(e)}),arguments)};b.wbg.__wbg_addEventListener_bc4a7ad4cc72c6bf=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_deae10c75ef836f8=function(){return D(((a,b,d,e,f)=>{c(a).removeEventListener(k(b,d),c(e),f!==V)}),arguments)};b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>V];return g(d)});b.wbg.__wbg_length_161c0d89c6535c1d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_3f093dd26d5569f8=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_632630b5cec17f21=(()=>{const a=new a2();return g(a)});b.wbg.__wbg_self_05040bd9523805b9=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_from_58c79ccfb68060f5=(a=>{const b=N.from(c(a));return g(b)});b.wbg.__wbg_instanceof_ArrayBuffer_9221fa854ffb71b5=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_call_67f2111acd2dfdb6=function(){return D(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_isSafeInteger_a23a66ee7c41b273=(a=>{const b=Number.isSafeInteger(c(a));return b});b.wbg.__wbg_entries_488960b196cfb6a5=(a=>{const b=a2.entries(c(a));return g(b)});b.wbg.__wbg_is_bd5dc4ae269cba1c=((a,b)=>{const d=a2.is(c(a),c(b));return d});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_buffer_b914fb8b50ebbc3e=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=((a,b,d)=>{const e=new W(c(a),b>>>V,d>>>V);return g(e)});b.wbg.__wbg_new_b1f2d6842d615181=(a=>{const b=new W(c(a));return g(b)});b.wbg.__wbg_set_7d988c98e6ced92d=((a,b,d)=>{c(a).set(c(b),d>>>V)});b.wbg.__wbg_length_21c4b0ae73cba59d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_instanceof_Uint8Array_c299a4ee232e76ba=(a=>{let b;try{b=c(a) instanceof W}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_newwithlength_0d03cef43b68a530=(a=>{const b=new W(a>>>V);return g(b)});b.wbg.__wbg_subarray_adc418253d76e2f1=((a,b,d)=>{const e=c(a).subarray(b>>>V,d>>>V);return g(e)});b.wbg.__wbg_set_961700853a212a39=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a1+ R]=g;r()[b/a1+ V]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new U(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper1064=((a,b,c)=>{const d=w(a,b,444,z);return g(d)});b.wbg.__wbindgen_closure_wrapper1160=((a,b,c)=>{const d=A(a,b,481,B);return g(d)});b.wbg.__wbindgen_closure_wrapper1212=((a,b,c)=>{const d=A(a,b,504,C);return g(d)});return b});var F=(()=>{if(E===Q||E.byteLength===V){E=new Uint32Array(a.memory.buffer)};return E});var t=(()=>{if(s===Q||s.byteLength===V){s=new Float64Array(a.memory.buffer)};return s});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===V){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=V;v.unregister(f)}}};g.original=f;v.register(g,f,f);return g});var e=(a=>{if(a<132)return;b[a]=d;d=a});var A=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=V;try{return e(c,f.b,...b)}finally{if(--f.cnt===V){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var o=((a,b,c)=>{if(c===P){const c=m.encode(a);const d=b(c.length,R)>>>V;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,R)>>>V;const f=j();let g=V;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==V){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,R)>>>V;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,R)>>>V};l=g;return e});var j=(()=>{if(i===Q||i.byteLength===V){i=new W(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>V;return h.decode(j().subarray(a,a+ b))});var y=(a=>{if(x==R)throw new U(`out of js stack`);b[--x]=a;return x});let a;const b=new N(O).fill(P);b.push(P,Q,!0,!1);let d=b.length;const h=typeof TextDecoder!==S?new TextDecoder(T,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw U(`TextDecoder not available`)}};if(typeof TextDecoder!==S){h.decode()};let i=Q;let l=V;const m=typeof TextEncoder!==S?new TextEncoder(T):{encode:()=>{throw U(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=Q;let s=Q;const v=typeof a0===S?{register:()=>{},unregister:()=>{}}:new a0(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let x=O;let E=Q;export default M;export{L as initSync}