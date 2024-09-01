<script lang="ts">
  let { position, fill, big, scale }: { fill?: string, big?: boolean, scale?: number, position: "topleft" | "bottomleft" } = $props()
</script>

<svg class={position} class:big viewBox="0 0 420 420" style:transform={scale && `scaleY(${scale})`}>
<path d="M420 0V420L-7.15256e-07 0H420Z" fill={fill || "#000"}/>
</svg>

<style lang="scss">
  svg {
    position: absolute;
    width: 10vw;
    height: auto;
    object-fit: cover;
    transform-origin: top center;

    &.big {
      width: 25vw;
    }

    &.topleft {
      top: 0;
      right: calc(100% - 1px);
    }

    &.bottomleft {
      top: 100%;
      left: calc(0% - $s-1);
    }
  }
</style>