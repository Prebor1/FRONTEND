function $(id){
    return document.getElementById(id);
}

function rangeRGB(){

    const piros = $("red-range").value;
    const zold = $("green-range").value;
    const kek = $("blue-range").value;
    const atlacco = $("alpha-range").value;

    $("red-value").value = piros;
    $("green-value").value = zold;
    $("blue-value").value = kek;
    $("alpha-value").value = atlacco;

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${piros},${zold},${kek},${atlacco})`;
}

$('red-range').addEventListener("input", rangeRGB);
$('green-range').addEventListener("input", rangeRGB);
$('blue-range').addEventListener("input", rangeRGB);
$("alpha-range").addEventListener("input", rangeRGB);

function valueRGB(){

    const piros = $("red-value").value;
    const zold = $("green-value").value;
    const kek = $("blue-value").value;
    const atlacco = $("alpha-value").value;

    $("red-range").value = piros;
    $("green-range").value = zold;
    $("blue-range").value = kek;
    $("alpha-range").value = atlacco;

    document.getElementById('rgb-box').style.backgroundColor = `rgba(${piros},${zold},${kek},${atlacco})`;
}

$('red-value').addEventListener("input", valueRGB);
$('green-value').addEventListener("input", valueRGB);
$('blue-value').addEventListener("input", valueRGB);
$("alpha-value").addEventListener("input", valueRGB);


////////////////////////////////////////////////////////////////////////

function rangeSize(){

    const szelesseg = $('width-range').value;
    const magassag = $('height-range').value;
    const borderRadius = $('border-range').value;
    const forgatas = $("rotate-range").value;

    $("width-value").value = szelesseg;
    $("height-value").value = magassag;
    $("border-value").value = borderRadius;
    $("rotate-value").value = forgatas;

    document.getElementById('rgb-box').style.width = `${szelesseg}px`;
    document.getElementById('rgb-box').style.height = `${magassag}px`;
    document.getElementById('rgb-box').style.borderRadius = `${borderRadius}px`;
    document.getElementById('rgb-box').style.rotate = `${forgatas}deg`;
}

$('width-range').addEventListener("input", rangeSize);
$('height-range').addEventListener("input", rangeSize);
$('border-range').addEventListener("input", rangeSize);
$('rotate-range').addEventListener("input", rangeSize);

function valueSize(){

    const szelesseg = $('width-value').value;
    const magassag = $('height-value').value;
    const borderRadius = $('border-value').value;
    const forgatas = $("rotate-value").value;

    $("width-range").value = szelesseg;
    $("height-range").value = magassag;
    $("border-range").value = borderRadius;
    $("rotate-range").value = forgatas;

    document.getElementById('rgb-box').style.width = `${szelesseg}px`;
    document.getElementById('rgb-box').style.height = `${magassag}px`;
    document.getElementById('rgb-box').style.borderRadius = `${borderRadius}px`;
    document.getElementById('rgb-box').style.rotate = `${forgatas}deg`;

}

$('width-value').addEventListener("input", valueSize);
$('height-value').addEventListener("input", valueSize);
$('border-value').addEventListener("input", valueSize);
$('rotate-value').addEventListener("input", valueSize);



/*
function boxWidth(){
    const szelesseg = $('width-range').value;
    $('rgb-box').style.width= szelesseg;
}
$('width-range').addEventListener("input", boxWidth());
*/


