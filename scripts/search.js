var btn = document.getElementById('btnSearch');

  function Search()
  {
      const collection = document.getElementsByClassName("god__name");
      var whatSearch = document.getElementById("what_search").value;
      for(i=0; i<collection.length; i++)
      {
        if(collection[i].textContent.toLowerCase() == whatSearch || collection[i].textContent == whatSearch)
        {
          collection[i].parentNode.scrollIntoView({block: "center", behavior: "smooth"});
        }
      }
  }

btn.addEventListener("click", Search);
