var x = window.matchMedia("(min-width: 48em)");
function shareToggle() {
  const share_btn = document.getElementsByClassName('shareButton')[0];
  share_btn.classList.toggle('shareButtonToggle');
  share_btn.getElementsByTagName('img')[0].classList.toggle('shareButtonImageToggle');
  if (x.matches) {
    document.getElementById('shareLargePanel').classList.toggle('hide');
  } else {
    document.getElementById('shareBackgroundMobilePanel').classList.toggle('hide');
    document.getElementById('avatar').classList.toggle('hide');
    document.getElementById('name').classList.toggle('hide');
    document.getElementById('postTime').classList.toggle('hide');
    document.getElementById('shareMobilePanel').classList.toggle('hide');
  }
}
x.addEventListener('change', function () {
  const share_btn = document.getElementsByClassName('shareButton')[0];
  share_btn.classList.remove('shareButtonToggle');
  share_btn.getElementsByTagName('img')[0].classList.remove('shareButtonImageToggle');
  document.getElementById('avatar').classList.remove('hide');
  document.getElementById('name').classList.remove('hide');
  document.getElementById('postTime').classList.remove('hide');
  if (x.matches) {
    document.getElementById('shareBackgroundMobilePanel').classList.add('hide');
    document.getElementById('shareMobilePanel').classList.add('hide');
  } else {
    document.getElementById('shareLargePanel').classList.add('hide');
  }
})