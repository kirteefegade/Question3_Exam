import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"adhar"
})
export class AdharPipe implements PipeTransform{
   

    transform(adhar:number){
        let str=[];
       let adharno=adhar.toString();
       for(let i=0;i<adharno.length;i++){
        if(i%4==0 && i!=0){
            str.push('-',adharno[i]);
        }else{
            str.push(adharno[i]);
        }
          /*  str= adharno.slice(i,4);
            str+=" ";*/
       } 
      return str.join('');

    }
}