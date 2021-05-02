		// Local Storage
		function previewButton (){
			var recipient = document.getElementById("recipient");
			var event = document.getElementById("event");
			var content = document.getElementById("content");
			var day = document.getElementById("day");
			var date = document.getElementById("date");
			var time = document.getElementById("time");
			var venue = document.getElementById("venue");

			localStorage.setItem("recipient", recipient.value);
			localStorage.setItem("event", event.value);
			localStorage.setItem("content", content.value);
			localStorage.setItem("day", day.value);
			localStorage.setItem("date", date.value);
			localStorage.setItem("time", time.value);
			localStorage.setItem("venue", venue.value);
			alert("All the information can be preview");
		}