var _a;
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('formoutput');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var imageuploadElement = document.getElementById('imageupload');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && imageuploadElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var imageupload = imageuploadElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var formoutput = "<h2>resume</h2>\n  \n<p><strong>Name:</strong> ".concat(name_1, " </p>\n\n<p><strong>Email:</strong> ").concat(email, " </p>\n\n<p><strong>Phone:</strong> ").concat(phone, " </p>\n\n<p><strong>Profile Picture:</strong> ").concat(imageupload, " </p>\n\n<p><strong>Education:</strong> ").concat(education, " </p>\n\n<p><strong>Experince:</strong> ").concat(experience, " </p>\n\n<p><strong>Skills:</strong> ").concat(skills, " </p>\n");
        var formoutputElement = document.getElementById('formoutput');
        if (formoutputElement) {
            formoutputElement.innerHTML = formoutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
