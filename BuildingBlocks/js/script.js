var _startX = 0; // mouse starting positions
var _startY = 0; var _offsetX = 0; // current element offset
var _offsetY = 0; var _dragElement; // needs to be passed from OnMouseDown to OnMouseMove
var _oldZIndex = 0; // we temporarily increase the z-index during drag
var _debug = $('debug'); // makes life easier

InitDragDrop();

function InitDragDrop() { document.onmousedown = OnMouseDown; document.onmouseup = OnMouseUp; }

function OnMouseDown(e) { // IE is retarded and doesn't pass the event object
	if (e == null) e = window.event; // IE uses srcElement, others use target
	var target = e.target != null ? e.target : e.srcElement;
	_debug.innerHTML = target.className == 'drag' ? 'draggable element clicked' : 'NON-draggable element clicked';
	// for IE, left click == 1 // for Firefox, left click == 0
	if ((e.button == 1 && window.event != null || e.button == 0) && target.className == 'drag') { // grab the mouse position 
		_startX = e.clientX; _startY = e.clientY; // grab the clicked element's position
		_offsetX = ExtractNumber(target.style.left);
		_offsetY = ExtractNumber(target.style.top); // bring the clicked element to the front while it is being dragged
		_oldZIndex = target.style.zIndex; target.style.zIndex = 10000; // we need to access the element inOnMouseMove
		_dragElement = target; // tell our code to start moving the element with the mouse 
		document.onmousemove = OnMouseMove; // cancel out any text selections
		document.body.focus(); // prevent text selection in IE
		document.onselectstart = function () { return false; }; // prevent IE from trying to drag an image
	target.ondragstart = function() { return false; }; // prevent text selection (except IE)
	return false; } }