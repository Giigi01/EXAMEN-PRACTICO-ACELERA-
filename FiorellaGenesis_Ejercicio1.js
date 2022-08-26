 const horas = 53;
       
           if(horas>=40) {
       
           const salario_normal= 40*265;
           console.log("El sueldo por horas normales es $"+ salario_normal);
           const salario_extra =(horas-40)*350;
           console.log("El sueldo por horas extras es $"+salario_extra);
          } else{
             console.log("Sueldo Normal $"+ (horas * 265));
