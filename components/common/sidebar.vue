<template>
  <div
    class="m_45252eee mantine-AppShell-navbar Nav_nav__W3s5_"
    style="--app-shell-navbar-z-index: calc(100 + 1)"
  >
    <button
      class="mantine-focus-auto m_fea6bf1a mantine-Burger-root m_87cf2631 mantine-UnstyledButton-root mantine-hidden-from-md"
      data-size="md"
      type="button"
      style="
        --burger-size: var(--burger-size-md);
        position: absolute;
        top: 30px;
        left: calc(1.25rem * var(--mantine-scale));
      "
    >
      <div
        class="m_d4fb9cad mantine-Burger-burger"
        data-reduce-motion="true"
      ></div></button
    ><a href="/"
      ><img
        alt="Tanssi"
        fetchpriority="high"
        width="140"
        height="44"
        decoding="async"
        data-nimg="1"
        src="~/assets/img/logo.webp"
        style="color: transparent"
    /></a>
    <div
      class="m_6d731127 mantine-Stack-root"
      style="
        --stack-gap: var(--mantine-spacing-md);
        --stack-align: stretch;
        --stack-justify: space-between;
        flex: 1 1 0%;
        width: 100%;
      "
    >
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: calc(0.3125rem * var(--mantine-scale));
          --stack-align: stretch;
          --stack-justify: flex-start;
          width: 100%;
        "
      >
        <a
          class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
          href="/"
          :data-active="$route.path === '/'"
          ><span class="m_690090b5 mantine-NavLink-section" data-position="left"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--mantine-color-tanssiTeal-9)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-layout-dashboard"
            >
              <path
                d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"
              ></path>
              <path
                d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"
              ></path>
              <path
                d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1"
              ></path>
              <path
                d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1"
              ></path>
            </svg>
          </span>
          <div class="m_f07af9d2 mantine-NavLink-body">
            <span
              class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
              >Dashboard</span
            ><span class="m_57492dcc mantine-NavLink-description"></span></div
        ></a>
        <div
          class="mantine-NavLink-collapse"
          aria-hidden="true"
          style="
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 200ms ease 0s;
            display: none;
            height: 0px;
            overflow: hidden;
          "
        >
          <div class="m_e17b862f mantine-NavLink-children"></div>
        </div>
        <a
          class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
          href="/create"
          :data-active="$route.path === '/create'"
          ><span class="m_690090b5 mantine-NavLink-section" data-position="left"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--mantine-color-tanssiTeal-9)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-edit"
            >
              <path
                d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
              ></path>
              <path
                d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
              ></path>
              <path d="M16 5l3 3"></path>
            </svg>
          </span>
          <div class="m_f07af9d2 mantine-NavLink-body">
            <span
              class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
              >Deploy Appchain</span
            ><span class="m_57492dcc mantine-NavLink-description"></span></div
        ></a>
        <div
          class="mantine-NavLink-collapse"
          aria-hidden="true"
          style="
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 200ms ease 0s;
            display: none;
            height: 0px;
            overflow: hidden;
          "
        >
          <div class="m_e17b862f mantine-NavLink-children"></div>
        </div>
        <a
          class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
          :data-active="$route.path === '/demo'"
          href="/demo"
          ><span class="m_690090b5 mantine-NavLink-section" data-position="left"
            ><svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--mantine-color-tanssiTeal-9)"
              stroke="1.5"
              style="
                width: calc(1.375rem * var(--mantine-scale));
                height: calc(1.375rem * var(--mantine-scale));
              "
            >
              <path
                d="M5.5 18L10 15.5V10.5L5.5 8L1 10.5V15.5L5.5 18ZM5.5 18V13.3125M5.5 13.3125L1.27813 10.8125M5.5 13.3125L9.72187 10.8125"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14.5 18L19 15.5V10.5L14.5 8L10 10.5V15.5L14.5 18ZM14.5 18V13.3125M14.5 13.3125L10.2781 10.8125M14.5 13.3125L18.7219 10.8125"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 10L14 7.75V3.25L10 1L6 3.25V7.75L10 10ZM10 10V5.78125M10 5.78125L6.24722 3.53125M10 5.78125L13.7528 3.53125"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <div class="m_f07af9d2 mantine-NavLink-body">
            <span
              class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
              >Demo Appchain</span
            ><span
              class="m_57492dcc mantine-NavLink-description"
              data-active="true"
            ></span></div
        ></a>
        <div
          class="mantine-NavLink-collapse"
          aria-hidden="true"
          style="
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 200ms ease 0s;
            display: none;
            height: 0px;
            overflow: hidden;
          "
        >
          <div class="m_e17b862f mantine-NavLink-children"></div>
        </div>
        <a
          class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
          href="/staking"
          :data-active="$route.path === '/staking'"
          ><span class="m_690090b5 mantine-NavLink-section" data-position="left"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--mantine-color-tanssiTeal-9)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-stack-2"
            >
              <path d="M12 4l-8 4l8 4l8 -4l-8 -4"></path>
              <path d="M4 12l8 4l8 -4"></path>
              <path d="M4 16l8 4l8 -4"></path>
            </svg>
          </span>
          <div class="m_f07af9d2 mantine-NavLink-body">
            <span
              class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
              >Staking</span
            ><span class="m_57492dcc mantine-NavLink-description"></span></div
        ></a>
        <div
          class="mantine-NavLink-collapse"
          aria-hidden="true"
          style="
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 200ms ease 0s;
            display: none;
            height: 0px;
            overflow: hidden;
          "
        >
          <div class="m_e17b862f mantine-NavLink-children"></div>
        </div>
        <a
          class="mantine-focus-auto m_849cf0da Nav_offsiteLink__hsepr m_b6d8b162 mantine-Text-root mantine-Anchor-root"
          data-size="sm"
          data-underline="hover"
          href="https://youtube.com/watch?v=Ovasc7uAXpk&amp;list=PLEgIGlavjXIjiFacNWXn2Bmk4R1F_B8LB/"
          rel="noopener noreferrer"
          target="_blank"
          tabindex="-1"
          style="
            --text-fz: var(--mantine-font-size-sm);
            --text-lh: var(--mantine-line-height-sm);
            color: rgb(72, 166, 167);
          "
          ><button
            class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
            type="button"
          >
            <span
              class="m_690090b5 mantine-NavLink-section"
              data-position="left"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-school"
              >
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
              </svg>
            </span>
            <div class="m_f07af9d2 mantine-NavLink-body">
              <span
                class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
                >Tutorials</span
              ><span class="m_57492dcc mantine-NavLink-description"></span>
            </div>
          </button>
          <div
            class="mantine-NavLink-collapse"
            aria-hidden="true"
            style="
              box-sizing: border-box;
              opacity: 0;
              transition: opacity 200ms ease 0s;
              display: none;
              height: 0px;
              overflow: hidden;
            "
          >
            <div class="m_e17b862f mantine-NavLink-children"></div></div></a
        ><a
          class="mantine-focus-auto m_849cf0da Nav_offsiteLink__hsepr m_b6d8b162 mantine-Text-root mantine-Anchor-root"
          data-size="sm"
          data-underline="hover"
          href="https://docs.tanssi.network/"
          rel="noopener noreferrer"
          target="_blank"
          tabindex="-1"
          style="
            --text-fz: var(--mantine-font-size-sm);
            --text-lh: var(--mantine-line-height-sm);
            color: rgb(72, 166, 167);
          "
          ><button
            class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
            type="button"
          >
            <span
              class="m_690090b5 mantine-NavLink-section"
              data-position="left"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-file-description"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path
                  d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                ></path>
                <path d="M9 17h6"></path>
                <path d="M9 13h6"></path>
              </svg>
            </span>
            <div class="m_f07af9d2 mantine-NavLink-body">
              <span
                class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
                >Docs</span
              ><span class="m_57492dcc mantine-NavLink-description"></span>
            </div>
          </button>
          <div
            class="mantine-NavLink-collapse"
            aria-hidden="true"
            style="
              box-sizing: border-box;
              opacity: 0;
              transition: opacity 200ms ease 0s;
              display: none;
              height: 0px;
              overflow: hidden;
            "
          >
            <div class="m_e17b862f mantine-NavLink-children"></div></div></a
        ><a
          class="mantine-focus-auto m_849cf0da Nav_offsiteLink__hsepr m_b6d8b162 mantine-Text-root mantine-Anchor-root"
          data-size="sm"
          data-underline="hover"
          href="https://dashboard.tanssi-chains.network/"
          rel="noopener noreferrer"
          target="_blank"
          tabindex="-1"
          style="
            --text-fz: var(--mantine-font-size-sm);
            --text-lh: var(--mantine-line-height-sm);
            color: rgb(72, 166, 167);
          "
          ><button
            class="mantine-focus-auto Nav_navLink___7VKG m_f0824112 mantine-NavLink-root m_87cf2631 mantine-UnstyledButton-root"
            type="button"
          >
            <span
              class="m_690090b5 mantine-NavLink-section"
              data-position="left"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--mantine-color-tanssiTeal-9)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-chart-pie-4"
              >
                <path d="M12 12l-6.5 5.5"></path>
                <path d="M12 3v9h9"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 12l5 7.5"></path>
              </svg>
            </span>
            <div class="m_f07af9d2 mantine-NavLink-body">
              <span
                class="Nav_navLinkLabel__s47rI m_1f6ac4c4 mantine-NavLink-label"
                >Ecosystem</span
              ><span class="m_57492dcc mantine-NavLink-description"></span>
            </div>
          </button>
          <div
            class="mantine-NavLink-collapse"
            aria-hidden="true"
            style="
              box-sizing: border-box;
              opacity: 0;
              transition: opacity 200ms ease 0s;
              display: none;
              height: 0px;
              overflow: hidden;
            "
          >
            <div class="m_e17b862f mantine-NavLink-children"></div></div
        ></a>
      </div>
      <div
        class="m_6d731127 mantine-Stack-root"
        style="
          --stack-gap: calc(0.3125rem * var(--mantine-scale));
          --stack-align: stretch;
          --stack-justify: flex-start;
        "
      >
        <div
          class="m_4081bf90 mantine-Group-root"
          style="
            --group-gap: var(--mantine-spacing-xs);
            --group-align: center;
            --group-justify: space-between;
            --group-wrap: wrap;
            width: 100%;
          "
        >
          <a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://twitter.com/TanssiNetwork"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            aria-label="X"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            ><button
              class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="filled"
              type="button"
              title="X"
              style="
                --ai-size: calc(2.25rem * var(--mantine-scale));
                --ai-radius: var(--mantine-radius-md);
                --ai-bg: var(--mantine-color-dark-6);
                --ai-hover: var(--mantine-color-dark-7);
                --ai-color: var(--mantine-color-white);
                --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
              "
            >
              <span class="m_8d3afb97 mantine-ActionIcon-icon"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  ></path>
                </svg>
              </span></button></a
          ><a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://t.me/tanssiofficial"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            aria-label="Telegram"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            ><button
              class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="filled"
              type="button"
              title="Telegram"
              style="
                --ai-size: calc(2.25rem * var(--mantine-scale));
                --ai-radius: var(--mantine-radius-md);
                --ai-bg: var(--mantine-color-dark-6);
                --ai-hover: var(--mantine-color-dark-7);
                --ai-color: var(--mantine-color-white);
                --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
              "
            >
              <span class="m_8d3afb97 mantine-ActionIcon-icon"
                ><svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="
                    width: calc(1.25rem * var(--mantine-scale));
                    height: calc(1.25rem * var(--mantine-scale));
                  "
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1355 0.10262C16.3568 0.0117554 16.5991 -0.019583 16.837 0.0118657C17.0749 0.0433145 17.2999 0.136401 17.4884 0.281436C17.677 0.426472 17.8222 0.618154 17.9091 0.836531C17.9959 1.05491 18.0212 1.292 17.9822 1.52312L15.951 13.5415C15.754 14.7008 14.45 15.3656 13.3601 14.7881C12.4484 14.305 11.0943 13.5607 9.87632 12.7841C9.26733 12.3953 7.40184 11.1504 7.63111 10.2645C7.82814 9.50712 10.9627 6.66087 12.7538 4.96867C13.4568 4.30385 13.1362 3.92033 12.306 4.53186C10.2435 6.05021 6.93435 8.35919 5.83996 9.00916C4.87452 9.58225 4.37121 9.6801 3.76938 9.58225C2.6714 9.40403 1.65313 9.12797 0.822039 8.79163C-0.301014 8.33735 -0.246384 6.83123 0.821144 6.39267L16.1355 0.10262Z"
                    fill="white"
                  ></path>
                </svg>
              </span></button></a
          ><a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://discord.gg/kuyPhew2KB"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            aria-label="Discord"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            ><button
              class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="filled"
              type="button"
              title="Discord"
              style="
                --ai-size: calc(2.25rem * var(--mantine-scale));
                --ai-radius: var(--mantine-radius-md);
                --ai-bg: var(--mantine-color-dark-6);
                --ai-hover: var(--mantine-color-dark-7);
                --ai-color: var(--mantine-color-white);
                --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
              "
            >
              <span class="m_8d3afb97 mantine-ActionIcon-icon"
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                  ></path>
                </svg>
              </span></button></a
          ><a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://github.com/moondance-labs/tanssi"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            aria-label="GitHub"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            ><button
              class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="filled"
              type="button"
              title="GitHub"
              style="
                --ai-size: calc(2.25rem * var(--mantine-scale));
                --ai-radius: var(--mantine-radius-md);
                --ai-bg: var(--mantine-color-dark-6);
                --ai-hover: var(--mantine-color-dark-7);
                --ai-color: var(--mantine-color-white);
                --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
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
                    d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                  ></path>
                </svg>
              </span></button></a
          ><a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://www.youtube.com/@TanssiNetwork?sub_confirmation=1"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            aria-label="YouTube"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: rgb(72, 166, 167);
            "
            ><button
              class="mantine-focus-auto mantine-active m_8d3f4000 mantine-ActionIcon-root m_87cf2631 mantine-UnstyledButton-root"
              data-variant="filled"
              type="button"
              title="YouTube"
              style="
                --ai-size: calc(2.25rem * var(--mantine-scale));
                --ai-radius: var(--mantine-radius-md);
                --ai-bg: var(--mantine-color-dark-6);
                --ai-hover: var(--mantine-color-dark-7);
                --ai-color: var(--mantine-color-white);
                --ai-bd: calc(0.0625rem * var(--mantine-scale)) solid
                  transparent;
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
                    d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"
                  ></path>
                </svg>
              </span></button
          ></a>
        </div>
        <div
          class="m_4081bf90 mantine-Group-root"
          style="
            --group-gap: var(--mantine-spacing-md);
            --group-align: center;
            --group-justify: space-evenly;
            --group-wrap: wrap;
          "
        >
          <a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://www.tanssi.network/privacy-policy"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: var(--mantine-color-gray-6);
            "
            >Privacy Policy</a
          ><span
            class="mantine-focus-auto m_b6d8b162 mantine-Text-root"
            style="color: var(--mantine-color-gray-6)"
            >-</span
          ><a
            class="mantine-focus-auto m_849cf0da m_b6d8b162 mantine-Text-root mantine-Anchor-root"
            data-size="sm"
            data-underline="hover"
            href="https://www.tanssi.network/terms-of-use"
            rel="noopener noreferrer"
            target="_blank"
            tabindex="0"
            style="
              --text-fz: var(--mantine-font-size-sm);
              --text-lh: var(--mantine-line-height-sm);
              color: var(--mantine-color-gray-6);
            "
            >Terms of Use</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
