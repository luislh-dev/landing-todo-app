<template>
  <div class="mobile-phone">
    <div class="brove"><span class="speaker"></span></div>
    <div class="screen">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* 📱 Contenedor del teléfono */
.mobile-phone {
  position: relative;
  width: 20vw;
  /* Se adapta al contenedor padre */
  max-width: 180px;
  /* Tamaño máximo */
  min-width: 120px;
  /* Tamaño mínimo */
  aspect-ratio: 9 / 16;
  /* Mantiene la proporción del teléfono */
  background: white;
  box-shadow: 0 0 20px #e2e2e2;
  border-radius: 30px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 🖥️ Pantalla */
.screen {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  border-radius: 20px;
  overflow: hidden;
}

/* 🎙️ Altavoz */
.brove {
  width: 40%;
  height: 6%;
  background: white;
  position: absolute;
  top: 3%;
  border-radius: 0 0 10px 10px;
}

.speaker {
  width: 50%;
  height: 30%;
  background: #d2d2d2;
  display: block;
  margin: auto;
  margin-top: 5px;
  border-radius: 20px;
}

/* 🖥️ Responsividad */
@media (max-width: 768px) {
  .mobile-phone {
    width: 25vw;
  }
}

@media (max-width: 480px) {
  .mobile-phone {
    width: 30vw;
  }
}
</style>
