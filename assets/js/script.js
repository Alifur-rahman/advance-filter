// custom js file


var showHtml = "";

const data = [
  {
    "id": 0,
    "title": "Company 1",
    'product': 'product7',
    "product_cost": 20,
    'service': 'service5',
    "service_cost": 5,
    "bullet1": "Lorem ipsum dolor....",
    "bullet2": "AT vero eos et....",
    "logo": "/images/logo0.png",
    "link": "www.link.com",
  },
  {
    "id": 1,
    "title": "Company 2",
    'product': 'product2',
    'service': 'service3',
    "product_cost": 15,
    "service_cost": 10,
    "bullet1": "Lorem ipsum dolor....",
    "bullet2": "AT vero eos et....",
    "logo": "/images/logo0.png",
    "link": "www.link.com",
  },
  {
    "id": 2,
    "title": "Company 3",
    'product': 'product4',
    'service': 'service6',
    "product_cost": 10,
    "service_cost": 15,
    "bullet1": "Lorem ipsum dolor....",
    "bullet2": "AT vero eos et....",
    "logo": "/images/logo0.png",
    "link": "www.link.com",
  },
  {
    "id": 3,
    "title": "Company 4",
    "product_cost": 5,
    'product': 'product3',
    'service': 'service5',
    "service_cost": 20,
    "bullet1": "Lorem ipsum dolor....",
    "bullet2": "AT vero eos et....",
    "logo": "/images/logo0.png",
    "link": "www.link.com",
  }
];


let newData = [];
let finalData = [];
let fetchId = ['f'];

$('#allService').change(function () {
  allServiceCheck();
});
$('#alProcutAll').change(function () {
  allProductCheck();
});
allServiceCheck();
allProductCheck();
function allProductCheck() {
  if ($('#alProcutAll').is(':checked')) {

    $('#alfilterform input[data-filter-group="product"]').prop('checked', true);
  }
  else {
    $('#alfilterform input[data-filter-group="product"]').prop('checked', false);
  }
}
function allServiceCheck() {
  if ($('#allService').is(':checked')) {

    $('#alfilterform input[data-filter-group="service"]').prop('checked', true);
  }
  else {
    $('#alfilterform input[data-filter-group="service"]').prop('checked', false);
  }
}



$('#alfilterform input').change(function () {
  var filterFrom = document.getElementById('alfilterform');

var formInputs = filterFrom.querySelectorAll('input[type=checkbox]:checked');
var rangeInputs = filterFrom.querySelectorAll('input[type=range]');
  $(rangeInputs[0].getAttribute('data-show-id')).html(rangeInputs[0].value);
  $(rangeInputs[1].getAttribute('data-show-id')).html(rangeInputs[1].value);
  for (let i = 0; i < data.length; i++) {
            // range button js 
    var objde = rangeInputs[0].getAttribute('data-filter-group');
    if (rangeInputs[0].value >= data[i][objde]) {
      var objde2 = rangeInputs[1].getAttribute('data-filter-group');
      if (rangeInputs[1].value >= data[i][objde2]) {
        var found = fetchId.find(function (element) {
          return element == data[i].id;
        });
        if (found != data[i].id) {
          newData.push(data[i]);
          fetchId.push(data[i].id);  
        }
      }
    }
          // end range button js 
           
  }
    
          

  var FilterGroup = '';
  var inputValue = '';
  let finalFetchId = ['ff'];
  for (let n = 0; n < newData.length; n++) {
    for (let index = 0; index < formInputs.length; index++) {
      FilterGroup = formInputs[index].getAttribute('data-filter-group');
      inputValue = formInputs[index].value;
      
      if (newData[n][FilterGroup] == inputValue) {

        var found = finalFetchId.find(function (element) {
          return element == newData[n].id;
        });
        if (found != newData[n].id) {
          finalData.push(newData[n]);
          finalFetchId.push(newData[n].id);  
        }

       
      }

  
    }
    
  } 
                                  


  // console.log(newData);
  console.log(finalData);
  if (finalData.length != 0) {
    for (let f = 0; f < finalData.length; f++) {
      showHtml += `
      <div class="card_ui d-flex mb-2 flex-wrap">
      <div class="item_logo">
        <img
          src="assets/images/default-logo.png"
          class=""
          alt=""
        />
        <h1 class="d-block d-md-none mt-3">`+finalData[f].title+`</h1>
      </div>
      <div class="item_contain">
        <h1 class="d-none d-md-block">`+finalData[f].title+`</h1>
        <ul class="pt-3 pb-3">
          <li>
            <i class="fa-solid fa-check"></i>`+finalData[f].bullet1+`
          </li>
          <li>
            <i class="fa-solid fa-check"></i>`+finalData[f].bullet2+`
          </li>
        </ul>
        <div class="cost_btn_area d-flex justify-content-between">
          <div class="d-flex">
            <ul>
              <li>Product Costs</li>
              <li>
                <b>`+finalData[f].product_cost+` <s>€</s></b>
              </li>
            </ul>
            <ul>
              <li>Service Costs</li>
              <li>
                <b>`+finalData[f].service_cost+` <s>€</s></b>
              </li>
            </ul>
          </div>
          <a href="`+finalData[f].link+`" class="btn btn-primary"> Go to website</a>
        </div>
      </div>
      </div>
      `;
      
    }
  }
  else {
    showHtml = '<p class="text-danger">There have no data</p>';
  }
  $('#alfilterresult').html(showHtml);
  $('#al-filter-result-count').html(finalData.length);





  newData = [];
  fetchId = ['f'];
  finalData = [];
  finalFetchId = ['ff'];
  showHtml = "";
       
        
});

