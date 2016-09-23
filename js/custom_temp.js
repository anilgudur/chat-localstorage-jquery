//var chats = [
//		    {
//			userId: 2,
//			data:
//			[
//			    {userId: 2, message: 'Hi Anil', datetime: '2016-09-18 22:05:01'},
//			    {userId: 1, message: 'Hi Pravin', datetime: '2016-09-18 22:05:30'},
//			    {userId: 2, message: 'How are you?', datetime: '2016-09-18 22:06:10'},
//			    {userId: 2, message: 'How is going on?', datetime: '2016-09-18 22:06:15'},
//			    {userId: 1, message: 'Doing good.', datetime: '2016-09-18 22:07:25'},
//			]
//		    },
//		    {
//			userId: 3,
//			data:
//			[
//			    {userId: 3, message: 'Hi Anil', datetime: '2016-09-18 22:05:01'},
//			    {userId: 1, message: 'Hi Shridhar', datetime: '2016-09-18 22:05:30'},
//			    {userId: 3, message: 'How are you?', datetime: '2016-09-18 22:06:10'},
//			    {userId: 3, message: 'How is going on?', datetime: '2016-09-18 22:06:15'},
//			    {userId: 1, message: 'Doing good.', datetime: '2016-09-18 22:07:25'},
//			]
//		    }
    //];

                //	    $("#accordion").on("hide.bs.collapse", function(){
                //			alert("ASD");
                //			//$(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Open');
                //			$('#collapse_'+userId).collapse('show');
                //	    });

		var str = '<div class="panel panel-default" id="idChats_' + userId + '">' +
			    '<div class="panel-heading" role="tab" id="heading_' + userId + '">' +
				'<h4 class="panel-title">' +
				    '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_' + userId + '" aria-expanded="true" aria-controls="collapse_' + userId + '">' +
					name +
				    '</a>' +
				    '<span class="glyphicon glyphicon-remove-circle pull-right" role="button"></span>' +
				'</h4>' +
			    '</div>' +
			    '<div id="collapse_' + userId + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading_' + userId + '">' +
				'<div class="panel-body">' +
				    '<div class="row">'+
					'<div class="col-md-6">'+
					    '<ul class="list-group col-md-12 pre-scrollable cls-idChat_'+userId+'">'+
					    '</ul>'+
					    '<div>'+
						'<input type="text" name="txtChat_'+userId+'" value="" class="col-md-12 clk-chat-enter" rel="'+userId+'" data-chattingUserId="'+loggedInUser.userId+'" data-dbChatId="'+userId+'" />' +
					    '</div>'+
					'</div>'+
					'<div class="col-md-6">'+
					    '<ul class="list-group col-md-12 pre-scrollable cls-idChat_'+userId+'_'+loggedInUser.userId+'">'+ //  pre-scrollable
					    '</ul>'+
					    '<div>'+
						'<input type="text" name="txtChat_'+userId+'_'+loggedInUser.userId+'" value="" class="col-md-12 clk-chat-enter" rel="'+userId+'" data-chattingUserId="'+userId+'" data-dbChatId="'+userId+'" />' +
					    '</div>'+
					'</div>'+
				    '</div>'+
				'</div>' +
			    '</div>' +
			'</div>';
			//$('#accordion').append(str);

var str = '<li class="list-group-item '+classNameOne+'">'+$(this).val()+'</li>';
var str = '<li class="list-group-item '+classNameTwo+'">'+$(this).val()+'</li>';

$(".loggedInUserName").html("Welcome, "+contacts.data[indexOfLoggedInUser].firstName + "!");

<!--	<nav class="navbar navbar-default navbar-fixed-top">
	    <div class="container">
		<div class="navbar-header">
		    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		    </button>
		    <a class="navbar-brand" href="javascript:void(0)">Chat</a>
		</div>
		<div id="navbar" class="collapse navbar-collapse">
		    <ul class="nav navbar-nav">
			<li class="active"><a href="javascript:void(0)">Home</a></li>
		    </ul>
		    <span class="navbar-text navbar-right">Welcome, <a href="#" class="navbar-link loggedInUserName">Mark Otto</a></span>
		    <span class="navbar-text navbar-right loggedInUserName"></span>
		</div>/.nav-collapse 
	    </div>
	</nav>-->

	<nav class="navbar navbar-default">
	    <div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		    </button>
		    <a class="navbar-brand" href="javascript:void(0)">Chat</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		    <ul class="nav navbar-nav">
			<li class="active"><a href="javascript:void(0)">Home <span class="sr-only">(current)</span></a></li>
			<li><a href="javascript:void(0)">Link</a></li>
		    </ul>
<!--		    <form class="navbar-form navbar-left">
			<div class="form-group">
			    <input type="text" class="form-control" placeholder="Search">
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		    </form>-->
		    <ul class="nav navbar-nav navbar-right cls-render-user-menu-profile">
<!--			<li><a href="#">Link</a></li>-->
<!--			<li class="dropdown">
			    <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Welcome, Anil! <span class="caret"></span></a>
			    <ul class="dropdown-menu">
				<li><a href="javascript:void(0)">Profile</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="javascript:void(0)">Sign out</a></li>
			    </ul>
			</li>-->
		    </ul>
		</div><!-- /.navbar-collapse -->
	    </div><!-- /.container-fluid -->
	</nav>