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
        es: "Teleportación Personalizada [Ins]"
    },
    {
        Text: "COLOR_ON",
        es: " : <color=green>ACTIVO</color> |"
    },
    {
        Text: "COLOR_OFF",
        es: " : <color=red>DESACTIVADO</color> |"
    },
    {
        Text: "TEXT_ON",
        es: "ACTIVO"
    },
    {
        Text: "TEXT_OFF",
        es: "DESACTIVADO"
    },
    {
        Text: "TEXT_GOD_MODE",
        es: "Modo Dios [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        es: "Golpe Multiplicador [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        es: "Auto Recoger Tesoro [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        es: "Absorción Automática de Eco [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        es: "Matar Enemigos Automáticamente [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        es: "Rango de Interacción [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        es: "Sin Enfriamiento [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        es: "Velocidad del Jugador [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        es: "Teleportación Personalizada [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        es: "Colección de juegos automáticos [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        es: "Estado de Teleportación Personalizada [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        es: " Mostrar [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        es: "Archivo Actual:"
    },
    {
        Text: "TEXT_PREV_FILE",
        es: "| Archivo Anterior [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        es: " | Archivo Siguiente [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        es: " | Posición Anterior [Up]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        es: " | Posición Siguiente [Down]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        es: "Anti Dither"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        es: " | Establecer Retraso [Izquierda]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        es: " | Seleccionar [Derecha]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        es: "es el último archivo"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        es: "es el primer archivo"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        es: "es la última posición"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        es: "es la primera posición"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        es: "Teletransporte Personalizado:Modo Automático:Establecer Retraso"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        es: "Por favor, introduzca el retraso (s)"
    },
    {
        Text: "TEXT_SECONDS",
        es: "segundos"
    },
    {
        Text: "TEXT_GO",
        es: "Ir"
    },
    {
        Text: "TEXT_AUTO_MODE",
        es: "Modo Automático"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        es: "Teletransporte Personalizado:Posición Actual:Seleccionar"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        es: "Por favor, introduzca el número actual"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        es: " | Modo Automático [End]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        es: "Estamina Infinita"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        es: "UID Personalizado"
    },
    {
        Text: "HEADING_PLAYER",
        es: "Jugador"
    },
    {
        Text: "HEADING_WORLD",
        es: "Mundo"
    },
    {
        Text: "HEADING_VISUAL",
        es: "Visual"
    },
    {
        Text: "TEXT_HIDE_HUD",
        es: "Ocultar Interfaz"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        es: "Ocultar Texto de Daño"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        es: "Marcar Teletransporte [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        es: "Solo Agresivo"
    },
    {
        Text: "TEXT_INFINITY",
        es: "Infinito"
    },
    {
        Text: "HEADING_TELEPORT",
        es: "Teletransporte"
    },
    {
        Text: "HEADING_DEBUG",
        es: "Depurar"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        es: "Depurar de Entidades"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        es: "Minería automática [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        es: "Este hack es completamente gratuito, si pagaste por obtenerlo, has sido estafado."
    },
    {
        Text: "TEXT_DESIGNER",
        es: "Diseñador de GUI: n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        es: "Nueva Aura Asesina"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        es: "Velocidad del Mundo"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        es: "Matar Animal"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        es: "Guardar Configuración"
    },
    {
        Text: "TEXT_LANGUAGE",
        es: "Idioma"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        es: "UE4 Consola de comandos"
    },
    {
        Text: "TEXT_FOV",
        es: "Campo de visión"
    },
    {
        Text: "TEXT_SHOW_FPS",
        es: "Mostrar FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        es: "Desbloqueador de FPS"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        es: "Caja de Sonancia"
    },
    {
        Text: "TEXT_PUZZLE",
        es: "Rompecabezas"
    },
    {
        Text: "TEXT_ANIMAL",
        es: "Animal"
    },
    {
        Text: "TEXT_TREASURE",
        es: "Tesoro"
    },
    {
        Text: "TEXT_COLLECTION",
        es: "Colección"
    },
    {
        Text: "TEXT_MONSTER",
        es: "Monstruo"
    },
    {
        Text: "TEXT_SHOW_BOX",
        es: "Mostrar Caja"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        es: "Mostrar Distancia"
    },
    {
        Text: "TEXT_SHOW_NAME",
        es: "Mostrar Nombre"
    },
    {
        Text: "HEADING_ESP",
        es: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        es: "Clima"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        es: "Recolección de vacío"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        es: "Aspiradora monstruo"
    },
    {
        Text: "HEADING_FILTER",
        es: "Filtro"
    },
    {
        Text: "TEXT_SUNNY",
        es: "Soleado"
    },
    {
        Text: "TEXT_CLOUDY",
        es: "Nublado"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        es: "Tormenta"
    },
    {
        Text: "TEXT_SNOW",
        es: "Nieve"
    },
    {
        Text: "TEXT_RAIN",
        es: "Lluvia"
    },
    {
        Text: "TEXT_ROCK",
        es: "Roca"
    },
    {
        Text: "TEXT_MUTTERFLY",
        es: "Mutterfly"
    },
    {
        Text: "TEXT_BLOBFLY",
        es: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        es: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        es: "Saltate la Historia"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        es: "Rompecabezas de resolución automática"
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
