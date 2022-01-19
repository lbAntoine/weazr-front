<template>
  <section>
    <div class="content">
      <div class="card-container">
        <div class="meteo-card meteo-actuelle">
          <div class="mask">
            <img src="../assets/weatherCard/dayWeather.png" alt="dayTime" class="background">
            <font-awesome-icon :icon="['fas', 'cloud-sun']" class="icon cloud-sun"></font-awesome-icon>
            <p class="title">Météo</p>
            <a href="github.com/lbAntoine" class="share-btn">
              <font-awesome-icon :icon="['fas', 'share-alt']" class="icon share-actuelle"></font-awesome-icon>
            </a>
          </div>
        </div>

        <div class="meteo-card meteo-prevision">
          <div class="mask">
            <img src="../assets/weatherCard/rainyWeather.jpg" alt="rainyTime" class="icon background">
            <p class="title">Demain</p>
          </div>
        </div>
      </div>

      <div class="meteo-graph">
        <font-awesome-icon :icon="['fas', 'chart-line']" class="icon"></font-awesome-icon>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.card-container .meteo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 30vh;
  /* border: 2px solid red; */
  margin: 1vw;
  border-radius: 20px;
}
.card-container .meteo-actuelle .mask {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
}
.card-container .meteo-actuelle .mask .background {
  /* width: 150%; */
  min-height: 30vh;
  min-width: auto;
  position: absolute;
  z-index: 0;
  /* bottom: 0; */
  /* clip-path: inset(13.5% 0 13.5% 0); */
  /* width: 45vw;
  height: 30vh; */
  border-radius: 20px;
}
.card-container .meteo-actuelle .mask .title,
.card-container .meteo-actuelle .mask .share-btn,
.card-container .meteo-actuelle .mask .cloud-sun {
  z-index: 1;
  position: absolute;
  /* color: aliceblue; */
}
.card-container .meteo-actuelle .mask .share-btn {
  /* background-color: aliceblue; */
  height: 2em;
  width: 2em;
  border-radius: 50%;
  top: 1.5vh;
  right: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
}
.card-container .meteo-actuelle .mask .title {
  font-size: 1.5em;
  font-weight: 500;
  color: aliceblue;
  top: 1vh;
}
.card-container .meteo-prevision .mask .title,
.card-container .meteo-prevision .mask .icon {
  z-index: 1;
  position: absolute;
  /* color: aliceblue; */
}
.card-container .meteo-prevision .mask .title {
  font-size: 1.5em;
  font-weight: 500;
  color: aliceblue;
  top: 1vh;
}
.card-container .meteo-prevision .mask {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
}
.card-container .meteo-prevision .mask .background {
  /* width: 150%; */
  min-height: 30vh;
  min-width: auto;
  position: absolute;
  z-index: 0;
  /* bottom: 0; */
  /* clip-path: inset(13.5% 0 13.5% 0); */
  /* width: 45vw;
  height: 30vh; */
  border-radius: 20px;
}
.card-container .meteo-prevision .title,
.card-container .meteo-prevision .icon {
  z-index: 1;
  position: absolute;
  /* color: aliceblue; */
}
.meteo-graph {
  width: 92vw;
  height: 35vh;
  border: 2px solid red;
  margin: 10px;
  border-radius: 20px;
}
.card-container .meteo-actuelle .mask .share-btn .share-actuelle {
  /* right: 3vw;
  top: 2vh; */
  color: aliceblue;
  transition: 0.3s ease;
  cursor: pointer;
}
.card-container .meteo-actuelle .mask .share-btn:hover {
  background-color: aliceblue;
}
.card-container .meteo-actuelle .mask .share-btn:hover .share-actuelle {
  color: black;
}
.card-container .meteo-actuelle .mask .cloud-sun {
  left: 3vw;
  top: 2vh;
  color: aliceblue;
}

@media screen and (min-width: 550px) {
  .card-container .meteo-actuelle .mask .title {
    left: 8vw;
  }
  .card-container .meteo-prevision .mask .title {
    left: 8vw;
  }
}
</style>