//=============================================================================
// Rooge_Mouse_Disabling.js
// ----------------------------------------------------------------------------
// (C)2021 1strooge (rooge)
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2021/09/05 
//=============================================================================

//=============================================================================
 /*: 
 * @target MZ
 * @plugindesc Deactivate the mouse function.
 * @author Rooge
 * @help Rooge Mouse Disabling (version 1.0.0) 
 * This plugin only deactivate the mouse function.
 * Free for commercial or non commercial use.
 * Credit as Rooge is appreciated but is not necessary.
  */
//=============================================================================

TouchInput.initialize = function() {
    this.clear();
//  this._setupEventHandlers();
};

TouchInput._onMouseDown = function(event) {
	
};

document.body.style.cursor = 'none';