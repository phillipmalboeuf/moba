<script lang="ts">
  import { onMount } from 'svelte'
  // import Page from './[page]/+page.svelte'

	import Apple from '$lib/components/Apple.svelte'
  import Google from '$lib/components/Google.svelte'
  import Phone from '$lib/components/Phone.svelte'
  import Triangle from '$lib/components/Triangle.svelte'

  import type { PageData } from './$types'
  let { data }: { data: PageData } = $props()

  onMount(() => {
  })
</script>

<section class="padded flex flex--gapped jaune" id="top">
  <div class="hgroup">
    <h1><span style="margin-right: auto;">Covoiturage</span> <span style="margin-left: auto;"><Triangle big position="topleft" fill="#1AAA54" />Laurentides</span></h1>
    <h1><span style="margin-right: auto;">Covoiturage</span> <span style="margin-left: auto;">Laurentides</span></h1>
  </div>
  <div class="col col--5of12"></div>
  <div class="col col--5of12 col--mobile--12of12 flex flex--column flex--gapped">
    <h3>Qu’est-ce que le covoiturage ?</h3>
    <p>Système de transport qui consiste à partager l'utilisation d'une voiture particulière entre plusieurs personnes, principalement pour les trajets domicile-travail. Ce système permet de diminuer les impacts de l'utilisation de la voiture sur l'environnement.</p>
    <p><small><a href="https://actu-environnement.com">actu-environnement.com</a></small></p>
  </div>

  <a href="#applications" class="cta">
    <Phone />
  </a>
</section>

<section class="padded flex flex--gapped bleu">
  <div class="hgroup col col--8of12 col--mobile--12of12">
    <h2><span>Le covoiturage,</span> <span style="margin-left: 10%;">plus en</span> <span><Triangle position="bottomleft" />détails</span></h2>
    <h2><span>Le covoiturage,</span> <span style="margin-left: 10%;">plus en</span> <span>détails</span></h2>
  </div>
  <div class="col col--12of12"></div>
  <div class="col col--12of12"></div>
  <div class="col col--12of12"></div>
  <div class="col col--12of12"></div>
  
  <!-- <div class="col col--1of12 col--mobile--12of12"></div> -->
  <div class="col col--5of12 col--mobile--12of12 flex flex--column flex--gapped">
    <h3>Comment le covoiturage fonctionne ?</h3>
    <p>L'organisation du covoiturage consiste à mettre en relation un conducteur avec un ou plusieurs passagers, peut s'effectuer de deux manières :</p>
  </div>
  <div class="col col--1of12 col--mobile--12of12"></div>
  <div class="col col--6of12 col--mobile--12of12">
    <ol class="flex flex--column flex--gapped">
      <li class="flex flex--gapped">
        <!-- <Triangle position="topleft" scale={0.5} /> -->
        <h4 class="col col--2of12 col--mobile--2of12">1.</h4> <p class="col col--10of12 col--mobile--10of12">Le covoiturage planifié, qui peut être organisé entre particuliers ou via des plateformes en ligne ou des applications facilitant la mise en relation entre conducteurs et passagers.</p></li>
      <li class="flex flex--gapped">
        <!-- <Triangle position="topleft" scale={0.5} /> -->
        <h4 class="col col--2of12 col--mobile--2of12">2.</h4> <p class="col col--10of12 col--mobile--10of12">Le covoiturage spontané, basé sur l'utilisation du trafic routier comme source potentielle de transport, comprenant des pratiques telles que l'autostop organisé ou les lignes de covoiturage avec des points d'arrêt spécifiquement indiqués.</p></li>
    </ol>
  </div>
  <hr>
  <h3 class="col col--5of12 col--mobile--12of12" style="margin: 0 auto; text-align: center;">Quelques statistiques sur le transport ?</h3>
  <div class="col col--12of12"></div>
  <ol class="flex flex--gapped">
    <li class="col col--4of12 col--mobile--12of12 flex flex--column flex--gapped">
      <p>43 % des émissions de GES proviennent du secteur des transports.</p>
      <p><a href="/" class="button">Source</a></p>
    </li>
    <li class="col col--4of12 col--mobile--12of12 flex flex--column flex--gapped">
      <p>92 % des déplacements de navettage dans les Laurentides sont effectués en auto.</p>
      <p><a href="/" class="button">Source</a></p>
    </li>
    <li class="col col--4of12 col--mobile--12of12 flex flex--column flex--gapped">
      <p>L’achalandage routier y est concentré dans un faible nombre de corridors routiers.</p>
      <p><a href="/" class="button">Source</a></p>
    </li>
    <li class="col col--4of12 col--mobile--12of12 flex flex--column flex--gapped">
      <p>Faible taux d’occupation : à peine 1,2 personne en moyenne par véhicule.</p>
      <p><a href="/" class="button">Source</a></p>
    </li>
    <li class="col col--4of12 col--mobile--12of12 flex flex--column flex--gapped">
      <p>« Ce n’est pas les personnes qui créent la congestion, c’est le vide ! »</p>
      <p><a href="/" class="button">Catherine Morency, Polytechnique Montréal</a></p>
    </li>
  </ol>
</section>
<section class="padded flex flex--column flex--gapped vert">
  <div class="hgroup col col--7of12 col--mobile--12of12">
    <h2><span>Les avantages</span> <span>du</span> <span><Triangle position="bottomleft" />covoiturage</span></h2>
    <h2><span>Les avantages</span> <span>du</span> <span>covoiturage</span></h2>
  </div>

  <h3 class="col col--6of12 col--mobile--12of12" style="align-self: center; text-align: center;">Pour l'usager, le covoiturage offre plusieurs avantages&nbsp;:</h3>
  <br>
  <ol class="flex flex--gapped flex--bottom">
    <li class="col col--4of12 col--mobile--12of12">
      <p>Augmenter son pouvoir d’achat :<br>un partageant les trajets quotidiennement avec un voisin ou un collègue peut réaliser des économies significatives.</p>
    </li>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Économie sur les coûts d’utilisation de son véhicule</p>
    </li>
    <div class="col col--4of12 col--mobile--12of12"></div>
    <div class="col col--2of12 col--mobile--12of12"></div>
    <li class="col col--4of12 col--mobile--12of12" style="align-self: flex-start;">
      <p>Contribuer à l’amélioration de la qualité de l’air et de l’environnement : le partage d'un véhicule permet de réduire de moitié les émissions de CO₂ par trajet.</p>
    </li>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Se déplacer plus librement : le covoiturage crée une solution de mobilité partagée dans les zones dépourvues de transport en commun, tout en étant solidaires en offrant un moyen de transport à ceux qui n'ont pas de voiture ou ne peuvent pas conduire.</p>
    </li>
    <li class="col col--4of12 col--mobile--12of12" style="margin-left: auto;">
      <p>Déplacements plus rapides en échappant à la congestion grâce aux voies réservées.</p>
    </li>
  </ol>
  <hr>
  <h3 class="col col--6of12 col--mobile--12of12" style="align-self: center; text-align: center;">Pour la collectivité, le covoiturage permet de :</h3>
  <br>
  <ol class="flex flex--gapped flex--center flex--bottom">
    <div class="col col--4of12 col--mobile--12of12"></div>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Réduire la congestion routière.</p>
    </li>
    <div class="col col--4of12 col--mobile--12of12"></div>
    <div class="col col--1of12 col--mobile--12of12"></div>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Réduire la pollution atmosphérique dans les grandes villes.</p>
    </li>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Déplacements plus rapides en échappant à la congestion grâce aux voies réservées.</p>
    </li>
    <div class="col col--1of12 col--mobile--12of12"></div>
    <li class="col col--4of12 col--mobile--12of12">
      <p>Diminuer les investissements liés à l’entretien des routes, permettant ainsi de réorienter les fonds vers des projets de mobilité durable.</p>
    </li>
  </ol>
</section>

<section class="padded flex flex--gapped orange" id="applications">
  <div class="hgroup col col--6of12 col--mobile--12of12">
    <h2><span>Applications</span> <span><Triangle position="bottomleft" />Allons</span></h2>
    <h2><span>Applications</span> <span>Allons</span></h2>
  </div>
  <div class="col col--1of12 col--mobile--12of12"></div>
  <div class="col col--5of12 col--mobile--12of12 flex flex--gapped flex--column">
    <h3>Pour trouver un partenaire de covoiturage téléchargez l’application gratuitement</h3>
    <nav>
      <a href="/"><Apple /></a>
      <a href="/"><Google /></a>
    </nav>
    <p>Le covoiturage facilite le déplacement au stationnement incitatif et l’utilisation du transport en commun, c’est ce que l’on appelle l’intermodalité. L’intermodalité est l’utilisation de plusieurs transports lors d’un même trajet.</p>
  </div>
  <div class="col col--12of12"></div>
  <div class="col col--12of12">
    <ol class="flex flex--gapped flex--center" style="align-items: stretch;">
      <li class="col col--5of12 col--mobile--12of12 flex flex--gapped flex--column">
        <p>Vous cherchez un stationnement pour covoiturer ou pour accéder au transport en commun dans les Laurentides ?</p>
        <p style="margin-top: auto;"><a href="https://crelaurentides.org/stationnements" class="button">crelaurentides.org/stationnements</a></p>
      </li>
      <li class="col col--5of12 col--mobile--12of12 flex flex--gapped flex--column">
        <p>Pour connaître les horaires du transport adapté et collectif des Laurentides :</p>
        <p style="margin-top: auto;"><a href="https://transportlaurentides.ca" class="button">transportlaurentides.ca</a></p>
      </li>
    </ol>
  </div>
</section>

<footer>
  
  <div class="flex flex--gapped padded">
    <hr>
    <p class="col col--2of12 col--mobile--12of12">Projet réalisé par</p>
    <figure class="col col--2of12 col--mobile--6of12">
      <img src="/icons/moba.svg" alt="MOBA">
    </figure>

    <div class="col col--2of12 col--mobile--12of12"></div>

    <p class="col col--2of12 col--mobile--12of12">En partenariat avec</p>
    <figure class="col col--4of12 col--mobile--12of12 flex flex--gapped">
      <img class="col col--6of12" src="/icons/moba.svg" alt="MOBA">
      <img class="col col--6of12" src="/icons/moba.svg" alt="MOBA">
      <img class="col col--6of12" src="/icons/moba.svg" alt="MOBA">
      <img class="col col--6of12" src="/icons/moba.svg" alt="MOBA">
      <img class="col col--6of12" src="/icons/moba.svg" alt="MOBA">
    </figure>
  </div>

  <div class="flex flex--gapped padded">
    <hr>
    <p class="col col--2of12 col--mobile--12of12">Ce projet est réalisé grâce au soutien financier du gouvernement du Québec dans le cadre du Programme d’aide financière aux activités de sensibilisation à la mobilité durable – MobilisActions</p>
    <figure class="col col--2of12 col--mobile--6of12">
      <img src="/icons/quebec.svg" alt="MOBA">
    </figure>
  </div>

  <div class="flex flex--gapped flex--middle padded">
    <div class="col col--6of12 col--mobile--12of12">
      <a href="#top" class="button">Haut de la page</a>
    </div>
    <nav class="col col--6of12 col--mobile--12of12 flex flex--gapped flex--end">
      <a href="https://www.facebook.com/ExcellenceindustrielleSaintLaurent/?_rdr"><u>Facebook</u></a>
      <a href="https://ca.linkedin.com/company/excellence-industrielle-saint-laurent"><u>LinkedIn</u></a>
      <a href="https://www.youtube.com/channel/UCMXwHOUI2CLXdBiBRFuTL1w"><u>Youtube</u></a>
    </nav>
  </div>
</footer>


<style lang="scss">

  section,
  footer {
    // position: sticky;
    // top: 0;
    // height: 100lvh;
    // width: 100vw;
    // overflow: auto;

    hr {
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

    ol {
      list-style: none;
      padding: 0;
    }

    li {
      position: relative;
      padding: $s0;
      color: $light;
      background-color: $dark;
      border-radius: $s0;

      .button {
        color: $dark;
      }

      &:global(:has(svg)) {
        border-top-left-radius: 0;
      }
    }

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
  }

  .hgroup {
    position: relative;
    margin-bottom: $s2;

    &:not(.col) {
      width: 100%;
    }

    h1, h2 {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;

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
          outline-width: $s-1 !important;
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