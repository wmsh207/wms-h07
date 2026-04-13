// Importa o núcleo do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// COLOQUE AS SUAS CHAVES AQUI UMA ÚNICA VEZ
const firebaseConfig = {
  apiKey: "AIzaSyA_i9BkvMFIXxTTtJA6dyFc2HLXKP-TmHU",
  authDomain: "wms-h7.firebaseapp.com",
  projectId: "wms-h7",
  storageBucket: "wms-h7.firebasestorage.app",
  messagingSenderId: "274655939351",
  appId: "1:274655939351:web:533f7b66d3f421596b8552"
};

// Inicializa a conexão
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta o banco de dados para as outras telas usarem
export { db };