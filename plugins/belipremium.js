let handler = async (m, { conn, participants }) => {
    let user = global.db.data.users[m.sender]
  if (user.premium === true) throw `Kamu Sudah Premium!!`
await conn.sendButton(m.chat, 'Silahkan beli premium di shop kami', '© 𝕸𝖔𝖚𝖓𝖙𝖆𝖎𝖓 𝕭𝖔𝖙𝖟', {'button[0]': 'Shop Bot', 'row[0]': '.sewa'}, m)
  }
       handler.help = ['belipremium', 'premium']
       handler.tags = ['daftar']
       handler.command = /^belipremium|premium$/i
                                           module.exports = handler