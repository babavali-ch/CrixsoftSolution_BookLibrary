let books = [];

let history = [];

function addBook(){

    let title = document.getElementById("title").value;

    let author = document.getElementById("author").value;

    let category = document.getElementById("category").value;

    if(title=="" || author=="" || category==""){
        alert("Fill all fields");
        return;
    }

    books.push({
        title:title,
        author:author,
        category:category,
        borrowed:false
    });

    displayBooks();

    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("category").value="";
}

function displayBooks(){

    let list=document.getElementById("bookList");

    list.innerHTML="";

    books.forEach((book,index)=>{

        list.innerHTML+=`
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>

            <td class="${book.borrowed ? 'borrowed':'available'}">
            ${book.borrowed ? "Borrowed":"Available"}
            </td>

            <td>
            <button onclick="borrowBook(${index})">
            ${book.borrowed ? "Return":"Borrow"}
            </button>
            </td>
        </tr>
        `;

    });

}

function borrowBook(index){

    if(books[index].borrowed){

        books[index].borrowed=false;

        history.push("Returned : "+books[index].title);

    }

    else{

        books[index].borrowed=true;

        history.push("Borrowed : "+books[index].title);

    }

    displayBooks();

    displayHistory();

}

function displayHistory(){

    let h=document.getElementById("history");

    h.innerHTML="";

    history.forEach(function(item){

        h.innerHTML+="<li>"+item+"</li>";

    });

}

function searchBook(){

    let input=document.getElementById("search").value.toLowerCase();

    let rows=document.querySelectorAll("#bookList tr");

    rows.forEach(function(row){

        let text=row.innerText.toLowerCase();

        if(text.includes(input))

            row.style.display="";

        else

            row.style.display="none";

    });

}