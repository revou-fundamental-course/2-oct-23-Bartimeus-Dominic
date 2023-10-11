var displaykalkulator = ""
function buttonclick(e) {
    if (e == "1" || e == "2" || e == "3" || e == "4" || e == "5" || e == "6" || e == "7" || e == "8" || e == "9" || e == "0" || e == "Reset" || e == ".") {
        if (e == "Reset") {
            displaykalkulator = ""
            document.getElementById("output-suhu").value = ""
            document.getElementById("cara-kalkulasi").value = ""
            document.getElementById("cara-konversi").value = ""
        } else {
            displaykalkulator = displaykalkulator + e
            console.log(displaykalkulator)
        }
        document.getElementById("input-suhu"). value = displaykalkulator
    } else {
        console.log("Input harus berupa angka dan simbol")
    }
}
function penjelasancelsiusfahrenheit() {
    if(document.getElementById("suhu-diketahui").innerHTML == "Celsius"){
        document.getElementById("cara-kalkulasi").value = ('Suhu dalam Fahrenheit = ( ' + document.getElementById("input-suhu").value + ' * 9 / 5 ) + 32 = ' + document.getElementById("input-suhu").value * 9 / 5 + ' + 32 = ' + document.getElementById("output-suhu").value)
        document.getElementById("cara-konversi").value = ('Suhu dalam Fahrenheit = ( Suhu dalam Celsius * 9 / 5 ) + 32')
    } else {
        let suhutempo = document.getElementById("input-suhu").value
        let suhutempominus32 = suhutempo - 32
        document.getElementById("cara-kalkulasi").value = ('Suhu dalam Celsius = ( ' + document.getElementById("input-suhu").value + ' - 32 ) * 5 / 9 = ' + suhutempominus32 + ' * 5 / 9 = ' + document.getElementById("output-suhu").value)
        document.getElementById("cara-konversi").value = ('Suhu dalam Celsius = ( Suhu dalam Fahrenheit - 32 ) * 5 / 9')
    }
}
function konversicelsiusfahrenheit() {
    if(document.getElementById("suhu-diketahui").innerHTML == "Celsius"){
        let suhuinput = document.getElementById("input-suhu").value
        let suhuoutput = (parseFloat(suhuinput) * 9 / 5) + 32
        console.log(suhuoutput)
        document.getElementById("output-suhu"). value = suhuoutput
    } else {
        let suhuinput = document.getElementById("input-suhu").value
        let suhuoutput = (parseFloat(suhuinput) - 32) * 5 / 9
        console.log(suhuoutput)
        document.getElementById("output-suhu"). value = suhuoutput
    }
    penjelasancelsiusfahrenheit()
  }
function buttonkaliminus1() {
    let suhuinput = document.getElementById("input-suhu").value
    let suhuinputkaliminus1 = (parseFloat(suhuinput) * (-1))
    console.log(suhuinputkaliminus1)
    document.getElementById("input-suhu"). value = suhuinputkaliminus1
}
function buttonreverse() {
    let suhudiketahui = document.getElementById("suhu-diketahui").innerHTML
    if(suhudiketahui == "Celsius") {
        document.getElementById("suhu-diketahui").innerHTML = "Fahrenheit"
        document.getElementById("suhu-ditanya").innerHTML = "Celsius"
    } else {
        document.getElementById("suhu-diketahui").innerHTML = "Celsius"
        document.getElementById("suhu-ditanya").innerHTML = "Fahrenheit"
    }
    let suhutemp = document.getElementById("input-suhu").value
    document.getElementById("input-suhu").value = document.getElementById("output-suhu").value
    document.getElementById("output-suhu").value = suhutemp
}