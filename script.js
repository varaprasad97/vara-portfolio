document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');

    const skills = document.querySelectorAll('.skill-list span');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1)';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.transform = 'scale(1)';
        });
    });
});
