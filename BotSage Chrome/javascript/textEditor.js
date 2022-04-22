let meetingText = window.text,
  title;
const meetingDuration = window.duration;
let arr=[];
const textarea = document.getElementById('meetingText');



const pos=meetingText.lastIndexOf('?');
let obj ={question: meetingText.slice(0,pos+1),answer:meetingText.slice(pos+1)}
textarea.value = JSON.stringify(obj);
console.log(obj);

textarea.addEventListener('keyup', (e) => {
  meetingText = e.target.value;
});


var addTagsButton = document.getElementById('addTag');
var Elem2 = document.getElementById('tags');
var submitThreadButton = document.getElementById('submitThread');
addTagsButton.disabled=true;
Elem2.onkeyup =function(){
	if(Elem2.value!=='')
	{
		addTagsButton.disabled=false;	
	}
}

addTagsButton.onclick = function(e) {
e.preventDefault();
 var li = document.createElement('li');
  var t = document.createTextNode(Elem2.value); //remove quotes here
  li.appendChild(t);
  arr.push(Elem2.value);
  document.getElementById('tagList').appendChild(li);
Elem2.value='';
}

submitThreadButton.onclick = function(e) {
e.preventDefault();
 	obj.tags=arr;
 	console.log(JSON.stringify(obj));
 	let answer_arr=[];
 	answer_arr.push(obj.answer);
 	
		const payload = {
		question: obj.question,
		answers: answer_arr,
		tags: arr
    }
     axios.post("http://localhost:8080/postThread", payload)
     .then((response) => {
       console.log(response);
       if (response.status === 201) {
         console.log(response.data);
       } else {
         console.log("Some error ocurred");
         
       }
     })
     .catch((error) => {
       console.log(error);
       // backend sends error due to wrong password
       if (error.response.status === 400) {
        console.log("Invalid data format sent");
       }
       })
 	
}






