
function crearboton() {

    
    
}

function creartabla()    {
    var div = document.getElementById("table");
    var content = "" ;

    content += "<table>";
    content += "<tr>";
    content += "<th>Nombre</th>";
    content += "<th>Edad</th>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>Luis</td>";
    content += "<td>35</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td>Francisco</td>";
    content += "<td>53</td>";
    content += "</tr>";

    content += "</table>";

    div.innerHTML = content ;

}