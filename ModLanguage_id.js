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
        id: "Kustom Teleport [Ins]"
    },
    {
        Text: "COLOR_ON",
        id: " : <color=green>ON</color> |"
    },
    {
        Text: "COLOR_OFF",
        id: " : <color=red>OFF</color> |"
    },
    {
        Text: "TEXT_ON",
        id: "ON"
    },
    {
        Text: "TEXT_OFF",
        id: "OFF"
    },
    {
        Text: "TEXT_GOD_MODE",
        id: "Mode Dewa [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        id: "Pengganda Hit [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        id: "Ambil Harta Otomatis [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        id: "Serap Echo Otomatis [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        id: "Bunuh Musuh Otomatis [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        id: "Jarak Interaksi [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        id: "Tanpa Cooldown [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        id: "Kecepatan Pemain [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        id: "Kustom Teleport [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        id: "Otomatis Mengambil Barang [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        id: "Status Kustom Teleport [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        id: " Tampilkan [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        id: "File Saat Ini:"
    },
    {
        Text: "TEXT_PREV_FILE",
        id: "| File Sebelumnya [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        id: " | File Berikutnya [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        id: " | Posisi Sebelumnya [Atas]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        id: " | Posisi Berikutnya [Bawah]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        id: "Anti Blur"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        id: " | Atur Jeda [Kiri]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        id: " | Pilih [Kanan]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        id: "adalah file terakhir"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        id: "adalah file pertama"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        id: "adalah posisi terakhir"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        id: "adalah posisi pertama"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        id: "Kustom Teleport: Mode Otomatis: Atur Jeda"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        id: "Silakan masukkan Jeda (detik)"
    },
    {
        Text: "TEXT_SECONDS",
        id: "detik"
    },
    {
        Text: "TEXT_GO",
        id: "Pergi"
    },
    {
        Text: "TEXT_AUTO_MODE",
        id: "Mode Otomatis"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        id: "Kustom Teleport: Posisi Saat Ini: Pilih"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        id: "Silakan masukkan Nomor saat ini"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        id: " | Mode Otomatis [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        id: "Stamina Tak Terbatas"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        id: "UID Kustom"
    },
    {
        Text: "HEADING_PLAYER",
        id: "Pemain"
    },
    {
        Text: "HEADING_WORLD",
        id: "Dunia"
    },
    {
        Text: "HEADING_VISUAL",
        id: "Visual"
    },
    {
        Text: "TEXT_HIDE_HUD",
        id: "Sembunyikan HUD"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        id: "Sembunyikan Teks Damage"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        id: "Tandai Teleport [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        id: "Hanya Kebencian"
    },
    {
        Text: "TEXT_INFINITY",
        id: "Tak Terbatas"
    },
    {
        Text: "HEADING_TELEPORT",
        id: "Teleportasi"
    },
    {
        Text: "HEADING_DEBUG",
        id: "Debug"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        id: "Debugger Entitas"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        id: "Penambangan Otomatis [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        id: "Hack ini sepenuhnya gratis, jika Anda membayar untuk mendapatkan ini, Anda telah tertipu."
    },
    {
        Text: "TEXT_DESIGNER",
        id: "Perancang GUI: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        id: "Aura Pembunuh Baru"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        id: "Kecepatan Dunia"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        id: "Bunuh Hewan"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        id: "Simpan Konfigurasi"
    },
    {
        Text: "TEXT_LANGUAGE",
        id: "Bahasa"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        id: "Perintah Konsol UE4"
    },
    {
        Text: "TEXT_FOV",
        id: "Sudut Pandang"
    },
    {
        Text: "TEXT_SHOW_FPS",
        id: "Tampilkan FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        id: "Buka Kunci FPS"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        id: "Sonance Casket"
    },
    {
        Text: "TEXT_PUZZLE",
        id: "Teka-teki"
    },
    {
        Text: "TEXT_ANIMAL",
        id: "Hewan"
    },
    {
        Text: "TEXT_TREASURE",
        id: "Harta"
    },
    {
        Text: "TEXT_COLLECTION",
        id: "Koleksi"
    },
    {
        Text: "TEXT_MONSTER",
        id: "Monster"
    },
    {
        Text: "TEXT_SHOW_BOX",
        id: "Tampilkan Box"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        id: "Tampilkan Jarak"
    },
    {
        Text: "TEXT_SHOW_NAME",
        id: "Tampilkan Nama"
    },
    {
        Text: "HEADING_ESP",
        id: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        id: "Cuaca"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        id: "Vakum Koleksi"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        id: "Vakum Musuh"
    },
    {
        Text: "HEADING_FILTER",
        id: "Saring"
    },
    {
        Text: "TEXT_SUNNY",
        id: "Cerah"
    },
    {
        Text: "TEXT_CLOUDY",
        id: "Berawan"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        id: "Hujan Badai"
    },
    {
        Text: "TEXT_SNOW",
        id: "Salju"
    },
    {
        Text: "TEXT_RAIN",
        id: "Hujan"
    },
    {
        Text: "TEXT_ROCK",
        id: "Batu"
    },
    {
        Text: "TEXT_MUTTERFLY",
        id: "Kupu-kupu"
    },
    {
        Text: "TEXT_BLOBFLY",
        id: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        id: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        id: "Lewati Cerita"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        id: "Pemecahan Teka-teki Otomatis"
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
