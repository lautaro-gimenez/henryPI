export const validateName=(name)=>{
    if (!name) {
        return('debes colocar un nombre')
    }
    const regex = /^[A-Za-z0-9\s]+$/;
    if (!regex.test(name)) {
        return('el nombre no puede tener simbolos')
    }
    return true
}
export const validateImage=(image)=>{
    if (!image) {
        return('debes colocar una imagen')
    }
    return true
}
export const validateDescription=(description)=>{
    if (!description) {
        return('debes colocar una description')
    }
    return true
}
export const validatePlataformas=(plataformas)=>{
    if (plataformas.length===0) {
        return('debes colocar al menos una plataforma')
    }
    return true
}
export const validateFecha=(fecha)=>{
    if (!fecha){
        return('debes colocar una fecha')
    }
   return true
}
    
export const validateRating=(rating)=>{
    if (rating===null) {
        return('debes añadir un rating')
    }
    return true
}
export const validateGenres=(genres)=>{
    if (genres.length===0) {
        return('selecciona al menos un genero')
    }
    return true
}

 