function mediaNotas(notas) {
    
    let soma = notas.reduce((total, nota) => total + nota, 0);
    
   
    let media = soma / notas.length;
    
    
    let acimaMedia = notas.filter(nota => nota > media).length;
    
    
    return {
        media: media,
        acimaMedia: acimaMedia
    };
}

let notas = [8.5, 7.0, 9.0, 6.5];
console.log(mediaNotas(notas));


