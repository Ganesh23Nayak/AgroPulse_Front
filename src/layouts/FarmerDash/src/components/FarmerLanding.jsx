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
          
          {/* <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))} */}
              <AppNewsUpdate
          title="Farmer News Update"
          list={[
            {
              id: faker.string.uuid(),
              title: "Power farming: The onerous task of making agrivoltaics work",
              description: "Experts discuss the challenges and opportunities in implementing agrivoltaics for farmers.",
              image: "/assets/images/covers/cover_1.jpg",
              postedAt: faker.date.recent(),
            },
            {
              id: faker.string.uuid(),
              title: "India to swap 2.5m tonnes of conventional urea with nano urea in FY24: Minister",
              description: "Government plans to replace conventional urea with nano urea to boost agricultural productivity.",
              image: "/assets/images/covers/cover_2.jpg",
              postedAt: faker.date.recent(),
            },
            {
              id: faker.string.uuid(),
              title: "A crisis is brewing in Punjab and farmers know it",
              description: "Farmers in Punjab face a looming crisis, prompting discussions on potential solutions.",
              image: "/assets/images/covers/cover_3.jpg",
              postedAt: faker.date.recent(),
            },
            {
              id: faker.string.uuid(),
              title: "Sugar mills can now sell potash derived from molasses to fertiliser firms",
              description: "New regulations allow sugar mills to market potash derived from molasses, benefiting both mills and fertiliser companies.",
              image: "/assets/images/covers/cover_4.jpg",
              postedAt: faker.date.recent(),
            },
            {
              id: faker.string.uuid(),
              title: "'Committed to fulfill every resolution related to farmers’ welfare': PM Modi",
              description: "Prime Minister Modi reaffirms the government's dedication to addressing farmers' concerns and welfare.",
              image: "/assets/images/covers/cover_5.jpg",
              postedAt: faker.date.recent(),
            },
            {
              id: faker.string.uuid(),
              title: "MSP linked to crop diversification? Farmers will shift from paddy only when...",
              description: "Discussions arise regarding the role of Minimum Support Price (MSP) in encouraging crop diversification among farmers.",
              image: "/assets/images/covers/cover_6.jpg",
              postedAt: faker.date.recent(),
            },
          ]}
          />
        </Grid>

        
        </Grid>
            
    </Container>
    
  )

export default FarmerLanding