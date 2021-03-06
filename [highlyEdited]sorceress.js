// Sorceress config file

function LoadConfig() {
 	Config.Leader 		= ""; 	// Leader's ingame character name. Leave blank to try auto-detection (works in AutoBaal, Wakka, MFHelper)
	Config.QuitList 	= [""]; // List of character names to quit with. Example: Config.QuitList = ["MySorc", "MyDin"];
	Config.QuitListMode 	= 0; 	// 0 = use character names; 1 = use profile names (all profiles must run on the same computer).
	
	Scripts.Follower = false;	// Script that follows a manually played leader around like a merc. For a list of commands, see Follower.js
	
	Scripts.UserAddon = false;      //  if true, then you are able to see more info about items/NPCs/players 
                                  	//  by placing the cursor over them.
                                  	//  Shows item level/items in sockets/classid/code/magic item prefix/suffix #'s.
                                  	//  Shows monster's classid/HP percent/resistances.
                                  	//  Shows other players' gear.

	// Public game options
	// If Config.Leader is set, the bot will only accept invites from leader. If Config.PublicMode is not 0, Baal and Diablo script will open Town Portals.
	Config.PublicMode = 0; 		// 1 = invite and accept, 2 = accept only, 3 = invite only, 0 = disable
	
	// Party message settings. Each setting represents an array of messages that will be randomly chosen.
	// $name, $level, $class and $killer are replaced by the player's name, level, class and killer
	Config.Greetings 		= []; 	// Example: ["Hello, $name (level $level $class)"]
	Config.DeathMessages 		= []; 	// Example: ["Watch out for that $killer, $name!"]
	Config.Congratulations 		= []; 	// Example: ["Congrats on level $level, $name!"]
	Config.ShitList 		= false; // Blacklist hostile players so they don't get invited to party.
	Config.UnpartyShitlisted 	= false; // Leave party if someone invited a blacklisted player.
	
	// General config
	Config.AutoMap 		= false;	// Set to true to open automap at the beginning of the game.
	Config.LastMessage 	= ""; 		// Message or array of messages to say at the end of the run. Use $nextgame to say next game - "Next game: $nextgame" (works with lead entry point)
	Config.MinGameTime 	= 60; 		// Min game time in seconds. Bot will TP to town and stay in game if the run is completed before.
	Config.MaxGameTime 	= 0; 		// Maximum game time in seconds. Quit game when limit is reached.
	Config.TeleSwitch 	= false; 	// Switch to slot II when teleporting more than 1 node.
	Config.OpenChests 	= false; 	// Open chests. Controls key buying.
	Config.MiniShopBot 	= false; 	// Scan items in NPC shops.
	Config.PacketShopping 	= false; 	// Use packets to shop. Improves shopping speed.
	Config.TownCheck 	= false; 	// Go to town if out of potions
	Config.LogExperience 	= false; 	// Print experience statistics in the manager.
	Config.PingQuit 	= [{Ping: 0, Duration: 0}]; // Quit if ping is over the given value for over the given time period in seconds.

	// Shrine Scanner - scan for shrines while moving.
	// Put the shrine types in order of priority (from highest to lowest). For a list of types, see sdk/shrines.txt
	// 0 null 1 refilling 2 health 3 mana 4 health exchange 5 mana exchange 6 armor 7 combat
	// 8 resist fire 9 resist cold 10 resist lightning 11 resist poison 12 skill 13 mana recharge
	// 14 stamina 15 experience 16 enirhs 17 portal 18 gem 19 fire 20 monster 21 exploding 22 poison
	Config.ScanShrines = [1,2,3,20,15,10,9,11,8,12,6,13];

	// MF Switch
	Config.MFSwitchPercent 	= 0; // Boss life % to switch weapons at. Set to 0 to disable.
	Config.MFSwitch 	= 0; // MF weapon slot: 0 = slot I, 1 = slot II
	
	// *** act 1 ***
		Scripts.Corpsefire = false;
			Config.Corpsefire.ClearDen = false;
		// Scripts.Bishibosh = false;				// dEdits: create this script
		Scripts.Mausoleum = false;				// Bonebreaker is in the Crypt
			Config.Mausoleum.KillBloodRaven = false;
			Config.Mausoleum.ClearCrypt = false;
		Scripts.Rakanishu = false;
			Config.Rakanishu.KillGriswold = true;
		Scripts.UndergroundPassage = false;
		Scripts.Coldcrow = false;
		Scripts.Tristram = false;
			Config.Tristram.PortalLeech = false; 		// Set to true to open a portal for leechers.
		Scripts.Pit = false;
			Config.Pit.ClearPit1 = true;
		Scripts.Treehead = false;
		Scripts.Smith = false;
		Scripts.BoneAsh = false;
		Scripts.Countess = false;
			Config.Countess.KillGhosts = false;
		// Scripts.PitspawnFouldog = false;			// dEdits: create this script. In Jail lvl 2.
		Scripts.Andariel = false;
		Scripts.Cows = false;

	// *** act 2 ***
		Scripts.Radament = false;
		// Scipts.CreepingFeature = false;			// dEdits: create this script. In Stony Tomb lvl 2.		
		Scripts.Coldworm = false;
			Config.Coldworm.KillBeetleburst = false;
			Config.Coldworm.ClearMaggotLair = false; 	// Clear all 3 levels
		// Scripts.BloodWitchTheWild = false;			// dEdits: create this script. In Halls of the Dead lvl 3.
		Scripts.AncientTunnels = false;
			Config.AncientTunnels.OpenChest = false; 	// Open special chest in Lost City
			Config.AncientTunnels.KillDarkElder = false;
		// Scripts.Fangskin = false;				// dEdits: create this script. In the Claw Viper Temple lvl 2.
		Scripts.Summoner = false;
			Config.Summoner.FireEye = false;
		Scripts.Tombs = false;
		Scripts.Duriel = false;

	// *** act 3 ***
		// Scripts.SazarkTheBurning = false;			// dEdits: create this script. In the Spider Cavern.
		Scripts.Stormtree = false;
		Scripts.KurastTemples = false;				// Battlemaid Sarina is in the Ruined Temple.
		Scripts.Icehawk = false;				// In the Sewers lvl 1.
		Scripts.Endugu = false;					// In the Flayer Dungeon lvl 3.
		Scripts.Travincal = false;				// Ismail Vilehand/Geleb Flamefinger/Toorc Icefist are Council members.
			Config.Travincal.PortalLeech = false; 		// Set to true to open a portal for leechers.
		Scripts.Mephisto = false;
			Config.Mephisto.MoatTrick = false;
			Config.Mephisto.KillCouncil = false;		// Bremm Sparkfist/WyandVoidbringer/Maffer Dragonhand are Council members.
			Config.Mephisto.TakeRedPortal = true;

	// *** act 4 ***
		Scripts.OuterSteppes = false;
		Scripts.Izual = false;
		Scripts.Hephasto = false;
		Scripts.Vizier = false; 				// Intended for classic sorc, kills Vizier only.
		Scripts.FastDiablo = false;
		Scripts.Diablo = false;
			Config.Diablo.Entrance 		= true; 	// Start from entrance
			Config.Diablo.SealWarning 	= "";
			Config.Diablo.EntranceTP 	= "";
			Config.Diablo.StarTP 		= "";
			Config.Diablo.DiabloMsg 	= "";
		Scripts.SealLeader = false; 				// Clear a safe spot around seals and invite leechers in. Leechers should run SealLeecher script. Don't run with Diablo or FastDiablo.

	// *** act 5 ***
		Scripts.Pindleskin = false;
			Config.Pindleskin.UseWaypoint = false;
			Config.Pindleskin.KillNihlathak = false;
			Config.Pindleskin.ViperQuit = false; 		// End script if Tomb Vipers are found.
		Scripts.Nihlathak = false;
			Config.Nihlathak.ViperQuit = false; 		// End script if Tomb Vipers are found.
		Scripts.Eldritch = false;				// Eldritch the Rectifier is in Frigid Highlands
			Config.Eldritch.OpenChest = true;
			Config.Eldritch.KillShenk = true;		// Shenk is in the Bloody Foothills.
			Config.Eldritch.KillDacFarren = true;		// Dac Farren is in the Bloody Foothills.
		Scripts.Eyeback = false;				// Is in the Frigid Highlands.
		Scripts.SharpTooth = false;				// Is in the Frigid Highlands.
		Scripts.ThreshSocket = false;				// Is in the Arreat Plateau.
		Scripts.Abaddon = false;				// Entrence is in the Frigid Highland.
		Scripts.Frozenstein = false;				// Is in the Frozen River.
			Config.Frozenstein.ClearFrozenRiver = true;
		Scripts.Bonesaw = false;				// Is in the Glacial Trail.
			Config.Bonesaw.ClearDrifterCavern = false;
		Scripts.Snapchip = false;				// Is in the Icy Cellar.
			Config.Snapchip.ClearIcyCellar = true;
		Scripts.Worldstone = false;
		Scripts.Baal = false;
			Config.Baal.HotTPMessage 	= "";
			Config.Baal.SafeTPMessage 	= "";
			Config.Baal.BaalMessage 	= "";
			Config.Baal.SoulQuit 		= false; 	// End script if Souls (Undead Soul Killers) are found.
			Config.Baal.DollQuit 		= false; 	// End script if Dolls (Undead Stigyan Dolls) are found.
			Config.Baal.KillBaal 		= true;		// Kill Baal. Leaves game after wave 5 if false.



	

	// *** special scripts ***
	Scripts.WPGetter = false; // Get missing waypoints
	Scripts.Rusher = false; // Rush bot. For a list of commands, see Rusher.js
		Config.Rusher.WaitPlayerCount = 0; // Wait until game has a certain number of players (0 - don't wait, 8 - wait for full game).
		Config.Rusher.Radament = false;	// Do Radament quest.
		Config.Rusher.LamEsen = false; 	// Do Lam Esen quest.
		Config.Rusher.Izual = false; 	// Do Izual quest.
		Config.Rusher.Shenk = false; 	// Do Shenk quest.
		Config.Rusher.Anya = false; 	// Do Anya quest.
		Config.Rusher.LastRun = ""; 	// End rush after this run. List of runs: http://pastebin.com/Uez3nZ6g
	Scripts.Rushee = false; 		// Automatic rushee, works with Rusher. Set Rusher's character name as Config.Leader
		Config.Rushee.Quester = false;		// Enter portals and get quest items.
		Config.Rushee.Bumper = false; 		// Do Ancients and Baal. Minimum levels: 20 - norm, 40 - nightmare
	Scripts.CrushTele = false; 	// classic rush teleporter. go to area of interest and press "-" numpad key
	Scripts.Questing = false; 	// solves missing quests (skill/stat+shenk)
		Scripts.ChestMania = false; // Open chests in configured areas. See sdk/areas.txt
		Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19]; // List of act 1 areas to open chests in
		Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72]; // List of act 2 areas to open chests in
		Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90]; // List of act 3 areas to open chests in
		Config.ChestMania.Act4 = []; // List of act 4 areas to open chests in
		Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127]; // List of act 5 areas to open chests in
	Scripts.ClearAnyArea = false; // Clear any area. Uses Config.ClearType to determine which type of monsters to kill.
		Config.ClearAnyArea.AreaList = []; // List of area ids to clear. See sdk/areas.txt

	
	// Town settings
	Config.HealHP = 80; 		// Go to a healer if under designated percent of life.
	Config.HealMP = 80; 		// Go to a healer if under designated percent of mana.
	Config.HealStatus = true; 	// Go to a healer if poisoned or cursed
	Config.UseMerc = true; 		// Use merc. This is ignored and always false in d2classic.
	Config.MercWatch = true; 	// Instant merc revive during battle.

	// Potion settings
	Config.UseHP = 75; 		// Drink a healing potion if life is under designated percent.
	Config.UseRejuvHP = 55;  	// Drink a rejuvenation potion if life is under designated percent.
	Config.UseMP = 40; 		// Drink a mana potion if mana is under designated percent.
	Config.UseRejuvMP = 0; 		// Drink a rejuvenation potion if mana is under designated percent.
	Config.UseMercHP = 75; 		// Give a healing potion to your merc if his/her life is under designated percent.
	Config.UseMercRejuv = 0; 	// Give a rejuvenation potion to your merc if his/her life is under designated percent.
	Config.HPBuffer = 0; 		// Number of healing potions to keep in inventory.
	Config.MPBuffer = 0; 		// Number of mana potions to keep in inventory.
	Config.RejuvBuffer = 0; 	// Number of rejuvenation potions to keep in inventory.

	// Chicken settings
	Config.LifeChicken = 40; // Exit game if life is less or equal to designated percent.
	Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
	Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
	Config.TownHP = 0; // Go to town if life is under designated percent.
	Config.TownMP = 0; // Go to town if mana is under designated percent.

	// Inventory lock configuration. !!!READ CAREFULLY!!!
	Config.Inventory[0] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[1] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[2] = [0,0,0,0,0,0,0,0,0,0];
	Config.Inventory[3] = [0,0,0,0,0,0,0,0,0,0];

	Config.StashGold = 100000; // Minimum amount of gold to stash.

	// Potion types for belt columns from left to right.
	// Supported potions - Healing ("hp"), Mana ("mp") and Rejuvenation ("rv")
	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "mp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "rv";

	// Min # potions. If we have less, go to vendor to purchase more.
	// Set rejuvenation columns to 0, because they can't be bought.
	Config.MinColumn[0] = 2;
	Config.MinColumn[1] = 2;
	Config.MinColumn[2] = 2;
	Config.MinColumn[3] = 0;

	// Pickit config. Default folder is kolbot/pickit.
	// Config.PickitFiles.push("kolton.nip");
	// Config.PickitFiles.push("LLD.nip");
	Config.PickitFiles.push("pot_C.nip");
	Config.PickRange = 40; // Pick radius
	Config.FastPick = false; // Check and pick items between attacks


	// Item identification settings
	Config.CainID.Enable = false; // Identify items at Cain
	Config.CainID.MinGold = 2500000; // Minimum gold (stash + character) to have in order to use Cain.
	Config.CainID.MinUnids = 3; // Minimum number of unid items in order to use Cain.
	Config.FieldID = false; // Identify items in the field instead of going to town.
	Config.DroppedItemsAnnounce.Enable = false;	// Announce Dropped Items to in-game newbs
	Config.DroppedItemsAnnounce.Quality = []; // Quality of item to announce. See NTItemAlias.dbl for values. Example: Config.DroppedItemsAnnounce.Quality = [6, 7, 8];

	// Repair settings
	Config.CubeRepair = false; // Repair weapons with Ort and armor with Ral rune. Don't use it if you don't understand the risk of losing items.
	Config.RepairPercent = 40; // Durability percent of any equipped item that will trigger repairs.

	// Gambling config
	Config.Gamble = false;
	Config.GambleGoldStart = 1000000;
	Config.GambleGoldStop = 500000;

	// List of item names or classids for gambling. Check libs/NTItemAlias.dbl file for other item classids.
	Config.GambleItems.push("Amulet");
	Config.GambleItems.push("Ring");
	Config.GambleItems.push("Circlet");
	Config.GambleItems.push("Coronet");

	/* Cubing config. All recipe names are available in Templates/Cubing.txt. For item names/classids check NTItemAlias.dbl
	 * The format is Config.Recipes.push([recipe_name, item_name_or_classid, etherealness]). Etherealness is optional and only applies to some recipes.
	 */
	Config.Cubing 		= false; // Set to true to enable cubing.
	Config.MakeRunewords 	= false; // Set to true to enable runeword making/rerolling


	// Speedup config. Full packet casting is not recommended for melee skills.
	Config.FCR = 0; 		// 0 - disable, 1 to 255 - set value of Faster Cast Rate.
	Config.FHR = 0; 		// 0 - disable, 1 to 255 - set value of Faster Hit Recovery.
	Config.FBR = 0; 		// 0 - disable, 1 to 255 - set value of Faster Block Recovery.
	Config.IAS = 0; 		// 0 - disable, 1 to 255 - set value of Increased Attack Speed.
	Config.PacketCasting = 0; 	// 0 = disable, 1 = packet teleport, 2 = full packet casting.
	Config.WaypointMenu = true;

	// Anti-hostile config
	Config.AntiHostile 	= false;	// Enable anti-hostile.
	Config.HostileAction 	= 0; 		// 0 - quit immediately, 1 - quit when hostile player is sighted, 2 - attack hostile.
	Config.TownOnHostile 	= false; 	// Go to town instead of quitting when HostileAction is 0 or 1.
	Config.RandomPrecast 	= false; 	// Anti-PK measure, only supported in Baal and BaalHelper and BaalAssisstant at the moment.
	Config.ViperCheck 	= false; 	// Quit if revived Tomb Vipers are sighted.

	// DClone config
	Config.StopOnDClone 	= false;	// Go to town and idle as soon as Diablo walks the Earth
	Config.SoJWaitTime 	= 0; 		// Time in minutes to wait for another SoJ sale before leaving game. 0 = disabled
	Config.KillDclone 	= false; 	// Go to Palace Cellar 3 and try to kill Diablo Clone. Pointless if you already have Annihilus.
	Config.DCloneQuit 	= false; 	// 1 = quit when Diablo walks, 2 = quit on soj sales, 0 = disabled

	// Monster skip config
	// Skip immune monsters. Possible options: "fire", "cold", "lightning", "poison", "physical", "magic".
	// You can combine multiple resists with "and", for example - "fire and cold", "physical and cold and poison"
	Config.SkipImmune = [];
	// Skip enchanted monsters. Possible options: "extra strong", "extra fast", "cursed", "magic resistant", "fire enchanted", "lightning enchanted", "cold enchanted", "mana burn", "teleportation", "spectral hit", "stone skin", "multiple shots".
	// You can combine multiple enchantments with "and", for example - "cursed and extra fast", "mana burn and extra strong and lightning enchanted"
	Config.SkipEnchant = [];
	// Skip monsters with auras. Possible options: "fanaticism", "might", "holy fire", "blessed aim", "holy freeze", "holy shock". Conviction is bugged, don't use it.
	Config.SkipAura = [];

	/* Attack config
	 * To disable an attack, set it to -1
	 * Skills MUST be POSITIVE numbers. For reference see http://pastebin.com/baShRwWM
	 */
	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = -1; // Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = -1; // Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.

	/* Advanced Attack config. Allows custom skills to be used on custom monsters.
	 *	Format: "Monster Name": [timed skill id, untimed skill id]
	 *	Example: "Baal": [38, -1] to use charged bolt on Baal
	 *	Multiple entries are separated by commas
	 */
	Config.CustomAttack = {
		//"Monster Name": [-1, -1]
	};

	Config.Dodge		= false;	// Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
	Config.DodgeRange 	= 15; 		// Distance to keep from monsters.
	Config.DodgeHP 		= 100; 		// Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
	Config.BossPriority 	= false; 	// Set to true to attack Unique/SuperUnique monsters first when clearing
	Config.ClearType 	= 0xF; 		// Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
	Config.TeleStomp 	= false; 	// Use merc to attack bosses if they're immune to attacks, but not to physical damage

	// Wereform setup. Make sure you read Templates/Attacks.txt for attack skill format.
	Config.Wereform 	= false; 	// 0 / false - don't shapeshift 1 / "Werewolf" - change to werewolf
						// 2 / "Werebear" - change to werebear

	// Class specific config
	Config.CastStatic = 60; // Cast static until the target is at designated life percent. 100 = disabled.
	// List of monster NAMES or CLASSIDS to static. Example: Config.StaticList = ["Andariel", 243];
	Config.StaticList = ["Bishibosh","Bloodraven","Griswold","Treehead Woodfist","The Countess","Smith","Boneash","Andariel",
			     "Radament","The Summoner","Duriel",
			     "Stormtree","Mephisto",
			     "Izual","Hephasto","Diablo"]; 
	
	// AutoBuild System ( See /d2bs/kolbot/libs/config/Builds/README.txt for instructions )
	Config.AutoBuild.Enabled	= false;	// This will enable or disable the AutoBuild system	
	Config.AutoBuild.Template 	= "BuildName";	// The name of the build associated with an existing 
							// Template filename located in libs/config/Builds/

	Config.AutoBuild.Verbose 	= true;		// Allows script to print messages in console
	Config.AutoBuild.DebugMode 	= true;		// Debug mode prints a little more information to console and 
							// logs activity to /logs/AutoBuild.CharacterName._MM_DD_YYYY.log
							// It automatically enables Config.AutoBuild.Verbose
}

/*
	// extra scripts that I do not use...
	
	Scripts.Gamble = false; 	// Gambling system, other characters will mule gold into your game so you can gamble infinitely. See Gambling.js
	Scripts.Crafting = false; 	// Crafting system, other characters will mule crafting ingredients. See CraftingSystem.js
	Scripts.GhostBusters = false; 	// Kill ghosts in most areas that contain them
	Scripts.Enchant = false;
		Config.Enchant.Triggers = ["chant", "cows", "wps"];	// Chat commands for enchant, cow level and waypoint giving
		Config.Enchant.GetLeg = false; 				// Get Wirt's Leg from Tristram. If set to false, it will check for the leg in town.
		Config.Enchant.AutoChant = false; 			// Automatically enchant nearby players and their minions
		Config.Enchant.GameLength = 20; 			// Game length in minutes
	Scripts.IPHunter = false;
		Config.IPHunter.IPList = []; 	// List of IPs to look for. example: [165, 201, 64]
		Config.IPHunter.GameLength = 3; // Number of minutes to stay in game if ip wasn't found
	Scripts.KillDclone = false; 		// Kill Diablo Clone by using Arcane Sanctuary waypoint. Diablo needs to walk the Earth in the game.
	Scripts.ShopBot = false; 		// Shopbot script. Automatically uses shopbot.nip and ignores other pickits.
		// Supported NPCs: Akara, Charsi, Gheed, Elzix, Fara, Drognan, Ormus, Asheara, Hratli, Jamella, Halbu, Anya. Multiple NPCs are also supported, example: ["Elzix", "Fara"]
		// Use common sense when combining NPCs. Shopping in different acts will probably lead to bugs.
		Config.ShopBot.ShopNPC = "Anya";
		// Put item classid numbers or names to scan (remember to put quotes around names). Leave blank to scan ALL items. See libs/config/templates/ShopBot.txt
		Config.ShopBot.ScanIDs = [];
		Config.ShopBot.CycleDelay = 0; // Delay between shopping cycles in milliseconds, might help with crashes.
		Config.ShopBot.QuitOnMatch = false; // Leave game as soon as an item is shopped.

	Scripts.TristramLeech 	= false; // Enters Tristram, attempts to stay close to the leader and will try and help kill.
	Scripts.TravincalLeech 	= false; // Enters portal at back of Travincal.
		Config.TravincalLeech.Helper = true; // If set to true the character will teleport to the stairs and help attack.
	Scripts.MFHelper = false; 	// Run the same MF run as the MFLeader. Leader must have Config.MFLeader = true
	Scripts.Wakka = false; 		// Walking chaos leecher with auto leader assignment, stays at safe distance from the leader
	Scripts.SealLeecher = false; 	// Enter safe portals to Chaos. Leader should run SealLeader.
	Scripts.DiabloHelper = false; 	// Chaos helper, kills monsters and doesn't open seals on its own.
		Config.DiabloHelper.Wait = 120; 	// Seconds to wait for a runner to be in Chaos. If Config.Leader is set, it will wait only for the leader.
		Config.DiabloHelper.Entrance = true; 	// Start from entrance. Set to false to start from star.
		Config.DiabloHelper.SkipTP = false; 	// Don't wait for town portal and directly head to chaos. It will clear monsters around chaos entrance and wait for the runner.
		Config.DiabloHelper.SkipIfBaal = false; // End script if there are party members in a Baal run.
	Scripts.AutoBaal = false; 				// Baal leecher with auto leader assignment
		Config.AutoBaal.FindShrine = false; 		// false = disabled, 1 = search after hot tp message, 2 = search as soon as leader is found
		Config.AutoBaal.LeechSpot = [15115, 5050]; 	// X, Y coords of Throne Room leech spot
		Config.AutoBaal.LongRangeSupport = false; 	// Cast long distance skills from a safe spot
	Scripts.BaalHelper = false;
		Config.BaalHelper.Wait = 120; 			// Seconds to wait for a runner to be in Throne
		Config.BaalHelper.KillNihlathak = false; 	// Kill Nihlathak before going to Throne
		Config.BaalHelper.FastChaos = false; 		// Kill Diablo before going to Throne
		Config.BaalHelper.DollQuit = false;  		// End script if Dolls (Undead Soul Killers) are found.
		Config.BaalHelper.KillBaal = true; 		// Kill Baal. If set to false, you must configure Config.QuitList or the bot will wait indefinitely.
		Config.BaalHelper.SkipTP = false; 		// Don't wait for a TP, go to WSK3 and wait for someone to go to throne. Anti PK measure.
	
	// *** Guest scripts ***

	// Baal Assistant by YourGreatestMember
	Scripts.BaalAssistant = false; // Used to leech or help in baal runs.
		Config.BaalAssistant.Wait = 120; // Seconds to wait for a runner to be in the throne / portal wait / safe TP wait / hot TP wait...
		Config.BaalAssistant.KillNihlathak = false; // Kill Nihlathak before going to Throne
		Config.BaalAssistant.FastChaos = false; // Kill Diablo before going to Throne
		Config.BaalAssistant.Helper = true; // Set to true to help attack, set false to to leech.
		Config.BaalAssistant.GetShrine = false; // Set to true to get a experience shrine at the start of the run.
		Config.BaalAssistant.GetShrineWaitForHotTP = false; // Set to true to get a experience shrine after leader shouts the hot tp message as defined in Config.BaalAssistant.HotTPMessage
		Config.BaalAssistant.SkipTP = false; // Set to true to enable the helper to skip the TP and teleport down to the throne room.
		Config.BaalAssistant.WaitForSafeTP = false; // Set to true to wait for a safe TP message (defined in SafeTPMessage)
		Config.BaalAssistant.DollQuit = false; // Quit on dolls. (Hardcore players?)
		Config.BaalAssistant.SoulQuit = false; // Quit on Souls. (Hardcore players?)
		Config.BaalAssistant.KillBaal = true; // Set to true to kill baal, if you set to false you MUST configure Config.QuitList or Config.BaalAssistant.NextGameMessage or the bot will wait indefinitely. 
		Config.BaalAssistant.HotTPMessage = ["Hot"]; // Configure safe TP messages.
		Config.BaalAssistant.SafeTPMessage = ["Safe", "Clear"]; // Configure safe TP messages.
		Config.BaalAssistant.BaalMessage = ["Baal"]; // Configure baal messages, this is a precautionary measure.
		Config.BaalAssistant.NextGameMessage = ["Next Game", "Next", "New Game"];	// Next Game message, this is a precautionary quit command, Reccomended setting up: Config.QuitList
	
	// Additional item info log settings. All info goes to \logs\ItemLog.txt
	Config.ItemInfo = false; // Log stashed, skipped (due to no space) or sold items.
	Config.ItemInfoQuality = []; // The quality of sold items to log. See NTItemAlias.dbl for values. Example: Config.ItemInfoQuality = [6, 7, 8];

	

*/
