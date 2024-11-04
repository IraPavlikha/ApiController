$(document).ready(function() {
    let currentPage = 1;
    const pageSize = 5;

    function loadItems(page) {
        $.ajax({
            url: `api/items?page=${page}&pageSize=${pageSize}`,
            method: 'GET',
            success: function(data) {
                $('#item-list').empty();
                data.Items.forEach(item => {
                    $('#item-list').append(`<li>${item}</li>`);
                });
                renderPagination(data.TotalPages, data.CurrentPage);
            },
            error: function() {
                alert('Сталася помилка при отриманні даних.');
            }
        });
    }

    function renderPagination(totalPages, currentPage) {
        $('#pagination').empty();

        if (currentPage > 1) {
            $('#pagination').append(`<button onclick="loadItems(${currentPage - 1})">Попередня</button>`);
        }

        $('#pagination').append(`<span>Сторінка ${currentPage} з ${totalPages}</span>`);

        if (currentPage < totalPages) {
            $('#pagination').append(`<button onclick="loadItems(${currentPage + 1})">Наступна</button>`);
        }
    }

    // Завантаження початкових даних
    loadItems(currentPage);
});
