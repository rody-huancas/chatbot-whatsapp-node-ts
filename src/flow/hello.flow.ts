import BotWhatsapp from '@bot-whatsapp/bot';


/**
 * Un flujo conversación que responde a palabras clave como 
 * "hola", "buenas"...
 */
export default BotWhatsapp.addKeyword(["Hola", "Buenas"])
    .addAnswer("Hola, ¿Cómo puedo ayudarte hoy?")
