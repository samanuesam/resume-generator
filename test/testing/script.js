function addit(){
            
    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.classList.add("add");
    let done=document.getElementById("done");
    done.append(x)
    let y=document.getElementById('pop')
    y.style.display="inline-block"
}   
function additTwo(){
    
    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "content writing");
    x.classList.add("add1");
    let dtwo=document.getElementById("dtwo");
    dtwo.insertBefore(x,dtwo.children[-1]);
    let y=document.getElementById('pop1')
    y.style.display="inline-block"
}
function additThree(){
    
    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "Languages Known");
    x.classList.add("add2");
    let dthree=document.getElementById("dthree");
    dthree.insertBefore(x,dthree.children[-1]);
    let y=document.getElementById('pop2')
    y.style.display="inline-block"
}
let additfour=()=>{
    let x=document.createElement("input");
    x.setAttribute("type","text");
    x.setAttribute("Placeholder","Enter your projects");
    x.classList.add("add3");
    let dfour=document.getElementById("dfour");
    dfour.insertBefore(x,dfour.children[-1]);
    let y=document.getElementById('pop3')
    y.style.display="inline-block"

}
function additfive(){
  

    let divcreate=document.createElement("div")
    divcreate.setAttribute("id","d-educations")
    divcreate.classList.add("veducations")
    let maindiv=document.getElementById('d--div')
    maindiv.append(divcreate)
    let x=document.createElement("label")
    let y=document.createElement("input")
    x.innerText="From"
    y.classList.add("from")
    y.setAttribute("id","vfrom")
    let x1=document.createElement("label")
    let y1=document.createElement("input")
    x1.innerText="To"
    y1.classList.add("to")
    y1.setAttribute("id","vto")
    let x2=document.createElement("label")
    let y2=document.createElement("input")
    x2.innerText="Qualification"
    y2.classList.add("qualification")
    y2.setAttribute("id","vqualification")
    let x3=document.createElement("label")
    let y3=document.createElement("input")
    x3.innerText="College Name"
    y3.classList.add("collegename")
    y3.setAttribute("id","vcollege")
    let x4=document.createElement("label")
    let y4=document.createElement("input")
    x4.innerText="CGPA"
    y4.classList.add("cgpa")
    y4.setAttribute("id","vcgpa")
    let x5=document.createElement("label")
    let y5=document.createElement("input")
    x5.innerText="Comments"
    y5.classList.add("comments")
    y5.setAttribute("id","vcomment")


    let cdiv1=document.createElement("div")
    cdiv1.setAttribute("id","poone")
    cdiv1.classList.add("editone")
    let cdiv2=document.createElement("div")
    cdiv2.setAttribute("id","potwo")
    cdiv2.classList.add("edittwo")
    let cdiv3=document.createElement("div")
    cdiv3.setAttribute("id","pothree")
    cdiv3.classList.add("editthree")
    let cdiv4=document.createElement("div")
    cdiv4.setAttribute("id","pofour")
    cdiv4.classList.add("editfour")
    let cdiv5=document.createElement("div")
    cdiv5.setAttribute("id","pofive")
    cdiv5.classList.add("editfive")
    let cdiv6=document.createElement("div")
    cdiv6.setAttribute("id","posix")
    cdiv6.classList.add("editsix")


    
    
    let educationdiv=document.getElementById('d-educations')
    educationdiv.append(cdiv1)
    let intodiv1=document.getElementById("poone")
    console.log(intodiv1)
    intodiv1.append(x2)
    intodiv1.append(y2)
    
  
    educationdiv.append(cdiv2)
    let intodiv2=document.getElementById("potwo")
    console.log(intodiv2)
    intodiv2.append(x)
    intodiv2.append(y)

    educationdiv.append(cdiv3)
    let intodiv3=document.getElementById("pothree")
    console.log(intodiv3)
    intodiv2.append(x1)
    intodiv2.append(y1)
    
    educationdiv.append(cdiv4)
    let intodiv4=document.getElementById("pofour")
    console.log(intodiv4)
    intodiv4.append(x3)
    intodiv4.append(y3)

    educationdiv.append(cdiv5)
    let intodiv5=document.getElementById("pofive")
    console.log(intodiv5)
    intodiv4.append(x4)
    intodiv4.append(y4)

    educationdiv.append(cdiv6)
    let intodiv6=document.getElementById("posix")
    console.log(intodiv6)
    intodiv6.append(x5)
    intodiv6.append(y5)


    //resume changer//
    //left
    let addr=document.createElement("div")
    addr.classList.add("rbtech")
    let addrd=document.getElementById("divaddr")
    addrd.append(addr)
    let addp=document.createElement("p")
    addp.classList.add("fromr")
    addp.setAttribute("id","fromtwo")
    addr.append(addp)
    let addp1=document.createElement("p")
    addp1.classList.add("from1r")
    addp1.setAttribute("id","to2")
    addp1.innerText="to"
    addr.append(addp1)
    let addp6=document.createElement("p")
    addp6.setAttribute("id","totwo")
    addp6.classList.add("tor")
    addr.append(addp6)
    
    
    //right
    let addrr=document.createElement("div")
    addrr.classList.add("rbtech-info")
    
    let addp2=document.createElement("p")
    addp2.classList.add("rcourse")
    addp2.setAttribute("id","qualificationtwo")
    let addp3=document.createElement("p")
    addp3.classList.add("rcourse-info")
    addp3.setAttribute("id","commenttwo")
    let addp7=document.createElement("p")
    addp7.classList.add("colleger")
    addp7.setAttribute("id","collegetwo")
    let adds4=document.createElement("span")
    adds4.classList.add("rcgpa")
    adds4.setAttribute("id","rcgpaspantwo")
    adds4.innerText="CGPA:"
    let addp5=document.createElement("p")
    addp5.classList.add("rcgpa")
    addp5.setAttribute("id","gpatwo")
    addrd.append(addrr)
    addrr.append(addp2)
    addrr.append(addp3)
    addrr.append(addp7)
    addrr.append(adds4)
    addrr.append(addp5)
    
    let zy=document.getElementById('additfivevalue')
    zy.style.display="none"
    let hide=document.getElementById("pop4")
    hide.style.display="inline-block"
    
    



    
}
function popit(){
    
    let y=document.getElementById('done')
    y.removeChild(y.lastElementChild)

    let abc=document.querySelectorAll(".add").length 
    let b=document.getElementById("pop")
    if(abc==1){
        b.style.display="none"
    }
}  
function popit1(){
    let y=document.getElementById('dtwo')
    y.removeChild(y.lastElementChild)
    let abc=document.querySelectorAll(".add1").length 
    let b=document.getElementById("pop1")
    if(abc==1){
        b.style.display="none"
    }
} 
function popit2(){
    let y=document.getElementById('dthree')
    y.removeChild(y.lastElementChild)

    let abc=document.querySelectorAll(".add2").length 
    let b=document.getElementById("pop2")
    if(abc==1){
        b.style.display="none"
    }
} 

function popit3(){
    let y=document.getElementById('dfour')
    y.removeChild(y.lastElementChild)

    let abc=document.querySelectorAll(".add3").length 
    let b=document.getElementById("pop3")
    if(abc==1){
        b.style.display="none"
    }
} 
function popit4(){
    let y=document.getElementById('d--div')
    y.removeChild(y.lastElementChild)
    let z=document.getElementById("additfivevalue")
    z.style.display="inline-block"

    let abc=document.querySelectorAll(".veducations").length 
    let b=document.getElementById("pop4")
    if(abc==1){
        b.style.display="none"
    }
}


function generate(){
    let hide=document.getElementById("mainhide")
    hide.style.display="none"
    let hide1=document.getElementById("hide")
    hide1.style.display="block"

    let zy=document.getElementById('additfivevalue')
    if (zy.style.display=="none"){
        let firstname=document.getElementById('firstname').value
    let firstname1=firstname.toUpperCase()
    let lastname=document.getElementById('lastname').value
    let lastname1=lastname.toUpperCase()
    let desig=document.getElementById('desig').value
    let desig1=desig.toUpperCase()
    let twitter=document.getElementById('dtwitter').value
    let linkedin=document.getElementById('dlink').value
    let email=document.getElementById('dmail').value
    let contact=document.getElementById('dcont').value
    let from=document.getElementById('dfrom').value
    let to=document.getElementById('dto').value
    let college=document.getElementById('dcollege').value
    let gpa=document.getElementById('dgpa').value
    let comment=document.getElementById('dcomment').value
    let qualification=document.getElementById('dqualification').value
    let about=document.getElementById('dabout').value
    let season=document.getElementById('dseason').value
    let organization=document.getElementById('dcompany').value
    let duration=document.getElementById('ddays').value
    let internshipon=document.getElementById('dinternshipon').value
    let project=document.getElementById('dproject').value

    //duplicates//
    let fromtwo=document.getElementById('vfrom').value
    let totwo=document.getElementById('vto').value
    let collegetwo=document.getElementById('vcollege').value
    let gpatwo=document.getElementById('vcgpa').value
    let commenttwo=document.getElementById('vcomment').value
    let qualificationtwo=document.getElementById('vqualification').value
    
    
    document.getElementById('rname').innerHTML=firstname1
    document.getElementById('rlname').innerHTML=lastname1
    document.getElementById('rdesig').innerHTML=desig1
    document.getElementById('contact').innerHTML=contact
    document.getElementById('email').innerHTML=email
    document.getElementById('twitter').innerHTML=twitter
    document.getElementById('linkedin').innerHTML=linkedin
    document.getElementById('about').innerHTML=about
    document.querySelector('.fromr').innerHTML=from
    document.querySelector('.tor').innerHTML=to
    document.querySelector('.colleger').innerHTML=college
    document.querySelector('.rcgpa1').innerHTML=gpa
    document.querySelector('.rcourse-info').innerHTML=comment
    document.querySelector('.rcourse').innerHTML=qualification
    document.getElementById('season').innerHTML=season
    document.getElementById('duration').innerHTML=duration
    document.getElementById('internshipon').innerHTML=internshipon
    document.getElementById('project').innerHTML=project
    document.getElementById('company').innerHTML=organization
    //duplicates updation//
    document.getElementById('fromtwo').innerHTML=fromtwo
    document.getElementById('totwo').innerHTML=totwo
    document.getElementById('collegetwo').innerHTML=collegetwo
    document.getElementById('gpatwo').innerHTML=gpatwo
    document.getElementById('commenttwo').innerHTML=commenttwo
    document.getElementById('qualificationtwo').innerHTML=qualificationtwo

    


    let wes=document.getElementsByClassName("add");
    let str=""
   
    for (let e of wes){
        str=str+`<li>${e.value}</li>`
    }
   

    let wes1=document.getElementsByClassName("add1");
    let str1=""
    for (let e of wes1){
        str1=str1+`<li>${e.value}</li>`
    }
    

    let wes2=document.getElementsByClassName("add2");
    let str2=""
    for (let e of wes2){
        str2=str2+`<li>${e.value}</li>`
    }
    

    let wes3=document.getElementsByClassName("add3");
    let str3=""
    for (let e of wes3){
        str3=str3+`<li>${e.value}</li>`
    }
    

    



    document.getElementById("sam").innerHTML=str
    document.getElementById("sam1").innerHTML=str1
    document.getElementById("sam2").innerHTML=str2
    document.getElementById("sam3").innerHTML=str3
    }
    else{

    
    let firstname=document.getElementById('firstname').value
    let firstname1=firstname.toUpperCase()
    let lastname=document.getElementById('lastname').value
    let lastname1=lastname.toUpperCase()
    let desig=document.getElementById('desig').value
    let desig1=desig.toUpperCase()
    let twitter=document.getElementById('dtwitter').value
    let linkedin=document.getElementById('dlink').value
    let email=document.getElementById('dmail').value
    let contact=document.getElementById('dcont').value
    let from=document.getElementById('dfrom').value
    let to=document.getElementById('dto').value
    let college=document.getElementById('dcollege').value
    let gpa=document.getElementById('dgpa').value
    let comment=document.getElementById('dcomment').value
    let qualification=document.getElementById('dqualification').value
    let about=document.getElementById('dabout').value
    let season=document.getElementById('dseason').value
    let organization=document.getElementById('dcompany').value
    let duration=document.getElementById('ddays').value
    let internshipon=document.getElementById('dinternshipon').value
    let project=document.getElementById('dproject').value

    //duplicates//
    //let fromtwo=document.getElementById('vfrom').value
    //let totwo=document.getElementById('vto').value
    //let collegetwo=document.getElementById('vcollege').value
    //let gpatwo=document.getElementById('vcgpa').value
    //let commenttwo=document.getElementById('vcomment').value
    //let qualificationtwo=document.getElementById('vqualification').value
    
    
    document.getElementById('rname').innerHTML=firstname1
    document.getElementById('rlname').innerHTML=lastname1
    document.getElementById('rdesig').innerHTML=desig1
    document.getElementById('contact').innerHTML=contact
    document.getElementById('email').innerHTML=email
    document.getElementById('twitter').innerHTML=twitter
    document.getElementById('linkedin').innerHTML=linkedin
    document.getElementById('about').innerHTML=about
    document.querySelector('.fromr').innerHTML=from
    document.querySelector('.tor').innerHTML=to
    document.querySelector('.colleger').innerHTML=college
    document.querySelector('.rcgpa1').innerHTML=gpa
    document.querySelector('.rcourse-info').innerHTML=comment
    document.querySelector('.rcourse').innerHTML=qualification
    document.getElementById('season').innerHTML=season
    document.getElementById('duration').innerHTML=duration
    document.getElementById('internshipon').innerHTML=internshipon
    document.getElementById('project').innerHTML=project
    document.getElementById('company').innerHTML=organization
    //duplicates updation//
    //document.getElementById('fromtwo').innerHTML=fromtwo
    //document.getElementById('totwo').innerHTML=totwo
    //document.getElementById('collegetwo').innerHTML=collegetwo
    //document.getElementById('gpatwo').innerHTML=gpatwo
    //document.getElementById('commenttwo').innerHTML=commenttwo
    //document.getElementById('qualificationtwo').innerHTML=qualificationtwo

    


    let wes=document.getElementsByClassName("add");
    let str=""
   
    for (let e of wes){
        str=str+`<li>${e.value}</li>`
    }
   

    let wes1=document.getElementsByClassName("add1");
    let str1=""
    for (let e of wes1){
        str1=str1+`<li>${e.value}</li>`
    }
    

    let wes2=document.getElementsByClassName("add2");
    let str2=""
    for (let e of wes2){
        str2=str2+`<li>${e.value}</li>`
    }
    

    let wes3=document.getElementsByClassName("add3");
    let str3=""
    for (let e of wes3){
        str3=str3+`<li>${e.value}</li>`
    }
    

    



    document.getElementById("sam").innerHTML=str
    document.getElementById("sam1").innerHTML=str1
    document.getElementById("sam2").innerHTML=str2
    document.getElementById("sam3").innerHTML=str3
}
    
}
function print1(){
    window.print()
}