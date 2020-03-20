function loadSVG() {
    var SVGDiv = document.getElementById("SVGDiv");
    SVGDiv.innerHTML = '<object data="./svg.svg" type="image/svg+xml" id="SVG" width="80%" height="80%"></object>';
    //setTimeout(function(){updateSVG(); }, 1000);
    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(stateCheck);
            // document ready
            //updateSVG()
            getImage();
            console.log("ksfjbvakgfugka")

        }
    }, 100);

    //updateSVG();
}
function calcHeigth(value, maxValue, minValue, rectHeight) {
    var diff = maxValue - minValue;
    var newHeight = (value - minValue) / (diff / rectHeight)
    return rectHeight - newHeight;
}
function getImage() {
    var SVGimage = document.getElementById("SVG")
    console.log(SVGimage)
    // SVGimage.addEventListener("load", function () {
    console.log("Done")

    var SVGDiv = document.getElementById("SVGDiv");
    var svgDoc = SVGDiv.contentDocument;
    setTimeout(function(){updateSVG(); }, 1000);
}
function updateSVG(content_Document) {
    // var SVGimage = document.getElementById("SVG")
    // console.log(SVGimage)
    // // SVGimage.addEventListener("load", function () {
    // console.log("Done")

    // var SVGDiv = document.getElementById("SVGDiv");
    // var svgDoc = SVGDiv.contentDocument;
    console.log(content_Document)
    svgDoc = content_Document;
    var leftBar = svgDoc.getElementById("leftGreenBackground");
    var rightBar = svgDoc.getElementById("rightGreenBackground");
    var midBar = svgDoc.getElementById("midGreenBackground");
    for (var i = 0; i < 50; i++) {
        var height = calcHeigth(i, 0, 50, 200)
        leftBar.setAttribute("heigt", height)
        rightBar.setAttribute("heigt", height)
        midBar.setAttribute("heigt", height)
    }
    // })
}
