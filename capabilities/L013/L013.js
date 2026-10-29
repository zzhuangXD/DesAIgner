const form=document.querySelector('#booking'),status=document.querySelector('#status');
let dirty=false,submitted=false;
form.addEventListener('input',()=>{dirty=true;submitted=false;status.textContent='';status.className=''});
addEventListener('beforeunload',e=>{if(dirty&&!submitted){e.preventDefault();e.returnValue=''}});
form.addEventListener('submit',e=>{
  e.preventDefault();status.textContent='';status.className='';
  const name=form.elements.name,email=form.elements.email;
  const errors=[[name,name.value.trim()?'':'请填写称呼，例如“小林”。'],[email,email.validity.valid&&email.value.trim()?'':'请填写有效邮箱，例如 name@example.com。']];
  for(const [field,msg] of errors){document.getElementById(field.id+'-error').textContent=msg;field.setAttribute('aria-invalid',String(!!msg))}
  const first=errors.find(([,msg])=>msg);
  if(first){first[0].focus();return}
  const button=document.querySelector('#submit');button.disabled=true;button.textContent='正在演示提交…';
  window.setTimeout(()=>{submitted=true;dirty=false;button.disabled=false;button.textContent='再次演示提交';status.className='status';status.textContent=`演示完成：${name.value.trim()}，已选择${form.elements.session.value}。没有发送任何数据，也没有创建真实预约。`},450);
});
for(const mode of ['before','after'])document.querySelector('#mode-'+mode).addEventListener('click',()=>{
  for(const m of ['before','after']){document.getElementById(m).hidden=m!==mode;document.querySelector('#mode-'+m).setAttribute('aria-pressed',String(m===mode))}
  const url=new URL(location.href);url.searchParams.set('view',mode);history.replaceState(null,'',url);
});
if(new URL(location.href).searchParams.get('view')==='before')document.querySelector('#mode-before').click();
