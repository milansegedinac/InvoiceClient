'use strict';

angular.module('invoice', [
	'resource.invoice',
	'ui.bootstrap',
	'invoiceItem',
	'resource.invoiceItem'])

.controller('invoiceCtrl', function (Invoice, $scope, $routeParams, $modal, $log, $location, InvoiceItem) {
	//ako pozivamo edit postojece fakture
	if($routeParams.invoiceId!='new'){
		//preuzimanje parametra iz URL
		var invoiceId = $routeParams.invoiceId;
		
		//preuzimanje fakure sa servera. Posto smo u Invoice factory rutu definisali kao '...invoice/:invoiceId' invoiceId ce se proslediti kao parametar rute na server 
		Invoice.get({'invoiceId':invoiceId}).$promise.then(function (data) {
			$scope.invoice = data;
		});
	}
	//ako kreiramo novu fakutru
	else{
		$scope.invoice = new Invoice();
		$scope.invoice.invoiceItems = [];
	}
	//funkcija koja otvara datepicker
	$scope.openDatepicker = function($event, opened) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope[opened] = true;
	};

	//modalni dijalog za stavku fakutre
	$scope.openModal = function (invoiceItem, size) {

		var modalInstance = $modal.open({
			templateUrl: 'views/invoice-item.html',
			controller: 'invoiceItemCtrl',
			size: size,
			resolve: {
				invoiceItem: function () {
					return invoiceItem;
				}
			}
		});
		modalInstance.result.then(function (data) {
			var invoiceItem = data.invoiceItem;
			//ako stavka fakture nema id i ako je akcija 'save' znaci da je nova i dodaje se u listu. ako ima, svakako se manja u listi
			if(!invoiceItem.id && data.action==='save'){
				$scope.invoice.invoiceItems.push(invoiceItem);				
			}
			//ako stavka treba da se obrise izbaci se iz niza
			if(data.action==='delete'){
				var index = $scope.invoice.invoiceItems.indexOf(invoiceItem);
				$scope.invoice.invoiceItems.splice(index, 1);
				//ako je stavka imala i id, treba da se obrise i na serveru (da li je to dobro?)
				if(invoiceItem.id){
					InvoiceItem.delete({invoiceItemId:invoiceItem.id});
				}
			}
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	//cuvanje izmena
	$scope.save = function () {
		if($scope.invoice.id){
			//zbog cega redirekcija ide na callback?
			$scope.invoice.$update({invoiceId:$scope.invoice.id},function () {
				$location.path('/invoiceList');
			});
		}
		else{
			$scope.invoice.$save(function () {
				$location.path('/invoiceList');
			});
		}
		$log.info("save");
	}

	$scope.delete = function () {
		if($scope.invoice.id){
			$scope.invoice.$delete({invoiceId:$scope.invoice.id}, function () {
				$location.path('invoiceList');
			});
		}
	}

});
