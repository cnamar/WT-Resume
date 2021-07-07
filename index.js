$("#qualifications-section").hide();
$("#skills-section").hide();
$("#contact-section").hide();
var pagestatus = [
  { id: "#home-section", status: true },
  { id: "#skills-section", status: false },
  { id: "#qualifications-section", status: false },
  { id: "#contact-section", status: false },
];

showpage = (event) => {
  var secid = "#" + event.srcElement.id + "-section";
  $(secid).show();
  for (i = 0; i < 4; i++) {
    if (pagestatus[i].status) {
      $(pagestatus[i].id).hide();
      pagestatus[i].status = false;
    }
    if (pagestatus[i].id === secid) {
      $(pagestatus[i].id).show();
      pagestatus[i].status = true;
    }
  }
};
sub = () => {
  alert("Your data will be submitted later.Now It's just a static web page.");
};
