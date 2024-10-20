import { ref } from 'vue'
import { type ChatMessage as IChatMessage } from '@/interfaces/chat-message.interface'
import { type AnswerYesNo } from '@/interfaces/yes-no-api.interface'
import { sleep } from '@/helpers/sleeps'

export const useChat = () => {
  const messages = ref<IChatMessage[]>([])

  const getResponse = async (): Promise<AnswerYesNo> => {
    const resp = await fetch('https://yesno.wtf/api')
    const data = (await resp.json()) as AnswerYesNo
    return data
  }

  const onMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    })
    if (!text.endsWith('?')) return
    const { answer, image } = await getResponse()
    await sleep(1.5)
    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image,
    })
  }
  return {
    messages,
    onMessage,
  }
}
