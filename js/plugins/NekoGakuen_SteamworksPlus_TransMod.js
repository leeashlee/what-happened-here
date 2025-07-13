//=============================================================================
// NekoGakuen_SteamworksPlus.js
// Version: 1.1.2
//=============================================================================
/*:
 * @target MV MZ
 * @plugindesc Steamworks API+ (Ver 1.1.2)
 * @author (Translator Name)
 * @url (Translator Website)
 * @help
 * ================================
 * Author: NekoGakuen
 * Version: 1.1.2
 * Contact Twitter(X): https://twitter.com/NekoGakuen
 * ================================
 *
 * ─ Plugin Introduction ─
 * Use Steam platform API features in RPG Maker MV/MZ.
 *
 *
 * ─ Changelog ─
 * V1.1.2 Fixed issue where Steam API could not be initialized.
 * V1.1.1 Added leaderboard API features.
 * V1.1.0 Added NWjs version, removed Steam Deck menu pause feature.
 * V1.0.0 Initial plugin release.
 *
 *
 * ─ Usage Instructions ─
 * 1. Some prerequisites are required, please refer to the manual link in the Manual folder.
 * 2. Load this plugin in the "Plugin Manager" of RPG Maker MV/MZ,
 *    and set the parameters in the "Parameters" section of this plugin.
 * 3. In the event page, select "Plugin Command/Script..." in the advanced section,
 *    and enter the plugin command/script and parameters to execute.
 *
 *
 * ─ Plugin Commands/Scripts ─
 * 
 * -------------------------
 *  ■ SteamApps Features
 * -------------------------
 * [Check if application is installed]
 * --Description: Check in-game if the specified application is installed on the host.
 * >>Param 01: Application ID, specify the application ID, enter "this" for the current application.
 * >>Param 02: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_AppInstalled <param01> <param02>
 * --Script SteamworksPlusManager.steamApps_AppInstalled('<param01>', <param02>);
 * --Conditional Branch SteamworksPlusManager.steamApps_AppInstalled('<param01>') == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if DLC is installed]
 * --Description: Check in-game if the specified DLC is installed on the host.
 * >>Param 01: DLC ID, specify the current DLC ID.
 * >>Param 02: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_DlcInstalled <param01> <param02>
 * --Script SteamworksPlusManager.steamApps_DlcInstalled('<param01>', <param02>);
 * --Conditional Branch SteamworksPlusManager.steamApps_DlcInstalled('<param01>') == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check for low violence content]
 * --Description: Check in-game if the application contains low violence content.
 * >>Param: Switch ID, display the result in the specified switch ID.
 * --Plugin Command NekoCommands SteamApps_LowViolence <param>
 * --Script SteamworksPlusManager.steamApps_LowViolence(<param>);
 * --Conditional Branch SteamworksPlusManager.steamApps_LowViolence(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if application is owned]
 * --Description: Check in-game if the specified application is owned.
 * >>Param 01: Application ID, specify the application ID, enter "this" for the current application.
 * >>Param 02: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_SubscribedApp <param01> <param02>
 * --Script SteamworksPlusManager.steamApps_SubscribedApp('<param01>', <param02>);
 * --Conditional Branch SteamworksPlusManager.steamApps_SubscribedApp('<param01>') == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if application is shared via Family Sharing]
 * --Description: Check in-game if the application is authorized via Family Sharing.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_SubscribedFromFamilySharing <param>
 * --Script SteamworksPlusManager.steamApps_SubscribedFromFamilySharing(<param>);
 * --Conditional Branch SteamworksPlusManager.steamApps_SubscribedFromFamilySharing(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if application is from Free Weekend]
 * --Description: Check in-game if the application is authorized via Free Weekend.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_SubscribedFromFreeWeekend <param>
 * --Script SteamworksPlusManager.steamApps_SubscribedFromFreeWeekend(<param>);
 * --Conditional Branch SteamworksPlusManager.steamApps_SubscribedFromFreeWeekend(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if player is VAC banned]
 * --Description: Check in-game if the player is VAC banned.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_VACBanned <param>
 * --Script SteamworksPlusManager.steamApps_VACBanned(<param>);
 * --Conditional Branch SteamworksPlusManager.steamApps_VACBanned(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Get application install directory]
 * --Description: Get the application's install directory path in-game.
 * >>Param 01: Application ID, specify the application ID, enter "this" for the current application.
 * >>Param 02: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_GetAppInstallDir <param01> <param02>
 * --Script SteamworksPlusManager.steamApps_GetAppInstallDir('<param01>', <param02>);
 * 
 * [Get owner Steam ID]
 * --Description: Get the current application's owner Steam ID in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_GetAppOwner <param>
 * --Script SteamworksPlusManager.steamApps_GetAppOwner(<param>);
 * 
 * [Get supported game languages]
 * --Description: Get the supported languages of the current application in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_GetAvailableGameLanguages <param>
 * --Script SteamworksPlusManager.steamApps_GetAvailableGameLanguages(<param>);
 * 
 * [Get current game language]
 * --Description: Get the current player's game language setting in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_GetCurrentGameLanguage <param>
 * --Script SteamworksPlusManager.steamApps_GetCurrentGameLanguage(<param>);
 * 
 * [Get application purchase time]
 * --Description: Get the purchase time of the specified application in-game, can be used for early bird rewards.
 * >>Param 01: Application ID, specify the application ID, enter "this" for the current application.
 * >>Param 02: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamApps_GetEarliestPurchaseUnixTime <param01> <param02>
 * --Script SteamworksPlusManager.steamApps_GetEarliestPurchaseUnixTime('<param01>', <param02>);
 * 
 * [Install specified DLC]
 * --Description: Install the specified DLC to the host in-game.
 * >>Param: DLC ID, specify the current DLC ID.
 * --Plugin Command NekoCommands SteamApps_InstallDLC <param>
 * --Script SteamworksPlusManager.steamApps_InstallDLC('<param>');
 * 
 * [Uninstall specified DLC]
 * --Description: Uninstall the specified DLC from the host in-game.
 * >>Param: DLC ID, specify the current DLC ID.
 * --Plugin Command NekoCommands SteamApps_UninstallDLC <param>
 * --Script SteamworksPlusManager.steamApps_UninstallDLC('<param>');
 * 
 * -------------------------
 *  ■ SteamFriends Features
 * -------------------------
 * [Call Steam overlay]
 * --Description: Call the Steam platform overlay in-game.
 * >>Param: Overlay option, the Steam overlay option to display.
 *   Available options:
 *   ● friends
 *   ● community
 *   ● players
 *   ● settings
 *   ● officialgamegroup
 *   ● stats
 *   ● achievements
 * --Plugin Command NekoCommands SteamFriends_ActivateGameOverlay <param>
 * --Script SteamworksPlusManager.steamFriends_ActivateGameOverlay('<param>');
 * 
 * [Call Steam overlay store page]
 * --Description: Call the Steam overlay and open the provided application's Steam store page in-game.
 * >>Param 01: Application ID, specify the application ID, enter "this" for the current application.
 * >>Param 02: Option, specify the store action, enter 0 to show store page, enter 2 to add to cart.
 * --Plugin Command NekoCommands SteamFriends_ActivateGameOverlayToStore <param01> <param02>
 * --Script SteamworksPlusManager.steamFriends_ActivateGameOverlayToStore('<param01>', <param02>);
 * 
 * [Call in-game overlay web page]
 * --Description: Call the specified web link in-game using the Steam overlay.
 * >>Param: URL, specify the web link to go to.
 * --Plugin Command NekoCommands SteamFriends_ActivateGameOverlayToWebPage <param>
 * --Script SteamworksPlusManager.steamFriends_ActivateGameOverlayToWebPage('<param>');
 * 
 * [Get game controller type]
 * --Description: Get the device type of the game controller in-game.
 * >>Param 01: Controller index, specify the current controller index, value from 0 ~ 3, for single player use 0.
 * >>Param 02: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamInput_GetInputTypeForHandle <param01> <param02>
 * --Script SteamworksPlusManager.steamInput_GetInputTypeForHandle(<param01>, <param02>);
 * 
 * [Call Steam overlay controller settings]
 * --Description: Call the Steam overlay and show controller key settings in-game.
 * >>Param: Controller index, specify the current controller index, value from 0 ~ 3, for single player use 0.
 * --Plugin Command NekoCommands SteamInput_ShowBindingPanel <param>
 * --Script SteamworksPlusManager.steamInput_ShowBindingPanel(<param>);
 * 
 * -------------------------
 *  ■ SteamMusic Features
 * -------------------------
 * [Check if Steam Music is enabled]
 * --Description: Check in-game if Steam Music is enabled.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamMusic_IsEnabled <param>
 * --Script SteamworksPlusManager.steamMusic_IsEnabled(<param>);
 * --Conditional Branch SteamworksPlusManager.steamMusic_IsEnabled(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check if Steam Music is playing]
 * --Description: Check in-game if Steam Music is playing.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamMusic_IsPlaying <param>
 * --Script SteamworksPlusManager.steamMusic_IsPlaying(<param>);
 * --Conditional Branch SteamworksPlusManager.steamMusic_IsPlaying(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Check Steam Music playback status]
 * --Description: Check the playback status of Steam Music in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamMusic_GetPlaybackStatus <param>
 * --Script SteamworksPlusManager.steamMusic_GetPlaybackStatus(<param>);
 * 
 * [Get Steam Music volume]
 * --Description: Get the playback volume of Steam Music in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamMusic_GetVolume <param>
 * --Script SteamworksPlusManager.steamMusic_GetVolume(<param>);
 * 
 * [Pause Steam Music]
 * --Description: Pause Steam Music song in-game.
 * --Plugin Command NekoCommands SteamMusic_Pause
 * --Script SteamworksPlusManager.steamMusic_Pause();
 * 
 * [Play Steam Music]
 * --Description: Play Steam Music song in-game.
 * --Plugin Command NekoCommands SteamMusic_Play
 * --Script SteamworksPlusManager.steamMusic_Play();
 * 
 * [Play next Steam Music song]
 * --Description: Play the next Steam Music song in-game.
 * --Plugin Command NekoCommands SteamMusic_PlayNext
 * --Script SteamworksPlusManager.steamMusic_PlayNext();
 * 
 * [Play previous Steam Music song]
 * --Description: Play the previous Steam Music song in-game.
 * --Plugin Command NekoCommands SteamMusic_PlayPrevious
 * --Script SteamworksPlusManager.steamMusic_PlayPrevious();
 * 
 * [Set Steam Music volume]
 * --Description: Set the volume of Steam Music in-game.
 * >>Param: Steam Music volume, value between 0.0 ~ 1.0.
 * --Plugin Command NekoCommands SteamMusic_SetVolume <param>
 * --Script SteamworksPlusManager.steamMusic_SetVolume('<param>');
 * 
 * -------------------------
 *  ■ SteamUserStats Features
 * -------------------------
 * [Clear specified achievement]
 * --Description: Clear the specified game achievement in-game.
 * >>Param: Achievement name, specify the achievement name.
 * --Plugin Command NekoCommands SteamUserStats_ClearAchievement <param>
 * --Script SteamworksPlusManager.steamUserStats_ClearAchievement('<param>');
 * 
 * [Get achievement and unlock time]
 * --Description: Get achievement status and unlock time in-game.
 * >>Param 01: Achievement name, specify the achievement name.
 * >>Param 02: Switch ID, display the result in the specified switch ID.
 * >>Param 03: Variable ID, display the result in the specified variable ID.
 * --Plugin Command NekoCommands SteamUserStats_GetAchievementAndUnlockTime <param01> <param02> <param03>
 * --Script SteamworksPlusManager.steamUserStats_GetAchievementAndUnlockTime('<param01>', <param02>, <param03>);
 * 
 * [Get leaderboard entry]
 * --Description: Get a single entry from the specified leaderboard in-game.
 * >>Param 01: Leaderboard ID, specify the leaderboard ID.
 * >>Param 02: Rank index, 0 is first place, and so on.
 * >>Param 03: Return type, specify the data type to return, options: "PlayerName", "PlayerScore".
 * >>Param 04: Variable ID, display the result in the specified variable ID.
 * --Plugin Command NekoCommands SteamUserStats_GetDownloadedLeaderboardEntry <param01> <param02> <param03> <param04>
 * --Script SteamworksPlusManager.steamUserStats_GetDownloadedLeaderboardEntry(<param01>, <param02>, '<param03>', <param04>);
 * 
 * [Get leaderboard name]
 * --Description: Get the name of the specified leaderboard in-game.
 * >>Param 01: Leaderboard ID, specify the leaderboard ID.
 * >>Param 02: Variable ID, display the result in the specified variable ID.
 * --Plugin Command NekoCommands SteamUserStats_GetLeaderboardName <param01> <param02>
 * --Script SteamworksPlusManager.steamUserStats_GetLeaderboardName('<param01>', <param02>);
 * 
 * [Get total number of achievements]
 * --Description: Get the total number of achievements in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUserStats_GetNumAchievements <param>
 * --Script SteamworksPlusManager.steamUserStats_GetNumAchievements(<param>);
 * 
 * [Get current player count]
 * --Description: Get the current number of players in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUserStats_GetNumberOfCurrentPlayers <param>
 * --Script SteamworksPlusManager.steamUserStats_GetNumberOfCurrentPlayers(<param>);
 * 
 * [Unlock specified achievement]
 * --Description: Unlock the specified game achievement in-game.
 * >>Param: Achievement name, specify the achievement name.
 * --Plugin Command NekoCommands SteamUserStats_SetAchievement <param>
 * --Script SteamworksPlusManager.steamUserStats_SetAchievement('<param>');
 * 
 * [Upload leaderboard score]
 * --Description: Upload the specified leaderboard score in-game.
 * >>Param 01: Leaderboard name, specify the leaderboard name.
 * >>Param 02: Leaderboard ID, specify the leaderboard ID.
 * >>Param 03: Score, specify the score.
 * --Plugin Command NekoCommands SteamUserStats_UploadLeaderboardScore <param01> <param02> <param03>
 * --Script SteamworksPlusManager.steamUserStats_UploadLeaderboardScore('<param01>', <param02>, <param03>);
 * 
 * -------------------------
 *  ■ SteamUtils Features
 * -------------------------
 * [Get current application ID]
 * --Description: Get the current application ID in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_GetAppID <param>
 * --Script SteamworksPlusManager.steamUtils_GetAppID(<param>);
 * 
 * [Get current battery power]
 * --Description: Get the battery power of the host in-game, returns 255 if plugged in.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_GetCurrentBatteryPower <param>
 * --Script SteamworksPlusManager.steamUtils_GetCurrentBatteryPower(<param>);
 * 
 * [Get country]
 * --Description: Get the player's country in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_GetIPCountry <param>
 * --Script SteamworksPlusManager.steamUtils_GetIPCountry(<param>);
 * 
 * [Get server real time]
 * --Description: Get the server's real time in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_GetServerRealTime <param>
 * --Script SteamworksPlusManager.steamUtils_GetServerRealTime(<param>);
 * 
 * [Get Steam client language]
 * --Description: Get the language set in the Steam client in-game.
 * >>Param: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_GetSteamUILanguage <param>
 * --Script SteamworksPlusManager.steamUtils_GetSteamUILanguage(<param>);
 * 
 * [Check Steam overlay]
 * --Description: Check in-game if the Steam overlay is running.
 * >>Param: Switch ID, display the result in the specified switch ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_IsOverlayEnabled <param>
 * --Script SteamworksPlusManager.steamUtils_IsOverlayEnabled(<param>);
 * --Conditional Branch SteamworksPlusManager.steamUtils_IsOverlayEnabled(<param>) == <condition>;
 * >>Condition: Enter "true" or "false".
 * 
 * [Set Steam overlay notification inset]
 * --Description: Set the distance from the corner for Steam overlay notifications in-game.
 * >>Param 01: Horizontal pixel distance, set the horizontal distance from the corner.
 * >>Param 02: Vertical pixel distance, set the vertical distance from the corner.
 * --Plugin Command NekoCommands SteamUtils_SetOverlayNotificationInset <param01> <param02>
 * --Script SteamworksPlusManager.steamUtils_SetOverlayNotificationInset(<param01>, <param02>);
 * 
 * [Set Steam overlay notification position]
 * --Description: Set which corner Steam overlay notifications pop up from in-game.
 * >>Param: Corner position, set the Steam overlay notification corner, 0=top left, 1=top right, 2=bottom left, 3=bottom right.
 * --Plugin Command NekoCommands SteamUtils_SetOverlayNotificationPosition <param>
 * --Script SteamworksPlusManager.steamUtils_SetOverlayNotificationPosition(<param>);
 * 
 * [Call Big Picture text input]
 * --Description: Call the Big Picture text input dialog in-game, only supports gamepad input.
 * >>Param 01: Text input mode, 0=normal text, 1=password.
 * >>Param 02: Line count, 0=single line, 1=multi-line.
 * >>Param 03: Input description, description for the text input.
 * >>Param 04: Max character count, maximum number of input characters.
 * >>Param 05: Default value, default value for the text input.
 * >>Param 06: Variable ID, display the result in the specified variable ID, if 0, return directly.
 * --Plugin Command NekoCommands SteamUtils_ShowGamepadTextInput <param01> <param02> <param03> <param04> <param05> <param06>
 * --Script SteamworksPlusManager.steamUtils_ShowGamepadTextInput(<param01>, <param02>, '<param03>', <param04>, '<param05>', <param06>);
 * 
 * [Call floating gamepad keyboard]
 * --Description: Call the floating keyboard in-game, only supports gamepad input.
 * >>Param 01: Keyboard mode, 0=single line, 1=multi-line, 2=email, 3=number.
 * >>Param 02: X position, set X position, default is recommended.
 * >>Param 03: Y position, set Y position, default is recommended.
 * >>Param 04: Width, set width, default is recommended.
 * >>Param 05: Height, set height, default is recommended.
 * --Plugin Command NekoCommands SteamUtils_ShowFloatingGamepadTextInput <param01> <param02> <param03> <param04> <param05>
 * --Script SteamworksPlusManager.steamUtils_ShowFloatingGamepadTextInput(<param01>, <param02>, <param03>, <param04>, <param05>);
 * 
 * 
 * ─ Supported Platforms ─
 * - NWjs:
 *  [× Not Supported]
 * - Electron:
 *  [√ Supported (Windows, macOS)]
 * - Google Chrome:
 *  [× Not Supported]
 * - Mozilla Firefox:
 *  [× Not Supported]
 * - Microsoft Edge:
 *  [× Not Supported]
 * - Apple Safari:
 *  [× Not Supported]
 * - Android:
 *  [× Not Supported]
 * - iOS:
 *  [× Not Supported]
 *
 *
 *
 * ─ Copyright Notice ─
 * You do not need to notify before modifying or translating this plugin. If there are bugs, you can report them.
 * Copyright belongs to NekoGakuen.
 * NekoGakuen reserves the right to modify the plugin usage rules.
 * 
 * --------------------
 * -Source attribution: [△ Not required, but appreciated. (Note 1)]
 * -Commercial use: [√ Allowed]
 * -Adult use: [√ Allowed]
 * 
 * ※Note 1: If you do attribute, just mention "NekoGakuen".
 * --------------------
 * 
 * 
 * @command NekoCommands SteamApps_AppInstalled
 * @text Check if application is installed
 * @desc Check in-game if the specified application is installed on the host.
 * 
 * @arg steamapp_id
 * @text Application ID
 * @desc Specify the application ID, enter "this" for the current application.
 * @type string
 * @default this
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_DlcInstalled
 * @text Check if DLC is installed
 * @desc Check in-game if the specified DLC is installed on the host.
 * 
 * @arg dlc_id
 * @text DLC ID
 * @desc Specify the current DLC ID.
 * @type string
 * @default 0
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_LowViolence
 * @text Check for low violence content
 * @desc Check in-game if the application contains low violence content.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_SubscribedApp
 * @text Check if application is owned
 * @desc Check in-game if the specified application is owned.
 * 
 * @arg steamapp_id
 * @text Application ID
 * @desc Specify the application ID, enter "this" for the current application.
 * @type string
 * @default this
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_SubscribedFromFamilySharing
 * @text Check if application is shared via Family Sharing
 * @desc Check in-game if the application is authorized via Family Sharing.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_SubscribedFromFreeWeekend
 * @text Check if application is from Free Weekend
 * @desc Check in-game if the application is authorized via Free Weekend.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_VACBanned
 * @text Check if player is VAC banned
 * @desc Check in-game if the player is VAC banned.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamApps_GetAppInstallDir
 * @text Get application install directory
 * @desc Get the application's install directory path in-game.
 * 
 * @arg steamapp_id
 * @text Application ID
 * @desc Specify the application ID, enter "this" for the current application.
 * @type string
 * @default this
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamApps_GetAppOwner
 * @text Get owner Steam ID
 * @desc Get the current application's owner Steam ID in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamApps_GetAvailableGameLanguages
 * @text Get supported game languages
 * @desc Get the supported languages of the current application in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamApps_GetCurrentGameLanguage
 * @text Get current game language
 * @desc Get the current player's game language setting in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamApps_GetEarliestPurchaseUnixTime
 * @text Get application purchase time
 * @desc Get the purchase time of the specified application in-game, can be used for early bird rewards.
 * 
 * @arg steamapp_id
 * @text Application ID
 * @desc Specify the application ID, enter "this" for the current application.
 * @type string
 * @default this
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamApps_InstallDLC
 * @text Install specified DLC
 * @desc Install the specified DLC to the host in-game.
 * 
 * @arg dlc_id
 * @text DLC ID
 * @desc Specify the current DLC ID.
 * @type string
 * @default 0
 * 
 * @command NekoCommands SteamApps_UninstallDLC
 * @text Uninstall specified DLC
 * @desc Uninstall the specified DLC from the host in-game.
 * 
 * @arg dlc_id
 * @text DLC ID
 * @desc Specify the current DLC ID.
 * @type string
 * @default 0
 * 
 * @command NekoCommands SteamFriends_ActivateGameOverlay
 * @text Call Steam overlay
 * @desc Call the Steam platform overlay in-game.
 * 
 * @arg pchDialog
 * @text Overlay option
 * @desc The Steam overlay option to display.
 * @type select
 * @default friends
 * @option Friends
 * @value friends
 * @option Community
 * @value community
 * @option Players
 * @value players
 * @option Settings
 * @value settings
 * @option Official Group
 * @value officialgamegroup
 * @option Stats
 * @value stats
 * @option Achievements
 * @value achievements
 * 
 * @command NekoCommands SteamFriends_ActivateGameOverlayToStore
 * @text Call Steam overlay store page
 * @desc Call the Steam overlay and open the provided application's Steam store page in-game.
 * 
 * @arg steamapp_id
 * @text Application ID
 * @desc Specify the application ID, enter "this" for the current application.
 * @type string
 * @default this
 * 
 * @arg eFlag
 * @text Option
 * @desc Specify the store action.
 * @type select
 * @default 0
 * @option Show store page
 * @value 0
 * @option Add to cart
 * @value 2
 * 
 * @command NekoCommands SteamFriends_ActivateGameOverlayToWebPage
 * @text Call in-game overlay web page
 * @desc Call the specified web link in-game using the Steam overlay.
 * 
 * @arg pchURL
 * @text URL
 * @desc Specify the web link to go to.
 * @type string
 * @default https://
 * 
 * @command NekoCommands SteamInput_GetInputTypeForHandle
 * @text Get game controller type
 * @desc Get the device type of the game controller in-game.
 * 
 * @arg nIndex
 * @text Controller index
 * @desc Specify the current controller index, value from 0 ~ 3, for single player use 0.
 * @type number
 * @min 0
 * @max 3
 * @default 0
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamInput_ShowBindingPanel
 * @text Call Steam overlay controller settings
 * @desc Call the Steam overlay and show controller key settings in-game.
 * 
 * @arg nIndex
 * @text Controller index
 * @desc Specify the current controller index, value from 0~3, for single player use 0.
 * @type number
 * @min 0
 * @max 3
 * @default 0
 * 
 * @command NekoCommands SteamMusic_IsEnabled
 * @text Check if Steam Music is enabled
 * @desc Check in-game if Steam Music is enabled.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamMusic_IsPlaying
 * @text Check if Steam Music is playing
 * @desc Check in-game if Steam Music is playing.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamMusic_GetPlaybackStatus
 * @text Check Steam Music playback status
 * @desc Check the playback status of Steam Music in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamMusic_GetVolume
 * @text Get Steam Music volume
 * @desc Get the playback volume of Steam Music in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamMusic_Pause
 * @text Pause Steam Music
 * @desc Pause Steam Music song in-game.
 * 
 * @command NekoCommands SteamMusic_Play
 * @text Play Steam Music
 * @desc Play Steam Music song in-game.
 * 
 * @command NekoCommands SteamMusic_PlayNext
 * @text Play next Steam Music song
 * @desc Play the next Steam Music song in-game.
 * 
 * @command NekoCommands SteamMusic_PlayPrevious
 * @text Play previous Steam Music song
 * @desc Play the previous Steam Music song in-game.
 * 
 * @command NekoCommands SteamMusic_SetVolume
 * @text Set Steam Music volume
 * @desc Set the volume of Steam Music in-game.
 * 
 * @arg flVolume
 * @text Steam Music volume
 * @desc Set the volume of Steam Music, value between 0.0 ~ 1.0.
 * @type number
 * @min 0
 * @max 1
 * @decimals 1
 * @default 1.0
 * 
 * @command NekoCommands SteamUserStats_ClearAchievement
 * @text Clear specified achievement
 * @desc Clear the specified game achievement in-game.
 * 
 * @arg pchName
 * @text Achievement name
 * @desc Specify the achievement name.
 * @type string
 * 
 * @command NekoCommands SteamUserStats_GetAchievementAndUnlockTime
 * @text Get achievement and unlock time
 * @desc Get achievement status and unlock time in-game.
 * 
 * @arg pchName
 * @text Achievement name
 * @desc Specify the achievement name.
 * @type string
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_GetDownloadedLeaderboardEntry
 * @text Get leaderboard entry
 * @desc Get a single entry from the specified leaderboard in-game.
 * 
 * @arg leaderboardld
 * @text Leaderboard ID
 * @desc Specify the leaderboard ID.
 * @min 0
 * @type number
 * 
 * @arg lndex
 * @text Rank index
 * @desc 0 is first place, and so on.
 * @type number
 * @min 0
 * @default 0
 * 
 * @arg type
 * @text Return type
 * @desc Specify the data type to return.
 * @type select
 * @default PlayerName
 * @option Player Name
 * @value PlayerName
 * @option Player Score
 * @value PlayerScore
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_GetLeaderboardName
 * @text Get leaderboard name
 * @desc Get the name of the specified leaderboard in-game.
 * 
 * @arg leaderboardld
 * @text Leaderboard ID
 * @desc Specify the leaderboard ID.
 * @min 0
 * @type number
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_GetNumAchievements
 * @text Get total number of achievements
 * @desc Get the total number of achievements in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_GetNumberOfCurrentPlayers
 * @text Get current player count
 * @desc Get the current number of players in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_SetAchievement
 * @text Unlock specified achievement
 * @desc Unlock the specified game achievement in-game.
 * 
 * @arg pchName
 * @text Achievement name
 * @desc Specify the achievement name.
 * @type string
 * 
 * @command NekoCommands SteamUtils_GetAppID
 * @text Get current application ID
 * @desc Get the current application ID in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUserStats_UploadLeaderboardScore
 * @text Upload leaderboard score
 * @desc Upload the specified leaderboard score in-game.
 * 
 * @arg leaderboardName
 * @text Leaderboard name
 * @desc Specify the leaderboard name.
 * @type string
 * 
 * @arg leaderboardld
 * @text Leaderboard ID
 * @desc Specify the leaderboard ID.
 * @min 0
 * @type number
 * 
 * @arg score
 * @text Score
 * @desc Specify the score.
 * @type number
 * @default 0
 * 
 * @command NekoCommands SteamUtils_GetCurrentBatteryPower
 * @text Get current battery power
 * @desc Get the battery power of the host in-game, returns 255 if plugged in.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUtils_GetIPCountry
 * @text Get country
 * @desc Get the player's country in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUtils_GetServerRealTime
 * @text Get server real time
 * @desc Get the server's real time in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUtils_GetSteamUILanguage
 * @text Get Steam client language
 * @desc Get the language set in the Steam client in-game.
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUtils_IsOverlayEnabled
 * @text Check Steam overlay
 * @desc Check in-game if the Steam overlay is running.
 * 
 * @arg sld
 * @text Switch ID
 * @desc Display the result in the specified switch ID.
 * @type switch
 * @default 0
 * 
 * @command NekoCommands SteamUtils_SetOverlayNotificationInset
 * @text Set Steam overlay notification inset
 * @desc Set the distance from the corner for Steam overlay notifications in-game.
 * 
 * @arg nHorizontalInset
 * @text Horizontal pixel distance
 * @desc Set the horizontal distance from the corner.
 * @type number
 * @default 0
 * 
 * @arg nVerticalInset
 * @text Vertical pixel distance
 * @desc Set the vertical distance from the corner.
 * @type number
 * @default 0
 * 
 * @command NekoCommands SteamUtils_SetOverlayNotificationPosition
 * @text Set Steam overlay notification position
 * @desc Set which corner Steam overlay notifications pop up from in-game.
 * 
 * @arg eNotificationPosition
 * @text Corner position
 * @desc Set the Steam overlay notification corner.
 * @type select
 * @default 3
 * @option Top left
 * @value 0
 * @option Top right
 * @value 1
 * @option Bottom left
 * @value 2
 * @option Bottom right
 * @value 3
 * 
 * @command NekoCommands SteamUtils_ShowGamepadTextInput
 * @text Call Big Picture text input
 * @desc Call the Big Picture text input dialog in-game, only supports gamepad input.
 * 
 * @arg eInputMode
 * @text Text input mode
 * @desc Specify the text input mode.
 * @type select
 * @default 0
 * @option Normal text
 * @value 0
 * @option Password
 * @value 1
 * 
 * @arg eLineInputMode
 * @text Line count
 * @desc Specify the line count.
 * @type select
 * @default 0
 * @option Single line
 * @value 0
 * @option Multi-line
 * @value 1
 * 
 * @arg pchDescription
 * @text Input description
 * @desc Description for the text input.
 * @type string
 * @default Your name?
 * 
 * @arg unCharMax
 * @text Max character count
 * @desc Maximum number of input characters.
 * @type number
 * @min 1
 * @default 5
 * 
 * @arg pchDescription
 * @text Default value
 * @desc Default value for the text input.
 * @type string
 * @default 
 * 
 * @arg vld
 * @text Variable ID
 * @desc Display the result in the specified variable ID.
 * @type variable
 * @default 0
 * 
 * @command NekoCommands SteamUtils_ShowFloatingGamepadTextInput
 * @text Call floating gamepad keyboard
 * @desc Call the floating keyboard in-game, only supports gamepad input.
 * 
 * @arg eKeyboardMode
 * @text Keyboard mode
 * @desc Specify the floating keyboard mode.
 * @type select
 * @default 0
 * @option Single line
 * @value 0
 * @option Multi-line
 * @value 1
 * @option Email
 * @value 2
 * @option Number
 * @value 3
 * 
 * @arg nTextFieldXPosition
 * @text X position
 * @desc Set X position, default is recommended.
 * @type number
 * @default 0
 * 
 * @arg nTextFieldYPosition
 * @text Y position
 * @desc Set Y position, default is recommended.
 * @type number
 * @default 0
 * 
 * @arg nTextFieldWidth
 * @text Width
 * @desc Set width, default is recommended.
 * @type number
 * @default 0
 * 
 * @arg nTextFieldHeight
 * @text Height
 * @desc Set height, default is recommended.
 * @type number
 * @default 0
 * 
 *
 * @param Steamworks Class
 * @text ◆ Steamworks Core Parameters
 * 
 * @param Steam AppID
 * @text Game Application ID
 * @desc Specify the game application ID on Steam.
 * @type string
 * @parent Steamworks Class
 * @default 480
 * 
 * @param Check BuyGame Boolean
 * @text Enable Steam purchase verification
 * @desc Whether to enable Steam purchase verification.
 * @default false
 * @type boolean
 * @parent Steamworks Class
 * @on Enable
 * @off Disable
 * 
 * @param Check FullScreen
 * @text Enable Steam Deck UI fullscreen
 * @desc Whether to enable fullscreen display on Steam Deck UI.
 * @default true
 * @type boolean
 * @parent Steamworks Class
 * @on Enable
 * @off Disable
 * 
 * @param Check Music Pause
 * @text Pause music playback while game is running
 * @desc Whether to pause the game's original soundtrack music playback while the game is running.
 * @default false
 * @type boolean
 * @parent Steamworks Class
 * @on Enable
 * @off Disable
 * 
 * @param Error Log Class
 * @text ◆ Error Message Parameters
 * 
 * @param Error BuyGame Title
 * @text Error Title (Game not purchased)
 * @desc Specify the error title to display when the game is not purchased.
 * @type string
 * @parent Error Log Class
 * @default Game not purchased
 * 
 * @param Error BuyGame Message
 * @text Error Message (Game not purchased)
 * @desc Specify the error message to display when the game is not purchased.
 * @type string
 * @parent Error Log Class
 * @default You have not purchased this game on Steam.
 * 
 * @param Error BuyGame Button
 * @text Link Button
 * @desc Specify the button name to go to purchase.
 * @type string
 * @parent Error Log Class
 * @default Go to purchase
 * 
 */
//=============================================================================