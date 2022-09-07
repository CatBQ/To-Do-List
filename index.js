/* Create a "close" button 
and append it to each list item */
const myNodeList = document.getElementsByTagName("LI");

for (let i = 0; i< myNodeList.length; i++) {

}

function closeFunction() {
    const div = this.parentElement;
    div.style.display = "none";
  }

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = closeFunction
}