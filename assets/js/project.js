document.title = project.title;
// document.getElementById('project-image').src = project.image_src;
document.getElementById('project-title').innerText = project.title;
document.getElementById('project-details').innerHTML = project.details;


var tools_parent_div = document.getElementById('tools');
if (tools_parent_div) {
  project.tools.forEach(skill => {
    var el = document.createElement('div');
    el.classList.add("skills__skill");
    el.innerText = skill;
    tools_parent_div.appendChild(el);
  });
}