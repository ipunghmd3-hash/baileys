const fs = require('fs')
const path = require('path')

const FLAG_FILE = path.join(process.cwd(), '.ipunghmd3-hash-baileys.json')

function getCommunityLinks() {
  return {
    group: 'https://chat.whatsapp.com/FFywa3JxadbH4glaofXBAq?mode=gi_t',
    channel: 'https://whatsapp.com/channel/0029VbC9AsB3wtazd1Pz2k1u'
  }
}

function showBannerOnce() {
  try {
    if (fs.existsSync(FLAG_FILE)) return

    const links = getCommunityLinks()

    console.log(`
╔════════════════════════════════════════════════════╗
║     Thanks for using @ipunghmd3-hash/baileys      ║
╠════════════════════════════════════════════════════╣
║ Group   : ${links.group}
║ Channel : ${links.channel}
╚════════════════════════════════════════════════════╝
`)

    fs.writeFileSync(FLAG_FILE, JSON.stringify({ shown: true }, null, 2))
  } catch (e) {}
}

module.exports = {
  getCommunityLinks,
  showBannerOnce
  }
