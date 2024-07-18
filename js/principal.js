/**
 * Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea
 * estos datos y reporte al final: el porcentaje de mujeres procesadas y si hay mas hombres
 * mas mujeres o ambos por igual.
 * Se tienen als siguientes personas: Luisa, Ana. Jose, Carmen, Rosa
 * Jose, Maria, Luz, Rafael, Liz, Marcos y Leo.
 */
import Cl_persona from "./Cl_persona.js";
import Cl_procper from "./Cl_procper.js";

let procesador= new Cl_procper()
    let persona1= new Cl_persona("Luisa", "F")
    let persona2= new Cl_persona("Ana", "F")
    let persona3= new Cl_persona("Jose", "M")
    let persona4= new Cl_persona("Carmen", "F")
    let persona5= new Cl_persona("Rosa", "F")
    let persona6= new Cl_persona("Jose", "M")
    let persona7= new Cl_persona("Maria", "F")
    let persona8= new Cl_persona("Luz", "F")
    let persona9= new Cl_persona("Rafael", "M")
    let persona10= new Cl_persona("Liz", "F")
    let persona11= new Cl_persona("Marcos", "M")
    let persona12= new Cl_persona("Leo" ,"M")

procesador.procesarpersona(persona1)
procesador.procesarpersona(persona2)
procesador.procesarpersona(persona3)
procesador.procesarpersona(persona4)
procesador.procesarpersona(persona5)
procesador.procesarpersona(persona6)
procesador.procesarpersona(persona7)
procesador.procesarpersona(persona8)
procesador.procesarpersona(persona9)
procesador.procesarpersona(persona10)
procesador.procesarpersona(persona11)
procesador.procesarpersona(persona12)

let salida= document.getElementById("salida")
salida.innerHTML=`
<br>Porcentaje de mujeres procesadas ${procesador.porcmuj()}%
<br>${procesador.cantmayor()}
`