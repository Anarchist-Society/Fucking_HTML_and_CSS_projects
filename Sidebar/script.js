const toggleSidebar = () => {
  const isOpen = document.body.classList.toggle("open");
  document.querySelector(".sidebar-burger").setAttribute("aria-expanded", isOpen);
};
