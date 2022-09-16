function Mudar() {
  var saltoString = document.getElementById("somaLetra").value;
  var palavra = document.getElementById("palavra").value; //palavra digitada
  var palavraMin = palavra.toLowerCase();
  var novaPalavraArray = []; // array da nova palavra
  var comprimentoPalavra = palavraMin.length; //quantas letras tem a palavra
  var caracteres = Array.from(palavraMin); //caracteres da palavra num array
  var alfabetoMinusc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
  
  
 
   for (var C = comprimentoPalavra; C > 0; --C) {
      for (var D = alfabetoMinusc.length; D > 0; --D) {
           var saltoOficial = parseInt(saltoString);
        
        while (saltoOficial > 26) {
         saltoOficial -= 26
}
         while (saltoOficial<0) {
                saltoOficial +=26
}
        
           var ComprimentoAlfabeto =  alfabetoMinusc.length;
           var tamanhoArrayAlfabeto = ComprimentoAlfabeto - 1;
           var numeroElementoArrayCaractere = ComprimentoAlfabeto - D;
           var faltaAteFimAlfabeto = ComprimentoAlfabeto - numeroElementoArrayCaractere;
           var saltoAlemAlfabeto = saltoOficial - faltaAteFimAlfabeto;
       
        if ((saltoOficial >= faltaAteFimAlfabeto) && (caracteres[comprimentoPalavra - C] == alfabetoMinusc[numeroElementoArrayCaractere])){

              var addLetra = novaPalavraArray.push(alfabetoMinusc[saltoAlemAlfabeto]);
         
           } else  if (caracteres[comprimentoPalavra - C] == alfabetoMinusc[numeroElementoArrayCaractere]) {
                  
              var addLetra = novaPalavraArray.push(alfabetoMinusc[numeroElementoArrayCaractere + saltoOficial]);
           }

           
    }
  }
                                   return document.getElementById("palavraSaida").innerHTML = novaPalavraArray.join("");
}