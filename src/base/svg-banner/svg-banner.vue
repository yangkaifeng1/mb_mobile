<template>
  <div class="svg-banner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="256px" version="1.1">
      <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
      <title>bg_img_zhanghu_normal@3x</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stop-color="#FFC454" offset="0%"/>
          <stop stop-color="#FBA849" offset="16.412229%"/>
          <stop stop-color="#F57835" offset="100%"/>
        </linearGradient>
      </defs>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="bg_img_zhanghu_normal" fill="url(#linearGradient-1)">
          <path d="M375,245.068502 C347.86057,251.366413 315.810789,255 281.5,255 C247.065003,255 214.907413,251.340058 187.637669,245.000001 L187.637666,245 L187.362334,245 C160.092587,238.659942 127.934997,235 93.5,235 C59.2173794,235 27.192056,238.627623 -3.43604988e-05,244.915992 L-1.06581478e-14,0 L375,0 L375,130.915984" id="Combined-Shape"/>
        </g>
      </g>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
//
  }
</script>

<style>
  .svg-banner {
    position: relative;
  }
</style>
