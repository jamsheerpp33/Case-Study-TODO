$(document).ready(function () { 

    // FETCHING DATA FROM JSON FILE 
    $.getJSON("https://jsonplaceholder.typicode.com/todos", 
            function (data) { 
        var entry = ''; 

        // ITERATING THROUGH OBJECTS 
            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
        $.each(data, function (key, value) { 
        if(entry==''){
                entry += '<tr>'; 
            entry += '<td><b>USERID</b></td>'; 

            entry += '<td><b>ID</b></td>'; 

            entry += '<td><b>TITLE</b></td>'; 

            entry += '<td><b>COMPLETED</b></td>'; 

            entry += '</tr>'; 

            }

        else
            entry += '<tr>'; 
            entry += '<td>' + value.userId + '</td>'; 

            entry += '<td>' + value.id + '</td>'; 

            entry += '<td>' + value.title + '</td>'; 
            if(value.completed==false)
            {
                entry += '<td>' + `<input id="tasksts" type="checkbox"  onchange="return Validate();">` + '</td>';
            }
            else{
                entry += '<td>' + '<input type="checkbox" disabled checked>' + '</td';
            } 

            entry += '</tr>'; 
        });
     
        
        //INSERTING ROWS INTO TABLE 
        $('#table').append(entry); 
    }); 
}); 

function Validate() {
    var checked = 0;

    //Reference the Table.
    var table = document.getElementById("table");

    //Reference all the CheckBoxes in Table.
    var chks = table.getElementsByTagName("input");

    //Loop and count the number of checked CheckBoxes.
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            checked++;
        }
    }
    if (checked%5 == 0 && checked!=90) {
        alert("Congrats, You completed 5 tasks successfully.");
        return true;
    } else {
        return false;
    }
};
// DESIGNED AND DEVELOPED BY MUHAMMED SHIYAD CM
