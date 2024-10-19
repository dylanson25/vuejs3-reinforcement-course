<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :its-mine="true" message="Hola ?" />
      <ChatBubble
        :its-mine="false"
        message="No"
        image="https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from '../ChatBubble.vue/ChatBubble.vue'
</script>
