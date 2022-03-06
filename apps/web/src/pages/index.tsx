import { IoIosAdd, IoMdHeart, IoMdCamera, IoMdLock } from 'react-icons/io';

import { Box } from '@components/ui/box';
import { Button } from '@components/ui/button';
import { Container } from '@components/ui/container';
import { Grid } from '@components/ui/grid';
import { Space } from '@components/ui/space';
import { Loading } from '@components/ui/loading';

const MockItem: React.FC<{ text: string }> = ({ text }) => {
  return <Box css={{ width: '100%', backgroundColor: '$blue500' }}>{text}</Box>;
};

const Index = () => {
  return (
    <Container maxWidth='lg' css={{ marginTop: '4rem' }}>
      <Grid container>
        <Grid md={4} item>
          <Space direction='vertical'>
            <Button size='xs'>Mini</Button>
            <Button size='sm'>Small</Button>
            <Button size='md'>Medium</Button>
            <Button size='lg'>Large</Button>
            <Button size='xl'>XLarge</Button>
          </Space>
        </Grid>
        <Grid md={8} item>
          <Space direction='horizontal'>
            <Button>Primary</Button>
            <Button color='secondary'>Secondary</Button>
            <Button color='warning'>Warning</Button>
            <Button color='error'>Error</Button>
            <Button color='success'>Success</Button>
            <Button color='gradient'>gradient</Button>
            <Button disabled>disabled</Button>
          </Space>

          <Space style={{ marginTop: '2rem' }} direction='horizontal'>
            <Button outline>Primary</Button>
            <Button outline color='secondary'>
              Secondary
            </Button>
            <Button outline color='warning'>
              Warning
            </Button>
            <Button outline color='error'>
              Error
            </Button>
            <Button outline color='success'>
              Success
            </Button>
          </Space>
          <Space style={{ marginTop: '2rem' }} direction='horizontal'>
            <Button ghost>Primary</Button>
            <Button ghost color='secondary'>
              Secondary
            </Button>
            <Button ghost color='warning'>
              Warning
            </Button>
            <Button ghost color='error'>
              Error
            </Button>
            <Button ghost color='success'>
              Success
            </Button>
          </Space>
          <Space style={{ marginTop: '2rem' }} direction='horizontal'>
            <Button loading>Primary</Button>
            <Button loading color='secondary'>
              Secondary
            </Button>
            <Button loading color='warning'>
              Warning
            </Button>
            <Button loading color='error'>
              Error
            </Button>
            <Button loading color='success'>
              Success
            </Button>
            <Button loading disabled>
              disabled
            </Button>
          </Space>
          <Space style={{ marginTop: '2rem' }} direction='horizontal'>
            <Button light>Primary</Button>
            <Button light color='secondary'>
              Secondary
            </Button>
            <Button light color='warning'>
              Warning
            </Button>
            <Button light color='error'>
              Error
            </Button>
            <Button light color='success'>
              Success
            </Button>
          </Space>
          <Space style={{ marginTop: '2rem' }} direction='horizontal'>
            <Button color='error' auto icon={<IoMdHeart size={24} />} />
            <Button iconRight={<IoMdCamera size={24} />}>Take a photo</Button>
            <Button auto color='success' icon={<IoMdLock size={24} />}>
              Lock
            </Button>
          </Space>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
