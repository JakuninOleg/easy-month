<template>
  <section class="section description">
    <div class="section__content">
      <header class="description__header">
        <h3 class="heading-3">Беру деньги под ПТС по низкой ставке</h3>
        <div class="hashtags">
          <span class="hashtag">#минимальныйпроцент</span>
          <span class="hashtag">#деньгиподавто</span>
          <span class="hashtag">#выгодно</span>
        </div>
      </header>
      <article class="description__body">
        <ul class="description__list">
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">наличными, на карту или на счет</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">без подтверждения дохода</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">в день обращения</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">при любой кредитной историей</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">продолжаю пользоваться автомобилем</span>
          </li>
        </ul>
        <ul class="description__list">
          <li class="description__list-item description__list-item--bold">
            <BulletRed />
            <span class="description__list-span">Гарантия и надежность. Входим в реестр ЦБ РФ</span>
          </li>
        </ul>
      </article>
      <g-image src="~/assets/images/gifts.png" alt="Шланг" class="description__image" />
    </div>
  </section>
</template>

<script>
import BulletYellow from "@/assets/icons/bullet-yellow.svg";
import BulletRed from "@/assets/icons/bullet-red.svg";

export default {
  components: {
    BulletYellow,
    BulletRed
  }
};
</script>
