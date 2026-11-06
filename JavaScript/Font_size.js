document.addEventListener('DOMContentLoaded',() => {

    const content = document.querySelector('.books-container');
    const current_Size_Span= document.getElementById('Current_Size');
    const original_Font_size = 16;
    const min_Font_size = 12;
    const max_Font_size = 28;

    function update_Font_Size(newSize){
        content.style.fontSize = newSize + 'px';
        current_Size_Span.textContent = newSize + 'px';
    }

    function get_Current_Font_Size(){
        return parseInt(window.getComputedStyle(content).fontSize);
    }

    document.getElementById('Increase_button').addEventListener('click', function() {
        const current_Size = get_Current_Font_Size();
        if (current_Size < max_Font_size){
            update_Font_Size(current_Size + 2);
        }
    });

       document.getElementById('Decrease_button').addEventListener('click', function() {
        const current_Size = get_Current_Font_Size();
        if (current_Size > min_Font_size){
            update_Font_Size(current_Size - 2);
        }
    });

    document.getElementById('Reset_button').addEventListener('click', function() {
        update_Font_Size(original_Font_size);
    });

});