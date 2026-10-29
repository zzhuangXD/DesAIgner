const data=window.DESIGN_DATA;
const colorList=document.querySelector('#swatches'),frame=document.querySelector('#source-frame');
let current='accent';
const selectors={paper:'body',surface:'.bookshop-card',ink:'h1,h3',muted:'.bookshop-copy,.bookshop-kicker',line:'.bookshop-nav,.bookshop-shelf',accent:'.bookshop-button,.bookshop-book','on-accent':'.bookshop-button',sage:'.bookshop-book',success:'',error:''};
function highlight(){
 try{const doc=frame.contentDocument;if(!doc)return;doc.querySelectorAll('[data-case-outline]').forEach(el=>{el.style.removeProperty('outline');el.style.removeProperty('outline-offset');el.removeAttribute('data-case-outline')});
 const sel=selectors[current];if(sel)doc.querySelectorAll(sel).forEach(el=>{el.style.outline='2px dashed #9d452f';el.style.outlineOffset='4px';el.setAttribute('data-case-outline','true')})}catch{}
}
function pick(name){
 current=name;const c=data.colors.find(x=>x.name===name);document.querySelector('#color-label').textContent=c.label;document.querySelector('#color-role').textContent=c.role;document.querySelector('#color-code').textContent='--'+c.name+' / '+c.value;document.querySelector('#color-source').textContent=c.source;
 document.querySelector('#color-evidence').textContent=c.source+'\n--'+c.name+': '+c.value+';\n\n'+(name==='success'||name==='error'?'仅在源码定义，原始首页无对应部件。':'左侧虚线描边标出与该角色相关的部件。');
 for(const b of colorList.children)b.setAttribute('aria-pressed',String(b.dataset.token===name));highlight();
}
for(const c of data.colors){const b=document.createElement('button');b.type='button';b.className='swatch';b.dataset.token=c.name;b.setAttribute('aria-label',c.label+'，'+c.value);b.setAttribute('aria-pressed','false');const swatch=document.createElement('span');swatch.className='swatch-color';swatch.style.background=c.value;swatch.setAttribute('aria-hidden','true');const label=document.createElement('span');label.className='swatch-name';label.textContent=c.label;b.append(swatch,label);b.addEventListener('click',()=>pick(c.name));colorList.append(b)}
frame.addEventListener('load',highlight);pick('accent');
for(const token of data.tokens.filter(x=>x.name.startsWith('space-'))){const el=document.createElement('div');el.className='space-unit';const bar=document.createElement('i');bar.style.height=token.value;const label=document.createElement('span');label.textContent=token.value;el.append(bar,label);document.querySelector('#spacing').append(el)}
for(const button of document.querySelectorAll('[data-view]'))button.addEventListener('click',()=>{
 for(const id of ['colors','type','reuse'])document.getElementById(id).hidden=id!==button.dataset.view;
 for(const b of document.querySelectorAll('[data-view]'))b.setAttribute('aria-pressed',String(b===button));
 const url=new URL(location.href);url.searchParams.set('view',button.dataset.view);history.replaceState(null,'',url);
});
const first=new URL(location.href).searchParams.get('view');if(['colors','type','reuse'].includes(first))document.querySelector('[data-view="'+first+'"]').click();
document.querySelector('#event-button').addEventListener('click',e=>{const selected=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(selected));e.currentTarget.textContent=selected?'已标记 · 再点可取消':'标记为想参加';document.querySelector('#event-status').textContent=selected?'本页已标记。没有创建真实预约。':'已取消标记。没有保存或发送数据。'});
