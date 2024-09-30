document.getElementById('resume')?.addEventListener('submit',function(event){
   event.preventDefault();



const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('formoutput') as HTMLDivElement;


const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const imageuploadElement = document.getElementById('imageupload') as HTMLInputElement;

const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;





if(nameElement && emailElement && phoneElement &&imageuploadElement &&educationElement && experienceElement && skillsElement){

const name = nameElement.value;
const email = emailElement.value;
const phone = phoneElement.value;
const imageupload = imageuploadElement.value;
const education = educationElement.value;
const experience =experienceElement.value;
const skills = skillsElement.value;  





const formoutput = `<h2>resume</h2>
  
<p><strong>Name:</strong> ${name} </p>

<p><strong>Email:</strong> ${email} </p>

<p><strong>Phone:</strong> ${phone} </p>

<p><strong>Profile Picture:</strong> ${imageupload} </p>

<p><strong>Education:</strong> ${education} </p>

<p><strong>Experince:</strong> ${experience} </p>

<p><strong>Skills:</strong> ${skills} </p>
`;




const formoutputElement = document.getElementById('formoutput')
if(formoutputElement){
    formoutputElement.innerHTML = formoutput
    } else {
        console.error('the resume output elements are missing')
    }
    }
    else{
        console.error('one or more output elements are missing')
    }
}
)
