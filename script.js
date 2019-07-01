function leetspeak(character) {
    var characters = {'a':'4','e':'3','i':'1','t':'7','s':'5','o':'0'};
    return characters[character.toLowerCase()] || character;
}
function french(character) {
    var characters2 = {'4':'a','3':'e','1':'i','7':'t','5':'s','0':'o'};
    return characters2[character.toLowerCase()] || character;
}
document.getElementById("button").addEventListener("click", function() {
    var message = document.getElementById("message").value;
    var result = document.getElementById("result");

    if ( !message.match(/[0-9]/g) ) {
        result.innerHTML = message.replace(/[aeltso]/g, leetspeak);
    } else {
        result.innerHTML = message.replace(/[431750]/g, french);
    }

});
