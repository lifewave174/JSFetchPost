// \/ All of your javascript should go here \/

const myForm=document.getElementById("submit-form")
myForm.addEventListener("submit", handleForm);


function handleForm(e){
    e.preventDefault(); //stop the page from reloading 
    let fd= new FormData(myForm);

    //console.log the form data- this one below is not really needed as we are using it in the function
    for(let key of fd.keys()){
        console.log(key, fd.get(key));
    }

    //store JSON data into a variable

    let json=convertFD2JSON(fd)

    let url="https://jsonplaceholder.typicode.com/posts";
    let h=new Headers();
    h.append('Content-type', 'application/json');

    let req=new Request(url,{
        headers:h,
        body:json,
        method:"POST"
    });

    console.log(req)

    fetch(req)
    .then((res)=>res.json())
    .then((data)=>{
        console.log("response from server");
        console.log(data);
    })

}

//take all my form data and convert to JSON

function convertFD2JSON(formData){
    let obj={};
    for(let key of formData.keys()){
        obj[key]=formData.get(key);
    }
    return JSON.stringify(obj)
}









// async function postData(){
//     const res= await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: "POST",
//         headers: {"Content-type": "application/json"},
//         body: JSON.stringify(data)
//     })
//     const result= await res.json();
//     console.log(result);
// }

// postData();