import { IoIosAdd, IoMdHeart, IoMdCamera, IoMdLock } from 'react-icons/io';

import { Box } from '@components/ui/box';
import { Button } from '@components/ui/button';
import { Container } from '@components/ui/container';
import { Grid } from '@components/ui/grid';
import { Space } from '@components/ui/space';
import { Loading } from '@components/ui/loading';
import { Avatar } from '@components/ui/avatar';

const MockItem: React.FC<{ text: string }> = ({ text }) => {
  return <Box css={{ width: '100%', backgroundColor: '$blue500' }}>{text}</Box>;
};

const Index = () => {
  return (
    <Container maxWidth='lg' css={{ marginTop: '4rem' }}>
      <Grid container>
        <Grid item md={12}>
          <Space>
            <Avatar size='xs' text='JR' />
            <Avatar size='sm' src='https://nextui.org/avatars/avatar-2.png' />
            <Avatar size='md' text='Joe' />
            <Avatar size='lg' src='https://nextui.org/avatars/avatar-3.png' />
            <Avatar size='xl' text='John' />
          </Space>
        </Grid>
        <Grid item md={12}>
          <Space>
            <Avatar square size='xs' />
            <Avatar square size='sm' />
            <Avatar square size='md' />
            <Avatar square size='lg' />
            <Avatar square size='xl' />
          </Space>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
