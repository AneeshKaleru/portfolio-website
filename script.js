function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  }

  let typed=new Typed('.special-word',{
    strings:['Web Developer.','Programmer.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1500,
    loop: true,
  })