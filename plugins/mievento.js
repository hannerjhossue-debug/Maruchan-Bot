let handler = async (m, { conn, text }) => {
    // Aquí escribes lo que el bot dirá
    let respuesta = "¡Hola! Este es mi primer comando propio en mi proyecto. 🚀"
    
    await conn.reply(m.chat, respuesta, m)
}

// Estas son las palabras que activarán el bot (puedes poner varias)
handler.command = ['test', 'saludo', 'miproyecto']

export default handler
