





async function predict(){

let fileInput = document.getElementById("imageUpload")

if(fileInput.files.length == 0){
alert("Please upload an image")
return
}

let file = fileInput.files[0]

document.getElementById("result").innerText =
"Analyzing image..."

let formData = new FormData()

formData.append("file", file)

try{

let response = await fetch(
"https://lalitm24-dustbin-dmc-api.hf.space/predict",
{
method:"POST",
body:formData
})

let data = await response.json()

if(data.prediction == 1){

document.getElementById("result").innerText =
"⚠️ DMC Action Required"

}
else{

document.getElementById("result").innerText =
"✅ No Action Needed"

}

}
catch{

document.getElementById("result").innerText =
"Server error. Try again."

}

}