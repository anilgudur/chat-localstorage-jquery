$(document).ready(function () {

// # Start: Local Storage
if (typeof (Storage) !== "undefined") {

    // Code for localStorage/sessionStorage.

    // Initialize Welcome
	if (loggedInUser.userId !== undefined) {
	    var _localStorage_contacts = JSON.parse(localStorage.contacts);
	    var indexOfLoggedInUser = fnGetIndexByValue(_localStorage_contacts.data, loggedInUser.userId, 'userId');
	    $(".cls-render-user-menu-profile").html(_render_user_menu_profile(_localStorage_contacts.data[indexOfLoggedInUser].firstName));
	}

    // Initialize Contacts
	$('#idConatctsChatList').html(_localStorage_contacts.data.reduce(function (previousValue, currentValue, currentIndex) {
	    if (currentValue.userId !== loggedInUser.userId) {
		return previousValue += '<a href="javascript:void(0)" class="list-group-item clk-chat" rel="'+currentValue.userId+'">'+currentValue.firstName+'</a>';
	    } else {
		return previousValue;
	    }
	}, ''));

    // clk-sign-out
	$(document).on('click', '.clk-sign-out', function () {
	    if (localStorage.chats != undefined) {
		localStorage.removeItem("chats");
		localStorage.removeItem("contacts");
	    }
	    location.reload();
	});

    // Start: On enter of add new contact
	$(document).on('keyup', '.cls-add-contact-enter', function(event) {
	    if (event.which == 13 || event.keyCode == 13) { // 13 = Enter Key
		$(".clk-add-contact").trigger("click");
	    }
	});

    // clk-add-contact
	$(document).on('click', '.clk-add-contact', function () {
	    if ( $.trim($('.cls-add-contact-enter').val()) != '') {
		var _localStorage_contacts = JSON.parse(localStorage.contacts);
		// Check Unique Name
		if (checkUniqueContactName(_localStorage_contacts.data, $.trim($('.cls-add-contact-enter').val())) === true) {
		    // Get Max ID
		    get_max_contacts_id = _localStorage_contacts.data.reduce(function (previousValue, currentValue, currentIndex) {
			return Math.max( Number(previousValue), Number(currentValue.userId) );
		    }, 0);
		    get_max_contacts_id++;
		    if (localStorage.contacts != undefined) {
			_localStorage_contacts.data.push({userId: get_max_contacts_id, firstName: $.trim( $('.cls-add-contact-enter').val() ), lastName: ''});
			localStorage.contacts = JSON.stringify(_localStorage_contacts);
		    }
		    $('#idConatctsChatList').animate({ scrollTop: $('#idConatctsChatList').height()}, 1000);
		    $('.cls-add-contact-enter').val('');
		    // Initialize Contacts
			$('#idConatctsChatList').html(_localStorage_contacts.data.reduce(function (previousValue, currentValue, currentIndex) {
			    if (currentValue.userId !== loggedInUser.userId) {
				return previousValue += '<a href="javascript:void(0)" class="list-group-item clk-chat" rel="'+currentValue.userId+'">'+currentValue.firstName+'</a>';
			    } else {
				return previousValue;
			    }
			}, ''));
		} else {
		    alert("Contact name '"+$.trim($('.cls-add-contact-enter').val())+"' already exist.");
		}
	    }
	});

    // Start: On click of chat
	$('body').on('click', '.clk-chat', function () {
	    $('.collapse').collapse('hide');
	    var userId = $(this).attr('rel');
	    var name = $(this).html();
	    var idCheck = $("#idChats_" + userId).length;

	    // # Add / Remove class
	    $(".cls-div-contact div.list-group a").each(function(){
		$(this).removeClass("active");
	    });
	    $(this).addClass("active");

	    if (idCheck) {
		$('#collapse_' + userId).collapse('toggle');
		if (loggedInUser.userId !== undefined && localStorage.chats.length != 0) {
		    var temp_chats = JSON.parse(localStorage.chats);
		    fnShowChat(temp_chats, loggedInUser.userId, userId);
		    fnShowChatOppositeUser(temp_chats, loggedInUser.userId, userId);
		}
		//$('.panel-collapse').collapse({'toggle': true, 'parent': '#accordion'});
	    } else {

		$('#accordion').append(_render_chat_window(userId, name, loggedInUser.userId));
		if (loggedInUser.userId !== undefined && localStorage.chats.length != 0) {
		    var temp_chats = JSON.parse(localStorage.chats);
		    fnShowChat(temp_chats, loggedInUser.userId, userId);
		    fnShowChatOppositeUser(temp_chats, loggedInUser.userId, userId);
		    $('.cls-idChat_'+userId).animate({ scrollTop: $('.cls-idChat_'+userId).height()}, 1000);
		    $('.cls-idChat_'+userId+'_'+loggedInUser.userId).animate({ scrollTop: $('.cls-idChat_'+userId+'_'+loggedInUser.userId).height()}, 1000);
		}

	    }
	});
	$('#accordion').on('show.bs.collapse', function () {
	    $('#accordion .in').collapse('hide');
	});
    // End: On click of chat

    // On close of chat window
	$(document).on('click', '.glyphicon-remove-circle', function () {
	    $(this).parents('.panel').get(0).remove();
	});

    // Start: On enter
	$(document).on('keyup', '.clk-chat-enter', function(event) {
	    if (event.which == 13 || event.keyCode == 13) { // 13 = Enter Key
		var chatUserId	    = $(this).attr('rel');
		var chattingUserId  = $(this).attr('data-chattingUserId');
		var dbChatId	    = $(this).attr('data-dbChatId');
		var temp_chats	    = localStorage.chats.length != 0 ? JSON.parse(localStorage.chats) : [];
		var indexOfChatArr  = fnGetIndexByValue(temp_chats, dbChatId, 'userId');
		if (indexOfChatArr === -1) {
		    temp_chats.push(
				{
				    userId: dbChatId,
				    data:
				    [
					{userId: chattingUserId, message: $(this).val(), datetime: '2016-09-18 22:05:01'}
				    ]
				}
			);
		    localStorage.chats = JSON.stringify(temp_chats);
		} else {
		    var temp_chats = JSON.parse(localStorage.chats);
		    temp_chats[indexOfChatArr].data.push({userId: chattingUserId, message: $(this).val(), datetime: '2016-09-18 22:05:01'});
		    localStorage.chats = JSON.stringify(temp_chats);
		}
		var x = '';
		var y = '';
		var classNameOne = '';
		var classNameTwo = '';
		if (chattingUserId == loggedInUser.userId) {
		    x = chatUserId;
		    y = chattingUserId;
		    classNameOne = 'text-right';
		    classNameTwo = 'text-left';
		} else {
		    x = chattingUserId;
		    y = loggedInUser.userId;
		    classNameOne = 'text-left';
		    classNameTwo = 'text-right';
		}
		var str = $('<li>').addClass('list-group-item '+classNameOne).text($(this).val());
		$('.cls-idChat_'+x).append(str);
		var str = $('<li>').addClass('list-group-item '+classNameTwo).text($(this).val());
		$('.cls-idChat_'+x+'_'+y).append(str);
		$('.cls-idChat_'+x).animate({ scrollTop: $('.cls-idChat_'+x).height()}, 1000);
		$('.cls-idChat_'+x+'_'+y).animate({ scrollTop: $('.cls-idChat_'+x+'_'+y).height()}, 1000);
		$(this).val('');
	    }
	});
    // End: On enter

} else {
    // Sorry! No Web Storage support..
    alert("Sorry! No Web Storage support..");
}
// # End: Local Storage

});
// End: $(document).ready
