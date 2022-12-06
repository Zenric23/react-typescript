import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Text, SimpleGrid, Container, Card, Image, Badge, Button, Group } from '@mantine/core'
import UserCardImage from './components/ui/UserCardImage'
import FeatureWithCard from './components/ui/FeatureWithCard'

function App() {

  const UserCardImageData = {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    avatar: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Headbanger",
    job: "Fullstack engineer",
    stats: [
      {
        value: "34K",
        label: "Followers"
      },
      {
        value: "187",
        label: "Follows"
      },
      {
        value: "1.6K",
        label: "Posts"
      }
    ]
  }

  return (
    <>
      <FeatureWithCard />
    <div>
      <Container size={'lg'}>
      <SimpleGrid
          mt={'xl'}
          cols={1}
          spacing={24}
          breakpoints={[
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 3 },
            { minWidth: 'xl', cols: 4 },
          ]}
          >
          {
            [...new Array(5)].map((item, i) => (
              <UserCardImage key={i} {...UserCardImageData} />
            ))
          }
        </SimpleGrid>
        <SimpleGrid
          mt={'xl'}
          cols={1}
          spacing='xl'
          breakpoints={[
            { minWidth: 'md', cols: 2, spacing: 'md' },
            { minWidth: 'lg', cols: 4, spacing: 'md' },
          ]}
        >
          {
            [...new Array(5)].map((item, i: number) => (
              <Card
                key={i}
                shadow='sm'
                >
                <Card.Section>
                  <Image 
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="no way!"
                    />
                </Card.Section>
                
                <Group position='apart' mb={'xs'} mt={'md'}>
                  <Text weight={500}>
                    You&apos;ve won a million dollars in cash!
                  </Text>
                  <Badge size='md' color={'pink'} variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size={'sm'} color={'dimmed'}>
                  Please click anywhere on this card to claim your reward, this is not a fraud, trust us
                </Text>

                <Button variant='light' mt={'md'} fullWidth radius={'md'}>
                  Book classic tour now
                </Button>

              </Card>
            ))
          }
        </SimpleGrid>
      </Container>
    </div>
                    </>
  )
}

export default App
