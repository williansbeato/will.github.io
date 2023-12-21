document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
  
    toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('active');
    });
  
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
  });
  