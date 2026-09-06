(()=>{
  const ACCOUNTS_KEY='raw_code_accounts_v1';
  const SESSION_KEY='raw_code_current_user_v1';
  const $=s=>document.querySelector(s);
  const app=$('#app'), screen=$('#authScreen');
  let current=localStorage.getItem(SESSION_KEY)||'';
  const getAccounts=()=>{try{return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)||'{}')}catch{return{}}};
  const saveAccounts=x=>localStorage.setItem(ACCOUNTS_KEY,JSON.stringify(x));
  const normalize=x=>x.trim().toLowerCase();
  async function hash(value){const data=new TextEncoder().encode(value);const buf=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('');}
  function setUser(name){current=name;localStorage.setItem(SESSION_KEY,name);window.RAW_AUTH_USER=name;screen.classList.add('hidden');app.classList.remove('locked');const u=$('#currentUser');if(u)u.textContent=name;}
  function show(view){$('#loginView').hidden=view!=='login';$('#registerView').hidden=view!=='register';$('#loginError').textContent='';$('#registerError').textContent='';}
  if(current){window.RAW_AUTH_USER=current;screen.classList.add('hidden');app.classList.remove('locked');}
  else app.classList.add('locked');
  $('#showRegister').onclick=()=>show('register');
  $('#showLogin').onclick=()=>show('login');
  document.querySelectorAll('[data-toggle-password]').forEach(b=>b.onclick=()=>{const input=$('#'+b.dataset.togglePassword);input.type=input.type==='password'?'text':'password';b.textContent=input.type==='password'?'Показать':'Скрыть';});
  $('#loginForm').onsubmit=async e=>{e.preventDefault();const username=normalize($('#loginUsername').value), password=$('#loginPassword').value;const accounts=getAccounts();if(!accounts[username]){$('#loginError').textContent='Такого аккаунта нет. Проверь логин или зарегистрируйся.';return;}if(accounts[username].password!==await hash(password)){$('#loginError').textContent='Неверный пароль.';return;}setUser(username);location.reload();};
  $('#registerForm').onsubmit=async e=>{e.preventDefault();const username=normalize($('#registerUsername').value), password=$('#registerPassword').value, p2=$('#registerPassword2').value, accounts=getAccounts();if(!/^[a-z0-9_-]{3,24}$/i.test(username)){$('#registerError').textContent='Логин: 3–24 символа, только буквы, цифры, _ или -.';return;}if(accounts[username]){$('#registerError').textContent='Этот логин уже занят.';return;}if(password.length<6){$('#registerError').textContent='Пароль должен содержать минимум 6 символов.';return;}if(password!==p2){$('#registerError').textContent='Пароли не совпадают.';return;}accounts[username]={password:await hash(password),createdAt:new Date().toISOString()};saveAccounts(accounts);$('#loginUsername').value=username;$('#loginPassword').value='';show('login');$('#loginError').textContent='Аккаунт создан. Теперь войди с этим логином и паролем.';};
  $('#logoutBtn').onclick=()=>{localStorage.removeItem(SESSION_KEY);location.reload();};
  window.RAW_AUTH={logout:()=>{localStorage.removeItem(SESSION_KEY);location.reload();}, user:()=>current};
})();
