function loadSVG() {
    var SVGDiv = document.getElementById("SVGDiv");
    SVGDiv.innerHTML = '<object data="./svg.svg" type="image/svg+xml" id="SVG" width="80%" height="80%"></object>';
    setTimeout(function(){updateSVG(); }, 1000);
    
    console.log("ksfjbvakgfugka")

    //updateSVG();
}
function calcHeigth(value, maxValue, minValue, rectHeight) {
    var diff = maxValue - minValue;
    var newHeight = (value - minValue) / (diff / rectHeight)
    return rectHeight - newHeight;
}
function updateSVG() {
    console.log("Done")
    //document.getElementById("SVGDiv").addEventListener("load", function () {
        var SVGDiv = document.getElementById("SVG");
        var svgDoc = SVGDiv.contentDocument;
        console.log(svgDoc)
        var leftBar = svgDoc.getElementById("leftGreenBackground");
        var rightBar = svgDoc.getElementById("rightGreenBackground");
        var midBar = svgDoc.getElementById("midGreenBackground");
        for (var i = 0; i < 50; i++) {
            var height = calcHeigth(i, 0, 50, 200)
            leftBar.setAttribute("heigt", height)
            rightBar.setAttribute("heigt", height)
            midBar.setAttribute("heigt", height)
        }
    //})
}
