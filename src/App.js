import React from 'react';
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Have leftover food? <br />
            <Text as={'span'} color={"#179c17"}>
              donate it!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Have too much food to deal with? 
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'#179c17'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#00bb00',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </> 
  );
}

export default App;
