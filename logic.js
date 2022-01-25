function confirmInput() {
    event.preventDefault();
    let score = 0;
    let q1 = document.querySelector('input[name="1"]:checked').value;
    if (q1 == "HyperText Markup Language") {
      score++;
    }
    let q2 = document.querySelector('input[name="2"]:checked').value;
    if (q2 == "HTML,Head,Title,Body") {
      score++;
    }
    let q3 = document.querySelector('input[name="3"]:checked').value;
    if (q3 == "Web browser") {
      score++;
    }
    let q4 = document.querySelector('input[name="4"]:checked').value;
    if (q4 == "head tag") {
      score++;
    }
    let q5 = document.querySelector('input[name="5"]:checked').value;
    if (q5 == "web address") {
      score++;
    }
    if (score >= 4) {
      alert("your Score is: " + score);
    }
    if ((score <= 3) & (score >= 2)) {
      alert("your Score is: " + score);
    }
    if (score <= 1) {
      alert("your Score is: " + score);
    }
    window.location.reload()
  }
  onsubmit = "confirmInput()";
