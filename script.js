
function reverseSrting(ch){
    let chi =""
    for(let i=ch.length - 1 ; i>=0 ;i--){
        chi+=ch[i]
    }
    return chi
    

}
function  countChar(ch){
    var k=0;
    for (let i in ch){
        k++;
    }
    return k;
}
function capital(ch){
    ch[0]=ch[0].toUppercase()
    for(let i = 1; i <ch.length-1 ; i++){
        if (ch[i] == " ") {
            ch[i+1] = ch[i+1].toUppercase()
        }    
    }
    return ch
}
function minmax(t){
    let min =t[0]
    let max=t[0]
     
    for (let i = 1; i < t.length-1; i++) {
        if (min > t[i]) {
            min = t[i];
        } else if (max < t[i]) {
            max = t[i]
            
        }
        
    }
    return [min,max]
}

function somme(t) {
    let s = 0
    for (let i = 0; i < t.length-1 ; i++) {
        s = s+ t[i]
    }
    return s
    
}

function filtre(t){
    var tp = []
    for (let i = 0; i < t.length-1; i++) {
        if (t[i]>0){
            tp.push(t[i])
        } 
    }  
    return  tp
        }
function factoriel(n){
   
   let res = 1;
   for (let i =1;i<n; i++ ){
    res*=i
   }
}return res
 function primenumber(n){
    var p= true
    var i=2
    do{
        if(n%i ==0){p=false

        }
        i++

    }while(i<n && lp)
        return p
 }
 function fibonacci(n){
    var arr =[0,1]
    for (let i=2;i<n ; i++){
        arr.push(arr[i-1]+  arr[i-2])
    }return arr[n-1]
 }
    








console.log(reverseSrting("bonjour"))
