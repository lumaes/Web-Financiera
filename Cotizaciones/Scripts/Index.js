$('.top-line').after('<div class="mobile-menu d-xl-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-btn').click(function(){
		$('.mobile-menu').stop().slideToggle();
	});
$(document).on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		
	} else {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		
	}
})