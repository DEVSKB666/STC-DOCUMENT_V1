import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
const LS_USER='stc_user', LS_TOKEN='stc_token', LS_USERS='stc_users'
const readJSON=(k,f=null)=>{ try { return JSON.parse(localStorage.getItem(k)) ?? f } catch { return f } }
export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem(LS_TOKEN) || '')
  const user = ref(readJSON(LS_USER, null))
  const isAuthed = computed(() => !!token.value)
  ;(()=>{ const list=readJSON(LS_USERS,[]); if(!list.find(u=>u.username==='admin')){ list.push({id:1,username:'admin',email:'admin@example.com',role:'admin',password:'admin'}); localStorage.setItem(LS_USERS, JSON.stringify(list)) } })()
  async function login({ username, password }){
    const list = readJSON(LS_USERS, []); const u = list.find(x=>x.username===username && x.password===password)
    if(!u) throw new Error('Invalid credentials')
    token.value='local-token'; user.value={ id:u.id, username:u.username, email:u.email, role:u.role }
    localStorage.setItem(LS_TOKEN, token.value); localStorage.setItem(LS_USER, JSON.stringify(user.value))
  }
  async function register({ username, email, password }){
    const list=readJSON(LS_USERS,[]); if(list.find(u=>u.username===username)) throw new Error('Username already exists')
    const id=Math.max(0,...list.map(u=>u.id||0))+1; list.push({ id, username, email, role:'user', password }); localStorage.setItem(LS_USERS, JSON.stringify(list)); return {ok:true}
  }
  function listUsers(){ return readJSON(LS_USERS,[]) }
  function logout(){ token.value=''; user.value=null; localStorage.removeItem(LS_TOKEN); localStorage.removeItem(LS_USER) }
  return { token, user, isAuthed, login, register, logout, listUsers }
})
