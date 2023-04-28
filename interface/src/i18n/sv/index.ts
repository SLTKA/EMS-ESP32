import type { Translation } from '../i18n-types';
/* prettier-ignore */
/* eslint-disable */

const sv: Translation = {
  LANGUAGE: 'Språk',
  RETRY: 'Försök igen',
  LOADING: 'Laddar',
  IS_REQUIRED: '{0} Krävs',
  SIGN_IN: 'Logga In',
  SIGN_OUT: 'Logga Ut',
  USERNAME: 'Användarnamn',
  PASSWORD: 'Lösenord',
  SU_PASSWORD: 'su Lösenord',
  DASHBOARD: 'Kontrollpanel',
  SETTINGS_OF: '{0} Inställningar',
  HELP_OF: '{0} Hjälp',
  LOGGED_IN: 'Inloggad som {name}',
  PLEASE_SIGNIN: 'Vänligen logga in för att fortsätta',
  UPLOAD_SUCCESSFUL: 'Uppladdning lyckades',
  DOWNLOAD_SUCCESSFUL: 'Nedladdning lyckades',
  INVALID_LOGIN: 'Ogiltig login',
  NETWORK: 'Nätverk',
  SECURITY: 'Säkerhet',
  ONOFF_CAP: 'PÅ/AV',
  ONOFF: 'på/av',
  TYPE: 'Typ',
  DESCRIPTION: 'Beskrivning',
  ENTITIES: 'Entiteter',
  REFRESH: 'Uppdatera',
  EXPORT: 'Exportera',
  DEVICE_DETAILS: 'Enhetsdetaljer',
  ID_OF: '{0}-ID',
  DEVICE: 'Enhets',
  PRODUCT: 'Produkt',
  VERSION: 'Version',
  BRAND: 'Fabrikat',
  ENTITY_NAME: 'Entitetsnamn',
  VALUE: '{{Värde|värde}}',
  SHOW_FAV: 'Visa enbart favoriter',
  DEVICE_DATA: 'Enhets data',
  SENSOR_DATA: 'Sensor data',
  DEVICES: 'Enheter',
  SENSORS: 'Sensorer',
  RUN_COMMAND: 'Kör Kommando',
  CHANGE_VALUE: 'Ändra Värde',
  CANCEL: 'Avbryt',
  RESET: 'Nollställ',
  APPLY_CHANGES: 'Apply Changes ({0})', // TODO translate
  UPDATE: 'Update', // TODO translate
  REMOVE: 'Ta bort',
  PROBLEM_UPDATING: 'Problem vid uppdatering',
  PROBLEM_LOADING: 'Problem vid hämtning',
  ACCESS_DENIED: 'Åtkomst Nekad',
  ANALOG_SENSOR: 'Analog Sensor',
  ANALOG_SENSORS: 'Analoga Sensorer',
  UPDATED_OF: '{0} Uppdaterad',
  UPDATE_OF: '{0} Uppdatera',
  REMOVED_OF: '{0} Raderad',
  DELETION_OF: '{0} Radering',
  OFFSET: 'Kompensering',
  FACTOR: 'Faktor',
  FREQ: 'Frekvens',
  DUTY_CYCLE: 'Duty Cycle',
  UNIT: 'UoM',
  STARTVALUE: 'Startvärde',
  WARN_GPIO: 'Varning: Var försiktig vid aktivering av GPIO!',
  EDIT: 'Ändra',
  SENSOR: 'Sensor',
  TEMP_SENSOR: 'Temperatursensor',
  TEMP_SENSORS: 'Temperatursensorer',
  WRITE_CMD_SENT: 'Skrivkommandon skickade',
  WRITE_CMD_FAILED: 'Skrivkommandon misslyckade',
  EMS_BUS_WARNING: 'EMS-buss nedkopplad. Om denna varning kvarstår efter några sekunder, kontrollera inställningar och enhets-profil.',
  EMS_BUS_SCANNING: 'Söker efter EMS-enheter...',
  CONNECTED: 'Ansluten',
  TX_ISSUES: 'Sändfel - Prova ett annat TX-läge',
  DISCONNECTED: 'Nedkopplad',
  EMS_SCAN: 'Är du säker att du vill initiera en full genomsökning av EMS-bussen?',
  EMS_BUS_STATUS: 'Status',
  ACTIVE_DEVICES: 'Aktiva Enheter',
  EMS_DEVICE: 'EMS Enhet',
  SUCCESS: 'Lyckades',
  FAIL: 'Misslyckades',
  QUALITY: 'Kvalitet',
  SCAN_DEVICES: 'Sök efter nya enheter',
  EMS_BUS_STATUS_TITLE: 'EMS-buss & aktivitetsstatus',
  SCAN: 'Sök',
  STATUS_NAMES: [
    'EMS-telegram (Rx)',
    'EMS-läsningar (Tx)',
    'EMS-skrivningar (Tx)',
    'Temperatursensor-läsningar',
    'Analog Sensor-läsningar',
    'MQTT-publiceringar',
    'API-anrop',
    'Syslog-meddelanden'
  ],
  NUM_DEVICES: '{num} Enhet{{er}}',
  NUM_TEMP_SENSORS: '{num} Temperatur-sensor{{er}}',
  NUM_ANALOG_SENSORS: '{num} Analoga Sensor{{er}}',
  NUM_DAYS: '{num} dag{{ar}}',
  NUM_SECONDS: '{num} sekund{{er}}',
  NUM_HOURS: '{num} timmar',
  NUM_MINUTES: '{num} minut{{er}}',
  APPLICATION_SETTINGS: 'Inställningar',
  CUSTOMIZATIONS: 'Anpassningr',
  APPLICATION_RESTARTING: 'EMS-ESP startar om',
  INTERFACE_BOARD_PROFILE: 'Interface Hårdvaruprofil',
  BOARD_PROFILE_TEXT: 'Välj en förkonfigurerad hårdvaruprofil från listan nedan eller välj Anpassad för att konfigurera dina egna hårdvaruinställningar',
  BOARD_PROFILE: 'Hårdvarutyp',
  CUSTOM: 'Anpassa',
  GPIO_OF: '{0} GPIO',
  BUTTON: 'Knapp',
  TEMPERATURE: 'Temperatur',
  PHY_TYPE: 'Eth PHY-typ',
  DISABLED: 'inaktiverad',
  TX_MODE: 'Tx-läge',
  HARDWARE: 'Hårdvara',
  EMS_BUS: '{{BUSS|EMS-BUSS}}',
  GENERAL_OPTIONS: 'Allmänna Inställningar',
  LANGUAGE_ENTITIES: 'Språk (för entiteter)',
  HIDE_LED: 'Inaktivera LED',
  ENABLE_TELNET: 'Aktivera Telnet',
  ENABLE_ANALOG: 'Aktivera Analoga Sensorer',
  CONVERT_FAHRENHEIT: 'Konvertera temperaturer till Fahrenheit',
  BYPASS_TOKEN: 'Inaktivera Token-autensiering för API-anrop',
  READONLY: 'Aktivera read-only (blockerar alla utgående skrivkommandon mot EMS-bussen)',
  UNDERCLOCK_CPU: 'Nedklocka Processorhastighet',
  ENABLE_SHOWER_TIMER: 'Aktivera Dusch-timer',
  ENABLE_SHOWER_ALERT: 'Aktivera Dusch-varning',
  TRIGGER_TIME: 'Aktiveringstid',
  COLD_SHOT_DURATION: 'Längd på kalldusch',
  FORMATTING_OPTIONS: 'Formatteringsalternativ',
  BOOLEAN_FORMAT_DASHBOARD: 'Bool-format Kontrollpanel',
  BOOLEAN_FORMAT_API: 'Bool-format API/MQTT',
  ENUM_FORMAT: 'Enum-format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: 'Aktivera parasitström',
  LOGGING: 'Loggning',
  LOG_HEX: 'Logga EMS-telegram i hexadecimal',
  ENABLE_SYSLOG: 'Aktivera Syslog',
  LOG_LEVEL: 'Loggnivå',
  MARK_INTERVAL: 'Markerings-interval',
  SECONDS: 'sekunder',
  MINUTES: 'minuter',
  HOURS: 'timmar',
  RESTART: 'Starta om',
  RESTART_TEXT: 'EMS-ESP kräver en omstart för att applicera förändrade systeminställningar',
  RESTART_CONFIRM: 'Är du säker på att du vill starta om EMS-ESP?',
  COMMAND: 'Kommando',
  CUSTOMIZATIONS_RESTART: 'Alla anpassningr har raderats. Startar om...',
  CUSTOMIZATIONS_FULL: 'Antal valda enheter för högt. Vänligen spara i mindre antal åt gången.',
  CUSTOMIZATIONS_SAVED: 'Anpassningar sparade',
  CUSTOMIZATIONS_HELP_1: 'Välj en enhet och anpassa underenheter med hjälp av alternativen',
  CUSTOMIZATIONS_HELP_2: 'Favorit',
  CUSTOMIZATIONS_HELP_3: 'Inaktivera skrivningar',
  CUSTOMIZATIONS_HELP_4: 'Exkludera från MQTT & API',
  CUSTOMIZATIONS_HELP_5: 'Göm från Kontrollpanel',
  CUSTOMIZATIONS_HELP_6: 'remove from memory', // TODO translate
  SELECT_DEVICE: 'Välj en enhet',
  SET_ALL: 'ställ in alla',
  OPTIONS: 'Alternativ',
  NAME: 'Namn',
  CUSTOMIZATIONS_RESET: 'Är du säker på att du vill ta bort alla anpassningar inklusive inställningar för Temperatur och Analoga sensorer?',
  DEVICE_ENTITIES: 'Enhets-entiteter',
  SUPPORT_INFORMATION: 'Supportinformation',
  CLICK_HERE: 'Klicka Här',
  HELP_INFORMATION_1: 'Besök Wikin för instruktioner för hur du kan konfigurera EMS-ESP',
  HELP_INFORMATION_2: 'För community-support besök vår Discord-server',
  HELP_INFORMATION_3: 'Önska en ny funktion eller rapportera en bugg',
  HELP_INFORMATION_4: 'Bifoga din systeminformation för snabbare hantering när du rapporterar ett problem',
  HELP_INFORMATION_5: 'EMS-ESP är gratis och är öppen källkod. Bidra till utvecklingen genom att ge oss en stjärna på GitHub!',
  SUPPORT_INFO: 'Supportinfo',
  UPLOAD_OF: '{0} Uppladdning',
  UPLOAD: 'Uppladdning',
  DOWNLOAD: 'Nedladdning',
  ABORTED: 'Avbruten',
  FAILED: 'Misslyckades',
  SUCCESSFUL: 'Lyckades',
  SYSTEM: 'System',
  LOG_OF: '{0} Logg',
  STATUS_OF: '{0} Status',
  UPLOAD_DOWNLOAD: 'Upp/Nedladdning',
  SYSTEM_VERSION_RUNNING: 'Du använder version',
  SYSTEM_APPLY_FIRMWARE: 'för att aktivera ny firmware',
  CLOSE: 'Stäng',
  USE: 'Använd',
  FACTORY_RESET: 'Fabriksåterställning',
  SYSTEM_FACTORY_TEXT: 'Enheten har blivit fabriksåterställd och startar nu om',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Är du säker att du vill fabriksåterställa enheten?',
  VERSION_CHECK: 'Senaste versioner',
  THE_LATEST: 'Den senaste',
  OFFICIAL: 'officiell',
  DEVELOPMENT: 'utveckling',
  VERSION_IS: 'version är',
  RELEASE_NOTES: 'release-logg',
  EMS_ESP_VER: 'EMS-ESP Version',
  PLATFORM: 'Enhet (Plattform / SDK)',
  UPTIME: 'Systemets Upptid',
  CPU_FREQ: 'CPU-frekvens',
  HEAP: 'Heap (Ledigt / Max allokerat)',
  PSRAM: 'PSRAM (Storlek / Ledigt)',
  FLASH: 'Flashminne (Storlek / Hastighet)',
  APPSIZE: 'Applikationer (Använt / Ledigt)',
  FILESYSTEM: 'Filsystem (Använt / Ledigt)',
  BUFFER_SIZE: 'Max Bufferstorlek',
  COMPACT: 'Komprimera',
  ENABLE_OTA: 'Aktivera OTA-uppdateringar',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Ladda ner entitetsanpassningar',
  DOWNLOAD_SCHEDULE_TEXT: 'Download Scheduler Events', // TODO translate
  DOWNLOAD_SETTINGS_TEXT: 'Ladda ner applikationsinställningar. Var försiktig om du delar dina iställlningar då de innehåller lösenord och annan känslig systeminformation',
  UPLOAD_TEXT: 'Ladda upp ett nytt firmware (.bin), inställningar eller anpassningar (.json) nedan',
  UPLOADING: 'Laddar upp',
  UPLOAD_DROP_TEXT: 'Släpp fil eller klicka här',
  ERROR: 'Okänt Fel, var god försök igen',
  TIME_SET: 'Ställ in tid',
  MANAGE_USERS: 'Användare',
  IS_ADMIN: 'Admin',
  USER_WARNING: 'Du måste ha minst en admin konfigurerad',
  ADD: 'Lägg till',
  ACCESS_TOKEN_FOR: 'Access Token för',
  ACCESS_TOKEN_TEXT: 'Nedan Token används med REST API-anrop som kräver auktorisering. Den kan skickas med antingen som en Bearer token i Authorization-headern eller i access_token URL query-parametern.',
  GENERATING_TOKEN: 'Genererar token',
  USER: 'Användare',
  MODIFY: 'Ändra',
  SU_TEXT: 'SU-användarens (super user) lösenord används för att signera autensierings-tokens samt för att aktivera administratörsprivilegier i Console-läge',
  NOT_ENABLED: 'Ej aktiv',
  ERRORS_OF: '{0} fel',
  DISCONNECT_REASON: 'Anledning till nedkoppling',
  ENABLE_MQTT: 'Aktivera MQTT',
  BROKER: 'Broker',
  CLIENT: 'Client',
  BASE_TOPIC: 'Base',
  OPTIONAL: 'Valfritt',
  FORMATTING: 'Formatering',
  MQTT_FORMAT: 'Topic/Payload Format',
  MQTT_NEST_1: 'Nestlat i en topic.',
  MQTT_NEST_2: 'Som individuella topics',
  MQTT_RESPONSE: 'Publish-kommando som ett `response` topic',
  MQTT_PUBLISH_TEXT_1: 'Publicera single value topics vid värdeförändring',
  MQTT_PUBLISH_TEXT_2: 'Publicera till kommando-topics (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Aktivera MQTT Discovery',
  MQTT_PUBLISH_TEXT_4: 'Prefix för  Discovery topics',
  MQTT_PUBLISH_TEXT_5: 'Discovery type', // TODO translate
  MQTT_PUBLISH_INTERVALS: 'Publiceringsintervall',
  MQTT_INT_BOILER: 'Värmepump/panna',
  MQTT_INT_THERMOSTATS: 'Termostater',
  MQTT_INT_SOLAR: 'Solpaneler',
  MQTT_INT_MIXER: 'Blandningsventiler',
  MQTT_INT_HEARTBEAT: 'Heartbeat',
  MQTT_QUEUE: 'MQTT-kö',
  DEFAULT: 'Standard',
  MQTT_ENTITY_FORMAT: 'Entitets-ID format',
  MQTT_ENTITY_FORMAT_0: 'Singel-instans, långt namn(v3.4)',
  MQTT_ENTITY_FORMAT_1: 'Singel-instans, kort name',
  MQTT_ENTITY_FORMAT_2: 'Multi-instans, kort name',
  MQTT_CLEAN_SESSION: 'Använd "Clean Session"-flaggan',
  MQTT_RETAIN_FLAG: 'Använd "Always Retain"-flaggan',
  INACTIVE: 'Inaktiv',
  ACTIVE: 'Aktiv',
  UNKNOWN: 'Okänt',
  SET_TIME: 'Ställ in klockan',
  SET_TIME_TEXT: 'Ange lokal datum och tid nedan för att ställa in klockan',
  LOCAL_TIME: 'Tid (lokal)',
  UTC_TIME: 'Tid (UTC)',
  ENABLE_NTP: 'Aktivera NTP',
  NTP_SERVER: 'NTP-server',
  TIME_ZONE: 'Tidszon',
  ACCESS_POINT: 'Accesspunkt',
  AP_PROVIDE: 'Aktivera Accesspunkt',
  AP_PROVIDE_TEXT_1: 'alltid',
  AP_PROVIDE_TEXT_2: 'när WiFi är nedkopplat',
  AP_PROVIDE_TEXT_3: 'aldrig',
  AP_PREFERRED_CHANNEL: 'Kanal',
  AP_HIDE_SSID: 'Göm SSID',
  AP_CLIENTS: 'AP-klienter',
  AP_MAX_CLIENTS: 'Max Klienter',
  AP_LOCAL_IP: 'Lokalt IP',
  NETWORK_SCAN: 'Sök efter WiFi-nätverk',
  IDLE: 'Vilande',
  LOST: 'Förlorad',
  SCANNING: 'Söker',
  SCAN_AGAIN: 'Sök igen',
  NETWORK_SCANNER: 'Hittade nätverk',
  NETWORK_NO_WIFI: 'Inga WiFi-nätverk hittades',
  NETWORK_BLANK_SSID: 'lämna blankt för att inaktivera WiFi',
  TX_POWER: 'Tx Effekt',
  HOSTNAME: 'Värdnamn',
  NETWORK_DISABLE_SLEEP: 'Inaktivera sömnläge',
  NETWORK_LOW_BAND: 'Använd lägre bandbredd',
  NETWORK_USE_DNS: 'Aktivera mDNS-tjänsten',
  NETWORK_ENABLE_CORS: 'Aktivera CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_ENABLE_IPV6: 'Aktivera IPv6-support',
  NETWORK_FIXED_IP: 'Använd statiskt IP',
  NETWORK_GATEWAY: 'Gateway',
  NETWORK_SUBNET: 'Subnätmask',
  NETWORK_DNS: 'DNS-Server',
  ADDRESS_OF: '{0} Adress',
  ADMIN: 'Admin',
  GUEST: 'Gäst',
  NEW: 'Ny',
  NEW_NAME_OF: 'Byt namn {0}',
  ENTITY: 'Entitet',
  MIN: 'min',
  MAX: 'max',
  BLOCK_NAVIGATE_1: 'You have unsaved changes', // TODO translate
  BLOCK_NAVIGATE_2: 'If you navigate to a different page, your unsaved changes will be lost. Are you sure you want to leave this page?', // TODO translate
  STAY: 'Stay', // TODO translate
  LEAVE: 'Leave', // TODO translate
  SCHEDULER: 'Scheduler', // TODO translate
  SCHEDULER_HELP_1: 'Automate commands by adding scheduled events below. Set a unique Name to enable/disable activation via API/MQTT.', // TODO translate
  SCHEDULER_HELP_2: 'Use 00:00 to trigger once on start-up', // TODO translate
  SCHEDULE: 'Schedule', // TODO translate
  TIME: 'Time', // TODO translate
  TIMER: 'Timer', // TODO translate
  SCHEDULE_UPDATED: 'Schedule updated', // TODO translate
  SCHEDULE_TIMER_1: 'on startup', // TODO translate
  SCHEDULE_TIMER_2: 'every minute', // TODO translate
  SCHEDULE_TIMER_3: 'every hour', // TODO translate
  CUSTOM_ENTITIES: 'Custom Entities', // TODO translate
  ENTITIES_HELP_1: 'Fetch custom entities from the EMS bus', // TODO translate
  ENTITIES_UPDATED: 'Entities Updated', // TODO translate
  WRITEABLE: 'Writeable', // TODO translate
  SHOWING: 'Showing', // TODO translate
  SEARCH: 'Search' // TODO translate

};

export default sv;
