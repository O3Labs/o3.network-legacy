var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'wtc_tooltip');
document.body.appendChild(tooltip);

document.addEventListener('mouseup', function (e) {
	var selection = window.getSelection().toString();
	if (selection.length > 0) {
		//check address
		var address = selection.trim();
		if (address.length == 0 || address.length != 34 || address.startsWith("A") == false) {
			return
		}
		renderTooltip(e.clientX, e.clientY , address);
		window.getSelection().empty();
	}
}, false);

document.addEventListener('mousedown', function (e) {
	if (e.target.tagName.toLowerCase() === 'a') {
		return
	}
	tooltip.style.visibility = 'hidden';
},false);

function renderTooltip(mouseX, mouseY, address) {
	if (mouseX + 200 > window.innerWidth) {
		mouseX = mouseX - 200;
	}
	var newURL = "https://o3.network/scan/#" + address;
	tooltip.innerHTML = "<a class='o3scanlink' href='" + newURL + "' target='_blank'>Check balances on O3 explorer</a>";
	tooltip.style.top = mouseY + 'px';
	tooltip.style.left = mouseX + 'px';
	tooltip.style.visibility = 'visible';
}

