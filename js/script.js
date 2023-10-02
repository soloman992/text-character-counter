const input = document.querySelector(".input");
        const output = document.querySelector(".result");
        const btn = document.querySelector(".btn");
        const reset = document.querySelector(".reset")
        let para1 ="There are total "
        let para2 =" charecter"
        
        
        btn.addEventListener("click", function(){
            if(input.value.length<=1){
            para1 ="There is total "
        }else{
            para1 ="There are total "
        }
            output.innerText = para1 + input.value.length + para2
        output.style.visibility = "visible";
        })
        reset.addEventListener("click", function(){
            input.value = ""
            output.style.visibility = "hidden"
        })