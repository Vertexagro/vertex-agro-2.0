/* VerteX Agro · ligação com o servidor (Supabase)
   1. Copie este arquivo para  vertex-env.js  (mesma pasta do index.html).
   2. Preencha com os dados do SEU projeto: Supabase → Project Settings → API.
   Enquanto estiver em branco, o site abre em modo demonstração (dados só no navegador).
   Use SOMENTE a chave "anon public". A chave "service_role" NUNCA entra em arquivo do site. */
window.VERTEX_ENV = {
  SUPABASE_URL: 'https://finhtfgwihkyyfxffeah.supabase.co',        // ex.: 'https://abcdefghijklm.supabase.co'
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbmh0Zmd3aWhreXlmeGZmZWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQzNDY2ODUsImV4cCI6MjEwOTkyMjY4NX0.vTkmf2ZmQEbX5nudSHUh9z1QWrzzpOwG3iTqKu2U6io',   // ex.: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'
  ORGANIZACAO: 'VerteX Agro',
};
