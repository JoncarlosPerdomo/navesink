import {
  Anchor,
  AppShell,
  Aside,
  Burger,
  Footer,
  Header,
  MediaQuery,
  Navbar,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import useStyles from './Welcome.styles';

export function Welcome() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Title className={classes.title} align="center" mt={100}>
          Welcome to{' '}
          <Text inherit variant="gradient" component="span">
            Navesink
          </Text>
        </Title>
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow{' '}
          <Anchor href="https://mantine.dev/guides/next/" size="lg">
            this guide
          </Anchor>
          . To get started edit index.tsx file.
        </Text>
      </AppShell>
    </>
  );
}
