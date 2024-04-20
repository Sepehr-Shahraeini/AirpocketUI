'use strict';
app.controller('mntStatusController', ['$scope', '$location', 'qaService', 'authService', '$routeParams', '$rootScope', '$window', '$sce', 'qahService', function ($scope, $location, qaService, authService, $routeParams, $rootScope, $window, $sce, qahService) {
    $scope.selectedTabIndex = -1;
    $scope.selectedTabId = null;
    $scope.tabs = [
        { text: "RBA", id: 'rba' },
        { text: "RBB", id: 'rbb' },
        { text: "RBC", id: 'rbc' },
    ];

    $scope.tabs_options = {
        scrollByContent: true,
        showNavButtons: true,


        onItemClick: function (arg) {

        },
        onItemRendered: function (e) {
            $scope.selectedTabIndex = -1;
            $scope.selectedTabIndex = 0;
        },
        bindingOptions: {
            //visible: 'tabsdatevisible',
            dataSource: { dataPath: "tabs", deep: true },
            selectedIndex: 'selectedTabIndex'
        }

    };
    $scope.$watch("selectedTabIndex", function (newValue) {
        try {
            $('.tabc').hide();
            var id = $scope.tabs[newValue].id;
            $scope.selectedTabId = id;
            $('#' + id).fadeIn();

            switch (id) {
                case 'rba':

                    break;

                case 'rbb':

                    break;

                case 'rbc':

                    break;

                default:
                    break;
            }
        }
        catch (e) {

        }
    });



    $scope.selectedStatusTabIndex = -1;
    $scope.selectedStatusTabId = null;
    $scope.statusTabs = [
        { text: "HT and LLP Status", id: 'llp' },
        { text: "Coming Check", id: 'coming' },
        { text: "AD/SB Status", id: 'ad' },
    ];

    $scope.statusTabs_options = {
        scrollByContent: true,
        showNavButtons: true,


        onItemClick: function (arg) {

        },
        onItemRendered: function (e) {
            $scope.selectedStatusTabIndex = -1;
            $scope.selectedStatusTabIndex = 0;
        },
        bindingOptions: {
            //visible: 'tabsdatevisible',
            dataSource: { dataPath: "statusTabs", deep: true },
            selectedIndex: 'selectedStatusTabIndex'
        }

    };
    $scope.$watch("selectedStatusTabIndex", function (newValue) {
        try {
            $('.tabst').hide();
            var id = $scope.statusTabs[newValue].id;
            $scope.selectedStatusTabId = id;
            $('#' + id).fadeIn();

            switch (id) {
                case 'llp':

                    break;

                case 'coming':

                    break;

                case 'ad':

                    break;

                default:
                    break;
            }
        }
        catch (e) {

        }
    });


    //////////////////////////////

    $scope.num_tfh = {
        bindingOptions: {
            value: "entity.tfh",
        }
    }

    $scope.num_tfc = {
        bindingOptions: {
            value: "entity.tfc",
        }
    }

    $scope.dt_update = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.dateUpdate",
        }
    }

    
    $scope.num_ldg = {
        bindingOptions: {
            value: "entity.ldg",
        }
    }

    $scope.dt_ldg = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.ldgDate",
        }
    }


     $scope.num_apu = {
        bindingOptions: {
            value: "entity.apu",
        }
    }

    $scope.dt_apu = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.apuDate",
        }
    }


    $scope.txt_firstHT = {
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.dt_firstHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.",
        }
    }


    $scope.txt_secondHT = {
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.dt_secondHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.",
        }
    }


    $scope.txt_thirdHT = {
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.dt_thirdHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.num_defects = {
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.num_firstDue = {
        bindingOptions: {
            value: "entity.",
        }
    }

    $scope.dt_defectsUpdate = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "entity.dateUpdate",
        }
    }


}]);


