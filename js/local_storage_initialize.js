//localStorage.chats;
$(document).ready(function () {

    // # Start: Local Storage
        if (typeof (Storage) !== "undefined") {

	    localStorage.chats = localStorage.chats != undefined ? localStorage.chats : JSON.stringify([]);
	    localStorage.contacts = localStorage.contacts != undefined ? localStorage.contacts : JSON.stringify(contacts);

        } else {
            // Sorry! No Web Storage support..
            alert("Sorry! No Web Storage support..");
        }
    // # End: Local Storage

});
// End: $(document).ready