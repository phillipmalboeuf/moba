<script lang="ts">
  import { onMount } from 'svelte'
  // import Page from './[page]/+page.svelte'

	import Apple from '$lib/components/Apple.svelte'
  import Google from '$lib/components/Google.svelte'
  import Phone from '$lib/components/Phone.svelte'
  import Triangle from '$lib/components/Triangle.svelte'
  import Rich from '$lib/components/Rich.svelte'

  import type { PageData } from './$types'
  let { data }: { data: PageData } = $props()

  let footer = $derived(data.navigations['footer'])
  let page = $derived(data.page)
</script>

{#each page.fields.contenu as section, index}
  {@const titreSplit = section.fields.titre.split('|')}
  <section class="padded flex flex--gapped {section.fields.couleur}" id="{section.fields.id}">
    
    {#if index === 0}
    <div class="hgroup hgroup--first">
      <h1><span style="margin-right: auto;">{titreSplit[0]}</span> <span style="margin-left: auto;"><Triangle big position="topleft" fill="#1AAA54" />{titreSplit[1]}</span></h1>
      <h1><span style="margin-right: auto;">{titreSplit[0]}</span> <span style="margin-left: auto;">{titreSplit[1]}</span></h1>
    </div>
    {:else}
    <div class="hgroup hgroup--bottom">
      <h2><span>{titreSplit[0]}</span> <span><Triangle position="bottomleft" />{titreSplit[1]}</span></h2>
      <h2><span>{titreSplit[0]}</span> <span>{titreSplit[1]}</span></h2>
    </div>
    {/if}

    <div class="corps flex flex--column flex--gapped flex--center" class:droite={section.fields.droite}>
      <Rich body={section.fields.corps} />
    </div>

    {#if index === 0}
      <a href="#applications" class="cta">
        <Phone />
      </a>
    {/if}
  </section>
{/each}


{#if footer}
<footer>
  
  <div class="flex flex--gapped padded">
    <hr>
    <p class="col col--2of12 col--mobile--12of12">Projet réalisé par</p>
    <figure class="col col--2of12 col--mobile--6of12">
      <img src="/icons/moba.svg" alt="MOBA">
    </figure>

    <div class="col col--2of12 col--mobile--12of12"></div>

    <p class="col col--2of12 col--mobile--12of12">En partenariat avec</p>
    <figure class="partenariats col col--4of12 col--mobile--12of12 flex flex--gapped flex--middle">
      <img class="col col--6of12" src="/logos/TACL-logo 1.png" alt="TACL">
      <img class="col col--6of12" src="/logos/logos Tacal 1.png" alt="TACAL">
      <img class="col col--6of12" src="/logos/nouveaulogo2 1.png" alt="CRE Laurentides">
      <img class="col col--6of12" src="/logos/MRC_RDN_LOGO2005 1.png" alt="MRC de la Rivière du Nord">
      <img class="col col--6of12" src="/logos/MRCArg_RGB_300dpi_transparent 1.png" alt="MRC d'Argenteuil">
    </figure>
  </div>

  <div class="flex flex--gapped padded">
    <hr>
    <p class="col col--2of12 col--mobile--12of12">{page.fields.basDePage}</p>
    <figure class="col col--2of12 col--mobile--6of12">
      <img src="/icons/quebec.svg" alt="MOBA">
    </figure>
  </div>

  <div class="flex flex--gapped flex--middle padded">
    <div class="col col--6of12 col--mobile--12of12">
      <a href="#{page.fields.contenu[0]?.fields.id}" class="button">Haut de la page</a>
    </div>
    <nav class="col col--6of12 col--mobile--12of12 flex flex--gapped flex--end">
      {#each footer.fields.liens as lien}
        <a href="{lien.fields.destination}" target={lien.fields.externe ? "_blank" : null} rel={lien.fields.externe ? "external" : null}><u>{lien.fields.titre}</u></a>
      {/each}
      <!-- <a href="https://ca.linkedin.com/company/excellence-industrielle-saint-laurent"><u>LinkedIn</u></a>
      <a href="https://www.youtube.com/channel/UCMXwHOUI2CLXdBiBRFuTL1w"><u>Youtube</u></a> -->
    </nav>
  </div>
</footer>
{/if}


<style lang="scss">

  section,
  footer {
    // position: sticky;
    // top: 0;
    // height: 100lvh;
    // width: 100vw;
    // overflow: auto;

    :global(hr) {
      width: 100%;
      margin: $s2 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  section {
    padding-top: calc($s3 + $s0);
    
    position: relative;
    border-bottom-left-radius: $s0;
    border-bottom-right-radius: $s0;
    margin-bottom: calc($s0 * -1);

    &:first-child {
      padding-top: $s3;
    }

    &:nth-child(1) {z-index: 999;}
    &:nth-child(2) {z-index: 998;}
    &:nth-child(3) {z-index: 997;}
    &:nth-child(4) {z-index: 996;}
    &:nth-child(5) {z-index: 995;}
    &:nth-child(6) {z-index: 994;}
    &:nth-child(7) {z-index: 993;}
    &:nth-child(8) {z-index: 992;}
    &:nth-child(9) {z-index: 991;}
    
    &.vert { background-color: $vert; span { color: $vert; } li { color: $dark; background-color: $jaune;  } }
    &.jaune { background-color: $jaune; span { color: $dark; background-color: $vert; outline-color: $vert !important;  } }
    &.bleu { background-color: $bleu; span { color: $bleu;  } }
    &.orange { background-color: $orange; span { color: $orange;  } }


    .corps {
      :global(ol),
      :global(ul) {
        list-style: none;
        padding: 0;
        margin-top: $s2;

        @media (max-width: $mobile) {
          margin-top: $s0;
        }
      }

      :global(ul) {
        list-style: none;
      }

      :global(li) {
        position: relative;
        padding: $s0;
        color: $light;
        background-color: $dark;
        border-radius: $s0;

        // .button {
        //   color: $dark;
        // }

        // &:global(:has(svg)) {
        //   border-top-left-radius: 0;
        // }
      }

      :global(ol) {
        counter-reset: custom-counter;
      }

      :global(ol li) {
        counter-increment: custom-counter;
        display: flex;
        gap: $s1;

        &::before {
          content: counter(custom-counter) ".";
          // position: absolute;
          // left: -$s0;
          // top: $s-2;
          font-weight: bold;
          font-size: $s1;
          color: $light;
        }
      }

      :global(> h2),
      :global(> h3),
      :global(> h4),
      :global(> h5),
      :global(> h6),
      :global(> p) {
        @media (min-width: $mobile) {
          width: 640px;
          text-align: center;
          margin: 0 auto;
        }
      }

      &.droite {
        :global(> h2),
        :global(> h3),
        :global(> h4),
        :global(> h5),
        :global(> h6),
        :global(> p) {
          text-align: left;

          @media (min-width: $mobile) {
            margin-right: 8.3333%;

            &:first-child {
              margin-top: calc($s5 * -1);
            }
          }
        }
      }

      :global(p > a:last-child) {
        color: $dark;
        margin-top: $s2;
      }
    }

    &.vert .corps {
      :global(li) {
        color: $dark;
        background-color: $jaune;
      }
    }

    // .center {
    //   @media (min-width: $mobile) {
    //     margin: 0 auto;
    //     text-align: center;
    //     align-self: center;
    //   }
    // }

    .cta {
      position: absolute;
      bottom: $s0;
      right: $s0;

      transition: transform 333ms;

      &:focus,
      &:hover {
        transform: rotate(10deg);
      }

      @media (max-width: $mobile) {
        bottom: $s-2;
        right: $s-2;
      }
    }
  }

  footer {
    font-size: $s-1;

    .button {
      color: $light;
      background-color: $dark;
    }

    @media (max-width: $mobile) {
      padding-top: $s3;
      padding-bottom: $s3;

      nav.flex--end {
        justify-content: flex-start;
      }
    }

    .partenariats {
      img {
        padding-right: $s0;
      }
    }
  }

  .hgroup {
    position: relative;
    margin-bottom: $s2;

    &:not(.col) {
      width: 100%;
    }

    &.hgroup--bottom {
      @media (min-width: $mobile) {
        margin-bottom: $s5;
      }

      @media (max-width: $mobile) {
        margin-bottom: $s4;
      }
    }

    &.hgroup--first {
      @media (min-width: $mobile) {
        margin-bottom: $s4;
      }

      @media (max-width: $mobile) {
        margin-bottom: $s5;
      }
    }

    h1, h2 {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      &:last-child {
        position: absolute;
        top: 0;
        z-index: 0;

        span {
          outline: $s0 solid $dark;
          border-radius: 2px;
        }
      }

      @media (max-width: $mobile) {
        span {
          outline-width: $s-2 !important;
        }
      }
    }

    h2 {
      &:first-child {
        background-color: transparent;
      }
      &:last-child {
        span {
          outline: $s-1 solid $dark;
        }
      }
    }

    span {
      position: relative;
      z-index: 1;
      color: $light;
      background-color: $dark;
      // padding: $s-2 $s0;
      // border-bottom-left-radius: $s0;
      // border-bottom-right-radius: $s0;
    }
  }
</style>