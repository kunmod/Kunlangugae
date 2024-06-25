"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0,
}),
  (exports.ModLanguage = void 0);
const puerts_1 = require("puerts"),
  UE = require("ue"),
  Info_1 = require("../../../Core/Common/Info"),
  Log_1 = require("../../../Core/Common/Log"),
  ModManager_1 = require("../ModManager"),
  LanguageSystem_1 = require("../../../Core/Common/LanguageSystem");

class ModLanguage {
  static GetCurrLang() {
    switch (ModManager_1.ModManager.Settings.Language) {
      case "English":
        return "en";
      case "简体中文":
        return "chs";
      case "日本語":
        return "ja";
      case "Español":
        return "es";
      case "Indonesia":
        return "id";
      case "Vietnamese":
        return "vi";
      case "Korean":
        return "ko";
      default:
        return "en";
    }
  }

  static Langs = [
    "English",
    "简体中文",
    "日本語",
    "Español",
    "Indonesia",
    "Vietnamese",
    "Korean",
  ];

  static translate = [
    {
        Text: "CUSTOM_TP_INS",
        en: "Custom Teleport [Ins]"
    },
    {
        Text: "COLOR_ON",
        en: " : <color=green>ON</color> |"
    },
    {
        Text: "COLOR_OFF",
        en: " : <color=red>OFF</color> |"
    },
    {
        Text: "TEXT_ON",
        en: "ON"
    },
    {
        Text: "TEXT_OFF",
        en: "OFF"
    },
    {
        Text: "TEXT_GOD_MODE",
        en: "God Mode [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        en: "Hit Multiplier [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        en: "Auto Pick Treasure [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        en: "Auto Absorb [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        en: "Auto Kill Enemies [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        en: "Interaction Range [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        en: "No Cooldown [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        en: "Player Speed [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        en: "Custom Teleport [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        en: "Auto Loot [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        en: "Custom Teleport State [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        en: " Show [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        en: "Current File:"
    },
    {
        Text: "TEXT_PREV_FILE",
        en: "| Previous File [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        en: " | Next File [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        en: " | Previous Pos [Up]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        en: " | Next Pos [Down]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        en: "Anti Dither"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        en: " | Set Delay [Left]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        en: " | Select [Right]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        en: "is the last file"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        en: "is the first file"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        en: "is the last position"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        en: "is the first position"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        en: "Custom Teleport:Auto Mode:Set Delay"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        en: "Please enter Delay (s)"
    },
    {
        Text: "TEXT_SECONDS",
        en: "seconds"
    },
    {
        Text: "TEXT_GO",
        en: "Go"
    },
    {
        Text: "TEXT_AUTO_MODE",
        en: "Auto Mode"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        en: "Custom Teleport:Current Position:Select"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        en: "Please enter current num"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        en: " | Auto Mode [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        en: "Infinite Stamina"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        en: "Custom UID"
    },
    {
        Text: "HEADING_PLAYER",
        en: "Player"
    },
    {
        Text: "HEADING_WORLD",
        en: "World"
    },
    {
        Text: "HEADING_VISUAL",
        en: "Visual"
    },
    {
        Text: "TEXT_HIDE_HUD",
        en: "Hide HUD"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        en: "Hide Damage Text"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        en: "Mark Teleport [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        en: "Only Aggro"
    },
    {
        Text: "TEXT_INFINITY",
        en: "Infinity"
    },
    {
        Text: "HEADING_TELEPORT",
        en: "Teleport"
    },
    {
        Text: "HEADING_DEBUG",
        en: "Debug"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        en: "Entity Debugger"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        en: "Auto Mining [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        en: "This hack is completely free, if you paid to get this, you have been scammed."
    },
    {
        Text: "TEXT_DESIGNER",
        en: "GUI Designer: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        en: "New Kill Aura"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        en: "World Speed"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        en: "Kill Animal"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        en: "Save Config"
    },
    {
        Text: "TEXT_LANGUAGE",
        en: "Language"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        en: "UE4 Console Command"
    },
    {
        Text: "TEXT_FOV",
        en: "Field of Vision"
    },
    {
        Text: "TEXT_SHOW_FPS",
        en: "Show FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        en: "FPS Unlocker"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        en: "Sonance Casket"
    },
    {
        Text: "TEXT_PUZZLE",
        en: "Puzzle"
    },
    {
        Text: "TEXT_ANIMAL",
        en: "Animal"
    },
    {
        Text: "TEXT_TREASURE",
        en: "Treasure"
    },
    {
        Text: "TEXT_COLLECTION",
        en: "Collection"
    },
    {
        Text: "TEXT_MONSTER",
        en: "Monster"
    },
    {
        Text: "TEXT_SHOW_BOX",
        en: "Show Box"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        en: "Show Distance"
    },
    {
        Text: "TEXT_SHOW_NAME",
        en: "Show Name"
    },
    {
        Text: "HEADING_ESP",
        en: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        en: "Weather"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        en: "Collection Vacuum"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        en: "Monster Vacuum"
    },
    {
        Text: "HEADING_FILTER",
        en: "Filter"
    },
    {
        Text: "TEXT_SUNNY",
        en: "Sunny"
    },
    {
        Text: "TEXT_CLOUDY",
        en: "Cloudy"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        en: "Thunderstorm"
    },
    {
        Text: "TEXT_SNOW",
        en: "Snow"
    },
    {
        Text: "TEXT_RAIN",
        en: "Rain"
    },
    {
        Text: "TEXT_ROCK",
        en: "Rock"
    },
    {
        Text: "TEXT_MUTTERFLY",
        en: "Mutterfly"
    },
    {
        Text: "TEXT_BLOBFLY",
        en: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        en: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        en: "Plot Skip"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        en: "Auto Solve Puzzle"
    }
];

  static ModTr = (string) => {
    const Find = ModLanguage.translate.find(
      (translate) => translate.Text == string
    );
    if (Find) {
      return Find[this.GetCurrLang()] || Find.Text;
    } else {
      return string; // return original string if no translation found
    }
  };
}

exports.ModLanguage = ModLanguage;
