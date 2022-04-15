({
    comparar: function(component, event, helper) {
        var palabraCorrecta = document.getElementById("palabraCheck").innerHTML;
        var palabra = component.find("palabra").getElement().value;
        var intentos = document.getElementById("intentos").innerHTML;
        var jugar = document.getElementById("jugar").innerHTML;

        const div = document.querySelector(".resultado");
        palabra = palabra.toLowerCase();
        palabraCorrecta = palabraCorrecta.toLowerCase();

        var listaPalabra = [...palabra];
        var listaPalabraCorrecta = [...palabraCorrecta];

        if (jugar == "true") {
            if (palabra == palabraCorrecta) {
                alert("Palabra correcta");
                div.innerHTML += "<span style='background-color: #00FF00;'>" + palabraCorrecta + "</span></br>";
                div.innerHTML += "<span style='background-color: black;'>---------------------------------------------------------</span><br/>";
            } else {
                console.log("Palabra incorrecta");
                listaPalabra.forEach(function(element, index) {
                    if (element == listaPalabraCorrecta[index]) {
                        listaPalabraCorrecta[index] = "1";
                        div.innerHTML += "<span style='background-color: #00FF00;'>" + element + "</span>";
                    } else if (palabraCorrecta.includes(element)) {
                        listaPalabraCorrecta[index] = "2";
                        div.innerHTML += "<span style='background-color: goldenrod;'>" + element + "</span>";
                    } else {
                        div.innerHTML += "<span>" + element + "</span>";
                    }
                });
                div.innerHTML += "</br>";
                console.log(listaPalabraCorrecta);
                intentos--;
                document.getElementById("intentos").innerHTML = intentos;
                if (intentos == 0) {
                    alert("Perdiste");
                    document.getElementById("jugar").innerHTML = "false";
                    div.innerHTML += "<span style='background-color: #00FF00;'>" + palabraCorrecta + "</span></br>";
                    div.innerHTML += "<span style='background-color: black;'>---------------------------------------------------------</span><br/>";
                }
            }
        } else {
            alert("No te quedan vidas");
        }

    },

    setPalabra: function(component, event, helper) {
        var test = event.getParam("palabraEv");
        document.getElementById("palabraCheck").innerHTML = test;
        document.getElementById("jugar").innerHTML = "true";
        document.getElementById("intentos").innerHTML = "5";
    }
})