<template>
  <section class="section conditions">
    <div class="section__content conditions__content">
      <h2 class="heading-3">Простые условия</h2>
      <div class="hashtags">
        <span class="hashtag">#выгоднозайм</span>
        <span class="hashtag">#одобрено</span>
        <span class="hashtag">#честныйзайм</span>
      </div>
      <div class="conditions__icons">
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Calendar clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--1">Срок – до 36 месяцев</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Rubble clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--2">от 200 000 рублей на 12 месяцев</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Rubble clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--3">от 250 000 рублей на 24 и 36 месяцев</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Percent clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--4">комиссии - отсутствуют</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Accept clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--5">досрочное погашение – с 4 месяца</p>
        </div>
      </div>

      <h2 class="heading-3">Минимальные требования</h2>
      <div class="hashtags">
        <span class="hashtag">#легковые</span>
        <span class="hashtag">#коммерческие</span>
        <span class="hashtag">#спецтехника</span>
      </div>
      <div class="conditions__icons conditions__icons--requirements">
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Document clas="conditions__icon" />
          </span>
          <p
            class="conditions__text conditions__text--6"
          >Документы для оформления: паспорт, СТС, ПТС, нотариальная доверенность РФ (если не собственник)</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Passport clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--7">Гражданство РФ, возраст 21–70 лет</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Car clas="conditions__icon" />
          </span>
          <p class="conditions__text conditions__text--8">Год выпуска авто – не старше 15 лет, регистрация РФ</p>
        </div>
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Crash clas="conditions__icon" />
          </span>
          <p
            class="conditions__text conditions__text--9"
          >Состояние автомобиля – без сильных повреждений, технически исправным</p>
        </div>
      </div>
      <g-image src="~/assets/images/car.png" alt="Автомобиль" class="conditions__image" />
    </div>
  </section>
</template>

<script>
import Accept from "@/assets/icons/accept.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Car from "@/assets/icons/car.svg";
import Crash from "@/assets/icons/crash.svg";
import Document from "@/assets/icons/document.svg";
import Passport from "@/assets/icons/passport.svg";
import Rubble from "@/assets/icons/rub.svg";
import Percent from "@/assets/icons/percent.svg";

export default {
  components: {
    Accept,
    Calendar,
    Car,
    Crash,
    Document,
    Passport,
    Rubble,
    Percent
  }
};
</script>
