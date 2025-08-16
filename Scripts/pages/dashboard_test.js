import {
  auth,
  db,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setDoc,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  collection,
  query,
  where
} from "../../firebase.js";

document.addEventListener("DOMContentLoaded", function () {
  const tab_data = [
    { id: 'tab1', title: 'Active Auctions', content: 'Content for Active Auctions' },
    { id: 'tab2', title: 'My Bids', content: 'Content for My Bids' },
    { id: 'tab3', title: 'Sales History', content: 'Content for Sales History' },
    { id: 'tab4', title: 'Achievements', content: 'Content for Achievements' }
  ];

  const container = document.getElementById('tab-container');

  const tabs_div = document.createElement('div');
  tabs_div.className = 'tabs';

  const content_box = [];

  tab_data.forEach((tab, index) => {
    const button = document.createElement('button');
    button.className = 'tab-button' + (index === 0 ? ' active' : '');
    button.textContent = tab.title;
    button.dataset.tab = tab.id;

    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(tab.id).classList.add('active');
    });

    tabs_div.appendChild(button);

    const content = document.createElement('div');
    content.className = 'tab-content' + (index === 0 ? ' active' : '');
    content.id = tab.id;
    content.innerHTML = `<p>${tab.content}</p>`;
    content_box.push(content);
  });

  container.appendChild(tabs_div);
  content_box.forEach(div => container.appendChild(div));
});
