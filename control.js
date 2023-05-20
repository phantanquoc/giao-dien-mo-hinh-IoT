
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdguZyIlmEI0xB2_b5-bAZnfDvHaKJ5L4",
  authDomain: "tt-iot-a644e.firebaseapp.com",
  databaseURL: "https://tt-iot-a644e-default-rtdb.firebaseio.com",
  projectId: "tt-iot-a644e",
  storageBucket: "tt-iot-a644e.appspot.com",
  messagingSenderId: "277259157535",
  appId: "1:277259157535:web:f637c08ebf72a82790952a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Auto load Temperature-------------------------
firebase.database().ref("/TT_IoT/value_nd").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("value_nd").innerHTML = nd;
  console.log(nd)
});
firebase.database().ref("/TT_IoT/value_da").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("value_da").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/TT_IoT/value_gas").on("value",function(snapshot){
  var nd = snapshot.val();  
  document.getElementById("value_gas").innerHTML = nd;
  console.log(nd);
});


function room_active(name) {
  var element = document.getElementById(name)
  element.classList.toggle("room_active");
}


function openControl(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("control");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("living");
 for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// // Tham chiếu đến nút bạn muốn lưu trữ giá trị của slider
var Ref_da = firebase.database().ref('/TT_IoT/value_da');;
var slider = document.getElementById("slider_da1");
var val_da = document.getElementById("value_da")

Ref_da.on('value', function(snapshot) {
  // Lấy giá trị từ snapshot và cập nhật giá trị của slider
  val_da.innerHTML = snapshot.val();
});
slider.addEventListener('input', function() {
  var value = event.target.value;
  Ref_da.set(value);
  });

//   // Tham chiếu đến nút bạn muốn lưu trữ giá trị của slider
var Ref_gas = firebase.database().ref('/TT_IoT/value_gas');;
var slider = document.getElementById("slider_gas1");
var val_gas = document.getElementById("value_gas")

Ref_gas.on('value', function(snapshot) {
  // Lấy giá trị từ snapshot và cập nhật giá trị của slider
  val_gas.innerHTML = snapshot.val();
});
slider.addEventListener('input', function() {
  var value = event.target.value;
  Ref_gas.set(value);
  });

    // Tham chiếu đến nút bạn muốn lưu trữ giá trị của slider
var Ref_nd = firebase.database().ref('/TT_IoT/value_nd');;
var slider = document.getElementById("slider_nd1");
var val_nd = document.getElementById("value_nd");

Ref_nd.on('value', function(snapshot) {
  // Lấy giá trị từ snapshot và cập nhật giá trị của slider
  var res = snapshot.val();
  val_nd.innerHTML = res;
  $("#slider_nd1").val(res);
});
slider.addEventListener('input', function(event) {
  var value =event.target.value;
  Ref_nd.set(value);
  });




//light
const toggleSwitch1 = document.querySelector('#switchtoggle1');
switchtoggle1.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "LIGHT": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "LIGHT": "OFF"
        })
    }
});

//FRIDGE
const toggleSwitch2 = document.querySelector('#switchtoggle2');
switchtoggle2.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "FRIDGE": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "FRIDGE": "OFF"
        })
    }
});

//light
const toggleSwitch3 = document.querySelector('#switchtoggle3');
switchtoggle3.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "TIVI": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "TIVI": "OFF"
        })
    }
});

//light
const toggleSwitch4 = document.querySelector('#switchtoggle4');
switchtoggle4.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "AIR": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "AIR": "OFF"
        })
    }
});

//light
const toggleSwitch5 = document.querySelector('#switchtoggle5');
switchtoggle5.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "MUSIC": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "MUSIC": "OFF"
        })
    }
});

//light
const toggleSwitch6 = document.querySelector('#switchtoggle6');
switchtoggle6.addEventListener('change', function () {
    if (this.checked) {
        firebase.database().ref("/TT_IoT").update({
            "RADIO": "ON"
        })
    } else {
        firebase.database().ref("/TT_IoT").update({
            "RADIO": "OFF"
        })
    }
});





