import React from 'react'
import { faker } from '@faker-js/faker';

import { Grid } from '@mui/material'
import { Container } from '@mui/system'

import AppTasks from 'src/sections/overview/app-tasks'
import AppNewsUpdate from 'src/sections/overview/app-news-update'
import AppOrderTimeline from 'src/sections/overview/app-order-timeline'

const FarmerLanding = () => (
    <Container maxWidth="xl">
        <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
           =
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
        <Grid xs={12} md={6} lg={8}>
          
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>
        </Grid>

    </Container>
    
  )

export default FarmerLanding