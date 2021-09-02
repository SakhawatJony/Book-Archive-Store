//spinner functuion
const DisplaySpinner = spinner => {
    document.getElementById('spinner-show').style.display = spinner
}


// search input dispaly show program

const searchBook = () => {
    const searchFiled = document.getElementById('search-filed');
    const searchText = searchFiled.value;
    // clear data
    searchFiled.value = ' ';
    // load data
    DisplaySpinner('block')
    const url =`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> dispalySearchResult(data));
  
};

const dispalySearchResult = searchItemValue => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ' ';
    const books = searchItemValue.docs;
    const totalResult = document.getElementById('total-result');
    totalResult.innerText= searchItemValue.numFound;
    



// result not pound start
   if(books.length === 0){
      const resultNotPound = document.getElementById('resultnotpound');
      resultNotPound.innerText = `Sorry Result Not Pound`
      resultNotPound.style.display='block';
    
   }

else{
    const resultNotPound = document.getElementById('resultnotpound');
    resultNotPound.textContent = ' ';
}
   // result not pound ends

   
//    loop for  data loding start
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card h-100 p-3 " >
        <div class ="bg-light">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg " width="100%" height="400px" class=""  alt="...">
        </div>
        <div class="card-body p-3">
          <h5 class="card-title">Book Name: ${book.title} </h5>
          <p class="card-text">Author: ${book.author_name} </p>
          <p class="card-text">First Published: ${book.first_publish_year} </p>
        </div>
        `;
        searchResult.appendChild(div);
   
        });

        DisplaySpinner('none')
        
//    loop for  data loding start

   }







