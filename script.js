// update year
document.getElementById('year').textContent = new Date().getFullYear();

// copy phone button
const copyBtn = document.getElementById('copyPhone');
const copyMsg = document.getElementById('copyMsg');

copyBtn.addEventListener('click', () => {
  const phone = '+6282223116787';
  navigator.clipboard?.writeText(phone).then(() => {
    copyMsg.style.display = 'block';
    copyMsg.textContent = 'Number copied: ' + phone;
    setTimeout(()=> copyMsg.style.display = 'none', 3000);
  }).catch(()=> {
    prompt('Copy this number:', phone);
  });
});
