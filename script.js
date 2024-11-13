const btnLayout1 = document.getElementById("btn-layout1")
const btnLayout2 = document.getElementById("btn-layout2")
const btnLayout3 = document.getElementById("btn-layout3")
const btnLayout4 = document.getElementById("btn-layout4")
const btnChoice1 = document.getElementById("btn-4choice")
const btnChoice2 = document.getElementById("btn-5choice")
const section3 = document.getElementById("section3")
const mainContainer = document.getElementById("main-container")
const table = document.getElementById("main-table");

table.style.width = "100%"

function Export2Word(element, filename){
    if(mainContainer.innerText == ""){
        alert("Please type at least 1 MCQ to export.");
      }
    else{
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml+mainContainer.innerHTML+postHtml;
        

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        
        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        
        // Specify file name
        filename = filename?filename+'.doc':'document.doc';
        
        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);
        
        if(navigator.msSaveOrOpenBlob ){
            navigator.msSaveOrOpenBlob(blob, filename);
        }else{
            // Create a link to the file
            downloadLink.href = url;
            
            // Setting the file name
            downloadLink.download = filename;
            
            //triggering the function
            downloadLink.click();
        }
        
        document.body.removeChild(downloadLink);
    }
}
function addLayout1(){
    var row1 = table.insertRow(table.lastIndex);
    var row2 = table.insertRow(table.lastIndex);
    var cellQ = row1.insertCell(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);

    cellQ.colSpan = "4";
    cellQ.width = "100%";
    cell1.width = "25%";
    cell2.width = "25%";
    cell3.width = "25%";
    cell4.width = "25%";
    cellQ.innerHTML = "<p contenteditable='true'>Question</p>";
    cell1.innerHTML = "<p contenteditable='true'>1.</p>";
    cell2.innerHTML = "<p contenteditable='true'>2.</p>";
    cell3.innerHTML = "<p contenteditable='true'>3.</p>";
    cell4.innerHTML = "<p contenteditable='true'>4.</p>";
}
function addLayout2(){
    var row1 = table.insertRow(table.lastIndex);
    var row2 = table.insertRow(table.lastIndex);
    var row3 = table.insertRow(table.lastIndex);
    var row4 = table.insertRow(table.lastIndex);
    var row5 = table.insertRow(table.lastIndex);
    var cellQ = row1.insertCell(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row3.insertCell(0);
    var cell3 = row4.insertCell(0);
    var cell4 = row5.insertCell(0);

    cellQ.colSpan = "4";
    cellQ.width = "100%";
    cell1.colSpan = "4";
    cell1.width = "100%";
    cell2.colSpan = "4";
    cell2.width = "100%";
    cell3.colSpan = "4";
    cell3.width = "100%";
    cell4.colSpan = "4";
    cell4.width = "100%";
    cellQ.innerHTML = "<p contenteditable='true'>Question</p>";
    cell1.innerHTML = "<p contenteditable='true'>1.</p>";
    cell2.innerHTML = "<p contenteditable='true'>2.</p>";
    cell3.innerHTML = "<p contenteditable='true'>3.</p>";
    cell4.innerHTML = "<p contenteditable='true'>4.</p>";
}
function addLayout3(){
    var row1 = table.insertRow(table.lastIndex);
    var row2 = table.insertRow(table.lastIndex);
    var cellQ = row1.insertCell(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);
    var cell5 = row2.insertCell(4);

    cellQ.colSpan = "5";
    cellQ.width = "100%";
    cell1.width = "20%";
    cell2.width = "20%";
    cell3.width = "20%";
    cell4.width = "20%";
    cell5.width = "20%";
    cellQ.innerHTML = "<p contenteditable='true'>Question</p>";
    cell1.innerHTML = "<p contenteditable='true'>1.</p>";
    cell2.innerHTML = "<p contenteditable='true'>2.</p>";
    cell3.innerHTML = "<p contenteditable='true'>3.</p>";
    cell4.innerHTML = "<p contenteditable='true'>4.</p>";
    cell5.innerHTML = "<p contenteditable='true'>5.</p>";
}
function addLayout4(){
    var row1 = table.insertRow(table.lastIndex);
    var row2 = table.insertRow(table.lastIndex);
    var row3 = table.insertRow(table.lastIndex);
    var row4 = table.insertRow(table.lastIndex);
    var row5 = table.insertRow(table.lastIndex);
    var row6 = table.insertRow(table.lastIndex);
    var cellQ = row1.insertCell(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row3.insertCell(0);
    var cell3 = row4.insertCell(0);
    var cell4 = row5.insertCell(0);
    var cell5 = row6.insertCell(0);

    cellQ.colSpan = "4";
    cellQ.width = "100%";
    cell1.colSpan = "4";
    cell1.width = "100%";
    cell2.colSpan = "4";
    cell2.width = "100%";
    cell3.colSpan = "4";
    cell3.width = "100%";
    cell4.colSpan = "4";
    cell4.width = "100%";
    cell5.colSpan = "4";
    cell5.width = "100%";
    cellQ.innerHTML = "<p contenteditable='true'>Question</p>";
    cell1.innerHTML = "<p contenteditable='true'>1.</p>";
    cell2.innerHTML = "<p contenteditable='true'>2.</p>";
    cell3.innerHTML = "<p contenteditable='true'>3.</p>";
    cell4.innerHTML = "<p contenteditable='true'>4.</p>";
    cell5.innerHTML = "<p contenteditable='true'>5.</p>";
}
function addBtnLayout1and2(){
  btnLayout1.style.display = "inline-block"
  btnLayout2.style.display = "inline-block"
  btnLayout3.style.display = "none"
  btnLayout4.style.display = "none"
  btnChoice2.style.cursor = "not-allowed"
  btnChoice2.disabled = "true"
  section3.style.display = "flex"
}
function addBtnLayout3and4(){
  btnLayout3.style.display = "inline-block"
  btnLayout4.style.display = "inline-block"
btnLayout1.style.display = "none"
  btnLayout2.style.display = "none"
  btnChoice1.style.cursor = "not-allowed"
  btnChoice1.disabled = "true"
  section3.style.display = "flex"

}
      