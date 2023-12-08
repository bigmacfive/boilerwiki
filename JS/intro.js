(function() {
    var progress = 0;
    var interval = setInterval(function() {
      progress++;
      if (progress === 100) {
        clearInterval(interval);
        document.querySelector("#progress").textContent = "Click!";
        document.body.addEventListener("click", function() {
          window.location.href = "https://boilerwiki.me/main";
        });
      } else {
        document.querySelector("#progress").textContent = progress + "%";
      }
    }, 30);
  })();