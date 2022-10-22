import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import '../styles/Navbar.css'

export default function App() {
  const collapseItems = [
    "Inicio",
    "Tecnologias",
    "Projectos",
    "Contacto"
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">Homero Gelves</Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#home">Inicio</Navbar.Link>
          <Navbar.Link href="#tecnologies">Tecnologias</Navbar.Link>
          <Navbar.Link href="#projects">Projectos</Navbar.Link>
          <Navbar.Link href="#contact">Contacto</Navbar.Link>
        </Navbar.Content>
         <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">Version Beta.</Text>
        </Navbar.Brand>
          {/*<Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              // css={{
              //   color: index === collapseItems.length - 1 ? "$error" : "",
              // }}
              // isActive={index === 1}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
