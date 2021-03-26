
JLpushchart_nav = function () {

    /* numeric values for each poker positon; an addition of two positions will give an unique value for selecting combos and displaying the correct charts*/
    const UTG = 0;
    const UTG1 = 1;
    const UTG2 = 2;
    const LJ = 4;
    const HJ = 8;
    const CO = 16;
    const BTN = 32;
    const SB = 64;
    const BB = 128;
     
    let getStyle = function (className) {
        var cssText = "";
        var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
        for (var x = 0; x < classes.length; x++) {  
            if (classes[x].selectorText == className) {
                cssText += classes[x].cssText || classes[x].style.cssText;
            }         
        }
    return cssText;
    }
    
    let stackButtonClicked = function() {
        
        /* clicked button is already SELECTED  -> inverse order */         
        if (navStates.stacksize.id == this.getAttribute('id')) {
            navStates.backwards = !navStates.backwards;
            JLpushchart_output(navStates); 
            return
        };
        
        /* UNSELECTED button clicked -> claim SELECTED status */
        document.getElementById(navStates.stacksize.id).classList.remove('JLpushchart_selected');
        document.getElementById(navStates.stacksize.id).classList.add('JLpushchart_unselcted');
        this.classList.remove('JLpushchart_unselcted');
        this.classList.add('JLpushchart_selected');
        navStates.stacksize.id = this.getAttribute('id');
        navStates.stacksize.value = this.getAttribute('value');       
        JLpushchart_output(navStates);
    }
    
    let posButtonClicked = function() {
        
        let tmp1BTN;
        let tmp2BTN;
        let clickedId = this.getAttribute('id');        
        
        /* SUPERSELECTED button clicked -> cycle SELECTED to next position */
        if (navStates.superSelectedPos.id == clickedId) {
    
            /* SUPERSELECTED is lower than SELECTED (is to the left of)  */
            if (navStates.superSelectedPos.value < navStates.selectedPos.value ) {
    
                /*  SELECTED is BB -> override navStates.cycleMap and move SELECTED right off SUPERSELECTED */
                if (navStates.selectedPos.value == BB) {
                    document.getElementById(navStates.cycleMap[clickedId]).classList.remove('JLpushchart_unselcted');
                    document.getElementById(navStates.cycleMap[clickedId]).classList.add('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.remove('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.add('JLpushchart_unselcted');      
                    navStates.selectedPos.id = navStates.cycleMap[navStates.superSelectedPos.id];
                    navStates.selectedPos.value = navStates.id2value[navStates.selectedPos.id];
    
                /* cycle SELECTED one pip to the right according to navStates.cycleMap[]  */
                } else {
                    document.getElementById(navStates.cycleMap[navStates.selectedPos.id]).classList.remove('JLpushchart_unselcted');
                    document.getElementById(navStates.cycleMap[navStates.selectedPos.id]).classList.add('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.remove('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.add('JLpushchart_unselcted');     
                    navStates.selectedPos.id = navStates.cycleMap[navStates.selectedPos.id];
                    navStates.selectedPos.value = navStates.id2value[navStates.selectedPos.id];
                }
            
            /* SUPERSELECTED is greater than SELECTED (is to the right of) */
            } else {
                
                /*  SELECTED is next to SUPERSELECTED -> override navStates.cycleMap and move SELECTED to UTG */
                if (navStates.cycleMap[navStates.selectedPos.id] == navStates.superSelectedPos.id) {
                    document.getElementById(navStates.selectedPos.id).classList.remove('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.add('JLpushchart_unselcted');
                    document.getElementById('JLpushchart_utg').classList.remove('JLpushchart_unselcted');
                    document.getElementById('JLpushchart_utg').classList.add('JLpushchart_selected');
                    navStates.selectedPos.id = 'JLpushchart_utg';
                    navStates.selectedPos.value = UTG;
                
                /* cycle SELECTED one pip to the right according to navStates.cycleMap[] */
                } else {
                    document.getElementById(navStates.selectedPos.id).classList.remove('JLpushchart_selected');
                    document.getElementById(navStates.selectedPos.id).classList.add('JLpushchart_unselcted');
                    document.getElementById(navStates.cycleMap[navStates.selectedPos.id]).classList.remove('JLpushchart_unselcted');
                    document.getElementById(navStates.cycleMap[navStates.selectedPos.id]).classList.add('JLpushchart_selected');
                    navStates.selectedPos.id = navStates.cycleMap[navStates.selectedPos.id];
                    navStates.selectedPos.value = navStates.id2value[navStates.selectedPos.id ];
                }
            }
        JLpushchart_output(navStates);  
        return
        }
        
        /* SELECTED button clicked -> claim SUPERSELECTED status */
        if (navStates.selectedPos.id == clickedId) {
            tmp1BTN = document.getElementById(navStates.selectedPos.id)
            tmp1BTN.classList.remove('JLpushchart_selected');
            tmp1BTN.classList.add('JLpushchart_superselected');
            tmp2BTN = document.getElementById(navStates.superSelectedPos.id)
            tmp2BTN.classList.remove('JLpushchart_superselected');
            tmp2BTN.classList.add('JLpushchart_selected');
            navStates.superSelectedPos.id = tmp1BTN.getAttribute('id');
            navStates.superSelectedPos.value = navStates.id2value[navStates.superSelectedPos.id];
            navStates.selectedPos.id = tmp2BTN.getAttribute('id');
            navStates.selectedPos.value = navStates.id2value[navStates.selectedPos.id];   
            JLpushchart_output(navStates);         
            return
        }        
        
        /* UNSELECTED button clicked -> degrade and claim new SUPERSELECTED  */
        tmp1BTN = document.getElementById(navStates.selectedPos.id)
        tmp1BTN.classList.remove('JLpushchart_selected');
        tmp1BTN.classList.add('JLpushchart_unselcted');
        tmp2BTN = document.getElementById(navStates.superSelectedPos.id)
        tmp2BTN.classList.remove('JLpushchart_superselected');
        tmp2BTN.classList.add('JLpushchart_selected');
        this.classList.remove('JLpushchart_unselcted');
        this.classList.add('JLpushchart_superselected');
        navStates.superSelectedPos.id = clickedId;
        navStates.superSelectedPos.value = navStates.id2value[navStates.superSelectedPos.id];
        navStates.selectedPos.id = tmp2BTN.getAttribute('id');
        navStates.selectedPos.value = navStates.id2value[navStates.selectedPos.id];
        JLpushchart_output(navStates);  
    }

    /* First-In-First-Out mechanic for position button states, SUPER_SELECTED degrades do SELECTED before it gets UNSELECTED. */
    let navStates = { 
        backwards : false,
        stacksize : {
            id: "none",
            value: -1
        }, 
        selectedPos : {
            id: "none",
            value: -1
        }, 
        superSelectedPos : {
            id: "none",
            value: -1
        },
       
        /*translate HTML ID to numeric value of a poker position   */
        id2value : { 
            "JLpushchart_utg" : UTG,
            "JLpushchart_1" : UTG1,
            "JLpushchart_2" : UTG2,
            "JLpushchart_lj" : LJ,
            "JLpushchart_hj" : HJ,
            "JLpushchart_co" : CO,
            "JLpushchart_btn" : BTN,
            "JLpushchart_sb" : SB,
            "JLpushchart_bb" : BB
        },
       
        /* cycling to next positon when clicking on an already selected element */
        cycleMap : {
           "JLpushchart_utg" : "JLpushchart_1",
           "JLpushchart_1" : "JLpushchart_2",
           "JLpushchart_2" : "JLpushchart_lj",
           "JLpushchart_lj" : "JLpushchart_hj",
           "JLpushchart_hj" : "JLpushchart_co",
           "JLpushchart_co" : "JLpushchart_btn",
           "JLpushchart_btn" : "JLpushchart_sb",
           "JLpushchart_sb" : "JLpushchart_bb",
           "JLpushchart_bb" : "JLpushchart_utg"
        }
    }

    return {    

    initializeScript: function() {

        let buttonsHTML;
        let tmpCSS;
        
        /* initialize clickable HTML elements for stacksizes*/
        buttonsHTML = document.getElementById("JLpushchart_stacks").getElementsByTagName("button");

        for (var i = buttonsHTML.length - 1; i >= 0; i--) {

        /* check for initially selected element by CSS classs*/ 
        if (buttonsHTML[i].className.search("JLpushchart_selected") > -1 ) {
            navStates.stacksize.id = buttonsHTML[i].id;
            navStates.stacksize.value = parseInt(buttonsHTML[i].innerHTML);
        };

        /*  add click events for stacksizes  */
        buttonsHTML[i].addEventListener("click", stackButtonClicked);
        }

        if (navStates.stacksize.value == -1) {
            document.getElementById('JLpushchart_error').innerHTML = "HTML error: see console for details";
            throw "HTML error: Expecting a <button> tag of class 'JLpushchart_selected' during initialization of clickable HTML elements for stacksizes";
        }
    
        /* initialize of clickable HTML elements for positions*/
        buttonsHTML = document.getElementById("JLpushchart_positions").getElementsByTagName("button");

        for (var i = buttonsHTML.length - 1; i >= 0; i--) {

            /* check for initially selected element by CSS classs*/ 
            if (buttonsHTML[i].className.search("JLpushchart_selected") > -1 ) {
                navStates.selectedPos.id = buttonsHTML[i].id;
                navStates.selectedPos.value = navStates.id2value[buttonsHTML[i].id];
            };          

            /* check for initially super-selected element by CSS classs*/ 
            if (buttonsHTML[i].className.search("JLpushchart_superselected") > -1 ) {
                navStates.superSelectedPos.id = buttonsHTML[i].id;
                navStates.superSelectedPos.value = navStates.id2value[buttonsHTML[i].id];
            };          

            /*  add click events for positions  */
            buttonsHTML[i].addEventListener("click", posButtonClicked);

        }

        if (navStates.selectedPos == -1) {
            document.getElementById('JLpushchart_output').innerHTML = "HTML error: see console for details";
            throw "HTML error: Expecting a <button> tag of class 'JLpushchart_selected' during initialization of clickable HTML elements for positions";
        }   
        JLpushchart_output(navStates);      
    }}
} ();

document.addEventListener('DOMContentLoaded', JLpushchart_nav.initializeScript, false);