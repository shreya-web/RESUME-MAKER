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


//Create PDf from HTML...
function CreatePDFfromHTML() {
  var HTML_Width = $(".html-content").width();
  var HTML_Height = $(".html-content").height();
  var top_left_margin = 10;
  var PDF_Width = HTML_Width + (top_left_margin * 2);
  var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".html-content")[0]).then(function (canvas) {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
    }
    pdf.save("Your_RESUME.pdf");
    $(".html-content").hide();
  });
}
