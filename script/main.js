// 顶部右侧悬停效果
$('#username_top').mouseover(function() {
    $('#user_name_menu').css('display', 'block')
})
$('#username_top').mouseout(function() {
    $('#user_name_menu').css('display', 'none')
})
$('#user_name_menu').mouseover(function() {
    $('#user_name_menu').css('display', 'block')
})
$('#user_name_menu').mouseout(function() {
    $('#user_name_menu').css('display', 'none')
})

$('#usersetting_top').mouseover(function() {
    $('#user_setting_menu').css('display', 'block')
})
$('#usersetting_top').mouseout(function() {
    $('#user_setting_menu').css('display', 'none')
})
$('#user_setting_menu').mouseover(function() {
    $('#user_setting_menu').css('display', 'block')
});
$('#user_setting_menu').mouseout(function() {
    $('#user_setting_menu').css('display', 'none')
});

$('#bri').mouseover(function() {
    $('#brbri').css('display', 'block')
});

$('#bri').mouseout(function() {
    $('#brbri').css('display', 'none')
});

$('#brbri').mouseover(function() {
    $('#brbri').css('display', 'block')
});
$('#brbri').mouseout(function() {
    $('#brbri').css('display', 'none')
});
// 顶部右侧悬停结束
// tab切换
$('#s_ctner_menus').find('span').click(function() {
    var curid = $('#s_ctner_menus').find('.current').data("id")
    var id = $(this).data("id")
    if (curid != id) {
        $("#s_ctner_menus").find(".current").removeClass("current")
        $(this).addClass("current")
        $("#s_content_" + curid).css('display', 'none')
        $("#s_content_" + id).css('display', 'block')
    }
})
// tab end
// 皮肤
$(".skin").click(function () {
	$("#s_skin_layer").fadeIn();
})