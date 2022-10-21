const choices = ['test'];

const supported_interests = [];

const third_parties_x = ['test'];
const third_parties_y = ['test'];
const third_parties_z = ['test'];

const rank_1 = [];
const rank_2 = [];
const rank_3 = [];
const rank_4 = [];
const rank_5 = [];

console.log(choices);

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  //event.currentTarget.style.backgroundColor = 'red';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  let test = 0;
  choices.forEach((item, i) => {
    if(item==event.dataTransfer.getData('text')){
    test++;}
  });
  if(test==0){choices.push(event.dataTransfer.getData('text'));}
  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
  //console.log(choices);
}

function submit(){
  window.scrollTo(0, 0);

  choices.length = 0;

  //SAVE DRAGGABLE ELEMENTS
  document.getElementById('dropzone').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id!='draggable-9'){choices.push(item.id);};});

  //SAVE CONTENT FORM
  if(document.getElementById('draggable-15').elements[0].value != '') {
    choices.push(document.getElementById('draggable-15').elements[0].value);
  }

  console.log(choices);

  document.getElementById('section-2').style.display='none';
  document.getElementById('section-3').style.visibility='visible';
}

function reset(){
  //location.reload(true);
  //window.location.reload();
  document.querySelector("#dropzone").innerHTML = '';

}

function interest_submit(a){
  window.scrollTo(0, 0);

  let test = 0;
  supported_interests.forEach((item, i) => {
    if(item == a.id){test++;supported_interests.splice(i);}
  });

  if(test==0){
    supported_interests.push(a.id);
    a.style="background-color:#00268A";

    console.log(supported_interests);
  } else {
    a.style="background-color:#B3B3B3";

  }
}

function animate_6(b){
  b.style="background-color:#00268A;  border-width:0px; border-radius:15px;";
  b.childNodes[5].style="visibility: visible; background-color:#F291E2; border-width:0px; border-radius:15px; margin-left:auto;margin-right:0;";
  b.childNodes[1].style="color:white;";
  b.childNodes[3].style="color:white;";
  console.log(b.childNodes.length);
  //document.getElementById('testButton').style="visibility: visible;";
}

function Privacy(){

  window.scrollTo(0, 0);

  const el_1 = document.createElement('div'); el_1.innerHTML = `<div id="facial expressions" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">facial expressions</span></span></div>`;
  const el_2 = document.createElement('div'); el_2.innerHTML = `<div id="stress level" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">stress level</span></span></div>`;
  const el_3 = document.createElement('div'); el_3.innerHTML = `<div id="voice expression" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">voice expression</span></span></div>`;
  const el_4 = document.createElement('div'); el_4.innerHTML = `<div id="current song choice" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current song choice</span></span></div>`;
  const el_5 = document.createElement('div'); el_5.innerHTML = `<div id="selfies" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">selfies</span></span></div>`;
  const el_6 = document.createElement('div'); el_6.innerHTML = `<div id="salary" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">salary</span></span></div>`;
  const el_7 = document.createElement('div'); el_7.innerHTML = `<div id="spending habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">spending habits</span></span></div>`;
  const el_8 = document.createElement('div'); el_8.innerHTML = `<div id="account balance" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">account balance</span></span></div>`;
  const el_9 = document.createElement('div'); el_9.innerHTML = `<div id="investments" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">investments</span></span></div>`;
  const el_10= document.createElement('div'); el_10.innerHTML = `<div id="blood-sugar" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">blood-sugar</span></span></div>`;
  const el_11= document.createElement('div'); el_11.innerHTML = `<div id="sleeping-pattern" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sleeping-pattern</span></span></div>`;
  const el_12= document.createElement('div'); el_12.innerHTML = `<div id="medical history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">medical history</span></span></div>`;
  const el_13= document.createElement('div'); el_13.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
  const el_14= document.createElement('div'); el_14.innerHTML = `<div id="sexual orientation" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sexual orientation</span></span></div>`;
  const el_15= document.createElement('div'); el_15.innerHTML = `<div id="relationship status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">relationship status</span></span></div>`;
  const el_16= document.createElement('div'); el_16.innerHTML = `<div id="pregnancy" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">pregnancy</span></span></div>`;
  const el_17= document.createElement('div'); el_17.innerHTML = `<div id="children" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">children</span></span></div>`;
  const el_18= document.createElement('div'); el_18.innerHTML = `<div id="level of higher education" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">level of higher education</span></span></div>`;
  const el_19= document.createElement('div'); el_19.innerHTML = `<div id="use of language" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">use of language</span></span></div>`;
  const el_20= document.createElement('div'); el_20.innerHTML = `<div id="ID No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">ID No.</span></span></div>`;
  const el_21= document.createElement('div'); el_21.innerHTML = `<div id="Social Security No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Social Security No.</span></span></div>`;
  const el_22= document.createElement('div'); el_22.innerHTML = `<div id="Visa Status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Visa Status</span></span></div>`;
  const el_23= document.createElement('div'); el_23.innerHTML = `<div id="public CCTV footage" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">public CCTV footage</span></span></div>`;
  const el_24= document.createElement('div'); el_24.innerHTML = `<div id="private photos" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">private photos</span></span></div>`;
  const el_25= document.createElement('div'); el_25.innerHTML = `<div id="tagged images" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">tagged images</span></span></div>`;
  const el_26= document.createElement('div'); el_26.innerHTML = `<div id="childhood pictures" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">childhood pictures</span></span></div>`;
  const el_27= document.createElement('div'); el_27.innerHTML = `<div id="activity levels" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">activity levels</span></span></div>`;
  const el_28= document.createElement('div'); el_28.innerHTML = `<div id="heartbeat" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">heartbeat</span></span></div>`;
  const el_29= document.createElement('div'); el_29.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
  const el_30= document.createElement('div'); el_30.innerHTML = `<div id="diet" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">diet</span></span></div>`;
  const el_31= document.createElement('div'); el_31.innerHTML = `<div id="current location" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current location</span></span></div>`;
  const el_32= document.createElement('div'); el_32.innerHTML = `<div id="movement habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">movement habits</span></span></div>`;
  const el_33= document.createElement('div'); el_33.innerHTML = `<div id="name" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">name</span></span></div>`;
  const el_34= document.createElement('div'); el_34.innerHTML = `<div id="surname" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">surname</span></span></div>`;
  const el_35= document.createElement('div'); el_35.innerHTML = `<div id="gender" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">gender</span></span></div>`;
  const el_36= document.createElement('div'); el_36.innerHTML = `<div id="profile picture" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">profile picture</span></span></div>`;
  const el_37= document.createElement('div'); el_37.innerHTML = `<div id="viewing history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">viewing history</span></span></div>`;
  const el_38= document.createElement('div'); el_38.innerHTML = `<div id="shopping cart" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">shopping cart</span></span></div>`;
  const el_39= document.createElement('div'); el_39.innerHTML = `<div id="wishlist" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">wishlist</span></span></div>`;
  const el_40= document.createElement('div'); el_40.innerHTML = `<div id="screen-time" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">screen-time</span></span></div>`;
  const el_41= document.createElement('div'); el_41.innerHTML = `<div id="browser history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">browser history</span></span></div>`;
  const el_42= document.createElement('div'); el_42.innerHTML = `<div id="search history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">search history</span></span></div>`;
  const el_43= document.createElement('div'); el_43.innerHTML = `<div id="music preference" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">music preference</span></span></div>`;
  const el_44= document.createElement('div'); el_44.innerHTML = `<div id="address" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">address</span></span></div>`;
  const el_45= document.createElement('div'); el_45.innerHTML = `<div id="phone number" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">phone number</span></span></div>`;
  const el_46= document.createElement('div'); el_46.innerHTML = `<div id="nationality" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">nationality</span></span></div>`;
  const el_47= document.createElement('div'); el_47.innerHTML = `<div id="age" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">age</span></span></div>`;

  //RANK 1
  document.getElementById('rank_1').appendChild(el_6);  document.getElementById('rank_1').appendChild(el_7);  document.getElementById('rank_1').appendChild(el_8);  document.getElementById('rank_1').appendChild(el_9);  document.getElementById('rank_1').appendChild(el_27);  document.getElementById('rank_1').appendChild(el_28);  document.getElementById('rank_1').appendChild(el_29);  document.getElementById('rank_1').appendChild(el_30);  document.getElementById('rank_1').appendChild(el_1);   document.getElementById('rank_1').appendChild(el_2); document.getElementById('rank_1').appendChild(el_3);   document.getElementById('rank_1').appendChild(el_4);   document.getElementById('rank_1').appendChild(el_5);   document.getElementById('rank_1').appendChild(el_31);  document.getElementById('rank_1').appendChild(el_32);  document.getElementById('rank_1').appendChild(el_10);   document.getElementById('rank_1').appendChild(el_11);   document.getElementById('rank_1').appendChild(el_12);  document.getElementById('rank_1').appendChild(el_13);   document.getElementById('rank_1').appendChild(el_14);   document.getElementById('rank_1').appendChild(el_15);   document.getElementById('rank_1').appendChild(el_16);   document.getElementById('rank_1').appendChild(el_17);   document.getElementById('rank_1').appendChild(el_18);   document.getElementById('rank_1').appendChild(el_19);   document.getElementById('rank_1').appendChild(el_37);   document.getElementById('rank_1').appendChild(el_38);   document.getElementById('rank_1').appendChild(el_39);   document.getElementById('rank_1').appendChild(el_40);   document.getElementById('rank_1').appendChild(el_23);   document.getElementById('rank_1').appendChild(el_24);   document.getElementById('rank_1').appendChild(el_25);   document.getElementById('rank_1').appendChild(el_26);

  //RANK 2
  document.getElementById('rank_2').appendChild(el_20); document.getElementById('rank_2').appendChild(el_21);  document.getElementById('rank_2').appendChild(el_22);  document.getElementById('rank_2').appendChild(el_44);   document.getElementById('rank_2').appendChild(el_45);   document.getElementById('rank_2').appendChild(el_46);   document.getElementById('rank_2').appendChild(el_47);

  //RANK 3

  //RANK 4
  document.getElementById('rank_4').appendChild(el_33);   document.getElementById('rank_4').appendChild(el_34);  document.getElementById('rank_4').appendChild(el_35);   document.getElementById('rank_4').appendChild(el_36);

  //RANK 5

  document.getElementById('section-6').style.display='none';
  document.getElementById('section-7').style.visibility='visible';
}

function Explorer(){

  window.scrollTo(0, 0);

  //define data types
      const el_1 = document.createElement('div'); el_1.innerHTML = `<div id="facial expressions" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">facial expressions</span></span></div>`;
      const el_2 = document.createElement('div'); el_2.innerHTML = `<div id="stress level" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">stress level</span></span></div>`;
      const el_3 = document.createElement('div'); el_3.innerHTML = `<div id="voice expression" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">voice expression</span></span></div>`;
      const el_4 = document.createElement('div'); el_4.innerHTML = `<div id="current song choice" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current song choice</span></span></div>`;
      const el_5 = document.createElement('div'); el_5.innerHTML = `<div id="selfies" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">selfies</span></span></div>`;
      const el_6 = document.createElement('div'); el_6.innerHTML = `<div id="salary" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">salary</span></span></div>`;
      const el_7 = document.createElement('div'); el_7.innerHTML = `<div id="spending habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">spending habits</span></span></div>`;
      const el_8 = document.createElement('div'); el_8.innerHTML = `<div id="account balance" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">account balance</span></span></div>`;
      const el_9 = document.createElement('div'); el_9.innerHTML = `<div id="investments" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">investments</span></span></div>`;
      const el_10= document.createElement('div'); el_10.innerHTML = `<div id="blood-sugar" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">blood-sugar</span></span></div>`;
      const el_11= document.createElement('div'); el_11.innerHTML = `<div id="sleeping-pattern" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sleeping-pattern</span></span></div>`;
      const el_12= document.createElement('div'); el_12.innerHTML = `<div id="medical history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">medical history</span></span></div>`;
      const el_13= document.createElement('div'); el_13.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_14= document.createElement('div'); el_14.innerHTML = `<div id="sexual orientation" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sexual orientation</span></span></div>`;
      const el_15= document.createElement('div'); el_15.innerHTML = `<div id="relationship status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">relationship status</span></span></div>`;
      const el_16= document.createElement('div'); el_16.innerHTML = `<div id="pregnancy" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">pregnancy</span></span></div>`;
      const el_17= document.createElement('div'); el_17.innerHTML = `<div id="children" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">children</span></span></div>`;
      const el_18= document.createElement('div'); el_18.innerHTML = `<div id="level of higher education" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">level of higher education</span></span></div>`;
      const el_19= document.createElement('div'); el_19.innerHTML = `<div id="use of language" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">use of language</span></span></div>`;
      const el_20= document.createElement('div'); el_20.innerHTML = `<div id="ID No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">ID No.</span></span></div>`;
      const el_21= document.createElement('div'); el_21.innerHTML = `<div id="Social Security No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Social Security No.</span></span></div>`;
      const el_22= document.createElement('div'); el_22.innerHTML = `<div id="Visa Status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Visa Status</span></span></div>`;
      const el_23= document.createElement('div'); el_23.innerHTML = `<div id="public CCTV footage" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">public CCTV footage</span></span></div>`;
      const el_24= document.createElement('div'); el_24.innerHTML = `<div id="private photos" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">private photos</span></span></div>`;
      const el_25= document.createElement('div'); el_25.innerHTML = `<div id="tagged images" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">tagged images</span></span></div>`;
      const el_26= document.createElement('div'); el_26.innerHTML = `<div id="childhood pictures" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">childhood pictures</span></span></div>`;
      const el_27= document.createElement('div'); el_27.innerHTML = `<div id="activity levels" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">activity levels</span></span></div>`;
      const el_28= document.createElement('div'); el_28.innerHTML = `<div id="heartbeat" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">heartbeat</span></span></div>`;
      const el_29= document.createElement('div'); el_29.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_30= document.createElement('div'); el_30.innerHTML = `<div id="diet" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">diet</span></span></div>`;
      const el_31= document.createElement('div'); el_31.innerHTML = `<div id="current location" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current location</span></span></div>`;
      const el_32= document.createElement('div'); el_32.innerHTML = `<div id="movement habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">movement habits</span></span></div>`;
      const el_33= document.createElement('div'); el_33.innerHTML = `<div id="name" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">name</span></span></div>`;
      const el_34= document.createElement('div'); el_34.innerHTML = `<div id="surname" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">surname</span></span></div>`;
      const el_35= document.createElement('div'); el_35.innerHTML = `<div id="gender" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">gender</span></span></div>`;
      const el_36= document.createElement('div'); el_36.innerHTML = `<div id="profile picture" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">profile picture</span></span></div>`;
      const el_37= document.createElement('div'); el_37.innerHTML = `<div id="viewing history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">viewing history</span></span></div>`;
      const el_38= document.createElement('div'); el_38.innerHTML = `<div id="shopping cart" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">shopping cart</span></span></div>`;
      const el_39= document.createElement('div'); el_39.innerHTML = `<div id="wishlist" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">wishlist</span></span></div>`;
      const el_40= document.createElement('div'); el_40.innerHTML = `<div id="screen-time" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">screen-time</span></span></div>`;
      const el_41= document.createElement('div'); el_41.innerHTML = `<div id="browser history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">browser history</span></span></div>`;
      const el_42= document.createElement('div'); el_42.innerHTML = `<div id="search history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">search history</span></span></div>`;
      const el_43= document.createElement('div'); el_43.innerHTML = `<div id="music preference" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">music preference</span></span></div>`;
      const el_44= document.createElement('div'); el_44.innerHTML = `<div id="address" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">address</span></span></div>`;
      const el_45= document.createElement('div'); el_45.innerHTML = `<div id="phone number" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">phone number</span></span></div>`;
      const el_46= document.createElement('div'); el_46.innerHTML = `<div id="nationality" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">nationality</span></span></div>`;
      const el_47= document.createElement('div'); el_47.innerHTML = `<div id="age" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">age</span></span></div>`;


      //RANK 2
      document.getElementById('rank_2').appendChild(el_37); document.getElementById('rank_2').appendChild(el_38); document.getElementById('rank_2').appendChild(el_39); document.getElementById('rank_2').appendChild(el_40); document.getElementById('rank_2').appendChild(el_41); document.getElementById('rank_2').appendChild(el_42); document.getElementById('rank_2').appendChild(el_43);
      document.getElementById('rank_2').appendChild(el_23); document.getElementById('rank_2').appendChild(el_24); document.getElementById('rank_2').appendChild(el_25); document.getElementById('rank_2').appendChild(el_26); document.getElementById('rank_2').appendChild(el_6); document.getElementById('rank_2').appendChild(el_7); document.getElementById('rank_2').appendChild(el_8); document.getElementById('rank_2').appendChild(el_9);

      //RANK 3
      document.getElementById('rank_3').appendChild(el_44); document.getElementById('rank_3').appendChild(el_45); document.getElementById('rank_3').appendChild(el_46); document.getElementById('rank_3').appendChild(el_47); document.getElementById('rank_3').appendChild(el_20); document.getElementById('rank_3').appendChild(el_21); document.getElementById('rank_3').appendChild(el_22); document.getElementById('rank_3').appendChild(el_10);
      document.getElementById('rank_3').appendChild(el_11); document.getElementById('rank_3').appendChild(el_12); document.getElementById('rank_3').appendChild(el_13); document.getElementById('rank_3').appendChild(el_14); document.getElementById('rank_3').appendChild(el_15); document.getElementById('rank_3').appendChild(el_16); document.getElementById('rank_3').appendChild(el_17); document.getElementById('rank_3').appendChild(el_18); document.getElementById('rank_3').appendChild(el_19);
      document.getElementById('rank_3').appendChild(el_27); document.getElementById('rank_3').appendChild(el_28); document.getElementById('rank_3').appendChild(el_29); document.getElementById('rank_3').appendChild(el_30); document.getElementById('rank_3').appendChild(el_1); document.getElementById('rank_3').appendChild(el_2); document.getElementById('rank_3').appendChild(el_3); document.getElementById('rank_3').appendChild(el_4); document.getElementById('rank_3').appendChild(el_5); document.getElementById('rank_3').appendChild(el_31); document.getElementById('rank_3').appendChild(el_32);

      //RANK 5
      document.getElementById('rank_5').appendChild(el_33); document.getElementById('rank_5').appendChild(el_34); document.getElementById('rank_5').appendChild(el_35); document.getElementById('rank_5').appendChild(el_36);




  document.getElementById('section-6').style.display='none';
  document.getElementById('section-7').style.visibility='visible';
}

function Informed(){

  window.scrollTo(0, 0);

  //define data types
      const el_1 = document.createElement('div'); el_1.innerHTML = `<div id="facial expressions" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">facial expressions</span></span></div>`;
      const el_2 = document.createElement('div'); el_2.innerHTML = `<div id="stress level" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">stress level</span></span></div>`;
      const el_3 = document.createElement('div'); el_3.innerHTML = `<div id="voice expression" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">voice expression</span></span></div>`;
      const el_4 = document.createElement('div'); el_4.innerHTML = `<div id="current song choice" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current song choice</span></span></div>`;
      const el_5 = document.createElement('div'); el_5.innerHTML = `<div id="selfies" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">selfies</span></span></div>`;
      const el_6 = document.createElement('div'); el_6.innerHTML = `<div id="salary" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">salary</span></span></div>`;
      const el_7 = document.createElement('div'); el_7.innerHTML = `<div id="spending habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">spending habits</span></span></div>`;
      const el_8 = document.createElement('div'); el_8.innerHTML = `<div id="account balance" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">account balance</span></span></div>`;
      const el_9 = document.createElement('div'); el_9.innerHTML = `<div id="investments" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">investments</span></span></div>`;
      const el_10= document.createElement('div'); el_10.innerHTML = `<div id="blood-sugar" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">blood-sugar</span></span></div>`;
      const el_11= document.createElement('div'); el_11.innerHTML = `<div id="sleeping-pattern" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sleeping-pattern</span></span></div>`;
      const el_12= document.createElement('div'); el_12.innerHTML = `<div id="medical history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">medical history</span></span></div>`;
      const el_13= document.createElement('div'); el_13.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_14= document.createElement('div'); el_14.innerHTML = `<div id="sexual orientation" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sexual orientation</span></span></div>`;
      const el_15= document.createElement('div'); el_15.innerHTML = `<div id="relationship status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">relationship status</span></span></div>`;
      const el_16= document.createElement('div'); el_16.innerHTML = `<div id="pregnancy" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">pregnancy</span></span></div>`;
      const el_17= document.createElement('div'); el_17.innerHTML = `<div id="children" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">children</span></span></div>`;
      const el_18= document.createElement('div'); el_18.innerHTML = `<div id="level of higher education" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">level of higher education</span></span></div>`;
      const el_19= document.createElement('div'); el_19.innerHTML = `<div id="use of language" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">use of language</span></span></div>`;
      const el_20= document.createElement('div'); el_20.innerHTML = `<div id="ID No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">ID No.</span></span></div>`;
      const el_21= document.createElement('div'); el_21.innerHTML = `<div id="Social Security No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Social Security No.</span></span></div>`;
      const el_22= document.createElement('div'); el_22.innerHTML = `<div id="Visa Status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Visa Status</span></span></div>`;
      const el_23= document.createElement('div'); el_23.innerHTML = `<div id="public CCTV footage" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">public CCTV footage</span></span></div>`;
      const el_24= document.createElement('div'); el_24.innerHTML = `<div id="private photos" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">private photos</span></span></div>`;
      const el_25= document.createElement('div'); el_25.innerHTML = `<div id="tagged images" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">tagged images</span></span></div>`;
      const el_26= document.createElement('div'); el_26.innerHTML = `<div id="childhood pictures" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">childhood pictures</span></span></div>`;
      const el_27= document.createElement('div'); el_27.innerHTML = `<div id="activity levels" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">activity levels</span></span></div>`;
      const el_28= document.createElement('div'); el_28.innerHTML = `<div id="heartbeat" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">heartbeat</span></span></div>`;
      const el_29= document.createElement('div'); el_29.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_30= document.createElement('div'); el_30.innerHTML = `<div id="diet" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">diet</span></span></div>`;
      const el_31= document.createElement('div'); el_31.innerHTML = `<div id="current location" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current location</span></span></div>`;
      const el_32= document.createElement('div'); el_32.innerHTML = `<div id="movement habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">movement habits</span></span></div>`;
      const el_33= document.createElement('div'); el_33.innerHTML = `<div id="name" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">name</span></span></div>`;
      const el_34= document.createElement('div'); el_34.innerHTML = `<div id="surname" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">surname</span></span></div>`;
      const el_35= document.createElement('div'); el_35.innerHTML = `<div id="gender" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">gender</span></span></div>`;
      const el_36= document.createElement('div'); el_36.innerHTML = `<div id="profile picture" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">profile picture</span></span></div>`;
      const el_37= document.createElement('div'); el_37.innerHTML = `<div id="viewing history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">viewing history</span></span></div>`;
      const el_38= document.createElement('div'); el_38.innerHTML = `<div id="shopping cart" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">shopping cart</span></span></div>`;
      const el_39= document.createElement('div'); el_39.innerHTML = `<div id="wishlist" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">wishlist</span></span></div>`;
      const el_40= document.createElement('div'); el_40.innerHTML = `<div id="screen-time" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">screen-time</span></span></div>`;
      const el_41= document.createElement('div'); el_41.innerHTML = `<div id="browser history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">browser history</span></span></div>`;
      const el_42= document.createElement('div'); el_42.innerHTML = `<div id="search history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">search history</span></span></div>`;
      const el_43= document.createElement('div'); el_43.innerHTML = `<div id="music preference" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">music preference</span></span></div>`;
      const el_44= document.createElement('div'); el_44.innerHTML = `<div id="address" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">address</span></span></div>`;
      const el_45= document.createElement('div'); el_45.innerHTML = `<div id="phone number" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">phone number</span></span></div>`;
      const el_46= document.createElement('div'); el_46.innerHTML = `<div id="nationality" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">nationality</span></span></div>`;
      const el_47= document.createElement('div'); el_47.innerHTML = `<div id="age" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">age</span></span></div>`;



  //RANK 1
  document.getElementById('rank_1').appendChild(el_6);  document.getElementById('rank_1').appendChild(el_7);  document.getElementById('rank_1').appendChild(el_8);  document.getElementById('rank_1').appendChild(el_9);  document.getElementById('rank_1').appendChild(el_37);  document.getElementById('rank_1').appendChild(el_38);  document.getElementById('rank_1').appendChild(el_39);  document.getElementById('rank_1').appendChild(el_40);
  document.getElementById('rank_1').appendChild(el_41);  document.getElementById('rank_1').appendChild(el_42);  document.getElementById('rank_1').appendChild(el_43);  document.getElementById('rank_1').appendChild(el_23);  document.getElementById('rank_1').appendChild(el_24);  document.getElementById('rank_1').appendChild(el_25);  document.getElementById('rank_1').appendChild(el_26);

  //RANK 2
  document.getElementById('rank_2').appendChild(el_10); document.getElementById('rank_2').appendChild(el_11);  document.getElementById('rank_2').appendChild(el_12);  document.getElementById('rank_2').appendChild(el_13);   document.getElementById('rank_2').appendChild(el_14);   document.getElementById('rank_2').appendChild(el_15);   document.getElementById('rank_2').appendChild(el_16); document.getElementById('rank_2').appendChild(el_17);
  document.getElementById('rank_2').appendChild(el_18);document.getElementById('rank_2').appendChild(el_19);document.getElementById('rank_2').appendChild(el_27);document.getElementById('rank_2').appendChild(el_28);document.getElementById('rank_2').appendChild(el_29); document.getElementById('rank_2').appendChild(el_30); document.getElementById('rank_2').appendChild(el_1);document.getElementById('rank_2').appendChild(el_2);document.getElementById('rank_2').appendChild(el_3);
  document.getElementById('rank_2').appendChild(el_4);document.getElementById('rank_2').appendChild(el_5);document.getElementById('rank_2').appendChild(el_31);document.getElementById('rank_2').appendChild(el_32);

  //RANK 3
  document.getElementById('rank_3').appendChild(el_44); document.getElementById('rank_3').appendChild(el_45); document.getElementById('rank_3').appendChild(el_46); document.getElementById('rank_3').appendChild(el_47); document.getElementById('rank_3').appendChild(el_20); document.getElementById('rank_3').appendChild(el_21); document.getElementById('rank_3').appendChild(el_22);

  //RANK 4
  document.getElementById('rank_4').appendChild(el_33); document.getElementById('rank_4').appendChild(el_34); document.getElementById('rank_4').appendChild(el_35); document.getElementById('rank_4').appendChild(el_36);

  document.getElementById('section-6').style.display='none';
  document.getElementById('section-7').style.visibility='visible';
}

function Pants(){

  window.scrollTo(0, 0);

  //define data types
      const el_1 = document.createElement('div'); el_1.innerHTML = `<div id="facial expressions" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">facial expressions</span></span></div>`;
      const el_2 = document.createElement('div'); el_2.innerHTML = `<div id="stress level" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">stress level</span></span></div>`;
      const el_3 = document.createElement('div'); el_3.innerHTML = `<div id="voice expression" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">voice expression</span></span></div>`;
      const el_4 = document.createElement('div'); el_4.innerHTML = `<div id="current song choice" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current song choice</span></span></div>`;
      const el_5 = document.createElement('div'); el_5.innerHTML = `<div id="selfies" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">selfies</span></span></div>`;
      const el_6 = document.createElement('div'); el_6.innerHTML = `<div id="salary" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">salary</span></span></div>`;
      const el_7 = document.createElement('div'); el_7.innerHTML = `<div id="spending habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">spending habits</span></span></div>`;
      const el_8 = document.createElement('div'); el_8.innerHTML = `<div id="account balance" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">account balance</span></span></div>`;
      const el_9 = document.createElement('div'); el_9.innerHTML = `<div id="investments" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">investments</span></span></div>`;
      const el_10= document.createElement('div'); el_10.innerHTML = `<div id="blood-sugar" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">blood-sugar</span></span></div>`;
      const el_11= document.createElement('div'); el_11.innerHTML = `<div id="sleeping-pattern" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sleeping-pattern</span></span></div>`;
      const el_12= document.createElement('div'); el_12.innerHTML = `<div id="medical history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">medical history</span></span></div>`;
      const el_13= document.createElement('div'); el_13.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_14= document.createElement('div'); el_14.innerHTML = `<div id="sexual orientation" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">sexual orientation</span></span></div>`;
      const el_15= document.createElement('div'); el_15.innerHTML = `<div id="relationship status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">relationship status</span></span></div>`;
      const el_16= document.createElement('div'); el_16.innerHTML = `<div id="pregnancy" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">pregnancy</span></span></div>`;
      const el_17= document.createElement('div'); el_17.innerHTML = `<div id="children" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">children</span></span></div>`;
      const el_18= document.createElement('div'); el_18.innerHTML = `<div id="level of higher education" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">level of higher education</span></span></div>`;
      const el_19= document.createElement('div'); el_19.innerHTML = `<div id="use of language" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">use of language</span></span></div>`;
      const el_20= document.createElement('div'); el_20.innerHTML = `<div id="ID No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">ID No.</span></span></div>`;
      const el_21= document.createElement('div'); el_21.innerHTML = `<div id="Social Security No." class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Social Security No.</span></span></div>`;
      const el_22= document.createElement('div'); el_22.innerHTML = `<div id="Visa Status" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">Visa Status</span></span></div>`;
      const el_23= document.createElement('div'); el_23.innerHTML = `<div id="public CCTV footage" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">public CCTV footage</span></span></div>`;
      const el_24= document.createElement('div'); el_24.innerHTML = `<div id="private photos" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">private photos</span></span></div>`;
      const el_25= document.createElement('div'); el_25.innerHTML = `<div id="tagged images" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">tagged images</span></span></div>`;
      const el_26= document.createElement('div'); el_26.innerHTML = `<div id="childhood pictures" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">childhood pictures</span></span></div>`;
      const el_27= document.createElement('div'); el_27.innerHTML = `<div id="activity levels" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">activity levels</span></span></div>`;
      const el_28= document.createElement('div'); el_28.innerHTML = `<div id="heartbeat" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">heartbeat</span></span></div>`;
      const el_29= document.createElement('div'); el_29.innerHTML = `<div id="weight" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">weight</span></span></div>`;
      const el_30= document.createElement('div'); el_30.innerHTML = `<div id="diet" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">diet</span></span></div>`;
      const el_31= document.createElement('div'); el_31.innerHTML = `<div id="current location" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">current location</span></span></div>`;
      const el_32= document.createElement('div'); el_32.innerHTML = `<div id="movement habits" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">movement habits</span></span></div>`;
      const el_33= document.createElement('div'); el_33.innerHTML = `<div id="name" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">name</span></span></div>`;
      const el_34= document.createElement('div'); el_34.innerHTML = `<div id="surname" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">surname</span></span></div>`;
      const el_35= document.createElement('div'); el_35.innerHTML = `<div id="gender" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">gender</span></span></div>`;
      const el_36= document.createElement('div'); el_36.innerHTML = `<div id="profile picture" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">profile picture</span></span></div>`;
      const el_37= document.createElement('div'); el_37.innerHTML = `<div id="viewing history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">viewing history</span></span></div>`;
      const el_38= document.createElement('div'); el_38.innerHTML = `<div id="shopping cart" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">shopping cart</span></span></div>`;
      const el_39= document.createElement('div'); el_39.innerHTML = `<div id="wishlist" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">wishlist</span></span></div>`;
      const el_40= document.createElement('div'); el_40.innerHTML = `<div id="screen-time" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">screen-time</span></span></div>`;
      const el_41= document.createElement('div'); el_41.innerHTML = `<div id="browser history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">browser history</span></span></div>`;
      const el_42= document.createElement('div'); el_42.innerHTML = `<div id="search history" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">search history</span></span></div>`;
      const el_43= document.createElement('div'); el_43.innerHTML = `<div id="music preference" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">music preference</span></span></div>`;
      const el_44= document.createElement('div'); el_44.innerHTML = `<div id="address" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">address</span></span></div>`;
      const el_45= document.createElement('div'); el_45.innerHTML = `<div id="phone number" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">phone number</span></span></div>`;
      const el_46= document.createElement('div'); el_46.innerHTML = `<div id="nationality" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">nationality</span></span></div>`;
      const el_47= document.createElement('div'); el_47.innerHTML = `<div id="age" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">age</span></span></div>`;

  //RANK III
      document.getElementById('rank_3').appendChild(el_20); document.getElementById('rank_3').appendChild(el_21); document.getElementById('rank_3').appendChild(el_22); document.getElementById('rank_3').appendChild(el_44); document.getElementById('rank_3').appendChild(el_45); document.getElementById('rank_3').appendChild(el_46); document.getElementById('rank_3').appendChild(el_47);

  //RANK IV
      document.getElementById('rank_4').appendChild(el_10); document.getElementById('rank_4').appendChild(el_11); document.getElementById('rank_4').appendChild(el_12); document.getElementById('rank_4').appendChild(el_13); document.getElementById('rank_4').appendChild(el_14); document.getElementById('rank_4').appendChild(el_15); document.getElementById('rank_4').appendChild(el_16); document.getElementById('rank_4').appendChild(el_17);
      document.getElementById('rank_4').appendChild(el_18); document.getElementById('rank_4').appendChild(el_19); document.getElementById('rank_4').appendChild(el_20); document.getElementById('rank_4').appendChild(el_27); document.getElementById('rank_4').appendChild(el_28); document.getElementById('rank_4').appendChild(el_29); document.getElementById('rank_4').appendChild(el_30); document.getElementById('rank_4').appendChild(el_1);
      document.getElementById('rank_4').appendChild(el_2); document.getElementById('rank_4').appendChild(el_3); document.getElementById('rank_4').appendChild(el_4); document.getElementById('rank_4').appendChild(el_31); document.getElementById('rank_4').appendChild(el_32); document.getElementById('rank_4').appendChild(el_37);document.getElementById('rank_4').appendChild(el_38);document.getElementById('rank_4').appendChild(el_39);document.getElementById('rank_4').appendChild(el_40);
      document.getElementById('rank_4').appendChild(el_41); document.getElementById('rank_4').appendChild(el_42); document.getElementById('rank_4').appendChild(el_43); document.getElementById('rank_4').appendChild(el_23); document.getElementById('rank_4').appendChild(el_24); document.getElementById('rank_4').appendChild(el_25); document.getElementById('rank_4').appendChild(el_26); document.getElementById('rank_4').appendChild(el_6); document.getElementById('rank_4').appendChild(el_7);
      document.getElementById('rank_4').appendChild(el_8); document.getElementById('rank_4').appendChild(el_9);

  //RANK V
      document.getElementById('rank_5').appendChild(el_33); document.getElementById('rank_5').appendChild(el_34); document.getElementById('rank_5').appendChild(el_35); document.getElementById('rank_5').appendChild(el_36);

  document.getElementById('section-6').style.display='none';
  document.getElementById('section-7').style.visibility='visible';
}

function onDragStart_7(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  //event.currentTarget.style.backgroundColor = 'red';
}

function onDragOver_7(event) {
  event.preventDefault();
}

function onDrop_7(event) {

  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();

}

function submit_7(){
  window.scrollTo(0, 0);

  document.getElementById('rank_1').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){rank_1.push(item.id);};});
  document.getElementById('rank_2').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){rank_2.push(item.id);};});
  document.getElementById('rank_3').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){rank_3.push(item.id);};});
  document.getElementById('rank_4').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){rank_4.push(item.id);};});
  document.getElementById('rank_5').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){rank_5.push(item.id);};});

  document.getElementById('rank_1').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){rank_1.push(el.id);};});});
  document.getElementById('rank_2').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){rank_2.push(el.id);};});});
  document.getElementById('rank_3').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){rank_3.push(el.id);};});});
  document.getElementById('rank_4').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){rank_4.push(el.id);};});});
  document.getElementById('rank_5').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){rank_5.push(el.id);};});});

  console.log(rank_1);
  console.log(rank_2);
  console.log(rank_3);
  console.log(rank_4);
  console.log(rank_5);

  document.getElementById('section-7').style.display='none';

  document.getElementById('section-8').style.visibility='visible';
}

function onDragStart_9(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  //event.currentTarget.style.backgroundColor = 'red';
}

function onDragOver_9(event) {
  event.preventDefault();
}

function onDrop_9(event) {

  const id = event.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();

}

function submit_9(){
  window.scrollTo(0, 0);
  third_parties_x.length = 0;
  third_parties_y.length = 0;
  third_parties_z.length = 0;

  document.getElementById('third_parties_x').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){third_parties_x.push(item.id);};});
  document.getElementById('third_parties_y').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){third_parties_y.push(item.id);};});
  document.getElementById('third_parties_z').childNodes.forEach((item, i) => {if(item.id!=undefined && item.id.includes('el')){third_parties_z.push(item.id);};});

  document.getElementById('third_parties_x').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){third_parties_x.push(el.id);};});});
  document.getElementById('third_parties_y').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){third_parties_y.push(el.id);};});});
  document.getElementById('third_parties_z').childNodes.forEach((item, i) => {item.childNodes.forEach((el, q) => {if(el.id!=undefined){third_parties_z.push(el.id);};});});

  console.log(third_parties_x);
  console.log(third_parties_y);
  console.log(third_parties_z);


  let title_o = document.createElement('h2');
  title_o.innerHTML=`Statement of Objectives`;
  title_o.className="white";
  document.getElementById('Summary_Objectives').appendChild(title_o);

  choices.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    document.getElementById('Summary_Objectives').appendChild(pa);
  });

  let title_s = document.createElement('h2');
  title_s.innerHTML=`Supported Third Party Interests`;
  title_s.className="white";
  document.getElementById('Summary_Interests').appendChild(title_s);

  supported_interests.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    document.getElementById('Summary_Interests').appendChild(pa);
  });

    /*
      let title_c = document.createElement('h2');
      title_c.innerHTML=`Classification of Data`;
      title_c.className="white";
      document.getElementById('Summary_Data').appendChild(title_c);
    */

  rank_1.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
  //  document.getElementById('Summary_Data').appendChild(pa);
    document.getElementById('RANK I').appendChild(pa);
  });

  rank_2.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
  //  document.getElementById('Summary_Data').appendChild(pa);
    document.getElementById('RANK II').appendChild(pa);
  });

  rank_3.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    //document.getElementById('Summary_Data').appendChild(pa);
    document.getElementById('RANK III').appendChild(pa);
  });

  rank_4.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
  //  document.getElementById('Summary_Data').appendChild(pa);
    document.getElementById('RANK IV').appendChild(pa);
  });

  rank_5.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    //document.getElementById('Summary_Data').appendChild(pa);
    document.getElementById('RANK V').appendChild(pa);
  });
/*
  let title_e = document.createElement('h2');
  title_e.innerHTML=`Classification of Third Parties`;
  title_e.className="white";
  document.getElementById('Summary_Third').appendChild(title_e);
*/
  third_parties_x.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    //document.getElementById('Summary_Third').appendChild(pa);
    document.getElementById('partyX').appendChild(pa);
  });

  third_parties_y.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    //document.getElementById('Summary_Third').appendChild(pa);
    document.getElementById('partyY').appendChild(pa);
  });

  third_parties_z.forEach((item, i) => {
    let pa = document.createElement('p');
    pa.className="textDark";
    pa.style.margin='0px';
    pa.innerHTML=`${item}`;
    //document.getElementById('Summary_Third').appendChild(pa);
    document.getElementById('partyZ').appendChild(pa);
  });


  document.getElementById('section-9').style.display='none';
  document.getElementById('section-10').style.visibility='visible';
}

function goSection1(){
  document.body.style.backgroundColor='blue';
  document.getElementById('section-0').style.display='none';
  document.getElementById('section-1').style.visibility='visible';
  window.scrollTo(0, 0);

  //Clear input fields for next time
   document.getElementById('form-12').elements[0].value='';
   document.getElementById('form-12').elements[1].value='';
}

function goSection2(){
  document.getElementById('section-1').style.display='none';
  document.getElementById('section-2').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection3(){
  document.getElementById('section-2').style.display='none';
  document.getElementById('section-3').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection4(){
  document.getElementById('section-3').style.display='none';
  document.getElementById('section-4').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection5(){

  document.getElementById('section-4').style.display='none';
  document.getElementById('section-5').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection6(){
  document.body.style.backgroundColor='blue';
  document.getElementById('section-5').style.display='none';
  document.getElementById('section-6').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection7(){
  //populated
  document.getElementById('section-6').style.display='none';
  document.getElementById('section-7').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection8(){
  document.getElementById('section-7').style.display='none';
  document.getElementById('section-8').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection9(){
  document.body.style.backgroundColor='blue';

  const el_A = document.createElement('div'); el_A.innerHTML = `<div id="the government of your home country" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">the government of your home country</span></span></div>`;
  const el_B = document.createElement('div'); el_B.innerHTML = `<div id="the government of your country of residence" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">the government of your country of residence</span></span></div>`;
  const el_C = document.createElement('div'); el_C.innerHTML = `<div id="national security" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">national security</span></span></div>`;
  const el_D = document.createElement('div'); el_D.innerHTML = `<div id="social media platforms" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">social media platforms</span></span></div>`;
  const el_E = document.createElement('div'); el_E.innerHTML = `<div id="your browser" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">your browser</span></span></div>`;
  const el_F = document.createElement('div'); el_F.innerHTML = `<div id="your phone provider" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">your phone provider</span></span></div>`;
  const el_G = document.createElement('div'); el_G.innerHTML = `<div id="your bank" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">your bank</span></span></div>`;
  const el_H = document.createElement('div'); el_H.innerHTML = `<div id="your health insurance" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">your health insurance</span></span></div>`;
  const el_I = document.createElement('div'); el_I.innerHTML = `<div id="scientific institutions" class="example-draggable" draggable="true" ondragstart="onDragStart(event);"><span class="smallElementsLight p-1" style="border: 0px; border-radius:15px; background-color:#F2F2F2; text-align: center;"> <span class="m-3 ">scientific institutions</span></span></div>`;

  document.getElementById('third_parties_z').appendChild(el_A);
  document.getElementById('third_parties_z').appendChild(el_B);
  document.getElementById('third_parties_z').appendChild(el_C);
  document.getElementById('third_parties_z').appendChild(el_D);
  document.getElementById('third_parties_z').appendChild(el_E);
  document.getElementById('third_parties_z').appendChild(el_F);
  document.getElementById('third_parties_z').appendChild(el_G);
  document.getElementById('third_parties_z').appendChild(el_H);
  document.getElementById('third_parties_z').appendChild(el_I);

  supported_interests.forEach((item, i) => {
    if(item == 'data extraction'){document.getElementById('third_parties_y').appendChild(el_G);document.getElementById('third_parties_y').appendChild(el_H);}
    if(item == 'development of prediction products'){document.getElementById('third_parties_y').appendChild(el_G);document.getElementById('third_parties_y').appendChild(el_H);}
    if(item == 'scientific research'){document.getElementById('third_parties_y').appendChild(el_I);}
    if(item == 'user experience optimization'){document.getElementById('third_parties_y').appendChild(el_D); document.getElementById('third_parties_y').appendChild(el_I); document.getElementById('third_parties_y').appendChild(el_F);}
    if(item == 'national security'){document.getElementById('third_parties_y').appendChild(el_A); document.getElementById('third_parties_y').appendChild(el_B); document.getElementById('third_parties_y').appendChild(el_C);}
    if(item == 'population control'){document.getElementById('third_parties_y').appendChild(el_A); document.getElementById('third_parties_y').appendChild(el_B); document.getElementById('third_parties_y').appendChild(el_C);}
    if(item == 'health control'){document.getElementById('third_parties_y').appendChild(el_A); document.getElementById('third_parties_y').appendChild(el_B); document.getElementById('third_parties_y').appendChild(el_C);}
  });

  document.getElementById('section-8').style.display='none';
  document.getElementById('section-9').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection10(){
  document.getElementById('section-9').style.display='none';
  document.getElementById('section-10').style.visibility='visible';
  window.scrollTo(0, 0);
}

function goSection11(){
  document.getElementById('section-10').style.display='none';
  document.getElementById('section-11').style.visibility='visible';
  window.scrollTo(0, 0);
}

function submitCanvas(){
    var background = new Image();
    background.crossOrigin = 'anonymous';
    background.src = "img/first.jpg";
    background.onload =  function(){
    let n = document.getElementById('form-12').elements[0].value;
    let e = document.getElementById('form-12').elements[1].value;

    var canvas = document.getElementById('canvasdoc');
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = 2480;
    ctx.canvas.height = 3508;

    //ctx.fillStyle = "#ffffff";
    //ctx.fillRect(0, 0, 2480, 3508);

    ctx.font = "45px montserrat";
    ctx.fillStyle= '#000000';
    ctx.drawImage(background,0,0);

    ctx.fillText(n,790,1334);
    ctx.fillText(n, 438, 1683);

    //let dataUrl_back = canvas.toDataURL(),
    //back_postcard = document.createElement('img');
    //back_postcard.crossOrigin = 'null';
    //back_postcard.src = dataUrl_back;


    var link = document.createElement('a');
    link.download = `${e}_1.png`;
    link.href = document.getElementById('canvasdoc').toDataURL()
    link.click();
    }

    //SECOND PAGE
    var background_second = new Image();
    background_second.crossOrigin = 'anonymous';
    background_second.src = "img/second.jpg";
    background_second.onload =  function(){
    let n = document.getElementById('form-12').elements[0].value;
    let e = document.getElementById('form-12').elements[1].value;

    var canvas_second = document.getElementById('canvas_second');
    var ctx_second = canvas_second.getContext("2d");
    ctx_second.canvas.width = 2480;
    ctx_second.canvas.height = 3508;

    //ctx.fillStyle = "#ffffff";
    //ctx.fillRect(0, 0, 2480, 3508);

    ctx_second.drawImage(background_second,0,0);

    let q = 0;
    choices.forEach((item, i) => {
      console.log('ciao');
      console.log(item);
      if(item != ''){
      ctx_second.font = "45px montserrat";
      ctx_second.fillStyle= '#000000';
      ctx_second.fillText('- '+item,206,962 + q);
      q = q + 59;}
    });

    let r = 0;
    supported_interests.forEach((item, i) => {
      console.log('ciao');
      console.log(item);
      if(item != ''){
      ctx_second.font = "45px montserrat";
      ctx_second.fillStyle= '#000000';
      ctx_second.fillText('- '+item,206,1981 + r);
      r = r + 59;}
    });

    //let dataUrl_back = canvas.toDataURL(),
    //back_postcard = document.createElement('img');
    //back_postcard.crossOrigin = 'null';
    //back_postcard.src = dataUrl_back;


    var link = document.createElement('a');
    link.download = `${e}_2.png`;
    link.href = document.getElementById('canvas_second').toDataURL()
    link.click();
    }

    //THIRD PAGE
    var background_third = new Image();
    background_third.crossOrigin = 'anonymous';
    background_third.src = "img/third.jpg";
    background_third.onload =  function(){

    let n = document.getElementById('form-12').elements[0].value;
    let e = document.getElementById('form-12').elements[1].value;

    var canvas_third = document.getElementById('canvas_third');
    var ctx_third = canvas_third.getContext("2d");
    ctx_third.canvas.width = 2480;
    ctx_third.canvas.height = 3508;

    //ctx.fillStyle = "#ffffff";
    //ctx.fillRect(0, 0, 2480, 3508);

    ctx_third.drawImage(background_third,0,0);

    q = 0;
    rank_1.forEach((item, i) => {
      if(item != ''){
      ctx_third.font = "28px montserrat";
      ctx_third.fillStyle= '#000000';
      ctx_third.fillText('- '+item,110,1099 + q);
      q = q + 45;}
    });

    q = 0;
    rank_2.forEach((item, i) => {
      if(item != ''){
      ctx_third.font = "28px montserrat";
      ctx_third.fillStyle= '#000000';
      ctx_third.fillText('- '+item,532,1099 + q);
      q = q + 45;}
    });

    q = 0;
    rank_3.forEach((item, i) => {
      if(item != ''){
      ctx_third.font = "28px montserrat";
      ctx_third.fillStyle= '#000000';
      ctx_third.fillText('- '+item,950,1099 + q);
      q = q + 45;}
    });

    q = 0;
    rank_4.forEach((item, i) => {
      if(item != ''){
      ctx_third.font = "28px montserrat";
      ctx_third.fillStyle= '#000000';
      ctx_third.fillText('- '+item,1368,1099 + q);
      q = q + 45;}
    });

    q = 0;
    rank_5.forEach((item, i) => {
      if(item != ''){
      ctx_third.font = "28px montserrat";
      ctx_third.fillStyle= '#000000';
      ctx_third.fillText('- '+item,1787,1099 + q);
      q = q + 45;}
    });

    //let dataUrl_back = canvas.toDataURL(),
    //back_postcard = document.createElement('img');
    //back_postcard.crossOrigin = 'null';
    //back_postcard.src = dataUrl_back;


    var link = document.createElement('a');
    link.download = `${e}_3.png`;
    link.href = document.getElementById('canvas_third').toDataURL()
    link.click();
    }

    //FOURTH PAGE
    var background_fourth = new Image();
    background_fourth.crossOrigin = 'anonymous';
    background_fourth.src = "img/fourth.jpg";
    background_fourth.onload =  function(){
    let n = document.getElementById('form-12').elements[0].value;
    let e = document.getElementById('form-12').elements[1].value;

    var canvas_fourth = document.getElementById('canvas_fourth');
    var ctx_fourth = canvas_fourth.getContext("2d");
    ctx_fourth.canvas.width = 2480;
    ctx_fourth.canvas.height = 3508;

    //ctx.fillStyle = "#ffffff";
    //ctx.fillRect(0, 0, 2480, 3508);

    ctx_fourth.drawImage(background_fourth,0,0);

    let q = 0;
    third_parties_x.forEach((item, i) => {
      console.log('ciao');
      console.log(item);
      if(item != ''){
      ctx_fourth.font = "45px montserrat";
      ctx_fourth.fillStyle= '#000000';
      ctx_fourth.fillText('- '+item,204,1494 + q);
      q = q + 59;}
      else{
        ctx_fourth.font = "45px montserrat";
        ctx_fourth.fillStyle= '#000000';
        ctx_fourth.fillText('- no trusted third parties -',204,1494);
      }
    });

    //let dataUrl_back = canvas.toDataURL(),
    //back_postcard = document.createElement('img');
    //back_postcard.crossOrigin = 'null';
    //back_postcard.src = dataUrl_back;


    var link = document.createElement('a');
    link.download = `${e}_4.png`;
    link.href = document.getElementById('canvas_fourth').toDataURL()
    link.click();




    }
}


var timeoutInMiliseconds = 60000;
var timeoutId;

function startTimer() {
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
		window.location.href = "../index.html";
}

function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    startTimer();
		console.log('started timer')
}

function resetTimer() {
    window.clearTimeout(timeoutId)

}

setInterval(setupTimers, 5000);
