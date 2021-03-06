/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-google-plus' : '&#xe000;',
			'icon-mail' : '&#xe001;',
			'icon-facebook' : '&#xe002;',
			'icon-twitter' : '&#xe003;',
			'icon-github' : '&#xe004;',
			'icon-stackoverflow' : '&#xe005;',
			'icon-linkedin' : '&#xe006;',
			'icon-skype' : '&#xe007;',
			'icon-github-2' : '&#xe008;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};