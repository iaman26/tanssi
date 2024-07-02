<template>
  <UiIntroduce @CloseIntroduce="CloseIntroduce" v-if="!introduce" />
  <h1
    class="m_8a5d1357 mantine-Title-root"
    data-order="1"
    style="
      --title-fw: var(--mantine-h1-font-weight);
      --title-lh: var(--mantine-h1-line-height);
      --title-fz: calc(4rem * var(--mantine-scale));
      font-family: Kilimanjaro, sans-serif;
      color: var(--mantine-color-white);
      font-weight: 500;
    "
  >
    Welcome to Dancebox
  </h1>
  <p
    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
    style="color: var(--mantine-color-white)"
  >
    Dancebox is Tanssi's TestNet environment, designed for seamless deployment
    of appchains
  </p>
</template>
<script setup>
const introduce = useCookie('introduce')
function CloseIntroduce() {
  introduce.value = true
}
</script>

<style scoped>
.__m__-ro9f {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 36em) {
  .__m__-ro9f {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
@media (min-width: 75em) {
  .__m__-ro9f {
    --col-flex-grow: auto;
    --col-flex-basis: 25%;
    --col-max-width: 25%;
  }
}
.__m__-ro98 {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 36em) {
  .__m__-ro98 {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
@media (min-width: 75em) {
  .__m__-ro98 {
    --col-flex-grow: auto;
    --col-flex-basis: 25%;
    --col-max-width: 25%;
  }
}
.__m__-ro91 {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 36em) {
  .__m__-ro91 {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
@media (min-width: 75em) {
  .__m__-ro91 {
    --col-flex-grow: auto;
    --col-flex-basis: 25%;
    --col-max-width: 25%;
  }
}
.__m__-ro8q {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 36em) {
  .__m__-ro8q {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
@media (min-width: 75em) {
  .__m__-ro8q {
    --col-flex-grow: auto;
    --col-flex-basis: 25%;
    --col-max-width: 25%;
  }
}
.__m__-ro8o {
  --grid-gutter: var(--mantine-spacing-md);
}
.__m__-ro8h {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 62em) {
  .__m__-ro8h {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
.__m__-ro8a {
  --col-flex-grow: auto;
  --col-flex-basis: 100%;
  --col-max-width: 100%;
}
@media (min-width: 62em) {
  .__m__-ro8a {
    --col-flex-grow: auto;
    --col-flex-basis: 50%;
    --col-max-width: 50%;
  }
}
.__m__-ro88 {
  --grid-gutter: var(--mantine-spacing-md);
}
</style>
