// MyOS Base Converter
const root = document.getElementById('BaseConvApp');
if (root) {
  const fields={2:'bc-2',8:'bc-8',10:'bc-10',16:'bc-16'};
  const valid={2:/^[01]*$/,8:/^[0-7]*$/,10:/^[0-9]*$/,16:/^[0-9a-fA-F]*$/};
  function setAll(v,except){ for(const b in fields){ if(fields[b]===except)continue; document.getElementById(fields[b]).value = v==null?'':v.toString(Number(b)).toUpperCase(); } }
  for(const b in fields){ const el=document.getElementById(fields[b]); el.addEventListener('input',()=>{
    const raw=el.value.trim(); const err=document.getElementById('bc-err');
    if(raw===''){ setAll(null,fields[b]); err.textContent=''; return; }
    if(!valid[b].test(raw)){ err.textContent='Not a valid base-'+b+' number.'; return; }
    err.textContent='';
    const v=parseInt(raw,Number(b));
    if(isNaN(v)||v>Number.MAX_SAFE_INTEGER){ err.textContent='Number too large.'; return; }
    setAll(v,fields[b]);
  }); }
}
