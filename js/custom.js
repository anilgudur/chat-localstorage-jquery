// Save current user | Right now hardcoded
var loggedInUser = {userId: 1};

var contacts = {
		data:
		[
		    {userId: 1, firstName: 'Anil', lastName: 'Gudur'},
		    {userId: 2, firstName: 'Pravin', lastName: 'Patil'},
		    {userId: 3, firstName: 'Shridhar', lastName: 'Malagi'},
		    {userId: 4, firstName: 'Amol', lastName: 'P'},
		    {userId: 5, firstName: 'Yogesh', lastName: 'P'},
		    {userId: 101, firstName: 'Ravindra', lastName: 'P'}
		]
};

$(document).ready(function () {



});
// End: $(document).ready

function fnGetIndexByValue(arr, val, field)
{
    var index = -1;
    for (i = 0; i < arr.length; i++) {
	if (eval('arr[i].'+field) == parseInt(val)) {
	    index = i;
	    break;
	}
    }
    return index;
}

function fnShowChat(arr, loggedInUserId, chatUserId)
{
    var indexOfChatArr = fnGetIndexByValue(arr, chatUserId, 'userId');
    var str = "";
    if (arr[indexOfChatArr] != undefined) {
	for (i = 0; i < arr[indexOfChatArr].data.length; i++) {
	    if (arr[indexOfChatArr].data[i].userId == loggedInUserId) {
		str += '<li class="list-group-item text-right">';
		str += arr[indexOfChatArr].data[i].message;
		str += '</li>';
	    } else {
		str += '<li class="list-group-item text-left">';
		str += arr[indexOfChatArr].data[i].message;
		str += '</li>';
	    }
	}
    }
    $('.cls-idChat_'+chatUserId).html(str);
}

function fnShowChatOppositeUser(arr, loggedInUserId, chatUserId)
{
    var indexOfChatArr = fnGetIndexByValue(arr, chatUserId, 'userId');
    var str = "";
    if (arr[indexOfChatArr] != undefined) {
	for (i = 0; i < arr[indexOfChatArr].data.length; i++) {
	    if (arr[indexOfChatArr].data[i].userId == loggedInUserId) {
		str += '<li class="list-group-item text-left">';
		str += arr[indexOfChatArr].data[i].message;
		str += '</li>';
	    } else {
		str += '<li class="list-group-item text-right">';
		str += arr[indexOfChatArr].data[i].message;
		str += '</li>';
	    }
	}
    }
    $('.cls-idChat_'+chatUserId+'_'+loggedInUserId).html(str);
}

var isUniqueContactName = false;
function checkUniqueContactName(arr, val)
{
    for (i = 0; i < arr.length; i++) {
	if (arr[i].firstName.toLowerCase() == val.toLowerCase()) {
	    return false;
	}
    }
    return true;
}