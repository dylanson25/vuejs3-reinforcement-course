<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessage :messages="messages" />
    <MessageBox />
  </div>
</template>

<script lang="ts" setup>
import ChatMessage from '@/components/ChatMessage/ChatMessage.vue'
import MessageBox from '@/components/MessageBox/MessageBox.vue'
import { ref } from 'vue'
import { type ChatMessage as IChatMessage } from '@/interfaces/chat-message.interface'

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
</script>
