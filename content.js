let imgs=document.getElementsByTagName("img");
let a=document.getElementsByTagName("a");
let filenames=[
  "505017.jpg",

  "1005010.jpg",
  "1027306.jpg",

  "sho.jpg",
  "sho2.jpg",
  "sho3.jpg",
  "to.jpg"
];

for(imgEle of imgs)
{
  let r=Math.floor(Math.random()*filenames.length);
  let file="images/"+filenames[r];
  let url=chrome.runtime.getURL(file)
  imgEle.src=url;


}
for(ael of a){
  let r=Math.floor(Math.random()*filenames.length);
  let file="images/"+filenames[r];
  let url=chrome.runtime.getURL(file)
a.href=url;
}
