<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- v-for="{ id, message, image, itsMine } in messages" -->
      <ChatBubble
        v-for="message in messages"
        v-bind="message"
        :key="message.id"
      />
      <!-- :its-mine="itsMine"
        :message="message"
        :image="image" -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from '../ChatBubble.vue/ChatBubble.vue'
import { type ChatMessage } from '../../interfaces/chat-message.interface'
import { ref, watch } from 'vue'
interface Props {
  messages: ChatMessage[]
}
const props = defineProps<Props>()

const chatRef = ref<HTMLDivElement | null>(null)

watch(props.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    })
  }, 100)
})
</script>
