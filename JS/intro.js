(function() {
    var progress = 0;
    var interval = setInterval(function() {
      progress++;
      if (progress === 100) {
        clearInterval(interval);
        document.querySelector("h3").textContent = "Click!";
        document.querySelector("body").addEventListener("click", function() {
          window.location.href = "https://boilerwiki.me/main";
        });
      } else {
        document.querySelector("h3").textContent = progress + "%";
      }
    }, 30);
  })();