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
        vi: "Dịch Chuyển Tùy Chỉnh [Ins]"
    },
    {
        Text: "COLOR_ON",
        vi: " : <color=green>BẬT</color> |"
    },
    {
        Text: "COLOR_OFF",
        vi: " : <color=red>TẮT</color> |"
    },
    {
        Text: "TEXT_ON",
        vi: "Bật"
    },
    {
        Text: "TEXT_OFF",
        vi: "TẮT"
    },
    {
        Text: "TEXT_GOD_MODE",
        vi: "Bất Tử [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        vi: "Số Lượng Đòn Đánh [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        vi: "Tự Động Nhặt Phần Thưởng [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        vi: "Tự Động Hấp Thụ Echo [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        vi: "Tự động tiêu diệt kẻ thù [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        vi: "Phạm vi tương tác [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        vi: "Không Thời Gian Hồi Chiêu [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        vi: "Tốc độ nhân vật [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        vi: "Dịch Chuyển Tùy Chỉnh [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        vi: "bộ sưu tập tự động hóa [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        vi: "Trạng thái dịch chuyển [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        vi: " Hiện [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        vi: "File Hiện Tại:"
    },
    {
        Text: "TEXT_PREV_FILE",
        vi: "| File Trước [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        vi: " | File Kế [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        vi: " | Vị Trí Trước [TRÊN]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        vi: " | Vị Trí Kế [Thấp hơn]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        vi: "Chống làm mờ nhân vật"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        vi: " | Đặt Độ Trễ [Bên trái]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        vi: " | Chọn [Phải]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        vi: "là file cuối cùng"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        vi: "là file đầu tiên"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        vi: "là vị trí cuối cùng"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        vi: "là vị trí đầu tiên"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        vi: "Dịch chuyển tùy chỉnh:Chế độ tự động:Thiết lập độ trễ"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        vi: "Hãy nhập độ trễ (giây)"
    },
    {
        Text: "TEXT_SECONDS",
        vi: "giây"
    },
    {
        Text: "TEXT_GO",
        vi: "Đi"
    },
    {
        Text: "TEXT_AUTO_MODE",
        vi: "Tự Động"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        vi: "Dịch chuyển tùy chỉnh:Vị trí hiện tại:Chọn"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        vi: "Xin vui lòng nhập vị tri"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        vi: " | Tự Động [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        vi: "Vô hạn năng lượng"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        vi: "UID Tùy Chỉnh"
    },
    {
        Text: "HEADING_PLAYER",
        vi: "Người chơi"
    },
    {
        Text: "HEADING_WORLD",
        vi: "Thế giới"
    },
    {
        Text: "HEADING_VISUAL",
        vi: "Thị giác"
    },
    {
        Text: "TEXT_HIDE_HUD",
        vi: "Ẩn HUD"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        vi: "Không hiện sát thương"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        vi: "Đánh dấu để dịch chuyển [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        vi: "Chỉ hung hăng"
    },
    {
        Text: "TEXT_INFINITY",
        vi: "Vô hạn"
    },
    {
        Text: "HEADING_TELEPORT",
        vi: "Dịch chuyển"
    },
    {
        Text: "HEADING_DEBUG",
        vi: "Gỡ lỗi"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        vi: "Trình gỡ lỗi thực thể"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        vi: "Khai thác tự động"
    },
    {
        Text: "TEXT_DISCLAIMER",
        vi: "Bản hack này hoàn toàn miễn phí, nếu bạn đã mua nó từ ai, bạn đã bị lừa đảo."
    },
    {
        Text: "TEXT_DESIGNER",
        vi: "Thiết kế GUI: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        vi: "Tàn Sát Phiên Bản Mới"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        vi: "Tốc Độ Thế Giới"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        vi: "Giết Động Vật"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        vi: "Lưu Cấu hình"
    },
    {
        Text: "TEXT_LANGUAGE",
        vi: "Ngôn ngữ"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        vi: "Lệnh điều khiển UE4"
    },
    {
        Text: "TEXT_FOV",
        vi: "Tầm nhìn"
    },
    {
        Text: "TEXT_SHOW_FPS",
        vi: "Chương FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        vi: "Mở khóa FPS"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        vi: "Quan tài Sonance"
    },
    {
        Text: "TEXT_PUZZLE",
        vi: "Câu đố"
    },
    {
        Text: "TEXT_ANIMAL",
        vi: "Động vật"
    },
    {
        Text: "TEXT_TREASURE",
        vi: "Kho báu"
    },
    {
        Text: "TEXT_COLLECTION",
        vi: "Bộ sưu tập"
    },
    {
        Text: "TEXT_MONSTER",
        vi: "Quái vật"
    },
    {
        Text: "TEXT_SHOW_BOX",
        vi: "Hiển thị hộp"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        vi: "Hiển thị khoảng cách"
    },
    {
        Text: "TEXT_SHOW_NAME",
        vi: "Hiện tên"
    },
    {
        Text: "HEADING_ESP",
        vi: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        vi: "Thời tiết"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        vi: "Thu thập chân không"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        vi: "Máy hút bụi quái vật"
    },
    {
        Text: "HEADING_FILTER",
        vi: "Lọc"
    },
    {
        Text: "TEXT_SUNNY",
        vi: "Sáng"
    },
    {
        Text: "TEXT_CLOUDY",
        vi: "Nhiều mây"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        vi: "Dông"
    },
    {
        Text: "TEXT_SNOW",
        vi: "Tuyết"
    },
    {
        Text: "TEXT_RAIN",
        vi: "Cơn mưa"
    },
    {
        Text: "TEXT_ROCK",
        vi: "Đá"
    },
    {
        Text: "TEXT_MUTTERFLY",
        vi: "Mutterfly"
    },
    {
        Text: "TEXT_BLOBFLY",
        vi: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        vi: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        vi: "Bỏ qua câu chuyện"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        vi: "Tự động giải câu đố"
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
