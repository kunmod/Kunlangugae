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
        ja: "てきとうな瞬間移動 [Ins]"
    },
    {
        Text: "COLOR_ON",
        ja: " : <color=green>オン</color>"
    },
    {
        Text: "COLOR_OFF",
        ja: " : <color=red>オフ</color>"
    },
    {
        Text: "TEXT_ON",
        ja: "オン"
    },
    {
        Text: "TEXT_OFF",
        ja: "オフ"
    },
    {
        Text: "TEXT_GOD_MODE",
        ja: "神モードやで [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        ja: "ヒット倍率 [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        ja: "自動で宝を拾うんや [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        ja: "自動エコー吸収 [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        ja: "敵を自動で倒す [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        ja: "相互作用範囲 [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        ja: "クールダウンなしやで [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        ja: "プレイヤーのスピードやで [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        ja: "てきとうな瞬間移動 [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        ja: "自動小冊子の保存 [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        ja: "カスタムテレポートの状態 [Insert]"
    },
    {
        Text: "TEXT_SHOW_DEL",
        ja: " ショー [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        ja: "今のファイル:"
    },
    {
        Text: "TEXT_PREV_FILE",
        ja: "| 前のファイル [PageUp]"
    },
    {
        Text: "TEXT_NEXT_FILE",
        ja: " | つぎのファイル [PageDown]"
    },
    {
        Text: "TEXT_PREV_POS",
        ja: " | 前のポジション [上矢印]"
    },
    {
        Text: "TEXT_NEXT_POS",
        ja: " | つぎのポジション [下]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        ja: "アンチディザ"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        ja: " | 遅延を設定する [左]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        ja: " | 選択する [右]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        ja: "最後のファイルです"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        ja: "最初のファイルです"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        ja: "最初の位置"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        ja: "最初の位置"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        ja: "カスタムテレポート:自動モード:遅延の設定"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        ja: "遅延を入力してください (秒)"
    },
    {
        Text: "TEXT_SECONDS",
        ja: "秒"
    },
    {
        Text: "TEXT_GO",
        ja: "行く"
    },
    {
        Text: "TEXT_AUTO_MODE",
        ja: "オートモード"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        ja: "カスタムテレポート:現在の位置:選択"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        ja: "現在の番号を入力してください"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        ja: " | オートモード [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        ja: "無限のスタミナ"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        ja: "カスタムUID"
    },
    {
        Text: "HEADING_PLAYER",
        ja: "プレーヤー"
    },
    {
        Text: "HEADING_WORLD",
        ja: "世界"
    },
    {
        Text: "HEADING_VISUAL",
        ja: "ビジュアル"
    },
    {
        Text: "TEXT_HIDE_HUD",
        ja: "HUDを非表示"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        ja: "ダメージテキストを非表示"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        ja: "マークテレポート [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        ja: "まさにアグレッシブ"
    },
    {
        Text: "TEXT_INFINITY",
        ja: "無限"
    },
    {
        Text: "HEADING_TELEPORT",
        ja: "テレポート"
    },
    {
        Text: "HEADING_DEBUG",
        ja: "デバッグ"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        ja: "エンティティデバッガー"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        ja: "自動マイニング [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        ja: "このハックは完全に無料です。これを入手するためにお金を払った場合は、詐欺に遭ったことになります。"
    },
    {
        Text: "TEXT_DESIGNER",
        ja: "GUI 作成者: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        ja: "新しいキルオーラ"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        ja: "世界スピード"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        ja: "動物を殺す"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        ja: "設定を保存"
    },
    {
        Text: "TEXT_LANGUAGE",
        ja: "言語"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        ja: "UE4コンソール コマンド"
    },
    {
        Text: "TEXT_FOV",
        ja: "視野角"
    },
    {
        Text: "TEXT_SHOW_FPS",
        ja: "FPSを表示"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        ja: "FPSアンロック"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        ja: "ソナンスカスケット"
    },
    {
        Text: "TEXT_PUZZLE",
        ja: "パズル"
    },
    {
        Text: "TEXT_ANIMAL",
        ja: "動物"
    },
    {
        Text: "TEXT_TREASURE",
        ja: "宝物"
    },
    {
        Text: "TEXT_COLLECTION",
        ja: "コレクション"
    },
    {
        Text: "TEXT_MONSTER",
        ja: "モンスター"
    },
    {
        Text: "TEXT_SHOW_BOX",
        ja: "表示ボックス"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        ja: "距離を表示します"
    },
    {
        Text: "TEXT_SHOW_NAME",
        ja: "ショー名"
    },
    {
        Text: "HEADING_ESP",
        ja: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        ja: "天気"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        ja: "収集真空"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        ja: "モンスターバキューム"
    },
    {
        Text: "HEADING_FILTER",
        ja: "フィルター"
    },
    {
        Text: "TEXT_SUNNY",
        ja: "SUNNY"
    },
    {
        Text: "TEXT_CLOUDY",
        ja: "曇り"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        ja: "雷雨"
    },
    {
        Text: "TEXT_SNOW",
        ja: "雪"
    },
    {
        Text: "TEXT_RAIN",
        ja: "雨"
    },
    {
        Text: "TEXT_ROCK",
        ja: "ロック"
    },
    {
        Text: "TEXT_MUTTERFLY",
        ja: "隙声蝶"
    },
    {
        Text: "TEXT_BLOBFLY",
        ja: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        ja: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        ja: "プロットのスキップ"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        ja: "Auto Puzzle"
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
