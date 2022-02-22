import { Box } from '@components/ui/box';
import { Container } from '@components/ui/container';
import { Grid } from '@components/ui/grid';

const MockItem: React.FC<{ text: string }> = ({ text }) => {
  return <Box css={{ width: '100%', backgroundColor: '$blue500' }}>{text}</Box>;
};

const Index = () => {
  return (
    <Container maxWidth='lg' css={{ marginTop: '4rem' }}>
      <Grid container>
        <Grid sm={6} item>
          <MockItem text='1 of 2' />
        </Grid>
        <Grid sm={6} item>
          <MockItem text='2 of 2' />
        </Grid>
        <Grid sm={6} item>
          <MockItem text='1 of 3' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='2 of 3' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='3 of 3' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='1 of 4' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='2 of 4' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='3 of 4' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='4 of 4' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='1 of 3' />
        </Grid>
        <Grid sm={6} item>
          <MockItem text='2 of 3' />
        </Grid>
        <Grid sm={3} item>
          <MockItem text='3 of 3' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
