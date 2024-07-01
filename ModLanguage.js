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
        chs: "自定义传送 [Ins]",
        en: "Custom Teleport [Ins]",
        es: "Teleportación Personalizada [Ins]",
        id: "Kustom Teleport [Ins]",
        ja: "てきとうな瞬間移動 [Ins]",
        ko: "사용자 정의 텔레포트 [Ins]",
        vi: "Dịch Chuyển Tùy Chỉnh [Ins]",
        fr: "Téléportation perso [Ins]"
    },
    {
        Text: "COLOR_ON",
        chs: " : <color=green>开启</color> |",
        en: " : <color=green>ON</color> |",
        es: " : <color=green>ACTIVO</color> |",
        id: " : <color=green>ON</color> |",
        ja: " : <color=green>オン</color>",
        ko: " : <color=greko>에</color> |",
        vi: " : <color=green>BẬT</color> |",
        fr: " : <color=green>ON</color> |"
    },
    {
        Text: "COLOR_OFF",
        chs: " : <color=red>关闭</color> |",
        en: " : <color=red>OFF</color> |",
        es: " : <color=red>DESACTIVADO</color> |",
        id: " : <color=red>OFF</color> |",
        ja: " : <color=red>オフ</color>",
        ko: " : <color=red>끄다</color> |",
        vi: " : <color=red>TẮT</color> |",
        fr: " : <color=red>OFF</color> |"
    },
    {
        Text: "TEXT_ON",
        chs: "开启",
        en: "ON",
        es: "ACTIVO",
        id: "ON",
        ja: "オン",
        ko: "에",
        vi: "Bật",
        fr: "ON"
    },
    {
        Text: "TEXT_OFF",
        chs: "关闭",
        en: "OFF",
        es: "DESACTIVADO",
        id: "OFF",
        ja: "オフ",
        ko: "끄다",
        vi: "TẮT",
        fr: "OFF"
    },
    {
        Text: "TEXT_GOD_MODE",
        chs: "无敌模式 [F5]",
        en: "God Mode [F5]",
        es: "Modo Dios [F5]",
        id: "Mode Dewa [F5]",
        ja: "神モードやで [F5]",
        ko: "신 모드 [F5]",
        vi: "Bất Tử [F5]",
        fr: "Invincibilité [F5]"
    },
    {
        Text: "TEXT_HIT_MULTIPLIER",
        chs: "多倍攻击 [F6]",
        en: "Hit Multiplier [F6]",
        es: "Golpe Multiplicador [F6]",
        id: "Pengganda Hit [F6]",
        ja: "ヒット倍率 [F6]",
        ko: "히트 멀티플라이어 [F6]",
        vi: "Số Lượng Đòn Đánh [F6]",
        fr: "Multiplicateur de coups [F6]"
    },
    {
        Text: "TEXT_AUTO_PICK_TREASURE",
        chs: "拾取宝箱 [F7]",
        en: "Auto Pick Treasure [F7]",
        es: "Auto Recoger Tesoro [F7]",
        id: "Ambil Harta Otomatis [F7]",
        ja: "自動で宝を拾うんや [F7]",
        ko: "자동 보물 선택 [F7]",
        vi: "Tự Động Nhặt Phần Thưởng [F7]",
        fr: "Ramassage auto [F7]"
    },
    {
        Text: "TEXT_AUTO_ABSORB",
        chs: "自动吸收 [F8]",
        en: "Auto Absorb [F8]",
        es: "Absorción Automática de Eco [F8]",
        id: "Serap Echo Otomatis [F8]",
        ja: "自動エコー吸収 [F8]",
        ko: "자동 에코 흡수 [F8]",
        vi: "Tự Động Hấp Thụ Echo [F8]",
        fr: "Absorption auto [F8]"
    },
    {
        Text: "TEXT_KILL_AURA",
        chs: "杀戮光环 [F9]",
        en: "Auto Kill Enemies [F9]",
        es: "Matar Enemigos Automáticamente [F9]",
        id: "Bunuh Musuh Otomatis [F9]",
        ja: "敵を自動で倒す [F9]",
        ko: "자동 적 사살 [F9]",
        vi: "Tự động tiêu diệt kẻ thù [F9]",
        fr: "Kill aura [F9]"
    },
    {
        Text: "TEXT_PERCEPTION_RANGE",
        chs: "感知范围 [F10]",
        en: "Interaction Range [F10]",
        es: "Rango de Interacción [F10]",
        id: "Jarak Interaksi [F10]",
        ja: "相互作用範囲 [F10]",
        ko: "상호작용 범위 [F10]",
        vi: "Phạm vi tương tác [F10]",
        fr: "Portée de perception [F10]"
    },
    {
        Text: "TEXT_NO_COOLDOWN",
        chs: "无冷却 [F11]",
        en: "No Cooldown [F11]",
        es: "Sin Enfriamiento [F11]",
        id: "Tanpa Cooldown [F11]",
        ja: "クールダウンなしやで [F11]",
        ko: "쿨다운 없음 [F11]",
        vi: "Không Thời Gian Hồi Chiêu [F11]",
        fr: "Pas de CD [F11]"
    },
    {
        Text: "TEXT_PLAYER_SPEED",
        chs: "玩家速度 [F12]",
        en: "Player Speed [F12]",
        es: "Velocidad del Jugador [F12]",
        id: "Kecepatan Pemain [F12]",
        ja: "プレイヤーのスピードやで [F12]",
        ko: "플레이어 속도 [F12]",
        vi: "Tốc độ nhân vật [F12]",
        fr: "Vitesse joueur [F12]"
    },
    {
        Text: "TEXT_CUSTOM_TP",
        chs: "自定义传送 [INS]",
        en: "Custom Teleport [INS]",
        es: "Teleportación Personalizada [INS]",
        id: "Kustom Teleport [INS]",
        ja: "てきとうな瞬間移動 [INS]",
        ko: "사용자 정의 텔레포트 [INS]",
        vi: "Dịch Chuyển Tùy Chỉnh [INS]",
        fr: "Téléportation perso [INS]"
    },
    {
        Text: "TEXT_AUTO_LOOT",
        chs: "自动拾取 [Num0]",
        en: "Auto Loot [Num0]",
        es: "Colección de juegos automáticos [Num0]",
        id: "Otomatis Mengambil Barang [Num0]",
        ja: "自動小冊子の保存 [Num0]",
        ko: "자동 콜렉시 펜감빌 [Num0]",
        vi: "bộ sưu tập tự động hóa [Num0]",
        fr: "Auto loot [Num0]"
    },
    {
        Text: "TEXT_CUSTOM_TP_STATE",
        chs: "自定义传送状态 [Insert]:",
        en: "Custom Teleport State [Insert]:",
        es: "Estado de Teleportación Personalizada [Insert]:",
        id: "Status Kustom Teleport [Insert]:",
        ja: "カスタムテレポートの状態 [Insert]",
        ko: "사용자 정의 텔레포트 상태 [Insert]:",
        vi: "Trạng thái dịch chuyển [Insert]:",
        fr: "Statut Téléport perso [Insert]:"
    },
    {
        Text: "TEXT_SHOW_DEL",
        chs: " 显示 [Del]",
        en: " Show [Del]",
        es: " Mostrar [Del]",
        id: " Tampilkan [Del]",
        ja: " ショー [Del]",
        ko: " 보여주다 [Del]",
        vi: " Hiện [Del]",
        fr: " Afficher [Del]"
    },
    {
        Text: "TEXT_CURR_FILE",
        chs: "当前文件:",
        en: "Current File:",
        es: "Archivo Actual:",
        id: "File Saat Ini:",
        ja: "今のファイル:",
        ko: "현재 파일:",
        vi: "File Hiện Tại:",
        fr: "Fichier actuel:"
    },
    {
        Text: "TEXT_PREV_FILE",
        chs: "| 上一个文件 [PageUp]:",
        en: "| Previous File [PageUp]:",
        es: "| Archivo Anterior [PageUp]:",
        id: "| File Sebelumnya [PageUp]:",
        ja: "| 前のファイル [PageUp]",
        ko: "| 이전 파일 [PageUp]:",
        vi: "| File Trước [PageUp]:",
        fr: "| Fichier précédent [PageUp]:"
    },
    {
        Text: "TEXT_NEXT_FILE",
        chs: " | 下一个文件 [PageDown]:",
        en: " | Next File [PageDown]:",
        es: " | Archivo Siguiente [PageDown]:",
        id: " | File Berikutnya [PageDown]:",
        ja: " | つぎのファイル [PageDown]",
        ko: " | 다음 파일 [PageDown]:",
        vi: " | File Kế [PageDown]:",
        fr: " | Fichier suivant [PageDown]:"
    },
    {
        Text: "TEXT_PREV_POS",
        chs: " | 上一个位置 [Up]:",
        en: " | Previous Pos [Up]:",
        es: " | Posición Anterior [Up]:",
        id: " | Posisi Sebelumnya [Atas]:",
        ja: " | 前のポジション [上矢印]",
        ko: " | 이전 위치 [올라]:",
        vi: " | Vị Trí Trước [TRÊN]:",
        fr: " | Position précédente [Up]:"
    },
    {
        Text: "TEXT_NEXT_POS",
        chs: " | 下一个位置 [Down]:",
        en: " | Next Pos [Down]:",
        es: " | Posición Siguiente [Down]:",
        id: " | Posisi Berikutnya [Bawah]:",
        ja: " | つぎのポジション [下]:",
        ko: " | 다음 위치 [낮추다]:",
        vi: " | Vị Trí Kế [Thấp hơn]:",
        fr: " | Position suivante [Down]:"
    },
    {
        Text: "TEXT_ANTI_DITHER",
        chs: "反虚化",
        en: "Anti Dither",
        es: "Anti Dither",
        id: "Anti Blur",
        ja: "アンチディザ",
        ko: "안티 디더",
        vi: "Chống làm mờ nhân vật",
        fr: "Anti aliasing"
    },
    {
        Text: "TEXT_SET_DELAY_LEFT",
        chs: " | 延迟 [Left]:",
        en: " | Set Delay [Left]:",
        es: " | Establecer Retraso [Izquierda]:",
        id: " | Atur Jeda [Kiri]:",
        ja: " | 遅延を設定する [左]:",
        ko: " | 지연 설정 [왼쪽]:",
        vi: " | Đặt Độ Trễ [Bên trái]:",
        fr: " | Délai [Gauche]:"
    },
    {
        Text: "TEXT_SELECT_RIGHT",
        chs: " | 选择pos [Right]:",
        en: " | Select [Right]:",
        es: " | Seleccionar [Derecha]:",
        id: " | Pilih [Kanan]:",
        ja: " | 選択する [右]:",
        ko: " | 선택하다 [카난]:",
        vi: " | Chọn [Phải]:",
        fr: " | Sélection [Droite]:"
    },
    {
        Text: "TEXT_IS_LAST_FILE",
        chs: "这是最后一个文件",
        en: "is the last file",
        es: "es el último archivo",
        id: "adalah file terakhir",
        ja: "最後のファイルです",
        ko: "마지막 파일입니다",
        vi: "là file cuối cùng",
        fr: "dernier fichier"
    },
    {
        Text: "TEXT_IS_FIRST_FILE",
        chs: "这是第一个文件",
        en: "is the first file",
        es: "es el primer archivo",
        id: "adalah file pertama",
        ja: "最初のファイルです",
        ko: "첫 번째 파일입니다",
        vi: "là file đầu tiên",
        fr: "premier fichier"
    },
    {
        Text: "TEXT_IS_LAST_POS",
        chs: "这是最后一个点位",
        en: "is the last position",
        es: "es la última posición",
        id: "adalah posisi terakhir",
        ja: "最初の位置",
        ko: "첫 번째 위치입니다",
        vi: "là vị trí cuối cùng",
        fr: "dernière position"
    },
    {
        Text: "TEXT_IS_FIRST_POS",
        chs: "这是第一个点位",
        en: "is the first position",
        es: "es la primera posición",
        id: "adalah posisi pertama",
        ja: "最初の位置",
        ko: "첫 번째 위치입니다",
        vi: "là vị trí đầu tiên",
        fr: "première position"
    },
    {
        Text: "TEXT_CUSTOM_TP_AUTO_MODE_SET_DELAY",
        chs: "自定义传送:自动模式:设置延迟",
        en: "Custom Teleport:Auto Mode:Set Delay",
        es: "Teletransporte Personalizado:Modo Automático:Establecer Retraso",
        id: "Kustom Teleport: Mode Otomatis: Atur Jeda",
        ja: "カスタムテレポート:自動モード:遅延の設定",
        ko: "사용자 지정 텔레포트: 자동 모드: 지연 설정",
        vi: "Dịch chuyển tùy chỉnh:Chế độ tự động:Thiết lập độ trễ",
        fr: "Téléport perso : Auto : Délai"
    },
    {
        Text: "TEXT_ENTER_DELAY",
        chs: "请输入延迟 (秒)",
        en: "Please enter Delay (s)",
        es: "Por favor, introduzca el retraso (s)",
        id: "Silakan masukkan Jeda (detik)",
        ja: "遅延を入力してください (秒)",
        ko: "지연을 입력하세요 (초)",
        vi: "Hãy nhập độ trễ (giây)",
        fr: "Entrer délai (s)"
    },
    {
        Text: "TEXT_SECONDS",
        chs: "秒",
        en: "seconds",
        es: "segundos",
        id: "detik",
        ja: "秒",
        ko: "초",
        vi: "giây",
        fr: "secondes"
    },
    {
        Text: "TEXT_GO",
        chs: "出发",
        en: "Go",
        es: "Ir",
        id: "Pergi",
        ja: "行く",
        ko: "가다",
        vi: "Đi",
        fr: "Go"
    },
    {
        Text: "TEXT_AUTO_MODE",
        chs: "自动模式",
        en: "Auto Mode",
        es: "Modo Automático",
        id: "Mode Otomatis",
        ja: "オートモード",
        ko: "자동 모드",
        vi: "Tự Động",
        fr: "Mode auto"
    },
    {
        Text: "TEXT_CUSTOM_TP_CURR_POS_SELECT",
        chs: "自定义传送:当前序号:选择",
        en: "Custom Teleport:Current Position:Select",
        es: "Teletransporte Personalizado:Posición Actual:Seleccionar",
        id: "Kustom Teleport: Posisi Saat Ini: Pilih",
        ja: "カスタムテレポート:現在の位置:選択",
        ko: "사용자 지정 텔레포트:현재 위치:선택",
        vi: "Dịch chuyển tùy chỉnh:Vị trí hiện tại:Chọn",
        fr: "Téléport perso: Position actuelle: Sélection"
    },
    {
        Text: "TEXT_ENTER_CURR_NUM",
        chs: "请输入当前序号",
        en: "Please enter current num",
        es: "Por favor, introduzca el número actual",
        id: "Silakan masukkan Nomor saat ini",
        ja: "現在の番号を入力してください",
        ko: "현재 번호를 입력하세요",
        vi: "Xin vui lòng nhập vị tri",
        fr: "Entrer numéro"
    },
    {
        Text: "TEXT_AUTO_MODE_END",
        chs: " | 自动模式 [End]:",
        en: " | Auto Mode [End]:",
        es: " | Modo Automático [End]:",
        id: " | Mode Otomatis [End]:",
        ja: " | オートモード [End]:",
        ko: " | 자동 모드 [End]:",
        vi: " | Tự Động [End]:",
        fr: " | Mode auto [Fin]:"
    },
    {
        Text: "TEXT_INFINITE_STAMINA",
        chs: "无限体力",
        en: "Infinite Stamina",
        es: "Estamina Infinita",
        id: "Stamina Tak Terbatas",
        ja: "無限のスタミナ",
        ko: "무한한 체력",
        vi: "Vô hạn năng lượng",
        fr: "Endurance infinie"
    },
    {
        Text: "TEXT_CUSTOM_UID",
        chs: "自定义UID",
        en: "Custom UID",
        es: "UID Personalizado",
        id: "UID Kustom",
        ja: "カスタムUID",
        ko: "사용자 정의 UID",
        vi: "UID Tùy Chỉnh",
        fr: "UID personnalisé"
    },
    {
        Text: "HEADING_PLAYER",
        chs: "玩家",
        en: "Player",
        es: "Jugador",
        id: "Pemain",
        ja: "プレーヤー",
        ko: "플레이어",
        vi: "Người chơi",
        fr: "Joueur"
    },
    {
        Text: "HEADING_WORLD",
        chs: "世界",
        en: "World",
        es: "Mundo",
        id: "Dunia",
        ja: "世界",
        ko: "세계",
        vi: "Thế giới",
        fr: "Monde"
    },
    {
        Text: "HEADING_VISUAL",
        chs: "视觉",
        en: "Visual",
        es: "Visual",
        id: "Visual",
        ja: "ビジュアル",
        ko: "시각적",
        vi: "Thị giác",
        fr: "Visuel"
    },
    {
        Text: "TEXT_HIDE_HUD",
        chs: "隐藏HUD",
        en: "Hide HUD",
        es: "Ocultar Interfaz",
        id: "Sembunyikan HUD",
        ja: "HUDを非表示",
        ko: "HUD 숨기기",
        vi: "Ẩn HUD",
        fr: "Masquer HUD"
    },
    {
        Text: "TEXT_HIDE_DAMAGE_TEXT",
        chs: "隐藏伤害文字",
        en: "Hide Damage Text",
        es: "Ocultar Texto de Daño",
        id: "Sembunyikan Teks Damage",
        ja: "ダメージテキストを非表示",
        ko: "손상 텍스트 숨기기",
        vi: "Không hiện sát thương",
        fr: "Masquer dégâts"
    },
    {
        Text: "TEXT_MARK_TELEPORT",
        chs: "标记传送 [T]",
        en: "Mark Teleport [T]",
        es: "Marcar Teletransporte [T]",
        id: "Tandai Teleport [T]",
        ja: "マークテレポート [T]",
        ko: "마크 텔레포트 [T]",
        vi: "Đánh dấu để dịch chuyển [T]",
        fr: "Marquer TP [T]"
    },
    {
        Text: "TEXT_ONLY_HATE",
        chs: "只有仇恨",
        en: "Only Aggro",
        es: "Solo Agresivo",
        id: "Hanya Kebencian",
        ja: "まさにアグレッシブ",
        ko: "그냥 공격적",
        vi: "Chỉ hung hăng",
        fr: "Haute haine"
    },
    {
        Text: "TEXT_INFINITY",
        chs: "无限",
        en: "Infinity",
        es: "Infinito",
        id: "Tak Terbatas",
        ja: "無限",
        ko: "무한대",
        vi: "Vô hạn",
        fr: "Infini"
    },
    {
        Text: "HEADING_TELEPORT",
        chs: "传送",
        en: "Teleport",
        es: "Teletransporte",
        id: "Teleportasi",
        ja: "テレポート",
        ko: "순간이동",
        vi: "Dịch chuyển",
        fr: "Téléport"
    },
    {
        Text: "HEADING_DEBUG",
        chs: "调试",
        en: "Debug",
        es: "Depurar",
        id: "Debug",
        ja: "デバッグ",
        ko: "디버그",
        vi: "Gỡ lỗi",
        fr: "Débogage"
    },
    {
        Text: "TEXT_DEBUG_ENTITY",
        chs: "调试实体",
        en: "Entity Debugger",
        es: "Depurar de Entidades",
        id: "Debugger Entitas",
        ja: "エンティティデバッガー",
        ko: "엔티티 디버거",
        vi: "Trình gỡ lỗi thực thể",
        fr: "Débogage entité"
    },
    {
        Text: "TEXT_AUTO_DESTROY",
        chs: "自动销毁 [Num1]",
        en: "Auto Mining [Num1]",
        es: "Minería automática [Num1]",
        id: "Penambangan Otomatis [Num1]",
        ja: "自動マイニング [Num1]",
        ko: "자동 채굴 [Num1]",
        vi: "Khai thác tự động",
        fr: "Mine auto [Num1]"
    },
    {
        Text: "TEXT_DISCLAIMER",
        chs: "此黑客程序完全免费，如果您付费获得此程序，则您被骗了。",
        en: "This hack is completely free, if you paid to get this, you have been scammed.",
        es: "Este hack es completamente gratuito, si pagaste por obtenerlo, has sido estafado.",
        id: "Hack ini sepenuhnya gratis, jika Anda membayar untuk mendapatkan ini, Anda telah tertipu.",
        ja: "このハックは完全に無料です。これを入手するためにお金を払った場合は、詐欺に遭ったことになります。",
        ko: "이 해킹은 완전히 무료입니다. 이것을 얻기 위해 돈을 지불했다면 당신은 베코 사기를 당한 것입니다.",
        vi: "Bản hack này hoàn toàn miễn phí, nếu bạn đã mua nó từ ai, bạn đã bị lừa đảo.",
        fr: "Ce hack est gratuit, si vous avez payé pour l'obtenir, vous avez été arnaqué."
    },
    {
        Text: "TEXT_DESIGNER",
        chs: "GUI设计师： n0bu",
        en: "GUI Designer: n0bu",
        es: "Diseñador de GUI: n0bu",
        id: "Perancang GUI: n0bu",
        ja: "GUI 作成者: n0bu",
        ko: "GUI 디자이너: n0bu",
        vi: "Thiết kế GUI: n0bu",
        fr: "GUI designer : n0bu"
    },
    {
        Text: "TEXT_NEW_KILL_AURA",
        chs: "新杀戮光环",
        en: "New Kill Aura",
        es: "Nueva Aura Asesina",
        id: "Aura Pembunuh Baru",
        ja: "新しいキルオーラ",
        ko: "새로운 킬 오라",
        vi: "Tàn Sát Phiên Bản Mới",
        fr: "Nouveau Kill aura"
    },
    {
        Text: "TEXT_WORLD_SPEED",
        chs: "世界速度",
        en: "World Speed",
        es: "Velocidad del Mundo",
        id: "Kecepatan Dunia",
        ja: "世界スピード",
        ko: "세계 속도",
        vi: "Tốc Độ Thế Giới",
        fr: "Vitesse monde"
    },
    {
        Text: "TEXT_KILL_ANIMAL",
        chs: "杀死动物",
        en: "Kill Animal",
        es: "Matar Animal",
        id: "Bunuh Hewan",
        ja: "動物を殺す",
        ko: "동물을 죽이다",
        vi: "Giết Động Vật",
        fr: "Tuer animal"
    },
    {
        Text: "TEXT_SAVE_CONFIG",
        chs: "保存配置",
        en: "Save Config",
        es: "Guardar Configuración",
        id: "Simpan Konfigurasi",
        ja: "設定を保存",
        ko: "구성 저장",
        vi: "Lưu Cấu hình",
        fr: "Enregistrer config"
    },
    {
        Text: "TEXT_LANGUAGE",
        chs: "语言",
        en: "Language",
        es: "Idioma",
        id: "Bahasa",
        ja: "言語",
        ko: "언어",
        vi: "Ngôn ngữ",
        fr: "Langue"
    },
    {
        Text: "TEXT_CONSOLE_COMMAND",
        chs: "UE4虚幻控制台命令",
        en: "UE4 Console Command",
        es: "UE4 Consola de comandos",
        id: "Perintah Konsol UE4",
        ja: "UE4コンソール コマンド",
        ko: "UE4 콘솔 명령",
        vi: "Lệnh điều khiển UE4",
        fr: "Commande console UE4"
    },
    {
        Text: "TEXT_FOV",
        chs: "眼界",
        en: "Field of Vision",
        es: "Campo de visión",
        id: "Sudut Pandang",
        ja: "視野角",
        ko: "시야",
        vi: "Tầm nhìn",
        fr: "Champ de vision"
    },
    {
        Text: "TEXT_SHOW_FPS",
        chs: "显示FPS",
        en: "Show FPS",
        es: "Mostrar FPS",
        id: "Tampilkan FPS",
        ja: "FPSを表示",
        ko: "FPS 표시",
        vi: "Chương FPS",
        fr: "Afficher FPS"
    },
    {
        Text: "TEXT_FPS_UNLOCKER",
        chs: "FPS解锁",
        en: "FPS Unlocker",
        es: "Desbloqueador de FPS",
        id: "Buka Kunci FPS",
        ja: "FPSアンロック",
        ko: "FPS 잠금 해제",
        vi: "Mở khóa FPS",
        fr: "Déverrouiller FPS"
    },
    {
        Text: "TEXT_SONANCE_CASKET",
        chs: "声匣",
        en: "Sonance Casket",
        es: "Caja de Sonancia",
        id: "Sonance Casket",
        ja: "ソナンスカスケット",
        ko: "소넌스 관",
        vi: "Quan tài Sonance",
        fr: "Coffret Sonance"
    },
    {
        Text: "TEXT_PUZZLE",
        chs: "解谜",
        en: "Puzzle",
        es: "Rompecabezas",
        id: "Teka-teki",
        ja: "パズル",
        ko: "퍼즐",
        vi: "Câu đố",
        fr: "Puzzle"
    },
    {
        Text: "TEXT_ANIMAL",
        chs: "动物",
        en: "Animal",
        es: "Animal",
        id: "Hewan",
        ja: "動物",
        ko: "동물",
        vi: "Động vật",
        fr: "Animal"
    },
    {
        Text: "TEXT_TREASURE",
        chs: "箱子",
        en: "Treasure",
        es: "Tesoro",
        id: "Harta",
        ja: "宝物",
        ko: "보물",
        vi: "Kho báu",
        fr: "Trésor"
    },
    {
        Text: "TEXT_COLLECTION",
        chs: "收集品",
        en: "Collection",
        es: "Colección",
        id: "Koleksi",
        ja: "コレクション",
        ko: "수집",
        vi: "Bộ sưu tập",
        fr: "Collection"
    },
    {
        Text: "TEXT_MONSTER",
        chs: "怪物",
        en: "Monster",
        es: "Monstruo",
        id: "Monster",
        ja: "モンスター",
        ko: "괴물",
        vi: "Quái vật",
        fr: "Monstre"
    },
    {
        Text: "TEXT_SHOW_BOX",
        chs: "展示方框",
        en: "Show Box",
        es: "Mostrar Caja",
        id: "Tampilkan Box",
        ja: "表示ボックス",
        ko: "쇼 박스",
        vi: "Hiển thị hộp",
        fr: "Afficher boîte"
    },
    {
        Text: "TEXT_SHOW_DISTANCE",
        chs: "显示距离",
        en: "Show Distance",
        es: "Mostrar Distancia",
        id: "Tampilkan Jarak",
        ja: "距離を表示します",
        ko: "거리 표시",
        vi: "Hiển thị khoảng cách",
        fr: "Afficher distance"
    },
    {
        Text: "TEXT_SHOW_NAME",
        chs: "显示名称",
        en: "Show Name",
        es: "Mostrar Nombre",
        id: "Tampilkan Nama",
        ja: "ショー名",
        ko: "이름 표시",
        vi: "Hiện tên",
        fr: "Afficher nom"
    },
    {
        Text: "HEADING_ESP",
        chs: "透视",
        en: "ESP",
        es: "ESP",
        id: "ESP",
        ja: "ESP",
        ko: "ESP",
        vi: "ESP",
        fr: "ESP"
    },
    {
        Text: "TEXT_WEATHER",
        chs: "天气",
        en: "Weather",
        es: "Clima",
        id: "Cuaca",
        ja: "天気",
        ko: "날씨",
        vi: "Thời tiết",
        fr: "Météo"
    },
    {
        Text: "TEXT_VACUUM_COLLECT",
        chs: "吸收集品",
        en: "Collection Vacuum",
        es: "Recolección de vacío",
        id: "Vakum Koleksi",
        ja: "収集真空",
        ko: "수집 진공",
        vi: "Thu thập chân không",
        fr: "Aspirateur à collectibles"
    },
    {
        Text: "TEXT_MOB_VACUUM",
        chs: "吸怪",
        en: "Monster Vacuum",
        es: "Aspiradora monstruo",
        id: "Vakum Musuh",
        ja: "モンスターバキューム",
        ko: "몬스터 진공 청소기",
        vi: "Máy hút bụi quái vật",
        fr: "Aspirateur à monstres"
    },
    {
        Text: "HEADING_FILTER",
        chs: "筛选",
        en: "Filter",
        es: "Filtro",
        id: "Saring",
        ja: "フィルター",
        ko: "필터",
        vi: "Lọc",
        fr: "Filtre"
    },
    {
        Text: "TEXT_SUNNY",
        chs: "晴天",
        en: "Sunny",
        es: "Soleado",
        id: "Cerah",
        ja: "SUNNY",
        ko: "밝은",
        vi: "Sáng",
        fr: "Ensoleillé"
    },
    {
        Text: "TEXT_CLOUDY",
        chs: "多云的",
        en: "Cloudy",
        es: "Nublado",
        id: "Berawan",
        ja: "曇り",
        ko: "흐림",
        vi: "Nhiều mây",
        fr: "Nuageux"
    },
    {
        Text: "TEXT_THUNDER_RAIN",
        chs: "雷雨",
        en: "Thunderstorm",
        es: "Tormenta",
        id: "Hujan Badai",
        ja: "雷雨",
        ko: "뇌우",
        vi: "Dông",
        fr: "Orage"
    },
    {
        Text: "TEXT_SNOW",
        chs: "雪",
        en: "Snow",
        es: "Nieve",
        id: "Salju",
        ja: "雪",
        ko: "눈",
        vi: "Tuyết",
        fr: "Neige"
    },
    {
        Text: "TEXT_RAIN",
        chs: "雨",
        en: "Rain",
        es: "Lluvia",
        id: "Hujan",
        ja: "雨",
        ko: "비",
        vi: "Cơn mưa",
        fr: "Pluie"
    },
    {
        Text: "TEXT_ROCK",
        chs: "岩石解谜",
        en: "Rock",
        es: "Roca",
        id: "Batu",
        ja: "ロック",
        ko: "바위",
        vi: "Đá",
        fr: "Roche"
    },
    {
        Text: "TEXT_MUTTERFLY",
        chs: "隙声蝶",
        en: "Mutterfly",
        es: "Mutterfly",
        id: "Kupu-kupu",
        ja: "隙声蝶",
        ko: "Mutterfly",
        vi: "Mutterfly",
        fr: "Mutterfly"
    },
    {
        Text: "TEXT_BLOBFLY",
        chs: "飞猎手",
        en: "Blobfly",
        es: "Blobfly",
        id: "Blobfly",
        ja: "Blobfly",
        ko: "Blobfly",
        vi: "Blobfly",
        fr: "Blobfly"
    },
    {
        Text: "TEXT_NOCLIP",
        chs: "空中飞人",
        en: "No Clip",
        es: "No Clip",
        id: "No Clip",
        ja: "No Clip",
        ko: "No Clip",
        vi: "No Clip",
        fr: "No Clip"
    },
    {
        Text: "TEXT_PLOT_SKIP",
        chs: "剧情跳过",
        en: "Plot Skip",
        es: "Saltate la Historia",
        id: "Lewati Cerita",
        ja: "プロットのスキップ",
        ko: "스토리 건너뛰기",
        vi: "Bỏ qua câu chuyện",
        fr: "Sauter l'histoire"
    },
    {
        Text: "TEXT_AUTO_PUZZLE",
        chs: "自动解谜",
        en: "Auto Solve Puzzle",
        es: "Rompecabezas de resolución automática",
        id: "Pemecahan Teka-teki Otomatis",
        ja: "Auto Puzzle",
        ko: "자동 퍼즐 풀기",
        vi: "Tự động giải câu đố",
        fr: "Auto Puzzle"
    },
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
