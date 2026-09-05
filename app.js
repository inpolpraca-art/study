(()=>{
const DATA=window.COURSE_DATA;
if(!DATA||!Array.isArray(DATA.lessons)||DATA.lessons.length!==30){document.body.insertAdjacentHTML('afterbegin','<div class="fatal">Не загружены 30 уроков. Проверь course-data.js.</div>');return;}
const lessons=DATA.lessons, catalog=DATA.catalog||{}, resources=DATA.resources||[], phases=DATA.phases||[];
const KEY='raw_code_teacher_v6', LABKEY='raw_lab_teacher_v6';
let state=(()=>{try{return {...{currentDay:1,completed:[],cat:'HTML',catalogOpen:true,daysOpen:true}, ...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return{currentDay:1,completed:[],cat:'HTML',catalogOpen:true,daysOpen:true}}})();
let current=state.currentDay||1;
let lessonStep=0;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function save(){localStorage.setItem(KEY,JSON.stringify(state));}
function update(){const n=state.completed.length,p=n/30*100;$('#progressText').textContent=Math.round(p)+'%';$('#progressBar').style.width=p+'%';$('#progressSub').textContent=`${n} из 30 дней`;}
function renderNav(){$('#dayNav').innerHTML=lessons.map(l=>`<button class="day-link ${current===l.day?'active':''} ${state.completed.includes(l.day)?'done':''}" data-day="${l.day}"><span class="day-num">${String(l.day).padStart(2,'0')}</span><span class="day-link-title">Day ${String(l.day).padStart(2,'0')} · ${esc(l.title)}</span></button>`).join('');}
function renderDays(){$('#dayGrid').innerHTML=lessons.map(l=>`<button class="day-card" data-day="${l.day}"><div class="day-card-top"><span class="day-card-num">DAY ${String(l.day).padStart(2,'0')}</span><span class="day-card-status">${state.completed.includes(l.day)?'✓ ГОТОВО':'УРОК'}</span></div><h3>${esc(l.title)}</h3><p>${esc(l.goal)}</p><small>${(l.microsteps||[]).length} микро-шагов · ${esc(l.duration||'≈ 45–60 минут')}</small></button>`).join('');}
function renderRoadmap(){$('#roadmapGrid').innerHTML=lessons.map(l=>`<button class="roadmap-item" data-day="${l.day}"><strong>${String(l.day).padStart(2,'0')}</strong><b>${esc(l.title)}</b></button>`).join('');$('#phaseGrid').innerHTML=phases.map(p=>`<article class="phase-card"><b>${esc(p.name)}</b><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></article>`).join('');}
function renderCatalog(){const q=($('#catalogSearch').value||'').toLowerCase().trim();const arr=(catalog[state.cat]||[]).filter(x=>x.join(' ').toLowerCase().includes(q));$('#catalogList').innerHTML=arr.length?arr.map(x=>`<article class="catalog-item"><div class="catalog-command"><code>${esc(x[0])}</code></div><div class="catalog-info"><p><b>Что означает:</b> ${esc(x[1])}</p><p><b>Когда использовать:</b> ${esc(x[2])}</p><p><b>Как вставить:</b> ${esc(x[4])}</p><div class="catalog-example"><b>Пример:</b><pre>${esc(x[3])}</pre></div><p><b>Типичная ошибка / совет:</b> ${esc(x[5])}</p></div></article>`).join(''):'<div class="empty">Ничего не найдено.</div>';$$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.cat===state.cat));}
function renderResources(){$('#resourcesGrid').innerHTML=resources.map(x=>`<a class="resource" href="${esc(x.url||x[2]||'#')}" target="_blank" rel="noopener"><b>${esc(x.title||x[0])}</b><span>${esc(x.desc||x[1])}</span></a>`).join('');}
function loadCombo(l){const c=l.combo;if(!c)return;$('#labHtml').value=c.html||'';$('#labCss').value=c.css||'';$('#labJs').value=c.js||'';saveLab();runLab();document.querySelector('#lab').scrollIntoView({behavior:'smooth'});}
function stepCard(s,i){return `<article class="micro-step"><div class="micro-head"><span>ШАГ ${String(i+1).padStart(2,'0')}</span><b>${esc(s.area)}</b></div><h4>${esc(s.instruction)}</h4><div class="step-meta"><div><b>Где пишем</b><span>${esc(s.where)}</span></div><div><b>Что именно набрать</b><code>${esc(s.code)}</code></div></div><div class="step-explain"><div><b>Что увидишь</b><p>${esc(s.result)}</p></div><div><b>Как это связано</b><p>${esc(s.connect)}</p></div></div></article>`;}
function getVariants(l){
  const t=((l.title||'')+' '+(l.tag||'')).toLowerCase();
  if(t.includes('css')){
    if(t.includes('фото')||t.includes('hero')) return [
      {name:'Фон-фото',desc:'Кинематографичный Hero с фотографией.',code:"background-image: linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('PHOTO_URL');\nbackground-size: cover;\nbackground-position: center;",note:'Подходит для Hero, баннера и большой секции.'},
      {name:'Простой фон',desc:'Спокойный однотонный фон без фотографии.',code:'background: #f4f1ea;\ncolor: #202225;',note:'Подходит для About, Menu и обычных секций.'}
    ];
    if(t.includes('grid')||t.includes('menu')||t.includes('gallery')) return [
      {name:'Grid',desc:'Карточки или фото ровной сеткой.',code:'display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 20px;',note:'Лучше, когда элементы образуют сетку.'},
      {name:'Flexbox',desc:'Элементы идут в ряд и легко выравниваются.',code:'display: flex;\ngap: 20px;\nalign-items: center;',note:'Удобно для Header, кнопок и простых рядов.'}
    ];
    return [
      {name:'Светлая секция',desc:'Светлый блок для спокойного контраста.',code:'background: #f4f1ea;\ncolor: #202225;',note:'Хорошо для текста, меню и About.'},
      {name:'Тёмная секция',desc:'Глубокий фон для контрастного блока.',code:'background: #171a1d;\ncolor: #f1eee8;',note:'Хорошо для Hero, Footer и акцентных секций.'}
    ];
  }
  if(t.includes('javascript')||t.includes('js:')){
    if(t.includes('форма')) return [
      {name:'Проверка формы',desc:'Показываем ошибку, если поле пустое.',code:"if(!input.value.trim()){\n  message.textContent = 'Заполни поле';\n}",note:'Выбирай, если задача — проверить ввод.'},
      {name:'Успешная отправка',desc:'После правильного ввода показываем сообщение.',code:"message.textContent = 'Спасибо! Форма отправлена';",note:'Выбирай после того, как проверка уже работает.'}
    ];
    if(t.includes('меню')) return [
      {name:'Открыть / закрыть',desc:'Кнопка переключает класс у меню.',code:"menu.classList.toggle('open');",note:'Самый простой вариант мобильного меню.'},
      {name:'Открыть и закрыть отдельно',desc:'Два действия для более строгого контроля.',code:"menu.classList.add('open');\nmenu.classList.remove('open');",note:'Полезно, когда нужны разные кнопки.'}
    ];
    return [
      {name:'Клик → изменить текст',desc:'JS реагирует на действие пользователя.',code:"button.addEventListener('click', () => {\n  title.textContent = 'Готово!';\n});",note:'Выбирай, когда нужно простое действие по клику.'},
      {name:'Клик → изменить класс',desc:'JS передаёт состояние CSS через classList.',code:"button.addEventListener('click', () => {\n  box.classList.toggle('active');\n});",note:'Лучше, когда внешний вид должен меняться через CSS.'}
    ];
  }
  return [];
}
function variantsBlock(l){const v=getVariants(l);if(!v.length)return '';return `<section class="lesson-block choice-block"><div class="block-kicker">03 · ВЫБЕРИ ВАРИАНТ</div><h3>Не всё нужно делать одинаково</h3><p class="muted">Выбери один способ для сегодняшней задачи. Потом можешь вернуться и попробовать второй.</p><div class="choice-grid">${v.map((x,i)=>`<button class="choice-card ${i===0?'selected':''}" data-choice="${i}"><span>ВАРИАНТ ${i+1}</span><strong>${esc(x.name)}</strong><em>${esc(x.desc)}</em><code>${esc(x.code)}</code><small>${esc(x.note)}</small></button>`).join('')}</div><div class="choice-result" id="choiceResult">Выбран вариант 1: ${esc(v[0].name)}. Сначала попробуй его руками.</div></section>`;}

function openLesson(day){
  const l=lessons.find(x=>x.day===day); if(!l)return;
  current=day; lessonStep=0; state.currentDay=day; save(); update(); renderNav();
  $('#lessonDay').textContent=`DAY ${String(day).padStart(2,'0')} · ${l.project||l.tag||'Урок'}`;
  $('#lessonTitle').textContent=l.title;
  $('#lessonGoal').textContent=l.goal||l.desc||'';
  $('#lessonProgressBar').style.width=state.completed.includes(day)?'100%':'0%';
  const steps=l.microsteps||[];
  const order=steps.map((x,i)=>`<button class="order-item ${i===0?'active':''}" data-step="${i}"><b>${i+1}</b><span><strong>${esc(x.area)}</strong>${esc(x.instruction)}</span></button>`).join('');
  $('#lessonContent').innerHTML=`
    <section class="lesson-compact-head">
      <div class="lesson-target"><b>ЦЕЛЬ</b><span>${esc(l.goal||l.desc||'Собрать сегодняшний фрагмент сайта.')}</span></div>
      <div class="lesson-rule"><b>ПОРЯДОК</b><span>1. Написать → 2. Сохранить → 3. Посмотреть → 4. Связать → 5. Повторить</span></div>
    </section>
    <section class="lesson-block order-block">
      <div class="block-kicker">01 · ПОРЯДОК ДЕЙСТВИЙ</div>
      <h3>Иди сверху вниз. Не перескакивай.</h3>
      <div class="order-list" id="orderList">${order}</div>
    </section>
    <section class="lesson-block current-step-block">
      <div class="step-counter" id="stepCounter"></div>
      <div id="currentStep"></div>
      <div class="step-nav"><button class="ghost" id="stepPrev">← Назад</button><button class="primary" id="stepNext">Следующий шаг →</button></div>
    </section>
    ${variantsBlock(l)}
    <section class="lesson-block result-block">
      <div class="block-kicker">03 · РЕЗУЛЬТАТ</div>
      <h3>Что должно быть после всего урока</h3>
      <p>${esc(l.expected||'Открой страницу в Chrome и проверь результат.')}</p>
      <ul class="result-list">${(l.concepts||[]).slice(0,5).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    </section>
    <section class="lesson-block combine-block">
      <div class="block-kicker">04 · СВЯЗЫВАЕМ</div>
      <h3>${esc(l.combination_title||'Как части работают вместе')}</h3>
      <div class="chain-simple">
        <div><b>HTML</b><span>создаёт блок</span></div><i>→</i>
        <div><b>CSS</b><span>задаёт размер, фон, отступы, расположение</span></div><i>→</i>
        <div><b>JS</b><span>добавляет действие</span></div>
      </div>
      <p>${esc(l.combination_explain||l.connect||'Сегодняшний результат остаётся в том же проекте и становится основой следующего шага.')}</p>
      <div class="combine-actions"><button class="primary" id="loadCombo">▶ Посмотреть объединённый результат</button></div>
      <div class="mini-result"><iframe id="lessonPreview" title="Результат урока" sandbox="allow-scripts"></iframe></div>
    </section>
    <section class="lesson-block check-block">
      <div class="block-kicker">05 · ПРОВЕРКА</div>
      <h3>Перед следующим днём</h3>
      <ul class="check-list"><li>☐ Можешь объяснить, что написал</li><li>☐ Можешь повторить без подсказки</li><li>☐ Понимаешь, с чем связан этот код</li></ul>
      <div class="challenge"><b>Самостоятельно:</b><p>${esc(l.challenge||'Повтори результат без подсказки и измени одну деталь.')}</p></div>
    </section>
    <section class="lesson-block reference-block">
      <div class="block-kicker">06 · ТОЛЬКО ПОСЛЕ ПОПЫТКИ</div>
      <details class="code-reveal"><summary>Показать эталонный код</summary><pre>${esc(l.code||'')}</pre></details>
      <p class="muted">После курса этот урок можно открыть снова и пройти те же действия с нуля.</p>
    </section>`;
  const renderStep=()=>{
    const st=steps[lessonStep]; if(!st)return;
    $('#stepCounter').textContent=`ШАГ ${lessonStep+1} ИЗ ${steps.length}`;
    $('#currentStep').innerHTML=`
      <div class="action-title"><span class="action-type">${esc(st.area)}</span><h3>${esc(st.instruction)}</h3></div>
      <div class="action-grid">
        <div class="action-box"><b>ГДЕ</b><p>${esc(st.where)}</p></div>
        <div class="action-box code-box"><b>ЧТО НАПИСАТЬ</b><pre>${esc(st.code)}</pre></div>
        <div class="action-box"><b>ЧТО УВИДИШЬ</b><p>${esc(st.result)}</p></div>
        <div class="action-box"><b>КАК СВЯЗАНО</b><p>${esc(st.connect)}</p></div>
      </div>
      <div class="do-now"><b>СЕЙЧАС</b><span>Открой <strong>${esc(l.file||'нужный файл')}</strong> → найди место «${esc(st.where)}» → напиши код → <strong>Ctrl+S</strong> → обнови Chrome → сравни результат.</span></div>`;
    $$('#orderList .order-item').forEach((x,i)=>x.classList.toggle('active',i===lessonStep));
    $('#stepPrev').disabled=lessonStep===0;
    $('#stepNext').textContent=lessonStep===steps.length-1?'✓ Я закончил шаг':'Следующий шаг →';
  };
  $$('#orderList .order-item').forEach(x=>x.onclick=()=>{lessonStep=Number(x.dataset.step);renderStep();});
  $$('.choice-card').forEach((x)=>x.onclick=()=>{
    $$('.choice-card').forEach(c=>c.classList.remove('selected'));
    x.classList.add('selected');
    const result=$('#choiceResult');
    if(result) result.textContent=`Выбран вариант ${Number(x.dataset.choice)+1}: ${x.querySelector('strong')?.textContent||''}. Теперь используй именно этот способ в своём проекте.`;
  });
  $('#stepPrev').onclick=()=>{if(lessonStep>0){lessonStep--;renderStep();}};
  $('#stepNext').onclick=()=>{if(lessonStep<steps.length-1){lessonStep++;renderStep();}else{document.querySelector('.combine-block')?.scrollIntoView({behavior:'smooth',block:'start'});}};
  const c=l.combo;
  if(c){$('#lessonPreview').srcdoc=makeSrcDoc(c.html||'',c.css||'',c.js||'');$('#loadCombo').onclick=()=>{loadCombo(l);};}
  else{$('#lessonPreview').srcdoc='<div style="font-family:Arial;padding:30px">Экзамен: сначала создай проект самостоятельно.</div>';$('#loadCombo').disabled=true;}
  $('#completeDay').textContent=state.completed.includes(day)?'День выполнен ✓':'Отметить ✓';
  $('#prevDay').disabled=day===1; $('#nextDay').disabled=day===30;
  $('#lessonModal').classList.add('open'); $('#lessonModal').setAttribute('aria-hidden','false'); $('#overlay').classList.add('show'); document.body.style.overflow='hidden'; closeSidebar(); $('.lesson-content').scrollTop=0;
  renderStep();
}

function closeLesson(){if(!$('#lessonModal').classList.contains('open'))return;$('#lessonModal').classList.remove('open');$('#lessonModal').setAttribute('aria-hidden','true');if(!$('#sidebar').classList.contains('open'))$('#overlay').classList.remove('show');document.body.style.overflow='';}
function closeSidebar(){$('#sidebar').classList.remove('open');if(!$('#lessonModal').classList.contains('open'))$('#overlay').classList.remove('show');}
function mark(){if(!state.completed.includes(current))state.completed.push(current);state.completed.sort((a,b)=>a-b);save();update();renderNav();renderDays();$('#completeDay').textContent='День выполнен ✓';$('#lessonProgressBar').style.width='100%';}
function saveLab(){localStorage.setItem(LABKEY,JSON.stringify({html:$('#labHtml').value,css:$('#labCss').value,js:$('#labJs').value}))}
function diag(items){$('#labDiagnostics').innerHTML=items.length?items.map(x=>`<div class="diag ${x.type}"><div class="diag-title">${x.type==='error'?'❌':'⚠️'} ${esc(x.title)}${x.line?' · строка '+x.line:''}</div><div class="diag-text">${esc(x.text)}<br><b>Как исправить:</b> ${esc(x.fix)}</div></div>`).join(''):'<div class="diag"><div class="diag-title">✓ Базовых ошибок не найдено</div><div class="diag-text">Теперь сравни результат с тем, что должен был получиться.</div></div>';}
function lintHTML(s){const out=[],stack=[],voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);s.split('\n').forEach((line,i)=>{if(/<img\b/i.test(line)&&!/\balt\s*=/.test(line))out.push({type:'error',line:i+1,title:'IMG без alt',text:'У изображения нет alt.',fix:'Добавь alt="описание".'});for(const m of line.matchAll(/<\/?([a-z0-9-]+)\b[^>]*>/ig)){const raw=m[0],tag=m[1].toLowerCase();if(raw.startsWith('</')){const last=stack.pop();if(last&&last.tag!==tag)out.push({type:'error',line:i+1,title:'Неправильное закрытие',text:`Ожидалось </${last.tag}>.`,fix:'Проверь вложенность тегов.'});}else if(!voids.has(tag)&&!raw.endsWith('/>'))stack.push({tag,line:i+1});}});stack.forEach(x=>out.push({type:'error',line:x.line,title:`Не закрыт <${x.tag}>`,text:'Открывающий тег остался без закрытия.',fix:`Добавь </${x.tag}>.`}));return out;}
function lintCSS(s){const out=[];let n=0;s.split('\n').forEach((line,i)=>{n+=(line.match(/{/g)||[]).length;n-=(line.match(/}/g)||[]).length;if(/^[^/]*:[^;{}]+$/.test(line.trim()))out.push({type:'warn',line:i+1,title:'Возможно, пропущен ;',text:'CSS-свойство выглядит незавершённым.',fix:'Проверь точку с запятой.'});});if(n>0)out.push({type:'error',line:s.split('\n').length,title:'Не закрыт CSS-блок',text:'{ больше, чем }.',fix:'Добавь недостающую }.'});if(n<0)out.push({type:'error',line:s.split('\n').length,title:'Лишняя }',text:'} больше, чем {.',fix:'Проверь скобки.'});return out;}
function lintJS(s,html){const out=[];if(!s.trim())return out;try{new Function(s);}catch(e){out.push({type:'error',line:0,title:'Ошибка синтаксиса JavaScript',text:e.message,fix:'Проверь скобки, кавычки и точки с запятой.'});}for(const m of s.matchAll(/querySelector(?:All)?\(\s*["'`]([^"'`]+)["'`]\s*\)/g)){const sel=m[1];if(sel.startsWith('#')&&!new RegExp(`id=["']${sel.slice(1).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}["']`).test(html))out.push({type:'error',line:s.slice(0,m.index).split('\n').length,title:`Селектор ${sel} не найден`,text:'JS ищет элемент, которого нет в HTML.',fix:'Добавь нужный id или исправь селектор.'});}return out;}
function makeSrcDoc(h,c,j){const safe=(j||'').replace(/<\/script/gi,'<\\/script');return `<!doctype html><html><head><meta charset="utf-8"><style>${c||''}</style></head><body>${h||''}<script>${safe}</script></body></html>`;}
function runLab(){const h=$('#labHtml').value,c=$('#labCss').value,j=$('#labJs').value;saveLab();const ds=[...lintHTML(h),...lintCSS(c),...lintJS(j,h)];$('#labPreview').srcdoc=makeSrcDoc(h,c,j);diag(ds);$('#labStatus').textContent=ds.some(x=>x.type==='error')?'Есть ошибки':'Проверено';}
function setupLab(){let saved={};try{saved=JSON.parse(localStorage.getItem(LABKEY)||'{}')}catch{}$('#labHtml').value=saved.html||'';$('#labCss').value=saved.css||'';$('#labJs').value=saved.js||'';$$('.lab-tab').forEach(t=>t.onclick=()=>{$$('.lab-tab').forEach(x=>x.classList.remove('active'));$$('.editor-pane').forEach(x=>x.classList.remove('active'));t.classList.add('active');$(`.editor-pane[data-pane="${t.dataset.editor}"]`).classList.add('active')});$('#exampleLab').onclick=()=>{loadCombo(lessons[2]);};$('#clearLab').onclick=()=>{['labHtml','labCss','labJs'].forEach(id=>$('#'+id).value='');saveLab();$('#labPreview').srcdoc='';diag([]);$('#labStatus').textContent='Очищено';};['labHtml','labCss','labJs'].forEach(id=>$('#'+id).addEventListener('input',saveLab));$('#runLab').onclick=runLab;}
$('#continueBtn').onclick=()=>openLesson(state.currentDay||1);$('#heroStart').onclick=()=>openLesson(state.currentDay||1);$('#roadmapBtn').onclick=()=>$('#roadmap').scrollIntoView({behavior:'smooth'});$('#resetBtn').onclick=()=>{if(confirm('Сбросить прогресс?')){state={currentDay:1,completed:[],cat:'HTML',catalogOpen:true,daysOpen:true};save();renderNav();renderDays();renderRoadmap();renderCatalog();update();}};$('#menuBtn').onclick=()=>{$('#sidebar').classList.add('open');$('#overlay').classList.add('show')};$('#overlay').onclick=()=>{closeLesson();closeSidebar()};$('#closeLesson').onclick=closeLesson;$('#completeDay').onclick=mark;$('#prevDay').onclick=()=>current>1&&openLesson(current-1);$('#nextDay').onclick=()=>current<30&&openLesson(current+1);$('#catalogSearch').oninput=renderCatalog;$$('.tab').forEach(t=>t.onclick=()=>{state.cat=t.dataset.cat;save();renderCatalog();});$('#catalogCollapse').onclick=()=>{state.catalogOpen=!state.catalogOpen;$('#catalogBody').style.display=state.catalogOpen?'block':'none';$('#catalogCollapse').textContent=state.catalogOpen?'Свернуть каталог':'Развернуть каталог';save();};
$('#daysCollapse').onclick=()=>{state.daysOpen=!state.daysOpen;$('#daysBody').style.display=state.daysOpen?'block':'none';$('#daysCollapse').textContent=state.daysOpen?'Свернуть':'Развернуть';save();};
$$('[data-scroll]').forEach(x=>x.onclick=()=>{const target=document.getElementById(x.dataset.scroll);if(target){target.scrollIntoView({behavior:'smooth',block:'start'});closeSidebar();}});
document.addEventListener('click',e=>{const b=e.target.closest('[data-day]');if(b){e.preventDefault();openLesson(Number(b.dataset.day));}});document.addEventListener('keydown',e=>e.key==='Escape'&&(closeLesson(),closeSidebar()));
renderNav();renderDays();renderRoadmap();renderCatalog();renderResources();setupLab();update();$('#catalogBody').style.display=state.catalogOpen?'block':'none';$('#catalogCollapse').textContent=state.catalogOpen?'Свернуть каталог':'Развернуть каталог';$('#daysBody').style.display=state.daysOpen?'block':'none';$('#daysCollapse').textContent=state.daysOpen?'Свернуть':'Развернуть';
})();
