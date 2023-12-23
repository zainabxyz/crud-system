// ? ****************variables********************
var sitename=document.getElementById("sitename")
var siteurl=document.getElementById("siteurl")
var BookMarkList=[];
var alertforname=document.getElementById("alertForName");

if(localStorage.getItem("bookmark") !=null){
    BookMarkList=JSON.parse(localStorage.getItem("bookmark"))
    displayTable()
}


// & *************functions****************
function addBookMark(){
  if(validationBookMark() ){
    var BookMark={
        name:sitename.value,
        url:siteurl.value
      }
      BookMarkList.push(BookMark)
      displayTable()
      localStorage.setItem("bookmark",JSON.stringify(BookMarkList))
      clearBookMark()
      console.log(BookMarkList)
  }
}

function clearBookMark(){
    sitename.value=""
    siteurl.value=""
}
function displayTable(){
    var Table="";
    for(i=0;i< BookMarkList.length;i++){
        Table+= `<tr >
        <td>${i+1}</td>
        <td>${BookMarkList[i].name}</td>
        <td><button class="btn btn-primary">Visit</button></td>
        <td><button class="btn btn-danger" onclick="DeleteBookMark(${i});">Delete</button></td>
    </tr>`
   document.getElementById("tablebody").innerHTML=Table
    }
}

function DeleteBookMark(index){
    // console.log(index)
    BookMarkList.splice(index,1)
    console.log(BookMarkList)
    localStorage.setItem("bookmark",JSON.stringify(BookMarkList))
    displayTable()
}
function validationBookMark(){
    var SiteName =sitename.value;
    var regexname=/^[a-zA-Z][a-zA-Z]{4,10}$/;
    if(regexname.test(SiteName)){
        sitename.classList.add("is-valid")
        sitename.classList.remove("is-invalid")
        alertforname.classList.add("d-none")
        return true;
    }
    else{
        sitename.classList.add("is-invalid")
        sitename.classList.remove("is-valid")
        alertforname.classList.remove("d-none")
        return false;
    }
    
}



