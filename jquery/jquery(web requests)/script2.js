$(document).ready(function () {
    $("#button").click(function () {
        $("#out").load("https://inxaoc.github.io/example/ajax-1.html")
         $.get( "https://inxaoc.github.io/example/ajax.json", function( data ) {
            //$( "#out_web" ).html(data);
            //alert( "Load was performed." );
            //$("#glos").text(dat)
            $.each(data, function(index, element) {
                $('#glos').text(index);
                $.each(element, function (index, element) {
                    let a = document.createElement("ul");
                    a.id = index + '1';
                    document.getElementById('glos').appendChild(a);
                    document.getElementById(index + '1').innerText = index;
                    try {
                        $.each(element, function (index2, element2) {
                            let a = document.createElement("ul");
                            a.id = index2 + '2';
                            document.getElementById(index + '1').appendChild(a);
                            document.getElementById(index2 + '2').innerText = index2;
                            try {
                                $.each(element2, function (index3, element3) {
                                    let a = document.createElement("ul");
                                    a.id = index3 + '3';
                                    document.getElementById(index2 + '2').appendChild(a);
                                    document.getElementById(index3 + '3').innerText = index3;
                                    try {
                                        $.each(element3, function (index4, element4) {
                                            let a = document.createElement("ul");
                                            a.id = index4 + '4';
                                            document.getElementById(index3 + '3').appendChild(a);
                                            document.getElementById(index4 + '4').innerText = index4;
                                            try {
                                                $.each(element4, function (index5, element5) {
                                                    let a = document.createElement("ul");
                                                    a.id = index5 + '5';
                                                    document.getElementById(index4 + '4').appendChild(a);
                                                    document.getElementById(index5 + '5').innerText = index5;
                                                    try {
                                                        $.each(element5, function (index6, element6) {
                                                            let a = document.createElement("ul");
                                                            a.id = index6 + '6';
                                                            document.getElementById(index5 + '5').appendChild(a);
                                                            document.getElementById(index6 + '6').innerText = index6;
                                                            try {
                                                                $.each(element6, function (index7, element7) {
                                                                    alert(element6);
                                                                });
                                                            }
                                                            catch (e) {
                                                                let a = document.createElement("li");
                                                                let rnd = Math.floor(Math.random() * 100);
                                                                a.id = element6 + String(rnd);
                                                                document.getElementById(index6 + '6').appendChild(a);
                                                                document.getElementById(element6 + String(rnd)).innerText = element6;
                                                                //alert(element5);
                                                            }
                                                            //alert(index);
                                                        });
                                                    }
                                                    catch (e) {
                                                        let a = document.createElement("li");
                                                        let rnd = Math.floor(Math.random() * 100);
                                                        a.id = element5 + String(rnd);
                                                        document.getElementById(index5 + '5').appendChild(a);
                                                        document.getElementById(element5 + String(rnd)).innerText = element5;
                                                        //alert(element5);
                                                    }
                                                    //alert(index);
                                                });
                                            }
                                            catch (e) {
                                                let a = document.createElement("li");
                                                let rnd = Math.floor(Math.random() * 100);
                                                a.id = element4 + String(rnd);
                                                document.getElementById(index4 + '4').appendChild(a);
                                                document.getElementById(element4 + String(rnd)).innerText = element4;
                                                //alert(element4);
                                            }
                                            //alert(index);
                                        });
                                    }
                                    catch (e) {
                                        let a = document.createElement("li");
                                        a.id = element3 + '3';
                                        document.getElementById(index3 + '3').appendChild(a);
                                        document.getElementById(element3 + '3').innerText = element3;
                                        //alert(element3);
                                    }
                                    //alert(index);
                                });
                            }
                            catch (e) {
                                let a = document.createElement("li");
                                a.id = element2 + '2';
                                document.getElementById(index2 + '2').appendChild(a);
                                document.getElementById(element2 + '2').innerText = element2;
                                //alert(element2);
                            }
                            //alert(index);
                        });
                    }
                    catch (e) {
                        let a = document.createElement("li");
                        a.id = element + '1';
                        document.getElementById(index + '1').appendChild(a);
                        document.getElementById(element + '1').innerText = element;
                        //alert(element);
                    }
                    /*$.each(element, function () {
                        //$('#glos').append($('<li>', {text: self}));
                        /*if (element){
                            $.each(element, function (index, element) {
                                $('#glos').append($('<li>', {text: index}));
                            })
                        }
                    })*/
                })
            });
       });
    });
});