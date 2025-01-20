'use strict';

const isDark = localStorage.getItem('isDarkTheme');
const onDarkTheme = () => (
  themeButton.classList.add('bx-sun'), root.classList.add('dark-theme')
);
isDark && onDarkTheme();

const on = () => (onDarkTheme(), localStorage.setItem('isDarkTheme', true));
const off = () => {
  themeButton.classList.remove('bx-sun');
  root.classList.remove('dark-theme');
  localStorage.removeItem('isDarkTheme');
};

themeButton.onclick = () =>
  localStorage.getItem('isDarkTheme') === null ? on() : off();

navToggle.onclick = () => navMenu.classList.toggle('show-menu');

navMenu.onclick = () => navMenu.classList.remove('show-menu');

document.querySelector('#download').addEventListener('click', function () {
  const root = document.querySelector('#root');

  root.classList.add('pdf');

  // console.log(root);

  html2pdf()
    .set({
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
      },
      jsPDF: {
        unit: 'pt',
        format: 'a4',
        orientation: 'portrait',
      },
    })
    .from(root)
    .save();
});
