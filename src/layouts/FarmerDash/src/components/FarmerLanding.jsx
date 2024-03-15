import React from 'react'
import { faker } from '@faker-js/faker';

import { Grid } from '@mui/material'
import { Container } from '@mui/system'

import AppNewsUpdate from 'src/sections/overview/app-news-update'
import AppOrderTimeline from 'src/sections/overview/app-order-timeline'

import BasicTable from './table';


const FarmerLanding = () => (
    <Container maxWidth="xl">
        <Grid container spacing={4}>
        <Grid xs={12} md={6} lg={8} padding={2} style={{ maxHeight: '450px', overflowY: 'auto' }}>
          {/* <AppTasks
            title="Pending Clients"
            list={[
              { id: '1', name: 'Ramesh'  },
              { id: '2', name: 'Suresh' },
              { id: '3', name: 'Mahesh'  },
              { id: '4', name: 'Vishal'  },
              { id: '5', name: 'Mukesh' },
              { id: '6', name: 'Suresh' },
              { id: '7', name: 'Mahesh'  },
            ]}
          /> */}
          <BasicTable />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Past Clients"
            list={[...Array(3)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Darshan',
                'Alice',
                'Ram',
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