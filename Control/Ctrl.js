// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6285655649546'] //Own Number
global.developer = "PrelXz" //Dev Name
global.botname = "VRL V14" //Bot Name
global.version = "1.3.0" //Version Bot
global.ownerNumber = '6285655649546'

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "PrelXz" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@vareltzyofc"
global.ttok = "https://tiktok.com/@vareltzyy"
global.igram = "https://instagram.com/@Vreloooo"
global.chtele = "https://t.me/vareltzyu"
global.tgram = "https://t.me/varelmek"

//Bug Name Settings
global.bak = {
Ios: " ⿻ᬃ𝗩𝗿𝗟𝟏𝟑𝐢𝐥𝐥⃟⃟⿻ ",
Andro: " 𝑭𝒖𝒄𝒌𝒖𝒃", 
Crash: " ̶𝑪𝒓𝒂𝒔𝒉̶",
Freeze: "𝑽𝒓𝒍𝟏𝟑",
Ui: "𝑫𝒊𝒅 𝑰 𝑳𝒐𝒔𝒆?"
}
global.apikey = 'ptla_tUUgRvTa6V7hIE5zfXQ8sN7qP97ligPSnVPMTgIfjJG'
global.capikey = 'ptlc_XSVPIlNEdEWNN6BmZnzSMfhETWvPvDreJJc1I1YwjiQ'
global.domain = 'https://private-vrl.varrtzy.xyz'
global.eggsnya = '15'
global.nestid = "5" // nest ID
global.loc = "1" // Location ID

global.ownerName = '© PrelXz' // Nama Kamu
global.saluran = '120363300914288486@newsletter' // ID Saluran Kamu
global.saluranName = 'PRELXZ MAIN CHANNEL' // Nama Saluran Kamu
global.botName = 'VRL V14' // Nama Bot Kamu
global.wagc = 'https://youtube.com/@vareltzyofc' // Web Kamu

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})