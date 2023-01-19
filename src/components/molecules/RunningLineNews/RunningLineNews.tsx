import { useQuery } from 'react-query';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { Response } from './types';
import { Box } from '@mui/material';
import { useUi } from "../../../store/global/global.store";

const NEWS_API_URL = 'https://newsdata.io/api/1/news?apikey=pub_15839343dd08580ea22ecddeeef57e7991c94&q=news';

const fetchNews = async () => {
  const response = await fetch(
    NEWS_API_URL
  );

  const news =  await response.json() as Response;

  return news?.results[0].description;
};

const run = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

const RunningLineAnimation = styled('div')({
  display: 'inline-block',
  animation: `${run} 20s linear infinite`,
  whiteSpace: 'nowrap',
  paddingLeft: '100%',
});

const RunningLine = () => {
  const { data } = useQuery(['news'], fetchNews);
  const { data: { runningLine } } = useUi();

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 10,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {data && (
        <RunningLineAnimation>
          {runningLine && <Box sx={{ color: 'white' }}>{data}</Box>}
        </RunningLineAnimation>
      )}
    </Box>
  );
};

export { RunningLine }