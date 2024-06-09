//aba listen
//you can have an error while calling the callback function

//so potential aauna sakne error lai handle garna
//we do the following:

//hary's code

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC: " + src)
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC: " + src);
      callback(new Error("Src got some error"),src);
    // yo chai passing an Error object with a message for the error parameter.
    //thau ko thau nai error object banaideko ho
    }
    document.body.appendChild(script);
    //it appends the script element to the body of the HTML document. 
    //This is a common way to add dynamically created script elements to a web page.
    // .appendChild(script) is a method that appends the specified script element 
    //to the end of the list of child nodes of the <body> element.
  }
  
  function hello(error, src) {
    if (error) {
      console.log(error)
      return
      //error payo bhane siddhai display garera 
      //function ko end ma gaideko for time and resource optimization
    }
    alert('Hello World!' + src);
    //this is basically window.alert so alertbox ma yo msg display huncha
  }
  
  
  function goodmorning(error, src) {
    
    if (error) {
      console.log(error)
      sendEmergencyMessageToCeo();
    // If there is an error, it logs the error message to the console, 
    // and it calls a hypothetical sendEmergencyMessageToCeo function(yo chai natak 
    // matra gare ho). If there is no error, it displays an alert with the message 
    // "Good morning" followed by the src value.
      return
    }
    alert('Good morning' + src);
  }
  
  loadScript("https://www.sxc.edu.np", hello) 
  //or  loadScript("https://www.sxc.edu.np", goodmorning) eso bolauda ni bhayo
  //euta matra function banaye huncha, harry le just euta extra banaideko ho ni 

// The provided code defines a JavaScript function named loadScript that dynamically 
// loads an external script and allows you to specify callback functions to be executed 
// when the script has finished loading or when an error occurs during loading. The code
// then loads the script and calls the goodmorning function as the callback. eta hello
// lai bolauda ni hunthyo for callback, actually it's your wish k.