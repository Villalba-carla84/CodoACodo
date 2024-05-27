function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}


const email= document.getElementById('email');
const password= document.getElementById('password');
const button= document.getElementById('button');

button.addEventListener('click',(e)=>{
e.preventDefault()

const data ={
  email:email.value,
  password:password.value
}
console.log(data) 



})