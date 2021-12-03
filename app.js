$('#Name, #CONTACT, #EMAIL, #Desigantion,#INTERSTS').bind('keyup', function () {
  if (allFilled()) $('#register').removeAttr('disabled');
});

function allFilled() {
  var filled = true;
  $('body input').each(function () {
    if ($(this).val() == '') filled = false;
  });
  return filled;
}




function enableNum() {
  alert('YOUR DATA IS SUBMITTED IN THE FORM , TO VIEW YOUR RESUME CLICK GENERATE PDF');
  document.getElementById("GENERATE").disabled = false;
}


function submitData() {
  let NAME = document.getElementById("Name").value;
  let CONTACT = document.getElementById("CONTACT").value;
  let EMAIL = document.getElementById("EMAIL").value;
  let Desigantion = document.getElementById("Desigantion").value;
  let WORKEXP = document.getElementById("WORKEXP").value;
  let ACADEMICS = document.getElementById("ACADEMICS").value;
  let SKILLS = document.getElementById("SKILLS").value;
  let PROJECTS = document.getElementById("PROJECTS").value;
  let INTERSTS = document.getElementById("INTERSTS").value;


  let name1 = document.getElementById('NAME');
  name1.innerHTML = NAME;


  let email1 = document.getElementById('email-val');
  email1.innerHTML = EMAIL;

  let phonenum1 = document.getElementById('phone-val');
  phonenum1.innerHTML = CONTACT;

  let description1 = document.getElementById('desc');
  description1.innerHTML = Desigantion;

  let academics1 = document.getElementById('section__list-item');
  academics1.innerHTML = ACADEMICS;


  let workexp1 = document.getElementById('section__list-item2');
  workexp1.innerHTML = WORKEXP;

  let projects1 = document.getElementById('section__list');
  projects1.innerHTML = PROJECTS;

  let skills1 = document.getElementById('skills');
  skills1.innerHTML = SKILLS;

  let interests1 = document.getElementById('section__list-item1')
  interests1.innerHTML = INTERSTS;



}

function createPdf() {
  //create jsPDF object
  const division = document.getElementById("boxes"); // page element which you want to print as PDF
  html2pdf(division);

}