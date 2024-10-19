<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessage :messages="messages" />
    <MessageBox @sendmessage="onMessage" />
  </div>
</template>

<script lang="ts" setup>
import ChatMessage from '@/components/ChatMessage/ChatMessage.vue'
import MessageBox from '@/components/MessageBox/MessageBox.vue'

import { useChat } from '@/composables/useChats'

const { messages, onMessage } = useChat()
</script>
