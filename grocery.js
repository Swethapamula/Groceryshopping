
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if( this.readyState==4 && this.status==200)
        {
            const output= JSON.parse(this.responseText);
            const tableBody = document.getElementById('table-body');
            const mytable= document.getElementById("myTable");
            output.forEach(row => {
            let tr = mytable.insertRow();
            tr.insertCell().textContent = row.SerNo;
            tr.insertCell().textContent = row.Name;
            tr.insertCell().textContent = row.Quantity;
            tr.insertCell().textContent = row.Unit;
            tr.insertCell().textContent = row.Department;
            tr.insertCell().textContent = row.Notes;
            tableBody.appendChild(tr)
                   
        });
                
        

            }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();