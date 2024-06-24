<template>
  <div
    class="m_4081bf90 mantine-Group-root"
    style="
      --group-gap: var(--mantine-spacing-md);
      --group-align: center;
      --group-justify: flex-start;
      --group-wrap: wrap;
      flex: 1 1 0%;
      overflow-y: auto;
      max-height: calc(100vh - var(--header-height));
    "
  >
    <div
      class="m_6d731127 mantine-Stack-root __m__-r2h"
      style="
        --stack-gap: 0rem;
        --stack-align: stretch;
        --stack-justify: flex-start;
        margin-inline: auto;
        padding-block: calc(1.25rem * var(--mantine-scale));
        width: 100%;
        min-width: calc(18.75rem * var(--mantine-scale));
        max-width: calc(68.75rem * var(--mantine-scale));
      "
    >
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: var(--mantine-spacing-lg);
          --stack-align: stretch;
          --stack-justify: flex-start;
        "
      >
        <a
          class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
          data-underline="hover"
          href="https://lfd.tanssi.network/"
          target="_blank"
          style="
            position: relative;
            display: block;
            width: 100%;
            color: var(--mantine-color-anchor);
          "
          ><img
            alt="Let's Forkin Dance banner"
            fetchpriority="high"
            width="1536"
            height="1024"
            decoding="async"
            data-nimg="1"
            class="m_9e117634 mantine-Image-root"
            src="../../assets/img/banner_2.webp"
            style="color: transparent; width: 100%; height: auto" />
          <button
            class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
            type="button"
            style="
              --ai-color: var(--mantine-color-white);
              position: absolute;
              top: 3%;
              right: 2%;
              background-color: transparent;
            "
          >
            <span class="m_8d3afb97 mantine-ActionIcon-icon"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"
                ></path>
              </svg>
            </span>
          </button>
          <div
            style="
              position: absolute;
              bottom: 3%;
              right: 2%;
              background-color: transparent;
              color: rgb(255, 255, 255);
            "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="48"
                d="m268 112 144 144-144 144m124-144H100"
              ></path>
            </svg></div
        ></a>
        <h1
          class="m_8a5d1357 mantine-Title-root"
          data-order="1"
          style="
            --title-fw: var(--mantine-h1-font-weight);
            --title-lh: var(--mantine-h1-line-height);
            --title-fz: calc(2.25rem * var(--mantine-scale));
            font-family: Kilimanjaro, sans-serif;
            color: var(--mantine-color-white);
          "
        >
          Demo Appchain
        </h1>
        <p
          class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
          style="color: var(--mantine-color-white)"
        >
          A demo EVM Tanssi Appchain is deployed on Dancebox for testing
          purposes. Interact with this chain to discover the capabilities of a
          fully Ethereum-compatible Appchain deployed through Tanssi.
        </p>
        <h2
          class="m_8a5d1357 mantine-Title-root"
          data-order="2"
          style="
            --title-fw: var(--mantine-h2-font-weight);
            --title-lh: var(--mantine-h2-line-height);
            --title-fz: calc(1.5rem * var(--mantine-scale));
            color: var(--mantine-color-white);
          "
        >
          Faucet
        </h2>
        <div
          class="m_1b7284a3 mantine-Paper-root"
          style="
            border-radius: calc(1rem * var(--mantine-scale));
            background: var(--mantine-color-dark-8);
            padding: var(--mantine-spacing-lg);
          "
        >
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-lg);
              --group-align: center;
              --group-justify: space-between;
              --group-wrap: wrap;
            "
          >
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root __m__-r2s"
              style="color: var(--mantine-color-white)"
            >
              Ready to deploy contracts? You can request 1 TANGO tokens every 12
              hours.
            </p>
            <button
              class="mantine-focus-auto mantine-active m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root __m__-r2t"
              data-size="lg"
              data-with-left-section="true"
              data-with-right-section="true"
              type="button"
              data-testid="connect-evm-wallet-button"
              style="
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: var(--mantine-color-white);
                opacity: 1;
                --button-height: var(--button-height-lg);
                --button-padding-x: var(--button-padding-x-lg);
                --button-fz: var(--mantine-font-size-lg);
                --button-color: var(--mantine-color-white);
                font-weight: 500;
              "
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="left"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-wallet"
                  >
                    <path
                      d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                    ></path>
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg></span
                ><span class="m_811560b9 mantine-Button-label"
                  >Connect Wallet</span
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="right"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-chevron-down"
                  >
                    <path d="M6 9l6 6l6 -6"></path></svg></span
              ></span>
            </button>
          </div>
        </div>
        <h2
          class="m_8a5d1357 mantine-Title-root"
          data-order="2"
          style="
            --title-fw: var(--mantine-h2-font-weight);
            --title-lh: var(--mantine-h2-line-height);
            --title-fz: calc(1.5rem * var(--mantine-scale));
            color: var(--mantine-color-white);
          "
        >
          Capture the Flag
        </h2>
        <div
          class="m_1b7284a3 mantine-Paper-root"
          style="
            border-radius: calc(1rem * var(--mantine-scale));
            background: var(--mantine-color-dark-8);
            flex: 1 1 0%;
            padding: var(--mantine-spacing-lg);
          "
        >
          <p
            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
            style="color: var(--mantine-color-white)"
          >
            Connect to Tanssi EVM AppChain and play Capture The Flag to test the
            network. Claim TANGO tokens and click on Claim Flag to become the
            current leader.
          </p>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: calc(0.3125rem * var(--mantine-scale));
              --group-align: center;
              --group-justify: flex-start;
              --group-wrap: wrap;
              margin-top: var(--mantine-spacing-md);
            "
          >
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-white)"
            >
              Cost to capture:
            </p>
            <span
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-tanssiTeal-9)"
              >0.2 TANGO</span
            >
          </div>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: center;
              --group-justify: space-between;
              --group-wrap: wrap;
              margin-top: var(--mantine-spacing-xs);
            "
          >
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: 0rem;
                --group-align: center;
                --group-justify: flex-start;
                --group-wrap: wrap;
              "
            >
              <span
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="
                  margin-right: calc(0.3125rem * var(--mantine-scale));
                  color: var(--mantine-color-white);
                "
                >Current Holder:</span
              >
              <div class="">
                <span
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-tanssiTeal-9)"
                  >0xCa0...0dA7C</span
                ><span
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  holding for </span
                ><span
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                  >1min.</span
                >
              </div>
            </div>
            <button
              class="mantine-focus-auto ActionButton_button__aljz0 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root __m__-r3c"
              data-variant="light"
              data-size="lg"
              data-disabled="true"
              data-with-left-section="true"
              type="button"
              disabled=""
              style="
                color: var(--mantine-color-white);
                opacity: 0.5;
                --button-height: var(--button-height-lg);
                --button-padding-x: var(--button-padding-x-lg);
                --button-fz: var(--mantine-font-size-lg);
                --button-bg: var(--mantine-color-tanssiTeal-light);
                --button-hover: var(--mantine-color-tanssiTeal-light-hover);
                --button-color: var(--mantine-color-tanssiTeal-light-color);
                --button-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
                font-weight: 500;
              "
            >
              <span class="m_80f1301b mantine-Button-inner"
                ><span
                  class="m_a74036a mantine-Button-section"
                  data-position="left"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-flag"
                  >
                    <path
                      d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"
                    ></path>
                    <path d="M5 21v-7"></path></svg></span
                ><span class="m_811560b9 mantine-Button-label"
                  >Claim Flag</span
                ></span
              >
            </button>
          </div>
          <h2
            class="m_8a5d1357 mantine-Title-root"
            data-order="2"
            style="
              --title-fw: var(--mantine-h2-font-weight);
              --title-lh: var(--mantine-h2-line-height);
              --title-fz: calc(1.5rem * var(--mantine-scale));
              margin-top: var(--mantine-spacing-xl);
              color: var(--mantine-color-white);
            "
          >
            Leaderboard
          </h2>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: center;
              --group-justify: space-between;
              --group-wrap: wrap;
              margin-top: var(--mantine-spacing-lg);
            "
          >
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-gray-6)"
            >
              Address
            </p>
            <p
              class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
              style="color: var(--mantine-color-gray-6)"
            >
              Total Time Held
            </p>
          </div>
          <div class="" style="margin-top: var(--mantine-spacing-sm)">
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  1. 0x0589B3CaB6A1c62468bFB046C9B367b927b42172
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                1d 22h 26min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  2. 0x0831cc451e786CA95e8E6D876EE3ec1Ff48C2a8D
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                1d 20h 27min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  3. 0xB0A33A136250db0Eb256AD7C370F9eacF6f935ed
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                1d 18h 53min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  4. 0x48E880C03FfD6BB4178ddcFfeF957d1B1663eBC0
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                1d 12h 30min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  5. 0xf88070E650475A8c33795dB7021f7D223a50855B
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                16h 35min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  6. 0xf88070E650475A8c33795dB7021f7D223a50855B
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                16h 35min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  7. 0x093A17d646F3eABcE54e4BD8673Dea17A545b698
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                12h 15min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  8. 0xDA1eaa6D6BA271B1FB9e5d014FdBff6326d26aF6
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                10h 52min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  9. 0x2DFB70A856bC19A66a77F73aC61cc6afA81Fc5E3
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                10h 5min
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: space-between;
                --group-wrap: wrap;
                border-top: 1px solid var(--mantine-color-dark-6);
                padding-block: var(--mantine-spacing-xs);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-xs);
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="color: var(--mantine-color-white)"
                >
                  10. 0x4DC3463264C1b1AA9b31c20063Fc71e5E79EA72B
                </p>
                <button
                  class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                  data-variant="subtle"
                  type="button"
                  style="
                    --ai-size: calc(1.25rem * var(--mantine-scale));
                    --ai-radius: var(--mantine-radius-xl);
                    --ai-bg: transparent;
                    --ai-hover: rgba(255, 187, 0, 0.12);
                    --ai-color: #ffbb00;
                    --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                      transparent;
                  "
                >
                  <span class="m_8d3afb97 mantine-ActionIcon-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-copy"
                    >
                      <path
                        d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                      ></path>
                      <path
                        d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                style="color: var(--mantine-color-white)"
              >
                6h 43min
              </p>
            </div>
          </div>
        </div>
        <div
          class="m_1b7284a3 mantine-Paper-root"
          style="
            border-radius: calc(1rem * var(--mantine-scale));
            background: var(--mantine-color-dark-9);
            border: 2px solid var(--mantine-color-dark-6);
            margin-top: var(--mantine-spacing-lg);
            margin-bottom: calc(0.9375rem * var(--mantine-scale));
            padding: var(--mantine-spacing-md);
          "
        >
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-xs);
              --group-align: center;
              --group-justify: space-between;
              --group-wrap: wrap;
              margin-bottom: calc(1.25rem * var(--mantine-scale));
            "
          >
            <div
              class="m_4081bf90 mantine-Group-root __m__-r77"
              style="
                --group-gap: var(--mantine-spacing-xs);
                --group-align: center;
                --group-justify: flex-start;
                --group-wrap: wrap;
              "
            >
              <div class="m_4451eb3a mantine-Center-root">
                <div
                  class="m_4451eb3a mantine-Center-root"
                  style="
                    border-radius: 50%;
                    padding: var(--mantine-spacing-xs);
                    background: var(--mantine-color-dark-7);
                    width: calc(2rem * var(--mantine-scale));
                    height: calc(2rem * var(--mantine-scale));
                  "
                >
                  <img
                    alt="Tanssi Demo"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%22-1.5%20-1.5%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22hsl(120%2095%25%2045%25)%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%222%22%20y%3D%224%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%224%22%20y%3D%222%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%221%22%20height%3D%221%22%2F%3E%3C%2Fsvg%3E"
                    style="color: transparent; border-radius: inherit"
                  />
                </div>
              </div>
              <h2
                class="m_8a5d1357 mantine-Title-root"
                data-order="2"
                style="
                  --title-fw: var(--mantine-h2-font-weight);
                  --title-lh: var(--mantine-h2-line-height);
                  --title-fz: calc(1.25rem * var(--mantine-scale));
                  color: rgb(255, 187, 0);
                "
              >
                TANSSI DEMO
              </h2>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: calc(0.4375rem * var(--mantine-scale));
                --group-align: center;
                --group-justify: center;
                --group-wrap: nowrap;
                width: 15%;
              "
            >
              <div
                class=""
                style="
                  border-radius: 50%;
                  background: var(--mantine-color-green-4);
                  width: calc(0.75rem * var(--mantine-scale));
                  height: calc(0.75rem * var(--mantine-scale));
                "
              ></div>
              <p
                class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                data-size="sm"
                style="
                  --text-fz: var(--mantine-font-size-sm);
                  --text-lh: var(--mantine-line-height-sm);
                  color: var(--mantine-color-white);
                "
              >
                Live
              </p>
            </div>
            <div
              class="m_4081bf90 mantine-Group-root __m__-r7b"
              style="
                --group-gap: var(--mantine-spacing-xs);
                --group-align: center;
                --group-justify: end;
                --group-wrap: wrap;
              "
            >
              <button
                class="mantine-focus-auto m_87cf2631 mantine-UnstyledButton-root"
                type="button"
                style="opacity: 1"
              >
                <div class="m_4451eb3a mantine-Center-root">
                  <img
                    alt="Metamask logo"
                    fetchpriority="high"
                    width="26"
                    height="26"
                    decoding="async"
                    data-nimg="1"
                    src="../../assets/img/logo_metamask.svg"
                    style="color: transparent"
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: auto;
              --group-justify: flex-start;
              --group-wrap: wrap;
              flex-direction: row;
              margin-top: calc(0.9375rem * var(--mantine-scale));
            "
          >
            <div
              class="m_1b7284a3 mantine-Paper-root __m__-r7d"
              style="
                border-radius: calc(1rem * var(--mantine-scale));
                background: var(--mantine-color-dark-8);
                padding: var(--mantine-spacing-lg);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: calc(0.3125rem * var(--mantine-scale));
                  --group-align: center;
                  --group-justify: flex-start;
                  --group-wrap: wrap;
                "
              >
                <h4
                  class="m_8a5d1357 mantine-Title-root"
                  data-order="4"
                  style="
                    --title-fw: var(--mantine-h4-font-weight);
                    --title-lh: var(--mantine-h4-line-height);
                    --title-fz: calc(0.875rem * var(--mantine-scale));
                    color: var(--mantine-color-white);
                  "
                >
                  Block Production
                </h4>
                <div
                  class="m_4451eb3a mantine-Center-root"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mantine-ujkbg23s4-dropdown"
                  id="mantine-ujkbg23s4-target"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                      width: calc(1.25rem * var(--mantine-scale));
                      height: calc(1.25rem * var(--mantine-scale));
                    "
                  >
                    <circle cx="10" cy="10" r="10" fill="#202738"></circle>
                    <path
                      d="M10 14L10 10"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle cx="10" cy="7" r="1" fill="white"></circle>
                  </svg>
                </div>
              </div>
              <div
                class=""
                style="margin-top: calc(0.9375rem * var(--mantine-scale))"
              >
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: calc(0.3125rem * var(--mantine-scale));
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    Balance:
                  </p>
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                  >
                    21,478.07
                    <span
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-white);
                      "
                      >DANCE</span
                    >
                  </p>
                </div>
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  data-size="sm"
                  style="
                    --text-fz: var(--mantine-font-size-sm);
                    --text-lh: var(--mantine-line-height-sm);
                    color: var(--mantine-color-gray-5);
                  "
                >
                  Days:
                  <span
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                    >3502y 226d 13h 28min</span
                  >
                </p>
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: calc(0.3125rem * var(--mantine-scale));
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    Per Block:
                  </p>
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                  >
                    0.000001
                    <span
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-white);
                      "
                      >DANCE</span
                    >
                  </p>
                </div>
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: calc(0.3125rem * var(--mantine-scale));
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    Per Session:
                  </p>
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                  >
                    0.0001
                    <span
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-white);
                      "
                      >DANCE</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="m_1b7284a3 mantine-Paper-root"
              style="
                border-radius: calc(1rem * var(--mantine-scale));
                background: var(--mantine-color-dark-8);
                flex: 1 1 0%;
                padding: var(--mantine-spacing-lg);
              "
            >
              <div
                class="m_4081bf90 mantine-Group-root"
                style="
                  --group-gap: var(--mantine-spacing-md);
                  --group-align: center;
                  --group-justify: space-between;
                  --group-wrap: wrap;
                "
              >
                <h4
                  class="m_8a5d1357 mantine-Title-root"
                  data-order="4"
                  style="
                    --title-fw: var(--mantine-h4-font-weight);
                    --title-lh: var(--mantine-h4-line-height);
                    --title-fz: calc(0.875rem * var(--mantine-scale));
                    color: var(--mantine-color-white);
                  "
                >
                  Properties
                </h4>
              </div>
              <div
                class=""
                style="margin-top: calc(0.9375rem * var(--mantine-scale))"
              >
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: 0rem;
                    --group-align: start;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                    display: flex;
                  "
                >
                  <div
                    class="__m__-r81"
                    style="margin-right: var(--mantine-spacing-xs)"
                  >
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      Type:
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >EVM-Dancebox Appchain</span
                      >
                    </p>
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      Appchain ID:
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >3001</span
                      >
                    </p>
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      EVM Chain ID:
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >5678</span
                      >
                    </p>
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      Token Symbol:
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >TANGO</span
                      >
                    </p>
                  </div>
                  <div class="__m__-r86">
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      Relay Chain:
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >Moonbase Relay</span
                      >
                    </p>
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-gray-5);
                      "
                    >
                      Runtime:
                      <a
                        class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                        data-size="sm"
                        data-underline="hover"
                        href="https://github.com/moondance-labs/tanssi/tree/runtime-600"
                        rel="noopener noreferrer"
                        target="_blank"
                        tabindex="0"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                          text-decoration: none;
                        "
                        >600<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFBB00"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="tabler-icon tabler-icon-external-link"
                          style="margin-left: 5px; transform: translateY(15%)"
                        >
                          <path
                            d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
                          ></path>
                          <path d="M11 13l9 -9"></path>
                          <path d="M15 4h5v5"></path></svg
                      ></a>
                    </p>
                    <div
                      class="m_4081bf90 mantine-Group-root"
                      style="
                        --group-gap: calc(0.3125rem * var(--mantine-scale));
                        --group-align: center;
                        --group-justify: flex-start;
                        --group-wrap: wrap;
                      "
                    >
                      <p
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-gray-5);
                        "
                      >
                        Sudo Address:
                      </p>
                      <span
                        class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                        data-size="sm"
                        style="
                          --text-fz: var(--mantine-font-size-sm);
                          --text-lh: var(--mantine-line-height-sm);
                          color: var(--mantine-color-white);
                        "
                        >0x6D62...7a9f46</span
                      ><button
                        class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                        data-variant="subtle"
                        type="button"
                        style="
                          --ai-size: calc(1rem * var(--mantine-scale));
                          --ai-radius: var(--mantine-radius-xl);
                          --ai-bg: transparent;
                          --ai-hover: rgba(255, 187, 0, 0.12);
                          --ai-color: #ffbb00;
                          --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                            transparent;
                        "
                      >
                        <span class="m_8d3afb97 mantine-ActionIcon-icon"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="tabler-icon tabler-icon-copy"
                          >
                            <path
                              d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                            ></path>
                            <path
                              d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                            ></path></svg
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="m_4081bf90 mantine-Group-root"
            style="
              --group-gap: var(--mantine-spacing-md);
              --group-align: auto;
              --group-justify: flex-start;
              --group-wrap: wrap;
              flex-direction: row;
              margin-top: calc(0.9375rem * var(--mantine-scale));
            "
          >
            <div
              class="m_1b7284a3 mantine-Paper-root"
              style="
                border-radius: calc(1rem * var(--mantine-scale));
                background: var(--mantine-color-dark-8);
                flex: 1 1 0%;
                padding: var(--mantine-spacing-lg);
              "
            >
              <h4
                class="m_8a5d1357 mantine-Title-root"
                data-order="4"
                style="
                  --title-fw: var(--mantine-h4-font-weight);
                  --title-lh: var(--mantine-h4-line-height);
                  --title-fz: calc(0.875rem * var(--mantine-scale));
                  color: var(--mantine-color-white);
                "
              >
                Tooling
              </h4>
              <div
                class=""
                style="margin-top: calc(0.9375rem * var(--mantine-scale))"
              >
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: 0rem;
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                    margin-bottom: calc(0.3125rem * var(--mantine-scale));
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      margin-right: calc(0.3125rem * var(--mantine-scale));
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    Explorer:
                  </p>
                  <div
                    class="m_4081bf90 mantine-Group-root"
                    style="
                      --group-gap: 0rem;
                      --group-align: center;
                      --group-justify: flex-start;
                      --group-wrap: wrap;
                    "
                  >
                    <a
                      class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                      data-size="sm"
                      data-underline="hover"
                      href="https://fra-dancebox-3001-bs.a.dancebox.tanssi.network/"
                      rel="noopener noreferrer"
                      target="_blank"
                      tabindex="0"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        margin-right: calc(0.3125rem * var(--mantine-scale));
                        color: var(--mantine-color-white);
                        text-decoration: none;
                      "
                      >Blockscout<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFBB00"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-external-link"
                        style="margin-left: 5px; transform: translateY(15%)"
                      >
                        <path
                          d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
                        ></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path></svg></a
                    ><a
                      class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                      data-size="sm"
                      data-underline="hover"
                      href="https://polkadot.js.org/apps?rpc=wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network"
                      rel="noopener noreferrer"
                      target="_blank"
                      tabindex="0"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        margin-right: calc(0.3125rem * var(--mantine-scale));
                        color: var(--mantine-color-white);
                        text-decoration: none;
                      "
                      >Polkadot JS Apps<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFBB00"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-external-link"
                        style="margin-left: 5px; transform: translateY(15%)"
                      >
                        <path
                          d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
                        ></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path></svg
                    ></a>
                  </div>
                </div>
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: 0rem;
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                    margin-bottom: calc(0.3125rem * var(--mantine-scale));
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      margin-right: calc(0.3125rem * var(--mantine-scale));
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    RPC:
                  </p>
                  <div
                    class="m_4081bf90 mantine-Group-root"
                    style="
                      --group-gap: calc(0.3125rem * var(--mantine-scale));
                      --group-align: center;
                      --group-justify: flex-start;
                      --group-wrap: wrap;
                    "
                  >
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-white);
                      "
                    >
                      https://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network
                    </p>
                    <button
                      class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                      data-variant="subtle"
                      type="button"
                      style="
                        --ai-size: calc(1.125rem * var(--mantine-scale));
                        --ai-radius: var(--mantine-radius-xl);
                        --ai-bg: transparent;
                        --ai-hover: rgba(255, 187, 0, 0.12);
                        --ai-color: #ffbb00;
                        --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                          transparent;
                      "
                    >
                      <span class="m_8d3afb97 mantine-ActionIcon-icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="tabler-icon tabler-icon-copy"
                        >
                          <path
                            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                          ></path>
                          <path
                            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                          ></path></svg
                      ></span>
                    </button>
                  </div>
                </div>
                <div
                  class="m_4081bf90 mantine-Group-root"
                  style="
                    --group-gap: 0rem;
                    --group-align: center;
                    --group-justify: flex-start;
                    --group-wrap: wrap;
                    margin-bottom: calc(0.3125rem * var(--mantine-scale));
                  "
                >
                  <p
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      margin-right: calc(0.3125rem * var(--mantine-scale));
                      color: var(--mantine-color-gray-5);
                    "
                  >
                    WS:
                  </p>
                  <div
                    class="m_4081bf90 mantine-Group-root"
                    style="
                      --group-gap: calc(0.3125rem * var(--mantine-scale));
                      --group-align: center;
                      --group-justify: flex-start;
                      --group-wrap: wrap;
                    "
                  >
                    <p
                      class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                      data-size="sm"
                      style="
                        --text-fz: var(--mantine-font-size-sm);
                        --text-lh: var(--mantine-line-height-sm);
                        color: var(--mantine-color-white);
                      "
                    >
                      wss://fraa-dancebox-3001-rpc.a.dancebox.tanssi.network
                    </p>
                    <button
                      class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
                      data-variant="subtle"
                      type="button"
                      style="
                        --ai-size: calc(1.125rem * var(--mantine-scale));
                        --ai-radius: var(--mantine-radius-xl);
                        --ai-bg: transparent;
                        --ai-hover: rgba(255, 187, 0, 0.12);
                        --ai-color: #ffbb00;
                        --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                          transparent;
                      "
                    >
                      <span class="m_8d3afb97 mantine-ActionIcon-icon"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="tabler-icon tabler-icon-copy"
                        >
                          <path
                            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
                          ></path>
                          <path
                            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
                          ></path></svg
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="m_1b7284a3 mantine-Paper-root __m__-r8u"
              style="
                border-radius: calc(1rem * var(--mantine-scale));
                background: var(--mantine-color-dark-8);
                padding: var(--mantine-spacing-lg);
              "
            >
              <h4
                class="m_8a5d1357 mantine-Title-root"
                data-order="4"
                style="
                  --title-fw: var(--mantine-h4-font-weight);
                  --title-lh: var(--mantine-h4-line-height);
                  --title-fz: calc(0.875rem * var(--mantine-scale));
                  color: var(--mantine-color-white);
                "
              >
                Appchain Feed
              </h4>
              <div
                class=""
                style="margin-top: calc(0.9375rem * var(--mantine-scale))"
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  data-size="sm"
                  style="
                    --text-fz: var(--mantine-font-size-sm);
                    --text-lh: var(--mantine-line-height-sm);
                    color: var(--mantine-color-gray-5);
                  "
                >
                  Latest Block Number:
                  <span
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                    >2264441</span
                  >
                </p>
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  data-size="sm"
                  style="
                    --text-fz: var(--mantine-font-size-sm);
                    --text-lh: var(--mantine-line-height-sm);
                    color: var(--mantine-color-gray-5);
                  "
                >
                  Latest Block Timestamp:
                  <span
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                    >15:04:00</span
                  >
                </p>
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  data-size="sm"
                  style="
                    --text-fz: var(--mantine-font-size-sm);
                    --text-lh: var(--mantine-line-height-sm);
                    color: var(--mantine-color-gray-5);
                  "
                >
                  Latest Block Transactions:
                  <span
                    class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                    data-size="sm"
                    style="
                      --text-fz: var(--mantine-font-size-sm);
                      --text-lh: var(--mantine-line-height-sm);
                      color: var(--mantine-color-white);
                    "
                    >0</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <h2
            class="m_8a5d1357 mantine-Title-root"
            data-order="2"
            style="
              --title-fw: var(--mantine-h2-font-weight);
              --title-lh: var(--mantine-h2-line-height);
              --title-fz: calc(1.5rem * var(--mantine-scale));
              margin-bottom: var(--mantine-spacing-md);
              color: var(--mantine-color-white);
            "
          >
            Tooling
          </h2>
          <p
            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
            style="color: var(--mantine-color-white)"
          >
            The following is a list of tools that have been integrated on the
            Tanssi Demo Appchain, all services can be leveraged on your own
            Appchain.
          </p>
          <div
            class="m_1b7284a3 mantine-Paper-root"
            style="
              border-radius: calc(1rem * var(--mantine-scale));
              background: rgba(205, 250, 80, 0.1);
              margin-top: var(--mantine-spacing-xs);
              padding: var(--mantine-spacing-xl);
            "
          >
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: flex-start;
                --group-wrap: wrap;
              "
            >
              <img
                alt="Phala Network"
                loading="lazy"
                width="53"
                height="53"
                decoding="async"
                data-nimg="1"
                src="../../assets/icon/logo_phala.svg"
                style="color: transparent"
              />
              <div class="" style="width: calc(6.25rem * var(--mantine-scale))">
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="
                    color: var(--mantine-color-white);
                    font-size: var(--mantine-font-size-lg);
                  "
                >
                  Phala
                </p>
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="
                    color: var(--mantine-color-white);
                    font-size: var(--mantine-font-size-lg);
                  "
                >
                  Network
                </p>
              </div>
              <div
                class=""
                style="margin-left: var(--mantine-spacing-lg); max-width: 65%"
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="
                    color: var(--mantine-color-white);
                    font-size: var(--mantine-font-size-lg);
                  "
                >
                  Use Phala's off-chain computing network to get reliable
                  Ethereum Mainnet Chainlink Oracle token price feed data.
                </p>
              </div>
              <a
                class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                data-size="sm"
                data-underline="hover"
                href="https://docs.tanssi.network/builders/tooling/oracles/phala/"
                rel="noopener noreferrer"
                target="_blank"
                tabindex="0"
                style="
                  --text-fz: var(--mantine-font-size-sm);
                  --text-lh: var(--mantine-line-height-sm);
                  align-self: flex-end;
                  margin-left: auto;
                  color: var(--mantine-color-white);
                  font-size: var(--mantine-font-size-md);
                  font-weight: bold;
                "
                >Continue →</a
              >
            </div>
          </div>
          <div
            class="m_1b7284a3 mantine-Paper-root"
            style="
              border-radius: calc(1rem * var(--mantine-scale));
              background: radial-gradient(
                  98.76% 865.83% at 98.76% 100%,
                  rgba(0, 0, 0, 0.3) 0%,
                  rgba(0, 39, 202, 0.3) 100%
                ),
                linear-gradient(0deg, rgb(14, 18, 28), rgb(14, 18, 28));
              margin-top: var(--mantine-spacing-xs);
              padding: var(--mantine-spacing-xl);
            "
          >
            <div
              class="m_4081bf90 mantine-Group-root"
              style="
                --group-gap: var(--mantine-spacing-md);
                --group-align: center;
                --group-justify: flex-start;
                --group-wrap: wrap;
              "
            >
              <img
                alt="Acurast"
                loading="lazy"
                width="53"
                height="39"
                decoding="async"
                data-nimg="1"
                src="../../assets/icon/logo_acurast.svg"
                style="color: transparent"
              />
              <div class="" style="width: calc(6.25rem * var(--mantine-scale))">
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="
                    color: var(--mantine-color-white);
                    font-size: var(--mantine-font-size-lg);
                  "
                >
                  Acurast
                </p>
              </div>
              <div
                class=""
                style="margin-left: var(--mantine-spacing-lg); max-width: 65%"
              >
                <p
                  class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
                  style="
                    color: var(--mantine-color-white);
                    font-size: var(--mantine-font-size-lg);
                  "
                >
                  Use Acurast's decentralized serverless cloud to get reliable
                  price feed token asset data.
                </p>
              </div>
              <a
                class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
                data-size="sm"
                data-underline="hover"
                href="https://docs.tanssi.network/builders/tooling/oracles/acurast/"
                rel="noopener noreferrer"
                target="_blank"
                tabindex="0"
                style="
                  --text-fz: var(--mantine-font-size-sm);
                  --text-lh: var(--mantine-line-height-sm);
                  align-self: flex-end;
                  margin-left: auto;
                  color: var(--mantine-color-white);
                  font-size: var(--mantine-font-size-md);
                  font-weight: bold;
                "
                >Continue →</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__m__-r2h {
  padding-inline: var(--mantine-spacing-md);
}
@media (min-width: 62em) {
  .__m__-r2h {
    padding-inline: var(--mantine-spacing-xl);
  }
}
@media (min-width: 36em) {
  .__m__-r2s {
    max-width: 30%;
  }
}
.__m__-r8u {
  width: 100%;
}
@media (min-width: 48em) {
  .__m__-r8u {
    width: 35%;
  }
}
.__m__-r86 {
  width: auto;
}
@media (min-width: 36em) {
  .__m__-r86 {
    width: 55%;
  }
}
.__m__-r81 {
  width: auto;
}
@media (min-width: 36em) {
  .__m__-r81 {
    width: 40%;
  }
}
.__m__-r7d {
  width: auto;
}
@media (min-width: 48em) {
  .__m__-r7d {
    width: 35%;
  }
}
.__m__-r7b {
  width: 80%;
}
@media (min-width: 36em) {
  .__m__-r7b {
    width: 40%;
  }
}
.__m__-r77 {
  width: 100%;
}
@media (min-width: 36em) {
  .__m__-r77 {
    width: 40%;
  }
}
.__m__-r3c {
  min-width: 100%;
}
@media (min-width: 36em) {
  .__m__-r3c {
    min-width: auto;
  }
}
.__m__-r2t {
  min-width: 100%;
}
@media (min-width: 36em) {
  .__m__-r2t {
    min-width: auto;
  }
}
</style>
