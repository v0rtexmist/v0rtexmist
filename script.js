// Add a simple animation to the profile image
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseover', () => {
    profileImage.classList.add('animated');
});
profileImage.addEventListener('mouseout', () => {
    profileImage.classList.remove('animated');
});
