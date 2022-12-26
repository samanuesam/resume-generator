


function addit(){
    let div=document.getElementById("donemain")
    let divone=document.createElement("div")
    divone.setAttribute("id","pov")
    div.append(divone)
    console.log(divone)
    let divtwo=document.getElementById("pov")
    let x=document.createElement("label")
    x.innerText="Course"
    let y=document.createElement("input")
    y.setAttribute("type","text")
    y.setAttribute("id","dcourse1")

    let x1=document.createElement("label")
    x1.innerText="College"
    let y1=document.createElement("input")
    y1.setAttribute("type","text")
    y1.setAttribute("id","dcollege1")

    let x2=document.createElement("label")
    x2.innerText="College location"
    let y2=document.createElement("input")
    y2.setAttribute("type","text")
    y2.setAttribute("id","dcollegelocation1")

    let x3=document.createElement("label")
    x3.innerText="Course starting month"
    let y3=document.createElement("input")
    y3.setAttribute("type","text")
    y3.setAttribute("id","dstartmonth1")

    let x4=document.createElement("label")
    x4.innerText="Course ending month"
    let y4=document.createElement("input")
    y4.setAttribute("type","text")
    y4.setAttribute("id","dendmonth1")

    let x5=document.createElement("label")
    x5.innerText="Course starting year"
    let y5=document.createElement("input")
    y5.setAttribute("type","text")
    y5.setAttribute("id","dstartyear1")

    let x6=document.createElement("label")
    x6.innerText="Course ending year"
    let y6=document.createElement("input")
    y6.setAttribute("type","text")
    y6.setAttribute("id","dendyear1")

    let x7=document.createElement("label")
    x7.innerText="Comment"
    let y7=document.createElement("input")
    y7.setAttribute("type","text")
    y7.setAttribute("id","dcomment1")


    
    divtwo.append(x)
    divtwo.append(y)
    divtwo.append(x1)
    divtwo.append(y1)
    divtwo.append(x2)
    divtwo.append(y2)
    divtwo.append(x3)
    divtwo.append(y3)
    divtwo.append(x4)
    divtwo.append(y4)
    divtwo.append(x5)
    divtwo.append(y5)
    divtwo.append(x6)
    divtwo.append(y6)
    divtwo.append(x7)
    divtwo.append(y7)

    //resume side
    let divr=document.querySelector(".education")
    let a=document.createElement("div")
    a.classList.add("education-one")
    a.setAttribute("id","vone")
    divr.append(a)
    let divr2=document.getElementById("vone")
    let b=document.createElement("p")
    b.classList.add("course")
    b.setAttribute('id',"course-1")
    divr2.append(b)

    let c=document.createElement("p")
    c.classList.add("comma")
    c.innerText=","
    c.setAttribute('id',"comma-1")
    divr2.append(c)

    let d=document.createElement("p")
    d.classList.add("college")
    d.setAttribute('id',"college-1")
    divr2.append(d)


    let e=document.createElement("p")
    e.classList.add("comma")
    e.innerText=","
    e.setAttribute('id',"comma-1")
    divr2.append(e)

    let f=document.createElement("p")
    f.classList.add("college-location")
    f.setAttribute('id',"college-location-1")
    divr2.append(f)

    //rightside 1

    let g=document.createElement("div")
    g.classList.add("education-two")
    g.setAttribute("id","vtwo")
    divr.append(g)

    let divr3=document.getElementById("vtwo")
    let h=document.createElement("p")
    h.classList.add("from-month")
    h.setAttribute("id","from-month-one")
    divr3.append(h)

    let i=document.createElement("pre")
    i.classList.add("blank")
    i.innerText=" "
    i.setAttribute("id","blank-1")
    divr3.append(i)


    let j=document.createElement("p")
    j.classList.add("from-year")
    j.setAttribute("id","from-year-one")
    divr3.append(j)


    let k=document.createElement("pre")
    k.classList.add("blank")
    k.innerText=" "
    k.setAttribute("id","blank-1")
    divr3.append(k)

    let l=document.createElement("p")
    l.classList.add("dash")
    l.innerText="-"
    l.setAttribute("id","dash-1")
    divr3.append(l)

    let m=document.createElement("p")
    m.classList.add("to-month")
    m.setAttribute("id","to-month-one")
    divr3.append(m)

    let k1=document.createElement("pre")
    k1.classList.add("blank")
    k1.innerText=" "
    k1.setAttribute("id","blank-1")
    divr3.append(k1)

    let n=document.createElement("p")
    n.classList.add("to-year")
    n.setAttribute("id","to-year-one")
    divr3.append(n)

    //rightside 2

    let o=document.createElement("div")
    o.classList.add("education-three")
    o.setAttribute("id","vthree")
    divr.append(o)

    let divr4=document.getElementById("vthree")
    let p=document.createElement("li")
    p.classList.add("comment")
    p.setAttribute("id","comment-one")
    divr4.append(p)
    let xyz=document.querySelector(".add")
    xyz.style.display="none"
    

    let xyz1=document.querySelector(".remove")
    xyz1.style.display="inline-block"
}
function addskills(){
    let a=document.createElement("input")
    a.setAttribute("type","text")
    a.classList.add("add0")
    let div=document.querySelector(".divskills")
    div.append(a)
    let b=document.querySelector(".removes")
    b.style.display="inline-block"


}
function addlanguages(){
    let a=document.createElement("input")
    a.setAttribute("type","text")
    a.classList.add("add1")
    let div=document.querySelector(".divlaguages")
    div.append(a)
    let b=document.querySelector(".removel")
    b.style.display="inline-block"

}
function addproject(){
    let a=document.createElement("input")
    a.setAttribute("type","text")
    a.classList.add("add2")
    let div=document.querySelector(".divprojects")
    div.append(a)
    let b=document.querySelector(".removep")
    b.style.display="inline-block"
}
function remove(){
   

   let b=document.querySelector(".remove")
   let b1=document.querySelector(".add")
   let c=document.getElementById("vone")
   c.remove(c)
   let d=document.getElementById("vtwo")
   d.remove(d)
   let e=document.getElementById("vthree")
   e.remove(e)
   let f=document.getElementById("pov")
   f.remove(f)
   let a=document.querySelector(".dcourse")
   let a1=document.querySelectorAll(".dcollege").length
   let a2=document.querySelectorAll(".dcollegelocation").length
   let a3=document.querySelectorAll(".dstartmonth").length
   let a4=document.querySelectorAll(".dendmonth").length
   let a5=document.querySelectorAll(".dstartyear").length
   let a6=document.querySelectorAll(".dendyear").length
   let a7=document.querySelectorAll(".dcomment").length
   if (a && a1 && a2&& a3&& a4&& a5&& a6&& a6&& a7==1){
        b.style.display="none"
        b1.style.display="inline-block"
   }
   
   
}

function removel(){
    let y=document.querySelector('.divlaguages')
    y.removeChild(y.lastElementChild)
    let add1=document.querySelectorAll(".add1").length
    console.log(add1)
    let removelanguage=document.querySelector(".removel")
    if (add1==1){
        removelanguage.style.display="none"
    }
}
function removes(){
    let y=document.querySelector('.divskills')
    y.removeChild(y.lastElementChild)
    let add0=document.querySelectorAll(".add0").length
    
    let removeskills=document.querySelector(".removes")
    if (add0==1){
        removeskills.style.display="none"
    }
}
function removep(){
    let a=document.querySelector(".divprojects")
    a.removeChild(a.lastElementChild)

    let add2=document.querySelectorAll(".add2").length
    
    let removeproject=document.querySelector(".removep")
    if (add2==1){
        removeproject.style.display="none"
    }
}






function generate(){

    let hide=document.querySelector(".resume")
    hide.style.display="block"
    let mainhide=document.querySelector(".mainhide")
    mainhide.style.display="none"
    let zy=document.querySelector('.add')
    if (zy.style.display=="none"){

    
    let firstname=document.getElementById("dfname").value
    let lastname=document.getElementById("dlname").value
    let occupation=document.getElementById("doccupation").value
    let address=document.getElementById("daddress").value
    let country=document.getElementById("dcountry").value
    let mailid=document.getElementById("dmailid").value
    let number=document.getElementById("dnumber").value
    let about=document.getElementById("dabout").value
    let course=document.querySelector(".dcourse").value
    let college=document.querySelector(".dcollege").value
    let collegelocation=document.querySelector(".dcollegelocation").value
    let startmonth=document.querySelector(".dstartmonth").value
    let endmonth=document.querySelector(".dendmonth").value
    let startyear=document.querySelector(".dstartyear").value
    let endyear=document.querySelector(".dendyear").value
    let comment=document.querySelector(".dcomment").value

    let wes=document.getElementsByClassName("add0")
    str=""
    for(let e of wes){
        str=str+`<div>${e.value}</div>`
    }

    let wes1=document.getElementsByClassName("add1")
    str1=""
    for(let e of wes1){
        str1=str1+`<div>${e.value}</div>`
    }

    let wes2=document.getElementsByClassName("add2")
    str2=""
    for(let e of wes2){
        str2=str2+`<div>${e.value}</div>`
    }
    
    
    //adding another education
    let course1=document.getElementById("dcourse1").value
    let college1=document.getElementById("dcollege1").value
    let collegelocation1=document.getElementById("dcollegelocation1").value
    let startmonth1=document.getElementById("dstartmonth1").value
    let endmonth1=document.getElementById("dendmonth1").value
    let startyear1=document.getElementById("dstartyear1").value
    let endyear1=document.getElementById("dendyear1").value
    let comment1=document.getElementById("dcomment1").value

    //updating resume
    document.getElementById("fname").innerHTML=firstname
    document.getElementById("sname").innerHTML=lastname
    document.getElementById("occupation").innerText=occupation
    document.getElementById("address").innerHTML=address
    document.getElementById("country").innerHTML=country
    document.getElementById("mailid").innerHTML=mailid
    document.getElementById("number").innerHTML=number
    document.getElementById("about").innerHTML=about
    document.querySelector(".course").innerHTML=course
    document.querySelector(".college").innerHTML=college
    document.querySelector(".college-location").innerHTML=collegelocation
    document.querySelector(".from-month").innerHTML=startmonth
    document.querySelector(".from-year").innerHTML=startyear
    document.querySelector(".to-month").innerHTML=endmonth
    document.querySelector(".to-year").innerHTML=endyear
    document.querySelector(".comment").innerHTML=comment
    let q=document.getElementById("skillgrid")
    q.innerHTML=str
    

    let r=document.getElementById("languagegrid")
    r.innerHTML=str1

    let s=document.getElementById("projectsgrid")
    s.innerHTML=str2
    
    //updating another education
    document.getElementById("course-1").innerHTML=course1
    document.getElementById("college-1").innerHTML=college1
    document.getElementById("college-location-1").innerHTML=collegelocation1
    document.getElementById("from-month-one").innerHTML=startmonth1
    document.getElementById("from-year-one").innerHTML=startyear1
    document.getElementById("to-month-one").innerHTML=endmonth1
    document.getElementById("to-year-one").innerHTML=endyear1
    document.getElementById("comment-one").innerHTML=comment1

    let file=document.getElementById("dimage").files[0]
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function(){
        document.getElementById("image").src=reader.result
    }
    
    }
    else{

    
        let firstname=document.getElementById("dfname").value
    let lastname=document.getElementById("dlname").value
    let occupation=document.getElementById("doccupation").value
    let address=document.getElementById("daddress").value
    let country=document.getElementById("dcountry").value
    let mailid=document.getElementById("dmailid").value
    let number=document.getElementById("dnumber").value
    let about=document.getElementById("dabout").value
    let course=document.querySelector(".dcourse").value
    let college=document.querySelector(".dcollege").value
    let collegelocation=document.querySelector(".dcollegelocation").value
    let startmonth=document.querySelector(".dstartmonth").value
    let endmonth=document.querySelector(".dendmonth").value
    let startyear=document.querySelector(".dstartyear").value
    let endyear=document.querySelector(".dendyear").value
    let comment=document.querySelector(".dcomment").value 
    
    let wes=document.getElementsByClassName("add0")
    str=""
    for(let e of wes){
        str=str+`<div>${e.value}</div>`
    }
    let wes1=document.getElementsByClassName("add1")
    str1=""
    for(let e of wes1){
        str1=str1+`<div>${e.value}</div>`
    }
    let wes2=document.getElementsByClassName("add2")
    str2=""
    for(let e of wes2){
        str2=str2+`<div>${e.value}</div>`
    }

    
    //updating resume
    document.getElementById("fname").innerHTML=firstname
    document.getElementById("sname").innerHTML=lastname
    document.getElementById("occupation").innerText=occupation
    document.getElementById("address").innerHTML=address
    document.getElementById("country").innerHTML=country
    document.getElementById("mailid").innerHTML=mailid
    document.getElementById("number").innerHTML=number
    document.getElementById("about").innerHTML=about
    document.querySelector(".course").innerHTML=course
    document.querySelector(".college").innerHTML=college
    document.querySelector(".college-location").innerHTML=collegelocation
    document.querySelector(".from-month").innerHTML=startmonth
    document.querySelector(".from-year").innerHTML=startyear
    document.querySelector(".to-month").innerHTML=endmonth
    document.querySelector(".to-year").innerHTML=endyear
    document.querySelector(".comment").innerHTML=comment
    let q=document.getElementById("skillgrid")
    q.innerHTML=str
    

    let r=document.getElementById("languagegrid")
    r.innerHTML=str1

    let s=document.getElementById("projectsgrid")
    s.innerHTML=str2
    
    let file=document.getElementById("dimage").files[0]
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function(){
    document.getElementById("image").src=reader.result
    }
    }
    
}