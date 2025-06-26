//=============================================================================
// VisuStella MZ - Button Common Events
// VisuMZ_4_ButtonCmnEvts.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ButtonCmnEvts = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ButtonCommonEvents = VisuMZ.ButtonCommonEvents || {};
VisuMZ.ButtonCommonEvents.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.10] [ButtonCommonEvents]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Button_Common_Events_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, there's only a few keys on your keyboard that perform any kind
 * of action when pressed on the map screen. This plugin allows you to bind
 * Common Events to various other keys to expand the keyboard's functionality.
 * Plugin Commands can be used during the middle of a playthrough to change up
 * which Common Events are bound to each key as well, allowing you, the game
 * dev, to have full control over which keys can be used during the map screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Functionality to bind Common Events to the number keys, alphabet keys,
 *   symbols, numpad, and more.
 * * Change which Common Events run during a playthrough.
 * * Clear Common Events from keys to remove any bindings.
 * * Show visible buttons on the screen to indicate which buttons can be
 *   pressed on the keyboard (or with the mouse on the screen).
 * * Apply icons to the visible buttons and change them over time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Compatibility Issues
 * ============================================================================
 *
 * This plugin will most likely have compatibility issues with anything that
 * alters keystrokes or makes use of them through a different manner. If you
 * are using another plugin that does something with keystrokes on the map
 * screen, the likelihood of clashing can occur if these plugins utilize the
 * same keystrokes and we will not be held accountable for that as it is
 * something within your power to change by simply picking different keys.
 * 
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * As of Options Core's version 1.26 update, which allows for key rebindings.
 * If key rebindings are enabled, then the A through Z and symbol keys will be
 * disabled from having common events being able to be bound to them in order
 * to ensure the key bindings will follow through.
 * 
 * The number keys for 1 through 9/0 can still bind common events to them. In
 * return, these keys CANNOT be rebinded in the Options Core scene for both the
 * keyboard and gamepad options. Keep this in mind if you wish to use Button
 * Common Events and Options Core with the rebinding option together in the
 * same RPG Maker MZ project.
 * 
 * ---
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the Plugin Parameters, you will see a list of all the keys that you can
 * bind to a Common Event. If that number is something other than 0, then the
 * number associated with it will be the Common Event that will run. If you
 * assign it to a Common Event ID that does not exist, you will get an error so
 * please be wary of that.
 *
 * You may also notice that some of the keys have in parenthesis a word like
 * (OK) or (Cancel) next to them. What this means is that those keys already
 * have a function assigned to them by the game. If you assign a Common Event
 * to these keys and the 'Forbid Default Bound Keys?' Plugin Parameter is set
 * to 'false', then the native function of the key will be removed in favor of
 * the Common Event you've assigned.
 *
 * Here is a list of the keys that already have a command assigned:
 *
 * Key - What they're assigned to
 *   - Q         - Assigned to PageUp
 *   - W         - Assigned to PageDown
 *   - Shift     - Assigned to Dash
 *   - Z         - Assigned to OK
 *   - X         - Assigned to Cancel
 *   - Space     - Assigned to OK
 *   - Left      - Assigned to moving left
 *   - Up        - Assigned to moving up
 *   - Right     - Assigned to moving right
 *   - Down      - Assigned to moving down
 *   - Insert    - Assigned to Cancel
 *   - Page Up   - Assigned to PageUp
 *   - Page Down - Assigned to PageDown
 *   - Numpad 0  - Assigned to Cancel
 *   - Numpad 2  - Assigned to moving down
 *   - Numpad 4  - Assigned to moving left
 *   - Numpad 6  - Assigned to moving right
 *   - Numpad 8  - Assigned to moving up
 *
 * Once again, if you assign Common Events to these keys, the Common Event will
 * removing the binding the key had natively. However, this will only apply
 * while the player is in the field map and if the 'Forbid Default Bound Keys?'
 * Plugin Parameter is set to 'false'. Being inside of a menu or battle system
 * will restore the previously native functions.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Assign Button-Related Notetags ===
 * 
 * ---
 *
 * <Assign Button Common Event: id>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Makes this object selectable in the Item scene or Skill scene and have it
 *   become assignable to a button slot.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'id' with a number representing the ID of the Common Event you
 *   wish to assign to a button.
 * - This needs to be used together with the <Assign Button Slots: x, x, x>
 *   notetag in order to have any effect.
 *
 * ---
 *
 * <Assign Button Slot: x>
 * <Assign Button Slot: x, x, x>
 *
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Lists the keyboard keys that can be assigned a Common Event when pressed.
 * - If the object is originally usable (ie a Healing Potion or Healing Spell),
 *   the button assignment process will take priority and override it.
 * - Replace 'x' with a number or letter representing the button you wish to
 *   assign a Common Event to.
 * - This needs to be used together with the <Assign Button Common Event: id>
 *   notetag in order to have any effect.
 * - The choices that become available will be listed in the order found in
 *   this notetag.
 * - Forbidden, non-existent, and non-valid keys will be filtered out of this
 *   list and cannot be assigned a Common Event.
 * 
 *   Example:
 * 
 *   <Assign Button Slot: A, S, D, F>
 *   <Assign Button Slot: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0>
 *
 * ---
 * 
 * <Assign Button Show Cost>
 * 
 * - Used for: Skill Notetags
 * - If a skill can be assigned, show the cost of the skill if it has one.
 * - Using this assigned button will not pay the cost. If you want to the pay
 *   the cost, use the following notetag.
 * 
 * ---
 * 
 * <Assign Button Pay Cost>
 * 
 * - Used for: Skill Notetags
 * - If a skill can be assigned, show the cost of the skill if it has one and
 *   pays the cost when pressed and activated.
 *   - If the cost cannot be paid, due to lacking resources or other reasons,
 *     then the button will be disabled.
 * - The actor that will pay the cost will be the actor that the button was
 *   assigned from in the first place.
 *   - As such, if the actor is not in the party, this will also be disabled.
 * 
 * ---
 * 
 * <Assign Button Show Quantity>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - If an item, weapon, or armor can be assigned, show the quantity of the
 *   party has of that item, weapon, or armor.
 * - Using this assigned button will not consume the item, weapon, or armor.
 *   If you want to consume the quantity, use the following notetag.
 * 
 * ---
 * 
 * <Assign Button Consume Quantity>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - If an item, weapon, or armor can be assigned, show the quantity of the
 *   party has of that item, weapon, or armor. This will also consume one of
 *   the item, weapon, or armor when pressed.
 *   - This also applies to Key Items. If you don't want Key Items to be
 *     consumed but have their quantity displayed, use the previous notetag.
 *   - If the cost cannot be paid, due to lacking resources or other reasons,
 *     then the button will be disabled.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Change Button Common Event
 * - Change the Common Event bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to change.
 *
 *   Common Event ID:
 *   - Change the Common Event bound to specific key(s).
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 *
 * ---
 * 
 * System: Change Visibility
 * - Determines whether or not buttons are shown on screen.
 * 
 *   Visible?
 *   - Show or hide the visible Button Common Events on the screen?
 * 
 * ---
 *
 * System: Clear All Button Common Events
 * - Clears Common Events from all keys.
 *
 * ---
 *
 * System: Clear Button Common Event
 * - Clears any Common Events bound to specific key(s).
 *
 *   Keys:
 *   - Select which key(s) to clear.
 *
 * ---
 *
 * System: Clear Common Event ID(s)
 * - Clears any keys with the marked Common Event ID(s).
 * 
 *   Common Event ID(s):
 *   - Clears any keys with the marked Common Event ID(s).
 *
 * ---
 * 
 * System: Run Stored Button Common Event
 * - Run the Common Event stored on a specific key.
 * 
 *   Target Key:
 *   - Run the Common Event stored in this key.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the Plugin Parameters for this plugin. They manage all the key
 * bindings and which Common Events are linked by default to which keys. These
 * links are not permanent as they can be changed/cleared with Plugin Commands.
 *
 * ---
 *
 * Restriction
 * 
 *   Forbid Default Bound Keys?:
 *   - Forbid already bound input keys?
 *   - Allowing them may cause clashes.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show On Screen?:
 *   - Show buttons on screen by default?
 * 
 *   Change Tone on Hover?:
 *   - Change the tone of the button on hover?
 * 
 *   Hover Tone:
 *   - Tone settings upon hovering.
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Button Width:
 *   - The width of the visible button on screen.
 * 
 *   Button Height:
 *   - The height of the visible button on screen.
 * 
 *   Picture Filename:
 *   - Picture used as a button background.
 *   - If left empty, ignore drawing a picture.
 * 
 *   Undeclared Icons:
 *   - If a Button Common Event doesn't have an assigned icon,
 *     use one of these instead.
 * 
 *   JS: Draw Data:
 *   - JavaScript code that determines how to draw the visible button.
 *
 * ---
 * 
 * Button Positions
 * 
 *   JS: Bottom Point:
 *   JS: Above Point:
 *   JS: Left Point:
 *   JS: Right Point:
 *   - The X and Y coordinates for where the specific side buttons start.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Assignment Settings
 * ============================================================================
 *
 * The Assignment Settings Plugin Parameters apply to whenever you use the
 * Assign Button-Related Notetags in-game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Instructions:
 *   - The instruction text that appears when assigning a Common Event to
 *     a button.
 *
 * ---
 *
 * Window
 * 
 *   Key Align:
 *   - Text alignment for the button assignment window?
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the button assignment window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Cost Settings
 * ============================================================================
 *
 * Adjust the settings involving button press costs.
 *
 * ---
 *
 * Item Cost Offsets:
 * 
 *   Offset X:
 *   - Offsets the cost x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cost y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Skill Cost Offsets:
 * 
 *   Offset X:
 *   - Offsets the cost x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cost y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Misc Settings:
 * 
 *   Disabled Opacity:
 *   - Opacity used for buttons that are unable to meet cost requirements.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Key Settings
 * ============================================================================
 *
 * The Key Settings allow you to adjust the Common Event you want to bind to
 * each keyboard key along with whether or not you want the said key to appear
 * visibly on the screen.
 *
 * ---
 *
 * Key Settings
 * 
 *   Common Event ID:
 *   - The default common event tied to this key.
 *   - Leave it at 0 for no common event.
 *
 * ---
 *
 * Visible Buttons
 * 
 *   Show Button?:
 *   - Show the button visibly on the screen?
 * 
 *   Requires Bind?:
 *   - If the button is shown, does it require a Common Event to be shown?
 * 
 *   Button Label:
 *   - What text do you want to display as the button label?
 * 
 *   Button Icon:
 *   - What icon do you want to show on this button?
 * 
 *   JS: Position:
 *   - The X and Y coordinates for where this button is positioned.
 *
 * ---
 * 
 * Custom Settings
 * 
 *   Custom Width:
 *   Custom Height:
 *   - Change the width/height of this button specifically.
 *   - Use 0 for the default size.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.10: May 15, 2025
 * * Bug Fixes!
 * ** When a common event is launched while the player is moving onto a below
 *    or above priority event with Player Touch or Event Touch, the event
 *    action would be skipped. This should no longer happen. Fix made by Arisu.
 * 
 * Version 1.09: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with Options Core's new key rebindings. This will
 *    impose some restrictions if you allow for key rebindings.
 * *** As of Options Core's version 1.26 update, which allows for key
 *     rebindings. If key rebindings are enabled, then the A through Z and
 *     symbol keys will be disabled from having common events being able to be
 *     bound to them in order to ensure the key bindings will follow through.
 * *** The number keys for 1 through 9/0 can still bind common events to them.
 *     In return, these keys CANNOT be rebinded in the Options Core scene for
 *     both the keyboard and gamepad options. Keep this in mind if you wish to
 *     use Button Common Events and Options Core with the rebinding option
 *     together in the same RPG Maker MZ project.
 * 
 * Version 1.08: June 13, 2024
 * * Bug Fixes!
 * ** Fixed a bug where certain buttons would not register properly. Fix made
 *    by Arisu.
 * 
 * Version 1.07: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a crash that would occur upon mouse click. Fix made by Arisu.
 * 
 * Version 1.06: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** Skill: <Assign Button Show Cost>
 * *** Skill: <Assign Button Pay Cost>
 * *** Items, Weapon, Armor: <Assign Button Show Quantity>
 * *** Items, Weapon, Armor: <Assign Button Consume Quantity>
 * **** Read the helpfile for more information.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Cost Settings
 * **** Adjust how costs are displayed for the plugin.
 * *** Parameters > Key Settings > Custom Settings > Custom Width
 * *** Parameters > Key Settings > Custom Settings > Custom Height
 * **** Allows buttons to have custom width and height.
 * 
 * Version 1.05: September 1, 2022
 * * Bug Fixes!
 * ** System: Run Stored Button Common Event plugin command should now be
 *    working properly. Fix made by Irina.
 * 
 * Version 1.04: January 20, 2022
 * * Feature Update!
 * ** Button Common Event key presses on top of below priority touch events
 *    will only be forbidden in the context of a common event assigned to the
 *    usual OK buttons instead. Update made by Arisu.
 * 
 * Version 1.03: February 12, 2021
 * * Bug Fixes!
 * ** Pressing a Button Common Event key while stepping onto a below priority
 *    touch event will no longer give priority to the Button Common Event. Fix
 *    made by Arisu.
 * 
 * Version 1.02: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When pressing Button Common Events with the keyboard, any visible buttons
 *    on the screen will also flash their color tone briefly to show that they
 *    are being pressed. This is only if the Hover Tone Plugin Parameter is
 *    enabled. Update made by Yanfly.
 * * New Features!
 * ** New Notetags Added by Yanfly!
 * *** <Assign Button Common Event: id>
 * *** <Assign Button Slot: x, x, x>
 * ** New Plugin Command added by Yanfly!
 * *** System: Clear Common Event ID(s)
 * **** Clears any keys with the marked Common Event ID(s).
 * *** System: Run Stored Button Common Event
 * **** Run the Common Event stored on a specific key.
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Assignment Settings
 * 
 * Version 1.01: December 4, 2020
 * * Feature Update!
 * ** Plugin Command "System: Change Button Common Event" can now use code for
 *    icons. You can insert $gameVariables.value(50) in it and it will use
 *    whichever number is stored inside it as an icon. Update made by Irina.
 *
 * Version 1.00: August 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeButtonCommonEvent
 * @text System: Change Button Common Event
 * @desc Change the Common Event bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to change.
 * @default []
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Change the Common Event bound to specific key(s).
 * @default 0
 *
 * @arg Icon:eval
 * @text Button Icon
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ButtonCommonEventsVisibility
 * @text System: Change Visibility
 * @desc Determines whether or not buttons are shown on screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the visible Button Common Events on the screen?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearAllButtonCommonEvents
 * @text System: Clear All Button Common Events
 * @desc Clears Common Events from all keys.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEvent
 * @text System: Clear Button Common Event
 * @desc Clears any Common Events bound to specific key(s).
 *
 * @arg Keys:arraystr
 * @text Keys
 * @type combo[]
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Select which key(s) to clear.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ClearButtonCommonEventID
 * @text System: Clear Common Event ID(s)
 * @desc Clears any keys with the marked Common Event ID(s).
 *
 * @arg CommonEventID:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Clears any keys with the marked Common Event ID(s).
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RunButtonCommonEvent
 * @text System: Run Stored Button Common Event
 * @desc Run the Common Event stored on a specific key.
 *
 * @arg Key:str
 * @text Target Key
 * @type combo
 * @option 0
 * @option 1
 * @option 2
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @option 7
 * @option 8
 * @option 9
 * @option 
 * @option A
 * @option B
 * @option C
 * @option D
 * @option E
 * @option F
 * @option G
 * @option H
 * @option I
 * @option J
 * @option K
 * @option L
 * @option M
 * @option N
 * @option O
 * @option P
 * @option Q
 * @option R
 * @option S
 * @option T
 * @option U
 * @option V
 * @option W
 * @option X
 * @option Y
 * @option Z
 * @option 
 * @option BACK_QUOTE (' ~)
 * @option MINUS (- _)
 * @option EQUALS (= +)
 * @option OPEN_BRACKET ([ {)
 * @option CLOSE_BRACKET (] })
 * @option BACK_SLASH (\ |)
 * @option SEMICOLON (; :)
 * @option QUOTE (' ")
 * @option COMMA (, <)
 * @option PERIOD (. >)
 * @option SLASH (/ ?)
 * @option 
 * @option SPACE
 * @option LEFT
 * @option UP
 * @option RIGHT
 * @option DOWN
 * @option INSERT
 * @option DELETE
 * @option HOME
 * @option END
 * @option PGUP
 * @option PGDN
 * @option 
 * @option NUMPAD0
 * @option NUMPAD1
 * @option NUMPAD2
 * @option NUMPAD3
 * @option NUMPAD4
 * @option NUMPAD5
 * @option NUMPAD6
 * @option NUMPAD7
 * @option NUMPAD8
 * @option NUMPAD9
 * @option
 * @option DECIMAL
 * @option ADD
 * @option SUBTRACT
 * @option MULTIPLY
 * @option DIVIDE
 * @desc Run the Common Event stored in this key.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ButtonCommonEvents
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Adjust the general settings for this plugin.
 * @default {"ForbidInputKeys:eval":"true","Buttons":"","ShowButtonsOnScreen:eval":"true","ChangeTone:eval":"true","HoverTone:eval":"[128, 128, 128, 0]","ButtonWidth:num":"60","ButtonHeight:num":"60","ButtonFilename:str":"","IconsUsed:arraynum":"[\"160\",\"161\",\"162\",\"163\",\"164\",\"165\"]","DrawJS:func":"\"// Declare Constants\\nconst w = this.width;\\nconst h = this.height;\\n\\n// Draw Background\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\\n\\n// Draw Picture\\nif (this.pictureBitmap()) {\\n    const picBitmap = this.pictureBitmap();\\n    const pw = picBitmap.width;\\n    const ph = picBitmap.height;\\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\\n}\\n\\n// Draw Icon\\nconst iconIndex = this.buttonIcon();\\nconst iconBitmap = ImageManager.loadSystem(\\\"IconSet\\\");\\nconst iw = ImageManager.iconWidth;\\nconst ih = ImageManager.iconHeight;\\nconst ix = (iconIndex % 16) * iw;\\nconst iy = Math.floor(iconIndex / 16) * ih;\\nconst jw = Math.floor(this.width / iw) * iw;\\nconst jh = Math.floor(this.height / ih) * ih;\\nconst jx = Math.floor((this.width - jw) / 2);\\nconst jy = Math.floor((this.height - jh) / 2);\\nthis.bitmap._context.imageSmoothingEnabled = false;\\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\\nthis.bitmap._context.imageSmoothingEnabled = true;\\n\\n// Draw Button Label\\nconst text = this.buttonLabel();\\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');\"","Positions":"","BottomPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\\nlet y = container.height - buttonHeight;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","AbovePointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\\nlet y = container.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","LeftPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\"","RightPointJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\n// Calculate Coordinates\\nlet x = container.width;\\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param Assign:struct
 * @text Assignment Settings
 * @type struct<Assign>
 * @desc Adjust the assignment settings for this plugin.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Cost:struct
 * @text Cost Settings
 * @type struct<Cost>
 * @desc Adjust the settings involving button press costs.
 * @default {"ItemOffsets":"","ItemOffsetX:num":"+0","ItemOffsetY:num":"+0","SkillOffsets":"","SkillOffsetX:num":"+0","SkillOffsetY:num":"+0","Misc":"","DisabledOpacity:num":"160"}
 *
 * @param NumberKeys
 * @text Number Keys
 *
 * @param KeyCode49:struct
 * @text Key: 1
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 0;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode50:struct
 * @text Key: 2
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode51:struct
 * @text Key: 3
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 2;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode52:struct
 * @text Key: 4
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 3;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode53:struct
 * @text Key: 5
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 4;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode54:struct
 * @text Key: 6
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 5;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode55:struct
 * @text Key: 7
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 6;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode56:struct
 * @text Key: 8
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 7;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode57:struct
 * @text Key: 9
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 8;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode48:struct
 * @text Key: 0
 * @parent NumberKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"true","ShowOnlyIfCePresent:eval":"false","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 9;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param LetterKeys
 * @text Letter Keys
 *
 * @param KeyCode65:struct
 * @text Key: A
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"A","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode66:struct
 * @text Key: B
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"B","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode67:struct
 * @text Key: C
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"C","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode68:struct
 * @text Key: D
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"D","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode69:struct
 * @text Key: E
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"E","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 2;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode70:struct
 * @text Key: F
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"F","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode71:struct
 * @text Key: G
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"G","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode72:struct
 * @text Key: H
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"H","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode73:struct
 * @text Key: I
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"I","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode74:struct
 * @text Key: J
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"J","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode75:struct
 * @text Key: K
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"K","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode76:struct
 * @text Key: L
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"L","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode77:struct
 * @text Key: M
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"M","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode78:struct
 * @text Key: N
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"N","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode79:struct
 * @text Key: O
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"O","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode80:struct
 * @text Key: P
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"P","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode81:struct
 * @text Key: Q (PgUp)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Q","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode82:struct
 * @text Key: R
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"R","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode83:struct
 * @text Key: S
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"S","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode84:struct
 * @text Key: T
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"T","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 4;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode85:struct
 * @text Key: U
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"U","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 6;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode86:struct
 * @text Key: V
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"V","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 3;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode87:struct
 * @text Key: W (PgDn)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"W","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode88:struct
 * @text Key: X (Cancel)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"X","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 1;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode89:struct
 * @text Key: Y
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Y","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 5;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode90:struct
 * @text Key: Z (OK)
 * @parent LetterKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Z","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 0;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param SymbolKeys
 * @text Symbol Keys
 *
 * @param KeyCode192:struct
 * @text Key: ` ~
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"~","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x - buttonWidth * 1;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode189:struct
 * @text Key: - _
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 10;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode187:struct
 * @text Key: = +
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = bottomPoint.x + buttonWidth * 11;\\nlet y = bottomPoint.y;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode219:struct
 * @text Key: [ {
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"[","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode221:struct
 * @text Key: ] }
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"]","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 11;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode220:struct
 * @text Key: \ |
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\\","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 12;\\nlet y = leftPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode186:struct
 * @text Key: ; :
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":";","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode222:struct
 * @text Key: ' "
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"\"","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 10;\\nlet y = leftPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode188:struct
 * @text Key: , <
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 7;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode190:struct
 * @text Key: . >
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 8;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode191:struct
 * @text Key: / ?
 * @parent SymbolKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"?","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = leftPoint.x + buttonWidth  * 9;\\nlet y = leftPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param MiscKeys
 * @text Misc Keys
 *
 * @param KeyCode32:struct
 * @text Key: Space (OK)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Space","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.x;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode37:struct
 * @text Key: Left (Left)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"<<","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 3;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode38:struct
 * @text Key: Up (Up)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"^","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode39:struct
 * @text Key: Right (Right)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":">>","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 1;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode40:struct
 * @text Key: Down (Down)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"v","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = container.width - buttonWidth   * 2;\\nlet y = container.height - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode45:struct
 * @text Key: Insert
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Ins","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode46:struct
 * @text Key: Delete
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Del","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 0;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode36:struct
 * @text Key: Home
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"Home","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode35:struct
 * @text Key: End
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"End","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 1;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode33:struct
 * @text Key: Page Up (PgUp)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgUp","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode34:struct
 * @text Key: Page Down (PgDn)
 * @parent MiscKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"PgDn","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = abovePoint.x + buttonWidth  * 2;\\nlet y = abovePoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param NumPadKeys
 * @text NumPad Keys
 *
 * @param KeyCode96:struct
 * @text Key: NumPad 0 (Cancel)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"0","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode97:struct
 * @text Key: NumPad 1
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"1","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode98:struct
 * @text Key: NumPad 2 (Down)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"2","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode99:struct
 * @text Key: NumPad 3
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"3","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 2;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode100:struct
 * @text Key: NumPad 4 (Left)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"4","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode101:struct
 * @text Key: NumPad 5
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"5","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode102:struct
 * @text Key: NumPad 6 (Right)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"6","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode103:struct
 * @text Key: NumPad 7
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"7","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode104:struct
 * @text Key: NumPad 8 (Up)
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"8","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode105:struct
 * @text Key: NumPad 9
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"9","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 0;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode110:struct
 * @text Key: NumPad .
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":".","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode107:struct
 * @text Key: NumPad +
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"+","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y + buttonHeight * 3;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode109:struct
 * @text Key: NumPad -
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"-","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 1;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode106:struct
 * @text Key: NumPad *
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"*","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 2;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param KeyCode111:struct
 * @text Key: NumPad /
 * @parent NumPadKeys
 * @type struct<KeySettings>
 * @desc Setup the Common Event settings for this key.
 * @default {"CommonEventID:num":"0","Buttons":"","ShowButton:eval":"false","ShowOnlyIfCePresent:eval":"true","ButtonText:str":"/","ButtonIcon:num":"0","PositionJS:func":"\"// Declare Constants\\nconst container = this;\\nconst buttonWidth = this.buttonWidth();\\nconst buttonHeight = this.buttonHeight();\\n\\nconst bottomPoint = this.bottomPoint();\\nconst abovePoint = this.abovePoint();\\nconst leftPoint = this.leftPoint();\\nconst rightPoint = this.rightPoint();\\n\\n// Calculate Coordinates\\nlet x = rightPoint.x - buttonWidth  * 3;\\nlet y = rightPoint.y - buttonHeight * 1;\\n\\n// Return Coordinates\\nreturn new Point(x, y);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param ForbidInputKeys:eval
 * @text Forbid Default Keys?
 * @parent Forbidden
 * @type boolean
 * @on Forbid
 * @off Allow
 * @desc Forbid already bound input keys?
 * Allowing them may cause clashes.
 * @default true
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButtonsOnScreen:eval
 * @text Show On Screen?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show buttons on screen by default?
 * @default true
 *
 * @param ChangeTone:eval
 * @text Change Tone on Hover?
 * @parent Buttons
 * @type boolean
 * @on Change Tone
 * @off Don't Change
 * @desc Change the tone of the button on hover?
 * @default true
 *
 * @param HoverTone:eval
 * @text Hover Tone
 * @parent ChangeTone:eval
 * @desc Tone settings upon hovering.
 * Format: [Red, Green, Blue, Gray]
 * @default [128, 128, 128, 0]
 *
 * @param ButtonWidth:num
 * @text Button Width
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The width of the visible button on screen.
 * @default 80
 *
 * @param ButtonHeight:num
 * @text Button Height
 * @parent Buttons
 * @type number
 * @min 1
 * @desc The height of the visible button on screen.
 * @default 80
 *
 * @param ButtonFilename:str
 * @text Picture Filename
 * @parent Buttons
 * @type file
 * @dir img/pictures/
 * @desc Picture used as a button background.
 * If left empty, ignore drawing a picture.
 * @default 
 *
 * @param IconsUsed:arraynum
 * @text Undeclared Icons
 * @parent Buttons
 * @type string[]
 * @desc If a Button Common Event doesn't have an assigned icon, use one of these instead.
 * @default ["160","161","162","163","164","165"]
 *
 * @param DrawJS:func
 * @text JS: Draw Data
 * @parent Buttons
 * @type note
 * @desc JavaScript code that determines how to draw the visible button.
 * @default "// Declare Constants\nconst w = this.width;\nconst h = this.height;\n\n// Draw Background\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nthis.bitmap.gradientFillRect(1, 1, w-2, h-2, c1, c2, true);\nthis.bitmap.strokeRect(1, 1, w-2, h-2, '#000000');\n\n// Draw Picture\nif (this.pictureBitmap()) {\n    const picBitmap = this.pictureBitmap();\n    const pw = picBitmap.width;\n    const ph = picBitmap.height;\n    this.bitmap.blt(picBitmap, 0, 0, pw, ph, 0, 0, w, h);\n}\n\n// Draw Icon\nconst iconIndex = this.buttonIcon();\nconst iconBitmap = ImageManager.loadSystem(\"IconSet\");\nconst iw = ImageManager.iconWidth;\nconst ih = ImageManager.iconHeight;\nconst ix = (iconIndex % 16) * iw;\nconst iy = Math.floor(iconIndex / 16) * ih;\nconst jw = Math.floor(this.width / iw) * iw;\nconst jh = Math.floor(this.height / ih) * ih;\nconst jx = Math.floor((this.width - jw) / 2);\nconst jy = Math.floor((this.height - jh) / 2);\nthis.bitmap._context.imageSmoothingEnabled = false;\nthis.bitmap.blt(iconBitmap, ix, iy, iw, ih, jx, jy, jw, jh);\nthis.bitmap._context.imageSmoothingEnabled = true;\n\n// Draw Button Label\nconst text = this.buttonLabel();\nthis.bitmap.fontFace = $gameSystem.numberFontFace();\nthis.bitmap.fontSize = $gameSystem.mainFontSize();\nthis.bitmap.drawText(text, 0, 0, w, this.bitmap.fontSize + 4, 'center');"
 * 
 * @param Positions
 * @text Button Positions
 *
 * @param BottomPointJS:func
 * @text JS: Bottom Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the bottom buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - buttonWidth * 5;\nlet y = container.height - buttonHeight;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param AbovePointJS:func
 * @text JS: Above Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the upper buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = Math.floor(container.width / 2) - Math.floor(buttonWidth * 1.5);\nlet y = container.y;\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param LeftPointJS:func
 * @text JS: Left Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the left-side buttons start.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.x;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 * @param RightPointJS:func
 * @text JS: Right Point
 * @parent Positions
 * @type note
 * @desc The X and Y coordinates for where the right-side buttons end.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\n// Calculate Coordinates\nlet x = container.width;\nlet y = Math.floor(container.height / 2) - Math.floor(buttonHeight * 1.5);\n\n// Return Coordinates\nreturn new Point(x, y);"
 *
 */
/* ----------------------------------------------------------------------------
 * Assign Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Assign:
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Instruction:str
 * @text Instructions
 * @parent Vocab
 * @desc The instruction text that appears when assigning a Common Event to a button.
 * @default Assign to which button slot?
 * 
 * @param Window
 *
 * @param AssignWindow_KeyAlign:str
 * @text Key Align
 * @parent Window
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the button assignment window?
 * @default center
 *
 * @param AssignWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent Window
 * @type note
 * @desc Code used to determine the dimensions for the button assignment window.
 * @default {"Vocab":"","Instruction:str":"Assign to which button slot?","Window":"","AssignWindow_KeyAlign:str":"center","AssignWindow_RectJS:func":"\"// Declare Constants\\nconst slots = arguments[0];\\nconst cellSize = (Window_Base.prototype.lineHeight() * 2) + 8;\\n\\n// Calculate X, Y, W, H\\nlet ww = ($gameSystem.windowPadding() * 2) + (slots.length * cellSize);\\nww = ww.clamp(Graphics.boxWidth / 3, Graphics.boxWidth);\\nlet wh = this.calcWindowHeight(3, true);\\nlet wx = Math.round((Graphics.boxWidth - ww) / 2);\\nlet wy = Math.round((Graphics.boxHeight - wh) / 2);\\n\\n// Create Window Rectangle\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param ItemOffsets
 * @text Item Cost Offsets
 *
 * @param ItemOffsetX:num
 * @text Offset X
 * @parent ItemOffsets
 * @desc Offsets the cost x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ItemOffsetY:num
 * @text Offset Y
 * @parent ItemOffsets
 * @desc Offsets the cost y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param SkillOffsets
 * @text Skill Cost Offsets
 *
 * @param SkillOffsetX:num
 * @text Offset X
 * @parent SkillOffsets
 * @desc Offsets the cost x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SkillOffsetY:num
 * @text Offset Y
 * @parent SkillOffsets
 * @desc Offsets the cost y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Misc
 * @text Misc Settings
 *
 * @param DisabledOpacity:num
 * @text Disabled Opacity
 * @parent Misc
 * @desc Opacity used for buttons that are unable to meet cost requirements.
 * @default 160
 *
 */
/* ----------------------------------------------------------------------------
 * Key Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeySettings:
 *
 * @param CommonEventID:num
 * @text Common Event ID
 * @parent NeededData
 * @type common_event
 * @desc The default common event tied to this key.
 * Leave it at 0 for no common event.
 * @default 0
 * 
 * @param Buttons
 * @text Visible Buttons
 *
 * @param ShowButton:eval
 * @text Show Button?
 * @parent Buttons
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the button visibly on the screen?
 * @default false
 *
 * @param ShowOnlyIfCePresent:eval
 * @text Requires Bind?
 * @parent ShowButton:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc If the button is shown, does it require a Common Event to be shown?
 * @default true
 *
 * @param ButtonText:str
 * @text Button Label
 * @parent Buttons
 * @desc What text do you want to display as the button label?
 * @default Untitled
 *
 * @param ButtonIcon:num
 * @text Button Icon
 * @parent Buttons
 * @desc What icon do you want to show on this button?
 * @default 0
 *
 * @param PositionJS:func
 * @text JS: Position
 * @parent Buttons
 * @type note
 * @desc The X and Y coordinates for where this button is positioned.
 * @default "// Declare Constants\nconst container = this;\nconst buttonWidth = this.buttonWidth();\nconst buttonHeight = this.buttonHeight();\n\nconst bottomPoint = this.bottomPoint();\nconst abovePoint = this.abovePoint();\nconst leftPoint = this.leftPoint();\nconst rightPoint = this.rightPoint();\n\n// Calculate Coordinates\nlet x = 0;\nlet y = 0;\n\n// Return Coordinates\nreturn new Point(x, y);"
 * 
 * @param Custom
 * @text Custom Settings
 *
 * @param CustomWidth:num
 * @text Custom Width
 * @parent Custom
 * @desc Change the width of this button specifically.
 * Use 0 for the default size.
 * @default 0
 *
 * @param CustomHeight:num
 * @text Custom Height
 * @parent Custom
 * @desc Change the height of this button specifically.
 * Use 0 for the default size.
 * @default 0
 *
 */
//=============================================================================

const _0x480dab=_0x927d;(function(_0x3292d3,_0x4482a5){const _0x540c70=_0x927d,_0x296987=_0x3292d3();while(!![]){try{const _0x101549=-parseInt(_0x540c70(0x1a8))/0x1+-parseInt(_0x540c70(0x182))/0x2*(-parseInt(_0x540c70(0x144))/0x3)+-parseInt(_0x540c70(0xde))/0x4+parseInt(_0x540c70(0x141))/0x5*(parseInt(_0x540c70(0x10d))/0x6)+-parseInt(_0x540c70(0xb0))/0x7*(-parseInt(_0x540c70(0x163))/0x8)+parseInt(_0x540c70(0xfb))/0x9+-parseInt(_0x540c70(0x203))/0xa;if(_0x101549===_0x4482a5)break;else _0x296987['push'](_0x296987['shift']());}catch(_0x49db5c){_0x296987['push'](_0x296987['shift']());}}}(_0x1758,0xedee1));function _0x927d(_0xcc2ffc,_0x26d3a8){const _0x175854=_0x1758();return _0x927d=function(_0x927d5a,_0xf670fc){_0x927d5a=_0x927d5a-0x87;let _0x1e6f10=_0x175854[_0x927d5a];return _0x1e6f10;},_0x927d(_0xcc2ffc,_0x26d3a8);}var label=_0x480dab(0x1ef),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x480dab(0xee)](function(_0x3a7b9b){const _0x1f8240=_0x480dab;return _0x3a7b9b[_0x1f8240(0x1c9)]&&_0x3a7b9b[_0x1f8240(0x1f6)][_0x1f8240(0x1aa)]('['+label+']');})[0x0];VisuMZ[label][_0x480dab(0x1f7)]=VisuMZ[label][_0x480dab(0x1f7)]||{},VisuMZ[_0x480dab(0xa2)]=function(_0x57b9a7,_0x2f4675){const _0x412655=_0x480dab;for(const _0x1faa70 in _0x2f4675){if(_0x1faa70[_0x412655(0x1fd)](/(.*):(.*)/i)){const _0x551454=String(RegExp['$1']),_0x13f06e=String(RegExp['$2'])[_0x412655(0xe2)]()[_0x412655(0x1f2)]();let _0x5d0f4e,_0x2fd629,_0x3b8a2d;switch(_0x13f06e){case'NUM':_0x5d0f4e=_0x2f4675[_0x1faa70]!==''?Number(_0x2f4675[_0x1faa70]):0x0;break;case _0x412655(0x13e):_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON[_0x412655(0x128)](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629['map'](_0x20cbcf=>Number(_0x20cbcf));break;case _0x412655(0x181):_0x5d0f4e=_0x2f4675[_0x1faa70]!==''?eval(_0x2f4675[_0x1faa70]):null;break;case _0x412655(0x150):_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON['parse'](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629[_0x412655(0x1b7)](_0x4cd37a=>eval(_0x4cd37a));break;case _0x412655(0x229):_0x5d0f4e=_0x2f4675[_0x1faa70]!==''?JSON['parse'](_0x2f4675[_0x1faa70]):'';break;case _0x412655(0x1d3):_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON[_0x412655(0x128)](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629[_0x412655(0x1b7)](_0x14f08f=>JSON[_0x412655(0x128)](_0x14f08f));break;case _0x412655(0x111):_0x5d0f4e=_0x2f4675[_0x1faa70]!==''?new Function(JSON[_0x412655(0x128)](_0x2f4675[_0x1faa70])):new Function(_0x412655(0xce));break;case _0x412655(0xd4):_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON['parse'](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629['map'](_0x44fcfc=>new Function(JSON[_0x412655(0x128)](_0x44fcfc)));break;case _0x412655(0x201):_0x5d0f4e=_0x2f4675[_0x1faa70]!==''?String(_0x2f4675[_0x1faa70]):'';break;case _0x412655(0x1bb):_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON[_0x412655(0x128)](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629[_0x412655(0x1b7)](_0x8d8591=>String(_0x8d8591));break;case _0x412655(0x1e7):_0x3b8a2d=_0x2f4675[_0x1faa70]!==''?JSON[_0x412655(0x128)](_0x2f4675[_0x1faa70]):{},_0x5d0f4e=VisuMZ[_0x412655(0xa2)]({},_0x3b8a2d);break;case'ARRAYSTRUCT':_0x2fd629=_0x2f4675[_0x1faa70]!==''?JSON['parse'](_0x2f4675[_0x1faa70]):[],_0x5d0f4e=_0x2fd629[_0x412655(0x1b7)](_0x31f0a9=>VisuMZ[_0x412655(0xa2)]({},JSON[_0x412655(0x128)](_0x31f0a9)));break;default:continue;}_0x57b9a7[_0x551454]=_0x5d0f4e;}}return _0x57b9a7;},(_0x78effe=>{const _0x3f2a7c=_0x480dab,_0x19b462=_0x78effe['name'];for(const _0x54b2e1 of dependencies){if(!Imported[_0x54b2e1]){alert(_0x3f2a7c(0x1cc)[_0x3f2a7c(0x1bc)](_0x19b462,_0x54b2e1)),SceneManager[_0x3f2a7c(0xd9)]();break;}}const _0x1a03ed=_0x78effe[_0x3f2a7c(0x1f6)];if(_0x1a03ed[_0x3f2a7c(0x1fd)](/\[Version[ ](.*?)\]/i)){const _0x3e951f=Number(RegExp['$1']);_0x3e951f!==VisuMZ[label][_0x3f2a7c(0x101)]&&(alert(_0x3f2a7c(0x221)[_0x3f2a7c(0x1bc)](_0x19b462,_0x3e951f)),SceneManager[_0x3f2a7c(0xd9)]());}if(_0x1a03ed[_0x3f2a7c(0x1fd)](/\[Tier[ ](\d+)\]/i)){const _0x52e575=Number(RegExp['$1']);_0x52e575<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3f2a7c(0x1bc)](_0x19b462,_0x52e575,tier)),SceneManager[_0x3f2a7c(0xd9)]()):tier=Math[_0x3f2a7c(0x18f)](_0x52e575,tier);}VisuMZ[_0x3f2a7c(0xa2)](VisuMZ[label][_0x3f2a7c(0x1f7)],_0x78effe[_0x3f2a7c(0x9e)]);})(pluginData),PluginManager[_0x480dab(0x1b6)](pluginData[_0x480dab(0xa1)],_0x480dab(0x1ad),_0x14a96b=>{const _0x4a20b9=_0x480dab;VisuMZ['ConvertParams'](_0x14a96b,_0x14a96b);const _0xac4d18=_0x14a96b[_0x4a20b9(0x16a)],_0x32de63=_0x14a96b['CommonEventID'],_0x5d5e43=_0x14a96b[_0x4a20b9(0x1d9)];for(let _0x4ec145 of _0xac4d18){_0x4ec145=_0x4ec145['replace'](/\s*\(.*?\)\s*/g,'')[_0x4a20b9(0xe2)]()[_0x4a20b9(0x1f2)]();const _0x54363f=TextManager[_0x4a20b9(0x20c)][_0x4a20b9(0x1a6)](_0x4ec145);_0x54363f>0x0&&($gameSystem[_0x4a20b9(0x198)](_0x54363f,_0x32de63),$gameSystem[_0x4a20b9(0x1e1)](_0x54363f,_0x5d5e43));}}),PluginManager[_0x480dab(0x1b6)](pluginData['name'],_0x480dab(0x1fc),_0x30f0c3=>{const _0x554aaf=_0x480dab;VisuMZ[_0x554aaf(0xa2)](_0x30f0c3,_0x30f0c3);const _0x500503=_0x30f0c3['Visible'];$gameSystem[_0x554aaf(0x20e)](_0x500503);}),PluginManager['registerCommand'](pluginData[_0x480dab(0xa1)],_0x480dab(0xcd),_0x524ce6=>{const _0x22afa3=_0x480dab;VisuMZ[_0x22afa3(0xa2)](_0x524ce6,_0x524ce6);const _0x488029=_0x524ce6[_0x22afa3(0x16a)];for(let _0x2c58af of _0x488029){_0x2c58af=_0x2c58af[_0x22afa3(0x102)](/\s*\(.*?\)\s*/g,'')[_0x22afa3(0xe2)]()['trim']();const _0x4932cd=TextManager[_0x22afa3(0x20c)][_0x22afa3(0x1a6)](_0x2c58af);if(_0x4932cd>0x0)$gameSystem['setButtonCommonEvent'](_0x4932cd,0x0);}}),PluginManager[_0x480dab(0x1b6)](pluginData['name'],_0x480dab(0xec),_0x529da1=>{$gameSystem['_buttonCommonEventKeyCodes']={};}),PluginManager[_0x480dab(0x1b6)](pluginData['name'],_0x480dab(0x17d),_0x41aac8=>{const _0x5c58c0=_0x480dab;VisuMZ[_0x5c58c0(0xa2)](_0x41aac8,_0x41aac8);const _0x39db4d=_0x41aac8[_0x5c58c0(0x1ff)];for(const _0x3d2235 of _0x39db4d){$gameSystem[_0x5c58c0(0x88)](_0x3d2235);}}),PluginManager[_0x480dab(0x1b6)](pluginData[_0x480dab(0xa1)],_0x480dab(0x1b5),_0x59fbae=>{const _0x48891e=_0x480dab;VisuMZ['ConvertParams'](_0x59fbae,_0x59fbae);let _0x1fee70=_0x59fbae[_0x48891e(0x186)][_0x48891e(0xe2)]()[_0x48891e(0x1f2)]();_0x1fee70=_0x1fee70['replace'](/\s*\(.*?\)\s*/g,'')[_0x48891e(0xe2)]()[_0x48891e(0x1f2)]();const _0x1715d2=TextManager[_0x48891e(0x20c)]['indexOf'](_0x1fee70),_0x8ff9f0=$gameSystem['getButtonCommonEvent'](_0x1715d2);_0x8ff9f0>0x0&&$gameTemp[_0x48891e(0xdc)](_0x8ff9f0);}),VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x10f)]={'AssignCommonEvent':/<ASSIGN BUTTON COMMON EVENT:[ ](.*)>/i,'AssignButtonSlots':/<ASSIGN BUTTON (?:SLOT|SLOTS):[ ](.*)>/i,'AssignSkillShowQuantity':/<ASSIGN BUTTON SHOW COST>/i,'AssignSkillPayCost':/<ASSIGN BUTTON PAY COST>/i,'AssignItemShowQuantity':/<ASSIGN BUTTON SHOW (?:COST|QUANTITY)>/i,'AssignItemPayCost':/<ASSIGN BUTTON (?:CONSUME QUANTITY|PAY COST)>/i},VisuMZ[_0x480dab(0x1ef)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype'][_0x480dab(0xe3)],Scene_Boot[_0x480dab(0x120)][_0x480dab(0xe3)]=function(){const _0xebdc3=_0x480dab;VisuMZ[_0xebdc3(0x1ef)][_0xebdc3(0xfd)]['call'](this),this[_0xebdc3(0xbb)](),ImageManager[_0xebdc3(0x15b)]();},Scene_Boot[_0x480dab(0x120)][_0x480dab(0xbb)]=function(){const _0x411845=_0x480dab,_0x2a38d9=[];for(let _0x591aea=0x30;_0x591aea<=0x39;_0x591aea++){_0x2a38d9[_0x411845(0x16c)](_0x591aea);}for(let _0x4e401b=0x41;_0x4e401b<=0x5a;_0x4e401b++){_0x2a38d9[_0x411845(0x16c)](_0x4e401b);}for(let _0x17c183=0xba;_0x17c183<=0xc0;_0x17c183++){_0x2a38d9[_0x411845(0x16c)](_0x17c183);}for(let _0x533734=0xdb;_0x533734<=0xde;_0x533734++){_0x2a38d9[_0x411845(0x16c)](_0x533734);}for(let _0x57ce05=0x20;_0x57ce05<=0x28;_0x57ce05++){_0x2a38d9[_0x411845(0x16c)](_0x57ce05);}for(let _0xf3f184=0x2d;_0xf3f184<=0x2e;_0xf3f184++){_0x2a38d9['push'](_0xf3f184);}for(let _0x327573=0x60;_0x327573<=0x6f;_0x327573++){_0x2a38d9[_0x411845(0x16c)](_0x327573);}VisuMZ['ButtonCommonEvents']['KeysArray']=_0x2a38d9;},Input[_0x480dab(0x1db)]=function(_0x5dff39){const _0x3440a8=_0x480dab;if(!VisuMZ[_0x3440a8(0x1ef)][_0x3440a8(0x1f7)][_0x3440a8(0xbe)][_0x3440a8(0x107)])return![];return!!Input[_0x3440a8(0xc5)][_0x5dff39];},ImageManager[_0x480dab(0x15b)]=function(){const _0x45bc14=_0x480dab,_0x40b324=VisuMZ['ButtonCommonEvents'][_0x45bc14(0x1f7)][_0x45bc14(0xbe)]['ButtonFilename'];this[_0x45bc14(0x11e)]=_0x40b324?ImageManager[_0x45bc14(0x1e0)](_0x40b324):new Bitmap(0x1,0x1);},TextManager[_0x480dab(0x20c)]=['','','',_0x480dab(0x8b),'','',_0x480dab(0x148),'',_0x480dab(0x135),'TAB','','',_0x480dab(0x1fe),_0x480dab(0xb2),_0x480dab(0x168),'',_0x480dab(0x1ca),_0x480dab(0x166),_0x480dab(0x1ec),_0x480dab(0x22a),_0x480dab(0x8f),_0x480dab(0x12e),_0x480dab(0x1ae),_0x480dab(0x93),_0x480dab(0x1be),_0x480dab(0x10c),'',_0x480dab(0xa0),_0x480dab(0x180),_0x480dab(0x17f),_0x480dab(0x1a3),_0x480dab(0x155),_0x480dab(0x1dd),_0x480dab(0x226),_0x480dab(0x1ce),_0x480dab(0xae),_0x480dab(0x176),_0x480dab(0x21c),'UP',_0x480dab(0x100),_0x480dab(0x8c),_0x480dab(0x207),_0x480dab(0x1e9),_0x480dab(0x106),_0x480dab(0x142),_0x480dab(0x99),_0x480dab(0x1ac),'','0','1','2','3','4','5','6','7','8','9','COLON','SEMICOLON',_0x480dab(0xaa),_0x480dab(0x22c),_0x480dab(0x115),_0x480dab(0x17b),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','OS_KEY','','CONTEXT_MENU','',_0x480dab(0x10e),_0x480dab(0x1ba),_0x480dab(0x131),_0x480dab(0x189),_0x480dab(0x22b),_0x480dab(0x1b1),_0x480dab(0xb1),'NUMPAD6',_0x480dab(0x1d0),_0x480dab(0x1f5),_0x480dab(0x175),'MULTIPLY',_0x480dab(0xe8),'SEPARATOR',_0x480dab(0xba),_0x480dab(0x13b),_0x480dab(0x21a),'F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x480dab(0xbc),_0x480dab(0xc1),_0x480dab(0x18e),'F13','F14',_0x480dab(0x21d),'F16',_0x480dab(0xad),_0x480dab(0xac),_0x480dab(0x151),_0x480dab(0xf1),'F21','F22','F23',_0x480dab(0x202),'','','','','','','','',_0x480dab(0xc2),_0x480dab(0xc6),'WIN_OEM_FJ_JISHO',_0x480dab(0xc9),'WIN_OEM_FJ_TOUROKU','WIN_OEM_FJ_LOYA',_0x480dab(0x216),'','','','','','','','','',_0x480dab(0x126),_0x480dab(0x15f),_0x480dab(0x197),_0x480dab(0xbf),_0x480dab(0x1bd),'PERCENT','AMPERSAND',_0x480dab(0x152),_0x480dab(0x10b),_0x480dab(0x199),'ASTERISK',_0x480dab(0xc3),_0x480dab(0x17e),_0x480dab(0x18c),_0x480dab(0x12f),'CLOSE_CURLY_BRACKET',_0x480dab(0x1cb),'','','','','VOLUME_MUTE',_0x480dab(0x19e),'VOLUME_UP','','','SEMICOLON',_0x480dab(0x22c),_0x480dab(0x224),'MINUS','PERIOD',_0x480dab(0xb3),'BACK_QUOTE','','','','','','','','','','','','','','','','','','','','','','','','','','',_0x480dab(0x87),_0x480dab(0x11d),_0x480dab(0xf2),_0x480dab(0x1f1),'',_0x480dab(0xe9),_0x480dab(0x89),'',_0x480dab(0xfe),_0x480dab(0x1c2),'','WIN_ICO_CLEAR','','','WIN_OEM_RESET',_0x480dab(0x8e),_0x480dab(0x1cd),_0x480dab(0x1b9),_0x480dab(0x1b0),_0x480dab(0x164),_0x480dab(0x16e),'WIN_OEM_ATTN',_0x480dab(0xdb),_0x480dab(0xa7),'WIN_OEM_AUTO',_0x480dab(0x20a),_0x480dab(0xaf),_0x480dab(0x133),_0x480dab(0xcc),_0x480dab(0xa5),_0x480dab(0x12a),'PLAY',_0x480dab(0x105),'',_0x480dab(0xe1),_0x480dab(0xa4),''],VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x1c0)]=SceneManager['onKeyDown'],SceneManager[_0x480dab(0x145)]=function(_0x2eb1fc){const _0x226da9=_0x480dab;this[_0x226da9(0x1e4)]()&&this[_0x226da9(0x117)](_0x2eb1fc)&&this['_scene'][_0x226da9(0x178)](_0x2eb1fc['keyCode']),VisuMZ[_0x226da9(0x1ef)][_0x226da9(0x1c0)][_0x226da9(0xca)](this,_0x2eb1fc);},SceneManager[_0x480dab(0x1e4)]=function(){const _0x3e7698=_0x480dab;return this[_0x3e7698(0x211)]&&this[_0x3e7698(0x211)][_0x3e7698(0xda)]===Scene_Map;},SceneManager[_0x480dab(0x117)]=function(_0x46a858){const _0x3b8f1a=_0x480dab;return!Input[_0x3b8f1a(0x1db)](_0x46a858[_0x3b8f1a(0x1eb)]);},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0xfa)]=Game_System['prototype'][_0x480dab(0x160)],Game_System[_0x480dab(0x120)][_0x480dab(0x160)]=function(){const _0x4f8500=_0x480dab;VisuMZ[_0x4f8500(0x1ef)]['Game_System_initialize'][_0x4f8500(0xca)](this),this[_0x4f8500(0x21b)]();},Game_System[_0x480dab(0x120)]['initButtonCommonEvents']=function(){const _0x2750e0=_0x480dab;this[_0x2750e0(0x1d5)]={},this[_0x2750e0(0x223)]={},this['_buttonCommonEventShowButtons']=VisuMZ[_0x2750e0(0x1ef)][_0x2750e0(0x1f7)][_0x2750e0(0xbe)][_0x2750e0(0x208)],this[_0x2750e0(0x200)]();},Game_System['prototype'][_0x480dab(0x200)]=function(){const _0x509939=_0x480dab,_0x570252=VisuMZ['ButtonCommonEvents'][_0x509939(0x1f7)],_0x45363c=_0x509939(0x1e8);for(const _0x1e1c80 of VisuMZ['ButtonCommonEvents'][_0x509939(0x170)]){const _0x58bea0=_0x45363c['format'](_0x1e1c80);!!_0x570252[_0x58bea0]&&(this['setButtonCommonEvent'](_0x1e1c80,_0x570252[_0x58bea0]['CommonEventID']),this[_0x509939(0x1e1)](_0x1e1c80,_0x570252[_0x58bea0]['ButtonIcon']));}},Game_System[_0x480dab(0x120)]['getButtonCommonEvent']=function(_0x4d4bd4){const _0x45af45=_0x480dab;if(this[_0x45af45(0x1d5)]===undefined)this[_0x45af45(0x21b)]();return this[_0x45af45(0x1d5)][_0x4d4bd4]||0x0;},Game_System[_0x480dab(0x120)][_0x480dab(0x198)]=function(_0x468bf3,_0x11b63e){const _0x41d5c8=_0x480dab;if(this['_buttonCommonEventKeyCodes']===undefined)this[_0x41d5c8(0x21b)]();if($gameTemp['isPlaytest']()&&Input['isButtonCommonEventForbidden'](_0x468bf3)&&_0x11b63e!==0x0){console['log'](_0x468bf3);const _0x1e4b61='!!\x20ERROR\x20VisuMZ_4_ButtonCmnEvts\x20ERROR\x20!!\x0aKey\x20%1\x20cannot\x20be\x20bound!\x0aIt\x20is\x20a\x20forbidden\x20keybased\x20on\x0ayour\x20Plugin\x20Parameter\x20settings!'[_0x41d5c8(0x1bc)](TextManager['stringKeyMap'][_0x468bf3]);alert(_0x1e4b61);return;}this['_buttonCommonEventKeyCodes'][_0x468bf3]=_0x11b63e;},Game_System[_0x480dab(0x120)][_0x480dab(0x165)]=function(_0x2a05a2){const _0x3b10f4=_0x480dab;if(this[_0x3b10f4(0x1d5)]===undefined)this['initButtonCommonEvents']();delete this[_0x3b10f4(0x1d5)][_0x2a05a2],this[_0x3b10f4(0x119)](_0x2a05a2);},Game_System[_0x480dab(0x120)][_0x480dab(0x1a7)]=function(_0x33f200){const _0x18619f=_0x480dab;if(this[_0x18619f(0x223)]===undefined)this[_0x18619f(0x21b)]();return this[_0x18619f(0x223)][_0x33f200]||0x0;},Game_System[_0x480dab(0x120)]['setButtonCommonEventIcon']=function(_0x138526,_0x245b08){const _0x279186=_0x480dab;if(this[_0x279186(0x223)]===undefined)this[_0x279186(0x21b)]();this['_buttonCommonEventIcons'][_0x138526]=_0x245b08;},Game_System[_0x480dab(0x120)][_0x480dab(0x206)]=function(_0x11174a){const _0x5ef819=_0x480dab;if(this[_0x5ef819(0x223)]===undefined)this['initButtonCommonEvents']();delete this[_0x5ef819(0x223)][_0x11174a];},Game_System[_0x480dab(0x120)]['isShowButtonCommonEventButtons']=function(){const _0x5d5d3d=_0x480dab;if(this[_0x5d5d3d(0x191)]===undefined)this[_0x5d5d3d(0x21b)]();return this[_0x5d5d3d(0x191)];},Game_System[_0x480dab(0x120)][_0x480dab(0x20e)]=function(_0x4d8d55){const _0x49eec1=_0x480dab;if(this[_0x49eec1(0x191)]===undefined)this['initButtonCommonEvents']();this[_0x49eec1(0x191)]=_0x4d8d55;},Game_System[_0x480dab(0x120)]['clearButtonCommonEventID']=function(_0x478348,_0x81cfe2){const _0x5e6bfa=_0x480dab;for(const _0x3e6eb1 of VisuMZ['ButtonCommonEvents'][_0x5e6bfa(0x170)]){if(!this[_0x5e6bfa(0x123)](_0x81cfe2,_0x3e6eb1))continue;this[_0x5e6bfa(0x118)](_0x3e6eb1)===_0x478348&&(this[_0x5e6bfa(0x165)](_0x3e6eb1),this[_0x5e6bfa(0x206)](_0x3e6eb1),this[_0x5e6bfa(0x119)](_0x3e6eb1));}},Game_System[_0x480dab(0x120)][_0x480dab(0x123)]=function(_0x4700f2,_0xd90fe8){const _0x91be2e=_0x480dab;if(!_0x4700f2)return!![];const _0x40a4c7=this[_0x91be2e(0xe6)](_0xd90fe8);if(!_0x40a4c7)return!![];for(const _0x5c6286 in _0x40a4c7){if(_0x40a4c7[_0x5c6286]!==_0x4700f2[_0x5c6286])return![];}return!![];},Game_System['prototype'][_0x480dab(0x104)]=function(_0x17bc09,_0x262b24){const _0x2dc73a=_0x480dab;if(!_0x262b24)return;this[_0x2dc73a(0x1d4)]=this[_0x2dc73a(0x1d4)]||{},this[_0x2dc73a(0x1d4)][_0x17bc09]=undefined;const _0x2212e2=VisuMZ[_0x2dc73a(0x1ef)][_0x2dc73a(0x10f)],_0x51ba62=_0x262b24[_0x2dc73a(0x1c1)]||'';let _0x2ad8ba='';if(DataManager['isSkill'](_0x262b24))_0x2ad8ba=_0x2dc73a(0x1e3);else{if(DataManager[_0x2dc73a(0x188)](_0x262b24))_0x2ad8ba=_0x2dc73a(0x171);else{if(DataManager['isWeapon'](_0x262b24))_0x2ad8ba='weapon';else DataManager[_0x2dc73a(0xd3)](_0x262b24)&&(_0x2ad8ba=_0x2dc73a(0xb4));}}if(!_0x2ad8ba)return;if(_0x2ad8ba===_0x2dc73a(0x1e3)){const _0x861f0c=SceneManager[_0x2dc73a(0x211)][_0x2dc73a(0x1d2)];_0x51ba62[_0x2dc73a(0x1fd)](_0x2212e2[_0x2dc73a(0xfc)])&&(this[_0x2dc73a(0x1d4)][_0x17bc09]={'type':_0x2ad8ba,'id':_0x262b24['id'],'actorID':_0x861f0c?_0x861f0c[_0x2dc73a(0x14d)]():0x0}),_0x51ba62[_0x2dc73a(0x1fd)](_0x2212e2['AssignSkillPayCost'])&&(this['_buttonCommonEventDisplay'][_0x17bc09]={'type':_0x2ad8ba,'id':_0x262b24['id'],'actorID':_0x861f0c?_0x861f0c[_0x2dc73a(0x14d)]():0x0,'payCost':!![]});}else _0x51ba62[_0x2dc73a(0x1fd)](_0x2212e2[_0x2dc73a(0x1d6)])&&(this[_0x2dc73a(0x1d4)][_0x17bc09]={'type':_0x2ad8ba,'id':_0x262b24['id']}),_0x51ba62[_0x2dc73a(0x1fd)](_0x2212e2[_0x2dc73a(0x132)])&&_0x262b24['consumable']!==![]&&(this[_0x2dc73a(0x1d4)][_0x17bc09]={'type':_0x2ad8ba,'id':_0x262b24['id'],'payCost':!![]});},Game_System['prototype'][_0x480dab(0xe6)]=function(_0x13f758){const _0x2f6f2a=_0x480dab;return this[_0x2f6f2a(0x1d4)]=this[_0x2f6f2a(0x1d4)]||{},this[_0x2f6f2a(0x1d4)][_0x13f758];},Game_System[_0x480dab(0x120)][_0x480dab(0x119)]=function(_0xda8e1a){const _0x2bcdf8=_0x480dab;this['_buttonCommonEventDisplay']=this[_0x2bcdf8(0x1d4)]||{},delete this['_buttonCommonEventDisplay'][_0xda8e1a];},Game_System[_0x480dab(0x120)][_0x480dab(0x222)]=function(_0x5a98a1){const _0xf08f0b=_0x480dab,_0x55a213=this[_0xf08f0b(0xe6)](_0x5a98a1);if(!_0x55a213)return![];if(_0x55a213[_0xf08f0b(0x1a1)])return!![];return![];},Game_System[_0x480dab(0x120)][_0x480dab(0x103)]=function(_0x381a41){const _0x4d8787=_0x480dab;if(!this[_0x4d8787(0x222)](_0x381a41))return!![];const _0x5edb6e=this[_0x4d8787(0xe6)](_0x381a41);if(!_0x5edb6e)return!![];const _0x3f73cc=_0x5edb6e[_0x4d8787(0x19f)],_0x128627=_0x5edb6e['id'],_0x592d4c=VisuMZ[_0x4d8787(0x1ef)]['GetObject'](_0x3f73cc,_0x128627);if(!_0x592d4c)return![];if(_0x3f73cc===_0x4d8787(0x1e3)){const _0x25c137=$gameActors[_0x4d8787(0xb5)](_0x5edb6e['actorID']);if(!_0x25c137)return![];if(!_0x25c137[_0x4d8787(0xa8)](_0x592d4c))return![];if(!$gameParty[_0x4d8787(0x90)]()['includes'](_0x25c137))return![];}else{const _0x39fd02=$gameParty[_0x4d8787(0x174)](_0x592d4c);if(_0x39fd02<=0x0)return![];}return!![];},Game_System[_0x480dab(0x120)][_0x480dab(0x1f0)]=function(_0x2f25dc){const _0x46946d=_0x480dab;if(!this[_0x46946d(0x222)](_0x2f25dc))return;const _0x9adcd2=this['getButtonCommonEventDisplayData'](_0x2f25dc);if(!_0x9adcd2)return;const _0xa920ed=_0x9adcd2[_0x46946d(0x19f)],_0x29d7b2=_0x9adcd2['id'],_0xa36af5=VisuMZ[_0x46946d(0x1ef)]['GetObject'](_0xa920ed,_0x29d7b2);if(!_0xa36af5)return;if(_0xa920ed==='skill'){const _0x5147cf=$gameActors['actor'](_0x9adcd2[_0x46946d(0x187)]);if(_0x5147cf)_0x5147cf[_0x46946d(0x228)](_0xa36af5);}else $gameParty[_0x46946d(0xff)](_0xa36af5,0x1);return!![];},VisuMZ[_0x480dab(0x1ef)]['Scene_Map_createSpriteset']=Scene_Map['prototype']['createSpriteset'],Scene_Map[_0x480dab(0x120)]['createSpriteset']=function(){const _0x15cef1=_0x480dab;VisuMZ['ButtonCommonEvents'][_0x15cef1(0xeb)][_0x15cef1(0xca)](this),this[_0x15cef1(0x124)]();},Scene_Map['prototype'][_0x480dab(0x124)]=function(){const _0x25f21b=_0x480dab;if(this[_0x25f21b(0xda)]!==Scene_Map)return;this[_0x25f21b(0x1c4)]=new Sprite_ButtonCommonEventsContainer(),this[_0x25f21b(0x1ed)](this[_0x25f21b(0x1c4)]);},Scene_Map[_0x480dab(0x120)][_0x480dab(0x178)]=function(_0x3bba14){const _0xccb53f=_0x480dab;if(!this['isButtonCommonEventOk'](_0x3bba14))return;if($gameMap&&$gameMap[_0xccb53f(0x1f8)]())return;const _0xe917bd=$gameSystem[_0xccb53f(0x118)](_0x3bba14)||0x0;_0xe917bd>0x0&&$dataCommonEvents[_0xe917bd]&&($gameSystem[_0xccb53f(0x103)](_0x3bba14)&&($gameSystem[_0xccb53f(0x1f0)](_0x3bba14),$gameTemp[_0xccb53f(0xdc)](_0xe917bd)),this[_0xccb53f(0x1c4)][_0xccb53f(0xb8)](_0x3bba14));if($gamePlayer[_0xccb53f(0xc4)]()&&!$gamePlayer[_0xccb53f(0x9b)]()&&$gameMap){const _0x3103f0=$gamePlayer['x'],_0x154131=$gamePlayer['y'],_0x21026c=$gameMap[_0xccb53f(0xd7)](_0x3103f0,_0x154131);if(_0x21026c[_0xccb53f(0x9f)]>0x0&&_0x21026c[_0xccb53f(0x16d)](_0x17d6fb=>[0x0,0x2]['includes'](_0x17d6fb[_0xccb53f(0x14f)])&&[0x1,0x2][_0xccb53f(0x1aa)](_0x17d6fb[_0xccb53f(0x1ee)])))for(const _0x19993b of _0x21026c){_0x19993b[_0xccb53f(0xf6)]();}}},Scene_Map[_0x480dab(0x120)][_0x480dab(0xc8)]=function(_0x16af45){const _0x142bc8=_0x480dab;if(!this[_0x142bc8(0x227)]())return![];if($gameMessage['isBusy']())return![];if(SceneManager[_0x142bc8(0xa3)]())return![];if(Input[_0x142bc8(0xc5)][_0x16af45]==='ok'){if($gamePlayer[_0x142bc8(0x1d1)]())return![];}return!![];},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x18a)]=Scene_Map[_0x480dab(0x120)][_0x480dab(0x14c)],Scene_Map[_0x480dab(0x120)][_0x480dab(0x14c)]=function(){const _0x4b2131=_0x480dab,_0x3eda0a=this['_buttonCommonEventsSpriteContainer'];if(_0x3eda0a){if(_0x3eda0a[_0x4b2131(0x14c)]())return!![];}return VisuMZ[_0x4b2131(0x1ef)][_0x4b2131(0x18a)][_0x4b2131(0xca)](this);},Game_Player[_0x480dab(0x120)][_0x480dab(0x1d1)]=function(){const _0x5829b6=_0x480dab;let _0x48ae33=this['x'],_0x5bd9e=this['y'];for(const _0x12b88f of $gameMap['eventsXy'](_0x48ae33,_0x5bd9e)){if(!_0x12b88f)continue;if(_0x12b88f[_0x5829b6(0x185)]([0x1,0x2]))return!![];}return![];};function Sprite_ButtonCommonEventsContainer(){const _0x5c6692=_0x480dab;this[_0x5c6692(0x160)](...arguments);}Sprite_ButtonCommonEventsContainer['prototype']=Object[_0x480dab(0x225)](Sprite[_0x480dab(0x120)]),Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)][_0x480dab(0xda)]=Sprite_ButtonCommonEventsContainer,Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)][_0x480dab(0x160)]=function(){const _0x5ccc16=_0x480dab;Sprite[_0x5ccc16(0x120)]['initialize'][_0x5ccc16(0xca)](this),this[_0x5ccc16(0x16b)](),this['createButtonSprites']();},Sprite_ButtonCommonEventsContainer['prototype'][_0x480dab(0x16b)]=function(){const _0x4a698d=_0x480dab;this['width']=Graphics['width'],this[_0x4a698d(0xf7)]=Graphics['height'];},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['keySettings']=function(){const _0x204330=_0x480dab;if(!this['_currentKey'])return{};return VisuMZ['ButtonCommonEvents'][_0x204330(0x1f7)][this[_0x204330(0x1ab)]||'']||{};},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['buttonWidth']=function(){const _0x35ab2b=_0x480dab;return this['keySettings']()['CustomWidth']||VisuMZ[_0x35ab2b(0x1ef)][_0x35ab2b(0x1f7)]['General']['ButtonWidth'];},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)][_0x480dab(0xf0)]=function(){const _0x33f347=_0x480dab;return this[_0x33f347(0x214)]()[_0x33f347(0x96)]||VisuMZ[_0x33f347(0x1ef)][_0x33f347(0x1f7)][_0x33f347(0xbe)][_0x33f347(0x1e5)];},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['bottomPoint']=function(){const _0x57ea92=_0x480dab;try{return VisuMZ[_0x57ea92(0x1ef)][_0x57ea92(0x1f7)][_0x57ea92(0xbe)][_0x57ea92(0x1b8)][_0x57ea92(0xca)](this);}catch(_0xbd7023){if($gameTemp[_0x57ea92(0xcf)]())console['log'](_0xbd7023);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['leftPoint']=function(){const _0x504864=_0x480dab;try{return VisuMZ[_0x504864(0x1ef)][_0x504864(0x1f7)][_0x504864(0xbe)][_0x504864(0xe0)][_0x504864(0xca)](this);}catch(_0x4bfdcc){if($gameTemp['isPlaytest']())console[_0x504864(0x190)](_0x4bfdcc);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer['prototype'][_0x480dab(0xc7)]=function(){const _0x503df2=_0x480dab;try{return VisuMZ[_0x503df2(0x1ef)]['Settings'][_0x503df2(0xbe)][_0x503df2(0x108)][_0x503df2(0xca)](this);}catch(_0x362631){if($gameTemp[_0x503df2(0xcf)]())console[_0x503df2(0x190)](_0x362631);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['abovePoint']=function(){const _0x2915c9=_0x480dab;try{return VisuMZ[_0x2915c9(0x1ef)][_0x2915c9(0x1f7)][_0x2915c9(0xbe)][_0x2915c9(0x17a)]['call'](this);}catch(_0x23576a){if($gameTemp[_0x2915c9(0xcf)]())console['log'](_0x23576a);return new Point(0x0,0x0);}},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)][_0x480dab(0x125)]=function(){const _0x7027a5=_0x480dab,_0x50be1e=VisuMZ[_0x7027a5(0x1ef)][_0x7027a5(0x1f7)],_0x4f229a=_0x7027a5(0x1e8);for(const _0x147043 of VisuMZ[_0x7027a5(0x1ef)][_0x7027a5(0x170)]){const _0x377b16=_0x4f229a[_0x7027a5(0x1bc)](_0x147043);if(!_0x50be1e[_0x377b16])continue;if(!_0x50be1e[_0x377b16][_0x7027a5(0x193)])continue;const _0x3e1a07=new Sprite_ButtonCommonEvent(_0x147043);this['addChild'](_0x3e1a07),this[_0x7027a5(0x1ab)]=_0x377b16;const _0x35dd9c=_0x3e1a07[_0x7027a5(0x1cf)]()[_0x7027a5(0x92)][_0x7027a5(0xca)](this)||new Point(0x0,0x0);_0x3e1a07['x']=_0x35dd9c['x'],_0x3e1a07['y']=_0x35dd9c['y'];}},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)][_0x480dab(0x14c)]=function(){const _0x1f1426=_0x480dab;return this[_0x1f1426(0xd0)][_0x1f1426(0x16d)](_0x344eff=>_0x344eff[_0x1f1426(0x94)]());},Sprite_ButtonCommonEventsContainer[_0x480dab(0x120)]['flashButtonPress']=function(_0x36d32c){const _0x2aa991=_0x480dab,_0x25f50d=this[_0x2aa991(0xd0)][_0x2aa991(0xee)](_0x1125b8=>_0x1125b8&&_0x1125b8[_0x2aa991(0xed)]===_0x36d32c);for(const _0x3afed7 of _0x25f50d){if(!_0x3afed7)continue;_0x3afed7[_0x2aa991(0xe5)]();}};function Sprite_ButtonCommonEvent(){const _0xf22752=_0x480dab;this[_0xf22752(0x160)](...arguments);}Sprite_ButtonCommonEvent[_0x480dab(0x120)]=Object[_0x480dab(0x225)](Sprite_Clickable[_0x480dab(0x120)]),Sprite_ButtonCommonEvent['prototype'][_0x480dab(0xda)]=Sprite_ButtonCommonEvent,Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x160)]=function(_0x453f4a){const _0x5f09a=_0x480dab;this[_0x5f09a(0xed)]=_0x453f4a,Sprite_Clickable[_0x5f09a(0x120)]['initialize']['call'](this),this['createBitmap'](),this[_0x5f09a(0x127)]=this[_0x5f09a(0x219)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1cf)]=function(){const _0x51f84b=_0x480dab,_0x5b8b1f='KeyCode%1'[_0x51f84b(0x1bc)](this[_0x51f84b(0xed)]);return VisuMZ['ButtonCommonEvents']['Settings'][_0x5b8b1f]||{};},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x204)]=function(){const _0x42ff53=_0x480dab,_0x3d812=VisuMZ[_0x42ff53(0x1ef)]['Settings'][_0x42ff53(0xbe)],_0x3a4769=this[_0x42ff53(0x1cf)](),_0x2d67b7=_0x3a4769[_0x42ff53(0x1a5)]||_0x3d812[_0x42ff53(0x9c)],_0x9b29bb=_0x3a4769[_0x42ff53(0x96)]||_0x3d812['ButtonHeight'];this[_0x42ff53(0x19a)]=new Bitmap(_0x2d67b7,_0x9b29bb),this[_0x42ff53(0x136)]=this[_0x42ff53(0x112)](),this[_0x42ff53(0x114)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x220)]=function(){const _0x145085=_0x480dab;return ImageManager[_0x145085(0x11e)];},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xb6)]=function(){const _0x4bcc1b=_0x480dab;return $gameSystem[_0x4bcc1b(0x118)](this['_key']);},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x162)]=function(){const _0x21a894=_0x480dab;if(!this[_0x21a894(0x1cf)]())return'';return this[_0x21a894(0x1cf)]()[_0x21a894(0x109)];},Sprite_ButtonCommonEvent[_0x480dab(0x120)]['buttonIcon']=function(){const _0x1e4e8f=_0x480dab;if(!this['commonEventID']())return 0x0;const _0x3d6d5b=$gameSystem[_0x1e4e8f(0x1a7)](this[_0x1e4e8f(0xed)]);if(_0x3d6d5b!==0x0)return _0x3d6d5b;const _0x22867f=VisuMZ[_0x1e4e8f(0x1ef)][_0x1e4e8f(0x1f7)]['General'],_0x1f968c=_0x22867f[_0x1e4e8f(0x91)],_0x289633=Math[_0x1e4e8f(0x18f)](_0x1f968c[_0x1e4e8f(0x9f)],0x1);let _0x1e4d1d=_0x1f968c[this['_key']%_0x289633]||0x0;return _0x1e4d1d;},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x114)]=function(){const _0x3e8ee6=_0x480dab;this[_0x3e8ee6(0x19a)]['clear'](),this['setupPaintOpacity'](),this['drawBaseJS'](),this[_0x3e8ee6(0x161)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x159)]=function(){const _0x271c44=_0x480dab;let _0x51be56=0xff;if(this[_0x271c44(0x11a)]()){if(!this['canPayCost']()){const _0xb7fcb6=VisuMZ[_0x271c44(0x1ef)]['Settings']['Cost']||{};_0x51be56=_0xb7fcb6[_0x271c44(0x156)]??0xa0;}}this[_0x271c44(0x19a)]['paintOpacity']=_0x51be56;},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x17c)]=function(){const _0x4f45a9=_0x480dab,_0x2209ce=VisuMZ[_0x4f45a9(0x1ef)][_0x4f45a9(0x1f7)]['General'];_0x2209ce[_0x4f45a9(0x195)][_0x4f45a9(0xca)](this);},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x161)]=function(){const _0x1fc962=_0x480dab,_0x17a063=$gameSystem[_0x1fc962(0xe6)](this[_0x1fc962(0xed)]);if(!_0x17a063)return;const _0x67ea3b=_0x17a063['id']||0x0,_0x403c7b=_0x17a063[_0x1fc962(0x19f)];let _0x23ab2a=VisuMZ[_0x1fc962(0x1ef)]['GetObject'](_0x403c7b,_0x67ea3b);if(!_0x23ab2a)return;if(DataManager[_0x1fc962(0x11c)](_0x23ab2a)&&Imported[_0x1fc962(0x1da)])this['drawDisplaySkillCost'](_0x23ab2a,_0x17a063[_0x1fc962(0x187)]);else!DataManager[_0x1fc962(0x11c)](_0x23ab2a)&&Imported[_0x1fc962(0x192)]&&this[_0x1fc962(0x20f)](_0x23ab2a);},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x184)]=function(_0x1900ff,_0x775566){const _0x5e9409=_0x480dab;if(!_0x1900ff)return;if(!Imported[_0x5e9409(0x1da)])return;const _0x6ae33=$gameActors[_0x5e9409(0xb5)](_0x775566);if(!_0x6ae33)return;const _0x5cb11c=this['bitmap'][_0x5e9409(0x157)],_0x2abfea=this[_0x5e9409(0x19a)][_0x5e9409(0xf7)],_0x1f1392=$gameSystem[_0x5e9409(0x1f9)](),_0x10f888=new Rectangle(0x0,0x0,_0x5cb11c+_0x1f1392*0x2,_0x2abfea+_0x1f1392*0x2),_0x5250ed=new Window_Base(_0x10f888);if(!_0x5250ed[_0x5e9409(0x194)])return;let _0x229d6e=_0x5250ed[_0x5e9409(0x194)](_0x6ae33,_0x1900ff);if(!_0x229d6e)return;const _0x20ffc5=_0x5250ed['textSizeEx'](_0x229d6e),_0x5b7b50=Math['floor']((_0x5cb11c-_0x20ffc5[_0x5e9409(0x157)])/0x2),_0x3b5889=_0x2abfea-_0x20ffc5[_0x5e9409(0xf7)];_0x5250ed[_0x5e9409(0x18d)](_0x229d6e,_0x5b7b50,_0x3b5889);const _0x51deb5=VisuMZ[_0x5e9409(0x1ef)]['Settings'][_0x5e9409(0x9a)]||{};let _0x2dac95=_0x51deb5[_0x5e9409(0x1a4)]||0x0,_0x15aeeb=_0x51deb5['SkillOffsetY']||0x0;this['bitmap'][_0x5e9409(0x1a9)](_0x5250ed['contents'],0x0,0x0,_0x5cb11c,_0x2abfea,_0x2dac95,_0x15aeeb);},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x20f)]=function(_0x5623e4){const _0x4755d9=_0x480dab;if(!_0x5623e4)return;if(!Imported[_0x4755d9(0x192)])return;const _0xe38a6c=this['bitmap'][_0x4755d9(0x157)],_0x39f469=this[_0x4755d9(0x19a)][_0x4755d9(0xf7)],_0x15c778=VisuMZ[_0x4755d9(0x169)][_0x4755d9(0x1f7)][_0x4755d9(0x95)],_0x15ea04=_0x15c778[_0x4755d9(0xdf)],_0x35b3f1=_0x15ea04[_0x4755d9(0x1bc)]($gameParty[_0x4755d9(0x174)](_0x5623e4)),_0x409277=VisuMZ['ButtonCommonEvents'][_0x4755d9(0x1f7)]['Cost']||{};let _0xbf8c2=_0x409277[_0x4755d9(0x113)]||0x0,_0x3b75cc=(_0x409277[_0x4755d9(0xa6)]||0x0)+Math[_0x4755d9(0xab)](_0x39f469/0x2);this[_0x4755d9(0x19a)]['fontFace']=$gameSystem[_0x4755d9(0x1a2)](),this[_0x4755d9(0x19a)][_0x4755d9(0x12c)]=_0x15c778[_0x4755d9(0x19b)],this[_0x4755d9(0x19a)][_0x4755d9(0xe4)](_0x35b3f1,_0xbf8c2,_0x3b75cc,_0xe38a6c,Math['floor'](_0x39f469/0x2),_0x4755d9(0x11f)),this[_0x4755d9(0x19a)][_0x4755d9(0x179)]=$gameSystem[_0x4755d9(0x196)](),this[_0x4755d9(0x19a)][_0x4755d9(0x12c)]=$gameSystem['mainFontSize']();},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x15a)]=function(){if(this['opacity']<0xff)return![];if(this['commonEventID']()<=0x0)return![];return!![];},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x11a)]=function(){const _0x469e9e=_0x480dab;return $gameSystem[_0x469e9e(0x222)](this[_0x469e9e(0xed)]);},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xe7)]=function(){return $gameSystem['buttonCommonEventCanPayCost'](this['_key']);},Sprite_ButtonCommonEvent[_0x480dab(0x120)]['payCost']=function(){const _0x3e259d=_0x480dab;return $gameSystem['buttonCommonEventPayCost'](this[_0x3e259d(0xed)]);},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1c3)]=function(){const _0x5daf22=_0x480dab;Sprite_Clickable[_0x5daf22(0x120)][_0x5daf22(0x1c3)]['call'](this),this['onColorTone']();},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x21e)]=function(){const _0x4c1cda=_0x480dab;Sprite_Clickable[_0x4c1cda(0x120)]['onMouseExit'][_0x4c1cda(0xca)](this),this[_0x4c1cda(0x1d8)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x19c)]=function(){const _0x5e5e96=_0x480dab;Sprite_Clickable[_0x5e5e96(0x120)][_0x5e5e96(0x19c)]['call'](this),this['onColorTone']();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x212)]=function(){const _0xffd24d=_0x480dab;Sprite_Clickable[_0xffd24d(0x120)][_0xffd24d(0x212)][_0xffd24d(0xca)](this),this[_0xffd24d(0xe7)]()&&(this[_0xffd24d(0x1a1)](),this[_0xffd24d(0x177)]()),TouchInput[_0xffd24d(0x97)](),this[_0xffd24d(0x21e)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xa9)]=function(){const _0x2b492a=_0x480dab,_0x1d0b30=VisuMZ[_0x2b492a(0x1ef)][_0x2b492a(0x1f7)][_0x2b492a(0xbe)];_0x1d0b30[_0x2b492a(0x1d7)]&&this[_0x2b492a(0x134)](_0x1d0b30[_0x2b492a(0x137)]);},Sprite_ButtonCommonEvent[_0x480dab(0x120)]['clearColorTone']=function(){this['setColorTone']([0x0,0x0,0x0,0x0]);},Sprite_ButtonCommonEvent[_0x480dab(0x120)]['flashColorTone']=function(){const _0x2b7931=_0x480dab;this[_0x2b7931(0xa9)](),setTimeout(this[_0x2b7931(0x1d8)][_0x2b7931(0x1c5)](this),0x64);},Sprite_ButtonCommonEvent['prototype'][_0x480dab(0x177)]=function(){const _0x7bbe9e=_0x480dab;if(!SceneManager['_scene'][_0x7bbe9e(0xc8)]())return;if($gameMap&&$gameMap[_0x7bbe9e(0x1f8)]())return;const _0x3d6d5e=this[_0x7bbe9e(0xb6)]();$gameTemp[_0x7bbe9e(0xdc)](_0x3d6d5e),this[_0x7bbe9e(0x21e)](),this[_0x7bbe9e(0xe5)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x94)]=function(){const _0x4cea32=_0x480dab;if(!this[_0x4cea32(0x20b)]())return![];if(this[_0x4cea32(0xb6)]()<=0x0)return![];return!![];},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x11b)]=function(){const _0x3111e5=_0x480dab;Sprite_Clickable[_0x3111e5(0x120)][_0x3111e5(0x11b)][_0x3111e5(0xca)](this),this[_0x3111e5(0x1fb)]()&&(this[_0x3111e5(0x110)](),this[_0x3111e5(0x114)]()),this[_0x3111e5(0x1e2)](),this[_0x3111e5(0x1c8)]();},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1fb)]=function(){const _0x1d9cfa=_0x480dab,_0x224317=$gameSystem[_0x1d9cfa(0xe6)](this[_0x1d9cfa(0xed)]);if(_0x224317){const _0x505b06=_0x224317['id']||0x0,_0x2664e8=_0x224317[_0x1d9cfa(0x19f)]||'';if(['item',_0x1d9cfa(0x20d),_0x1d9cfa(0xb4)]['includes'](_0x224317[_0x1d9cfa(0x19f)])){const _0x592a53=VisuMZ[_0x1d9cfa(0x1ef)][_0x1d9cfa(0x12d)](_0x2664e8,_0x505b06);if(_0x592a53){const _0x27d423=$gameParty['numItems'](_0x592a53);if(this[_0x1d9cfa(0x139)]!==_0x27d423)return!![];}}if(this['requiresCost']()){if(this[_0x1d9cfa(0xb9)]!==this[_0x1d9cfa(0xe7)]())return!![];}}return![];},Sprite_ButtonCommonEvent[_0x480dab(0x120)]['updateRefreshCache']=function(){const _0x4b1492=_0x480dab,_0x17dbba=$gameSystem[_0x4b1492(0xe6)](this[_0x4b1492(0xed)]);if(!_0x17dbba)return;const _0x18878d=_0x17dbba['id']||0x0,_0x313a9b=_0x17dbba[_0x4b1492(0x19f)]||'';if([_0x4b1492(0x171),_0x4b1492(0x20d),_0x4b1492(0xb4)][_0x4b1492(0x1aa)](_0x17dbba['type'])){const _0x48573d=VisuMZ['ButtonCommonEvents'][_0x4b1492(0x12d)](_0x313a9b,_0x18878d);if(_0x48573d){const _0x3f4029=$gameParty[_0x4b1492(0x174)](_0x48573d);this['_lastDisplayQuantity']=_0x3f4029;}}this[_0x4b1492(0x11a)]()&&(this[_0x4b1492(0xb9)]=this[_0x4b1492(0xe7)]());},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1e2)]=function(){const _0x47848e=_0x480dab,_0x5525c4=this[_0x47848e(0x219)]();if(this[_0x47848e(0x127)]>_0x5525c4)this[_0x47848e(0x127)]-=0x10;else this['opacity']<_0x5525c4&&(this['opacity']+=0x10);},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x219)]=function(){const _0x41e788=_0x480dab;if($gameMessage&&$gameMessage[_0x41e788(0x8a)]())return 0x0;if(!$gameSystem[_0x41e788(0x149)]())return 0x0;if(this['settings']()[_0x41e788(0x116)]){const _0x250079=this[_0x41e788(0xb6)]();if(!$dataCommonEvents[_0x250079])return 0x0;}return 0xff;},Sprite_ButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1c8)]=function(){const _0x5f1269=_0x480dab;if(this[_0x5f1269(0x136)]===this[_0x5f1269(0x112)]())return;this['_icon']=this[_0x5f1269(0x112)](),this['refresh']();},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x1c6)]=function(){const _0x1d03e2=_0x480dab,_0x2a7fb6=this['width'],_0x35ea30=this[_0x1d03e2(0xf7)],_0x28b8bb=ColorManager[_0x1d03e2(0x14a)](),_0x1be77d=ColorManager[_0x1d03e2(0x130)]();this[_0x1d03e2(0x19a)][_0x1d03e2(0xd6)](0x1,0x1,_0x2a7fb6-0x2,_0x35ea30-0x2,_0x28b8bb,_0x1be77d,!![]),this[_0x1d03e2(0x19a)][_0x1d03e2(0x1e6)](0x1,0x1,_0x2a7fb6-0x2,_0x35ea30-0x2,_0x28b8bb);if(this[_0x1d03e2(0x220)]()){const _0x3175b1=this[_0x1d03e2(0x220)](),_0x56458b=_0x3175b1['width'],_0x2cd06e=_0x3175b1[_0x1d03e2(0xf7)];this[_0x1d03e2(0x19a)][_0x1d03e2(0x1a9)](_0x3175b1,0x0,0x0,_0x56458b,_0x2cd06e,0x0,0x0,_0x2a7fb6,_0x35ea30);}const _0x263852=this[_0x1d03e2(0x112)](),_0x3c25c6=ImageManager['loadSystem'](_0x1d03e2(0xf5)),_0x1854cd=ImageManager[_0x1d03e2(0x1c7)],_0x214a00=ImageManager[_0x1d03e2(0x210)],_0x8f01eb=_0x263852%0x10*_0x1854cd,_0x5c6ef0=Math['floor'](_0x263852/0x10)*_0x214a00,_0x55648d=Math['floor'](this[_0x1d03e2(0x157)]/_0x1854cd)*_0x1854cd,_0x5c501b=Math['floor'](this[_0x1d03e2(0xf7)]/_0x214a00)*_0x214a00,_0x45684b=Math['floor']((this[_0x1d03e2(0x157)]-_0x55648d)/0x2),_0x203f2f=Math['floor']((this['height']-_0x5c501b)/0x2);this['bitmap'][_0x1d03e2(0xd5)][_0x1d03e2(0xf3)]=![],this[_0x1d03e2(0x19a)][_0x1d03e2(0x1a9)](_0x3c25c6,_0x8f01eb,_0x5c6ef0,_0x1854cd,_0x214a00,_0x45684b,_0x203f2f,_0x55648d,_0x5c501b),this[_0x1d03e2(0x19a)][_0x1d03e2(0xd5)][_0x1d03e2(0xf3)]=!![];const _0x489044=this[_0x1d03e2(0x162)]();this[_0x1d03e2(0x19a)][_0x1d03e2(0x179)]=$gameSystem[_0x1d03e2(0x196)](),this[_0x1d03e2(0x19a)][_0x1d03e2(0x12c)]=$gameSystem[_0x1d03e2(0x98)](),this[_0x1d03e2(0x19a)]['drawText'](_0x489044,0x0,0x0,_0x2a7fb6,this[_0x1d03e2(0x19a)][_0x1d03e2(0x12c)]+0x4,_0x1d03e2(0x11f));},VisuMZ[_0x480dab(0x1ef)]['CanAssignButtonCommonEvent']=function(_0x195896){const _0x5aeb8c=_0x480dab;if(!_0x195896)return![];if(![_0x5aeb8c(0x1f3),_0x5aeb8c(0x154)][_0x5aeb8c(0x1aa)](SceneManager[_0x5aeb8c(0x211)][_0x5aeb8c(0xda)][_0x5aeb8c(0xa1)]))return![];const _0x513e42=VisuMZ[_0x5aeb8c(0x1ef)]['RegExp'],_0x28d3c1=_0x195896['note'];return _0x28d3c1['match'](_0x513e42[_0x5aeb8c(0x1f4)])&&_0x28d3c1[_0x5aeb8c(0x1fd)](_0x513e42[_0x5aeb8c(0x10a)]);},TextManager[_0x480dab(0x9d)]=VisuMZ[_0x480dab(0x1ef)]['Settings'][_0x480dab(0x13c)]['Instruction'],Scene_ItemBase[_0x480dab(0x120)][_0x480dab(0x18b)]=function(){const _0x4730af=_0x480dab,_0x302b1b=VisuMZ[_0x4730af(0x1ef)][_0x4730af(0x10f)],_0x32b390=this['item']()[_0x4730af(0x1c1)];_0x32b390[_0x4730af(0x1fd)](_0x302b1b['AssignButtonSlots']);const _0x1484d4=String(RegExp['$1'])['split'](',')[_0x4730af(0x1b7)](_0x2ee9c0=>String(_0x2ee9c0)[_0x4730af(0xe2)]()[_0x4730af(0x1f2)]())['filter'](_0x20c121=>TextManager[_0x4730af(0x20c)][_0x4730af(0x1aa)](_0x20c121))['filter'](_0x4d4f34=>VisuMZ[_0x4730af(0x1ef)]['KeysArray'][_0x4730af(0x1aa)](TextManager['stringKeyMap'][_0x4730af(0x1a6)](_0x4d4f34)))[_0x4730af(0xee)](_0x58f15b=>!Input['isButtonCommonEventForbidden'](TextManager[_0x4730af(0x20c)][_0x4730af(0x1a6)](_0x58f15b)));_0x32b390[_0x4730af(0x1fd)](_0x302b1b[_0x4730af(0x1f4)]);const _0x3f1638=eval(RegExp['$1']),_0x126d29=this[_0x4730af(0x205)](_0x1484d4),_0x5ecaad=new Window_AssignButtonCommonEvent(_0x126d29);_0x5ecaad[_0x4730af(0x1dc)](_0x3f1638,_0x1484d4),this[_0x4730af(0x1ed)](_0x5ecaad),this['_assignButtonCommonEventsWindow']=_0x5ecaad,_0x5ecaad[_0x4730af(0xd1)](_0x4730af(0xf9),this['onButtonAssistAssign'][_0x4730af(0x1c5)](this)),_0x5ecaad[_0x4730af(0xd1)]('cancel',this[_0x4730af(0x143)][_0x4730af(0x1c5)](this));},Scene_ItemBase['prototype']['assignButtonCommonEventsWindowRect']=function(_0x1e3d33){const _0x2bd2db=_0x480dab,_0x589c78=VisuMZ[_0x2bd2db(0x1ef)][_0x2bd2db(0x1f7)]['Assign'];if(_0x589c78&&_0x589c78[_0x2bd2db(0xd2)])return _0x589c78['AssignWindow_RectJS'][_0x2bd2db(0xca)](this,_0x1e3d33);const _0x30668f=Window_Base[_0x2bd2db(0x120)][_0x2bd2db(0x16f)]()*0x2+0x8;let _0x4c0e37=$gameSystem[_0x2bd2db(0x1f9)]()*0x2+_0x1e3d33['length']*_0x30668f;_0x4c0e37=_0x4c0e37[_0x2bd2db(0x172)](Graphics[_0x2bd2db(0x209)]/0x3,Graphics['boxWidth']);let _0x1f3d7d=this[_0x2bd2db(0x121)](0x3,!![]),_0x2f34f1=Math[_0x2bd2db(0x146)]((Graphics['boxWidth']-_0x4c0e37)/0x2),_0x175319=Math[_0x2bd2db(0x146)]((Graphics[_0x2bd2db(0x1de)]-_0x1f3d7d)/0x2);return new Rectangle(_0x2f34f1,_0x175319,_0x4c0e37,_0x1f3d7d);},Scene_ItemBase['prototype'][_0x480dab(0x218)]=function(){const _0x233109=_0x480dab,_0x537d34=this[_0x233109(0x158)][_0x233109(0xf8)](),_0x28789c=this[_0x233109(0x158)]['_commonEventID'],_0x5cd1ad=this['item']()[_0x233109(0x13a)];$gameSystem[_0x233109(0x104)](_0x537d34,this['item']());const _0x287504=$gameSystem[_0x233109(0xe6)](_0x537d34);_0x287504&&_0x287504[_0x233109(0x19f)]?$gameSystem['clearButtonCommonEventID'](_0x28789c,_0x287504):$gameSystem[_0x233109(0x88)](_0x28789c),$gameSystem['setButtonCommonEvent'](_0x537d34,_0x28789c),$gameSystem[_0x233109(0x1e1)](_0x537d34,_0x5cd1ad),this['_assignButtonCommonEventsWindow']['refresh'](),setTimeout(this['onButtonAssistCancel'][_0x233109(0x1c5)](this),0x1f4);},Scene_ItemBase[_0x480dab(0x120)][_0x480dab(0x143)]=function(){const _0x4c84e0=_0x480dab;this[_0x4c84e0(0x147)][_0x4c84e0(0xc0)](this[_0x4c84e0(0x158)]),this[_0x4c84e0(0x158)]['destroy'](),this[_0x4c84e0(0x158)]=undefined,this[_0x4c84e0(0x1a0)][_0x4c84e0(0xef)](),this[_0x4c84e0(0x1a0)]['callUpdateHelp']();},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x1af)]=Scene_Item['prototype'][_0x480dab(0x140)],Scene_Item['prototype'][_0x480dab(0x140)]=function(){const _0x42383e=_0x480dab;VisuMZ[_0x42383e(0x1ef)][_0x42383e(0xf4)](this[_0x42383e(0x171)]())?this[_0x42383e(0x18b)]():VisuMZ[_0x42383e(0x1ef)]['Scene_Item_onItemOk'][_0x42383e(0xca)](this);},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x15d)]=Scene_Skill[_0x480dab(0x120)]['onItemOk'],Scene_Skill[_0x480dab(0x120)]['onItemOk']=function(){const _0xa51d7=_0x480dab;VisuMZ[_0xa51d7(0x1ef)]['CanAssignButtonCommonEvent'](this[_0xa51d7(0x171)]())?this[_0xa51d7(0x18b)]():VisuMZ[_0xa51d7(0x1ef)]['Scene_Skill_onItemOk']['call'](this);},VisuMZ['ButtonCommonEvents'][_0x480dab(0x217)]=Window_ItemList[_0x480dab(0x120)]['isEnabled'],Window_ItemList[_0x480dab(0x120)]['isEnabled']=function(_0x199c42){const _0x1ce2de=_0x480dab;return VisuMZ['ButtonCommonEvents'][_0x1ce2de(0xf4)](_0x199c42)?!![]:VisuMZ[_0x1ce2de(0x1ef)][_0x1ce2de(0x217)][_0x1ce2de(0xca)](this,_0x199c42);},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x167)]=Window_SkillList['prototype']['isEnabled'],Window_SkillList[_0x480dab(0x120)][_0x480dab(0x13f)]=function(_0x512a5d){const _0x2abbd5=_0x480dab;return VisuMZ[_0x2abbd5(0x1ef)][_0x2abbd5(0xf4)](_0x512a5d)?!![]:VisuMZ[_0x2abbd5(0x1ef)]['Window_SkillList_isEnabled'][_0x2abbd5(0xca)](this,_0x512a5d);};function Window_AssignButtonCommonEvent(){const _0x249fc5=_0x480dab;this[_0x249fc5(0x160)](...arguments);}function _0x1758(){const _0x3ee5a3=['F18','F17','END','WIN_OEM_BACKTAB','513317DrTAqd','NUMPAD5','ENTER','SLASH','armor','actor','commonEventID','commandName','flashButtonPress','_lastDisplayCanPay','SUBTRACT','process_VisuMZ_ButtonCommonEvents_Parameters','F10','drawTitle','General','HASH','removeChild','F11','NUM_LOCK','PLUS','isMoving','keyMapper','SCROLL_LOCK','rightPoint','isButtonCommonEventOk','WIN_OEM_FJ_MASSHOU','call','colSpacing','CRSEL','ClearButtonCommonEvent','return\x200','isPlaytest','children','setHandler','AssignWindow_RectJS','isArmor','ARRAYFUNC','_context','gradientFillRect','eventsXy','itemHeight','exit','constructor','WIN_OEM_FINISH','reserveCommonEvent','playOkSound','6569968vmKvdu','ItemQuantityFmt','LeftPointJS','PA1','toUpperCase','onDatabaseLoaded','drawText','flashColorTone','getButtonCommonEventDisplayData','canPayCost','ADD','META','playEquip','Scene_Map_createSpriteset','ClearAllButtonCommonEvents','_key','filter','activate','buttonHeight','F20','CLOSE_BRACKET','imageSmoothingEnabled','CanAssignButtonCommonEvent','IconSet','start','height','currentExt','assign','Game_System_initialize','9619596KPJEWy','AssignSkillShowQuantity','Scene_Boot_onDatabaseLoaded','WIN_ICO_HELP','loseItem','RIGHT','version','replace','buttonCommonEventCanPayCost','setupButtonCommonEventDisplays','ZOOM','EXECUTE','ForbidInputKeys','RightPointJS','ButtonText','AssignButtonSlots','OPEN_PAREN','HANJA','3512394RQvKhZ','SLEEP','RegExp','updateRefreshCache','FUNC','buttonIcon','ItemOffsetX','refresh','GREATER_THAN','ShowOnlyIfCePresent','isKeyButtonCommonEventValid','getButtonCommonEvent','clearButtonCommonEventDisplayFor','requiresCost','update','isSkill','BACK_SLASH','_buttomCommonEventImage','center','prototype','calcWindowHeight','AssignWindow_KeyAlign','checkMatchingButtonCommonEventDisplayTypeClear','createButtonCommonEventsSpriteContainer','createButtonSprites','CIRCUMFLEX','opacity','parse','ADD_REBIND_OPTIONS','EREOF','BUTTON_LABEL_ALIGN','fontSize','GetObject','KANA','OPEN_CURLY_BRACKET','itemBackColor2','NUMPAD1','AssignItemPayCost','ATTN','setColorTone','BACKSPACE','_icon','HoverTone','isForbiddenKeycode','_lastDisplayQuantity','iconIndex','DECIMAL','Assign','_slots','ARRAYNUM','isEnabled','onItemOk','15EqmuTw','PRINTSCREEN','onButtonAssistCancel','681cAlzlA','onKeyDown','round','_windowLayer','HELP','isShowButtonCommonEventButtons','itemBackColor1','drawIcon','isAnyButtonPressed','actorId','Input_isButtonCommonEventForbidden_Rebind','_priorityType','ARRAYEVAL','F19','UNDERSCORE','resetFontSettings','Scene_Skill','MODECHANGE','DisabledOpacity','width','_assignButtonCommonEventsWindow','setupPaintOpacity','isClickEnabled','loadButtomCommonEventImage','innerWidth','Scene_Skill_onItemOk','contents','EXCLAMATION','initialize','drawDisplayType','buttonLabel','176QZOdje','WIN_OEM_WSCTRL','clearButtonCommonEvent','CTRL','Window_SkillList_isEnabled','ENTER_SPECIAL','ItemsEquipsCore','Keys','initMembers','push','some','WIN_OEM_CUSEL','lineHeight','KeysArray','item','clamp','makeCommandList','numItems','NUMPAD9','HOME','callCommonEvent','processButtonCommonEvent','fontFace','AbovePointJS','QUESTION_MARK','drawBaseJS','ClearButtonCommonEventID','PIPE','NONCONVERT','CONVERT','EVAL','5042vSgzHk','itemRectWithPadding','drawDisplaySkillCost','isTriggerIn','Key','actorID','isItem','NUMPAD2','Scene_Map_isAnyButtonPressed','createAssignButtonCommonEventsWindow','HYPHEN_MINUS','drawTextEx','F12','max','log','_buttonCommonEventShowButtons','VisuMZ_1_ItemsEquipsCore','ShowButton','createAllSkillCostText','DrawJS','numberFontFace','DOUBLE_QUOTE','setButtonCommonEvent','CLOSE_PAREN','bitmap','ItemQuantityFontSize','onPress','_commonEventID','VOLUME_DOWN','type','_itemWindow','payCost','mainFontFace','ACCEPT','SkillOffsetX','CustomWidth','indexOf','getButtonCommonEventIcon','1472632dBcPSl','blt','includes','_currentKey','DELETE','ChangeButtonCommonEvent','EISU','Scene_Item_onItemOk','WIN_OEM_PA3','NUMPAD4','changePaintOpacity','maxCols','ext','RunButtonCommonEvent','registerCommand','map','BottomPointJS','WIN_OEM_PA2','NUMPAD0','ARRAYSTR','format','DOLLAR','FINAL','refreshCursor','SceneManager_onKeyDown','note','WIN_ICO_00','onMouseEnter','_buttonCommonEventsSpriteContainer','bind','drawData','iconWidth','updateIcon','status','SHIFT','TILDE','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','WIN_OEM_PA1','PGDN','settings','NUMPAD7','checkEventTriggerTouchInForwardLocation','_actor','ARRAYJSON','_buttonCommonEventDisplay','_buttonCommonEventKeyCodes','AssignItemShowQuantity','ChangeTone','clearColorTone','Icon','VisuMZ_1_SkillsStatesCore','isButtonCommonEventForbidden','setData','SPACE','boxHeight','isCommandEnabled','loadPicture','setButtonCommonEventIcon','updateOpacity','skill','isSceneMap','ButtonHeight','strokeRect','STRUCT','KeyCode%1','PRINT','VisuMZ_1_OptionsCore','keyCode','ALT','addChild','_trigger','ButtonCommonEvents','buttonCommonEventPayCost','QUOTE','trim','Scene_Item','AssignCommonEvent','NUMPAD8','description','Settings','isEventRunning','windowPadding','rowSpacing','needsRefresh','ButtonCommonEventsVisibility','match','CLEAR','CommonEventID','makeDefaultButtonCommonEvents','STR','F24','9209050GrxDIl','createBitmap','assignButtonCommonEventsWindowRect','clearButtonCommonEventIcon','SELECT','ShowButtonsOnScreen','boxWidth','WIN_OEM_ENLW','isPressed','stringKeyMap','weapon','setShowButtonCommonEventButtons','drawDisplayItemQuantity','iconHeight','_scene','onClick','drawItem','keySettings','_list','WIN_OEM_FJ_ROYA','Window_ItemList_isEnabled','onButtonAssistAssign','targetOpacity','DIVIDE','initButtonCommonEvents','LEFT','F15','onMouseExit','Scene_RebindKeyboard_isForbiddenKeycode','pictureBitmap','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','buttonCommonEventRequiresCost','_buttonCommonEventIcons','COMMA','create','PGUP','isActive','paySkillCost','JSON','PAUSE','NUMPAD3','EQUALS','OPEN_BRACKET','clearButtonCommonEventID','ALTGR','isBusy','CANCEL','DOWN','addCommand','WIN_OEM_JUMP','CAPSLOCK','allMembers','IconsUsed','PositionJS','JUNJA','isCommonEventPressed','ItemScene','CustomHeight','clear','mainFontSize','INSERT','Cost','isJumping','ButtonWidth','assignButtonCommonEventWindowTitle','parameters','length','ESC','name','ConvertParams','isSceneChanging','WIN_OEM_CLEAR','EXSEL','ItemOffsetY','WIN_OEM_COPY','canPaySkillCost','onColorTone','LESS_THAN','floor'];_0x1758=function(){return _0x3ee5a3;};return _0x1758();}Window_AssignButtonCommonEvent[_0x480dab(0x120)]=Object['create'](Window_HorzCommand['prototype']),Window_AssignButtonCommonEvent['prototype'][_0x480dab(0xda)]=Window_AssignButtonCommonEvent,Window_AssignButtonCommonEvent[_0x480dab(0x12b)]=VisuMZ[_0x480dab(0x1ef)]['Settings']['Assign'][_0x480dab(0x122)],Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x160)]=function(_0x4405aa){const _0x499bea=_0x480dab;this[_0x499bea(0x19d)]=0x0,this[_0x499bea(0x13d)]=[],Window_HorzCommand[_0x499bea(0x120)][_0x499bea(0x160)][_0x499bea(0xca)](this,_0x4405aa);},Window_AssignButtonCommonEvent['prototype'][_0x480dab(0x1b3)]=function(){const _0xbaadb2=_0x480dab;return this[_0xbaadb2(0x13d)][_0xbaadb2(0x9f)]||0x1;},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xcb)]=function(){return 0x0;},Window_AssignButtonCommonEvent['prototype']['itemHeight']=function(){const _0x437ad4=_0x480dab;return Window_Scrollable[_0x437ad4(0x120)][_0x437ad4(0xd8)][_0x437ad4(0xca)](this)*0x2+0x8;},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x1dc)]=function(_0x5f0371,_0x3e1f4c){const _0x8a6401=_0x480dab;this['_commonEventID']=_0x5f0371,this[_0x8a6401(0x13d)]=_0x3e1f4c,this[_0x8a6401(0x114)]();let _0x586df1=0x0;for(const _0x1a15ad of this['_slots']){const _0xc0b577=TextManager['stringKeyMap'][_0x8a6401(0x1a6)](_0x1a15ad);$gameSystem[_0x8a6401(0x118)](_0xc0b577)===this[_0x8a6401(0x19d)]&&(_0x586df1=this[_0x8a6401(0x13d)][_0x8a6401(0x1a6)](_0x1a15ad));}this['forceSelect'](_0x586df1),this[_0x8a6401(0x1bf)]();},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x173)]=function(){const _0xe52f26=_0x480dab;if(!this['_slots'])return;for(const _0x1890ae of this[_0xe52f26(0x13d)]){const _0x2e6d0b=TextManager[_0xe52f26(0x20c)][_0xe52f26(0x1a6)](_0x1890ae),_0x4c299f=VisuMZ[_0xe52f26(0x1ef)][_0xe52f26(0x1f7)][_0xe52f26(0x1e8)[_0xe52f26(0x1bc)](_0x2e6d0b)],_0x384f93=_0x4c299f['ButtonText'];this[_0xe52f26(0x8d)](_0x384f93,_0xe52f26(0xf9),!![],_0x2e6d0b);}},Window_AssignButtonCommonEvent[_0x480dab(0x120)]['itemRect']=function(_0x408fc7){const _0x47919c=_0x480dab,_0x29564a=Window_HorzCommand['prototype']['itemRect'][_0x47919c(0xca)](this,_0x408fc7);return _0x29564a['y']+=this[_0x47919c(0x16f)]()+0x8-this[_0x47919c(0x1fa)]()/0x2-this['scrollBaseY'](),_0x29564a;},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0x114)]=function(){const _0x5abaa1=_0x480dab;Window_HorzCommand[_0x5abaa1(0x120)]['refresh']['call'](this);if(!this[_0x5abaa1(0x13d)])return;this['drawTitle']();},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xbd)]=function(){const _0x1a5921=_0x480dab;this[_0x1a5921(0x153)](),this[_0x1a5921(0x1b2)](!![]);const _0x2b7190=TextManager[_0x1a5921(0x9d)];this[_0x1a5921(0xe4)](_0x2b7190,0x0,0x0,this[_0x1a5921(0x15c)],_0x1a5921(0x11f));},Window_AssignButtonCommonEvent['prototype'][_0x480dab(0x213)]=function(_0x5db63a){const _0x333086=_0x480dab,_0x4629b8=this[_0x333086(0x183)](_0x5db63a),_0xd83160=this[_0x333086(0x215)][_0x5db63a][_0x333086(0x1b4)],_0x461af0=$gameSystem[_0x333086(0x1a7)](_0xd83160),_0x2df15a=_0x4629b8['x']+Math[_0x333086(0x146)]((_0x4629b8[_0x333086(0x157)]-ImageManager[_0x333086(0x1c7)])/0x2),_0x3d3591=_0x4629b8['y']+Math['round']((_0x4629b8[_0x333086(0xf7)]-ImageManager[_0x333086(0x210)]/0x2)/0x2);this[_0x333086(0x14b)](_0x461af0,_0x2df15a,_0x3d3591),this[_0x333086(0x153)](),this[_0x333086(0x15e)][_0x333086(0x179)]=$gameSystem[_0x333086(0x196)](),this[_0x333086(0x15e)][_0x333086(0x12c)]=$gameSystem[_0x333086(0x98)](),this['changePaintOpacity'](this[_0x333086(0x1df)](_0x5db63a));const _0x302c25=Window_AssignButtonCommonEvent[_0x333086(0x12b)];this[_0x333086(0xe4)](this[_0x333086(0xb7)](_0x5db63a),_0x4629b8['x'],_0x4629b8['y'],_0x4629b8[_0x333086(0x157)],_0x302c25);},Window_AssignButtonCommonEvent[_0x480dab(0x120)][_0x480dab(0xdd)]=function(){const _0x37807f=_0x480dab;SoundManager[_0x37807f(0xea)]();},VisuMZ['ButtonCommonEvents'][_0x480dab(0x12d)]=function(_0x2945ad,_0xa451f3){const _0x4d46b6=_0x480dab;if(_0x2945ad==='skill')return $dataSkills[_0xa451f3];if(_0x2945ad===_0x4d46b6(0x171))return $dataItems[_0xa451f3];if(_0x2945ad===_0x4d46b6(0x20d))return $dataWeapons[_0xa451f3];if(_0x2945ad===_0x4d46b6(0xb4))return $dataArmors[_0xa451f3];return null;};Imported[_0x480dab(0x1ea)]&&Scene_Options[_0x480dab(0x129)]&&(VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x21f)]=Scene_RebindKeyboard[_0x480dab(0x120)][_0x480dab(0x138)],Scene_RebindKeyboard[_0x480dab(0x120)][_0x480dab(0x138)]=function(_0x5856f1){const _0x4b0308=_0x480dab;if(_0x5856f1>=0x30&&_0x5856f1<=0x39)return!![];return VisuMZ[_0x4b0308(0x1ef)][_0x4b0308(0x21f)][_0x4b0308(0xca)](this,_0x5856f1);},VisuMZ[_0x480dab(0x1ef)][_0x480dab(0x14e)]=Input[_0x480dab(0x1db)],Input[_0x480dab(0x1db)]=function(_0x4d8269){const _0x2fd420=_0x480dab;if(_0x4d8269>=0x41&&_0x4d8269<=0x5a)return!![];if(_0x4d8269>=0xba&&_0x4d8269<=0xc0)return!![];if(_0x4d8269>=0xdb&&_0x4d8269<=0xde)return!![];return VisuMZ['ButtonCommonEvents'][_0x2fd420(0x14e)][_0x2fd420(0xca)](this,_0x4d8269);});