let addskills=()=>{
    let a=document.getElementById("dskills")
    let b=document.createElement("input")
    b.setAttribute("type","text")
    b.classList.add("add")
    a.append(b)
    let c=document.querySelector(".removeskills")
    c.style.display="inline-block"
}
let addcertifications=()=>{
    let a=document.querySelector(".dcertifications")
    let b=document.createElement("input")
    b.setAttribute("type","text")
    b.classList.add("add1")
    a.append(b)
    let c=document.querySelector(".removecertifications")
    c.style.display="inline-block"
}
let addlanguages=()=>{
    let a=document.querySelector(".dlanguages")
    let b=document.createElement("input")
    b.setAttribute("type","text")
    b.classList.add("add2")
    a.append(b)
    let c=document.querySelector(".removelanguages")
    c.style.display="inline-block"
}
let addeducation=()=>{
    let a=document.querySelector(".deducation")
    let b=document.createElement("div")
    b.setAttribute("id","deducationinside1")
    b.classList.add("deducationinside")
    a.append(b)
    let c=document.getElementById("deducationinside1")
    let label1=document.createElement("label")
    label1.innerHTML="Course"
    let input1=document.createElement("input")
    input1.setAttribute("id","dcourse1")
    input1.classList.add("dcourse")
    c.append(label1)
    c.append(input1)

    let label2=document.createElement("label")
    label2.innerHTML="College name"
    let input2=document.createElement("input")
    input2.setAttribute("id","dcollegename1")
    input2.classList.add("dcollegename")
    c.append(label2)
    c.append(input2)

    let label3=document.createElement("label")
    label3.innerHTML="Start year"
    let input3=document.createElement("input")
    input3.setAttribute("id","dstartyear1")
    input3.classList.add("dstartyear")
    c.append(label3)
    c.append(input3)

    let label4=document.createElement("label")
    let input4=document.createElement("input")
    label4.innerHTML="End year"
    input4.setAttribute("id","dendyear1")
    input4.classList.add("dendyear")
    c.append(label4)
    c.append(input4)

    let label5=document.createElement("label")
    let input5=document.createElement("input")
    label5.innerHTML="Comments"
    input5.setAttribute("id","dcomment1")
    input5.classList.add("dcomment")
    c.append(label5)
    c.append(input5)

    let e=document.querySelector(".addeducation")
    e.style.display="none"
    let f=document.querySelector(".removeeducation")
    f.style.display="inline-block"



    //resume
    let a1=document.querySelector(".education")
    let b1=document.createElement("div")
    b1.setAttribute("id","educationinside")
    b1.classList.add("educationinside")

    a1.append(b1)

    let c1=document.createElement("p")
    c1.setAttribute("id","course")
    c1.classList.add("course")
    b1.append(c1)

    let d1=document.createElement("p")
    d1.setAttribute("id","collegename")
    d1.classList.add("collegename")
    b1.append(d1)

    let e1=document.createElement("p")
    e1.setAttribute("id","bracketo")
    e1.classList.add("bracketo")
    e1.innerText="("
    b1.append(e1)

    let f1=document.createElement("p")
    f1.setAttribute("id","startyear")
    f1.classList.add("startyear")
    b1.append(f1)

    let g1=document.createElement("p")
    g1.setAttribute("id","dash")
    g1.classList.add("dash")
    g1.innerText="-"
    b1.append(g1)

    let h1=document.createElement("p")
    h1.setAttribute("id","endyear")
    h1.classList.add("endyear")
    b1.append(h1)

    let i1=document.createElement("p")
    i1.setAttribute("id","brackec")
    i1.classList.add("bracketc")
    i1.innerText=")"
    b1.append(i1)

    let j1=document.createElement("li")
    j1.setAttribute("id","comment")
    j1.classList.add("comment")
    
    b1.append(j1)
    

}
function addextra(){
    let a=document.querySelector(".dextracircu")
    let b=document.createElement("input")
    b.setAttribute("type","text")
    b.classList.add("add3")
    a.append(b)
    let c=document.querySelector(".removeextra")
    c.style.display="inline-block"
}

let removeskills=()=>{
    let a=document.getElementById("dskills")
    a.removeChild(a.lastElementChild)
    let b=document.querySelectorAll(".add").length
    let c=document.querySelector(".removeskills")
    if(b==1){
        c.style.display="none"
    }
}

let removecertifications=()=>{
    let a=document.querySelector(".dcertifications")
    a.removeChild(a.lastElementChild)
    let b=document.querySelectorAll(".add1").length
    let c=document.querySelector(".removecertifications")
    if(b==1){
        c.style.display="none"
    }
}

let removelanguages=()=>{
    let a=document.querySelector(".dlanguages")
    a.removeChild(a.lastElementChild)
    let b=document.querySelectorAll(".add2").length
    let c=document.querySelector(".removelanguages")
    if(b==1){
        c.style.display="none"
    }
}
function removeeducation(){
    let a=document.getElementById("deducationinside1")
    a.remove(a.lastElementChild)
    let b=document.getElementById("educationinside")
    b.remove(b.lastElementChild)

    let c=document.querySelector(".addeducation")
    c.style.display="inline-block"

    let d=document.querySelector(".removeeducation")
    d.style.display="none"
    
}
function removeextra(){
    let a=document.querySelector(".dextracircu")
    a.removeChild(a.lastElementChild)
    let b=document.querySelectorAll(".add3").length
    let c=document.querySelector(".removeextra")
    if(b==1){
        c.style.display="none"
    }
}

function generate(){
    let hide=document.querySelector(".hide")
    hide.style.display="none"
    let hide1=document.querySelector(".main")
    hide1.style.display="inline-block"
    let a=document.querySelectorAll(".deducationinside").length
    if(a==1){
        let firstname=document.querySelector(".dfname").value
        let lastname=document.querySelector(".dlname").value
        let graduation=document.querySelector(".dgraduation").value
        let mobile=document.querySelector(".dmobile").value
        let mailid=document.querySelector(".dmail").value
        let address=document.querySelector(".daddress").value
        let linkedin=document.querySelector(".dlinkedin").value
        let about=document.querySelector(".dtextarea").value
        let course=document.querySelector(".dcourse").value
        let collegename=document.querySelector(".dcollegename").value
        let startyear=document.querySelector(".dstartyear").value
        let endyear=document.querySelector(".dendyear").value
        let comment=document.querySelector(".dcomments").value


        let skills=document.querySelectorAll(".add")
        str=""
        for(let e of skills){
            str=str+`<li>${e.value}</li>`
        }


        let certifications=document.querySelectorAll(".add1")
        str1=""
        for(let e of certifications){
            str1=str1+`<li>${e.value}</li>`
        }

        let languages=document.querySelectorAll(".add2")
        str2=""
        for(let e of languages){
            str2=str2+`<li>${e.value}</li>`
        }

        let extra=document.querySelectorAll(".add3")
        str3=""
        for(let e of extra){
            str3=str3+`<li class="extra1">${e.value}</li>`
        }
        
        document.querySelector(".firstname").innerHTML=firstname
        document.querySelector(".lastname").innerHTML=lastname
        document.querySelector(".graduation").innerHTML=graduation
        document.querySelector("#phonenumber").innerHTML=mobile
        document.querySelector("#mailid").innerHTML=mailid
        document.querySelector("#location").innerHTML=address
        document.querySelector("#twitter").innerHTML=linkedin
        document.querySelector(".skillsinside").innerHTML=str
        document.querySelector(".certificationsinside").innerHTML=str1
        document.querySelector(".languageinside").innerHTML=str2
        document.querySelector(".extrainside").innerHTML=str3
        document.querySelector(".prof").innerHTML=about
        document.querySelector(".course").innerHTML=course
        document.querySelector(".collegename").innerHTML=collegename
        document.querySelector(".startyear").innerHTML=startyear
        document.querySelector(".endyear").innerHTML=endyear
        document.querySelector(".comment").innerHTML=comment
    
        let file=document.getElementById("dimage").files[0]
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function(){
            document.getElementById("image").src=reader.result
        }
    }
    else{
        let firstname=document.querySelector(".dfname").value
        let lastname=document.querySelector(".dlname").value
        let graduation=document.querySelector(".dgraduation").value
        let mobile=document.querySelector(".dmobile").value
        let mailid=document.querySelector(".dmail").value
        let address=document.querySelector(".daddress").value
        let linkedin=document.querySelector(".dlinkedin").value
        let about=document.querySelector(".dtextarea").value
        let course=document.querySelector(".dcourse").value
        let collegename=document.querySelector(".dcollegename").value
        let startyear=document.querySelector(".dstartyear").value
        let endyear=document.querySelector(".dendyear").value
        let comment=document.querySelector(".dcomments").value
        let course1=document.getElementById("dcourse1").value
        let collegename1=document.getElementById("dcollegename1").value
        let startyear1=document.getElementById("dstartyear1").value
        let endyear1=document.getElementById("dendyear1").value
        let comment1=document.getElementById("dcomment1").value
        

        let skills=document.querySelectorAll(".add")
        str=""
        for(let e of skills){
            str=str+`<li>${e.value}</li>`
        }


        let certifications=document.querySelectorAll(".add1")
        str1=""
        for(let e of certifications){
            str1=str1+`<li>${e.value}</li>`
        }

        let languages=document.querySelectorAll(".add2")
        str2=""
        for(let e of languages){
            str2=str2+`<li>${e.value}</li>`
        }

        let extra=document.querySelectorAll(".add3")
        str3=""
        for(let e of extra){
            str3=str3+`<li class="extra1">${e.value}</li>`
        }
        
        document.querySelector(".firstname").innerHTML=firstname
        document.querySelector(".lastname").innerHTML=lastname
        document.querySelector(".graduation").innerHTML=graduation
        document.querySelector("#phonenumber").innerHTML=mobile
        document.querySelector("#mailid").innerHTML=mailid
        document.querySelector("#location").innerHTML=address
        document.querySelector("#twitter").innerHTML=linkedin
        document.querySelector(".skillsinside").innerHTML=str
        document.querySelector(".certificationsinside").innerHTML=str1
        document.querySelector(".languageinside").innerHTML=str2
        document.querySelector(".extrainside").innerHTML=str3
        document.querySelector(".prof").innerHTML=about
        document.querySelector(".course").innerHTML=course
        document.querySelector(".collegename").innerHTML=collegename
        document.querySelector(".startyear").innerHTML=startyear
        document.querySelector(".endyear").innerHTML=endyear
        document.querySelector(".comment").innerHTML=comment
        document.getElementById("course").innerHTML=course1
        document.getElementById("collegename").innerHTML=collegename1
        document.getElementById("startyear").innerHTML=startyear1
        document.getElementById("endyear").innerHTML=endyear1
        document.getElementById("comment").innerHTML=comment1
        let file=document.getElementById("dimage").files[0]
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function(){
            document.getElementById("image").src=reader.result
        } 
    }
    
}