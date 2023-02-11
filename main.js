const resultados=document.getElementById('resultados')
let lista=[]
registrar=document.getElementById('registrar');
mostrar=document.getElementById('mostrar');

eliminar=document.getElementById('eliminar');

registrar.addEventListener('click',()=>{
    
    let nombre=document.getElementById('nombre').value;
    let genero=document.getElementById('genero').value;
    let curso=document.getElementById('curso').value;
    let nota1=+document.getElementById('nota1').value;
    let nota2=+document.getElementById('nota2').value;
    let nota3=+document.getElementById('nota3').value; 
    
    if(nota1>=0 && nota1<=5 && nota2>=0 && nota2<=5 && nota3>=0 && nota3<=5){
        let promedio=(nota1+nota2+nota3)/3
        if(nombre!='' && genero!='' && curso!=''){
            lista.push({nombre:nombre,genero:genero,curso:curso,promedio:promedio})
        }else{
            alert('campos vacios')
        }
    }else{
        alert('notas fuera de rango')
    }
    localStorage.setItem('lista',JSON.stringify(lista))

})

mostrar.addEventListener('click',()=>{

    JSON.parse(localStorage.getItem('lista'))
    if(lista==undefined){
        alert('lista vacia')
    }else{

        resultados.innerHTML=''
        for(let i=0;i<lista.length; i++){
            resultados.innerHTML+=
            `
            <tr>
                <td>${lista[i].nombre}</td>
                <td>${lista[i].genero}</td>
                <td>${lista[i].curso}</td>
                <td>${lista[i].promedio}</td>
            </tr>
            `
        }

    }
 
})

eliminar.addEventListener('click',()=>{
    lista=[]
    resultados.innerHTML=''
})

document.addEventListener("keyup", e=>{

        if (e.key ==="Escape"){
            nombre.value=''
            genero.value=''
            curso.value=''
            nota1.value=''
            nota2.value=''
            nota3.value=''

        }
})












