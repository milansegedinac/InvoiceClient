'use strict';

 angular.module('invoices', ['resource.invoice',
 	'angular-md5'])

 .controller('invoicesListCtrl', function (Invoice, $scope, $location, md5, $log) {
 	//postavljanje niza invoices u kodu
 	/*$scope.invoices = [
 	{
 		"id": 1,
 		"deleted": false,
 		"version": 0,
 		"suplierName": "Majstor za pivo",
 		"suplierAddress": "Zorza Klemansoa 18",
 		"supplierPib": "1232233",
 		"buyerName": "Home Brew INC",
 		"buyerAddress": "Skojevska 12",
 		"acountNumber": 1226458,
 		"date": 1169301600000,
 		"totalGoodsValue": 5000.0,
 		"totalServiceValue": 0.0,
 		"totalValue": 5000.0,
 		"totalRabate": 0.0,
 		"totalTax": 20.0,
 		"currency": "rsd",
 		"totalAmount": 5000.0,
 		"currencyDate": 1169301600000,
 		"invoiceItems": [
 		{
 			"id": 1,
 			"deleted": false,
 			"version": 0,
 			"orderNumber": 1,
 			"goodsName": "Hmelj",
 			"quantity": 3.0,
 			"measureUnit": "kilogram",
 			"pricePerUnit": 1000.0,
 			"amount": 3.0,
 			"rabatePercentage": 0.0,
 			"rabateAmount": 0.0,
 			"minusRabat": 0.0,
 			"totalTax": 20.0
 		},
 		{
 			"id": 2,
 			"deleted": false,
 			"version": 0,
 			"orderNumber": 2,
 			"goodsName": "Jecam",
 			"quantity": 2.0,
 			"measureUnit": "kilogram",
 			"pricePerUnit": 1000.0,
 			"amount": 2.0,
 			"rabatePercentage": 0.0,
 			"rabateAmount": 0.0,
 			"minusRabat": 0.0,
 			"totalTax": 20.0
 		}
 		]
 	}
 	];*/
 	//preuzimanje niza faktura sa servera
/* 	Invoice.query().$promise.then(function (data) {
 		$scope.invoices = data;
 	}, function (error) {
 		console.log(error);
 	});
*/
	$scope.invoices = Invoice.query();
	$log.info($scope.invoices.length);//0
	//kada smo kliknuli na red u tabeli prelazimo na stranicu za editovanje fakture sa zadatim id-om
 	$scope.insertOrEditInvoice = function (invoice) {
 		if(invoice){
 			$location.path('/invoice/'+invoice.id);
 		}
 		else{
			$location.path('/invoice/new');
 		}
 	}
 });
