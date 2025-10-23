document.getElementById("mintBtn").addEventListener("click", async () => {
  const res = await fetch("/api/mint");
  const data = await res.json();
  document.getElementById("result").innerText = data.message;
});
