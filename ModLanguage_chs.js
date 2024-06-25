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
        chs: "自定义传送 [Ins]"
    },
    {
        Text: "COLOR_ON",
        chs: " : <color=green>开启</color> |"
    },
    {
        Text: "COLOR_OFF",
        chs: " : <color=red>关闭</color> |"
    },
    {
        Text: "TEXT_ON",
        chs: "开启"
    },
    {
        Text: "TEXT_OFF",
        chs: "关闭"
    },
    {
        Text: "TEXT_GOD_MODE",
        chs: "无敌模式 [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        chs: "多倍攻击 [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        chs: "拾取宝箱 [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        chs: "自动吸收 [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        chs: "杀戮光环 [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        chs: "感知范围 [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        chs: "无冷却 [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        chs: "玩家速度 [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        chs: "自定义传送 [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        chs: "自动拾取 [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        chs: "自定义传送状态 [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        chs: " 显示 [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        chs: "当前文件:"
    },
    {
        Text: "TEXT_PREV_FILE",
        chs: "| 上一个文件 [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        chs: " | 下一个文件 [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        chs: " | 上一个位置 [Up]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        chs: " | 下一个位置 [Down]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        chs: "反虚化"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        chs: " | 延迟 [Left]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        chs: " | 选择pos [Right]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        chs: "这是最后一个文件"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        chs: "这是第一个文件"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        chs: "这是最后一个点位"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        chs: "这是第一个点位"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        chs: "自定义传送:自动模式:设置延迟"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        chs: "请输入延迟 (秒)"
    },
    {
        Text: "TEXT_SECONDS",
        chs: "秒"
    },
    {
        Text: "TEXT_GO",
        chs: "出发"
    },
    {
        Text: "TEXT_AUTO_MODE",
        chs: "自动模式"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        chs: "自定义传送:当前序号:选择"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        chs: "请输入当前序号"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        chs: " | 自动模式 [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        chs: "无限体力"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        chs: "自定义UID"
    },
    {
        Text: "HEADING_PLAYER",
        chs: "玩家"
    },
    {
        Text: "HEADING_WORLD",
        chs: "世界"
    },
    {
        Text: "HEADING_VISUAL",
        chs: "视觉"
    },
    {
        Text: "TEXT_HIDE_HUD",
        chs: "隐藏HUD"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        chs: "隐藏伤害文字"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        chs: "标记传送 [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        chs: "只有仇恨"
    },
    {
        Text: "TEXT_INFINITY",
        chs: "无限"
    },
    {
        Text: "HEADING_TELEPORT",
        chs: "传送"
    },
    {
        Text: "HEADING_DEBUG",
        chs: "调试"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        chs: "调试实体"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        chs: "自动销毁 [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        chs: "此黑客程序完全免费，如果您付费获得此程序，则您被骗了。"
    },
    {
        Text: "TEXT_DESIGNER",
        chs: "GUI设计师： n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        chs: "新杀戮光环"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        chs: "世界速度"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        chs: "杀死动物"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        chs: "保存配置"
    },
    {
        Text: "TEXT_LANGUAGE",
        chs: "语言"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        chs: "UE4虚幻控制台命令"
    },
    {
        Text: "TEXT_FOV",
        chs: "眼界"
    },
    {
        Text: "TEXT_SHOW_FPS",
        chs: "显示FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        chs: "FPS解锁"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        chs: "声匣"
    },
    {
        Text: "TEXT_PUZZLE",
        chs: "解谜"
    },
    {
        Text: "TEXT_ANIMAL",
        chs: "动物"
    },
    {
        Text: "TEXT_TREASURE",
        chs: "箱子"
    },
    {
        Text: "TEXT_COLLECTION",
        chs: "收集品"
    },
    {
        Text: "TEXT_MONSTER",
        chs: "怪物"
    },
    {
        Text: "TEXT_SHOW_BOX",
        chs: "展示方框"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        chs: "显示距离"
    },
    {
        Text: "TEXT_SHOW_NAME",
        chs: "显示名称"
    },
    {
        Text: "HEADING_ESP",
        chs: "透视"
    },
    {
        Text: "TEXT_WEATHER",
        chs: "天气"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        chs: "吸收集品"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        chs: "吸怪"
    },
    {
        Text: "HEADING_FILTER",
        chs: "筛选"
    },
    {
        Text: "TEXT_SUNNY",
        chs: "晴天"
    },
    {
        Text: "TEXT_CLOUDY",
        chs: "多云的"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        chs: "雷雨"
    },
    {
        Text: "TEXT_SNOW",
        chs: "雪"
    },
    {
        Text: "TEXT_RAIN",
        chs: "雨"
    },
    {
        Text: "TEXT_ROCK",
        chs: "岩石解谜"
    },
    {
        Text: "TEXT_MUTTERFLY",
        chs: "隙声蝶"
    },
    {
        Text: "TEXT_BLOBFLY",
        chs: "飞猎手"
    },
    {
        Text: "TEXT_NOCLIP",
        chs: "空中飞人"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        chs: "剧情跳过"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        chs: "自动解谜"
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
