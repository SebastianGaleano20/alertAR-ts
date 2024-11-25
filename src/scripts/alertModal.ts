const alertButton = document.getElementById('alertButton') as HTMLElement | null;
const alertModal = document.getElementById('alertModal') as HTMLElement | null;
const alertModalContent = document.getElementById('alertModalContent') as HTMLElement | null;
const closeAlertModalBtn = document.getElementById('closeAlertModalBtn') as HTMLElement | null;

if (alertButton && alertModal && alertModalContent && closeAlertModalBtn) {
  function getButtonCoordinates(): { top: number; left: number } {
    const rect = alertButton.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  }

  alertButton.addEventListener('click', () => {
    alertModal.classList.remove('hidden');

    const { top, left } = getButtonCoordinates();

    alertModalContent.style.transform = `translate(${left - window.innerWidth}px, ${top - window.innerHeight}px) scale(0.5)`;
    alertModalContent.style.opacity = '0';

    setTimeout(() => {
      alertModalContent.style.transform = 'translate(0, 0) scale(1)';
      alertModalContent.style.opacity = '1';
    }, 50);
  });

  closeAlertModalBtn.addEventListener('click', () => {
    closeModal();
  });

  window.addEventListener('click', (event) => {
    if (event.target === alertModal) {
      closeModal();
    }
  });

  function closeModal(): void {
    const { top, left } = getButtonCoordinates();
    alertModalContent.style.transform = `translate(${left - window.innerWidth}px, ${top - window.innerHeight}px) scale(0.5)`;
    alertModalContent.style.opacity = '0';
    setTimeout(() => {
      alertModal.classList.add('hidden');
    }, 300);
  }
} else {
  console.error('One or more elements could not be found in the DOM.');
}


// const alertButton = document.getElementById('alertButton');
// const alertModal = document.getElementById('alertModal');
// const alertModalContent = document.getElementById('alertModalContent');
// const closeAlertModalBtn = document.getElementById('closeAlertModalBtn');


// function getButtonCoordinates() {
//   const rect = alertButton.getBoundingClientRect();
//   return { top: rect.top, left: rect.left };
// }

// alertButton.addEventListener('click', () => {
//   alertModal.classList.remove('hidden');


//   const { top, left } = getButtonCoordinates();

 
//   alertModalContent.style.transform = `translate(${left - window.innerWidth}px, ${top - window.innerHeight}px) scale(0.5)`;
//   alertModalContent.style.opacity = '0';

//   setTimeout(() => {
//     alertModalContent.style.transform = 'translate(0, 0) scale(1)';
//     alertModalContent.style.opacity = '1';
//   }, 50);
// });


// closeAlertModalBtn.addEventListener('click', () => {
//   closeModal();
// });

// window.addEventListener('click', (event) => {
//   if (event.target === alertModal) {
//     closeModal();
//   }
// });


// function closeModal() {
//   const { top, left } = getButtonCoordinates();
//   alertModalContent.style.transform = `translate(${left - window.innerWidth}px, ${top - window.innerHeight}px) scale(0.5)`;
//   alertModalContent.style.opacity = '0';
//   setTimeout(() => {
//     alertModal.classList.add('hidden');
//   }, 300); 
// }


