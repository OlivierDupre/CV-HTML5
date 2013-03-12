/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$('.nav-tabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
    saveActiveTab();
});

function saveActiveTab() {
    window.localStorage.setItem("ActiveHref", $('.nav-tabs li.active a').attr("href"));
}

function getActiveTab() {
    var href = window.localStorage.getItem("ActiveHref");
    return $('.nav-tabs a[href="' + href + '"]');
}

$(document).ready(function() {
    getActiveTab().tab('show');
});


$('#choix_recherche').keyup(function() {
    if ($(this).val().length <= 3)
        return;
    
    delPreviousSearch();
 
    var content = $('.tab-content .tab-pane.active').html();
    $('.tab-content .tab-pane.active').html(content.replace(new RegExp($(this).val(), 'g'), "<span class='highlight' data='searchResult'>" + $(this).val() + "</span>"));
});

function delPreviousSearch() {
    
    $('[data="searchResult"]').replaceWith($(this).text());
      
}