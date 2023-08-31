import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../context/ui';
import { NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - Open Jira'>
      <Grid container spacing={1}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />

            <CardContent>
              {/* Agregar una nueva entrada */}

              {/* Listados de las Entradas */}
              <NewEntry />
              <EntryList status={'pending'} />

            </CardContent>


          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            <CardContent>
              {/* Agregar una nueva entrada */}

              {/* Listados de las Entradas */}
              <EntryList status={'in-progress'} />

            </CardContent>

          </Card>

        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Terminadas' />

            <CardContent>
              {/* Agregar una nueva entrada */}

              {/* Listados de las Entradas */}
              <EntryList status={'finished'} />

            </CardContent>
          </Card>

        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage;
