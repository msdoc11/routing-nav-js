const listNav = document.getElementById('nav-tab');
listNav.addEventListener('click', onTabClick, false);

function onTabClick(event) {
	let activeTabs = document.querySelectorAll('.active');
	activeTabs.forEach(function(tab) {
		tab.className = tab.className.replace('active', '');
	});

	event.target.parentElement.className += ' active';

	let id = event.target.href.split('#')[1];
	document.getElementById(id).className += ' active';
} 