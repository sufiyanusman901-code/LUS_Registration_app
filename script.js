import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBH48QtRIKpHrspl32_OtdQHr4UJ_5ZYw",
    authDomain: "gaaela-app-sufiyan-2026.firebaseapp.com",
    projectId: "gaaela-app-sufiyan-2026",
    storageBucket: "gaaela-app-sufiyan-2026.appspot.com",
    messagingSenderId: "1006603080847",
    appId: "1:1006603080847:web:d480be6c1ca3abd75accta"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = "Fe'amaa jira...";

    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const livingPlace = document.getElementById('livingPlace').value;

    try {
        await addDoc(collection(db, "users"), {
            fullName: fullName,
            age: age,
            birthPlace: birthPlace,
            livingPlace: livingPlace,
            createdAt: new Date()
        });

        alert("Galmeen milkaa'era!");
        form.reset();
    } catch (error) {
        console.error("Dogoggora: ", error);
        alert("Galmeen hin milkoofne.");
    } finally {
        submitBtn.textContent = "Galchi (Save)";
    }
});