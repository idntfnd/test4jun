const dropRequestMenu = document.getElementById ('dropdowncontent01');
const btnRequest = document.getElementById ('btnrequestmenu');
btnRequest.onclick = function showRequestMenu() {
      dropRequestMenu.classList.toggle('open'),
      btnRequest.classList.toggle('open')
};
