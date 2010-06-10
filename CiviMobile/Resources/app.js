// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#93aaaf');

//Create background container
var background = Titanium.UI.createWindow({  
    backgroundImage: 'images/bg.png',
    top:0,
    left:0,
    height:461,
    width:320
});

background.open();

//Add scrolling form window with logo

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:false,
    showHorizontalScrollIndicator:false
});
var loginform = Ti.UI.createView({
    width:'auto',
    height:2000,
    top:200
});


scrollView.add(loginform);
background.add(scrollView);

var logo = Titanium.UI.createImageView({
url:'images/civi-logo.png',
top:10,
width:194,
height:189
});

scrollView.add(logo);


// Create login form


var loginuser = Titanium.UI.createTextField({
	value:'username',
	height:35,
	width:238,
	top:225,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginpass = Titanium.UI.createTextField({
	value:'password',
	height:35,
	width:238,
	top:275,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginurl = Titanium.UI.createTextField({
	value:'url',
	height:35,
	width:238,
	top:325,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var loginbutton = Titanium.UI.createButton({
    title: 'Login',
	height:43,
	width:238,
	top:375,
	backgroundImage:'images/button_green.png',
    color:'#fff',
    font:{fontWeight:'bold',fontSize:20}

});
loginbutton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});


scrollView.add(loginuser);
scrollView.add(loginpass);
scrollView.add(loginurl);
scrollView.add(loginbutton);
