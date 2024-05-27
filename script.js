document.addEventListener('DOMContentLoaded', (event) => {

    function convert() {
        let convertThis = document.querySelector(".convert-this").value;

        let splitConvertThis = convertThis.split("");
        // console.log(splitConvertThis)

        let convertedString = ""
        for (let i = 0; i < splitConvertThis.length; i++) {
            // console.log(splitConvertThis[i])
            if (splitConvertThis[i].toLowerCase() === "a") {
                convertedString = convertedString + "Alpha ";
            } else if (splitConvertThis[i].toLowerCase() === "b") {
                convertedString = convertedString + "Bravo ";
            } else if (splitConvertThis[i].toLowerCase() === "c") {
                convertedString = convertedString + "Charlie ";
            } else if (splitConvertThis[i].toLowerCase() === "d") {
                convertedString = convertedString + "Delta ";
            } else if (splitConvertThis[i].toLowerCase() === "e") {
                convertedString = convertedString + "Echo ";
            } else if (splitConvertThis[i].toLowerCase() === "f") {
                convertedString = convertedString + "Foxtrot ";
            } else if (splitConvertThis[i].toLowerCase() === "g") {
                convertedString = convertedString + "Golf ";
            } else if (splitConvertThis[i].toLowerCase() === "h") {
                convertedString = convertedString + "Hotel ";
            } else if (splitConvertThis[i].toLowerCase() === "i") {
                convertedString = convertedString + "India ";
            } else if (splitConvertThis[i].toLowerCase() === "j") {
                convertedString = convertedString + "Juliet ";
            } else if (splitConvertThis[i].toLowerCase() === "k") {
                convertedString = convertedString + "Kilo ";
            } else if (splitConvertThis[i].toLowerCase() === "l") {
                convertedString = convertedString + "Lima ";
            } else if (splitConvertThis[i].toLowerCase() === "m") {
                convertedString = convertedString + "Mike ";
            } else if (splitConvertThis[i].toLowerCase() === "n") {
                convertedString = convertedString + "November ";
            } else if (splitConvertThis[i].toLowerCase() === "o") {
                convertedString = convertedString + "Oscar ";
            } else if (splitConvertThis[i].toLowerCase() === "p") {
                convertedString = convertedString + "Papa ";
            } else if (splitConvertThis[i].toLowerCase() === "q") {
                convertedString = convertedString + "Quebec ";
            } else if (splitConvertThis[i].toLowerCase() === "r") {
                convertedString = convertedString + "Romeo ";
            } else if (splitConvertThis[i].toLowerCase() === "s") {
                convertedString = convertedString + "Sierra ";
            } else if (splitConvertThis[i].toLowerCase() === "t") {
                convertedString = convertedString + "Tango ";
            } else if (splitConvertThis[i].toLowerCase() === "u") {
                convertedString = convertedString + "Uniform ";
            } else if (splitConvertThis[i].toLowerCase() === "v") {
                convertedString = convertedString + "Victor ";
            } else if (splitConvertThis[i].toLowerCase() === "w") {
                convertedString = convertedString + "Whiskey ";
            } else if (splitConvertThis[i].toLowerCase() === "x") {
                convertedString = convertedString + "X-Ray ";
            } else if (splitConvertThis[i].toLowerCase() === "y") {
                convertedString = convertedString + "Yankee ";
            } else if (splitConvertThis[i].toLowerCase() === "z") {
                convertedString = convertedString + "Zulu ";
            }
        }
        console.log(convertedString)
        document.querySelector(".converted-here").value = convertedString

        // document.querySelector(".converted-here").value = convertThis;
    }

    document.querySelector(".convert-button").addEventListener("click", convert)

});