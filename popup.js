class Popup{
  constructor() {
    this.setUpListeners()
    chrome.tabs.executeScript(null, {file: "content_script.js"},()=>{
          this.updateAvailableStepList()        
    });
  }

  static getTestCases (){
    return {
      'tony_morales':{
				"loan_amount":  {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#requested_loan_amount",
							"value" : "6000",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#loan_amount_submit",
							"event" : "click",
						}
					]},
				"loan_purpose":  {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#use",
							"value" : "Debt Consolidation",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#loan_purpose_submit",
							"event" : "click",
						}]},
				"credit_rating":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#given_credit_rating",
							"value" : "Excellent",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#credit_rating_submit",
							"event" : "click",
						}
					]},
				"state":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#state",
							"value" : "TX",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#state_submit",
							"event" : "click",
						}
					]	},
				"pi": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#first_name",
							"value" : "Tony",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#last_name",
							"value" : "Morales",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#email",
							"value" : "tony.morales.exp" + new Date().getTime().toString().slice(8,13)+"@gmail.com",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#phone_number",
							"value" : "(281) 974-0003",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#pi_submit",
							"event" : "click",
						}
					]},
				"employed": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#employment_status",
							"value" : "Retired",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#employed_submit",
							"event" : "click",
						}
					]},
				"income": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#annual_income",
							"value" : "190000",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#income_submit",
							"event" : "click",
						}
					]},
				"zip_code": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#postal_code",
							"value" : "79045",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#zip_code_submit",
							"event" : "click",
						}
					]},
				"address": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#street1",
							"value" : "210 HICKORY ST",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#address_submit",
							"event" : "click",
						}
					]},
				"dob": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_month",
							"value" : this.randomInt(1,11),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_day",
							"value" : this.randomInt(1,28),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_year",
							"value" : "194"+this.randomInt(1,9),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#dob_submit",
							"event" : "click",
						}
					]},
				"ssn": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#ssn",
							"value" : this.randomInt(10,20)+this.randomInt(1,9)+"-"+this.randomInt(1,9)+this.randomInt(1,9)+"-"+this.randomInt(100,999)+this.randomInt(1,9),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#ssn_ok",
							"event" : "click",
						}
					]},
				"pre_qualified": {
					"actions":[
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						},
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : `[data-index="1"] button`,
							"event" : "click",
						},
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : "button",
							"event" : "click",
						}
					]},
				"activate": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#password",
							"value" : "Test654321"
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#confirm_password",
							"value" : "Test654321"
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#confirm_password",
							"event" : "blur"
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#activate",
							"event" : "click",
						}
					]},
				"account_created": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]},
				"welcome_back": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]},
				"employment":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#occupation",
							"value" : "Analyst",
						},
						{
								"type"  : "UPDATE_VALUE",
								"selector" : "#name",
								"value" : "Bills.com",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_month",
							"value" : this.randomInt(1,11),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_day",
							"value" : this.randomInt(1,28),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_year",
							"value" : "200"+this.randomInt(1,8),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#employment_submit",
							"event" : "click",
						}
					]},
				"finances": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#reserves_in_accounts",
							"value" : "250000",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#retirement_balance",
							"value" : "250000",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#banking_submit",
							"event" : "click",
						}
					]},
				"housing": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#housing_expense_type",
							"value" : "Own free and clear",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#housing_expense_type",
							"event" : "change",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#housing_submit",
							"event" : "click",
						}
					]},
				"discount": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#want_discount",
							"event" : "click",
						}
					]},
			},
      'june_boyles':{
				"loan_amount":  {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#requested_loan_amount",
							"value" : "33000",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#loan_amount_submit",
							"event" : "click",
						}
					]},
				"loan_purpose":  {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#use",
							"value" : "Debt Consolidation",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#loan_purpose_submit",
							"event" : "click",
						}]},
				"credit_rating":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#given_credit_rating",
							"value" : "Excellent",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#credit_rating_submit",
							"event" : "click",
						}
					]},
				"state":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#state",
							"value" : "NE",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#state_submit",
							"event" : "click",
						}
					]	},
				"pi": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#first_name",
							"value" : "June",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#last_name",
							"value" : "Boyles",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#email",
							"value" : "june.boyles.exp" + new Date().getTime().toString().slice(8,13)+"@gmail.com",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#phone_number",
							"value" : "(281) 974-0003",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#pi_submit",
							"event" : "click",
						}
					]},
				"employed": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#employment_status",
							"value" : "Full-Time",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#employed_submit",
							"event" : "click",
						}
					]},
				"income": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#annual_income",
							"value" : "200000",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#income_submit",
							"event" : "click",
						}
					]},
				"zip_code": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#postal_code",
							"value" : "68025",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#zip_code_submit",
							"event" : "click",
						}
					]},
				"address": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#street1",
							"value" : "339 W Military Ave",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#address_submit",
							"event" : "click",
						}
					]},
				"dob": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_month",
							"value" : this.randomInt(1,11),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_day",
							"value" : this.randomInt(1,28),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_year",
							"value" : "193"+this.randomInt(3,6),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#dob_submit",
							"event" : "click",
						}
					]},
				"ssn": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#ssn",
							"value" : this.randomInt(10,20)+this.randomInt(1,9)+"-"+this.randomInt(1,9)+this.randomInt(1,9)+"-"+this.randomInt(100,999)+this.randomInt(1,9),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#ssn_ok",
							"event" : "click",
						}
					]},
				"pre_qualified": {
					"actions":[
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						},
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : `[data-index="1"] button`,
							"event" : "click",
						},
						{
							"timeout": "2200",
							"type"  : "TRIGGER_EVENT",
							"selector" : "button",
							"event" : "click",
						}
					]},
				"activate": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#password",
							"value" : "Test654321"
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#confirm_password",
							"value" : "Test654321"
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#confirm_password",
							"event" : "blur"
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#activate",
							"event" : "click",
						}
					]},
				"account_created": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]},
				"welcome_back": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]},
				"employment":{
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#occupation",
							"value" : "Analyst",
						},
						{
								"type"  : "UPDATE_VALUE",
								"selector" : "#name",
								"value" : "FreedomPlus",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_month",
							"value" : this.randomInt(1,11),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_day",
							"value" : this.randomInt(1,28),
						},

						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#date_year",
							"value" : "200"+this.randomInt(5,8),
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#employment_submit",
							"event" : "click",
						}
					]},
				"finances": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#reserves_in_accounts",
							"value" : "19936",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#retirement_balance",
							"value" : "438416",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#banking_submit",
							"event" : "click",
						}
					]},
				"housing": {
					"actions":[
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#housing_expense_type",
							"value" : "Pay mortgage",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#housing_expense_type",
							"event" : "change",
						},
						{
							"type"  : "UPDATE_VALUE",
							"selector" : "#monthly_housing",
							"value" : "232",
						},
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#housing_submit",
							"event" : "click",
						}
					]},
				"discount": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#want_discount",
							"event" : "click",
						}
					]},
			}
    };
  }

  static randomInt (from,to){
			return Math.floor(from + Math.random() * to).toString();
  }

  get lastStep (){
        var e = document.getElementById("last_step"),
        lastStep = e.options[e.selectedIndex].value;
      return lastStep;
  }

  get testUserName (){
      var testUserNameCnt = document.getElementById("test_data"),
          testUserName = testUserNameCnt.options[testUserNameCnt.selectedIndex].value;
      return testUserName;
  }

  get testUserData(){
      return Popup.getTestCases()[this.testUserName];
  }
  get isFullapp(){
    return this.steps.indexOf(this.currentStep)>=this.steps.indexOf('account_created');
  }

  get steps(){
    return Object.keys(this.testUserData);
  }

  get availableSteps(){
    let steps = this.steps;
    if(this.isFullapp){
      return steps.slice(steps.indexOf(this.currentStep)+1,steps.length)
    }
    return steps.slice(steps.indexOf(this.currentStep)+1,steps.indexOf('activate')+1);
  }

  getCurrentTabPath (tab){
        var l = document.createElement("a");
              l.href =tab.url;
              return l.pathname.replace('/',''); 
  }

  setUpListeners(){
    document.getElementById('run').addEventListener('click',()=>{
        this.getActiveTab((tab)=>{
              chrome.tabs.sendMessage(tab.id, {name:"RUN_TEST",data:{'last_step':this.lastStep,'testUserData':this.testUserData}}, function(response) {
            })
            window.close();
        })
    })
  }

  getActiveTab(cb){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         cb(tabs[0]);
      });
  }

  updateAvailableStepList(){
      this.getActiveTab((tab)=>{
        this.currentStep = this.getCurrentTabPath(tab);
            var select = document.getElementById('last_step');
            this.availableSteps.forEach((item)=>{
              var opt = document.createElement('option');
              opt.value = item;
              opt.innerHTML = item;
              select.appendChild(opt);
            })
        })

  }

}
var a = new Popup();


