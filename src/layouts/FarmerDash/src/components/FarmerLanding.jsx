import React from 'react'
import { faker } from '@faker-js/faker';

import { Grid } from '@mui/material'
import { Container } from '@mui/system'

import AppTasks from 'src/sections/overview/app-tasks'
import AppNewsUpdate from 'src/sections/overview/app-news-update'
import AppOrderTimeline from 'src/sections/overview/app-order-timeline'

const FarmerLanding = () => (
    <Container maxWidth="xl">
        <Grid container spacing={4}>
        <Grid xs={12} md={6} lg={8} padding={2} style={{ maxHeight: '450px', overflowY: 'auto' }}>
          <AppTasks
            title="Present Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Past Task"
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


        <Grid xs={12} md={6} lg={15} mt={5}>
          
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

        
        </Grid>

    </Container>
    
  )

export default FarmerLanding