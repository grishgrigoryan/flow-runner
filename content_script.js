if(!instance){
	class FLowRunner{
		constructor(){
			this.finalStep = 'ssn';
			this.doneList = [];
			this.data ={
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
					]
				},
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
					]
				},
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
					]
				},
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
					]
				},
				"account_created": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]
				},
				"welcome_back": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#prequal_submit",
							"event" : "click",
						}
					]
				},
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
					]
				},
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
					]
				},
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
					]
				},
				"discount": {
					"actions":[
						{
							"type"  : "TRIGGER_EVENT",
							"selector" : "#want_discount",
							"event" : "click",
						}
					]
				},

			};
			this.setUpListeners()
		}
		get currentStep(){
			return  location.pathname.replace('/','');
		}

		get steps(){
			return Object.keys(this.data);
		}

		get isFullapp(){
			return this.steps.indexOf(this.currentStep)>=this.steps.indexOf('account_created');
		}

		get availableSteps(){
			let steps = this.steps;
			if(this.isFullapp){
				return steps.slice(steps.indexOf(this.currentStep)+1,steps.length)
			}
			return steps.slice(steps.indexOf(this.currentStep)+1,steps.indexOf('activate')+1);
		}

		setUpListeners(){
			chrome.runtime.onMessage.addListener((request, sender, sendResponse)=> {
				console.log(sender.tab ? "from a content script:" + sender.tab.url :"from the extension" , request);
				if(request.name && request.name == 'is_fullapp'){
					console.log('availableSteps',this.availableSteps);
					sendResponse({is_fullapp:this.isFullapp,availableSteps:this.availableSteps})
				}
				if(request.name && request.name=='RUN_TEST'){
					this.finalStep = request.data.last_step;
					this.data = request.data.testUserData;
					console.log(request.data );

					if(this.steps.indexOf(this.finalStep ) < this.steps.indexOf(this.currentStep)){
						console.log(`${this.finalStep} has been passed,please select another`);
					}else{
						this.startLoop()
					}
				}

			});
		}

		randomInt (from,to){
			return Math.floor(from + Math.random() * to).toString();
		}
		applyActions(step,cb){
			var actionsCount =this.data[step].actions.length;
			this.data[step].actions.forEach((action,index)=>{
				let _this  = this;
				(function(action,index) {
					setTimeout(()=> {
						if(action.timeout){
							console.log(" action has timeout")
							setTimeout( () => {
								if(action.type == 'UPDATE_VALUE'){
									_this.executeInsideContentScope(`$('${action.selector}').val('${action.value}')`);
								}
								if(action.type == 'TRIGGER_EVENT'){
									_this.executeInsideContentScope(`$('${action.selector}').trigger('${action.event}')`);
								}
								if( (index + 1) == actionsCount){
										cb();
								}
							}, action.timeout);
						}else{
							console.log(" action has not timeout")

							if(action.type == 'UPDATE_VALUE'){
								_this.executeInsideContentScope(`$('${action.selector}').val('${action.value}')`);
							}
							if(action.type == 'TRIGGER_EVENT'){
								_this.executeInsideContentScope(`$('${action.selector}').trigger('${action.event}')`);
							}
							if( (index + 1) == actionsCount){
									cb();
							}
						}
					},index*300);
				})(action,index);
			})
		}
		executeInsideContentScope(execution){
			var script = document.createElement('script');
			script.id = 'tmpScript';
			script.appendChild(document.createTextNode(execution));
			(document.body || document.head || document.documentElement).appendChild(script);
			script.remove();
		}
		startLoop (){
			var interval =  setTimeout( () => {
				if(!this.data[this.currentStep] || this.steps.indexOf(this.finalStep ) < this.steps.indexOf(this.currentStep)) {
					clearTimeout(interval);
					return;
				};
				console.log(this.doneList);
						console.log(this.currentStep);
				if(this.doneList.indexOf(this.currentStep)==-1){
					this.doneList.push(this.currentStep);
					this.applyActions(this.currentStep,()=>{
						this.startLoop();
					});
				}else{
					this.startLoop();

				}
			},1000);
		}
	}
		var instance = new FLowRunner();
}
