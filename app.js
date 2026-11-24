{
const KEY='3mcafe_pos_v2';
const ST={bar:'البار',kitchen:'المطبخ',shisha:'الشيشة'};
const TY={dine:'صالة',take:'تيك أواي',del:'دليفري'};
const PM={cash:'كاش',card:'فيزا',wallet:'محفظة / ايزي كاش',insta:'انستاباي'};
const uid=()=>Math.random().toString(36).slice(2,9);
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const r2=n=>Math.round((+n||0)*100)/100;
const f=n=>r2(n).toLocaleString('ar-EG',{minimumFractionDigits:0,maximumFractionDigits:2});
const money=n=>f(n)+' ج.م';
const dt=t=>new Date(t).toLocaleString('ar-EG',{dateStyle:'short',timeStyle:'short'});
const day=t=>{const d=new Date(t);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};

function seed(){
  const cats=[{"id": "c1", "name": "قهوة ساخنة"}, {"id": "c2", "name": "آيس كوفي"}, {"id": "c3", "name": "فرابيه"}, {"id": "c4", "name": "هوت"}, {"id": "c5", "name": "شاي وأعشاب"}, {"id": "c6", "name": "سحلب وشتوي"}, {"id": "c7", "name": "ميلك شيك"}, {"id": "c8", "name": "موهيتو"}, {"id": "c9", "name": "سموزي"}, {"id": "c10", "name": "عصائر فريش"}, {"id": "c11", "name": "كوكتيلات"}, {"id": "c12", "name": "مشروبات غازية"}, {"id": "c13", "name": "كرواسون"}, {"id": "c14", "name": "وافل"}, {"id": "c15", "name": "حلويات"}, {"id": "c16", "name": "آيس كريم"}, {"id": "c17", "name": "الشيشة"}, {"id": "c18", "name": "إضافات"}];
  const items=[{"id": "i1", "name": "إسبريسو سنجل", "price": 45, "cat": "c1", "station": "bar", "on": true}, {"id": "i2", "name": "إسبريسو دبل", "price": 60, "cat": "c1", "station": "bar", "on": true}, {"id": "i3", "name": "أمريكانو", "price": 65, "cat": "c1", "station": "bar", "on": true}, {"id": "i4", "name": "لاتيه", "price": 70, "cat": "c1", "station": "bar", "on": true}, {"id": "i5", "name": "سبانش لاتيه", "price": 80, "cat": "c1", "station": "bar", "on": true}, {"id": "i6", "name": "كابتشينو", "price": 80, "cat": "c1", "station": "bar", "on": true}, {"id": "i7", "name": "فلات وايت", "price": 90, "cat": "c1", "station": "bar", "on": true}, {"id": "i8", "name": "نسكافيه", "price": 70, "cat": "c1", "station": "bar", "on": true}, {"id": "i9", "name": "كورتادو", "price": 75, "cat": "c1", "station": "bar", "on": true}, {"id": "i10", "name": "قهوة سنجل", "price": 40, "cat": "c1", "station": "bar", "on": true}, {"id": "i11", "name": "قهوة دبل", "price": 60, "cat": "c1", "station": "bar", "on": true}, {"id": "i12", "name": "قهوة فرنساوي", "price": 50, "cat": "c1", "station": "bar", "on": true}, {"id": "i13", "name": "قهوة بندق", "price": 70, "cat": "c1", "station": "bar", "on": true}, {"id": "i14", "name": "قهوة نوتيلا", "price": 70, "cat": "c1", "station": "bar", "on": true}, {"id": "i15", "name": "آيس لاتيه", "price": 75, "cat": "c2", "station": "bar", "on": true}, {"id": "i16", "name": "آيس سبانش لاتيه", "price": 85, "cat": "c2", "station": "bar", "on": true}, {"id": "i17", "name": "آيس موكا", "price": 85, "cat": "c2", "station": "bar", "on": true}, {"id": "i18", "name": "آيس وايت موكا", "price": 85, "cat": "c2", "station": "bar", "on": true}, {"id": "i19", "name": "آيس كراميل ميكاتو", "price": 90, "cat": "c2", "station": "bar", "on": true}, {"id": "i20", "name": "آيس كابتشينو", "price": 85, "cat": "c2", "station": "bar", "on": true}, {"id": "i21", "name": "آيس أمريكانو", "price": 65, "cat": "c2", "station": "bar", "on": true}, {"id": "i22", "name": "فرابيه كلاسيك", "price": 75, "cat": "c3", "station": "bar", "on": true}, {"id": "i23", "name": "فرابيه موكا", "price": 85, "cat": "c3", "station": "bar", "on": true}, {"id": "i24", "name": "فرابيه كراميل", "price": 85, "cat": "c3", "station": "bar", "on": true}, {"id": "i25", "name": "فرابيه نوتيلا", "price": 90, "cat": "c3", "station": "bar", "on": true}, {"id": "i26", "name": "فرابيه لوتس", "price": 90, "cat": "c3", "station": "bar", "on": true}, {"id": "i27", "name": "فرابيه بيستاشيو", "price": 90, "cat": "c3", "station": "bar", "on": true}, {"id": "i28", "name": "فرابيه وايت موكا", "price": 85, "cat": "c3", "station": "bar", "on": true}, {"id": "i29", "name": "هوت سيدر", "price": 60, "cat": "c4", "station": "bar", "on": true}, {"id": "i30", "name": "هوت شوكلت", "price": 70, "cat": "c4", "station": "bar", "on": true}, {"id": "i31", "name": "هوت لوتس", "price": 70, "cat": "c4", "station": "bar", "on": true}, {"id": "i32", "name": "هوت كراميل ميكاتو", "price": 80, "cat": "c4", "station": "bar", "on": true}, {"id": "i33", "name": "هوت موكا", "price": 80, "cat": "c4", "station": "bar", "on": true}, {"id": "i34", "name": "شاي", "price": 20, "cat": "c5", "station": "bar", "on": true}, {"id": "i35", "name": "شاي أخضر", "price": 25, "cat": "c5", "station": "bar", "on": true}, {"id": "i36", "name": "شاي فواكه", "price": 30, "cat": "c5", "station": "bar", "on": true}, {"id": "i37", "name": "ينسون", "price": 25, "cat": "c5", "station": "bar", "on": true}, {"id": "i38", "name": "نعناع", "price": 25, "cat": "c5", "station": "bar", "on": true}, {"id": "i39", "name": "قرفة", "price": 25, "cat": "c5", "station": "bar", "on": true}, {"id": "i40", "name": "جنزبيل", "price": 25, "cat": "c5", "station": "bar", "on": true}, {"id": "i41", "name": "أعشاب", "price": 30, "cat": "c5", "station": "bar", "on": true}, {"id": "i42", "name": "سحلب", "price": 60, "cat": "c6", "station": "bar", "on": true}, {"id": "i43", "name": "سحلب مكسرات", "price": 75, "cat": "c6", "station": "bar", "on": true}, {"id": "i44", "name": "سحلب فواكه", "price": 85, "cat": "c6", "station": "bar", "on": true}, {"id": "i45", "name": "سحلب 3M", "price": 100, "cat": "c6", "station": "bar", "on": true}, {"id": "i46", "name": "حمص الشام", "price": 65, "cat": "c6", "station": "bar", "on": true}, {"id": "i47", "name": "بليلة مكسرات", "price": 80, "cat": "c6", "station": "bar", "on": true}, {"id": "i48", "name": "ميلك فانيليا", "price": 80, "cat": "c7", "station": "bar", "on": true}, {"id": "i49", "name": "ميلك شوكلت", "price": 90, "cat": "c7", "station": "bar", "on": true}, {"id": "i50", "name": "ميلك نوتيلا", "price": 100, "cat": "c7", "station": "bar", "on": true}, {"id": "i51", "name": "ميلك لوتس", "price": 100, "cat": "c7", "station": "bar", "on": true}, {"id": "i52", "name": "ميلك كراميل", "price": 90, "cat": "c7", "station": "bar", "on": true}, {"id": "i53", "name": "ميلك بيستاشيو", "price": 100, "cat": "c7", "station": "bar", "on": true}, {"id": "i54", "name": "ميلك فراولة", "price": 85, "cat": "c7", "station": "bar", "on": true}, {"id": "i55", "name": "ميلك بلوبيري", "price": 80, "cat": "c7", "station": "bar", "on": true}, {"id": "i56", "name": "ميلك أوريو", "price": 90, "cat": "c7", "station": "bar", "on": true}, {"id": "i57", "name": "موهيتو كلاسيك", "price": 60, "cat": "c8", "station": "bar", "on": true}, {"id": "i58", "name": "موهيتو فليفر", "price": 70, "cat": "c8", "station": "bar", "on": true}, {"id": "i59", "name": "موهيتو بينا كولادا", "price": 85, "cat": "c8", "station": "bar", "on": true}, {"id": "i60", "name": "موهيتو إنرجي", "price": 90, "cat": "c8", "station": "bar", "on": true}, {"id": "i61", "name": "موهيتو ريد بول", "price": 100, "cat": "c8", "station": "bar", "on": true}, {"id": "i62", "name": "موهيتو ريد بول فليفر", "price": 110, "cat": "c8", "station": "bar", "on": true}, {"id": "i63", "name": "موهيتو 3M", "price": 90, "cat": "c8", "station": "bar", "on": true}, {"id": "i64", "name": "سموزي ليمون", "price": 60, "cat": "c9", "station": "bar", "on": true}, {"id": "i65", "name": "سموزي ليمون نعناع", "price": 65, "cat": "c9", "station": "bar", "on": true}, {"id": "i66", "name": "سموزي فراولة", "price": 70, "cat": "c9", "station": "bar", "on": true}, {"id": "i67", "name": "سموزي بطيخ", "price": 70, "cat": "c9", "station": "bar", "on": true}, {"id": "i68", "name": "سموزي ميكس بيري", "price": 85, "cat": "c9", "station": "bar", "on": true}, {"id": "i69", "name": "سموزي مانجا", "price": 80, "cat": "c9", "station": "bar", "on": true}, {"id": "i70", "name": "سموزي كيوي", "price": 85, "cat": "c9", "station": "bar", "on": true}, {"id": "i71", "name": "سموزي مانجا باشون", "price": 90, "cat": "c9", "station": "bar", "on": true}, {"id": "i72", "name": "سموزي كيوي أناناس", "price": 90, "cat": "c9", "station": "bar", "on": true}, {"id": "i73", "name": "سموزي مانجا خوخ", "price": 90, "cat": "c9", "station": "bar", "on": true}, {"id": "i74", "name": "سموزي خوخ", "price": 70, "cat": "c9", "station": "bar", "on": true}, {"id": "i75", "name": "عصير مانجا", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i76", "name": "عصير جوافة", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i77", "name": "عصير فراولة", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i78", "name": "عصير بلح", "price": 85, "cat": "c10", "station": "bar", "on": true}, {"id": "i79", "name": "عصير ليمون", "price": 60, "cat": "c10", "station": "bar", "on": true}, {"id": "i80", "name": "عصير ليمون نعناع", "price": 65, "cat": "c10", "station": "bar", "on": true}, {"id": "i81", "name": "عصير بطيخ", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i82", "name": "عصير أناناس", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i83", "name": "عصير كيوي", "price": 85, "cat": "c10", "station": "bar", "on": true}, {"id": "i84", "name": "عصير برتقال", "price": 70, "cat": "c10", "station": "bar", "on": true}, {"id": "i85", "name": "شيري كميل", "price": 70, "cat": "c11", "station": "bar", "on": true}, {"id": "i86", "name": "شيري كولد", "price": 70, "cat": "c11", "station": "bar", "on": true}, {"id": "i87", "name": "مانجو باشون", "price": 85, "cat": "c11", "station": "bar", "on": true}, {"id": "i88", "name": "مانجو خوخ", "price": 85, "cat": "c11", "station": "bar", "on": true}, {"id": "i89", "name": "باربي كوكتيل", "price": 90, "cat": "c11", "station": "bar", "on": true}, {"id": "i90", "name": "بينك روز", "price": 90, "cat": "c11", "station": "bar", "on": true}, {"id": "i91", "name": "باور 3M", "price": 120, "cat": "c11", "station": "bar", "on": true}, {"id": "i92", "name": "مانجا كيوي", "price": 90, "cat": "c11", "station": "bar", "on": true}, {"id": "i93", "name": "بينا كولادا", "price": 85, "cat": "c11", "station": "bar", "on": true}, {"id": "i94", "name": "بانجو", "price": 85, "cat": "c11", "station": "bar", "on": true}, {"id": "i95", "name": "كوكتيل 3M", "price": 100, "cat": "c11", "station": "bar", "on": true}, {"id": "i96", "name": "مياه", "price": 10, "cat": "c12", "station": "bar", "on": true}, {"id": "i97", "name": "كانز", "price": 35, "cat": "c12", "station": "bar", "on": true}, {"id": "i98", "name": "بريل", "price": 40, "cat": "c12", "station": "bar", "on": true}, {"id": "i99", "name": "ريدبول", "price": 80, "cat": "c12", "station": "bar", "on": true}, {"id": "i100", "name": "كرواسون شيدر", "price": 70, "cat": "c13", "station": "kitchen", "on": true}, {"id": "i101", "name": "كرواسون ميكس جبن", "price": 80, "cat": "c13", "station": "kitchen", "on": true}, {"id": "i102", "name": "كرواسون تركي شيدر", "price": 85, "cat": "c13", "station": "kitchen", "on": true}, {"id": "i103", "name": "كرواسون شوكلت", "price": 65, "cat": "c13", "station": "kitchen", "on": true}, {"id": "i104", "name": "كرواسون عسل", "price": 60, "cat": "c13", "station": "kitchen", "on": true}, {"id": "i105", "name": "وافل شوكلت", "price": 80, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i106", "name": "وافل كراميل", "price": 80, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i107", "name": "وافل نوتيلا", "price": 100, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i108", "name": "وافل بيستاشيو", "price": 110, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i109", "name": "وافل لوتس", "price": 100, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i110", "name": "وافل فورسيزون", "price": 120, "cat": "c14", "station": "kitchen", "on": true}, {"id": "i111", "name": "مولتن كيك", "price": 100, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i112", "name": "تشيز كيك", "price": 100, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i113", "name": "سينابون", "price": 90, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i114", "name": "ريد فيلفت", "price": 90, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i115", "name": "شوكلت فادج", "price": 85, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i116", "name": "براونيز", "price": 100, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i117", "name": "تيراميسو", "price": 85, "cat": "c15", "station": "kitchen", "on": true}, {"id": "i118", "name": "آيس كريم كلاسيك", "price": 55, "cat": "c16", "station": "kitchen", "on": true}, {"id": "i119", "name": "آيس كريم باشون", "price": 70, "cat": "c16", "station": "kitchen", "on": true}, {"id": "i120", "name": "آيس كريم سوفت", "price": 70, "cat": "c16", "station": "kitchen", "on": true}, {"id": "i121", "name": "آيس كريم ميكس بيري", "price": 75, "cat": "c16", "station": "kitchen", "on": true}, {"id": "i122", "name": "فاخر", "price": 70, "cat": "c17", "station": "shisha", "on": true}, {"id": "i123", "name": "فاخر 3M", "price": 120, "cat": "c17", "station": "shisha", "on": true}, {"id": "i124", "name": "إسكندراني", "price": 40, "cat": "c17", "station": "shisha", "on": true}, {"id": "i125", "name": "معسل عادي", "price": 20, "cat": "c17", "station": "shisha", "on": true}, {"id": "i126", "name": "لي طبي", "price": 10, "cat": "c17", "station": "shisha", "on": true}, {"id": "i127", "name": "إضافة لبن", "price": 25, "cat": "c18", "station": "bar", "on": true}, {"id": "i128", "name": "إضافة فلفل", "price": 20, "cat": "c18", "station": "bar", "on": true}, {"id": "i129", "name": "إضافة صوص", "price": 30, "cat": "c18", "station": "bar", "on": true}, {"id": "i130", "name": "إضافة عسل", "price": 20, "cat": "c18", "station": "bar", "on": true}, {"id": "i131", "name": "إضافة آيس كريم", "price": 30, "cat": "c18", "station": "bar", "on": true}];
  return {settings:{name:'3M Cafe',addr:'',phone:'',foot:'Good Vibes… Great Coffee — نورتونا',taxNo:'',svc:0,tax:0,del:0,tables:12,w:'80',kt:'1',pin:'',theme:'gold'},cats,items,open:{},invoices:[],shift:null,shifts:[],seq:1};
}
const API=window.pos||null;
let S;
try{S=API?JSON.parse(API.load()||'null'):JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!S||!S.items)S=seed();
if(!S.settings.theme)S.settings.theme='gold';
const save=()=>{try{if(API)API.save(JSON.stringify(S));else localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('تعذّر الحفظ على الجهاز!')}};

const newOrder=()=>({type:'dine',table:'',cust:'',phone:'',addr:'',lines:[],discType:'v',disc:0});
let cur=newOrder(),curCat='all';

function toast(m){const t=$('toast');t.textContent=m;t.style.display='block';clearTimeout(t._h);t._h=setTimeout(()=>t.style.display='none',2200)}
function modal(title,body,btns){
  $('md').innerHTML=`<h3>${title}</h3><div>${body}</div><div class="mbtns">${btns.map((b,i)=>`<button data-i="${i}" class="${b.cls||''}">${b.label}</button>`).join('')}</div>`;
  $('mb').classList.add('on');
  $('md').querySelectorAll('.mbtns button').forEach(b=>b.onclick=()=>{const x=btns[+b.dataset.i];if(x.fn&&x.fn()===false)return;closeM()});
  const inp=$('md').querySelector('input');if(inp)setTimeout(()=>inp.focus(),50);
}
const closeM=()=>$('mb').classList.remove('on');
const confirmM=(msg,fn)=>modal('تأكيد',`<p>${msg}</p>`,[{label:'تأكيد',cls:'red',fn},{label:'رجوع'}]);
function needPin(fn){
  if(!S.settings.pin)return fn();
  modal('رقم المدير','<input id="pinIn" type="password" inputmode="numeric">',[{label:'دخول',cls:'gold',fn:()=>{if($('pinIn').value!==S.settings.pin){toast('الرقم غلط');return false}setTimeout(fn,10)}},{label:'إلغاء'}]);
}

/* totals */
function calc(o){
  const sub=r2(o.lines.reduce((a,l)=>a+l.price*l.qty,0));
  const disc=r2(o.discType==='p'?sub*(+o.disc||0)/100:Math.min(+o.disc||0,sub));
  const after=sub-disc;
  const svc=r2(o.type==='dine'?after*(+S.settings.svc||0)/100:0);
  const tax=r2((after+svc)*(+S.settings.tax||0)/100);
  const del=o.type==='del'?r2(+S.settings.del||0):0;
  return {sub,disc,svc,tax,del,total:r2(after+svc+tax+del)};
}

/* POS render */
function renderCats(){
  const cs=[{id:'all',name:'الكل'},...S.cats];
  $('cats').innerHTML=cs.map(c=>`<button data-c="${c.id}" class="${c.id===curCat?'on':''}">${esc(c.name)}</button>`).join('');
}
function renderGrid(){
  const q=$('search').value.trim();
  const list=S.items.filter(i=>i.on&&(curCat==='all'||i.cat===curCat)&&(!q||i.name.includes(q)));
  $('grid').innerHTML=list.length?list.map(i=>`<button class="it" data-id="${i.id}"><b>${esc(i.name)}</b><span>${f(i.price)}</span></button>`).join(''):'<div class="empty">مفيش أصناف هنا</div>';
}
function tableOpts(sel){let h='<option value="">اختاري الطاولة</option>';for(let n=1;n<=S.settings.tables;n++)h+=`<option value="${n}" ${String(sel)===String(n)?'selected':''}>طاولة ${n}${S.open[n]&&String(sel)!==String(n)?' (مشغولة)':''}</option>`;return h}
function renderCart(){
  $('seg').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t===cur.type));
  let m='';
  if(cur.type==='dine')m=`<select id="cTable">${tableOpts(cur.table)}</select>`;
  else m=`<input id="cCust" placeholder="اسم العميل (اختياري)" value="${esc(cur.cust)}">`+(cur.type==='del'?`<input id="cPhone" placeholder="تليفون العميل" inputmode="tel" value="${esc(cur.phone)}"><input id="cAddr" placeholder="العنوان" value="${esc(cur.addr)}">`:'');
  $('meta').innerHTML=m;
  $('lines').innerHTML=cur.lines.length?cur.lines.map((l,i)=>`<div class="ln"><div class="n">${esc(l.name)}<small>${f(l.price)}${l.note?' — '+esc(l.note):''} ${l.sent>=l.qty?'<span class="sent">✓ اتبعت</span>':''}</small></div><div class="q"><button data-a="m" data-i="${i}">−</button><b>${l.qty}</b><button data-a="p" data-i="${i}">+</button><button data-a="n" data-i="${i}" title="ملاحظة" style="font-size:14px;width:auto;padding:0 8px">ملاحظة</button></div><div class="t">${f(l.price*l.qty)}</div></div>`).join(''):'<div class="empty">دوسي على أي صنف عشان يتضاف للطلب</div>';
  const t=calc(cur);
  $('tot').innerHTML=`<div><span>المجموع</span><span>${money(t.sub)}</span></div>${t.disc?`<div><span>خصم</span><span>− ${money(t.disc)}</span></div>`:''}${t.svc?`<div><span>خدمة ${S.settings.svc}%</span><span>${money(t.svc)}</span></div>`:''}${t.tax?`<div><span>ضريبة ${S.settings.tax}%</span><span>${money(t.tax)}</span></div>`:''}${t.del?`<div><span>توصيل</span><span>${money(t.del)}</span></div>`:''}<div class="big"><span>الإجمالي</span><span>${money(t.total)}</span></div>`;
  $('bHold').style.display=cur.type==='dine'?'':'none';
}
function addItem(id){
  const it=S.items.find(i=>i.id===id);if(!it)return;
  const l=cur.lines.find(x=>x.id===id&&!x.note);
  if(l)l.qty++;else cur.lines.push({id,name:it.name,price:it.price,station:it.station,qty:1,note:'',sent:0});
  syncTable();renderCart();
}
function syncTable(){if(cur.type==='dine'&&cur.table&&S.open[cur.table]){S.open[cur.table]=cur;save()}}

$('cats').onclick=e=>{const b=e.target.closest('button');if(!b)return;curCat=b.dataset.c;renderCats();renderGrid()};
$('search').oninput=renderGrid;
$('grid').onclick=e=>{const b=e.target.closest('.it');if(b)addItem(b.dataset.id)};
$('seg').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(cur.type==='dine'&&cur.table&&S.open[cur.table]&&b.dataset.t!=='dine'){toast('الطلب ده محفوظ على طاولة');return}cur.type=b.dataset.t;renderCart()};
$('meta').oninput=e=>{const t=e.target;if(t.id==='cCust')cur.cust=t.value;if(t.id==='cPhone')cur.phone=t.value;if(t.id==='cAddr')cur.addr=t.value};
$('meta').onchange=e=>{
  if(e.target.id!=='cTable')return;const n=e.target.value;
  if(n&&S.open[n]&&String(n)!==String(cur.table)){
    if(cur.lines.length&&!S.open[cur.table]){toast('احفظي أو امسحي الطلب الحالي الأول');renderCart();return}
    cur=S.open[n];toast('تم فتح طلب طاولة '+n);
  }else if(cur.table&&S.open[cur.table]&&String(n)!==String(cur.table)){
    const old=cur.table;delete S.open[old];cur.table=n;if(n)S.open[n]=cur;save();toast(n?`تم نقل الطلب من طاولة ${old} لطاولة ${n}`:'تم فك الطلب من الطاولة');
  }else cur.table=n;
  renderCart();
};
$('lines').onclick=e=>{
  const b=e.target.closest('button');if(!b)return;const l=cur.lines[+b.dataset.i];
  if(b.dataset.a==='p')l.qty++;
  if(b.dataset.a==='m'){l.qty--;if(l.qty<=0)cur.lines.splice(+b.dataset.i,1)}
  if(b.dataset.a==='n'){modal('ملاحظة على '+esc(l.name),`<input id="noteIn" placeholder="مثلاً: سكر زيادة، من غير ثلج" value="${esc(l.note)}">`,[{label:'حفظ',cls:'gold',fn:()=>{l.note=$('noteIn').value.trim();syncTable();renderCart()}},{label:'إلغاء'}]);return}
  syncTable();renderCart();
};
$('bDisc').onclick=()=>modal('خصم على الطلب',`<div class="pays"><button id="dV" class="${cur.discType==='v'?'on':''}">مبلغ</button><button id="dP" class="${cur.discType==='p'?'on':''}">نسبة %</button></div><label>قيمة الخصم</label><input id="dIn" type="number" min="0" inputmode="decimal" value="${cur.disc||''}">`,[{label:'تطبيق',cls:'gold',fn:()=>{cur.discType=$('dP').classList.contains('on')?'p':'v';cur.disc=Math.max(0,+$('dIn').value||0);syncTable();renderCart()}},{label:'إلغاء الخصم',fn:()=>{cur.disc=0;syncTable();renderCart()}}]);
document.addEventListener('click',e=>{if(e.target.id==='dV'||e.target.id==='dP'){$('dV').classList.toggle('on',e.target.id==='dV');$('dP').classList.toggle('on',e.target.id==='dP')}});
$('bClear').onclick=()=>{if(!cur.lines.length&&!cur.table){cur=newOrder();renderCart();return}
  confirmM(cur.table&&S.open[cur.table]?`مسح طلب طاولة ${cur.table} بالكامل؟`:'مسح الطلب الحالي؟',()=>{if(cur.table&&S.open[cur.table])delete S.open[cur.table];save();cur=newOrder();renderCart()})};
$('bHold').onclick=()=>{
  if(!cur.lines.length)return toast('الطلب فاضي');
  if(!cur.table)return toast('اختاري الطاولة الأول');
  S.open[cur.table]=cur;save();toast('اتحفظ على طاولة '+cur.table);cur=newOrder();renderCart();
};
$('bSend').onclick=()=>{if(!cur.lines.length)return toast('الطلب فاضي');if(!sendKitchen(false,true))toast('كل الأصناف اتطبعلها بون قبل كده');else{syncTable();renderCart()}};
$('bBill').onclick=()=>{
  if(!cur.lines.length)return toast('الطلب فاضي');
  const t=calc(cur);
  printHTML(receipt({no:'—',at:Date.now(),type:cur.type,table:cur.type==='dine'?cur.table:'',cust:cur.cust,phone:cur.phone,addr:cur.addr,cashier:S.shift?S.shift.cashier:'',lines:cur.lines,...t,pay:null}));
};

/* printing */
function printHTML(body,kind){
  const w=S.settings.w==='58'?'58mm':'80mm';
  const html=`<!DOCTYPE html><html dir="rtl"><head><meta charset="utf-8"><style>@page{size:${w} auto;margin:2mm}body{width:${S.settings.w==='58'?'54mm':'74mm'};margin:0 auto;font:12px/1.4 Cairo,Tahoma,Arial,sans-serif;color:#000}h1{font-size:18px;text-align:center;margin:2px 0}.c{text-align:center}.hr{border-top:1px dashed #000;margin:5px 0}table{width:100%;border-collapse:collapse}td{padding:1px 0;vertical-align:top}td.r{text-align:left;white-space:nowrap}.b{font-weight:700}.big{font-size:16px;font-weight:800}.k{font-size:15px}</style></head><body>${body}</body></html>`;
  if(API){API.print(html,(kind==='k'&&S.settings.kPrinter)?S.settings.kPrinter:(S.settings.printer||''));return}
  const fr=$('pf');const d=fr.contentDocument;d.open();d.write(html);d.close();
  setTimeout(()=>{try{fr.contentWindow.focus();fr.contentWindow.print()}catch(e){toast('الطباعة مش متاحة في المتصفح ده')}},300);
}
function sendKitchen(silent,force){
  const pend=cur.lines.filter(l=>l.qty>(l.sent||0));
  if(!pend.length)return false;
  if(S.settings.kt==='1'||force){
    const by={};pend.forEach(l=>(by[l.station]=by[l.station]||[]).push(l));
    const head=cur.type==='dine'?`طاولة ${esc(cur.table||'-')}`:TY[cur.type]+(cur.cust?' — '+esc(cur.cust):'');
    const body=Object.entries(by).map(([s,ls])=>`<h1>بون ${ST[s]}</h1><div class="c big">${head}</div><div class="c">${dt(Date.now())}</div><div class="hr"></div><table>${ls.map(l=>`<tr class="k"><td class="b">${l.qty-(l.sent||0)} ×</td><td>${esc(l.name)}${l.note?`<br><small>(${esc(l.note)})</small>`:''}</td></tr>`).join('')}</table><div class="hr"></div><div style="page-break-after:always"></div>`).join('');
    printHTML(body,'k');
  }
  pend.forEach(l=>l.sent=l.qty);
  if(!silent)toast('اتبعت للتحضير');
  return true;
}
function receipt(v,copy){
  const s=S.settings;
  return `<h1>${esc(s.name)}</h1>${s.addr?`<div class="c">${esc(s.addr)}</div>`:''}${s.phone?`<div class="c">${esc(s.phone)}</div>`:''}${s.taxNo?`<div class="c">رقم ضريبي: ${esc(s.taxNo)}</div>`:''}<div class="hr"></div>
  <table>${v.pay?`<tr><td>فاتورة رقم</td><td class="r b">${v.no}</td></tr>`:''}<tr><td>التاريخ</td><td class="r">${dt(v.at)}</td></tr><tr><td>النوع</td><td class="r">${TY[v.type]}${v.table?' — طاولة '+esc(v.table):''}</td></tr>${v.cust?`<tr><td>العميل</td><td class="r">${esc(v.cust)}</td></tr>`:''}${v.phone?`<tr><td>تليفون</td><td class="r">${esc(v.phone)}</td></tr>`:''}${v.addr?`<tr><td>العنوان</td><td class="r">${esc(v.addr)}</td></tr>`:''}<tr><td>الكاشير</td><td class="r">${esc(v.cashier)}</td></tr></table>
  <div class="hr"></div><table><tr class="b"><td>الصنف</td><td>كمية</td><td class="r">المبلغ</td></tr>${v.lines.map(l=>`<tr><td>${esc(l.name)}${l.note?`<br><small>${esc(l.note)}</small>`:''}</td><td>${l.qty}</td><td class="r">${f(l.price*l.qty)}</td></tr>`).join('')}</table><div class="hr"></div>
  <table><tr><td>المجموع</td><td class="r">${f(v.sub)}</td></tr>${v.disc?`<tr><td>خصم</td><td class="r">- ${f(v.disc)}</td></tr>`:''}${v.svc?`<tr><td>خدمة</td><td class="r">${f(v.svc)}</td></tr>`:''}${v.tax?`<tr><td>ضريبة</td><td class="r">${f(v.tax)}</td></tr>`:''}${v.del?`<tr><td>توصيل</td><td class="r">${f(v.del)}</td></tr>`:''}<tr class="big"><td>الإجمالي</td><td class="r">${f(v.total)} ج.م</td></tr>
  ${v.pay?`<tr><td>طريقة الدفع</td><td class="r">${PM[v.pay.method]}</td></tr>`:''}${v.pay&&v.pay.method==='cash'?`<tr><td>المدفوع</td><td class="r">${f(v.pay.received)}</td></tr><tr><td>الباقي</td><td class="r">${f(v.pay.change)}</td></tr>`:''}</table>
  <div class="hr"></div>${v.pay?'':'<div class="c big">حساب مبدئي — غير مدفوع</div>'}<div class="c b">${esc(s.foot)}</div>${copy?'<div class="c">— نسخة —</div>':''}`;
}

/* payment */
function openShiftM(after){
  modal('فتح وردية جديدة',`<label>اسم الكاشير</label><input id="shN" value="${esc(S.shifts.length?S.shifts[S.shifts.length-1].cashier:'')}"><label>الفلوس اللي في الدرج في أول الوردية</label><input id="shC" type="number" min="0" inputmode="decimal" value="0">`,[{label:'فتح الوردية',cls:'gold',fn:()=>{const n=$('shN').value.trim();if(!n){toast('اكتبي اسم الكاشير');return false}S.shift={id:uid(),cashier:n,openedAt:Date.now(),opening:+$('shC').value||0};save();renderHead();if(after)setTimeout(after,20)}},{label:'إلغاء'}]);
}
$('bPay').onclick=()=>{
  if(!cur.lines.length)return toast('الطلب فاضي');
  if(cur.type==='dine'&&!cur.table)return toast('اختاري الطاولة الأول');
  if(cur.type==='del'&&!cur.phone)return toast('اكتبي تليفون العميل');
  if(!S.shift)return openShiftM(()=>$('bPay').click());
  const t=calc(cur);let method='cash';
  const bills=[...new Set([Math.ceil(t.total),Math.ceil(t.total/50)*50,Math.ceil(t.total/100)*100,Math.ceil(t.total/200)*200])].slice(0,4);
  modal('الدفع — '+money(t.total),`<div class="pays" id="pmB">${Object.entries(PM).map(([k,v])=>`<button data-m="${k}" class="${k==='cash'?'on':''}">${v}</button>`).join('')}</div><div id="cashBox"><label>المبلغ اللي استلمتيه</label><input id="rcv" type="number" min="0" inputmode="decimal" value="${t.total}"><div class="bills">${bills.map(b=>`<button data-b="${b}">${f(b)}</button>`).join('')}</div><div class="change" id="chg">الباقي: ${money(0)}</div></div>`,[
    {label:'تأكيد وطباعة',cls:'gold',fn:()=>{const rc=method==='cash'?(+$('rcv').value||0):t.total;if(method==='cash'&&rc<t.total){toast('المبلغ أقل من الإجمالي');return false}finish(t,method,rc)}},
    {label:'إلغاء'}]);
  const upd=()=>{$('chg').textContent='الباقي: '+money(Math.max(0,(+$('rcv').value||0)-t.total))};
  $('rcv').oninput=upd;
  $('md').querySelector('.bills').onclick=e=>{const b=e.target.closest('button');if(b){$('rcv').value=b.dataset.b;upd()}};
  $('pmB').onclick=e=>{const b=e.target.closest('button');if(!b)return;method=b.dataset.m;$('pmB').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));$('cashBox').style.display=method==='cash'?'':'none'};
};
function finish(t,method,rc){
  if(S.settings.kt==='1'&&cur.lines.some(l=>l.qty>(l.sent||0)))sendKitchen(true);
  const v={no:S.seq++,at:Date.now(),shiftId:S.shift.id,cashier:S.shift.cashier,type:cur.type,table:cur.type==='dine'?cur.table:'',cust:cur.cust,phone:cur.phone,addr:cur.addr,lines:cur.lines.map(({id,name,price,qty,note,station})=>({id,name,price,qty,note,station})),...t,pay:{method,received:r2(rc),change:r2(rc-t.total)},void:false};
  S.invoices.push(v);
  if(cur.table&&S.open[cur.table])delete S.open[cur.table];
  save();
  setTimeout(()=>printHTML(receipt(v)),S.settings.kt==='1'?900:0);
  toast(`فاتورة ${v.no} — `+(method==='cash'&&v.pay.change?'الباقي '+money(v.pay.change):'تم الدفع'));
  cur=newOrder();renderCart();
}

/* tables view */
function renderTables(){
  let h='';for(let n=1;n<=S.settings.tables;n++){const o=S.open[n];h+=`<button class="tb ${o?'busy':''}" data-n="${n}">طاولة ${n}${o?`<small>${money(calc(o).total)}</small><small style="color:var(--mut)">${o.lines.reduce((a,l)=>a+l.qty,0)} صنف</small>`:'<small style="color:var(--mut)">فاضية</small>'}</button>`}
  $('tbls').innerHTML=h;
}
$('tbls').onclick=e=>{const b=e.target.closest('.tb');if(!b)return;const n=b.dataset.n;
  if(cur.lines.length&&!(cur.table&&S.open[cur.table])){toast('في طلب مفتوح في الكاشير، احفظيه أو امسحيه الأول');return}
  cur=S.open[n]||Object.assign(newOrder(),{table:n});show('pos')};

/* invoices view */
function renderInv(){
  const fr=$('fFrom').value,to=$('fTo').value,q=$('fQ').value.trim();
  const L=S.invoices.filter(v=>(!fr||day(v.at)>=fr)&&(!to||day(v.at)<=to)&&(!q||String(v.no)===q||(v.cust||'').includes(q)||(v.phone||'').includes(q))).slice().reverse();
  const ok=L.filter(v=>!v.void);const sum=ok.reduce((a,v)=>a+v.total,0);
  $('invK').innerHTML=`<div class="kpi"><small>عدد الفواتير</small><b>${f(ok.length)}</b></div><div class="kpi"><small>إجمالي المبيعات</small><b>${money(sum)}</b></div><div class="kpi"><small>متوسط الفاتورة</small><b>${money(ok.length?sum/ok.length:0)}</b></div><div class="kpi"><small>ملغية</small><b>${f(L.length-ok.length)}</b></div>`;
  $('invT').innerHTML=`<tr><th>رقم</th><th>الوقت</th><th>النوع</th><th>الدفع</th><th>الكاشير</th><th>الإجمالي</th><th></th></tr>`+(L.length?L.slice(0,300).map(v=>`<tr class="${v.void?'void':''}"><td>${v.no}</td><td>${dt(v.at)}</td><td>${TY[v.type]}${v.table?' '+esc(v.table):''}${v.cust?' — '+esc(v.cust):''}</td><td>${PM[v.pay.method]}</td><td>${esc(v.cashier)}</td><td class="num">${money(v.total)}</td><td style="white-space:nowrap"><button data-r="${v.no}">طباعة</button> ${v.void?'<span class="pill">ملغية</span>':`<button data-x="${v.no}" class="ghost">إلغاء</button>`}</td></tr>`).join(''):'<tr><td colspan="7" class="empty">مفيش فواتير في الفترة دي</td></tr>');
}
['fFrom','fTo','fQ'].forEach(i=>$(i).oninput=renderInv);
$('invT').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.r){const v=S.invoices.find(x=>x.no==b.dataset.r);printHTML(receipt(v,true))}
  if(b.dataset.x){const v=S.invoices.find(x=>x.no==b.dataset.x);needPin(()=>modal('إلغاء فاتورة '+v.no,'<label>سبب الإلغاء</label><input id="vR">',[{label:'إلغاء الفاتورة',cls:'red',fn:()=>{v.void=true;v.voidReason=$('vR').value;v.voidAt=Date.now();save();renderInv()}},{label:'رجوع'}]))}
};

/* shift */
function shiftStats(sh){
  const L=S.invoices.filter(v=>v.shiftId===sh.id);const ok=L.filter(v=>!v.void);
  const by=k=>ok.reduce((a,v)=>(a[v[k]]=(a[v[k]]||0)+v.total,a),{});
  const pm=ok.reduce((a,v)=>(a[v.pay.method]=(a[v.pay.method]||0)+v.total,a),{});
  const items={};ok.forEach(v=>v.lines.forEach(l=>{const x=items[l.name]=items[l.name]||{q:0,t:0};x.q+=l.qty;x.t+=l.qty*l.price}));
  const s=k=>r2(ok.reduce((a,v)=>a+v[k],0));
  return {count:ok.length,voids:L.length-ok.length,total:s('total'),sub:s('sub'),disc:s('disc'),svc:s('svc'),tax:s('tax'),del:s('del'),pm,type:by('type'),items:Object.entries(items).sort((a,b)=>b[1].q-a[1].q),cashExp:r2(sh.opening+(pm.cash||0))};
}
function renderShift(){
  const sh=S.shift;
  if(!sh){$('shiftBox').innerHTML=`<div class="box"><h2>مفيش وردية مفتوحة</h2><p style="color:var(--mut)">افتحي وردية عشان تبدأي تبيعي.</p><button class="gold" id="opSh">فتح وردية</button></div>${pastShifts()}`;$('opSh').onclick=()=>openShiftM(renderShift);return}
  const st=shiftStats(sh);
  $('shiftBox').innerHTML=`<div class="box"><h2>الوردية الحالية — ${esc(sh.cashier)}</h2><p style="color:var(--mut);margin-top:0">مفتوحة من ${dt(sh.openedAt)} · رصيد أول الوردية ${money(sh.opening)}</p>
  <div class="kpis"><div class="kpi"><small>إجمالي المبيعات</small><b>${money(st.total)}</b></div><div class="kpi"><small>عدد الفواتير</small><b>${f(st.count)}</b></div><div class="kpi"><small>المفروض في الدرج كاش</small><b>${money(st.cashExp)}</b></div><div class="kpi"><small>الخصومات</small><b>${money(st.disc)}</b></div></div>
  <div class="row" style="align-items:start"><div><h3>حسب طريقة الدفع</h3><table>${Object.entries(PM).map(([k,v])=>`<tr><td>${v}</td><td class="num">${money(st.pm[k]||0)}</td></tr>`).join('')}</table></div>
  <div><h3>حسب نوع الطلب</h3><table>${Object.entries(TY).map(([k,v])=>`<tr><td>${v}</td><td class="num">${money(st.type[k]||0)}</td></tr>`).join('')}</table></div></div>
  <h3 style="margin-top:14px">الأصناف المباعة</h3><div class="scroll"><table><tr><th>الصنف</th><th>الكمية</th><th>القيمة</th></tr>${st.items.map(([n,x])=>`<tr><td>${esc(n)}</td><td>${x.q}</td><td class="num">${money(x.t)}</td></tr>`).join('')||'<tr><td colspan="3" class="empty">لسه مفيش مبيعات</td></tr>'}</table></div>
  <div class="row" style="margin-top:14px"><div><label>الكاش اللي اتعد فعلاً في الدرج</label><input id="actual" type="number" min="0" inputmode="decimal"></div><button id="prSh" style="flex:0 0 auto">طباعة تقرير</button><button class="red" id="clSh" style="flex:0 0 auto">تقفيل الوردية</button></div>
  ${Object.keys(S.open).length?`<p style="color:var(--red)">تنبيه: في ${Object.keys(S.open).length} طاولة لسه مفتوحة.</p>`:''}</div>${pastShifts()}`;
  $('prSh').onclick=()=>printHTML(shiftReceipt(sh,st,$('actual').value));
  $('clSh').onclick=()=>{const a=$('actual').value;if(a===''){toast('اكتبي الكاش الفعلي اللي في الدرج');return}
    confirmM(`تقفيل الوردية؟ الفرق: ${money(+a-st.cashExp)}`,()=>{const rec={...sh,closedAt:Date.now(),actual:+a,total:st.total,count:st.count,cashExp:st.cashExp};S.shifts.push(rec);printHTML(shiftReceipt(rec,st,a));S.shift=null;save();renderHead();renderShift()})};
  $('shiftBox').querySelectorAll('[data-ps]').forEach(b=>b.onclick=psClick);
}
function pastShifts(){
  if(!S.shifts.length)return'';
  return `<div class="box scroll"><h2>الورديات السابقة</h2><table><tr><th>الكاشير</th><th>من</th><th>إلى</th><th>الفواتير</th><th>المبيعات</th><th>فرق الدرج</th><th></th></tr>${S.shifts.slice().reverse().slice(0,60).map(s=>`<tr><td>${esc(s.cashier)}</td><td>${dt(s.openedAt)}</td><td>${dt(s.closedAt)}</td><td>${s.count}</td><td class="num">${money(s.total)}</td><td class="num" style="color:${s.actual-s.cashExp<0?'var(--red)':'var(--green)'}">${money(s.actual-s.cashExp)}</td><td><button data-ps="${s.id}">طباعة</button></td></tr>`).join('')}</table></div>`;
}
function psClick(e){const s=S.shifts.find(x=>x.id===e.target.dataset.ps);printHTML(shiftReceipt(s,shiftStats(s),s.actual))}
document.addEventListener('click',e=>{if(e.target.dataset&&e.target.dataset.ps&&!S.shift)psClick(e)});
function shiftReceipt(sh,st,actual){
  const a=actual===''||actual==null?null:+actual;
  return `<h1>${esc(S.settings.name)}</h1><div class="c b">تقرير وردية</div><div class="hr"></div><table><tr><td>الكاشير</td><td class="r">${esc(sh.cashier)}</td></tr><tr><td>من</td><td class="r">${dt(sh.openedAt)}</td></tr><tr><td>إلى</td><td class="r">${dt(sh.closedAt||Date.now())}</td></tr></table><div class="hr"></div>
  <table><tr><td>عدد الفواتير</td><td class="r">${st.count}</td></tr><tr><td>ملغية</td><td class="r">${st.voids}</td></tr><tr><td>المبيعات قبل الخصم</td><td class="r">${f(st.sub)}</td></tr><tr><td>الخصومات</td><td class="r">${f(st.disc)}</td></tr><tr><td>الخدمة</td><td class="r">${f(st.svc)}</td></tr><tr><td>الضريبة</td><td class="r">${f(st.tax)}</td></tr><tr><td>التوصيل</td><td class="r">${f(st.del)}</td></tr><tr class="big"><td>الإجمالي</td><td class="r">${f(st.total)}</td></tr></table><div class="hr"></div>
  <table>${Object.entries(PM).map(([k,v])=>`<tr><td>${v}</td><td class="r">${f(st.pm[k]||0)}</td></tr>`).join('')}</table><div class="hr"></div>
  <table><tr><td>رصيد أول الوردية</td><td class="r">${f(sh.opening)}</td></tr><tr><td>المفروض في الدرج</td><td class="r">${f(st.cashExp)}</td></tr>${a!=null?`<tr><td>الفعلي</td><td class="r">${f(a)}</td></tr><tr class="b"><td>الفرق</td><td class="r">${f(a-st.cashExp)}</td></tr>`:''}</table><div class="hr"></div>
  <table>${st.items.map(([n,x])=>`<tr><td>${esc(n)}</td><td>${x.q}</td><td class="r">${f(x.t)}</td></tr>`).join('')}</table>`;
}

/* menu */
let editId=null;
function renderMenu(){
  $('catList').innerHTML=S.cats.map(c=>`<span class="pill" style="display:flex;align-items:center;gap:6px;padding:4px 6px 4px 12px">${esc(c.name)} <button data-rc="${c.id}" style="min-height:32px">تعديل</button><button data-dc="${c.id}" class="ghost" style="min-height:32px">حذف</button></span>`).join('');
  $('iCat').innerHTML=S.cats.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join('');
  const cn=id=>(S.cats.find(c=>c.id===id)||{}).name||'—';
  $('itemT').innerHTML=`<tr><th>الصنف</th><th>القسم</th><th>التحضير</th><th>السعر</th><th>متاح</th><th></th></tr>`+S.items.map(i=>`<tr><td>${esc(i.name)}</td><td>${esc(cn(i.cat))}</td><td>${ST[i.station]}</td><td class="num">${money(i.price)}</td><td><button data-on="${i.id}">${i.on?'متاح':'موقوف'}</button></td><td style="white-space:nowrap"><button data-ed="${i.id}">تعديل</button> <button data-del="${i.id}" class="ghost">حذف</button></td></tr>`).join('');
}
$('addCat').onclick=()=>{const n=$('newCat').value.trim();if(!n)return;S.cats.push({id:uid(),name:n});$('newCat').value='';save();renderMenu();renderCats()};
$('catList').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.rc){const c=S.cats.find(x=>x.id===b.dataset.rc);modal('تعديل القسم',`<input id="rcIn" value="${esc(c.name)}">`,[{label:'حفظ',cls:'gold',fn:()=>{c.name=$('rcIn').value.trim()||c.name;save();renderMenu();renderCats()}},{label:'إلغاء'}])}
  if(b.dataset.dc){if(S.items.some(i=>i.cat===b.dataset.dc))return toast('انقلي أو احذفي أصناف القسم الأول');S.cats=S.cats.filter(c=>c.id!==b.dataset.dc);save();renderMenu();renderCats()}};
$('iSave').onclick=()=>{const n=$('iName').value.trim(),p=+$('iPrice').value;if(!n||!(p>=0)||$('iPrice').value==='')return toast('اكتبي الاسم والسعر');
  if(editId){Object.assign(S.items.find(i=>i.id===editId),{name:n,price:p,cat:$('iCat').value,station:$('iSt').value});editId=null;$('iSave').textContent='حفظ الصنف'}
  else S.items.push({id:uid(),name:n,price:p,cat:$('iCat').value,station:$('iSt').value,on:true});
  $('iName').value='';$('iPrice').value='';save();renderMenu();renderGrid();toast('تم الحفظ')};
$('itemT').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.on){const i=S.items.find(x=>x.id===b.dataset.on);i.on=!i.on}
  if(b.dataset.ed){const i=S.items.find(x=>x.id===b.dataset.ed);editId=i.id;$('iName').value=i.name;$('iPrice').value=i.price;$('iCat').value=i.cat;$('iSt').value=i.station;$('iSave').textContent='حفظ التعديل';$('iName').focus();return}
  if(b.dataset.del){const id=b.dataset.del;return confirmM('حذف الصنف ده؟',()=>{S.items=S.items.filter(x=>x.id!==id);save();renderMenu();renderGrid()})}
  save();renderMenu();renderGrid()};

/* settings */
const SF={sName:'name',sAddr:'addr',sPhone:'phone',sFoot:'foot',sTaxNo:'taxNo',sSvc:'svc',sTax:'tax',sDel:'del',sTables:'tables',sW:'w',sKt:'kt',sPin:'pin',sTh:'theme',sPr:'printer',sKPr:'kPrinter'};
$('sTh').onchange=e=>{document.documentElement.dataset.th=e.target.value};
async function renderSet(){
  if(API){try{const ps=await API.printers();const o='<option value="">الطابعة الافتراضية</option>'+ps.map(p=>`<option value="${esc(p.name)}">${esc(p.displayName||p.name)}</option>`).join('');$('sPr').innerHTML=o;$('sKPr').innerHTML=o.replace('الطابعة الافتراضية','نفس طابعة الفواتير')}catch(e){}}
  for(const[k,v]of Object.entries(SF))$(k).value=S.settings[v]??'';
}
$('sSave').onclick=()=>{for(const[k,v]of Object.entries(SF)){let x=$(k).value;if(['svc','tax','del','tables'].includes(v))x=Math.max(0,+x||0);S.settings[v]=x}S.settings.tables=Math.max(1,Math.min(100,S.settings.tables));save();renderHead();toast('اتحفظت الإعدادات')};
$('bExp').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='3mcafe-backup-'+day(Date.now())+'.json';document.body.appendChild(a);a.click();a.remove();toast('تم تنزيل النسخة')};
$('bImp').onchange=e=>{const fl=e.target.files[0];if(!fl)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d.items||!d.settings)throw 0;confirmM('استبدال كل البيانات الحالية بالنسخة دي؟',()=>{S=d;save();location.reload()})}catch(x){toast('الملف ده مش نسخة صحيحة')}};r.readAsText(fl);e.target.value=''};
if(API){$('bFolder').onclick=()=>API.openBackups()}else document.querySelectorAll('.desk').forEach(e=>e.style.display='none');
$('bReset').onclick=()=>confirmM('هيتمسح كل حاجة: الفواتير والورديات والمنيو. متأكدة؟ (خدي نسخة احتياطية الأول)',()=>{S=seed();save();location.reload()});

/* nav */
const guarded={menu:1,set:1};
function show(v){
  const go=()=>{document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));$('nav').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));
    ({pos:()=>{renderCats();renderGrid();renderCart()},tables:renderTables,inv:renderInv,shift:renderShift,menu:renderMenu,set:renderSet})[v]()};
  guarded[v]?needPin(go):go();
}
$('nav').onclick=e=>{const b=e.target.closest('button');if(b)show(b.dataset.v)};
$('mb').onclick=e=>{if(e.target.id==='mb')closeM()};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();const k={F1:'pos',F2:'tables',F3:'inv',F4:'shift',F6:'menu',F7:'set'}[e.key];if(k){e.preventDefault();closeM();show(k)}});
function renderHead(){document.documentElement.dataset.th=S.settings.theme||'gold';$('hName').textContent=S.settings.name;$('hShift').textContent=S.shift?`وردية ${S.shift.cashier} — من ${new Date(S.shift.openedAt).toLocaleTimeString('ar-EG',{timeStyle:'short'})}`:'لا توجد وردية مفتوحة';document.title=S.settings.name+' — الكاشير'}
const tick=()=>$('clock').textContent=new Date().toLocaleString('ar-EG',{weekday:'long',hour:'2-digit',minute:'2-digit'});
setInterval(tick,30000);tick();
$('fFrom').value=$('fTo').value=day(Date.now());
renderHead();show('pos');
if(!S.shift)setTimeout(()=>openShiftM(),300);
}
