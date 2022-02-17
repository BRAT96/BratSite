var btn = document.getElementById('btnSearch');

function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
}

  function Search()
  {
      const collection = document.getElementsByClassName("god__name");
      var whatSearch = document.getElementById("what_search").value;
      for(i=0; i<collection.length; i++)
      {
        collection[i].parentNode.parentNode.classList.remove("god1");
        if(collection[i].textContent.toLowerCase() == whatSearch || collection[i].textContent == whatSearch || collection[i].textContent.toUpperCase() == whatSearch)
        {
          collection[i].parentNode.scrollIntoView({block: "center", behavior: "smooth"});
          collection[i].parentNode.parentNode.classList.add("god1");
        }
      }
  }

  document.querySelector("#what_search").addEventListener("keyup", event => {
      if(event.key !== "Enter") return;
      document.querySelector("#btnSearch").click();
      event.preventDefault();
  });

btn.addEventListener("click", Search);
