<template>
  <article :load="acti()">
    <header>
      <h1>Nieuw style met fontAwesome</h1>
    </header>
    <section class="teler">
      <section class="container">
        <section>
          <i class="fab fa-youtube"></i>
          <p class="count" data-target="70000">0</p>
          <h3>Volgers</h3>
        </section>
        <section>
          <i class="fab fa-facebook"></i>
          <p class="count" data-target="80000">0</p>
          <h3>Like</h3>
        </section>
        <section>
          <i class="fab fa-twitter"></i>
          <p class="count" data-target="100000">0</p>
          <h3>Retwitt</h3>
        </section>
        <section>
          <i class="fab fa-google"></i>
          <p class="count" data-target="120000">0</p>
          <h3>Zoeken</h3>
        </section>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: "Kaar",

  methods: {
    acti() {
      window.onload = () => {
        const counters = document.querySelectorAll(".count");
        const speed = 200;

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // voor speed
            const inc = target / speed;

            // Chek kardane target
            if (count < target) {
              counter.innerText = count + inc;
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
      };
    }
  }
};
</script>

<style scoped>


article {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background: lightskyblue url("../assets/img/Sky.jpg");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  color: azure;
  flex-direction: column;
  justify-content: flex-end;
  height: 85vh;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  overflow: auto;
}

header {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  font-size: 60px;
}

.teler {
  background-color: #0f479a;
  color: aliceblue;
  padding: 25px 20px;
  border-top: 3px solid lightblue;
  /* margin-bottom: 72px; */
}

.teler .container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  text-align: center;
}

.teler i {
  color: lightskyblue;
  margin-top: 45px;
  font-size: 65px;
}

.teler .count {
  font-size: 45px;
  margin: 10px 0;
}

@media (max-width: 500px) {
  article {
    height: 100%;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    background: url("../assets/img/Sky.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  header {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }

  header h1 {
    font-size: 30px;
  }

  .container {
    max-width: 500px;
    margin: 0 auto;
    overflow: auto;
    height: 100%;
  }

  .teler{
      width: 100%;
      height: auto;
  }


  
.teler i {
  color: lightskyblue;
  margin-top: 15px;
  font-size: 45px;
}

.teler .count {
  font-size: 25px;
  margin: 10px;
  margin-bottom: 40px;
}

  .teler .container {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }

  .teler .container > section:nth-of-type(1),
  .teler .container > section:nth-of-type(2) {
    border-bottom: 1px lightskyblue solid;
    padding-bottom: 20px;
  }
}
</style>
