var cores = [ "AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DimGrey",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Grey",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGrey",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSlateGrey",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SlateGrey",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen"
];
var alpha_colors = [cores[Math.floor(Math.random()  cores.length)]];
var i = 1;
while(i<10){
    if(alpha_colors[i] != alpha_colors[i-1]){
        alpha_colors.push(cores[Math.floor(Math.random()  cores.length)]);
        alpha_colors.sort();
        i++;
    }else{
            while(alpha_colors[i] == alpha_colors[i-1]){
                alpha_colors.pop();
                alpha_colors.push(cores[Math.floor(Math.random()  cores.length)]);
                alpha_colors.sort();

            }
            i++;
        }
}


function do_game() {
  var adivinha_cor = prompt("Estou pensando em uma dessas cores \n\n" + alpha_colors + "\n\n Em qual delas estou pensando?");
  tentativas += 1;
  checaracerto(adivinha_cor);
}

function checaracerto(adivinha_cor) {
  if (adivinha_cor == "stop") {
    return false;
  }
  if (cores.indexOf(adivinha_cor) == -1) {
    alert("Desculpe.  Não reconheci sua cor. \n\n Tente novamente");
    do_game();
  }
  if (adivinha_cor > coralvo) {
    alert("Você errou, tente novamente. \n\n Dica: Sua cor é alfabeticamente menor que a minha");
    do_game();
  }
  if (adivinha_cor < coralvo) {
    alert("Você errou, tente novamente. \n\n Hint: Sua cor é alfabeticamente maior que a minha");
    do_game();
  }
  if (cores.indexOf(adivinha_cor) >= 0) {
    alert("Parabéns! Você acertou a cor! \n\n Você levou " + tentativas + "tentativas pra terminar o jogo! \n\n Você pode ver a cor no plano de fundo");
  }
  document.body.style.backgroundColor = coralvo;
}
