<template>
    <AppShell.Header
      :h="'var(--header-height)'"
      :right="right"
      :withBorder="!md"
      :px="'lg'"
      bg="dark.9"
    >
      <Group
        justify="space-between"
        align="center"
        wrap="nowrap"
        :h="'100%'"
      >
        <Burger :opened="opened" @click="toggle" hiddenFrom="md" />
        <Group :justify="'end'" :gap="'md'" :h="'100%'" :w="'100%'">
          <template v-if="isHomePage">
            <SelectChainDropdown />
          </template>
          <ConnectWallet />
        </Group>
      </Group>
    </AppShell.Header>
  </template>
  
  <script>
  import { AppShell, Burger, Group } from '@mantine/core';
  import { useRouter } from 'vue-router';
  import { useMediaQuery } from '@/hooks/useMediaQuery';
  import ConnectWallet from '@/components/ConnectWallet'; // Assuming ConnectWallet is a Vue component
  import SelectChainDropdown from '@/components/SelectChain'; // Assuming SelectChainDropdown is a Vue component
  
  export default {
    props: {
      right: Object,
      opened: Boolean,
      toggle: Function,
    },
    setup(props) {
      const router = useRouter();
      const { md } = useMediaQuery();
  
      const isHomePage = computed(() => router.currentRoute.value.path === '/');
  
      return {
        router,
        md,
        isHomePage,
      };
    },
  };
  </script>