/*             _______________________
              |    le scriiiiipt !    |
               Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯
Le Script en entier est open-source.
Vous avez le droit de le modifier, de le copier, et de le redistribuer,
Mais: dans tout les cas vous devez citÃ© l'auteur original, Ã  savoir moi: WiBla.
Si vous le rÃ©utiliser de quelque maniÃ¨re que ce soit, je ne vous autorise pas
Ã  le vendre, ni de gÃ©nerer de l'argent avec.

Ce script est fais en premier lieux pour la salle:
-----------------------------
â˜… French EDM Community â˜…
https://plug.dj/edm-community
CrÃ©er par Hideki.
Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯Â¯
Si vous l'utilisez sur une autre room, des fonctionnalitÃ©s pourrais manquer.
*/
//On crÃ©er une balise link avec le CSS dans le <head> puis le logo
if (!document.getElementById('Css-WiBla')) { //si le document n'existe pas
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = 'Css-WiBla';
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://raw.githubusercontent.com/El3veNz/CSS/master/cssprive.css';
	link.media = 'all';
	head.appendChild(link);
	
	//le logo
	var menuButton = $('<div id="Box" onclick="slide()"><h1>W</h1></div>');
	$('#app-menu').after(menuButton);
	var box = $('<div id="Settings"><ul><li onclick="resCSS()">Mettre Ã  jour le css</li><li onclick="del()">Clear Chat</li><li onclick="kill()">Kill du script</li><li onclick="hideStream()">Cacher video</li><li onclick="askBG()">custom background</li><li id="info">Ce script est en</li><li id="info">version d\'essai</li></ul>');
	$('#app-menu').after(box);
}

var Box = document.getElementById('Box');
var settings = document.getElementById('Settings');
var css = document.getElementById('Css-WiBla');
var stream = document.getElementById('playback-container');
var show = false;
var isOn = true;

//le slide du menu
function slide() {
	// "glissement" du menu
	settings.style.WebkitTransition = "all 0.3s";
    settings.style.transition = "all 0.3s";
	// les deux Ã©tats
	if (show === false) {
		settings.style.visibility = "hidden";
		settings.style.height = "0";
		show = true;
	} else if (show === true) {
		settings.style.visibility = "visible";
		settings.style.height = "205px";
		show = false;
	}
}
//les boutons et leurs fonction
//reset le CSS
function resCSS() {
	if (isOn === true) {
		link.href = '';
		isOn = false;
		resCSS();
	} else if (isOn === false) {
		link.href = 'https://dl.dropboxusercontent.com/s/xh7ihrhw83u105a/WiBla.css';
		isOn = true;
	}
}
//clear le chat
function del() {
	document.getElementById('chat-messages').innerHTML = '';
}
//kill du script
function kill() {
	//pour Ã©viter que la balise ne soit dÃ©finitivement cachÃ©
	if (show === false) {
		//on Ã©xecute la commande Ã  la place de l'user
		hideStream(); setTimeout(kill,300);
	}
	var parent = document.getElementById("app");
	parent.removeChild(Box);
	parent.removeChild(settings);
	head.removeChild(css);
}
//cacher la video
function hideStream() {
	// "glissement" du menu
	stream.style.WebkitTransition = "all 0.25s";
    stream.style.transition = "all 0.25s";
	// les deux Ã©tats
	if (show === false) {
		stream.style.visibility = "hidden";
		stream.style.height = "0";
		show = true;
	} else if (show === true) {
		stream.style.visibility = "visible";
		stream.style.height = "281px";
		show = false;
	}
}
//changement du background pour un custom
function askBG() {
	var url = prompt("Url de l'image:");
	document.getElementById('tp-room').style.backgroundImage = "url:(" + url + " !important)";
}
