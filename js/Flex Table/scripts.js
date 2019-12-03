let cols_number;
let rows_number;
function Creation_Fun(){
    document.getElementById('creation_form').style.display = 'none';
    cols_number = document.getElementById('cols_number').value;
    rows_number = document.getElementById('rows_number').value;
    document.getElementById('table_div').style.display = 'block';
    document.getElementById('editing_form').style.display='block';
    document.getElementById('delete_button').style.display='block';
    document.getElementById('th').setAttribute('colspan', String(cols_number));
    for(let j=0; j < Number(rows_number); j++) {
        let new_row = document.createElement("tr");
        for (let i = 0; i < Number(cols_number); i++) {
            new_row.appendChild(document.createElement("td")).innerHTML = ("<textarea cols='10' rows='5'></textarea><input type='button' class='area_submit button' value='Ok' style='display: block'>");
            document.getElementById('table').appendChild(new_row);
        }
    }
    for(let i=0; i < (Number(rows_number)*Number(cols_number)); i++) {
        document.getElementsByClassName('area_submit')[i].setAttribute('onclick', ("Cell_Fun(" + String(i) + ")"));
        document.getElementsByClassName('area_submit')[i].id = "button_" + String(i);
        (document.getElementsByTagName('textarea')[i]).id = "text_" + String(i);
    }
}
function Cell_Fun(id) {
    let text = document.getElementById(("text_" + String(id))).value;
   let new_tag =  document.createElement("p");
   new_tag.innerText = text;
   new_tag.id = "p_" + id;
   document.getElementById(("text_" + String(id))).replaceWith(new_tag);
   document.getElementById(("button_" + String(id))).style.display = 'none';
}
function Border_Value() {
    if (document.getElementById('border_width').value.length > 3){
        alert('Ширина больше 999');
    }
    else {
        let width = document.getElementById('border_width').value;
        let a = document.getElementById('border_style');
        let style = a.options[a.selectedIndex].text;
        document.getElementById('border_button').value = "Применить " + String(width) + " px и рамка " + style;
    }
}
function border_change() {
    let width = document.getElementById('border_width').value;
    let a = document.getElementById('border_style');
    let style = a.options[a.selectedIndex].value;
    for (let i = 0; i < document.getElementsByTagName("td").length; i++){
        let wiidth = String(width) + "px";
        document.getElementsByTagName("td")[i].style.borderWidth = wiidth;
        document.getElementsByTagName("td")[i].style.borderStyle = String(style);
        document.getElementsByTagName("th")[0].style.borderWidth = wiidth;
        document.getElementsByTagName("th")[0].style.borderStyle = String(style);
    }
}
function Header_Change() {
    let Header = document.getElementById('new_header').value;
    document.getElementById('th').innerText = Header;
}
function Delete_row() {
    let row_number = document.getElementById('delete_row').value;
    let row = document.getElementsByTagName("tr")[row_number];
    document.getElementById('table').removeChild(row);
    rows_number -= 1;
}
function Magic() {
    let num = Math.floor(Math.random() * (cols_number * rows_number));
    let size = Math.floor(Math.random() * (25 - 15)) + 15;
    let randomColor1 = "#"+((1<<24)*Math.random()|0).toString(16);
    let randomColor2 = "#"+((1<<24)*Math.random()|0).toString(16);
    let delete_num = Math.floor(Math.random() * 20);
    document.getElementsByTagName("td")[num].style.backgroundColor = randomColor1;
    document.getElementsByTagName("td")[num].style.color = randomColor2;
    document.getElementsByTagName("td")[num].style.fontSize = String(size) + "px";
    if (delete_num = 11){
        let new_tag1 = document.createElement("textarea");
        if (document.getElementById(('p_' + String(num)))) {
            document.getElementById(('p_' + String(num))).replaceWith(new_tag1);
            new_tag1.id = "text_" + String(num);
            document.getElementById(('text_' + String(num))).rows = 5;
            document.getElementById(('text_' + String(num))).cols = 10;
            document.getElementById(('button_' + String(num))).style.display = 'block';
        }
    }
}
function delete_table() {
    for (let i = 1; i <= Number(rows_number); i++){
        let row = document.getElementsByTagName("tr")[1];
        document.getElementById('table').removeChild(row);
    }
    document.getElementById('table_div').style.display = 'none';
    document.getElementById('editing_form').style.display='none';
    document.getElementById('delete_button').style.display='none';
    document.getElementById('creation_form').style.display = 'block';
    document.getElementById('th').innerText = "Заголовок"
}