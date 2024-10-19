import { ref } from 'vue'
import { type ChatMessage as IChatMessage } from '@/interfaces/chat-message.interface'

export const useChat = () => {
  const messages = ref<IChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Tienes Hambre',
      itsMine: true,
    },
    {
      id: new Date().getTime(),
      message: 'Si',
      itsMine: false,
      image:
        'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif',
    },
  ])

  const onMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    })
  }
  return {
    messages,
    onMessage,
  }
}
