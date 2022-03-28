import {
    Box,
    Flex,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    VStack,
    useColorModeValue, Image
} from '@chakra-ui/core';
import { NavLink } from './nav-link';
import {
  Home,
  UserGroup,
  Folder,
  Calendar,
  Inbox,
  ChartSquareBar,
  LogoMark,
  LogoOnDark,
  Template,Logov1,
  ClipboardList,Menu
} from '../icons';
import React from "react";


const SidebarLink = ({ href, children, icon }) => (
  <NavLink href={href}>
    <Flex align="center">
      <Box as={icon} mr={3} w={6} />
      <Text fontSize="sm" fontWeight="medium">
        {children}
      </Text>
    </Flex>
  </NavLink>
);

function PageLinks() {
  return (
    <VStack w="full" spacing={1}>
      <SidebarLink href="/dashboard" icon={Home}>
        Dashboard
      </SidebarLink>
      <SidebarLink href="/dashboard/entrance" icon={UserGroup}>
        Entrance gate
      </SidebarLink>
      <SidebarLink href="/dashboard/exit" icon={Folder}>
        Exit gate
      </SidebarLink>
      <SidebarLink href="/dashboard/parkingspace" icon={Calendar}>
        Parking Space
      </SidebarLink>
      <SidebarLink href="/dashboard/reports" icon={ChartSquareBar}>
        Reports
      </SidebarLink>
        <SidebarLink href="/dashboard/settings" icon={Menu}>
            Settings
        </SidebarLink>
    </VStack>
  );
}

function SidebarContainer(props) {
  return (
    <Box
      as="aside"
      position="fixed"
      top={0}
      w={64}
      insexX={0}
      h="full"
      {...props}
    />
  );
}

export default function Sidebar(props) {
  const bgColor = useColorModeValue('white', 'gray.800');


  return (
    <SidebarContainer bg={bgColor}>
      <Flex w="full" align="center" h={70} p={3}>
        <Flex boxSize="full" align="center" px={3}>
          <Flex boxSize="full" align="center">
              <Image src={"/eparkinglogo.svg"} alt={""}
                     h={70}
                     w={"auto"}
              />

          </Flex>
        </Flex>
      </Flex>
      <VStack
        as="nav"
        aria-label="Main navigation"
        position="relative"
        h="calc(100vh - 4rem)"
        p={3}
        overflowY="auto"
        {...props}
      >
        <PageLinks />
      </VStack>
    </SidebarContainer>
  );
}
