/*
 * Initializes the core functions of the application
 */
function initApp() {
    initSidebar();
}

/*
 * Initializes the use of the sidebar
 */
function initSidebar() {
    $('.toggle-sidebar, .page-overlay').click(function(e) {
        e.preventDefault();
        toggleSidebar();
    });

    $('aside').on('click', 'a', function() {
        toggleSidebar();
    });

    function toggleSidebar() {
        $('aside').toggleClass('active');
        $('.page-overlay').fadeToggle(300);
    }
}

/*
 * Generates the correct URL to the API
 */
function apiUrl($url) {
    var baseUrl = '//localhost/HybridApp/back-end/API/public/';
    return baseUrl + $url;
}