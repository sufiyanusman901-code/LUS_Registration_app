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



const tableBody = document.getElementById('userTableBody');

// onSnapshot fayyadamuun data real-time dhaan fiduu
onSnapshot(collection(db, "users"), (snapshot) => {
    tableBody.innerHTML = ""; // Dursee qulqulleessa

    if (snapshot.empty) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #b2bec3;">Ragaan galmaa'e hin jiru.</td></tr>`;
        return;
    }

    snapshot.forEach((doc) => {
        const user = doc.data();
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullName || ''}</td>
            <td>${user.age || ''}</td>
            <td>${user.birthPlace || ''}</td>
            <td>${user.livingPlace || ''}</td>
            <td><span class="badge pending">Pending</span></td>
            <td><span class="badge approved">Approved</span></td>
        `;
        tableBody.appendChild(row);
    });
}, (error) => {
    console.error("Data fiduufi irratti dogoggora uumame: ", error);
});