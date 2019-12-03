<template>
  <div class="container">
    <Modal v-if="modalOpen" @toggleModal="toggleModal" />

    <Header>
      <Navigation @toggleModal="toggleModal" />
    </Header>

    <Description />

    <Conditions />

    <!-- <Requirements /> -->

    <FormApplication ref="form" />

    <FormQuestions />

    <section class="map">
      <div id="map" class="map"></div>
      <div class="map__header">Адреса офисов в Москве и Санкт-Петербурге</div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
import Conditions from "@/components/Conditions.vue";
import Description from "@/components/Description.vue";
import Requirements from "@/components/Requirements.vue";
import FormApplication from "@/components/FormApplication.vue";
import FormQuestions from "@/components/FormQuestions.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Navigation,
    Header,
    Description,
    Requirements,
    FormApplication,
    FormQuestions,
    Conditions,
    Footer,
    Modal
  },
  data: () => {
    return {
      modalOpen: false
    };
  },
  mounted() {
    setTimeout(this.load_map, 2000);
  },
  watch: {
    myMap(value) {
      if (value) {
        this.reload_map(this);
      }
    }
  },
  methods: {
    load_yamap_obj(source, beforeEl, async = true, defer = true) {
      return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        const prior = beforeEl || document.getElementsByTagName("script")[0];
        script.async = async;
        script.defer = defer;
        function onloadHander(_, isAbort) {
          if (
            isAbort ||
            !script.readyState ||
            /loaded|complete/.test(script.readyState)
          ) {
            script.onload = null;
            script.onreadystatechange = null;
            script = undefined;
            if (isAbort) {
              reject();
            } else {
              resolve();
            }
          }
        }
        script.onload = onloadHander;
        script.onreadystatechange = onloadHander;
        script.src = source;
        prior.parentNode.insertBefore(script, prior);
      });
    },
    init_map() {
      this.myMap = new ymaps.Map("map", {
        center: [55.714404, 37.719136], // Москва.
        zoom: 10,
        controls: []
      });

      let avilon = new ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: [55.713988, 37.71866]
          },
          properties: {
            iconCaption: "Финсервис 'Здесь Легко'",
            balloonContent: "Россия, Москва, Волгоградский проспект, 43к3"
          }
        },
        {
          preset: "islands#redMoneyCircleIcon"
        }
      );

      let wayPark = new ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: [55.857579, 37.394242],
          },
          properties: {
            iconCaption: "Финсервис 'Здесь Легко'",
            balloonContent: "Россия, Москва, МКАД; 71-й километр, с16А"
          }
        },
        {
          preset: "islands#redMoneyCircleIcon"
        }
      );

      let spb = new ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: [59.903002, 30.398181],
          },
          properties: {
            iconCaption: "Финсервис 'Здесь Легко'",
            balloonContent: "Санкт-Петербург, Ул. Седова, д.12, Бизнес-центр Т4 "
          }
        },
        {
          preset: "islands#redMoneyCircleIcon"
        }
      );

      this.myMap.geoObjects.add(avilon).add(wayPark).add(spb);
    },
    load_map() {
      this.load_yamap_obj(
        "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=3A6d943a65558c35905c86a4cf36cb2c62c1897927b66ad5a15ada713aad7c1ec6"
      ).then(() => {
        window.ymaps.ready(this.init_map);
      });
      if (this.defaultService) {
        this.selected_service = services[this.defaultService];
      }
    },
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>
