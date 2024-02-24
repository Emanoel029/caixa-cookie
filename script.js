const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
  //definir o cookie para o mês, após 1 mês o cookie expirará automaticamente
  //1min = 60seg, 1hr = 60min, 60min 24 significa para 1 dia e * 30 significa para 1 mês
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;

  //se o cookie acima definido
  if (document.cookie) {
    cookieBox.classList.add("hide"); //ocultar a caixa de cookies quando o cookie estiver definido
  } else {
    alert("o Cookie não pode ser definido!"); //se o cookie não puder ser definido, o alerta de erro
  }
};
//vamos esconder a caixa de cookies se o cookie estiver definido e não tiver expirado
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");
//se a cadeia de caracteres dada não for encontrada em todos os cookies, será devolvido -1 e mostraremos a caixa se for devolvido -1, caso contrário, esconderemos a caixa
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
