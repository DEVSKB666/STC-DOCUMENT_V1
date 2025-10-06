import { defineStore } from 'pinia'
import { ref } from 'vue'
const LS_DOCS='stc_docs'; const readJSON=(k,f=null)=>{ try { return JSON.parse(localStorage.getItem(k)) ?? f } catch { return f } }
export const useDocStore = defineStore('docs', () => {
  const items = ref(readJSON(LS_DOCS, [])); const loading=ref(false)
  async function fetchDocuments(){ loading.value=true; try{ items.value=readJSON(LS_DOCS,[]) } finally { loading.value=false } }
  async function uploadDocument(file){ const id=Math.max(0,...items.value.map(d=>d.id||0))+1; const url=file?URL.createObjectURL(file):'#'; const d={id,title:file?.name||'เอกสาร',filename:file?.name||'file',url,created_at:new Date().toISOString()}; const next=[d,...items.value]; items.value=next; localStorage.setItem(LS_DOCS, JSON.stringify(next)); return {id} }
  async function deleteDocument(id){ const next=items.value.filter(d=>d.id!==id); items.value=next; localStorage.setItem(LS_DOCS, JSON.stringify(next)) }
  return { items, loading, fetchDocuments, uploadDocument, deleteDocument }
})
