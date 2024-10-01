const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_41_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicGErdlI3ekVWYUNJU0RWK280a0o3dkRwZGhQTzY4WjJhU1BpRE8yUFJoND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNTk2NjEwNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBDRTRCQzJBODQ1NDQyMDRFRjM3QjcyOUU4Q0REQkE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzc3MjA5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpZmpoLURGcFRxLU8zdUU0NWJGNl9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmMTA2YWJjLWZjOTAtNGE0ZC1iMWNhLWJjZDI1ZWJmMmZiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAyNDMsXG4gICAgICAxNTUsXG4gICAgICA0MyxcbiAgICAgIDM0LFxuICAgICAgMTM4LFxuICAgICAgODUsXG4gICAgICA3NyxcbiAgICAgIDE5NyxcbiAgICAgIDExMCxcbiAgICAgIDMyLFxuICAgICAgMTQ2LFxuICAgICAgMjE2LFxuICAgICAgMjQ1LFxuICAgICAgMTU4LFxuICAgICAgNjcsXG4gICAgICAzLFxuICAgICAgMTczLFxuICAgICAgMjE2LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgODksXG4gICAgICAxNjksXG4gICAgICAzOSxcbiAgICAgIDE2LFxuICAgICAgMjAyLFxuICAgICAgMjIsXG4gICAgICAxNDYsXG4gICAgICAxMyxcbiAgICAgIDIxMCxcbiAgICAgIDk0LFxuICAgICAgODUsXG4gICAgICAxMSxcbiAgICAgIDcxLFxuICAgICAgOTMsXG4gICAgICA5NyxcbiAgICAgIDE2NSxcbiAgICAgIDEwMSxcbiAgICAgIDIzMSxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWkU1SlJHQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjU5NjYxMDQyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0MTU4NzU4MzQ2ODM5OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTW92aWVzIPCfmINcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYThvTElDRUxycjdyY0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhxZVh5OHZuc1ppbzdBeFRZT1l5MnVXT2dPak5JaFhNRzZaMVpYV2tsRFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMlExVkZna3k5OExzajhkMXk1aytXUmxkOTR6M2R3dkEyck5NMk8wMGNyV1g4ZzJWa09KVzRwQjBiT0lSSjlESVJIZHVKazAydXpnTDRmSlFEdERoQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFJydHFzb2x6bzZOWlBoWWpPUmxGd09QdzIvNE8xblZ3WTRsZk5nMXdGV3Y3SFRpZVhOWDNKKzVocEdkRmd3ZHdvTVpucFpKNXVpZThyc1M5bVBBQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU5NjYxMDQyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NzcyMDk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWg0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJaDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3dnlhSDR3amJmNGZhb3VQTGpPQjJoMk9YNzVtcndOMU1maFlQelpHVWZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0MjI2MDU4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
