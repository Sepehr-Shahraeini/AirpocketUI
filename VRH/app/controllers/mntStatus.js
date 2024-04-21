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
    $scope.btn_coming_add = {
        text: '',
        type: 'default',
        icon: 'plus',
        width: 35,
        onClick: function (e) {
            $scope.popup_tasks_visible = true;
            
        }

    };

    $scope.btn_coming_remove = {
        text: '',
        type: 'danger',
        icon: 'close',
        width: 35,
        onClick: function (e) {

          
        }

    };

     $scope.btn_ad_add = {
        text: '',
        type: 'default',
        icon: 'plus',
        width: 35,
         onClick: function (e) {
             $scope.popup_ad_visible = true;
            
        }

    };

    $scope.btn_ad_remove = {
        text: '',
        type: 'danger',
        icon: 'close',
        width: 35,
        onClick: function (e) {

          
        }

    };

   $scope.btn_eng1 = {
        text: '',
       type: 'default',
        icon: 'default',
        width: 15,
        onClick: function (e) {
            $scope.popup_eng_visible = true;
          
        }

    };

   $scope.btn_eng2 = {
        text: '',
        type: 'default',
       icon: 'default',
        width: 15,
        onClick: function (e) {

            $scope.popup_eng_visible = true;
        }

    };

    /////////////////////////////
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


    $scope.txt_firstht = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.dt_firstHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "",
        }
    }


    $scope.txt_secondHT = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.dt_secondHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "",
        }
    }


    $scope.txt_thirdHT = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.dt_thirdHt = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "",
        }
    }

    $scope.num_defects = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.num_firstDue = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.dt_defectsUpdate = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_engModel = {
        bindingOptions: {
            value: "",
        }
    }
    $scope.num_engSerial = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_cat = {
        bindingOptions: {
            value: "",
        }
    }
    $scope.txt_taskChk = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_tasks = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_tasksEstimated = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_tasksRemaining = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_subject = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_adsb = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.txt_part = {
        bindingOptions: {
            value: "",
        }
    }

    $scope.dt_taskUpdate = {
        type: 'date',
        displayFormat: "yyyy-MMM-dd",
        bindingOptions: {
            value: "",
        }
    }

    /////////////////////////////////////

    $scope.dg_coming_columns = [


        {
            cellTemplate: function (container, options) {
                $("<div style='text-align:center'/>")
                    .html(options.rowIndex + 1)
                    .appendTo(container);
            }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'left', allowResizing: false, cssClass: 'rowHeader'
        },




        { dataField: 'Check', caption: 'Check', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: 'Remaining', caption: 'Remaining Hour', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: 'Remaining', caption: 'Task', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, minWidth: 250 },
        { dataField: 'Estimated', caption: 'Estimated Working Hour', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 250 },



    ];


    $scope.dg_coming_selected = null;
    $scope.dg_coming_instance = null;
    $rootScope.dg_coming_ds = null;
    $scope.dg_coming = {



        wordWrapEnabled: true,
        rowAlternationEnabled: false,
        headerFilter: {
            visible: false
        },
        filterRow: {
            visible: true,
            showOperationChooser: true,
        },
        showRowLines: true,
        showColumnLines: true,
        sorting: { mode: 'none' },

        noDataText: '',

        allowColumnReordering: true,
        allowColumnResizing: true,
        scrolling: { mode: 'infinite' },
        paging: { pageSize: 100 },
        showBorders: true,
        selection: { mode: 'single' },

        columnAutoWidth: false,
        height: $(window).height() - 250,

        columns: $scope.dg_coming_columns,
        onContentReady: function (e) {
            if (!$scope.dg_coming_instance)
                $scope.dg_coming_instance = e.component;

        },

        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];


            if (!data) {
                $scope.dg_coming_selected = null;
            }
            else
                $scope.dg_coming_selected = data;


        },

        bindingOptions: {
            dataSource: 'dg_coming_ds'
        },
        columnChooser: {
            enabled: false
        },

    };


    $scope.dg_ad_columns = [


        {
            cellTemplate: function (container, options) {
                $("<div style='text-align:center'/>")
                    .html(options.rowIndex + 1)
                    .appendTo(container);
            }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'left', allowResizing: false, cssClass: 'rowHeader'
        },




        { dataField: 'Check', caption: 'AD/SB Ref', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: 'Remaining', caption: 'Subject', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, minWidth: 200 },
        { dataField: 'Estimated', caption: 'Estimated Working Hour', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 250 },
        { dataField: 'Estimated', caption: 'Due Date', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: 'Estimated', caption: 'Remaining Day', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 250 },



    ];

   

    $scope.dg_ad_selected = null;
    $scope.dg_ad_instance = null;
    $rootScope.dg_ad_ds = null;
    $scope.dg_ad = {



        wordWrapEnabled: true,
        rowAlternationEnabled: false,
        headerFilter: {
            visible: false
        },
        filterRow: {
            visible: true,
            showOperationChooser: true,
        },
        showRowLines: true,
        showColumnLines: true,
        sorting: { mode: 'none' },

        noDataText: '',

        allowColumnReordering: true,
        allowColumnResizing: true,
        scrolling: { mode: 'infinite' },
        paging: { pageSize: 100 },
        showBorders: true,
        selection: { mode: 'single' },

        columnAutoWidth: false,
        height: $(window).height() - 250,

        columns: $scope.dg_ad_columns,
        onContentReady: function (e) {
            if (!$scope.dg_ad_instance)
                $scope.dg_ad_instance = e.component;

        },

        onRowClick: function (e) {



        },

        onRowPrepared: function (e) {


        },


        onCellPrepared: function (e) {

        },

        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];


            if (!data) {
                $scope.dg_ad_selected = null;
            }
            else
                $scope.dg_ad_selected = data;


        },

        bindingOptions: {
            dataSource: 'dg_ad_ds'
        },
        columnChooser: {
            enabled: false
        },

    };


    $scope.dg_eng_part_columns = [


        {
            cellTemplate: function (container, options) {
                $("<div style='text-align:center'/>")
                    .html(options.rowIndex + 1)
                    .appendTo(container);
            }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'left', allowResizing: false, cssClass: 'rowHeader'
        },




        { dataField: '', caption: 'Eng. Paart', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, minWidth: 100 },
        {
            caption: 'Life Time Limit',
            alignment: 'center',
            columns: [
                { dataField: '', caption: 'CAT A', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 150 },
                { dataField: '', caption: 'CAT B', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 150 },
                { dataField: '', caption: 'CAT C', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 150 },
            ]
        },
        { dataField: '', caption: 'Remaining Cycle', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },



    ];



    $scope.dg_eng_part_selected = null;
    $scope.dg_eng_part_instance = null;
    $rootScope.dg_eng_part_ds = null;
    $scope.dg_eng_part = {



        wordWrapEnabled: true,
        rowAlternationEnabled: false,
        headerFilter: {
            visible: false
        },
        filterRow: {
            visible: true,
            showOperationChooser: true,
        },
        showRowLines: true,
        showColumnLines: true,
        sorting: { mode: 'none' },

        noDataText: '',

        allowColumnReordering: true,
        allowColumnResizing: true,
        scrolling: { mode: 'infinite' },
        paging: { pageSize: 100 },
        showBorders: true,
        selection: { mode: 'single' },

        columnAutoWidth: false,
        height: ($(window).height() - 230) / 2,

        columns: $scope.dg_eng_part_columns,
        onContentReady: function (e) {
            if (!$scope.dg_eng_part_instance)
                $scope.dg_eng_part_instance = e.component;

        },

       
        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];


            if (!data) {
                $scope.dg_eng_part_selected = null;
            }
            else
                $scope.dg_eng_part_selected = data;


        },

        bindingOptions: {
            dataSource: 'dg_eng_part_ds'
        },
        columnChooser: {
            enabled: false
        },

    };


    $scope.dg_eng_ad_columns = [


        {
            cellTemplate: function (container, options) {
                $("<div style='text-align:center'/>")
                    .html(options.rowIndex + 1)
                    .appendTo(container);
            }, name: 'row', caption: '#', width: 50, fixed: true, fixedPosition: 'left', allowResizing: false, cssClass: 'rowHeader'
        },




        { dataField: '', caption: 'AD/SB', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, minWidth: 100 },
        { dataField: '', caption: 'Description', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: '', caption: 'Remark', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        { dataField: '', caption: 'Due Date', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
        {
            caption: 'Remaining',
            alignment: 'center',
            columns: [
                { dataField: '', caption: 'Day', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },
                { dataField: '', caption: 'Cycle', allowResizing: true, alignment: 'center', dataType: 'string', allowEditing: false, width: 200 },

            ]
        },



    ];



    $scope.dg_eng_ad_selected = null;
    $scope.dg_eng_ad_instance = null;
    $rootScope.dg_eng_ad_ds = null;
    $scope.dg_eng_ad = {



        wordWrapEnabled: true,
        rowAlternationEnabled: false,
        headerFilter: {
            visible: false
        },
        filterRow: {
            visible: true,
            showOperationChooser: true,
        },
        showRowLines: true,
        showColumnLines: true,
        sorting: { mode: 'none' },

        noDataText: '',

        allowColumnReordering: true,
        allowColumnResizing: true,
        scrolling: { mode: 'infinite' },
        paging: { pageSize: 100 },
        showBorders: true,
        selection: { mode: 'single' },

        columnAutoWidth: false,
        height: ($(window).height() - 230) / 2,

        columns: $scope.dg_eng_ad_columns,
        onContentReady: function (e) {
            if (!$scope.dg_eng_ad_instance)
                $scope.dg_eng_ad_instance = e.component;

        },

        onSelectionChanged: function (e) {
            var data = e.selectedRowsData[0];


            if (!data) {
                $scope.dg_eng_ad_selected = null;
            }
            else
                $scope.dg_eng_ad_selected = data;


        },

        bindingOptions: {
            dataSource: 'dg_eng_ad_ds'
        },
        columnChooser: {
            enabled: false
        },

    };


    /////////////////////////////

    $scope.popup_eng_visible = false;
    $scope.popup_eng = {

        fullScreen: true,
        showTitle: true,
        dragEnabled: true,
        toolbarItems: [

            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) {



                        $scope.popup_eng_visible = false;
                    }
                }, toolbar: 'bottom'
            },


        ],
        visible: false,

        closeOnOutsideClick: false,

        bindingOptions: {
            visible: 'popup_eng_visible',
            'toolbarItems[0].visible': 'btn_duties_visible',
            'toolbarItems[1].visible': 'btn_crewlist_visible',

        }
    };

    $scope.popup_tasks_visible = false;
    $scope.popup_tasks = {

        fullScreen: false,
        showTitle: true,
        dragEnabled: true,
        height: 600,
        width: 600,
        toolbarItems: [

            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) {



                        $scope.popup_tasks_visible = false;
                    }
                }, toolbar: 'bottom'
            },


        ],
        visible: false,

        closeOnOutsideClick: false,
        bindingOptions: {
            visible: 'popup_tasks_visible',
            'toolbarItems[0].visible': 'btn_duties_visible',
            'toolbarItems[1].visible': 'btn_crewlist_visible',

        }
    };

    $scope.popup_ad_visible = false;
    $scope.popup_ad = {

        fullScreen: false,
        showTitle: true,
        dragEnabled: true,
        height: 600,
        width: 600,
        toolbarItems: [

            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) {



                        $scope.popup_ad_visible = false;
                    }
                }, toolbar: 'bottom'
            },


        ],
        visible: false,

        closeOnOutsideClick: false,
        bindingOptions: {
            visible: 'popup_ad_visible',
            'toolbarItems[0].visible': 'btn_duties_visible',
            'toolbarItems[1].visible': 'btn_crewlist_visible',

        }
    };

    $scope.popup_cat_visible = false;
    $scope.popup_cat = {

        fullScreen: false,
        showTitle: true,
        dragEnabled: true,
        height: 600,
        width: 600,
        toolbarItems: [

            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) {



                        $scope.popup_cat_visible = false;
                    }
                }, toolbar: 'bottom'
            },


        ],
        visible: false,

        closeOnOutsideClick: false,
        bindingOptions: {
            visible: 'popup_cat_visible',
            'toolbarItems[0].visible': 'btn_duties_visible',
            'toolbarItems[1].visible': 'btn_crewlist_visible',

        }
    };

     $scope.popup_adsb_visible = false;
    $scope.popup_adsb = {

        fullScreen: false,
        showTitle: true,
        dragEnabled: true,
        height: 680,
        width: 600,
        toolbarItems: [

            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) {



                        $scope.popup_adsb_visible = false;
                    }
                }, toolbar: 'bottom'
            },


        ],
        visible: false,

        closeOnOutsideClick: false,
        bindingOptions: {
            visible: 'popup_adsb_visible',
            'toolbarItems[0].visible': 'btn_duties_visible',
            'toolbarItems[1].visible': 'btn_crewlist_visible',

        }
    };



}]);


