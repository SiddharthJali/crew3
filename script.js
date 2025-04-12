function calculateRoundUp() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid transaction amount.");
      return;
    }
  
    const roundedUp = Math.ceil(amount / 10) * 10;
    const invested = (roundedUp - amount).toFixed(2);
  
    document.getElementById("rounded").innerText = roundedUp;
    document.getElementById("invested").innerText = invested;
    document.getElementById("result").classList.remove("hidden");
  }
  