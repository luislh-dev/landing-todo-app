<template>
  <div class="flex items-center justify-center p-8 bg-white rounded-xl max-w-[28rem]">
    <div class="relative flex items-center justify-between w-full max-w-3xl h-full max-h-[500px] gap-4">
      <MockupPhone />
      <div class="connector" />
      <MockupPhone />
    </div>
  </div>
</template>


<style scoped>
.connector {
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 50%;
  width: 18vw;
  /* Adaptativo */
  max-width: 180px;
  height: 9vw;
  max-height: 90px;
  border-top: 4px dashed #3b82f6;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-radius: 60px 60px 0 0;
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .connector {
    width: 22vw;
    height: 11vw;
  }
}

@media (max-width: 480px) {
  .connector {
    width: 26vw;
    height: 13vw;
  }
}
</style>