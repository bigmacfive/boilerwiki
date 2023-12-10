function save() {
    // 텍스트를 가져옵니다.
    const text = document.getElementById("text").value;
  
    // 텍스트를 TXT 파일로 저장합니다.
    const fs = require("fs");
    fs.writeFile("output.txt", text, "utf-8", function(err) {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log("텍스트가 성공적으로 저장되었습니다.");
    });
  }