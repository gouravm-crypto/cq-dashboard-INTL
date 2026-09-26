function getScoreBadgeClass(s){ if(s>=90) return 'csb-high'; if(s>=75) return 'csb-mid'; return 'csb-low'; }

function buildMetricsHTML(a){
  const sc = a.cq>=90 ? 'gold' : a.cq>=80 ? 'green' : 'orange';
  const gap = Math.max(0, 95 - a.cq);
  return `
    <div class="mm"><div class="mm-val ${sc}">${a.cq}%</div><div class="mm-lbl">CQ Score</div></div>
    <div class="mm"><div class="mm-val white">${a.audits}</div><div class="mm-lbl">Audits</div></div>
    <div class="mm"><div class="mm-val ${a.ncf?'red':'green'}">${a.ncf}</div><div class="mm-lbl">NCF</div></div>
    <div class="mm"><div class="mm-val orange">${a.totalErrors}</div><div class="mm-lbl">Total Errors</div></div>
    <div class="mm"><div class="mm-val red">${gap}%</div><div class="mm-lbl">Gap to Target</div></div>`;
}

function buildModalBody(agentKey, highlightParam){
  const a = AGENTS[agentKey];
  let html = '';
  const indiv = 85, team = 95, gap = indiv - a.cq;
  const gc = a.cq>=95 ? 'bar-green' : a.cq>=90 ? 'bar-gold' : a.cq>=85 ? 'bar-green' : 'bar-orange';
  const gapText = gap>0 ? `${gap}% below individual target (85%)` : `✓ Individual target met · ${team-a.cq>0 ? (team-a.cq)+'% to team target (95%)' : 'Team target met!'}`;
  const pctColor = a.cq>=90 ? '#b8860b' : a.cq>=85 ? '#16a34a' : '#ea580c';
  html += `<div class="modal-sec-lbl">CQ Score</div>
    <div class="gauge-wrap"><div style="flex:1;">
      <div class="gauge-track"><div class="bar-fill ${gc}" style="width:${a.cq}%;height:100%;border-radius:6px;"></div>
        <div class="gauge-target" style="left:85%;background:#f59e0b;" title="Individual Target 85%"></div>
        <div style="position:absolute;top:-2px;bottom:-2px;left:95%;width:2px;background:#dc2626;border-radius:2px;" title="Team Target 95%"></div></div>
      <div class="gauge-labels"><span>0%</span><span style="color:#f59e0b;font-weight:700;">Indiv. 85%</span><span style="color:#dc2626;font-weight:700;">Team 95%</span><span>100%</span></div>
    </div>
    <div style="text-align:right;flex-shrink:0;min-width:70px;"><div style="font-family:Georgia,serif;font-size:30px;font-weight:800;color:${pctColor};line-height:1;">${a.cq}%</div><div style="font-size:10px;color:#8a7a60;margin-top:2px;">${gapText}</div></div></div>`;

  html += `<div class="modal-sec-lbl">Errors by Parameter</div><div class="param-mini-grid">`;
  TEAM_META.params.forEach(k => { const v=a.params[k]||0, hl=k===highlightParam;
    html += `<div class="pmg-item${hl?' pmg-hl':''}"><div class="pmg-val" style="color:${v===0?'#16a34a':PARAM_COLORS[k]};">${v===0?'✓':v}</div><div class="pmg-lbl">${PARAM_LABELS[k]}</div></div>`; });
  html += `</div>`;

  html += `<div class="modal-sec-lbl">Areas of Improvement</div><div class="aoi-list">`;
  a.aois.forEach(aoi => { const c = PARAM_COLORS[aoi.cat] || '#16a34a';
    html += `<div class="aoi-item" style="border-left-color:${c};"><div class="aoi-cat" style="color:${c};">${aoi.label}</div><div class="aoi-text">${aoi.text}</div></div>`; });
  html += `</div>`;

  html += `<div class="modal-sec-lbl">Audit Cases — ${a.audits} total</div>`;
  a.cases.forEach((c,i) => {
    const hl = highlightParam && a.paramCaseMap[highlightParam] && a.paramCaseMap[highlightParam].includes(i);
    const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    html += `<div class="case-card${hl?' case-hl':''}">
      <div class="case-hd"><div class="case-query">${esc(c.query)}<span class="case-date">${c.date}</span>${c.ncf?'<span class="ncf-tag">NCF</span>':''}${hl?' <span class="case-flag">▶ Flagged</span>':''}</div>
      <span class="case-badge ${getScoreBadgeClass(c.score)}">${c.score}%</span></div>
      <div class="case-text">${esc(c.comment)}</div></div>`;
  });

  html += `<div class="modal-sec-lbl">What To Do Better</div><div class="better-box">`;
  a.aois.forEach(aoi => html += `<div class="better-item"><span class="better-arrow">▸</span>${aoi.text.replace(/^.*?\. /,'')}</div>`);
  html += `</div>`;
  return html;
}

function openModal(agentKey, highlightParam){
  const a = AGENTS[agentKey]; if(!a) return;
  document.getElementById('m-name').textContent = a.name;
  document.getElementById('m-role').textContent = TEAM_META.team + ' · ' + TEAM_META.month;
  document.getElementById('m-metrics').innerHTML = buildMetricsHTML(a);
  document.getElementById('m-body').innerHTML = buildModalBody(agentKey, highlightParam || null);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (highlightParam) setTimeout(()=>{ const f=document.querySelector('.case-hl'); if(f) f.scrollIntoView({behavior:'smooth',block:'center'}); },300);
  else document.getElementById('m-body').scrollTop = 0;
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); document.body.style.overflow=''; }
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-overlay').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
});
// Deep link: index.html#agent=<key> opens that agent's report directly (used by newsletter links)
document.addEventListener('DOMContentLoaded', () => {
  const m = location.hash.match(/agent=([a-z0-9]+)/i);
  if (m && AGENTS[m[1].toLowerCase()]) setTimeout(() => openModal(m[1].toLowerCase()), 500);
});
