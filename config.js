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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_28_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9sMkJXdVZJMGsrRFg2SjdYZnJiaG11MTVCc3V0ZWQybytvNUE4R3JDRWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjU5NjYxMDQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NDlDNjI2MUE4RjhGMTlDMUVEMTUxQjcyNjZFQjQ1NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyMDI1MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNTk2NjEwNDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4OEVEMDkwOUE2QjIzRkQ2OTBDMUE3REQyOUZFRjZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzIwMjUxM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6dkVIODAxblJXR2ZfUWF1bnNPR3lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmZWM3NGE3LTRkOGMtNDkzYS04MmMxLTZlYmU1OTViY2UzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDM0LFxuICAgICAgMTQ5LFxuICAgICAgMTIwLFxuICAgICAgMTUxLFxuICAgICAgMjUwLFxuICAgICAgMjUwLFxuICAgICAgMTk3LFxuICAgICAgNDgsXG4gICAgICA2OSxcbiAgICAgIDI0LFxuICAgICAgMjM0LFxuICAgICAgMjIsXG4gICAgICAxOTQsXG4gICAgICAzNixcbiAgICAgIDIyNixcbiAgICAgIDIwMSxcbiAgICAgIDMxLFxuICAgICAgMTEzLFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDM0LFxuICAgICAgMTUyLFxuICAgICAgMjQsXG4gICAgICAxMTAsXG4gICAgICAzNixcbiAgICAgIDY0LFxuICAgICAgMTU1LFxuICAgICAgMTc3LFxuICAgICAgMjUzLFxuICAgICAgMTk2LFxuICAgICAgMTUyLFxuICAgICAgMjM0LFxuICAgICAgMTY4LFxuICAgICAgMjQzLFxuICAgICAgMjQ5LFxuICAgICAgMTU3LFxuICAgICAgMTg0LFxuICAgICAgMjUwLFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1kzOUpONFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1OTY2MTA0MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NDE1ODc1ODM0NjgzOTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1vdmllcyBHcm91cCBBZG1pbsKpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2E4b0xJQ0VNcUp6TGNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJocWVYeTh2bnNaaW83QXhUWU9ZeTJ1V09nT2pOSWhYTUc2WjFaWFdrbERZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhEL1p5YnNWN0VzSUN5ejJUNFFBQzlONFRLVTRvMGoxVklVZ2toL2VTb01HRG1VYU9LN1RRc0FyeHlyNEpITlpaYXQwMFNNNldoUUFhb05wVkNNVEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZuSklkNGxyUmhIei9lR0IyRzFheGxPdG1hQ3RVTkFEYXdPTTJydHBIaWo0dlJibXdNMGNXclNFUGZPb3JZd0txZnRBeU8zWUFsUmRPWnIxT1BsSERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1OTY2MTA0MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzIwMjUxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUloNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWg0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiN3Z5YUg0d2piZjRmYW91UExqT0IyaDJPWDc1bXJ3TjFNZmhZUHpaR1Vmdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDIyNjA1ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
