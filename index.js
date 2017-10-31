$(function() {
	var tableSelected;

//On click, opens table reserve form, if table is reserved, nothing happens
$(".table").on("click", function() {
	var className = $(this).attr("class");
	$(this).addClass("selected");
	
	if (className === "table reserved") {
		$(this).off("click");
	} else {
		$("#reserveTable").show(300);
		$("#reserveName").autofocus = true;
		let tablenum = $(this).text();
		$("#tablenum").text(tablenum);
	}
});

//Allows for reserving table on pressing the enter key from an input
$("input").on("keypress", function(event) {
	if (event.key == "Enter") {
		submitReserve();
	}
});

//Closes reserve table form and marks table selected as reserved
$("#submit").on("click", function() {
	submitReserve();
});

//	Initializes the actual function for processing the reserve data
function submitReserve() {
	var reserveName = $("#reserveName").val();
	var reserveSize = $("#reserveSize").val();

//	Adds the reservation details to the on hover box associated with the table
	$(".details", ".selected").append("<p>Party Size: " + reserveSize + "</p>");
	$(".details", ".selected").prepend("<p>Name: " + reserveName +"</p>");

//	Adds and removes classes and hides form
	$(".selected").addClass("reserved");
	$(".selected").removeClass("available");
	$(".selected").removeClass("selected");
	$("#reserveTable").hide(300);

//	Clear out input field values
	$("#reserveName").val("");
	$("#reserveSize").val("");
	$("#reservePhone").val("");
};

//Closes reserve table form without marking table as reserved
$("#goback").on("click", function() {
	
	$(".selected").removeClass("selected");
	$("#reserveTable").hide(300);

//	Clear out input field values
	$("#reserveName").val("");
	$("#reserveSize").val("");
	$("#reservePhone").val("");

//Prevents bubbling. Clears out reserved table data if not included.
	 return false;
});

//On mouseover of reserved tables, hides mouse cursor to prevent selecting
$(".table").hover(function() {
	let className = $(this).attr("class");
 	if (className === "table reserved") {
 		
 		$(this).css("cursor", "not-allowed");
 		$(".details", this).show(100);
 		}else {
 			$(this).css("background-color", "rgb(200,200,200)");
 			$(this).css("cursor", "pointer");
 		}
 	},
 	function() {
 		$(".details", this).hide(100);
 		$(this).css("background-color", "#EEEEEE");
 	}
);

});