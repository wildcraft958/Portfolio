// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project Modal Functions
function openProjectModal(projectId) {
  const modal = document.getElementById(projectId + '-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal(projectId) {
  const modal = document.getElementById(projectId + '-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside content
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      const modalId = this.id.replace('-modal', '');
      closeProjectModal(modalId);
    }
  });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach(modal => {
      const modalId = modal.id.replace('-modal', '');
      closeProjectModal(modalId);
    });
  }
});
