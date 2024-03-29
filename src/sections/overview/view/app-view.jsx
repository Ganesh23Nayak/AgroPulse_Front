// import Iconify from 'src/components/iconify';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
 
// import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
// import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {

//   function generateDates(startIndex = 0, endDate = new Date()) {
//     const startingDate = new Date(2023, 0, 1); // Month index starts from 0, so January is 0
//     const pastDate = faker.date.between(startingDate, endDate);

//     const isValidDate = pastDate < endDate;
//     if (isValidDate) {
//         return [pastDate, ...generateDates(startIndex + 1, endDate)];
//     }
//     return [];
// }
  return (
    <Container maxWidth="xl" className='dashimg' sx={{pt:4}}>
      
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Farm Health"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AppWidgetSummary
            title="Predicted Current Returns"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Weather Data"
            subheader=""
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Crop Split Up"
            chart={{
              series: [
                { label: 'Potato', value: 4344 },
                { label: 'Paddy', value: 5435 },
                { label: 'Tomato', value: 1443 },
                { label: 'Onion', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
        <AppConversionRates
  title="Conversion Rates"
  subheader="(+43%) than last year"
  chart={{
    series: [
                {
                  district: "Tumkur",
                  market: "Tumkur",
                  variety: "Sona",
                  modal_price: 2050
                },
                {
                  district: "Tumkur",
                  market: "Tumkur",
                  variety: "Paddy",
                  modal_price: 1700
                },
                {
                  district: "Shimoga",
                  market: "Sorabha",
                  variety: "Paddy",
                  modal_price: 2250
                },
                {
                  district: "Raichur",
                  market: "Sindhanur",
                  variety: "Sona",
                  modal_price: 1800
                },
                {
                  district: "Raichur",
                  market: "Raichur",
                  variety: "Rajahamsa",
                  modal_price: 1885
                },
                {
                  district: "Belgaum",
                  market: "Nandagada",
                  variety: "Paddy",
                  modal_price: 2200
                },
                {
                  district: "Mysore",
                  market: "Mysore (Bandipalya)",
                  variety: "Paddy",
                  modal_price: 2602
                },
                {
                  district: "Karwar(Uttar Kannad)",
                  market: "Mundgod",
                  variety: "Sanna Bhatta",
                  modal_price: 2600
                },
                {
                  district: "Tumkur",
                  market: "Madhugiri",
                  variety: "Hansa",
                  modal_price: 2250
                },
                {
                  district: "Raichur",
                  market: "Lingasugur",
                  variety: "Sona Mahsuri",
                  modal_price: 3100
                },
                {
                  district: "Koppal",
                  market: "Kustagi",
                  variety: "Paddy",
                  modal_price: 2300
                },
                {
                  district: "Kalburgi",
                  market: "Kalburgi",
                  variety: "Paddy",
                  modal_price: 2850
                },
                {
                  district: "Mysore",
                  market: "K.R.Nagar",
                  variety: "Paddy Dappa",
                  modal_price: 2200
                },
                {
                  district: "Mysore",
                  market: "K.R.Nagar",
                  variety: "Paddy Medium",
                  modal_price: 2355
                },
                {
                  district: "Davangere",
                  market: "Harihara",
                  variety: "Sona",
                  modal_price: 2500
                },
                {
                  district: "Karwar(Uttar Kannad)",
                  market: "Haliyala",
                  variety: "Paddy Medium",
                  modal_price: 2400
                },
                {
                  district: "Koppal",
                  market: "Gangavathi",
                  variety: "I.R. 64",
                  modal_price: 2193
                },
                {
                  district: "Davangere",
                  market: "Davangere",
                  variety: "Paddy Medium",
                  modal_price: 3060
                },
                {
                  district: "Chikmagalur",
                  market: "Chikkamagalore",
                  variety: "Paddy fine",
                  modal_price: 2650
                },
                {
                  district: "Shimoga",
                  market: "Bhadravathi",
                  variety: "Sanna Bhatta",
                  modal_price: 3160
                },
                {
                  district: "Shimoga",
                  market: "Bhadravathi",
                  variety: "Paddy Medium",
                  modal_price: 2759
                },
                {
                  district: "Hassan",
                  market: "Belur",
                  variety: "Paddy",
                  modal_price: 2500
                },
                {
                  district: "Bellary",
                  market: "Bellary",
                  variety: "Sona",
                  modal_price: 2883
                },
                {
                  district: "Bellary",
                  market: "Bellary",
                  variety: "Paddy Medium",
                  modal_price: 1821
                },
                {
                  district: "Bellary",
                  market: "Bellary",
                  variety: "Paddy fine",
                  modal_price: 2016
                },
                {
                  district: "Mangalore(Dakshin Kannad)",
                  market: "Bantwala",
                  variety: "Jaya",
                  modal_price: 2300
                },
                {
                  district: "Kolar",
                  market: "Bangarpet",
                  variety: "Paddy Medium",
                  modal_price: 2400
                },
                {
                  district: "Bangalore",
                  market: "Bangalore",
                  variety: "Paddy",
                  modal_price: 3000
                }
              ]
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Farm Health factors"
            chart={{
              categories: ['E Conductivity', 'W Depth', 'W Temperature', 'Soil PH', 'q', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8} paddingBottom={5}>
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
                'Payout completed, ₹31,000 deposited',
                'Harvested Paddy',
                'Fertilizers Applied to farm',
                'Completed Sowing',
                'Subscription initiated',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        

        
      </Grid>
    </Container>
  );
}
