
let nombre = prompt("Ingrese su Nombre");
const preciocombo1 = 2000
const preciocombo2 = 3000
    

    while(nombre){
        alert( "Bienvenido a fritos "  + nombre);
        let combo = prompt("Eliga su combo 1- Hambruguesa con papas mas una bebid 2- pancho xxl + bebida");
        
        switch(combo){
            case "1":
                let ingresesudinero = prompt("Elegiste el combo 1 el precio es de $2000, ingrese su dinero")
                if( ingresesudinero >= preciocombo1){
                    let vuelto = ingresesudinero - preciocombo1;
                    alert("Gracias por la compra aqui tiene su vuelto:$" +vuelto);
                    
                }else {
                    let dinerofaltante = preciocombo1 - ingresesudinero
                    alert("Dinero insuficiente le faltan:$" + dinerofaltante)
                }
                break;
            
            case "2":
                let ingresesudinero2 = prompt("Elegiste el combo 2 el precio es de $3000, ingrese su dinero")
                if( ingresesudinero2 >= preciocombo2){
                    let vuelto2 = ingresesudinero2 - preciocombo2;
                    alert("Gracias por la compra aqui tiene su vuelto:$" +vuelto2);
                
                }else {
                    let dinerofaltante2 = preciocombo2 - ingresesudinero2
                    alert("Dinero insuficiente le faltan:$" + dinerofaltante2)
                }
                break;
                
            default:
                break;
                
    }
}




            
        

   