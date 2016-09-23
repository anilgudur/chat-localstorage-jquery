_render_chat_window = function(userId, name, loggedInUser_userId) {

    var div, div_header, div_content;

    div_header = $('<div>').addClass('panel-heading').attr('role', 'tab').attr('id', 'heading_'+userId)
		.append(
		    $('<h4>').addClass('panel-title')
		    .append(
			$('<a>').attr('role', 'button').attr('data-toggle', 'collapse').attr('data-parent', '#accordion').attr('href', '#collapse_' + userId).attr('aria-expanded', 'true').attr('aria-controls', 'collapse_' + userId)
			.text(name)
		    )
		    .append(
			$('<span>').addClass('glyphicon glyphicon-remove-circle pull-right').attr('role', 'button')
		    )
		)
		;

    div_content = $('<div>').addClass('panel-collapse collapse in').attr('id', 'collapse_' + userId).attr('role', 'tabpanel').attr('aria-labelledby', 'heading_' + userId)
		.append(
		    $('<div>').addClass('panel-body')
		    .append(
			$('<div>').addClass('row')
			.append(
			    $('<div>').addClass('col-md-6')
			    .append(
				$('<ul>').addClass('list-group col-md-12 pre-scrollable cls-idChat_'+userId)
			    )
			    .append(
				$('<div>')
				.append(
				    $('<input>').addClass('col-md-12 clk-chat-enter')
				    .attr('type', 'text').attr('name', 'txtChat_'+userId).attr('value', '').attr('rel', userId).attr('data-chattingUserId', loggedInUser_userId).attr('data-dbChatId', userId)
				)
			    )
			)
			.append(
			    $('<div>').addClass('col-md-6')
			    .append(
				$('<ul>').addClass('list-group col-md-12 pre-scrollable cls-idChat_'+userId+'_'+loggedInUser_userId)
			    )
			    .append(
				$('<div>')
				.append(
				    $('<input>').addClass('col-md-12 clk-chat-enter')
				    .attr('type', 'text').attr('name', 'txtChat_'+userId+'_'+loggedInUser_userId).attr('value', '').attr('rel', userId).attr('data-chattingUserId', userId).attr('data-dbChatId', userId)
				)
			    )
			)
		    )
		)
		;

    div = $('<div>')
	.addClass('panel panel-default')
	.attr('id', 'idChats_'+ userId)
	.append(div_header)
	.append(div_content)
    ;

    return div;
}

_render_user_menu_profile = function(name) {

    var div;

    div = $('<li>')
	.addClass('dropdown')
	.append(
	    $('<a>').addClass('dropdown-toggle').attr('href', 'javascript:void(0)').attr('data-toggle', 'dropdown').attr('role', 'button').attr('aria-haspopup', 'true').attr('aria-expanded', 'false')
	    .text("Welcome, "+name+"!")
	    .append(
		$('<span>').addClass('caret')
	    )
	)
	.append(
	    $('<ul>')
	    .addClass('dropdown-menu')
	    .append(
		$('<li>')
		.append(
		    $('<a>').attr('href', 'javascript:void(0)')
		    .text('Profile')
		)
	    )
	    .append(
		$('<li>').addClass('divider').attr('role', 'separator')
	    )
	    .append(
		$('<li>')
		.append(
		    $('<a>').addClass('clk-sign-out').attr('href', 'javascript:void(0)')
		    .text('Sign out')
		)
	    )
	)
    ;

    return div;

}