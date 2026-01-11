function animalSpeak() {
  let animal = {
    name: document.getElementById("name").value,
    kind: document.getElementById("kind").value,
    speak: function(message) {
      console.log(this.name + " says: '" + message + "'");
    }
  };

  let message = document.getElementById("message").value;
  animal.speak(message);
}
