// MIT License
// Copyright (c) 2020 Luis Espino


function reflex_agent(location, state, memory){
	if (memory == "") return "MOVE";
	else if (location=="B" && memory == "CLEAN" && state=="CLEAN") return "END"
	else if (location=="A" && state=="DIRTY") return "MOVE"
	else if (location=="A" && state=="CLEAN") return "MOVE"
	else if (location=="B" && state=="DIRTY") return "CLEAN"
	else if (location=="B" && state=="CLEAN") return "SHIFT"

}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
		var memory = states[3];
		document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | STATE: ").concat(states[1]).concat(" | ").concat(states[2]);
      	var action_result = reflex_agent(location, state, memory);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B"){
				states[2] = "CLEAN";
				states[0] = "A";
			} 
      	}
		else if (action_result == "SHIFT") {
			var aux = states[1];
			states[1] = states[2];
			states[2] = aux;
			states[0] = "A"
		}
      	else if (action_result == "MOVE" && location == "A" ) states[0] = "B";
      	else if (action_result == "LEFT" && location == "B" ) states[0] = "A"; 
		states[3] = state;

		if (action_result == "END") {
			document.getElementById("log").innerHTML+="<br>END ";
			
		}	else {
			setTimeout(function(){ test(states); }, 2000);
		}	
	
}

var states = ["A","DIRTY","DIRTY", ""];
test(states);
