
JLpushchart_lookuptable = function () {

  
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

  /* lookuptable by stacksize for all positions combos*/
  /* the array index (eg. '15') must match the value property of the button HTML element (eg. '15') and the name of the subfolders where the images are stored*/
  lookuptable = [];
  lookuptable['15'] = [];
  
  lookuptable['15'][UTG+UTG1] = ['15_utg_rfi.PNG','15_utgvsep3.PNG','15_utg12vsutg.PNG'];
  lookuptable['15'][UTG+UTG2] = ['15_utg_rfi.PNG','15_utgvsep3.PNG','15_utg12vsutg.PNG'];
  lookuptable['15'][UTG+LJ] = ['15_utg_rfi.PNG','15_utgvsep3.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG+HJ] = ['15_utg_rfi.PNG','15_utgvsep3.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG+CO] = ['15_utg_rfi.PNG','15_utgvsep3.PNG','15_covsutg.PNG'];
  lookuptable['15'][UTG+BTN] = ['15_utg_rfi.PNG','15_utgvsbtn.PNG','15_btnvsutg.PNG'];
  lookuptable['15'][UTG+SB] = ['15_utg_rfi.PNG','15_utgvssb.PNG','15_sbvsutg.PNG'];
  lookuptable['15'][UTG+BB] = ['15_utg_rfi.PNG','utgvsbb.PNG','15_bbvsutg.PNG'];

  lookuptable['15'][UTG1+UTG2] = ['15_utg1_rfi.PNG','15_u1vsep3.PNG','15_utg12vsutg.PNG'];
  lookuptable['15'][UTG1+LJ] = ['15_utg1_rfi.PNG','15_u1vsep3.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG1+HJ] = ['15_utg1_rfi.PNG','15_u1vsep3.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG1+CO] = ['15_utg1_rfi.PNG','15_u1vsep3.PNG','15_covsutg.PNG'];
  lookuptable['15'][UTG1+BTN] = ['15_utg1_rfi.PNG','15_u1vsbtn.PNG','15_btnvsutg.PNG'];
  lookuptable['15'][UTG1+SB] = ['15_utg1_rfi.PNG','15_u1vssb.PNG','15_sbvsutg.PNG'];
  lookuptable['15'][UTG1+BB] = ['15_utg1_rfi.PNG','15_u1vsbb.PNG','15_bbvsutg.PNG'];

  lookuptable['15'][UTG2+LJ] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG2+HJ] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_ljhjvsutg.PNG'];
  lookuptable['15'][UTG2+CO] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_covsutg.PNG'];
  lookuptable['15'][UTG2+BTN] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_btnvsutg.PNG'];
  lookuptable['15'][UTG2+SB] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_sbvsutg.PNG'];
  lookuptable['15'][UTG2+BB] = ['15_utg2_rfi.PNG','15_u2vsallin.PNG','15_bbvsutg.PNG'];

  lookuptable['15'][LJ+HJ] = ['15_lojack_rfi.PNG','15_ljvsallin.PNG','15_hjvslj.PNG'];
  lookuptable['15'][LJ+CO] = ['15_lojack_rfi.PNG','15_ljvsallin.PNG','15_covsljhj.PNG'];
  lookuptable['15'][LJ+BTN] = ['15_lojack_rfi.PNG','15_ljvsallin.PNG','15_btnvsljhj.PNG'];
  lookuptable['15'][LJ+SB] = ['15_lojack_rfi.PNG','15_ljvsallin.PNG','15_sbvsljhj.PNG'];
  lookuptable['15'][LJ+BB] = ['15_lojack_rfi.PNG','15_ljvsallin.PNG','15_bbvsljhj.PNG'];

  lookuptable['15'][HJ+CO] = ['15_hijack_rfi.PNG','15_hjvsallin.PNG','15_covsljhj.PNG'];
  lookuptable['15'][HJ+BTN] = ['15_hijack_rfi.PNG','15_hjvsallin.PNG','15_btnvsljhj.PNG'];
  lookuptable['15'][HJ+SB] = ['15_hijack_rfi.PNG','15_hjvsallin.PNG','15_sbvsljhj.PNG'];
  lookuptable['15'][HJ+BB] = ['15_hijack_rfi.PNG','15_hjvsallin.PNG','15_bbvsljhj.PNG'];

  lookuptable['15'][CO+BTN] = ['15_cutoff_rfi.PNG','15_covsallin.PNG','15_btnvsco.PNG'];
  lookuptable['15'][CO+SB] = ['15_cutoff_rfi.PNG','15_covsallin.PNG','15_sbvsco.PNG'];
  lookuptable['15'][CO+BB] = ['15_cutoff_rfi.PNG','15_covsallin.PNG','15_bbvsco.PNG'];

  lookuptable['15'][BTN+SB] = ['15_btn_rfi.PNG','15_btnvsallin.PNG','15_sbvsbtn.PNG'];
  lookuptable['15'][BTN+BB] = ['15_btn_rfi.PNG','15_btnvsallin.PNG','15_bbvsbtn.PNG'];

  lookuptable['15'][SB+BB] = ['15_sb_rfi.PNG','15_bbvssballin.PNG','15_bbvssblimp.PNG','15_bbvssblimpjam.PNG','sblimpvsbbraise.PNG','sblimpvsbballin.PNG'];

  lookuptable['25'] = [];

  lookuptable['25'][UTG+UTG1] = ['25_utg.PNG','25_utg12vsUTG.PNG'];
  lookuptable['25'][UTG+UTG2] = ['25_utg.PNG','25_utg12vsUTG.PNG'];
  lookuptable['25'][UTG+LJ] = ['25_utg.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG+HJ] = ['25_utg.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG+CO] = ['25_utg.PNG','25_COvsUTG.PNG'];
  lookuptable['25'][UTG+BTN] = ['25_utg.PNG','25_BTNvsUTG.PNG'];
  lookuptable['25'][UTG+SB] = ['25_utg.PNG','25_SBvsUTG.PNG'];
  lookuptable['25'][UTG+BB] = ['25_utg.PNG','25_BBvsUTG.PNG'];
  
  lookuptable['25'][UTG1+UTG2] = ['25_utg1.PNG','25_utg12vsUTG.PNG'];
  lookuptable['25'][UTG1+LJ] = ['25_utg1.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG1+HJ] = ['25_utg1.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG1+CO] = ['25_utg1.PNG','25_COvsUTG.PNG'];
  lookuptable['25'][UTG1+BTN] = ['25_utg1.PNG','25_BTNvsUTG.PNG'];
  lookuptable['25'][UTG1+SB] = ['25_utg1.PNG','25_SBvsUTG.PNG'];
  lookuptable['25'][UTG1+BB] = ['25_utg1.PNG','25_BBvsUTG.PNG'];
  
  lookuptable['25'][UTG2+LJ] = ['25_utg2.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG2+HJ] = ['25_utg2.PNG','25_LJHJvsUTG.PNG'];
  lookuptable['25'][UTG2+CO] = ['25_utg2.PNG','25_COvsUTG.PNG'];
  lookuptable['25'][UTG2+BTN] = ['25_utg2.PNG','25_BTNvsUTG.PNG'];
  lookuptable['25'][UTG2+SB] = ['25_utg2.PNG','25_SBvsUTG.PNG'];
  lookuptable['25'][UTG2+BB] = ['25_utg2.PNG','25_BBvsUTG.PNG'];
  
  lookuptable['25'][LJ+HJ] = ['25_LJ.PNG','25_HJvsLJ.PNG'];
  lookuptable['25'][LJ+CO] = ['25_LJ.PNG','25_COvsLJHJ.PNG'];
  lookuptable['25'][LJ+BTN] = ['25_LJ.PNG','25_BTNvsLJHJ.PNG'];
  lookuptable['25'][LJ+SB] = ['25_LJ.PNG','25_SBvsLJHJ.PNG'];
  lookuptable['25'][LJ+BB] = ['25_LJ.PNG','25_BBvsLJHJ.PNG'];
  
  lookuptable['25'][HJ+CO] = ['25_HJ.PNG','25_COvsLJHJ.PNG'];
  lookuptable['25'][HJ+BTN] = ['25_HJ.PNG','25_BTNvsLJHJ.PNG'];
  lookuptable['25'][HJ+SB] = ['25_HJ.PNG','25_SBvsLJHJ.PNG'];
  lookuptable['25'][HJ+BB] = ['25_HJ.PNG','25_BBvsLJHJ.PNG'];
  
  lookuptable['25'][CO+BTN] = ['25_CO.PNG','25_BTNvsCO.PNG'];
  lookuptable['25'][CO+SB] = ['25_CO.PNG','25_SBvsCO.PNG'];
  lookuptable['25'][CO+BB] = ['25_CO.PNG','25_BBvsCO.PNG'];
  
  lookuptable['25'][BTN+SB] = ['25_BTN.PNG','25_SBvsBTN.PNG'];
  lookuptable['25'][BTN+BB] = ['25_BTN.PNG','25_BBvsBTN.PNG'];
  
  lookuptable['25'][SB+BB] = ['25_SB.PNG','25_SBrfi.PNG','25_BBvsSBlimp.PNG','25_BBvsSBraise.PNG','25_BBvsSBlimp_allin.PNG'];
  
  lookuptable['40'] = [];

  lookuptable['40'][UTG+UTG1] = ['40_utg.PNG','40_utg12vsUTG.PNG'];
  lookuptable['40'][UTG+UTG2] = ['40_utg.PNG','40_utg12vsUTG.PNG'];
  lookuptable['40'][UTG+LJ] = ['40_utg.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG+HJ] = ['40_utg.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG+CO] = ['40_utg.PNG','40_covsUTG.PNG'];
  lookuptable['40'][UTG+BTN] = ['40_utg.PNG','40_btnvsUTG.PNG'];
  lookuptable['40'][UTG+SB] = ['40_utg.PNG','40_sbvsutg.PNG'];
  lookuptable['40'][UTG+BB] = ['40_utg.PNG','40_bbvsutg.PNG'];
  
  lookuptable['40'][UTG1+UTG2] = ['40_utg1.PNG','40_utg12vsUTG.PNG'];
  lookuptable['40'][UTG1+LJ] = ['40_utg1.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG1+HJ] = ['40_utg1.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG1+CO] = ['40_utg1.PNG','40_covsUTG.PNG'];
  lookuptable['40'][UTG1+BTN] = ['40_utg1.PNG','40_btnvsUTG.PNG'];
  lookuptable['40'][UTG1+SB] = ['/40_utg1.PNG','40_sbvsutg.PNG'];
  lookuptable['40'][UTG1+BB] = ['40_utg1.PNG','40_bbvsutg.PNG'];
  
  lookuptable['40'][UTG2+LJ] = ['40_utg2.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG2+HJ] = ['40_utg2.PNG','40_ljhjvsUTG.PNG'];
  lookuptable['40'][UTG2+CO] = ['40_utg2.PNG','40_covsUTG.PNG'];
  lookuptable['40'][UTG2+BTN] = ['40_utg2.PNG','40_btnvsUTG.PNG'];
  lookuptable['40'][UTG2+SB] = ['40_utg2.PNG','40_sbvsutg.PNG'];
  lookuptable['40'][UTG2+BB] = ['40_utg2.PNG','40_bbvsutg.PNG'];
  
  lookuptable['40'][LJ+HJ] = ['40_lj.PNG','40_hjvslj.PNG'];
  lookuptable['40'][LJ+CO] = ['40_lj.PNG','40_covshjlj.PNG'];
  lookuptable['40'][LJ+BTN] = ['40_lj.PNG','40_btnvsljhj.PNG'];
  lookuptable['40'][LJ+SB] = ['40_lj.PNG','40_sbvsljhj.PNG'];
  lookuptable['40'][LJ+BB] = ['40_lj.PNG','40_bbvsljhj.PNG'];
  
  lookuptable['40'][HJ+CO] = ['40_hj.PNG','40_covshjlj.PNG'];
  lookuptable['40'][HJ+BTN] = ['40_hj.PNG','40_btnvsljhj.PNG'];
  lookuptable['40'][HJ+SB] = ['40_hj.PNG','40_sbvsljhj.PNG'];
  lookuptable['40'][HJ+BB] = ['40_hj.PNG','40_bbvsljhj.PNG'];
  
  lookuptable['40'][CO+BTN] = ['40_co.PNG','40_btnvsco.PNG'];
  lookuptable['40'][CO+SB] = ['40_co.PNG','40_sbvsco.PNG'];
  lookuptable['40'][CO+BB] = ['40_co.PNG','40_bbvsco.PNG'];
  
  lookuptable['40'][BTN+SB] = ['40_btn.PNG','40_sbvsbtn.PNG'];
  lookuptable['40'][BTN+BB] = ['40_btn.PNG','40_bbvsbtn.PNG'];
  
  lookuptable['40'][SB+BB] = ['40_sb.PNG','40_sbrfi.PNG','40_bbvssblimp.PNG','bbvssbraise.PNG'];
  
  lookuptable['75'] = [];

  lookuptable['75'][UTG+UTG1] = ['75_UTG.PNG','75_UTG12vsUTG.PNG'];
  lookuptable['75'][UTG+UTG2] = ['75_UTG.PNG','75_UTG12vsUTG.PNG'];
  lookuptable['75'][UTG+LJ] = ['75_UTG.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG+HJ] = ['75_UTG.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG+CO] = ['75_UTG.PNG','75_COvsUTG.PNG'];
  lookuptable['75'][UTG+BTN] = ['75_UTG.PNG','75_BTNvsUTG.PNG'];
  lookuptable['75'][UTG+SB] = ['75_UTG.PNG','75_SBvsUTG.PNG'];
  lookuptable['75'][UTG+BB] = ['75_UTG.PNG','75_BBvsUTG.PNG'];
  
  lookuptable['75'][UTG1+UTG2] = ['75_UTG1.PNG','75_UTG12vsUTG.PNG'];
  lookuptable['75'][UTG1+LJ] = ['75_UTG1.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG1+HJ] = ['75_UTG1.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG1+CO] = ['75_UTG1.PNG','75_COvsUTG.PNG'];
  lookuptable['75'][UTG1+BTN] = ['75_UTG1.PNG','75_BTNvsUTG.PNG'];
  lookuptable['75'][UTG1+SB] = ['75_UTG1.PNG','75_SBvsUTG.PNG'];
  lookuptable['75'][UTG1+BB] = ['75_UTG1.PNG','75_BBvsUTG.PNG'];
  
  lookuptable['75'][UTG2+LJ] = ['75_UTG2.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG2+HJ] = ['75_UTG2.PNG','75_LJHJvsUTG.PNG'];
  lookuptable['75'][UTG2+CO] = ['75_UTG2.PNG','75_COvsUTG.PNG'];
  lookuptable['75'][UTG2+BTN] = ['75_UTG2.PNG','75_BTNvsUTG.PNG'];
  lookuptable['75'][UTG2+SB] = ['75_UTG2.PNG','75_SBvsUTG.PNG'];
  lookuptable['75'][UTG2+BB] = ['75_UTG2.PNG','75_BBvsUTG.PNG'];
  
  lookuptable['75'][LJ+HJ] = ['75_LJ.PNG','75_HJvsLJ.PNG'];
  lookuptable['75'][LJ+CO] = ['75_LJ.PNG','75_COvsLJHJ.PNG'];
  lookuptable['75'][LJ+BTN] = ['75_LJ.PNG','75_BTNvsLJHJ.PNG'];
  lookuptable['75'][LJ+SB] = ['75_LJ.PNG','75_SBvsLJHJ.PNG'];
  lookuptable['75'][LJ+BB] = ['75_LJ.PNG','75_BBvsLJHJ.PNG'];
  
  lookuptable['75'][HJ+CO] = ['75_HJ.PNG','75_COvsLJHJ.PNG'];
  lookuptable['75'][HJ+BTN] = ['75_HJ.PNG','75_BTNvsLJHJ.PNG'];
  lookuptable['75'][HJ+SB] = ['75_HJ.PNG','75_SBvsLJHJ.PNG'];
  lookuptable['75'][HJ+BB] = ['75_HJ.PNG','75_BBvsLJHJ.PNG'];
  
  lookuptable['75'][CO+BTN] = ['75_CO.PNG','75_BTNvsCO.PNG'];
  lookuptable['75'][CO+SB] = ['75_CO.PNG','75_SBvsCO.PNG'];
  lookuptable['75'][CO+BB] = ['75_CO.PNG','75_BBvsCO.PNG'];
  
  lookuptable['75'][BTN+SB] = ['75_BTN.PNG','75_SBvsBTN.PNG'];
  lookuptable['75'][BTN+BB] = ['75_BTN.PNG','75_BBvsBTN.PNG'];
  
  lookuptable['75'][SB+BB] = ['75_SB.PNG','75_SB_RFI.PNG','75_BBvsSBlimp.PNG','75_BBvsSBraise.PNG'];
  
  lookuptable['100'] = [];

  lookuptable['100'][UTG+UTG1] = ['100_utg.PNG','100_utg1vsutg.PNG','100_utgvsutg1_3bet.PNG'];
  lookuptable['100'][UTG+UTG2] = ['100_utg.PNG','100_utg2vsutg.PNG','100_utgvsutg2_3bet.PNG'];
  lookuptable['100'][UTG+LJ] = ['100_utg.PNG','100_lovsutg.PNG','100_utgvslj_3bet.PNG'];
  lookuptable['100'][UTG+HJ] = ['100_utg.PNG','100_hjvsutg.PNG','100_utgvshj_3bet.PNG'];
  lookuptable['100'][UTG+CO] = ['100_utg.PNG','100_covsutg.PNG','100_utgvscobtn_3bet.PNG'];
  lookuptable['100'][UTG+BTN] = ['100_utg.PNG','100_btnvsutg.PNG','100_utgvscobtn_3bet.PNG'];
  lookuptable['100'][UTG+SB] = ['100_utg.PNG','100_sbvsutg.PNG','100_utgvssbbb_3bet.PNG'];
  lookuptable['100'][UTG+BB] = ['100_utg.PNG','100_bbvsutg.PNG','100_utgvssbbb_3bet.PNG'];
  
  lookuptable['100'][UTG1+UTG2] = ['100_utg1.PNG','100_utg2vsutg.PNG','100_utg1vsutg2_3bet.PNG'];
  lookuptable['100'][UTG1+LJ] = ['100_utg1.PNG','100_lovsutg.PNG','100_utg1vslj_3bet.PNG'];
  lookuptable['100'][UTG1+HJ] = ['100_utg1.PNG','100_hjvsutg1.PNG','100_utg1vshjco_3bet.PNG'];
  lookuptable['100'][UTG1+CO] = ['100_utg1.PNG','100_covsutg.PNG','100_utg1vshjco_3bet.PNG'];
  lookuptable['100'][UTG1+BTN] = ['100_utg1.PNG','100_btnvsutg1.PNG','100_utg1vsbtn_3bet.PNG'];
  lookuptable['100'][UTG1+SB] = ['100_utg1.PNG','100_sbvsutg.PNG','100_utg1vssbbb_3bet.PNG'];
  lookuptable['100'][UTG1+BB] = ['100_utg1.PNG','100_bbvsutg.PNG','100_utg1vssbbb_3bet.PNG'];
  
  lookuptable['100'][UTG2+LJ] = ['100_utg2.PNG','100_lovsutg2.PNG','100_utg2vslj_3bet.PNG'];
  lookuptable['100'][UTG2+HJ] = ['100_utg2.PNG','100_hjvsutg2.PNG','100_utg2vshj_3bet.PNG'];
  lookuptable['100'][UTG2+CO] = ['100_utg2.PNG','100_covsutg2.PNG','100_utg2vscobtn_3bet.PNG'];
  lookuptable['100'][UTG2+BTN] = ['100_utg2.PNG','100_btnvsutg2.PNG','100_utg2vscobtn_3bet.PNG'];
  lookuptable['100'][UTG2+SB] = ['100_utg2.PNG','100_sbvsutg2.PNG','100_utg2vssbbb_3bet.PNG'];
  lookuptable['100'][UTG2+BB] = ['100_utg2.PNG','100_bbvsutg2.PNG','100_utg2vssbbb_3bet.PNG'];
  
  lookuptable['100'][LJ+HJ] = ['100_lo.PNG','100_hjvslj.PNG','100_ljvshj_3bet.PNG'];
  lookuptable['100'][LJ+CO] = ['100_lo.PNG','100_covslj.PNG','100_ljvsco_3bet.PNG'];
  lookuptable['100'][LJ+BTN] = ['100_lo.PNG','100_btnvslj.PNG','100_ljvsbtn_3bet.PNG'];
  lookuptable['100'][LJ+SB] = ['100_lo.PNG','100_sbvslj.PNG','100_ljvssb_3bet.PNG'];
  lookuptable['100'][LJ+BB] = ['100_lo.PNG','100_bbvslj.PNG','100_ljvsbb_3bet.PNG'];
  
  lookuptable['100'][HJ+CO] = ['100_hj.PNG','100_covshj.PNG','100_hjvsco_3bet.PNG'];
  lookuptable['100'][HJ+BTN] = ['100_hj.PNG','100_btnvshj.PNG','100_hjvsbtn_3bet.PNG'];
  lookuptable['100'][HJ+SB] = ['100_hj.PNG','100_sbvshj.PNG','100_hjvssb_3bet.PNG'];
  lookuptable['100'][HJ+BB] = ['100_hj.PNG','100_bbvshj.PNG','100_hjvsbb_3bet.PNG'];
  
  lookuptable['100'][CO+BTN] = ['100_co.PNG','100_btnvsco.PNG','100_covsbtnsb_3bet.PNG'];
  lookuptable['100'][CO+SB] = ['100_co.PNG','100_sbvsco.PNG','100_covsbtnsb_3bet.PNG'];
  lookuptable['100'][CO+BB] = ['100_co.PNG','100_bbvsco.PNG','100_covsbb_3bet.PNG'];
  
  lookuptable['100'][BTN+SB] = ['100_btn.PNG','100_sbvsbtn.PNG','100_btnvssbbb_3bet.PNG'];
  lookuptable['100'][BTN+BB] = ['100_btn.PNG','100_bbvsbtn.PNG','100_btnvssbbb_3bet.PNG'];
  
  lookuptable['100'][SB+BB] = ['100_sb.PNG','100_bbvssb.PNG','100_sblimpvsbbraise.PNG','100_sbvsbb_3bet.PNG'];

  return lookuptable

} ();

JLpushchart_output = function(navStates) {

        // deepcopy of of sub-array, simple assignment will reference it
        var lookupArray = JSON.parse(JSON.stringify(JLpushchart_lookuptable[navStates.stacksize.value][navStates.selectedPos.value + navStates.superSelectedPos.value]));
        document.getElementById("JLpushchart_output").innerHTML = "";        

        if (navStates.backwards) {
          lookupArray.reverse();
        }

        lookupArray.forEach(
          function myFunction(filename) {
           imgSRC = 'img/' + navStates.stacksize.value + '/' + filename;
           document.getElementById("JLpushchart_output").innerHTML += '<img src="' + imgSRC+ '" alt="' + imgSRC+ '" class="JLpushchart_responsive">';
          }
        )
}
