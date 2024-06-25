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
        ko: "사용자 정의 텔레포트 [Ins]"
    },
    {
        Text: "COLOR_ON",
        ko: " : <color=greko>에</color> |"
    },
    {
        Text: "COLOR_OFF",
        ko: " : <color=red>끄다</color> |"
    },
    {
        Text: "TEXT_ON",
        ko: "에"
    },
    {
        Text: "TEXT_OFF",
        ko: "끄다"
    },
    {
        Text: "TEXT_GOD_MODE",
        ko: "신 모드 [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        ko: "히트 멀티플라이어 [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        ko: "자동 보물 선택 [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        ko: "자동 에코 흡수 [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        ko: "자동 적 사살 [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        ko: "상호작용 범위 [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        ko: "쿨다운 없음 [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        ko: "플레이어 속도 [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        ko: "사용자 정의 텔레포트 [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        ko: "자동 콜렉시 펜감빌 [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        ko: "사용자 정의 텔레포트 상태 [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        ko: " 보여주다 [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        ko: "현재 파일:"
    },
    {
        Text: "TEXT_PREV_FILE",
        ko: "| 이전 파일 [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        ko: " | 다음 파일 [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        ko: " | 이전 위치 [올라]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        ko: " | 다음 위치 [낮추다]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        ko: "안티 디더"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        ko: " | 지연 설정 [왼쪽]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        ko: " | 선택하다 [카난]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        ko: "마지막 파일입니다"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        ko: "첫 번째 파일입니다"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        ko: "첫 번째 위치입니다"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        ko: "첫 번째 위치입니다"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        ko: "사용자 지정 텔레포트: 자동 모드: 지연 설정"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        ko: "지연을 입력하세요 (초)"
    },
    {
        Text: "TEXT_SECONDS",
        ko: "초"
    },
    {
        Text: "TEXT_GO",
        ko: "가다"
    },
    {
        Text: "TEXT_AUTO_MODE",
        ko: "자동 모드"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        ko: "사용자 지정 텔레포트:현재 위치:선택"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        ko: "현재 번호를 입력하세요"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        ko: " | 자동 모드 [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        ko: "무한한 체력"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        ko: "사용자 정의 UID"
    },
    {
        Text: "HEADING_PLAYER",
        ko: "플레이어"
    },
    {
        Text: "HEADING_WORLD",
        ko: "세계"
    },
    {
        Text: "HEADING_VISUAL",
        ko: "시각적"
    },
    {
        Text: "TEXT_HIDE_HUD",
        ko: "HUD 숨기기"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        ko: "손상 텍스트 숨기기"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        ko: "마크 텔레포트 [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        ko: "그냥 공격적"
    },
    {
        Text: "TEXT_INFINITY",
        ko: "무한대"
    },
    {
        Text: "HEADING_TELEPORT",
        ko: "순간이동"
    },
    {
        Text: "HEADING_DEBUG",
        ko: "디버그"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        ko: "엔티티 디버거"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        ko: "자동 채굴 [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        ko: "이 해킹은 완전히 무료입니다. 이것을 얻기 위해 돈을 지불했다면 당신은 베코 사기를 당한 것입니다."
    },
    {
        Text: "TEXT_DESIGNER",
        ko: "GUI 디자이너: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        ko: "새로운 킬 오라"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        ko: "세계 속도"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        ko: "동물을 죽이다"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        ko: "구성 저장"
    },
    {
        Text: "TEXT_LANGUAGE",
        ko: "언어"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        ko: "UE4 콘솔 명령"
    },
    {
        Text: "TEXT_FOV",
        ko: "시야"
    },
    {
        Text: "TEXT_SHOW_FPS",
        ko: "FPS 표시"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        ko: "FPS 잠금 해제"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        ko: "소넌스 관"
    },
    {
        Text: "TEXT_PUZZLE",
        ko: "퍼즐"
    },
    {
        Text: "TEXT_ANIMAL",
        ko: "동물"
    },
    {
        Text: "TEXT_TREASURE",
        ko: "보물"
    },
    {
        Text: "TEXT_COLLECTION",
        ko: "수집"
    },
    {
        Text: "TEXT_MONSTER",
        ko: "괴물"
    },
    {
        Text: "TEXT_SHOW_BOX",
        ko: "쇼 박스"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        ko: "거리 표시"
    },
    {
        Text: "TEXT_SHOW_NAME",
        ko: "이름 표시"
    },
    {
        Text: "HEADING_ESP",
        ko: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        ko: "날씨"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        ko: "수집 진공"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        ko: "몬스터 진공 청소기"
    },
    {
        Text: "HEADING_FILTER",
        ko: "필터"
    },
    {
        Text: "TEXT_SUNNY",
        ko: "밝은"
    },
    {
        Text: "TEXT_CLOUDY",
        ko: "흐림"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        ko: "뇌우"
    },
    {
        Text: "TEXT_SNOW",
        ko: "눈"
    },
    {
        Text: "TEXT_RAIN",
        ko: "비"
    },
    {
        Text: "TEXT_ROCK",
        ko: "바위"
    },
    {
        Text: "TEXT_MUTTERFLY",
        ko: "Mutterfly"
    },
    {
        Text: "TEXT_BLOBFLY",
        ko: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        ko: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        ko: "스토리 건너뛰기"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        ko: "자동 퍼즐 풀기"
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
