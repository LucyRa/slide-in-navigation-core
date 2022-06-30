window.onload = function(e) {
  const navControl = document.querySelector('button.nav-control');

  navControl.onclick = function (e) {
    e.preventDefault();

    const slidePanel = document.querySelector('div.nav-slide-panel');

    navControl.classList.toggle('active');
    slidePanel.classList.toggle('show');
  };
}