
function resultado() {
  var preco = document.getElementById("preço").value;
  var avista = Number(preco)/(100*0.10);
  document.getElementById("Preco").textContent = `Preço (R$):${preco},00`;
  var avista2 = avista;
  var avista2 = (preco)-(avista2);
  document.getElementById("Avista").textContent = `À vista (R$):${avista2},00`; 
  var preco = (preco)/3;
  document.getElementById("ou").textContent = `Ou 3x de (R$):${preco},00`;

}












