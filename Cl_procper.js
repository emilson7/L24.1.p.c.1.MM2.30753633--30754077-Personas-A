export default class Cl_procper{
constructor(){
    this.conth=0
    this.contm=0
    this.contper=0
}
procesarpersona(per){
    if(per.sexo=="M"){
        this.conth++
        this.contper++
    } else if(per.sexo=="F"){
        this.contm++
        this.contper++
    }
}
porcmuj(){
    return this.contm/this.contper*100
}
cantmayor(){
    if(this.conth>this.contm){
        return "Hay mas hombres"
    } else if(this.contm>this.conth){
        return "Hay mas mujeres"
    }   else if(this.conth==this.contm){
            return "Hay la misma cantidad de Hombres que de Mujeres"
    }
}
}