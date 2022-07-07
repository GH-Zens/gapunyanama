let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [Ga Penting:v]
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA [Minta Ke Owneer aja :v]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
