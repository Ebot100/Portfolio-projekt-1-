document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.querySelector('.close');

    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('click', function () {
            const title = post.getAttribute('data-title');
            const content = post.getAttribute('data-content');

            modalTitle.textContent = title;
            modalContent.textContent = content;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
