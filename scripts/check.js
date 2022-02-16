var pass = prompt("Enter the Password:", "");
if (pass == null)  window.location = "../wrong.html";
else if (pass.toLowerCase() == "1174")
      window.location = "parashnikBlog.html";
else if (pass.toLowerCase() == "7518")
      window.location = "blatnoyBlog.html";
else if (pass.toLowerCase() == "2744")
      window.location = "vzlomZhBlog.html";
else  window.location = "../wrong.html";
