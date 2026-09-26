// All charts are generated from AGENTS in data.js (sorted high → low by CQ).
function agentList(){ return Object.values(AGENTS); }

function initCharts() {
  const font = { family: "'Segoe UI',Arial,sans-serif" };
  const tooltip = { backgroundColor:'#1c2a3a', titleFont:{...font,size:12}, bodyFont:{...font,size:11}, padding:10, cornerRadius:8 };
  const agents = agentList();
  const many = agents.length > 6;
  const scoreColor = v => v >= 95 ? '#16a34a' : v >= 85 ? '#0d9488' : v >= 75 ? '#ea580c' : '#dc2626';

  // 1. CQ Score vs Targets
  const minScore = Math.min(...agents.map(a=>a.cq));
  new Chart(document.getElementById('scoreChart'), {
    type:'bar',
    data:{ labels: agents.map(a=>a.name), datasets:[
      { label:'CQ Score', data: agents.map(a=>a.cq), backgroundColor: agents.map(a=>scoreColor(a.cq)), borderRadius:6, barPercentage:0.62, categoryPercentage:0.8, order:2 },
      { label:'Team Target 95%', data: agents.map(()=>95), type:'line', borderColor:'#dc2626', borderWidth:2, borderDash:[6,4], pointRadius:0, fill:false, order:1 },
      { label:'Individual Target 85%', data: agents.map(()=>85), type:'line', borderColor:'#f59e0b', borderWidth:1.5, borderDash:[3,3], pointRadius:0, fill:false, order:1 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:1200,easing:'easeOutQuart'}, layout:{padding:{top:16}},
      plugins:{ tooltip, legend:{ display:true, position:'bottom', labels:{font:{...font,size:11}, boxWidth:12, padding:12, usePointStyle:true} } },
      scales:{ y:{ min: Math.max(0, Math.floor((minScore-20)/10)*10), max:100, ticks:{callback:v=>v+'%', font:{...font,size:11}, stepSize:10}, grid:{color:'rgba(128,128,128,.1)'} },
               x:{ ticks:{ font:{...font,size: many?10:11}, maxRotation: many?45:0, minRotation: many?45:0, autoSkip:false }, grid:{display:false} } } },
    plugins:[{ id:'barLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx, meta=chart.getDatasetMeta(0); ctx.save();
      meta.data.forEach((bar,i)=>{ const v=chart.data.datasets[0].data[i]; const p={x:bar.x, y:chart.scales.y.getPixelForValue(v), base:chart.chartArea.bottom}; if(Math.abs(p.base-p.y)<16) return; ctx.fillStyle='#fff'; ctx.font=`bold ${many?10:11}px Segoe UI,Arial,sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(chart.data.datasets[0].data[i]+'%', p.x, (p.y+p.base)/2); });
      ctx.restore(); } }]
  });

  // 2. Error distribution doughnut
  const keys = TEAM_META.params;
  const totals = keys.map(k => agents.reduce((s,a)=>s+(a.params[k]||0),0));
  const ord = keys.map((k,i)=>i).sort((a,b)=>totals[b]-totals[a]);
  new Chart(document.getElementById('errorChart'), {
    type:'doughnut',
    data:{ labels: ord.map(i=>PARAM_LABELS[keys[i]]), datasets:[{ data: ord.map(i=>totals[i]), backgroundColor: ord.map(i=>PARAM_COLORS[keys[i]]), borderWidth:2, borderColor:'#fff', hoverOffset:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{animateRotate:true,animateScale:true,duration:1200,easing:'easeOutQuart'},
      plugins:{ tooltip, legend:{ display:true, position:'bottom', labels:{font:{...font,size:11}, boxWidth:12, padding:10, usePointStyle:true} } }, cutout:'60%' },
    plugins:[{ id:'doughnutLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx, meta=chart.getDatasetMeta(0); const d=chart.data.datasets[0].data; const t=d.reduce((a,b)=>a+b,0); ctx.save();
      meta.data.forEach((arc,i)=>{ const pct=Math.round(d[i]/t*100); if(pct<7) return; const ang=(arc.startAngle+arc.endAngle)/2, r=(arc.innerRadius+arc.outerRadius)/2;
        ctx.fillStyle='#fff'; ctx.font='bold 11px Segoe UI,Arial,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(pct+'%', arc.x+r*Math.cos(ang), arc.y+r*Math.sin(ang)); });
      ctx.restore(); } }]
  });

  // 3. Errors per agent (highest first)
  const byErr = [...agents].sort((a,b)=>b.totalErrors-a.totalErrors);
  const maxE = Math.max(...byErr.map(a=>a.totalErrors));
  new Chart(document.getElementById('agentErrorChart'), {
    type:'bar',
    data:{ labels: byErr.map(a=>a.name), datasets:[{ label:'Total Errors', data: byErr.map(a=>a.totalErrors), backgroundColor: byErr.map(a=>a.color), borderRadius:6, barPercentage:0.62, categoryPercentage:0.8 }] },
    options:{ responsive:true, maintainAspectRatio:false, indexAxis:'y', animation:{duration:1200,easing:'easeOutQuart'}, layout:{padding:{right:24}},
      plugins:{ tooltip:{...tooltip, callbacks:{ afterLabel:(c)=>{ const a=byErr[c.dataIndex]; return (a.totalErrors/a.audits).toFixed(1)+' per audit · '+a.audits+' audits'; } } }, legend:{display:false} },
      scales:{ x:{ min:0, suggestedMax: Math.ceil(maxE*1.1), ticks:{font:{...font,size:11}}, grid:{color:'rgba(128,128,128,.1)'} }, y:{ ticks:{font:{...font,size:11}}, grid:{display:false} } } },
    plugins:[{ id:'hbarLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx, meta=chart.getDatasetMeta(0); ctx.save();
      meta.data.forEach((bar,i)=>{ const v=chart.data.datasets[0].data[i]; if(!v) return; ctx.fillStyle='#fff'; ctx.font='bold 11px Segoe UI,Arial,sans-serif'; ctx.textAlign='right'; ctx.textBaseline='middle'; ctx.fillText(v, bar.x-6, bar.y); });
      ctx.restore(); } }]
  });

  buildHeatmap();
}

function buildHeatmap() {
  const container = document.getElementById('heatmapContainer');
  if (!container) return;
  const agents = agentList();
  const keys = TEAM_META.params;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  function cell(v) {
    if (v === 0) return isDark ? { bg:'#052e16', bd:'#166534', tx:'#4ade80' } : { bg:'#f0fdf4', bd:'#bbf7d0', tx:'#166534' };
    if (v <= 2)  return isDark ? { bg:'#422006', bd:'#a16207', tx:'#fde68a' } : { bg:'#fef9c3', bd:'#fde047', tx:'#713f12' };
    if (v <= 4)  return isDark ? { bg:'#431407', bd:'#c2410c', tx:'#fed7aa' } : { bg:'#fed7aa', bd:'#fb923c', tx:'#7c2d12' };
    if (v <= 9)  return isDark ? { bg:'#450a0a', bd:'#991b1b', tx:'#fca5a5' } : { bg:'#fca5a5', bd:'#ef4444', tx:'#7f1d1d' };
    return isDark ? { bg:'#7f1d1d', bd:'#dc2626', tx:'#fff' } : { bg:'#dc2626', bd:'#dc2626', tx:'#fff' };
  }
  const txP = isDark ? '#e8e4f0' : '#1c2a3a', txS = isDark ? '#9c8a70' : '#8a7a60', txH = isDark ? '#6a5a50' : '#b8a888';
  let h = `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:separate;border-spacing:4px;min-width:${120+keys.length*64}px;"><thead><tr><th style="font-size:11px;font-weight:600;color:${txS};text-align:left;padding:2px 8px;">Agent</th>`;
  keys.forEach(k => h += `<th style="font-size:10px;font-weight:600;color:${txS};text-align:center;padding:2px 4px;white-space:nowrap;">${PARAM_SHORT[k]}</th>`);
  h += `<th style="font-size:10px;font-weight:700;color:${txS};text-align:center;padding:2px 4px;">Total</th></tr></thead><tbody>`;
  agents.forEach(a => {
    h += `<tr style="cursor:pointer" onclick="openModal('${Object.keys(AGENTS).find(k=>AGENTS[k]===a)}')"><td style="font-size:12px;font-weight:600;padding:3px 8px;white-space:nowrap;color:${txP};">${a.name}</td>`;
    keys.forEach(k => { const v=a.params[k]||0, c=cell(v); h += `<td style="padding:3px;"><div style="background:${c.bg};border:1px solid ${c.bd};border-radius:8px;padding:7px 2px;text-align:center;font-size:13px;font-weight:700;color:${c.tx};min-width:32px;">${v===0?'✓':v}</div></td>`; });
    h += `<td style="padding:3px 6px;text-align:center;font-size:13px;font-weight:700;color:${txP};">${a.totalErrors}</td></tr>`;
  });
  h += `</tbody></table></div>`;
  const lbg = isDark ? ['#052e16','#422006','#431407','#450a0a','#7f1d1d'] : ['#f0fdf4','#fef9c3','#fed7aa','#fca5a5','#dc2626'];
  const lbd = isDark ? ['#166534','#a16207','#c2410c','#991b1b','#dc2626'] : ['#bbf7d0','#fde047','#fb923c','#ef4444','#dc2626'];
  h += `<div style="display:flex;align-items:center;gap:8px;margin-top:12px;justify-content:center;flex-wrap:wrap;"><span style="font-size:11px;color:${txS};">0</span><div style="display:flex;gap:3px;">${lbg.map((bg,i)=>`<div style="width:16px;height:16px;border-radius:3px;background:${bg};border:1px solid ${lbd[i]};"></div>`).join('')}</div><span style="font-size:11px;color:${txS};">10+</span><span style="font-size:10px;color:${txH};margin-left:4px;">✓ = zero errors · lower is better · click a row to open the report</span></div>`;
  container.innerHTML = h;
}

document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  new MutationObserver(() => buildHeatmap()).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
});
