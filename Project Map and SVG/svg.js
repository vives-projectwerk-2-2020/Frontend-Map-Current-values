function loadSVG() {
    var SVGimage = document.getElementById("SVGimage")
    var svgDoc
    //})
    SVGimage.addEventListener("load", function () {
        console.log("loaded")
        svgDoc = SVGimage.getSVGDocument();
        console.log(SVGimage)
        console.log(svgDoc)
        // console.log(SVGimage.contentDocument)
        var leftBar = svgDoc.getElementById("leftGreenBackground");
        console.log(leftBar)
        leftBar.setAttribute("height", 100)
    })


    // var leftBar = svgDoc.getElementById("leftGreenBackground");
    // console.log(leftBar)
    // var rightBar = svgDoc.getElementById("rightGreenBackground");
    // var midBar = svgDoc.getElementById("midGreenBackground");
    // for (var i = 0; i < 50; i++) {
    //     var height = calcHeigth(i, 0, 50, 200)
    //     leftBar.setAttribute("height", height)
    //     rightBar.setAttribute("height", height)
    //     midBar.setAttribute("height", height)
    //     console.log(height)
    // }

}
function calcHeigth(value, maxValue, minValue, rectHeight) {
    var diff = maxValue - minValue;
    var newHeight = (value - minValue) / (diff / rectHeight)
    return rectHeight - newHeight;
}