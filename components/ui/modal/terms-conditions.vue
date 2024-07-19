<template>
  <div
    class="m_9df02822 mantine-Modal-root"
    style="
      --modal-radius: var(--mantine-radius-lg);
      --modal-y-offset: 5dvh;
      --mb-z-index: 201;
      --mb-padding: var(--mantine-spacing-xl);
      --modal-size: var(--modal-size-xl);
    "
    data-size="xl"
  >
    <div
      class="mantine-Modal-overlay m_9814e45f mantine-Overlay-root"
      data-fixed="true"
      style="
        --overlay-bg: rgba(0, 0, 0, 0.9);
        --overlay-z-index: 201;
        transition-property: opacity;
        transition-duration: 200ms;
        transition-timing-function: ease;
        opacity: 1;
      "
    ></div>
    <div class="m_60c222c7 m_1f958f16 mantine-Modal-inner">
      <section
        class="m_fd1ab0aa m_54c44539 mantine-Modal-content m_1b7284a3 mantine-Paper-root"
        data-modal-content="true"
        role="dialog"
        tabindex="-1"
        aria-modal="true"
        style="
          border-radius: calc(1rem * var(--mantine-scale));
          background-color: rgb(14, 18, 28);
          --paper-radius: var(--mantine-radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition-property: opacity, transform;
          transition-duration: 200ms;
          transition-timing-function: ease;
          opacity: 1;
          transform: translateY(0px);
        "
        aria-describedby="mantine-1j2l1t9y1-body"
        aria-labelledby="mantine-1j2l1t9y1-title"
        v-outside="closeModal"
      >
        <header
          class="m_b5489c3c m_d0e2b9cd mantine-Modal-header"
          style="background-color: rgb(14, 18, 28)"
        >
          <h2
            class="m_615af6c9 mantine-Modal-title"
            id="mantine-1j2l1t9y1-title"
            style="
              font-weight: 700;
              color: rgb(255, 255, 255);
              width: 100%;
              text-align: center;
            "
          >
            Terms &amp; Conditions
          </h2>
        </header>
        <div class="m_5df29311 mantine-Modal-body" id="mantine-1j2l1t9y1-body">
          <div class="" style="margin-bottom: var(--mantine-spacing-md)">
            <div
              class="m_6d731127 mantine-Stack-root"
              style="
                --stack-gap: var(--mantine-spacing-md);
                --stack-align: stretch;
                --stack-justify: flex-start;
                width: 95%;
              "
            >
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                By connecting a wallet and accessing the Ecosystem Dapp
                (“Ecosystem Dapp”), you (“User”) hereby accept Moondance Labs
                LTD's (“Moondance Labs”)
                <a
                  class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                  data-size="md"
                  data-underline="hover"
                  href="https://www.tanssi.network/terms-of-use"
                  rel="noopener noreferrer"
                  target="_blank"
                  tabindex="0"
                  style="
                    --text-fz: var(--mantine-font-size-md);
                    --text-lh: var(--mantine-line-height-md);
                    color: rgb(28, 126, 214);
                  "
                  >Terms of Service</a
                >
                and hereby represent and warrant to Moondance Labs that:
              </p>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                User understands and agrees that your access and use of the
                Ecosystem Dapp is at your own risk. The Ecosystem Dapp is
                provided to User on an “as is” and “as available” basis without
                any warranties of any kind, and Moondance Labs expressly
                disclaims all warranties, including, but not limited to, the
                warranties of title, merchantability, non-infringement of third
                parties rights, fitness for a particular purpose, availability
                and security. Moondance Labs does not warrant that the Ecosystem
                Dapp will operate error-free or that the Ecosystem Dapp is free
                of computer viruses or similar contamination or destructive
                features. Moondance Labs reserves the right to change the format
                and features of the Ecosystem Dapp at any time.
              </p>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white); font-weight: bold"
              >
                User is Eligible to access and use the Ecosystem Dapp
              </p>
              <ol
                class="m_abbac491 mantine-List-root"
                data-with-padding="true"
                style="
                  --list-spacing: var(--mantine-spacing-xs);
                  color: var(--mantine-color-gray-5);
                "
              >
                <li class="m_abb6bec2 mantine-List-item">
                  <div class="m_75cd9f71 mantine-List-itemWrapper">
                    <span class="mantine-List-itemLabel"
                      >User is not trying to access the Ecosystem Dapp, Safe
                      Dapp, the Tanssi Network, the Dancebox Test Network from,
                      nor is User a citizen or resident of, any jurisdiction the
                      laws of which prohibit or conflict with the holding, sale,
                      or trading of DANCE tokens.</span
                    >
                  </div>
                </li>
                <li class="m_abb6bec2 mantine-List-item">
                  <div class="m_75cd9f71 mantine-List-itemWrapper">
                    <span class="mantine-List-itemLabel"
                      >User is not trying to access the Ecosystem Dapp, Safe
                      Dapp the Dancebox Test Network from the United States and
                      its Territories, Canada, Democratic People’s Republic of
                      Korea, Cuba, Syria, Iran, People’s Republic of China or
                      the following regions of Ukraine: Crimea, Donetsk, and
                      Luhansk.</span
                    >
                  </div>
                </li>
                <li class="m_abb6bec2 mantine-List-item">
                  <div class="m_75cd9f71 mantine-List-itemWrapper">
                    <span class="mantine-List-itemLabel"
                      >User is not a “Prohibited Person”, meaning that it is not
                      (i) a citizen or resident of a geographic area in which
                      use of the Moondance Network or the DANCE tokens is
                      prohibited by applicable law, decree, regulation, treaty,
                      or administrative act, (ii) a citizen or resident of, or
                      located in, a geographic area that is subject to U.S. or
                      other applicable comprehensive country sanctions or
                      embargoes, or (iii) an individual, or an individual
                      employed by or associated with an entity, identified on
                      the U.S. Department of Commerce’s Denied Persons,
                      Unverified, or Entity List, the U.S. Department of
                      Treasury’s Specially Designated Nationals or Blocked
                      Persons or Foreign Sanctions Evaders Lists, or the U.S.
                      Department of State’s Debarred Parties List or the
                      sanctions lists adopted by the United Nations and the
                      European Union to such extent such sanctions are extended
                      by the UK Government to its Overseas Territories, as such
                      lists may be amended from time to time; or (iv) a person
                      who acts, directly or indirectly, for a senior foreign
                      political figure, any member of a senior foreign political
                      figure’s immediate family or any close associate of a
                      senior foreign political figure. No person or entity that
                      controls, is controlled by or under common control with,
                      User is a Prohibited Person. No person having any direct
                      or indirect beneficial interest in User is a Prohibited
                      Person.</span
                    >
                  </div>
                </li>
                <li class="m_abb6bec2 mantine-List-item">
                  <div class="m_75cd9f71 mantine-List-itemWrapper">
                    <span class="mantine-List-itemLabel"
                      >User is not a U.S. Person as defined in Regulation S
                      under the Securities Act of 1933, as amended (“U.S.
                      Person”).</span
                    >
                  </div>
                </li>
                <li class="m_abb6bec2 mantine-List-item">
                  <div class="m_75cd9f71 mantine-List-itemWrapper">
                    <span class="mantine-List-itemLabel"
                      >User agrees not to offer or sell the DANCE tokens (or
                      create or maintain any derivative position equivalent
                      thereto) in the U.S. or to or for the account or benefit
                      of a U.S. Person.</span
                    >
                  </div>
                </li>
              </ol>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                User understands that no regulatory authority has examined or
                approved the information set out in this Ecosystem Dapp, and the
                publication, distribution, or dissemination of information under
                this Ecosystem Dapp to User does not imply that the applicable
                laws, regulatory requirements, or rules have been complied with.
              </p>
            </div>
          </div>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: center;
              --group-justify: flex-end;
              --group-wrap: wrap;
              margin-top: 0rem;
            "
          >
            <button
              class="mantine-focus-auto mantine-active bg m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root border-[#546080] bg-[#202738]"
              data-variant="default"
              data-size="md"
              type="button"
              style="
                color: var(--mantine-color-white);
                opacity: 1;
                --button-height: var(--button-height-md);
                --button-padding-x: var(--button-padding-x-md);
                --button-fz: var(--mantine-font-size-md);
                --button-bg: var(--mantine-color-default);
                --button-hover: var(--mantine-color-default-hover);
                --button-color: var(--mantine-color-default-color);
                --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  var(--mantine-color-default-border);
                font-weight: 500;
              "
              @click="closeModal()"
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span class="m_811560b9 mantine-Button-label"
                  >Decline</span
                ></span
              ></button
            ><button
              class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root"
              data-size="md"
              type="button"
              style="
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: var(--mantine-color-white);
                opacity: 1;
                --button-height: var(--button-height-md);
                --button-padding-x: var(--button-padding-x-md);
                --button-fz: var(--mantine-font-size-md);
                --button-color: var(--mantine-color-white);
                font-weight: 500;
              "
              @click="closeModal()"
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span class="m_811560b9 mantine-Button-label"
                  >Accept</span
                ></span
              >
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const { setIsModalTermsConditions } = appStore
import outside from '@venegrad/vue3-click-outside'
function closeModal() {
  setIsModalTermsConditions(false)
}
</script>
